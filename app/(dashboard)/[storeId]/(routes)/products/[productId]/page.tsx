import prismadb from "@/lib/prisma";

import { ProductForm } from "./components/product-form";

const ProductPage = async ({
  params,
}: {
  params: { id: string; storeId: string };
}) => {
  const product = await prismadb.vendorProduct.findUnique({
    where: {
      id: params.id,
    },
    include: {
      subproduct: {
        include: {
          product: {
            include: {
              categories: true,
            },
          },
        },
      },
    },
  });

  const categories = await prismadb.category.findMany({});

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm categories={categories} initialData={product} />
      </div>
    </div>
  );
};

export default ProductPage;
