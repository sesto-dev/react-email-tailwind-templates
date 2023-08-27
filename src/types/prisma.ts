import { Prisma } from "@prisma/client";

export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: {
    product: {
      include: {
        brand: true;
        categories: true;
      };
    };
  };
}>;

export type ProductWithIncludes = Prisma.ProductGetPayload<{
  include: {
    brand: true;
    categories: true;
  };
}>;
