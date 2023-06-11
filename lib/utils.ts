import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
	const date = new Date(input)
	return date.toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	})
}

export function absoluteUrl(path: string) {
	return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export function capitalizeFirstLetter(str) {
	if (typeof str !== 'string' || str.length === 0) {
		return str // Return the input as is if it's not a non-empty string
	}

	return str.charAt(0).toUpperCase() + str.slice(1)
}
