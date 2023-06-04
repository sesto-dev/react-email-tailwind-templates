import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import '@/styles/globals.css'
import { AuthProvider } from '@/state/Auth'
import { Analytics } from '@/components/analytics'
import { Toaster } from '@/components/ui/toaster'
import { SiteHeader } from '@/components/Header'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<AuthProvider>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					<div className="h-screen">
						<SiteHeader />
						<div className="h-[88vh]">
							<Component {...pageProps} />
						</div>
						<Footer />
					</div>
				</ThemeProvider>
			</AuthProvider>
			<Analytics />
			<Toaster />
		</>
	)
}
