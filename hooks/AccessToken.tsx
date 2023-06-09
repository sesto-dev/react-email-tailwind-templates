import jwt from 'jsonwebtoken'
import { useEffect, useState } from 'react'

import { handleError } from '@/lib/error'

async function fetchData({
	exp,
	RefreshToken,
	setReturnAccessToken,
	AccessToken,
}) {
	if (exp < Math.floor(new Date().getTime() / 1000)) {
		const response = await fetch(`/api/auth/refresh`, {
			headers: {
				Authorization: `Bearer ${RefreshToken}`,
			},
		})

		const { AccessToken: RefreshedAccessToken } = await response.json()

		if (RefreshedAccessToken && RefreshedAccessToken !== undefined) {
			window.localStorage.setItem('AccessToken', RefreshedAccessToken)

			setReturnAccessToken(RefreshedAccessToken)
		}
	} else {
		setReturnAccessToken(AccessToken)
	}
}

export function useValidAccessToken() {
	try {
		const [returnAccessToken, setReturnAccessToken] = useState(null)
		let AccessToken: string, RefreshToken: string

		useEffect(() => {
			if (typeof window !== 'undefined' && window.localStorage) {
				AccessToken = window.localStorage.getItem('AccessToken')
				RefreshToken = window.localStorage.getItem('RefreshToken')

				if (
					AccessToken &&
					RefreshToken &&
					AccessToken !== undefined &&
					RefreshToken !== undefined
				) {
					// @ts-ignore
					const { exp, iat } = jwt.decode(AccessToken)

					fetchData({
						exp,
						setReturnAccessToken,
						AccessToken,
						RefreshToken,
					})
				}
			}
		}, [])

		return { AccessToken: returnAccessToken }
	} catch (error) {
		handleError({
			error,
			comment: 'Error fetching correct Access Token...',
		})
		return { AccessToken: null }
	}
}
