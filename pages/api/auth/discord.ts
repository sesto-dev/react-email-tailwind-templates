import type { NextApiRequest, NextApiResponse } from "next"

import { signJWT } from "~lib/jwt"
import { getDiscordTokens, getDiscordUser } from "~lib/oauth/discord"
import prisma from "~lib/prisma"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    let returnId

    const { access_token } = await getDiscordTokens({
      code: req.query.code
    })

    if (!access_token) {
      console.log("No Access Token...")
      return res.status(400)
    }

    const { id, username, avatar, email } = await getDiscordUser({
      access_token
    })

    const foundUser = await prisma.user.findUnique({
      where: { email }
    })

    if (foundUser) returnId = foundUser.id

    if (!foundUser) {
      const user = await prisma.user.create({
        data: {
          email
        }
      })

      if (user) {
        returnId = user.id
      } else {
        return res.redirect(302, "/error")
      }
    }

    return res.json({
      AccessToken: await signJWT({
        id: returnId,
        secret: process.env.ACCESS_TOKEN_SECRET,
        expiresIn: "15m"
      }),
      RefreshToken: await signJWT({
        id: returnId,
        secret: process.env.REFRESH_TOKEN_SECRET,
        expiresIn: "30d"
      })
    })
  } catch (error) {
    console.log({ error })
    return res.redirect(302, "/error")
  }
}
