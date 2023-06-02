import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import '@/styles/globals.css'
import { AuthProvider } from '@/state/Auth'
import { Analytics } from '@/components/analytics'
import { Toaster } from '@/components/ui/toaster'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<AuthProvider>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					<div className="relative flex min-h-screen flex-col">
						<SiteHeader />
						<Component {...pageProps} />
						<SiteFooter />
					</div>
				</ThemeProvider>
			</AuthProvider>
			<Analytics />
			<Toaster />
		</>
	)
}
