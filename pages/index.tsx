import {
	CameraIcon,
	Download,
	ShareIcon,
	TypeIcon,
	VideoIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CalendarDateRangePicker } from '@/examples/dashboard/components/date-range-picker'
import { Overview } from '@/examples/dashboard/components/overview'
import { RecentSales } from '@/examples/dashboard/components/recent-sales'
import Meta from '@/components/Meta'
import Link from 'next/link'

export default function DashboardPage() {
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
			Title: 'Video to Video',
			Icon: VideoIcon,
			ContentSource:
				'https://cdn.dribbble.com/users/32512/screenshots/15330154/media/45a2e819d74c29eff978585835548630.mp4',
			Description: 'Transform and edit videos.',
			Path: '/apps/video-to-video',
		},
		{
			Title: 'Text to Speech',
			Icon: VideoIcon,
			ContentSource:
				'https://cdn.dribbble.com/userupload/4157958/file/original-b4ec39eeac91ab408d32b943a33c316f.mp4',
			Description: 'Transform text to natural language.',
			Path: '/apps/text-to-speech',
		},
		{
			Title: 'Architecture',
			Icon: VideoIcon,
			ContentSource:
				'https://cdn.dribbble.com/users/32512/screenshots/17066462/media/a1b8991f197da384b56f9b17c7a47c51.mp4',
			Description: 'Transform text to natural language.',
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
						<Card className="col-span-1" key={Title}>
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
									Generative AI Model
								</CardTitle>
								<Icon className="h-4 w-4 text-muted-foreground" />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold mb-1">
									{Title}
								</div>
								<p className="text-xs text-muted-foreground">
									{Description}
								</p>
								<Link href={Path}>
									<Button
										variant="secondary"
										size="sm"
										className="mt-4 w-full"
									>
										Open App
									</Button>
								</Link>
							</CardContent>
						</Card>
					)
				)}
			</div>
		)
	}

	return (
		<div className="flex-col flex">
			<div className="space-y-4 p-8 pt-6">
				<Meta />
				<div className="flex items-center justify-between space-y-2">
					<div>
						<h2 className="text-3xl font-bold mb-2">Apps</h2>
						<p className="text-sm text-muted-foreground">
							Set of Apps to create Images from scratch or edit
							your own content.
						</p>
					</div>

					<div className="flex items-center space-x-2">
						<CalendarDateRangePicker />
						<Button size="sm">
							<ShareIcon className="mr-2 h-4 w-4" />
							Share
						</Button>
					</div>
				</div>
				<Apps />
			</div>
		</div>
	)
}
