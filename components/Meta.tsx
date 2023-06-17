import Config from '@/config'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

const { name, handle, description: cDescription, url, ogImage } = Config

export default function Meta({
	title = name,
	description = cDescription,
	image = ogImage,
}) {
	const { locale = 'fa' } = useRouter()

	return (
		<NextSeo
			title={title[locale]}
			description={description[locale]}
			canonical={url}
			openGraph={{
				url,
				title: title[locale],
				description: description[locale],
				images: [
					{
						url: image,
						width: 800,
						height: 600,
						alt: 'Og Image Alt',
						type: 'image/jpeg',
					},
				],
				siteName: name[locale],
			}}
			twitter={{
				handle,
				site: handle,
				cardType: 'summary_large_image',
			}}
		/>
	)
}
