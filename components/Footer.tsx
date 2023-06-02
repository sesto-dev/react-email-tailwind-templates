export default function Footer() {
	return (
		<footer className="h-[5vh] w-full px-10 py-3  border-t flex justify-between">
			<span className="text-sm text-gray-500">
				© {new Date().getFullYear()} Andia™
				<span className="invisible md:visible">
					. All Rights Reserved.
				</span>
			</span>
			<ul className="flex gap-4 items-center text-sm text-gray-500 ">
				<li>
					<a href="#" className="hover:underline">
						Twitter
					</a>
				</li>
				<li>
					<a href="#" className="hover:underline">
						Linkedin
					</a>
				</li>
			</ul>
		</footer>
	)
}
