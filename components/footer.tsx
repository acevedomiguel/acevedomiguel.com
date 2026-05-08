import {
	FaGithub,
	FaGitlab,
	FaInstagram,
	FaLinkedin,
	FaMastodon,
	FaStackOverflow,
} from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

export const Footer = () => {
	return (
		<footer className="editorial-page border-t border-gray-200 mt-10" role="contentinfo">
			<div className="container mx-auto px-4 sm:px-6 py-6">
				<div className="text-center">
					<nav aria-label="Social media links">
						<div className="flex justify-center items-center gap-6 editorial-ui">
							<a
								href="https://www.linkedin.com/in/acevedomiguel/"
								className="text-gray-500 hover:text-gray-900 transition-colors"
								aria-label="Visit LinkedIn profile"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedin className="react-icons" aria-hidden="true" />
								<span className="sr-only">LinkedIn</span>
							</a>
							<a
								href="https://github.com/acevedomiguel"
								className="text-gray-500 hover:text-gray-900 transition-colors"
								aria-label="Visit GitHub profile"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaGithub className="react-icons" aria-hidden="true" />
								<span className="sr-only">GitHub</span>
							</a>
							<a
								href="https://gitlab.com/acevedomiguel/"
								className="text-gray-500 hover:text-gray-900 transition-colors"
								aria-label="Visit GitLab profile"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaGitlab className="react-icons" aria-hidden="true" />
								<span className="sr-only">GitLab</span>
							</a>
							<a
								href="https://stackoverflow.com/users/599036/miguel-angel-acevedo"
								className="text-gray-500 hover:text-gray-900 transition-colors"
								aria-label="Visit Stack Overflow profile"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaStackOverflow className="react-icons" aria-hidden="true" />
								<span className="sr-only">Stack Overflow</span>
							</a>
							<a
								href="https://www.instagram.com/acevedomiguel/"
								className="text-gray-500 hover:text-gray-900 transition-colors"
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
