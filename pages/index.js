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
                <title>Links - {SITE_NAME}</title>
            </Head>
            <Container>
                <LinkTree />
            </Container>
        </Layout>
    </>
  )
}
