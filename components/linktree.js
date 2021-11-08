import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaMapMarker } from 'react-icons/fa';
import { HiDocumentSearch } from 'react-icons/hi';
import { SiBuymeacoffee } from 'react-icons/si';
import Link from 'next/link'

export default function Index() {
    return (
    <>
        <div className="mt-10"></div>
        <div className="px-4 mx-auto mb-4 sm:max-w-xl">
            <div className="grid max-w-2xl sm:mx-auto">
                <a href="#" target="_blank" className="overflow-hidden rounded-2xl">
                    <div className="flex items-center justify-center text-center p-5">
                        <div className="pr-4">
                        <div className="justify-center flex">
                            <img className="rounded-full w-28 mb-3" src="/profile.png" alt="" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-lg">Miguel Acevedo</h6>
                        <p className="text-sm text-gray-900 mb-2">Target-oriented, senior software developer, with extensive experience in the digital marketing world and IoT. Knowledge of web technologies and understanding of devops and infrastructure.</p>

                        <FaMapMarker className="react-icons text-gray-500" />{' '}
                        <span className="text-sm text-gray-500">Hong Kong</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div className="px-4 mx-auto mb-4 sm:max-w-xl">
            <div className="grid max-w-2xl sm:mx-auto">
                <Link href="/resume">
                <a className="linktree-resume overflow-hidden rounded-2xl shadow-sm">
                    <div className="text-white flex items-center justify-between p-5 rounded-sm">
                        <div className="pr-4">
                        <HiDocumentSearch className="react-icons" />{' '}
                        <span className="mb-2 font-semibold leading-5">Resume</span>
                        </div>
                    </div>
                </a>
                </Link>
            </div>
        </div>

        <div className="px-4 mx-auto mb-4 sm:max-w-xl">
            <div className="grid max-w-2xl sm:mx-auto">
                <a href="http://hk.linkedin.com/in/acevedomiguel" rel="noreferrer" target="_blank" className="linktree-linkedin overflow-hidden rounded-2xl shadow-sm">
                    <div className="text-white flex items-center justify-between p-5 rounded-sm">
                        <div className="pr-4">
                        <FaLinkedin className="react-icons" />{' '}
                        <span className="mb-2 font-semibold leading-5">Linkedin</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div className="px-4 mx-auto mb-4 sm:max-w-xl">
            <div className="grid max-w-2xl sm:mx-auto">
                <a href="https://www.twitter.com/faultydev" rel="noreferrer" target="_blank" className="linktree-twitter overflow-hidden rounded-2xl shadow-sm">
                    <div className="text-white flex items-center justify-between p-5 rounded-sm">
                        <div className="pr-4">
                        <FaTwitter className="react-icons" />{' '}
                        <span className="mb-2 font-semibold leading-5">@faultydev</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div className="px-4 mx-auto mb-4 sm:max-w-xl">
            <div className="grid max-w-2xl sm:mx-auto">
                <a href="https://github.com/acevedomiguel" rel="noreferrer" target="_blank" className="linktree-github overflow-hidden rounded-2xl shadow-sm">
                    <div className="text-white flex items-center justify-between p-5 rounded-sm">
                        <div className="pr-4">
                        <FaGithub className="react-icons" size="1.2em" />{' '}
                        <span className="mb-2 font-semibold leading-5">GitHub</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div className="px-4 mx-auto mb-4 sm:max-w-xl">
            <div className="grid max-w-2xl sm:mx-auto">
                <a href="https://www.buymeacoffee.com/acevedomiguel" rel="noreferrer" target="_blank" className="linktree-buymeacoffee overflow-hidden rounded-2xl shadow-sm">
                    <div className="text-black flex items-center justify-between p-5 rounded-sm">
                        <div className="pr-4">
                        <SiBuymeacoffee className="react-icons" size="1.2em" />{' '}
                        <span className="mb-2 font-semibold leading-5">Buy me a coffee</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div className="px-4 mx-auto mb-4 sm:max-w-xl">
            <div className="grid max-w-2xl sm:mx-auto">
                <a href="https://www.instagram.com/acevedomiguel/" rel="noreferrer" target="_blank" className="linktree-instagram overflow-hidden rounded-2xl shadow-sm">
                    <div className="text-white flex items-center justify-between p-5 rounded-sm">
                        <div className="pr-4">
                        <FaInstagram className="react-icons" size="1.2em" />{' '}
                        <span className="mb-2 font-semibold leading-5">acevedomiguel</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </>
    )
}
