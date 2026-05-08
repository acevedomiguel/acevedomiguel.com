import Image from "next/image";

export default function Nav() {
	return (
		<header className="text-gray-600 body-font">
			<div className="container mx-auto mt-6 mb-8 px-4 sm:px-6 text-center">
				<div className="title-font font-medium items-center text-gray-900">
					<a href="/" title="Return to homepage" aria-label="Return to homepage">
						<Image
							src="/signature.svg"
							className="mx-auto"
							style={{ width: "360px", maxWidth: "100%", height: "auto" }}
							alt="Acevedo Miguel - Cloud Architect & DevOps Engineer"
							title="acevedo miguel"
							width={360}
							height={96}
							loading="eager"
						/>
					</a>
				</div>
			</div>
		</header>
	);
}
