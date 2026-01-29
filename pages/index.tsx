import Head from "next/head";
import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";

export default function Index() {
	return (
		<Layout pageType="home">
			<Head>
				<title>Acevedo Miguel - Senior DevOps & Backend Engineer</title>
				<meta
					name="description"
					content="Senior DevOps & Backend Engineer with 20+ years of experience in cloud computing, IoT, and infrastructure. Currently Cloud Lead & IoT at Tensor Energy in Hong Kong."
				/>
			</Head>
			<Header />
			<Container>
				<main id="main-content">
					<article className="m-auto py-4 max-w-3xl text-md">
						<header className="p-4 sm:p-6 items-center justify-center">
							<section className="mb-6" aria-labelledby="intro-heading">
								<h1 id="intro-heading" className="sr-only">
									About Acevedo Miguel - Senior DevOps & Backend Engineer
								</h1>

								<p className="mb-3">
									Hi, I&apos;m <strong>Acevedo Miguel</strong>, a{" "}
									<strong>DevOps and Backend Engineer</strong> with over 20
									years of coding experience.
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
									Asia.{" "}
								</p>

								<p>
									I&apos;m currently the <strong>Cloud Lead & IoT</strong> at{" "}
									<strong>Tensor Energy</strong>, a company that provides smart
									energy solutions. I enjoy learning from other developers,
									keeping up with the latest technologies, and making toys and
									furniture for my family in my spare time. I&apos;m also
									interested in the growing market of space and the
									opportunities it offers for infrastructure, communication,
									embedded system, security, and reliability.
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
						</header>
					</article>
				</main>
			</Container>
		</Layout>
	);
}
