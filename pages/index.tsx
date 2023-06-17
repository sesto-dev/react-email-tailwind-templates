import { VideoIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import Meta from '@/components/Meta'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function DashboardPage() {
	const { locale = 'fa' } = useRouter()

	const AppCards = [
		// {
		// 	Title: 'Text to Image',
		// 	Icon: TypeIcon,
		// 	ContentSource:
		// 		'https://d3phaj0sisr2ct.cloudfront.net/site/videos/tool-text-image.mp4',
		// 	Description: 'Generate images from a text prompt.',
		// 	Path: '/apps/text-to-image',
		// },
		// {
		// 	Title: 'Image to Image',
		// 	Icon: CameraIcon,
		// 	ContentSource:
		// 		'https://secret-memories.s3-accelerate.amazonaws.com/user-videos/9ccd3e77-611b-484b-bc69-afd4e54353b4_clean_video_s3_key.mp4?AWSAccessKeyId=AKIASWOMRRLR5MHFG5RE&Expires=1687278696&Signature=dfSnwvzOZS6cBvgZ%2FEUsuO%2Fj2Bo%3D',
		// 	Description: 'Transform and edit images.',
		// 	Path: '/apps/image-to-image',
		// },
		{
			Title: { en: 'Video to Video', fa: 'ادیت ویدیو' },
			Icon: VideoIcon,
			ContentSource:
				'https://cdn.dribbble.com/users/32512/screenshots/15330154/media/45a2e819d74c29eff978585835548630.mp4',
			Description: {
				en: 'Transform and edit videos.',
				fa: 'ویدیو های خود را با کمک هوش مصنوعی ادیت کنید.',
			},
			Path: '/apps/video-to-video',
		},
		{
			Title: { en: 'Text to Speech', fa: 'تبدیل به متن صدا' },
			Icon: VideoIcon,
			ContentSource:
				'https://cdn.dribbble.com/userupload/4157958/file/original-b4ec39eeac91ab408d32b943a33c316f.mp4',
			Description: {
				en: 'Transform text to natural sounding audio.',
				fa: 'متن خود را با کمک هوش مصنوعی به صدا تبدیل کنید.',
			},
			Path: '/apps/text-to-speech',
		},
		{
			Title: { en: 'Architecture', fa: 'رندر معماری' },
			Icon: VideoIcon,
			ContentSource:
				'https://cdn.dribbble.com/users/32512/screenshots/17066462/media/a1b8991f197da384b56f9b17c7a47c51.mp4',
			Description: {
				en: 'Transform 3D Models to hyper-realistic renders.',
				fa: 'مدل 3 بعدی معماری خود در چندین ثانیه را به رندری واقع گرایانه تبدیل کنید',
			},
			Path: '/apps/architecture',
		},
	]

	function Apps() {
		return (
			<div className="grid grid-cols-3 gap-4 w-full">
				{AppCards.map(
					(
						{ Title, Icon, ContentSource, Description, Path },
						index
					) => (
						<Link href={Path}>
							<Card className="col-span-1" key={Title['en']}>
								<video
									className="masked"
									style={{
										height: '20rem',
										width: '100%',
										borderRadius: '10px',
										objectFit: 'cover',
									}}
									preload="auto"
									src={ContentSource}
									playsInline={true}
									loop={true}
									draggable="false"
									autoPlay={true}
									muted={true}
								/>
								<CardHeader className="flex flex-row items-center justify-between space-y-0">
									<CardTitle className="text-xs text-muted-foreground">
										{locale == 'fa'
											? 'مدل هوش مصنوعی'
											: 'Generative AI Model'}
									</CardTitle>
									<Icon className="h-4 w-4 text-muted-foreground" />
								</CardHeader>
								<CardContent>
									<div className="text-2xl font-bold mb-1">
										{Title[locale]}
									</div>
									<p className="text-xs text-muted-foreground">
										{Description[locale]}
									</p>
									<Button
										variant="secondary"
										size="sm"
										className="mt-4 w-full"
									>
										Open App
									</Button>
								</CardContent>
							</Card>
						</Link>
					)
				)}
			</div>
		)
	}

	return (
		<div className="flex-col flex">
			<div className="space-y-4 pt-6">
				<Meta />
				<div className="flex items-center justify-between space-y-2">
					<div>
						<h2 className="text-3xl font-bold mb-2">
							{locale == 'fa' ? 'اپلیکیشن ها' : 'Apps'}
						</h2>
						<p className="text-sm text-muted-foreground">
							{locale == 'fa'
								? 'مجموعه اپلیکیشن هایی ساخته شده برای به کارگیری قدرت هوش مصنوعی'
								: 'Set of Apps created to harness the power of AI.'}
						</p>
					</div>
				</div>
				<Apps />
			</div>
		</div>
	)
}
