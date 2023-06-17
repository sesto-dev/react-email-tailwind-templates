'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Config from '@/config'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/router'

export function MainNav() {
	const pathname = usePathname()
	const { locale = 'fa' } = useRouter()

	const Links = [
		{
			path: '/apps',
			english: 'Apps',
			persian: 'اپلیکیشن ها',
		},
		{
			path: '/gallery',
			english: 'Gallery',
			persian: 'گالری',
		},
		{
			path: '/about',
			english: 'About',
			persian: 'درباره ما',
		},
		{
			path: '/contact',
			english: 'Contact',
			persian: 'تماس',
		},
	]

	return (
		<div className="hidden md:flex gap-6">
			<Link href="/" className="flex items-center space-x-2">
				<span className="hidden font-bold sm:inline-block">
					{locale == 'fa' ? 'آندیا' : 'Andia'}
				</span>
			</Link>
			<nav className="flex items-center gap-6 text-sm font-medium">
				{Links.map(({ path, english, persian }) => (
					<Link
						key={english}
						href={path}
						className={cn(
							'transition-colors hover:text-foreground/80',
							pathname === path
								? 'text-foreground'
								: 'text-foreground/60'
						)}
					>
						{locale == 'fa' ? persian : english}
					</Link>
				))}
			</nav>
		</div>
	)
}
