import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import Container from "../../components/container";
import {
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaStackOverflow,
} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { SiBuymeacoffee } from "react-icons/si";

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
		name: "Stack Overflow",
		href: "https://stackoverflow.com/users/599036/miguel-angel-acevedo",
		icon: FaStackOverflow,
		ariaLabel: "Visit Stack Overflow profile",
	},
	{
		name: "Buy Me a Coffee",
		href: "https://www.buymeacoffee.com/acevedomiguel",
		icon: SiBuymeacoffee,
		ariaLabel: "Support on Buy Me a Coffee",
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
		<Layout pageType="generic" showFooter={false}>
			<Head>
				<title>Links | Miguel Angel Acevedo</title>
				<meta
					name="description"
					content="Connect with Miguel Angel Acevedo - Software Engineer with 20+ years of experience in IoT and DevOps. Find all social media and professional links in one place."
				/>
			</Head>
			<Container>
				<main id="main-content" className="min-h-screen flex items-center justify-center py-12">
					<div className="w-full max-w-md mx-auto px-4">
						{/* Profile Section */}
						<div className="text-center mb-8">
							<div className="relative w-32 h-32 mx-auto mb-6">
								<Image
									src="/profile.webp"
									alt="Miguel Angel Acevedo"
									fill
									className="rounded-full object-cover border-4 border-white shadow-lg"
									priority
								/>
							</div>
							<h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
								Miguel Angel Acevedo
							</h1>
							<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
								I'm a software engineer with a passion for IoT and DevOps. I have over 20 years of experience in the field. I love creating innovative solutions that use connected devices and cloud computing. In my free time, I enjoy woodworking and playing with my kids.
							</p>
						</div>

						{/* Links Section */}
						<nav aria-label="Social media and professional links">
							<div className="space-y-3">
								{links.map((link) => {
									const Icon = link.icon;
									return (
										<a
											key={link.name}
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={link.ariaLabel}
											className="flex items-center justify-center w-full px-6 py-4 text-gray-700 bg-white rounded-full border border-gray-200 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700"
										>
											<Icon className="w-5 h-5 mr-3" aria-hidden="true" />
											<span className="font-medium">{link.name}</span>
										</a>
									);
									})}
								</div>
							</nav>

						{/* Footer */}
						<footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
							<p>acevedomiguel.com</p>
						</footer>
					</div>
				</main>
			</Container>
		</Layout>
	);
}