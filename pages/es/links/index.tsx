import Head from "next/head";
import Image from "next/image";
import Layout from "../../../components/layout";
import Container from "../../../components/container";
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
		ariaLabel: "Visitar perfil de LinkedIn",
	},
	{
		name: "GitHub",
		href: "https://github.com/acevedomiguel",
		icon: FaGithub,
		ariaLabel: "Visitar perfil de GitHub",
	},
	{
		name: "Stack Overflow",
		href: "https://stackoverflow.com/users/599036/miguel-angel-acevedo",
		icon: FaStackOverflow,
		ariaLabel: "Visitar perfil de Stack Overflow",
	},
	{
		name: "Buy Me a Coffee",
		href: "https://www.buymeacoffee.com/acevedomiguel",
		icon: SiBuymeacoffee,
		ariaLabel: "Apoyar en Buy Me a Coffee",
	},
	{
		name: "Instagram",
		href: "https://www.instagram.com/acevedomiguel/",
		icon: FaInstagram,
		ariaLabel: "Visitar perfil de Instagram",
	},
	{
		name: "Sitio Web",
		href: "https://acevedomiguel.com",
		icon: CgWebsite,
		ariaLabel: "Visitar mi sitio web",
	},
];

export default function LinksPageES() {
	return (
		<Layout pageType="generic" showFooter={false}>
			<Head>
				<title>Enlaces | Miguel Angel Acevedo</title>
				<meta
					name="description"
					content="Conecta con Miguel Angel Acevedo - Ingeniero de Software con más de 20 años de experiencia en IoT y DevOps. Encuentra todos los enlaces de redes sociales y profesionales en un solo lugar."
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
								Soy un ingeniero de software con pasión por IoT y DevOps. Tengo más de 20 años de experiencia en el campo. Me encanta crear soluciones innovadoras que utilizan dispositivos conectados y computación en la nube. En mi tiempo libre, disfruto de la carpintería y jugar con mis hijos.
							</p>
						</div>

						{/* Links Section */}
						<nav aria-label="Enlaces de redes sociales y profesionales">
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
