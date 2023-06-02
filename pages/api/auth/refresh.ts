import jwt from "jsonwebtoken"
import type { NextApiRequest, NextApiResponse } from "next"

import { handleError } from "~lib/error"
import { signJWT, verifyAndGetJWTPayload } from "~lib/jwt"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const AuthHeader = req.headers["authorization"]
    const RefreshToken =
      AuthHeader && AuthHeader.startsWith("Bearer ")
        ? AuthHeader.split(" ")[1]
        : null

    if (RefreshToken == null) return res.status(401)

    const { id } = jwt.decode(RefreshToken)

    if (id) {
      return res.json({
        AccessToken: await signJWT({
          id,
          secret: process.env.ACCESS_TOKEN_SECRET,
          expiresIn: "15m"
        })
      })
    } else {
      return res.status(401)
    }
  } catch (error) {
    await handleError({ error, comment: "[Server] Error refreshing token" })
    return res.status(400).json({ error })
  }
}
