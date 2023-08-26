import { Prisma } from "@prisma/client";

export type CartItemWithVendorVariant = Prisma.CartItemGetPayload<{
  include: {
    vendorProduct: {
      include: { subproduct: { include: { product: true } } };
    };
  };
}>;

export type ProductWithAllVariants = Prisma.ProductGetPayload<{
  include: {
    categories: true;
    brand: true;
    subproducts: {
      include: { vendorProducts: true };
    };
  };
}>;

export type VendorProductWithAllSupersets = Prisma.VendorProductGetPayload<{
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
