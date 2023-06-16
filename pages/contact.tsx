import Meta from '@/components/Meta'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { EyeIcon } from 'lucide-react'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function ContactPage() {
	const { locale = 'fa' } = useRouter()
	const [message, setMessage] = useState('')

	function CallContact() {}

	return (
		<div className="min-h-screen mt-6">
			<Meta />
			<div className="max-w-2xl mx-auto">
				<nav className="block mb-4" aria-label="Breadcrumb">
					<h1 className="font-semibold text-xl">
						{locale == 'fa' ? 'تماس با ما' : 'Contact Us'}
					</h1>
					<p className="text-sm">
						Convert your text prompt to a beautiful image.
					</p>
				</nav>
				<Card className="col-span-1 w-full ">
					<CardHeader className="w-full mt-4">
						<CardTitle>Input Prompt</CardTitle>
						<CardDescription>
							{locale == 'fa'
								? 'تصویر مدل سه بعدی خود را با استفاده از صرفا یک جمله به رندری واقع گرایانه تبدیل کنید.'
								: 'Convert your 3D model screenshot to a hyper-realistic rendering using a simple prompt.'}
						</CardDescription>
					</CardHeader>
					<CardContent className="w-full">
						<div className="grid w-full items-center gap-4">
							<div>
								<Label htmlFor="email">Name</Label>
								<Input
									type="name"
									id="name"
									placeholder="Name"
								/>
							</div>
							<div>
								<Label htmlFor="email">Email</Label>
								<Input
									type="email"
									id="email"
									placeholder="Email"
								/>
							</div>
							<div>
								<Label htmlFor="message-2">Prompt</Label>
								<Textarea
									placeholder="Type your prompt here."
									id="message-2"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
								/>
							</div>
						</div>
					</CardContent>
					<CardFooter className="flex justify-between">
						<div />
						<Button disabled={message == ''} onClick={CallContact}>
							Submit
						</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	)
}
