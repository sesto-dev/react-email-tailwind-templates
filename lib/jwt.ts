import jwt from 'jsonwebtoken'

import { handleError } from '@/lib/error'
import { NextRequest, NextResponse } from 'next/server'

export async function signJWT({
	id,
	secret,
	expiresIn,
}: {
	id: string
	secret: string
	expiresIn: string
}) {
	return jwt.sign(
		{
			id,
		},
		secret,
		{ expiresIn }
	)
}

export async function verifyAndGetJWTPayload({
	token,
	secret,
}: {
	token: string
	secret: string
}) {
	try {
		return jwt.verify(token, secret)
	} catch (error) {
		await handleError({ error, comment: "Can't verify..." })
		return { id: null }
	}
}

export async function protectRoute({ req, res }) {
	try {
		const authHeader = req.headers.get('authorization')
		const token =
			authHeader && authHeader.startsWith('Bearer ')
				? authHeader.split(' ')[1]
				: null

		if (token == null) return res.status(401)

		return await verifyAndGetJWTPayload({
			token,
			secret: process.env.ACCESS_TOKEN_SECRET,
		})
	} catch (error) {
		await handleError({ error, comment: 'Forbidden' })
		return null
	}
}
