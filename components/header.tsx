import Image from "next/image";

export default function Header() {
	return (
		<header className="text-gray-600 body-font" role="banner">
			<div className="container mx-auto mt-4 mb-4 text-center">
				<div className="title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
					<a href="/" title="Return to homepage" aria-label="Return to homepage">
						<Image
							src="/signature.svg"
							className="mx-auto"
							style={{ width: "300px", maxWidth: "100%", height: "auto" }}
							alt="Acevedo Miguel - Senior DevOps & Backend Engineer"
							title="Acevedo Miguel"
							width={300}
							height={80}
							loading="eager"
							priority
						/>
					</a>
				</div>
			</div>
		</header>
	);
}