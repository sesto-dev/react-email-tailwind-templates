import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const userId = req.headers.get("X-USER-ID");

    console.log({ userId });

    const { title } = await req.json();

    const vendor = await prisma.vendor.findUnique({
      where: {
        userId,
        title,
      },
    });

    if (!vendor) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const listings = await prisma.listing.findMany({
      where: {
        vendorId: vendor.id,
      },
    });

    return NextResponse.json(listings);
  } catch (error) {
    console.error("[LISTINGS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { vendorId: string } }
) {
  try {
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get("categoryId") || undefined;
    const isFeatured = searchParams.get("isFeatured");

    if (!params.vendorId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const listings = await prisma.listing.findMany({
      where: {
        vendorId: params.vendorId,
      },
    });

    return NextResponse.json(listings);
  } catch (error) {
    console.error("[LISTINGS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
