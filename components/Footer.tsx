import getPersianNumerals from '@/lib/persian'
import { useRouter } from 'next/router'

export default function Footer() {
	const { locale = 'fa' } = useRouter()

	return (
		<footer className="h-[5vh] mt-[5vh] w-full px-10 py-3 border-t flex justify-between text-neutral-500 text-sm">
			{locale == 'fa' ? (
				<div>
					© {getPersianNumerals(new Date().getFullYear())} آندیا™
					<span className="invisible md:visible">
						. تمامی حقوق محفوظ است.
					</span>
				</div>
			) : (
				<div>
					© {new Date().getFullYear()} Andia™
					<span className="invisible md:visible">
						. All Rights Reserved.
					</span>
				</div>
			)}
			<ul className="flex gap-4 items-center">
				<li>
					<a href="#" className="hover:underline">
						{locale == 'fa' ? 'آپارات' : 'Twitter'}
					</a>
				</li>
				<li>
					<a href="#" className="hover:underline">
						{locale == 'fa' ? 'لینکداین' : 'Linkedin'}
					</a>
				</li>
			</ul>
		</footer>
	)
}
