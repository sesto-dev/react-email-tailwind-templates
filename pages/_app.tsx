import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import '@/styles/globals.css'
import { Analytics } from '@/components/analytics'
import { Toaster } from '@/components/ui/toaster'
import { SiteHeader } from '@/components/Header'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			<div className="flex flex-col h-screen">
				<SiteHeader />
				<div className="flex-col h-screen px-10">
					<Component {...pageProps} />
				</div>
				<Footer />
			</div>
			<Analytics />
			<Toaster />
		</ThemeProvider>
	)
}
