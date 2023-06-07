import Config from '@/config'
import { NextSeo } from 'next-seo'

const { name, handle, description: cDescription, url, ogImage } = Config

export default function Meta({
	title = name,
	description = cDescription,
	image = ogImage,
}) {
	return (
		<NextSeo
			title={title}
			description={description}
			canonical={url}
			openGraph={{
				url,
				title,
				description,
				images: [
					{
						url: image,
						width: 800,
						height: 600,
						alt: 'Og Image Alt',
						type: 'image/jpeg',
					},
				],
				siteName: name,
			}}
			twitter={{
				handle,
				site: handle,
				cardType: 'summary_large_image',
			}}
		/>
	)
}
