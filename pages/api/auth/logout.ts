import { NextApiRequest, NextApiResponse } from 'next'

export default function (req: NextApiRequest, res: NextApiResponse) {
	return res
		.setHeader(
			'Set-Cookie',
			'AJWT=; Max-Age=0; SameSite=Strict; HttpOnly; Path=/'
		)
		.status(200)
		.json({
			Success: true,
			Message: 'Successfully logged out...',
		})
}
