import Meta from '@/components/meta'
import Hero from '@/components/hero'
import Container from '../components/container'

export default function Home() {
  return (
    <>
      <Container>
        <Meta/>
        <Hero title="TOP" subtitle="Next.js + MicroCMSで開発" imageOn/>
      </Container>
    </>
  )
}
