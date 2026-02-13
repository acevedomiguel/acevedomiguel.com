import Head from "next/head";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Container from "../../../components/container";
import Layout from "../../../components/layout";
import ResumeES from "../../../components/resume/index-es";

export default function Index() {
	return (
		<Layout pageType="resume">
			<Head>
				<title>
					Currículum - Acevedo Miguel | Más de 20 Años de Experiencia DevOps y Backend
				</title>
				<meta
					name="description"
					content="Currículum profesional completo de Acevedo Miguel - Ingeniero Senior DevOps con más de 20 años de experiencia en AWS, Kubernetes, IoT, Node.js, Python e infraestructura en la nube. Ver historial laboral detallado y habilidades técnicas."
				/>
			</Head>
			<Container>
				<Breadcrumbs className="max-w-3xl mx-auto px-6 mb-4 pt-4" />
				<main id="main-content">
					<article>
						<header className="max-w-3xl mx-auto px-6 mb-6">
							<h1 className="sr-only">Currículum Profesional - Acevedo Miguel</h1>

							{/* Minimalistic Download Section */}
							<div className="flex flex-col sm:flex-row sm:justify-end mb-4">
								<div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 text-sm">
									<span className="text-gray-500 mb-2 sm:mb-0">Descargar:</span>
									<div className="flex items-center space-x-3">
										<a
											href="/resume-es.pdf"
											download="Acevedo_Miguel_Resume.pdf"
											className="text-sky-900 hover:text-sky-700 underline transition-colors"
											title="Descargar currículum en PDF"
										>
											PDF
										</a>
										<span className="text-gray-300">|</span>
										<a
											href="/resume-es.pdf"
											target="_blank"
											rel="noopener noreferrer"
											className="text-sky-900 hover:text-sky-700 underline transition-colors"
											title="Ver currículum en PDF en nueva pestaña"
										>
											Ver
										</a>
									</div>
								</div>
							</div>
						</header>

						<ResumeES />
					</article>
				</main>
			</Container>
		</Layout>
	);
}
