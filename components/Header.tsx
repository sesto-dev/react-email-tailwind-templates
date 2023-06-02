import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { CommandMenu } from '@/components/command-menu'
import { Icons } from '@/components/icons'
import { MainNav } from '@/components/main-nav'
import { MobileNav } from '@/components/mobile-nav'
import { ModeToggle } from '@/components/mode-toggle'
import { UserNav } from '@/examples/dashboard/components/user-nav'

export function SiteHeader() {
	return (
		<header className="h-[7vh] w-full px-10 py-3 border-b flex items-center justify-between">
			<MainNav />
			<MobileNav />
			<div className="flex flex-1 items-center justify-between space-x-2">
				<CommandMenu />
				<UserNav />
			</div>
		</header>
	)
}
