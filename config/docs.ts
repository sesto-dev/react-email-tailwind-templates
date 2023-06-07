import { MainNavItem, SidebarNavItem } from 'types/nav'

interface DocsConfig {
	mainNav: MainNavItem[]
	sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: 'Documentation',
			href: '/docs',
		},
		{
			title: 'Components',
			href: '/docs/components/accordion',
		},
		{
			title: 'Examples',
			href: '/examples',
		},
		{
			title: 'Figma',
			href: '/figma',
		},
	],
	sidebarNav: [
		{
			title: 'Getting Started',
			items: [
				{
					title: 'Introduction',
					href: '/docs',
					items: [],
				},
				{
					title: 'Installation',
					href: '/docs/installation',
					items: [],
				},
				{
					title: 'Theming',
					href: '/docs/theming',
					items: [],
				},
				{
					title: 'CLI',
					href: '/docs/cli',
					items: [],
				},
				{
					title: 'Typography',
					href: '/docs/components/typography',
					items: [],
				},
			],
		},
		{
			title: 'Community',
			items: [
				{
					title: 'Figma',
					href: '/figma',
					items: [],
				},
			],
		},
		{
			title: 'Components',
			items: [
				{
					title: 'Accordion',
					href: '/docs/components/accordion',
					items: [],
				},
			],
		},
	],
}
