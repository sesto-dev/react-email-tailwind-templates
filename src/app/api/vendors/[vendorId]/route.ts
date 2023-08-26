import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: { vendorId: string } }
) {
  try {
    const body = await req.json();

    const store = await prisma.vendor.findMany({});

    return NextResponse.json(store);
  } catch (error) {
    console.error("[STORE_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
