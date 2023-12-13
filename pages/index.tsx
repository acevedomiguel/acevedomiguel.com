import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';
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
                <div className='m-auto max-w-xl'>
                    <div className="bg-white shadow-md overflow-hidden sm:rounded-xl mt-8 mb-8">
                        <div className="px-4 py-5 sm:px-6">
                            <div className="flex items-center justify-between">
                                <div className="flex-0 min-w-0 ">
                                    <div className="relative w-14 h-14 mr-2">
                                        <img className="rounded-full border border-gray-100 shadow-sm" src="/profile.png" alt="user image" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="font-bold text-gray-900">Acevedo Miguel Angel</div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center text-xs text-gray-500">
                                            <a href='mailto:me@acevedomiguel.com'>me@acevedomiguel.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border-t border-gray-200 '>
                            <div className="p-6 items-center justify-center">
                                <div className='mb-6 text-sm'>
                                <p className='mb-3' >Hi, I&apos;m Miguel Angel Acevedo, a <strong>DevOps and Backend Engineer</strong> with over 20 years of coding experience.</p>
                                <p className='mb-3'>I started as an intern in high school, and since then, I have been exploring different languages and paradigms in this never-stopping industry. I have worked in <strong>marketing, social media, advertising, IoT, and cloud computing</strong> for various clients and projects across Latin America and Asia. </p>
                                <p>I&apos;m currently the <strong>Cloud Lead & IoT</strong> at <strong>Tensor Energy</strong>, a company that provides smart energy solutions. I enjoy learning from other developers, keeping up with the latest technologies, and making toys and furniture for my family in my spare time. I&apos;m also interested in the growing market of space and the opportunities it offers for infrastructure, communication, embedded system, security, and reliability.</p>
                                </div>
                                <div className='justify-center flex pt-2'>
                                    <Link href="/contact" passHref={true} >
                                        <button className="bg-sky-900 hover:bg-sky-300 text-white text-sm py-2 px-12 rounded-full">Get in touch</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    </>);
}
