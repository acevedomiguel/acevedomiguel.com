import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import LinkTree from '../components/linktree'
import Link from 'next/link';
import {
    FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaMapMarker, FaStackOverflow
} from 'react-icons/fa';
import { HiDocumentSearch } from 'react-icons/hi';
import { SiBuymeacoffee } from 'react-icons/si';

export default function Index() {
    return (<>
        <Layout>
            <Head>
                <title>Home</title>
            </Head>
            <Container>
                <div className='px-4 mx-auto mb-4 sm:max-w-xl'>
                    <div className="bg-white shadow-md overflow-hidden sm:rounded-xl mt-8 mb-8">
                        <div className="px-4 py-5 sm:px-6">
                            <div className="flex items-center justify-between">
                                <div className="flex-0 min-w-0">
                                    <div className="relative w-14 h-14 mr-2">
                                    <img className="rounded-full border border-gray-100 shadow-sm" src="/profile.png" alt="user image" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="font-bold text-gray-900">Acevedo Miguel Angel</div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center text-xs text-gray-500">
                                            <a href='https://www.acevedomiguel.com/'>acevedomiguel.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border-t border-gray-200 '>
                            <div className="p-6 items-center justify-center">
                                <div className='mb-4 text-sm'>
                                Target-oriented, senior software developer, with extensive experience (over 20 years) in the digital marketing world and IoT. Knowledge of web technologies and understanding of devops and infrastructure.
                                </div>
                                <div className='justify-center flex'>
                                    <Link href={"/resume"} >
                                        <button className="bg-sky-300 hover:bg-sky-900 text-white text-sm py-2 px-4 rounded-full pl-12 pr-12">View Resume</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='border-t border-gray-200 '>
                            <div className="p-4 items-center justify-center flex">
                                <Link href="http://hk.linkedin.com/in/acevedomiguel" >
                                    <button title='Linkedin' className="w-12 h-12 mr-2 items-center justify-center text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
                                        <FaLinkedin className="react-icons" />
                                    </button>
                                </Link>
                                <Link href="https://github.com/acevedomiguel">
                                    <button title='GitHub' className="w-12 h-12 mr-2 items-center justify-center text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
                                        <FaGithub className="react-icons" />
                                    </button>
                                </Link>
                                <Link href="https://stackoverflow.com/users/599036/miguel-angel-acevedo">
                                    <button title='Stack Overflow' className="w-12 h-12 mr-2 items-center justify-center text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
                                        <FaStackOverflow className="react-icons" />
                                    </button>
                                </Link>
                                <Link href="https://www.twitter.com/faultydev">
                                    <button title='Twitter' className="w-12 h-12 mr-2 items-center justify-center text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
                                        <FaTwitter className="react-icons" />
                                    </button>
                                </Link>
                                <Link href="https://www.buymeacoffee.com/acevedomiguel">
                                    <button title='Buy me a Coffee' className="w-12 h-12 mr-2 items-center justify-center text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
                                        <SiBuymeacoffee className="react-icons" />
                                    </button>
                                </Link>
                                <Link href="https://www.instagram.com/acevedomiguel/">
                                    <button className="w-12 h-12 mr-2 items-center justify-center text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
                                        <FaInstagram className="react-icons" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    </>);
}
