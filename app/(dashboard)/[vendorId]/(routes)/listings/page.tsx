import { format } from "date-fns";

import prisma from "@/lib/prisma";
import { formatter } from "@/lib/utils";

import { ListingsClient } from "./components/client";
import { ListingColumn } from "./components/columns";

const ListingsPage = async ({ params }: { params: { vendorId: string } }) => {
  const listings = await prisma.listing.findMany({
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

  const formattedVendorVariants: ListingColumn[] = listings.map((item) => ({
    id: item.id,
    title: item.subproduct.title,
    price: formatter.format(item.price),
    category: item.subproduct.product.categories[0].title,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ListingsClient data={formattedVendorVariants} />
      </div>
    </div>
  );
};

export default ListingsPage;
