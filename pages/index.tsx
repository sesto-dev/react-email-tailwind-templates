import Link from 'next/link'

import { BlogPostCard } from 'components/BlogPostCard'
import VideoCard from 'components/VideoCard'

import prisma from 'lib/prisma'
import Meta from 'components/Meta'
import Config from 'main.config'

export default function Index({ blogs }) {
    return (
        <div className="flex flex-col border-neutral-200 dark:border-neutral-700">
            <Meta
                title="Pardis"
                description="Home Page"
                image={Config.image}
                canonical={process.env.NEXT_PUBLIC_URL}
            />
            <Blogs blogs={JSON.parse(blogs)} />
        </div>
    )
}

function Blogs({ blogs }) {
    return (
        <>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                {blogs.map((post: any) => (
                    <BlogPostCard key={post.slug} post={post} />
                ))}
            </div>
        </>
    )
}

export async function getStaticProps() {
    let props

    try {
        props = {
            blogs: JSON.stringify(await prisma.blogPost.findMany({ take: 3 })),
        }
    } catch (error) {
        props = {
            blogs: JSON.stringify([
                {
                    slug: 'how-can-ai-be-used-to-generate-revenue-in-the-cryptocurrency-space',
                    title: 'How can AI be used to generate revenue in the cryptocurrency space',
                    description:
                        'How can AI be used to generate revenue in the cryptocurrency space',
                    image: 'https://pardis.vercel.app/_next/image?url=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F1358460%2Fscreenshots%2F14313986%2Fmedia%2Fcf14d4ef432f3a05078df0ac1d1e7387.jpg&w=3840&q=75',
                    createdAt: new Date('2022-03-25'),
                },
            ]),
        }
    }

    return { props }
}
