import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaStackOverflow, FaMastodon, FaCalendarDay } from 'react-icons/fa';
import { SiBuymeacoffee } from 'react-icons/si';

export const Footer = () => {
  return (<footer className="container p-5 bg-white sm:p-6 dark:bg-gray-900">
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://www.linkedin.com/in/acevedomiguel/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaLinkedin className="react-icons" />
              <span className="sr-only">Linkedin</span>
            </a>
            <a href="https://github.com/acevedomiguel" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaGithub className="react-icons" />
              <span className="sr-only">Github</span>
            </a>
            <a href="https://stackoverflow.com/users/599036/miguel-angel-acevedo" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaStackOverflow className="react-icons" />
              <span className="sr-only">Stack Overflow</span>
            </a>
            <a href="https://www.twitter.com/faultydev" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaTwitter className="react-icons" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://www.buymeacoffee.com/acevedomiguel" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <SiBuymeacoffee className="react-icons" />
              <span className="sr-only">Buy me a coffee</span>
            </a>
            <a href="https://www.instagram.com/acevedomiguel/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaInstagram className="react-icons" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://infosec.exchange/@faultydev" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaMastodon className="react-icons" />
              <span className="sr-only">Mastodon</span>
            </a>
            <a href="https://calendly.com/acevedomiguel/30-min-zoom-meeting" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaCalendarDay className="react-icons" />
              <span className="sr-only">Calendly</span>
            </a>
        </div>
    </div>
  </footer>)
}

export default Footer;
