import Head from "next/head";
import Breadcrumbs from "../components/Breadcrumbs";
import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";

export default function Sitemap() {
	const sitePages = [
		{
			title: "Home",
			url: "/",
			description:
				"Learn about Acevedo Miguel, Senior DevOps & Backend Engineer with 20+ years experience",
		},
		{
			title: "Resume",
			url: "/resume",
			description:
				"Complete professional resume with work experience, skills, and achievements",
		},
		{
			title: "Contact",
			url: "/contact",
			description:
				"Get in touch for DevOps consulting, backend development, or IoT projects",
		},
	];

	return (
		<Layout pageType="generic">
			<Head>
				<title>Site Map - Acevedo Miguel</title>
				<meta
					name="description"
					content="Complete site map for acevedomiguel.com - navigate to all pages including resume, contact, and professional information."
				/>
			</Head>
			<Header />
			<Container>
				<Breadcrumbs className="max-w-3xl mx-auto px-6 mb-4 pt-4" />
				<main role="main" id="main-content">
					<article className="max-w-3xl mx-auto py-8">
						<header className="mb-8">
							<h1 className="text-3xl font-bold text-gray-900 mb-4">
								Site Map
							</h1>
							<p className="text-lg text-gray-600">
								Navigate to all pages on acevedomiguel.com
							</p>
						</header>

						<section aria-labelledby="main-pages">
							<h2 id="main-pages" className="text-xl font-semibold mb-6">
								Main Pages
							</h2>

							<nav aria-label="Site map navigation">
								<ul className="space-y-6" role="list">
									{sitePages.map((page) => (
										<li
											key={page.url}
											className="border-l-4 border-sky-600 pl-4"
										>
											<h3 className="text-lg font-medium mb-2">
												<a
													href={page.url}
													className="text-sky-900 hover:text-sky-700 transition-colors"
													title={`Visit ${page.title}`}
												>
													{page.title}
												</a>
											</h3>
											<p className="text-gray-600 text-sm">
												{page.description}
											</p>
											<span className="text-xs text-gray-500 font-mono">
												{page.url === "/"
													? "acevedomiguel.com"
													: `acevedomiguel.com${page.url}`}
											</span>
										</li>
									))}
								</ul>
							</nav>
						</section>

						<section
							className="mt-12 pt-8 border-t border-gray-200"
							aria-labelledby="technical-info"
						>
							<h2 id="technical-info" className="text-xl font-semibold mb-4">
								Technical Information
							</h2>

							<div className="grid md:grid-cols-2 gap-6 text-sm">
								<div>
									<h3 className="font-medium text-gray-900 mb-2">
										SEO Resources
									</h3>
									<ul className="text-gray-600 space-y-1" role="list">
										<li>
											<a
												href="/sitemap.xml"
												className="hover:text-sky-600 transition-colors"
												title="XML Sitemap for search engines"
											>
												XML Sitemap
											</a>
										</li>
										<li>
											<a
												href="/robots.txt"
												className="hover:text-sky-600 transition-colors"
												title="Robots.txt file for web crawlers"
											>
												Robots.txt
											</a>
										</li>
									</ul>
								</div>

								<div>
									<h3 className="font-medium text-gray-900 mb-2">
										Last Updated
									</h3>
									<p className="text-gray-600">
										{new Date().toLocaleDateString("en-US", {
											year: "numeric",
											month: "long",
											day: "numeric",
										})}
									</p>
								</div>
							</div>
						</section>
					</article>
				</main>
			</Container>
		</Layout>
	);
}
