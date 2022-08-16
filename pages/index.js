import Meta from '@/components/meta'
import Hero from '@/components/hero'
import Container from '../components/container'
import { getAllPosts } from 'lib/api'
import Pagenation from 'components/pagenation'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'
import Posts from 'components/posts'

export default function Home({posts}) {
  return (
    <>
      <Container>
        <Meta/>
        <Hero title="TOP" subtitle="Next.js + MicroCMSで開発" imageOn/>
        <Posts posts={posts} />
        <Pagenation nextUrl='/blog' nextText='More Posts'/>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts(4)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts: posts,
    },
  }
}
