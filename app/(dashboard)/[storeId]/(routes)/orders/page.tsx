import { format } from "date-fns";

import prismadb from "@/lib/prisma";
import { formatter } from "@/lib/utils";

import type { OrderColumn } from "./components/columns";
import { OrderClient } from "./components/client";

const OrdersPage = async ({ params }: { params: { storeId: string } }) => {
  const orders = await prismadb.order.findMany({
    where: {
      vendors: { some: { id: params.storeId } },
    },
    include: {
      items: {
        include: {
          subproduct: { include: { product: true } },
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedOrders: OrderColumn[] = orders.map((order) => ({
    id: order.id,
    products: order.items
      .map((vendorProduct) => vendorProduct.subproduct.title)
      .join(", "),
    totalPrice: formatter.format(
      order.items.reduce((total, item) => {
        return total + Number(item.price);
      }, 0)
    ),
    isPaid: order.isPaid,
    createdAt: format(order.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <OrderClient data={formattedOrders} />
      </div>
    </div>
  );
};

export default OrdersPage;
