import prisma from "@/lib/prisma";

export const getStockCount = async (vendorId: string) => {
  const stockCount = await prisma.listing.count({
    where: {
      vendorId,
      isAvailable: true,
    },
  });

  return stockCount;
};
