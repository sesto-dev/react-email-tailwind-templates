'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Config from '@/config'
import { cn } from '@/lib/utils'

export function MainNav() {
	const pathname = usePathname()

	const Links = [
		{
			path: '/apps',
			title: 'Apps',
		},
		{
			path: '/gallery',
			title: 'Gallery',
		},
		{
			path: '/about',
			title: 'About',
		},
		{
			path: '/contact',
			title: 'Contact',
		},
	]

	return (
		<div className="hidden md:flex gap-6">
			<Link href="/" className="flex items-center space-x-2">
				<span className="hidden font-bold sm:inline-block">
					{Config.name}
				</span>
			</Link>
			<nav className="flex items-center gap-6 text-sm font-medium">
				{Links.map(({ path, title }) => (
					<Link
						key={title}
						href={path}
						className={cn(
							'transition-colors hover:text-foreground/80',
							pathname === path
								? 'text-foreground'
								: 'text-foreground/60'
						)}
					>
						{title}
					</Link>
				))}
			</nav>
		</div>
	)
}
