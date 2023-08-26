import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import { getErrorResponse } from "@/lib/utils";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const userId = req.headers.get("X-USER-ID");

    if (!userId) {
      return getErrorResponse(
        401,
        "You are not logged in, please provide token to gain access."
      );
    }

    const body = await req.json();

    const { title } = body;

    const vendor = await prisma.vendor.create({
      data: {
        userId,
        title,
      },
    });

    return NextResponse.json(vendor);
  } catch (error) {
    console.error("[STORES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
