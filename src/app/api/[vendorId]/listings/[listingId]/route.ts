import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { listingId: string } }
) {
  try {
    if (!params.listingId) {
      return new NextResponse("Listing id is required", { status: 400 });
    }

    const listing = await prisma.listing.findUniqueOrThrow({
      where: {
        id: params.listingId,
      },
    });

    return NextResponse.json(listing);
  } catch (error) {
    console.error("[LISTING_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { listingId: string; vendorId: string } }
) {
  try {
    const storeByUserId = await prisma.vendor.findFirst({});

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const listing = await prisma.listing.delete({
      where: {
        id: params.listingId,
      },
    });

    return NextResponse.json(listing);
  } catch (error) {
    console.error("[LISTING_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { listingId: string; vendorId: string } }
) {
  try {
    const body = await req.json();

    const { title } = body;

    const vendor = await prisma.vendor.findFirst({});

    if (!vendor) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    await prisma.listing.findFirst({});

    const listing = await prisma.listing.findFirst({});

    return NextResponse.json(listing);
  } catch (error) {
    console.error("[LISTING_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
