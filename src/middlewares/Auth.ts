import { getErrorResponse } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

const Auth = (handler) => async (req: NextRequest, res: NextResponse) => {
  const userId = req.headers.get("X-USER-ID");

  if (!userId) {
    return getErrorResponse(
      401,
      "You are not logged in, please provide token to gain access"
    );
  }

  return handler(req, res);
};

export default Auth;
