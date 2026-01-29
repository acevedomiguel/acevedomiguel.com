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
		<footer className="text-gray-600 body-font" role="contentinfo">
			<div className="container mx-auto p-5 sm:p-6">
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<div className="text-center mb-3">
					<nav aria-label="Social media links">
						<div className="flex justify-center items-center space-x-6">
							<a
								href="https://www.linkedin.com/in/acevedomiguel/"
								className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
								aria-label="Visit LinkedIn profile"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedin className="react-icons" aria-hidden="true" />
								<span className="sr-only">LinkedIn</span>
							</a>
							<a
								href="https://github.com/acevedomiguel"
								className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
								aria-label="Visit GitHub profile"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaGithub className="react-icons" aria-hidden="true" />
								<span className="sr-only">GitHub</span>
							</a>
							<a
								href="https://stackoverflow.com/users/599036/miguel-angel-acevedo"
								className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
								aria-label="Visit Stack Overflow profile"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaStackOverflow className="react-icons" aria-hidden="true" />
								<span className="sr-only">Stack Overflow</span>
							</a>
							<a
								href="https://www.buymeacoffee.com/acevedomiguel"
								className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
								aria-label="Support on Buy Me a Coffee"
								target="_blank"
								rel="noopener noreferrer"
							>
								<SiBuymeacoffee className="react-icons" aria-hidden="true" />
								<span className="sr-only">Buy me a coffee</span>
							</a>
							<a
								href="https://www.instagram.com/acevedomiguel/"
								className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
								aria-label="Visit Instagram profile"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaInstagram className="react-icons" aria-hidden="true" />
								<span className="sr-only">Instagram</span>
							</a>
						</div>
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
