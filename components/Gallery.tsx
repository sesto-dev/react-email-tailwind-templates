import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import { useRouter } from 'next/router'
import CompareImage from '@/components/CompareImage'
import architecture from '@/data/architecture'

export default function Gallery({ comparison = false }) {
	const { locale = 'fa' } = useRouter()

	const AppCards = [
		{
			Title: 'Text to Image',
			ContentSource:
				'https://d3phaj0sisr2ct.cloudfront.net/site/videos/tool-text-image.mp4',
			Description: 'Generate images from a text prompt.',
		},
		{
			Title: 'Image to Image',
			ContentSource:
				'https://secret-memories.s3-accelerate.amazonaws.com/user-videos/9ccd3e77-611b-484b-bc69-afd4e54353b4_clean_video_s3_key.mp4?AWSAccessKeyId=AKIASWOMRRLR5MHFG5RE&Expires=1687278696&Signature=dfSnwvzOZS6cBvgZ%2FEUsuO%2Fj2Bo%3D',
			Description: 'Transform and edit images.',
		},
		{
			Title: 'Video to Video',
			ContentSource:
				'https://cdn.dribbble.com/users/32512/screenshots/15330154/media/45a2e819d74c29eff978585835548630.mp4',
			Description: 'Transform and edit videos.',
		},
		{
			Title: 'Text to Speech',
			ContentSource:
				'https://cdn.dribbble.com/userupload/4157958/file/original-b4ec39eeac91ab408d32b943a33c316f.mp4',
			Description: 'Transform text to natural language.',
		},
		{
			Title: 'Architecture',
			ContentSource:
				'https://cdn.dribbble.com/users/32512/screenshots/17066462/media/a1b8991f197da384b56f9b17c7a47c51.mp4',
			Description: 'Transform text to natural language.',
		},
	]

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
			{comparison
				? architecture.map(({ input, output }, index) => (
						<Card className="col-span-1" key={input}>
							<div className="relative h-[20rem] w-full rounded-lg">
								<CompareImage
									key={input}
									leftImage={input}
									rightImage={output}
									sliderPositionPercentage={0.25}
								/>
							</div>
							<CardContent>
								<div className="text-xl font-bold mb-1">
									Architecture
								</div>
								<p className="text-xs text-muted-foreground">
									Model
								</p>
								<div className=""></div>
							</CardContent>
						</Card>
				  ))
				: AppCards.map(
						({ Title, ContentSource, Description }, index) => (
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
								<CardContent>
									<div className="text-xl font-bold mb-1">
										{Title}
									</div>
									<p className="text-xs text-muted-foreground">
										{Description}
									</p>
									<div className=""></div>
								</CardContent>
							</Card>
						)
				  )}
		</div>
	)
}
