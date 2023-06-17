import { CircleSlashedIcon, Download, EyeIcon, TrashIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { TableDemo } from '@/components/examples/table/demo'

import { useState } from 'react'
import { capitalizeFirstLetter, cn } from '@/lib/utils'
import Meta from '@/components/Meta'
import { Textarea } from '@/components/ui/textarea'

import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import Gallery from '@/components/Gallery'

export default function Page() {
	const TabItems = [
		{
			value: 'app',
			english: 'Architecture AI Model - App',
			persian: 'اپلیکیشن مدل هوش مصنوعی معماری',
		},
		{
			value: 'gallery',
			english: 'Gallery',
			persian: 'گالری',
		},
		{
			value: 'guide',
			english: 'Guide',
			persian: 'آموزش',
		},
		{
			value: 'history',
			english: 'History',
			persian: 'تاریخچه',
		},
	]
	const { locale = 'fa' } = useRouter()
	const { theme } = useTheme()

	const [loading, setLoading] = useState(false)
	const [prompt, setPrompt] = useState('')
	const [selectedFile, setSelectedFile] = useState(null)
	const [inputImage, setInputImage] = useState(null)
	const [outputImage, setOutputImage] = useState(null)

	const handleFileChange = (event) => {
		const file = event.target.files[0]
		setSelectedFile(file)

		if (file && file.type.startsWith('image/')) {
			setInputImage(URL.createObjectURL(file))
		} else {
			setInputImage(null)
		}
	}

	function CallRender() {
		setLoading(true)
	}

	function OutputColumn() {
		return (
			<Card className="col-span-1 w-full ">
				{outputImage ? (
					<img
						style={{
							height: '20rem',
							width: '100%',
							objectFit: 'cover',
						}}
						src={outputImage}
						alt="Preview"
					/>
				) : (
					<img
						className="masked rounded-t-md"
						style={{
							height: '20rem',
							width: '100%',
							objectFit: 'cover',
							filter: theme == 'dark' && 'invert(100)',
						}}
						src="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
						alt="Preview"
					/>
				)}
				<CardHeader className="w-full mt-4">
					<CardTitle>
						{locale == 'fa' ? 'تصویر خروجی' : 'Output Image'}
					</CardTitle>
					<CardDescription>
						Resulting Image from your prompt.
					</CardDescription>
				</CardHeader>

				<CardFooter className="flex justify-between mt-10">
					<div className="" />
					<Button disabled size="sm">
						<Download className="mr-2 h-4 w-4" />
						Download Image
					</Button>
				</CardFooter>
			</Card>
		)
	}

	function InputColumn() {
		return (
			<Card className="col-span-1 w-full ">
				{inputImage ? (
					<img
						style={{
							height: '20rem',
							width: '100%',
							objectFit: 'cover',
						}}
						src={inputImage}
						alt="Preview"
					/>
				) : (
					<img
						className="masked rounded-t-xl"
						style={{
							height: '20rem',
							width: '100%',
							objectFit: 'cover',
							filter: theme == 'dark' && 'invert(100)',
						}}
						src="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
						alt="Preview"
					/>
				)}
				<CardHeader className="w-full mt-4">
					<CardTitle>
						{locale == 'fa' ? 'تنظیمات ورودی' : 'Input Prompt'}
					</CardTitle>
					<CardDescription>
						{locale == 'fa'
							? 'تصویر مدل سه بعدی خود را با استفاده از صرفا یک جمله به رندری واقع گرایانه تبدیل کنید.'
							: 'Convert your 3D model screenshot to a hyper-realistic rendering using a simple prompt.'}
					</CardDescription>
				</CardHeader>
				<CardContent className="w-full">
					<div className="grid w-full items-center gap-4">
						<div className="grid w-full items-center gap-1.5 ">
							<Label htmlFor="picture">
								{locale == 'fa' ? 'تصویر' : 'Picture'}
							</Label>
							<div className="flex gap-4 w-full">
								<Input
									className="w-full"
									id="picture"
									type="file"
									onChange={handleFileChange}
								/>
								<Button
									variant="outline"
									onClick={() => setInputImage(null)}
								>
									<TrashIcon className="h-4 w-4" />
								</Button>
							</div>
						</div>
						<div className="grid w-full gap-1.5">
							<Label htmlFor="message-2">
								{locale == 'fa'
									? 'تعریف رندر خروجی'
									: 'Input Prompt'}
							</Label>
							<Textarea
								placeholder="Type your prompt here."
								id="message-2"
								value={prompt}
								onChange={(e) => setPrompt(e.target.value)}
							/>
						</div>
					</div>
				</CardContent>
				<CardFooter className="flex justify-between">
					<div />
					{!loading ? (
						<Button
							disabled={prompt == '' || selectedFile == null}
							onClick={CallRender}
						>
							<EyeIcon className="mr-2 h-4 w-4 " />
							{locale == 'fa' ? 'رندر' : 'Render'}
						</Button>
					) : (
						<Button disabled={true}>
							<CircleSlashedIcon className="mr-2 h-4 w-4 animate-spin" />
						</Button>
					)}
				</CardFooter>
			</Card>
		)
	}

	return (
		<div className="flex-col flex">
			<Meta />
			<div className="flex-1 space-y-4 p-8 pt-6">
				<nav className="block" aria-label="Breadcrumb">
					<h1 className="font-semibold text-xl">
						{locale == 'fa'
							? 'مدل هوش مصنوعی معماری'
							: 'Architectural AI Model'}
					</h1>
					<p className="text-sm">
						{locale == 'fa'
							? 'مدل 3 بعدی معماری خود را به رندر واقع گرایانه تبدیل کنید.'
							: 'Convert your 3D model screenshot to a hyper-realistic render.'}
					</p>
				</nav>
				<Tabs defaultValue={TabItems[0]['value']} className="space-y-4">
					<TabsList>
						{TabItems.map(({ value, english, persian }) => (
							<TabsTrigger key={value} value={value}>
								{locale == 'fa' ? persian : english}
							</TabsTrigger>
						))}
					</TabsList>
					<TabsContent value="app" className="space-y-4 ">
						<div className="grid gap-4 grid-cols-2 ">
							<InputColumn />
							<OutputColumn />
						</div>
					</TabsContent>
					<TabsContent value="history" className="space-y-4 ">
						<div className="grid gap-4 grid-cols-2 ">
							<TableDemo />
						</div>
					</TabsContent>
					<TabsContent value="gallery" className="space-y-4 ">
						<Gallery />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	)
}
