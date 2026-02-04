import Image from "next/image";

export default function Header() {
	return (
		<header className="text-gray-600 body-font">
			<div className="container mx-auto mt-4 mb-4 text-center">
				<div className="title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
					<a href="/" title="Return to homepage" aria-label="Return to homepage">
						<Image
							src="/signature.svg"
							className="signature-logo mx-auto"
							alt="Acevedo Miguel - Senior DevOps & Backend Engineer"
							title="Acevedo Miguel"
							width={300}
							height={80}
							priority
						/>
					</a>
				</div>
				
				<nav className="flex justify-center items-center space-x-6 text-sm" aria-label="Main navigation">
					<a 
						href="/" 
						className="hover:text-sky-600 transition-colors"
						aria-label="Home"
					>
						Home
					</a>
					<a 
						href="/posts" 
						className="hover:text-sky-600 transition-colors font-medium text-sky-900"
						aria-label="Blog"
					>
						Blog
					</a>
					<a 
						href="/resume" 
						className="hover:text-sky-600 transition-colors"
						aria-label="Resume"
					>
						Resume
					</a>
					<a 
						href="/contact" 
						className="hover:text-sky-600 transition-colors"
						aria-label="Contact"
					>
						Contact
					</a>
				</nav>
			</div>
		</header>
	);
}
