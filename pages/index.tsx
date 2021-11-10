import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import LinkTree from '../components/linktree'

export default function Index() {
    return (<>
        <Layout>
            <Head>
                <title>Home</title>
            </Head>
            <Container>
                <LinkTree />
            </Container>
        </Layout>
    </>);
}
