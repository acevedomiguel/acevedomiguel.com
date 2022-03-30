import Container from '../components/container';
import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaStackOverflow } from 'react-icons/fa';
import { SiBuymeacoffee } from 'react-icons/si';
import Button from '../components/linktree/button';

export default function Index() {
    return (<>
        <Layout>
            <Head>
                <title>Home</title>
            </Head>
            <div className="flex h-screen bg-gradient-to-r from-slate-600 to-slate-500">
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
                                <p>Target-oriented, senior software developer, with extensive experience (over 20 years) in the digital marketing world and IoT. Knowledge of web technologies and understanding of devops and infrastructure.</p>
                                </div>
                                <div className='justify-center flex pt-2'>
                                    <Link href="/resume" >
                                        <button className="bg-sky-900 hover:bg-sky-300 text-white text-sm py-2 px-12 rounded-full">View Resume</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className="px-4 pb-4 items-center justify-center flex">
                                <Button target="_blank" href="http://hk.linkedin.com/in/acevedomiguel" title="Linkedin">
                                    <FaLinkedin className="react-icons" />
                                </Button>
                                <Button target="_blank" href="https://github.com/acevedomiguel" title='GitHub'>
                                    <FaGithub className="react-icons" />
                                </Button>
                                <Button target="_blank" title='Stack Overflow' href="https://stackoverflow.com/users/599036/miguel-angel-acevedo">
                                    <FaStackOverflow className="react-icons" />
                                </Button>
                                <Button target="_blank" title='Twitter' href="https://www.twitter.com/faultydev">
                                    <FaTwitter className="react-icons" />
                                </Button>
                                <Button target="_blank" title='Buy me a Coffee' href="https://www.buymeacoffee.com/acevedomiguel">
                                    <SiBuymeacoffee className="react-icons" />
                                </Button>
                                <Button target="_blank" title="Instagram" href="https://www.instagram.com/acevedomiguel/">
                                    <FaInstagram className="react-icons" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </>);
}
