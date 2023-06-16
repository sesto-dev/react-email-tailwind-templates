export default function Footer() {
	return (
		<footer className="h-[5vh] mt-[5vh] w-full px-10 py-3 border-t flex justify-between text-neutral-500 text-sm">
			<span className="">
				© {new Date().getFullYear()} Andia™
				<span className="invisible md:visible">
					. All Rights Reserved.
				</span>
			</span>
			<ul className="flex gap-4 items-center">
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
