import Container from '../../components/container'
import Layout from '../../components/layout'
import Nav from '../../components/nav'
import Head from 'next/head'
import Resume from '../../components/resume'

export default function Index() {
  return (
    <>
        <Layout>
            <Head>
                <title>Personal Resume for Acevedo Miguel Angel</title>
            </Head>
            <Nav />
            <Container>
                <Resume />
            </Container>
        </Layout>
    </>
  )
}
