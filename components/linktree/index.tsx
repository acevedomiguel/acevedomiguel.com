import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaMapMarker } from 'react-icons/fa';
import { HiDocumentSearch } from 'react-icons/hi';
import { SiBuymeacoffee } from 'react-icons/si';
import Button from './button';

export const Linktree = () => {
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

        <Button link="/resume" label="Resume" iconClassName="linktree-resume">
            <HiDocumentSearch className="react-icons" />
        </Button>

        <Button link="http://hk.linkedin.com/in/acevedomiguel" label="Linkedin" iconClassName="linktree-linkedin">
            <FaLinkedin className="react-icons" />
        </Button>

        <Button link="https://www.twitter.com/faultydev" label="@faultydev" iconClassName="linktree-twitter">
            <FaTwitter className="react-icons" />
        </Button>

        <Button link="https://github.com/acevedomiguel" label="GitHub" iconClassName="linktree-github">
            <FaGithub className="react-icons" />
        </Button>

        <Button link="https://www.buymeacoffee.com/acevedomiguel" label="Buy me a coffee" iconClassName="linktree-buymeacoffee">
            <SiBuymeacoffee className="react-icons" />
        </Button>

        <Button link="https://www.instagram.com/acevedomiguel/" label="@acevedomiguel" iconClassName="linktree-instagram">
            <FaInstagram className="react-icons" />
        </Button>
    </>
    )
}

export default Linktree;
