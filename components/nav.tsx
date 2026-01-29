import Image from "next/image";

export default function Nav() {
	return (
		<header className="text-gray-600 body-font">
			<div className="container mx-auto mt-4 mb-4 text-center">
				<div className="title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
					<a href="/">
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

				<nav className="md:py-1 md:px-4 items-center text-base">
					<a href="/" className="mx-4 md:mx-8 hover:text-gray-700 text-sm py-2 px-3">
						home
					</a>
					<a href="/resume" className="mx-4 md:mx-8 hover:text-black text-sm py-2 px-3">
						resume
					</a>
					{/* <a href="/contact" className="mx-4 md:mx-8 hover:text-black text-sm">contact</a> */}
				</nav>
			</div>
		</header>
	);
}
