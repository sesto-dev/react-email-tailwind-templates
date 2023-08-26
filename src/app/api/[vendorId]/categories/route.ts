import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function POST(
  req: Request,
  { params }: { params: { vendorId: string } }
) {
  try {
    const body = await req.json();

    const { name, billboardId } = body;

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!billboardId) {
      return new NextResponse("Billboard ID is required", { status: 400 });
    }

    if (!params.vendorId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const storeByUserId = await prisma.vendor.findFirst({});

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const category = await prisma.category.findFirst({});

    return NextResponse.json(category);
  } catch (error) {
    console.error("[CATEGORIES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { vendorId: string } }
) {
  try {
    if (!params.vendorId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const categories = await prisma.category.findFirst({});

    return NextResponse.json(categories);
  } catch (error) {
    console.error("[CATEGORIES_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
