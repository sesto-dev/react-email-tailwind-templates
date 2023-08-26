import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
    if (!params.productId) {
      return new NextResponse("Product id is required", { status: 400 });
    }

    const product = await prisma.product.findFirst({});

    return NextResponse.json(product);
  } catch (error) {
    console.error("[PRODUCT_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { productId: string; vendorId: string } }
) {
  try {
    const storeByUserId = await prisma.vendor.findFirst({});

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const product = await prisma.product.delete({
      where: {
        id: params.productId,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error("[PRODUCT_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { productId: string; vendorId: string } }
) {
  try {
    const body = await req.json();

    const { title } = body;

    const storeByUserId = await prisma.vendor.findFirst({});

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    await prisma.product.findFirst({});

    const product = await prisma.product.findFirst({});

    return NextResponse.json(product);
  } catch (error) {
    console.error("[PRODUCT_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
