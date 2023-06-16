import { CommandMenu } from '@/components/command-menu'
import { MainNav } from '@/components/main-nav'
import { MobileNav } from '@/components/mobile-nav'
import { UserNav } from '@/examples/dashboard/components/user-nav'

export function SiteHeader() {
	return (
		<header className="h-[7vh] w-full px-10 py-3 border-b flex items-center justify-between">
			<MainNav />
			<MobileNav />
			<div className="flex items-center justify-between gap-6">
				<CommandMenu />
				<UserNav />
			</div>
		</header>
	)
}
