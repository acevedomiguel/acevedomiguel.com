import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";

export default function Index() {
	return (
		<Layout pageType="home">
			<Head>
				<title>Acevedo Miguel - Ingeniero Senior DevOps y Backend</title>
				<meta
					name="description"
					content="Ingeniero Senior DevOps y Backend con más de 20 años de experiencia en computación en la nube, IoT e infraestructura. Actualmente Cloud Lead & IoT en Tensor Energy en Hong Kong."
				/>
			</Head>
			<Container>
				<main id="main-content">
					<article className="m-auto py-4 max-w-3xl text-md">
						<header className="p-4 sm:p-6 items-center justify-center">
							<section className="mb-6" aria-labelledby="intro-heading">
								<h1 id="intro-heading" className="sr-only">
									Sobre Acevedo Miguel - Ingeniero Senior DevOps y Backend
								</h1>

								<p className="mb-3">
									Hola, soy <strong>Acevedo Miguel</strong>, un{" "}
									<strong>Ingeniero DevOps y Backend</strong> con más de 20
									años de experiencia en programación.
								</p>

								<p className="mb-3">
									Comencé como pasante en la escuela secundaria, y desde entonces he
									estado explorando diferentes lenguajes y paradigmas en esta
									industria en constante evolución. He trabajado en{" "}
									<strong>
										marketing, redes sociales, publicidad, IoT (Internet de las
										Cosas) y computación en la nube
									</strong>{" "}
									para varios clientes y proyectos en América Latina y
									Asia.{" "}
								</p>

								<p>
									Actualmente soy el <strong>Cloud Lead & IoT</strong> en{" "}
									<strong>Tensor Energy</strong>, una empresa que proporciona soluciones
									inteligentes de energía. Disfruto aprender de otros desarrolladores,
									mantenerme al día con las últimas tecnologías y hacer juguetes y
									muebles para mi familia en mi tiempo libre. También estoy
									interesado en el creciente mercado espacial y las
									oportunidades que ofrece para infraestructura, comunicación,
									sistemas embebidos, seguridad y confiabilidad.
								</p>
							</section>

							<nav
								className="justify-center flex pt-4 space-x-4"
								aria-label="Navegación rápida"
							>
								<a
									href="/es/resume"
									className="bg-sky-900 hover:bg-sky-700 text-white text-sm py-3 px-6 rounded-full transition-colors"
									title="Ver mi currículum profesional completo"
								>
									Ver Currículum
								</a>

								<a
									href="/resume-es.pdf"
									download="Acevedo_Miguel_Resume.pdf"
									className="bg-white hover:bg-gray-50 text-sky-900 border border-sky-900 text-sm py-3 px-6 rounded-full transition-colors"
									title="Descargar currículum en PDF"
								>
									Descargar PDF
								</a>
							</nav>

							<section
								className="mt-12 pt-8 border-t border-gray-200"
								aria-labelledby="expertise"
							>
								<h2 id="expertise" className="text-xl font-semibold mb-4">
									Áreas de Experiencia
								</h2>

								<div className="grid md:grid-cols-3 gap-6">
									<div>
										<h3 className="font-medium text-gray-900 mb-2">
											DevOps e Infraestructura
										</h3>
										<ul className="text-sm text-gray-600 space-y-1">
											<li>Arquitectura AWS Cloud</li>
											<li>Kubernetes y Docker</li>
											<li>Pipeline CI/CD</li>
											<li>Infraestructura como Código</li>
										</ul>
									</div>

									<div>
										<h3 className="font-medium text-gray-900 mb-2">
											Desarrollo Backend
										</h3>
										<ul className="text-sm text-gray-600 space-y-1">
											<li>Node.js y TypeScript</li>
											<li>Python y Go</li>
											<li>Arquitectura de Microservicios</li>
											<li>Diseño de API y GraphQL</li>
										</ul>
									</div>

									<div>
										<h3 className="font-medium text-gray-900 mb-2">
											IoT e Integración
										</h3>
										<ul className="text-sm text-gray-600 space-y-1">
											<li>Integración de Dispositivos IoT</li>
											<li>MQTT y Colas de Mensajes</li>
											<li>Procesamiento de Datos en Tiempo Real</li>
											<li>Computación en el Borde</li>
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
