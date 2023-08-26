import prisma from "@/lib/prisma";

export const getTotalRevenue = async (vendorId: string) => {
  const paidOrders = await prisma.order.findMany({
    where: {
      vendors: { some: { id: vendorId } },
      isPaid: true,
    },
    include: {
      items: {
        include: {
          subproduct: { include: { product: true } },
        },
      },
    },
  });

  const totalRevenue = paidOrders.reduce((total, order) => {
    const orderTotal = order.items.reduce((orderSum, item) => {
      return orderSum + item.price;
    }, 0);
    return total + orderTotal;
  }, 0);

  return totalRevenue;
};
