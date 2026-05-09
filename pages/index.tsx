import Head from "next/head";
import { FaDownload } from "react-icons/fa";
import Container from "../components/container";
import Layout from "../components/layout";
import AreaExpertise from "../components/area_expertise";

export default function Index() {
	return (
		<Layout pageType="home">
			<Head>
				<title>Acevedo Miguel - Cloud Architect & DevOps Engineer</title>
			</Head>
			<Container>
				<main id="main-content">
					<article className="editorial-page m-auto py-4 sm:py-6 max-w-3xl px-4 sm:px-6">
						<header className="items-center justify-center">
							<section className="mb-6" aria-labelledby="intro-heading">
								<h1 id="intro-heading" className="sr-only">
									About Acevedo Miguel - Cloud Architect & DevOps Engineer
								</h1>

								<p className="mb-4">
									Hi, I&apos;m <strong>Acevedo Miguel</strong>, a{" "}
									<strong>Cloud Architect and DevOps Engineer</strong> with over 20
									years of experience designing serverless, high-availability
									infrastructure across APAC.
								</p>

								<p className="mb-4">
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

								<p className="mb-2">
									I'm currently the <strong>Cloud Architect & Serverless Lead</strong>{" "}
									at <strong>Tensor Energy</strong>, a company that provides smart
									energy solutions for the Japan market. Based in Hong Kong (GMT+8),
									I enjoy collaborating with teams across Singapore, US, Europe, and Japan. 
                  I also enjoy learning from other developers, keeping up with
									the latest technologies, and making toys and furniture for my family
									in my spare time.
								</p>
							</section>

							<nav
								className="justify-center flex flex-col sm:flex-row pt-5 gap-3 sm:gap-4 editorial-ui"
								aria-label="Quick navigation"
							>
								<a
									href="/resume"
									className="editorial-button-primary bg-sky-900 hover:bg-sky-700 text-white text-sm py-3 px-6 rounded-full transition-colors text-center"
									title="View my complete professional resume"
								>
									View Resume
								</a>

								<a
									href="/resume.pdf"
									download="Acevedo_Miguel_Resume.pdf"
									className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-sky-900 border border-sky-900 text-sm py-3 px-6 rounded-full transition-colors editorial-ui"
									title="Download PDF resume"
								>
									<FaDownload className="w-4 h-4 shrink-0" aria-hidden="true" />
									<span>Download Resume (PDF)</span>
								</a>
								<a
									href="/contact"
									className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-sky-900 border border-sky-900 text-sm py-3 px-6 rounded-full transition-colors editorial-ui"
									title="Contact me for consulting and opportunities"
								>
									Contact Me
								</a>
							</nav>

							<section
								className="mt-10 sm:mt-12 pt-8 border-t border-gray-200"
								aria-labelledby="expertise"
							>
								<AreaExpertise />
							</section>
						</header>
					</article>
				</main>
			</Container>
		</Layout>
	);
}
