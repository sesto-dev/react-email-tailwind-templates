import { NextApiRequest, NextApiResponse } from 'next'

import prisma from 'lib/prisma'
import { gateJWT } from 'lib/gateway'

export default async function (req: NextApiRequest, res: NextApiResponse) {
	const { isEmailSubscribed } = req.body

	if (!isEmailSubscribed) {
		return res.status(400).json({
			Success: false,
			Message: 'Invalid input...',
		})
	}

	const user = await gateJWT(req, res)

	if (user) {
		await prisma.user.update({
			where: {
				// @ts-ignore
				id: user.id.toString(),
			},
			data: {
				isEmailSubscribed,
			},
		})

		return res.status(200).json({
			Success: true,
			Message: 'Email Subscription successfully modified.',
		})
	} else {
		return res.status(401).json({
			Success: false,
			Message: 'Invalid code.',
		})
	}
}
