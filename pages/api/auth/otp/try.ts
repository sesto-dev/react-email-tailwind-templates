import type { NextApiRequest, NextApiResponse } from 'next'

import sendVerifyMail from '@/lib/mail/sendVerifyMail'
import prisma from '@/lib/prisma'
import { createSerialNumber } from '@/lib/serial'

export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const OTP = createSerialNumber({ batch: 1 })

		const { email } = JSON.parse(req.body)

		console.log({ body: req.body, email })

		const foundUser = await prisma.user.findUnique({
			where: { email },
		})

		if (foundUser) {
			await prisma.user.update({
				where: {
					email,
				},
				data: {
					OTP,
				},
			})
		}

		if (!foundUser) {
			await prisma.user.create({
				data: {
					email,
					OTP,
				},
			})
		}

		await sendVerifyMail({
			name: process.env.name,
			to: email,
			email_verification_code: OTP,
			unsubscribe_url: process.env.unsubscribe_url,
			verify_url: process.env.verify_url,
		})

		return res.status(200).json({
			email,
		})
	} catch (error) {
		console.log({ error })
		return res.status(400)
	}
}
