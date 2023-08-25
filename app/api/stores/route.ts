import { NextResponse } from "next/server";

import prismadb from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const store = await prismadb.vendor.findFirst({});

    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
