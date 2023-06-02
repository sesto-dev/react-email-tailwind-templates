import type { NextApiRequest, NextApiResponse } from "next"

import bakeCookie from "~lib/cookie"
import { signJWT } from "~lib/jwt"
import { getGoogleTokens, getGoogleUser } from "~lib/oauth/google"
import prisma from "~lib/prisma"
import { createSerialNumber } from "~lib/serial"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { id_token, access_token } = await getGoogleTokens({
    code: req.query.code
  })

  if (!id_token || !access_token) {
    return res.redirect(502, "/")
  }

  const googleUserResponse = await getGoogleUser({
    id_token,
    access_token
  })

  const { id, email, name, picture } = googleUserResponse

  if (!email) {
    return res.redirect(502, "/")
  }

  const exists = await prisma.user.findUnique({
    where: { email }
  })

  if (exists) {
    const AJWT = await bakeCookie({
      name: "AJWT",
      content: await signJWT({
        id: exists.id,
        secret: process.env.ACCESS_TOKEN_SECRET,
        expiresIn: "15m"
      }),
      sameSite: "Lax"
    })

    return res.setHeader("Set-Cookie", AJWT).redirect(302, "/")
  }

  if (!exists) {
    const referralCode = await createSerialNumber({ batch: 3 })

    const user = await prisma.user.create({
      data: {
        email,
        name,
        referralCode,
        picture
      }
    })

    if (user) {
      const AJWT = await bakeCookie({
        name: "AJWT",
        content: await signJWT({
          id: exists.id,
          secret: process.env.ACCESS_TOKEN_SECRET,
          expiresIn: "15m"
        }),
        sameSite: "Lax"
      })

      return res.setHeader("Set-Cookie", AJWT).redirect(302, "/user")
    } else {
      console.log("Google Authentication Unsuccessful.")
      return res.redirect(302, "/auth/error")
    }
  }
}
