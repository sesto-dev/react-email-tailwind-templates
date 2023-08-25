import { format } from "date-fns";

import prismadb from "@/lib/prisma";
import { formatter } from "@/lib/utils";

import { ProductsClient } from "./components/client";
import { ProductColumn } from "./components/columns";

const ProductsPage = async ({ params }: { params: { vendorId: string } }) => {
  const vendorVariants = await prismadb.vendorProduct.findMany({
    where: {
      vendorId: params.vendorId,
    },
    include: {
      subproduct: {
        include: { product: { include: { categories: true } } },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedVendorVariants: ProductColumn[] = vendorVariants.map(
    (item) => ({
      id: item.id,
      title: item.subproduct.title,
      price: formatter.format(item.price),
      category: item.subproduct.product.categories[0].title,
      createdAt: format(item.createdAt, "MMMM do, yyyy"),
    })
  );

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductsClient data={formattedVendorVariants} />
      </div>
    </div>
  );
};

export default ProductsPage;
