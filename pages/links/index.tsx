import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import Container from "../../components/container";
import {
	FaGithub,
	FaGitlab,
	FaInstagram,
	FaLinkedin,
	FaStackOverflow,
} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const links = [
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/acevedomiguel/",
		icon: FaLinkedin,
		ariaLabel: "Visit LinkedIn profile",
	},
	{
		name: "GitHub",
		href: "https://github.com/acevedomiguel",
		icon: FaGithub,
		ariaLabel: "Visit GitHub profile",
	},
	{
		name: "GitLab",
		href: "https://gitlab.com/acevedomiguel/",
		icon: FaGitlab,
		ariaLabel: "Visit GitLab profile",
	},
	{
		name: "Stack Overflow",
		href: "https://stackoverflow.com/users/599036/miguel-angel-acevedo",
		icon: FaStackOverflow,
		ariaLabel: "Visit Stack Overflow profile",
	},
	{
		name: "Instagram",
		href: "https://www.instagram.com/acevedomiguel/",
		icon: FaInstagram,
		ariaLabel: "Visit Instagram profile",
	},
	{
		name: "Website",
		href: "https://acevedomiguel.com",
		icon: CgWebsite,
		ariaLabel: "Visit my website",
	},
];

export default function LinksPage() {
	return (
		<Layout
			pageType="generic"
			showFooter={false}
			title="Links | Acevedo Miguel"
			description="Connect with Acevedo Miguel - Cloud Architect and DevOps Engineer with 20+ years of experience in serverless infrastructure, IoT, and cloud computing. Find all social media and professional links in one place."
		>
			<Head>
				<title>Links | Acevedo Miguel</title>
			</Head>
			<Container>
				<main
					id="main-content"
					className="editorial-page min-h-screen flex items-center justify-center py-10 sm:py-12 px-4"
				>
					<div className="w-full max-w-xl mx-auto">
						{/* Profile Section */}
						<div className="text-center mb-8 sm:mb-10">
							<div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-5 sm:mb-6">
								<Image
									src="/profile.webp"
									alt="Acevedo Miguel"
									fill
									className="rounded-full object-cover border-4 border-white shadow-lg"
								/>
							</div>
							<h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3 editorial-ui">
								Acevedo Miguel
							</h1>
							<p className="text-gray-600 max-w-2xl mx-auto">
								I'm a Cloud Architect and DevOps Engineer with a passion for IoT and serverless infrastructure. I have over 20 years of experience designing high-availability systems across APAC. I love creating innovative solutions using connected devices, AWS, and cloud computing. In my free time, I enjoy woodworking and playing with my kids.
							</p>
						</div>

						{/* Links Section */}
						<nav aria-label="Social media and professional links">
							<div className="space-y-3 sm:space-y-4 editorial-ui">
								{links.map((link) => {
									const Icon = link.icon;
									return (
										<a
											key={link.name}
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={link.ariaLabel}
											className="editorial-card flex items-center justify-center w-full px-5 sm:px-6 py-3.5 sm:py-4 text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md hover:border-gray-300"
										>
											<Icon className="w-5 h-5 mr-3" aria-hidden="true" />
											<span className="font-medium">{link.name}</span>
										</a>
									);
									})}
								</div>
							</nav>

						{/* Footer */}
						<footer className="mt-10 sm:mt-12 text-center text-sm text-gray-500 editorial-ui">
							<p>acevedomiguel.com</p>
						</footer>
					</div>
				</main>
			</Container>
		</Layout>
	);
}