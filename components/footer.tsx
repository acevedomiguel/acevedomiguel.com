import {
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaMastodon,
	FaStackOverflow,
} from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";

export const Footer = () => {
	return (
		<footer className="text-gray-600 body-font">
			<div className="container mx-auto p-5 sm:p-6">
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<div className="text-center mb-3">
					<div className="flex justify-center items-center space-x-6">
						<a
							href="https://www.linkedin.com/in/acevedomiguel/"
							className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
						>
							<FaLinkedin className="react-icons" title="LinkedIn" />
							<span className="sr-only">Linkedin</span>
						</a>
						<a
							href="https://github.com/acevedomiguel"
							className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
						>
							<FaGithub className="react-icons" title="GitHub" />
							<span className="sr-only">GitHub</span>
						</a>
						<a
							href="https://stackoverflow.com/users/599036/miguel-angel-acevedo"
							className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
						>
							<FaStackOverflow className="react-icons" title="Stack Overflow" />
							<span className="sr-only">Stack Overflow</span>
						</a>
						<a
							href="https://www.buymeacoffee.com/acevedomiguel"
							className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
						>
							<SiBuymeacoffee className="react-icons" title="Buy me a coffee" />
							<span className="sr-only">Buy me a coffee</span>
						</a>
						<a
							href="https://www.instagram.com/acevedomiguel/"
							className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
						>
							<FaInstagram className="react-icons" title="Instagram" />
							<span className="sr-only">Instagram</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
