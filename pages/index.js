import Container from '../components/container'
import Layout from '../components/homepage-layout'
import Head from 'next/head'
import { SITE_NAME } from '../lib/constants'
import LinkTree from '../components/linktree'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>links - {SITE_NAME}</title>
        </Head>
        <Container>
        <LinkTree />
        </Container>
      </Layout>
    </>
  )
}

/*
<Link href="/resume" passHref>
  <Button variant="contained" color="primary">Resume</Button>
</Link>
<Link href="/blog" passHref>
  <Button variant="contained" color="primary">Blog</Button>
</Link>
*/