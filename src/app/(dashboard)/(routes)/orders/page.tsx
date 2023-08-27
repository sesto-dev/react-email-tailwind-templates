import { format } from "date-fns";

import prisma from "@/lib/prisma";
import { formatter } from "@/lib/utils";

import type { OrderColumn } from "./components/columns";
import { OrderClient } from "./components/client";

const OrdersPage = async () => {
  const orders = await prisma.order.findMany({
    where: {},
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedOrders: OrderColumn[] = orders.map((order) => ({
    id: order.id,
    products: order.orderItems.map((item) => item.product.title).join(", "),
    totalPrice: formatter.format(
      order.orderItems.reduce((total, item) => {
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
