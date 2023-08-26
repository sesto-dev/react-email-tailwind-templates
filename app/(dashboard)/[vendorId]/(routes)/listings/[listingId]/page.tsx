import prisma from "@/lib/prisma";

import { ListingForm } from "./components/listing-form";

const ListingPage = async ({
  params,
}: {
  params: { listingId: string; vendorId: string };
}) => {
  const listing = await prisma.listing.findUnique({
    where: {
      id: params.listingId,
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

  const categories = await prisma.category.findMany({});

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ListingForm categories={categories} initialData={listing} />
      </div>
    </div>
  );
};

export default ListingPage;
