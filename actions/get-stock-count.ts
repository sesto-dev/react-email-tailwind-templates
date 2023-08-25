import prismadb from "@/lib/prisma";

export const getStockCount = async (vendorId: string) => {
  const stockCount = await prismadb.vendorProduct.count({
    where: {
      vendorId,
      isAvailable: true,
    },
  });

  return stockCount;
};
