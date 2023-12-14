import Layout from '../components/layout';
import Head from 'next/head';
// import Link from 'next/link';
import Nav from '../components/nav'
import Container from '../components/container'

export default function Index() {
    return (<>
        <Layout>
            <Head>
                <title>Home</title>
            </Head>
            <Nav />
            <Container>
                <div className='m-auto py-4 max-w-3xl text-md'>
                        <div className=''>
                            <div className="p-6 items-center justify-center">
                                <div className='mb-6'>
                                <p className='mb-3' >Hi, I&apos;m Acevedo Miguel, a <strong>DevOps and Backend Engineer</strong> with over 20 years of coding experience.</p>
                                <p className='mb-3'>I started as an intern in high school, and since then, I have been exploring different languages and paradigms in this never-stopping industry. I have worked in <strong>marketing, social media, advertising, IoT, and cloud computing</strong> for various clients and projects across Latin America and Asia. </p>
                                <p>I&apos;m currently the <strong>Cloud Lead & IoT</strong> at <strong>Tensor Energy</strong>, a company that provides smart energy solutions. I enjoy learning from other developers, keeping up with the latest technologies, and making toys and furniture for my family in my spare time. I&apos;m also interested in the growing market of space and the opportunities it offers for infrastructure, communication, embedded system, security, and reliability.</p>
                                </div>
                                <div className='justify-center flex pt-4'>
                                    {/* <Link href="/contact" passHref={true} >
                                        <button className="bg-sky-900 hover:bg-sky-300 text-white text-sm py-2 px-12 rounded-full">Get in touch</button>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                </div>
            </Container>
        </Layout>
    </>);
}
