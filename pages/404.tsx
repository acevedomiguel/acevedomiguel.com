import Head from "next/head";
import Link from "next/link";
import { FaHome, FaFileAlt, FaEnvelope } from "react-icons/fa";
import Header from "../components/header";
import Container from "../components/container";
import Layout from "../components/layout";

export default function Custom404() {
	return (
		<Layout pageType="generic">
			<Head>
				<title>404 - Page Not Found | Acevedo Miguel</title>
				<meta
					name="description"
					content="The page you're looking for doesn't exist. Navigate back to the homepage or explore other sections."
				/>
			</Head>
			<Header />
			<Container>
				<main id="main-content" className="max-w-3xl mx-auto py-16 px-6">
					<div className="text-center">
						{/* 404 Visual */}
						<h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>

						{/* Error Message */}
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							Page Not Found
						</h2>
						<p className="text-lg text-gray-600 mb-8">
							Sorry, the page you&apos;re looking for doesn&apos;t exist or has
							been moved.
						</p>

						{/* Navigation Options */}
						<div className="grid md:grid-cols-3 gap-6 mb-12">
							<Link
								href="/"
								className="group bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-6 transition-all hover:shadow-sm"
							>
								<FaHome className="w-8 h-8 text-sky-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
								<h3 className="font-semibold text-gray-900 mb-2">Homepage</h3>
								<p className="text-sm text-gray-600">
									Return to the main page
								</p>
							</Link>

							<Link
								href="/resume"
								className="group bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-6 transition-all hover:shadow-sm"
							>
								<FaFileAlt className="w-8 h-8 text-sky-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
								<h3 className="font-semibold text-gray-900 mb-2">Resume</h3>
								<p className="text-sm text-gray-600">
									View my professional experience
								</p>
							</Link>

							<Link
								href="/contact"
								className="group bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-6 transition-all hover:shadow-sm"
							>
								<FaEnvelope className="w-8 h-8 text-sky-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
								<h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
								<p className="text-sm text-gray-600">Get in touch with me</p>
							</Link>
						</div>

						{/* Additional Help */}
						<div className="text-center">
							<p className="text-sm text-gray-500">
								If you believe this is an error, please{" "}
								<Link
									href="/contact"
									className="text-sky-600 hover:text-sky-700 underline"
								>
									contact me
								</Link>
								.
							</p>
						</div>
					</div>
				</main>
			</Container>
		</Layout>
	);
}
