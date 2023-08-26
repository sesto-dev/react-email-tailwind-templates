import prisma from "@/lib/prisma";

export const getSalesCount = async (vendorId: string) => {
  const salesCount = await prisma.order.count({
    where: {
      vendors: { some: { id: vendorId } },
      isPaid: true,
    },
  });

  return salesCount;
};
