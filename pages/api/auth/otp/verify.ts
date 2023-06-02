import type { NextApiRequest, NextApiResponse } from "next"

import { signJWT } from "~lib/jwt"
import prisma from "~lib/prisma"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, OTP } = JSON.parse(req.body)

    const { id, OTP: foundUserOTP } = await prisma.user.findUnique({
      where: { email }
    })

    if (OTP === foundUserOTP) {
      return res.json({
        Email: email,
        AccessToken: await signJWT({
          id,
          secret: process.env.ACCESS_TOKEN_SECRET,
          expiresIn: "15m"
        }),
        RefreshToken: await signJWT({
          id,
          secret: process.env.REFRESH_TOKEN_SECRET,
          expiresIn: "30d"
        })
      })
    } else {
      return res.status(401)
    }
  } catch (error) {
    console.log({ error })
    return res.status(401)
  }
}
