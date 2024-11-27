import { FaGithub, FaLinkedin, FaInstagram, FaStackOverflow, FaMastodon } from 'react-icons/fa';
import { FaBluesky } from "react-icons/fa6";
import { SiBuymeacoffee } from 'react-icons/si';

export const Footer = () => {
  return (<footer className="container p-5 bg-white sm:p-6 dark:bg-gray-900">
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="flex items-center justify-center mb-3">
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://www.linkedin.com/in/acevedomiguel/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaLinkedin className="react-icons" title='Linkedin' />
              <span className="sr-only">Linkedin</span>
            </a>
            <a href="https://github.com/acevedomiguel" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaGithub className="react-icons" title='GitHub' />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://stackoverflow.com/users/599036/miguel-angel-acevedo" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaStackOverflow className="react-icons" title='Stack Overflow' />
              <span className="sr-only">Stack Overflow</span>
            </a>
            <a href="https://bsky.app/profile/acevedomiguel.bsky.social" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaBluesky className="react-icons" title='Bluesky' />
              <span className="sr-only">Bluesky</span>
            </a>
            <a href="https://www.buymeacoffee.com/acevedomiguel" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <SiBuymeacoffee className="react-icons" title='Buy me a coffee' />
              <span className="sr-only">Buy me a coffee</span>
            </a>
            <a href="https://www.instagram.com/acevedomiguel/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaInstagram className="react-icons" title='Instagram' />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://infosec.exchange/@faultydev" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaMastodon className="react-icons" title='Mastodon' />
              <span className="sr-only">Mastodon</span>
            </a>
        </div>
    </div>
  </footer>)
}

export default Footer;
