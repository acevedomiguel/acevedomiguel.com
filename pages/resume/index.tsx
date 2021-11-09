import Container from '../../components/container'
import Layout from '../../components/homepage'
import Head from 'next/head'
import { SITE_NAME } from '../../lib/constants'
import Resume from '../../components/resume'

export default function Index() {
  return (
    <>
        <Layout>
            <Head>
                <title>Personal Resume for Acevedo Miguel Angel - {SITE_NAME}</title>
            </Head>
            <Container>
                <Resume />
            </Container>
        </Layout>
    </>
  )
}
