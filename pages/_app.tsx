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
			<Circles />
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

function Circles() {
	return (
		<div className="z-[-10] absolute h-[100vh] w-[100vw] overflow-clip">
			<div className=" opacity-50">
				<div className="mix-blend-multiply w-[45vw] h-[45vw] rounded-[40rem] circle-obj" />
			</div>
			<div className=" opacity-60 ">
				<div className="mix-blend-multiply w-[45vw] h-[45vw] rounded-[40rem] circle-obj2" />
			</div>
			<div className=" opacity-70 ">
				<div className="mix-blend-multiply w-[45vw] h-[45vw] rounded-[40rem] circle-obj3" />
			</div>
		</div>
	)
}
