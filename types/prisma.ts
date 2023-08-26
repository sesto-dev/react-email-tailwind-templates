import { Prisma } from "@prisma/client";

export type CartItemWithVendorVariant = Prisma.CartItemGetPayload<{
  include: {
    listing: {
      include: { subproduct: { include: { product: true } } };
    };
  };
}>;

export type ProductWithAllVariants = Prisma.ProductGetPayload<{
  include: {
    categories: true;
    brand: true;
    subproducts: {
      include: { listings: true };
    };
  };
}>;

export type ListingWithAllSupersets = Prisma.ListingGetPayload<{
  include: {
    subproduct: {
      include: {
        product: {
          include: {
            brand: true;
            categories: true;
          };
        };
      };
    };
  };
}>;
