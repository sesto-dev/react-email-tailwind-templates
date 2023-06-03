'use client'

import * as React from 'react'

import { Event, trackEvent } from '@/lib/events'
import { cn } from '@/lib/utils'
import { CopyIcon, CheckIcon } from 'lucide-react'

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	value: string
	src?: string
	event?: Event['name']
}

async function copyToClipboardWithMeta(value: string, event?: Event) {
	navigator.clipboard.writeText(value)
	if (event) {
		trackEvent(event)
	}
}

export function CopyButton({
	value,
	className,
	src,
	event,
	...props
}: CopyButtonProps) {
	const [hasCopied, setHasCopied] = React.useState(false)

	React.useEffect(() => {
		setTimeout(() => {
			setHasCopied(false)
		}, 2000)
	}, [hasCopied])

	return (
		<button
			className={cn(
				'relative z-20 inline-flex h-6 w-6 items-center justify-center rounded-md border bg-background text-sm font-medium transition-all hover:bg-muted focus:outline-none',
				className
			)}
			onClick={() => {
				copyToClipboardWithMeta(
					value,
					event
						? {
								name: event,
								properties: {
									code: value,
								},
						  }
						: undefined
				)
				setHasCopied(true)
			}}
			{...props}
		>
			<span className="sr-only">Copy</span>
			{hasCopied ? (
				<CheckIcon className="h-3 w-3" />
			) : (
				<CopyIcon className="h-3 w-3" />
			)}
		</button>
	)
}
