import Image from "next/image";
import { useRouter } from "next/router";

export default function Nav() {
	const router = useRouter();
	const isSpanishPage = router.asPath.startsWith('/es');
	
	if (isSpanishPage) {
		return (
			<header className="text-gray-600 body-font">
				<div className="container mx-auto mt-4 mb-4 text-center">
					<div className="title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
						<a href="/es" title="Volver a página principal" aria-label="Volver a página principal">
							<Image
								src="/signature.svg"
								className="signature-logo mx-auto"
								alt="Acevedo Miguel - Ingeniero Senior DevOps y Backend"
								title="acevedo miguel"
								width={300}
								height={80}
							/>
						</a>
					</div>

					<nav className="md:py-1 md:px-4 items-center text-base" aria-label="Navegación principal">
						<a href="/es" className="mx-4 md:mx-8 hover:text-gray-700 text-sm py-2 px-3" aria-label="Navegar a página principal">
							inicio
						</a>
						<a href="/es/resume" className="mx-4 md:mx-8 hover:text-black text-sm py-2 px-3" aria-label="Navegar a página de currículum">
							currículum
						</a>
						{/* <a href="/contact" className="mx-4 md:mx-8 hover:text-black text-sm">contact</a> */}
						<span className="text-gray-300 mx-2">|</span>
						<a href="/" className="mx-2 text-sm py-2 px-3 hover:text-gray-700" aria-label="Change to English" title="English">
							EN
						</a>
					</nav>
				</div>
			</header>
		);
	}

	// English version
	return (
		<header className="text-gray-600 body-font">
			<div className="container mx-auto mt-4 mb-4 text-center">
				<div className="title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
					<a href="/" title="Return to homepage" aria-label="Return to homepage">
						<Image
							src="/signature.svg"
							className="signature-logo mx-auto"
							alt="Acevedo Miguel - Senior DevOps & Backend Engineer"
							title="acevedo miguel"
							width={300}
							height={80}
						/>
					</a>
				</div>

				<nav className="md:py-1 md:px-4 items-center text-base" aria-label="Main navigation">
					<a href="/" className="mx-4 md:mx-8 hover:text-gray-700 text-sm py-2 px-3" aria-label="Navigate to home page">
						home
					</a>
					<a href="/resume" className="mx-4 md:mx-8 hover:text-black text-sm py-2 px-3" aria-label="Navigate to resume page">
						resume
					</a>
					{/* <a href="/contact" className="mx-4 md:mx-8 hover:text-black text-sm">contact</a> */}
					<span className="text-gray-300 mx-2">|</span>
					<a href="/es" className="mx-2 text-sm py-2 px-3 hover:text-gray-700" aria-label="Cambiar a español" title="Español">
						ES
					</a>
				</nav>
			</div>
		</header>
	);
}
