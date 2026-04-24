import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";

export default function Index() {
	return (
		<Layout pageType="home">
			<Head>
				<title>Acevedo Miguel - Cloud Architect & DevOps Engineer</title>
				<meta
					name="description"
					content="Cloud Architect and DevOps Engineer with 20+ years of experience designing serverless, high-availability infrastructure across APAC. Delivering IoT solutions for the Japan energy market. Based in Hong Kong."
				/>
			</Head>
			<Container>
				<main id="main-content">
					<article className="m-auto py-4 max-w-3xl text-md">
						<header className="p-4 sm:p-6 items-center justify-center">
							<section className="mb-6" aria-labelledby="intro-heading">
								<h1 id="intro-heading" className="sr-only">
									About Acevedo Miguel - Cloud Architect & DevOps Engineer
								</h1>

								<p className="mb-3">
									Hi, I&apos;m <strong>Acevedo Miguel</strong>, a{" "}
									<strong>Cloud Architect and DevOps Engineer</strong> with over 20
									years of experience designing serverless, high-availability
									infrastructure across APAC.
								</p>

								<p className="mb-3">
									I started as an intern in high school, and since then, I have
									been exploring different languages and paradigms in this
									never-stopping industry. I have worked in{" "}
									<strong>
										marketing, social media, advertising, IoT (Internet of
										Things), and cloud computing
									</strong>{" "}
									for various clients and projects across Latin America and
									Asia. I specialize in AWS serverless architectures (Lambda, EKS),
									Kubernetes, and AWS IoT Core.
								</p>

								<p>
									I'm currently the <strong>Cloud Architect & Serverless Lead</strong>{" "}
									at <strong>Tensor Energy</strong>, a company that provides smart
									energy solutions for the Japan market. Based in Hong Kong (GMT+8),
									I enjoy collaborating with teams across Singapore, Australia, and
									Japan. I also enjoy learning from other developers, keeping up with
									the latest technologies, and making toys and furniture for my family
									in my spare time.
								</p>
							</section>

							<nav
								className="justify-center flex pt-4 space-x-4"
								aria-label="Quick navigation"
							>
								<a
									href="/resume"
									className="bg-sky-900 hover:bg-sky-700 text-white text-sm py-3 px-6 rounded-full transition-colors"
									title="View my complete professional resume"
								>
									View Resume
								</a>

								<a
									href="/resume.pdf"
									download="Acevedo_Miguel_Resume.pdf"
									className="bg-white hover:bg-gray-50 text-sky-900 border border-sky-900 text-sm py-3 px-6 rounded-full transition-colors"
									title="Download PDF resume"
								>
									Download PDF
								</a>
							</nav>

							<section
								className="mt-12 pt-8 border-t border-gray-200"
								aria-labelledby="expertise"
							>
								<h2 id="expertise" className="text-xl font-semibold mb-4">
									Areas of Expertise
								</h2>

								<div className="grid md:grid-cols-3 gap-6">
									<div>
										<h3 className="font-medium text-gray-900 mb-2">
											DevOps & Infrastructure
										</h3>
										<ul className="text-sm text-gray-600 space-y-1">
											<li>AWS Cloud Architecture</li>
											<li>Kubernetes & Docker</li>
											<li>CI/CD Pipelines</li>
											<li>Infrastructure as Code</li>
										</ul>
									</div>

									<div>
										<h3 className="font-medium text-gray-900 mb-2">
											Backend Development
										</h3>
										<ul className="text-sm text-gray-600 space-y-1">
											<li>Node.js & TypeScript</li>
											<li>Python & Go</li>
											<li>Microservices Architecture</li>
											<li>API Design & GraphQL</li>
										</ul>
									</div>

									<div>
										<h3 className="font-medium text-gray-900 mb-2">
											IoT & Integration
										</h3>
										<ul className="text-sm text-gray-600 space-y-1">
											<li>IoT Device Integration</li>
											<li>MQTT & Message Queues</li>
											<li>Real-time Data Processing</li>
											<li>Edge Computing</li>
										</ul>
									</div>
								</div>
							</section>
						</header>
					</article>
				</main>
			</Container>
		</Layout>
	);
}
