import Container from '../../components/container'
import Layout from '../../components/layout'
import Nav from '../../components/nav'
import Head from 'next/head'
import { FaCalendarDay } from 'react-icons/fa';

export default function Index() {
  return (
    <>
        <Layout>
            <Head>
                <title>Contact for Acevedo Miguel Angel</title>
            </Head>
            <Nav />
            <Container>
                contact info
                <a href="https://calendly.com/acevedomiguel/30-min-zoom-meeting" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaCalendarDay className="react-icons" title='Calendly' />
              <span className="sr-only">Calendly</span>
            </a>
            </Container>
        </Layout>
    </>
  )
}