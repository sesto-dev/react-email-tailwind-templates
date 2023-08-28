import { getErrorResponse } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

const Auth = (handler) => async (req: NextRequest, res: NextResponse) => {
  const userId = req.headers.get("X-USER-ID");

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  return handler(req, res);
};

export default Auth;
