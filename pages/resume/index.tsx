import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Header from "../../components/header";
import Resume from "../../components/resume";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function Index() {
	return (
    <Layout pageType="resume">
      <Head>
        <title>Resume - Acevedo Miguel | 20+ Years DevOps & Backend Experience</title>
      </Head>
      <Header />
      <Container>
        <Breadcrumbs className="max-w-3xl mx-auto px-6 mb-4 pt-4" />
        <main id="main-content">
          <article>
            <header className="max-w-3xl mx-auto px-6 mb-6">
              <h1 className="sr-only">Professional Resume - Acevedo Miguel</h1>
              
              {/* Minimalistic Download Section */}
              <div className="flex flex-col sm:flex-row sm:justify-end mb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 text-sm">
                  <span className="text-gray-500 mb-2 sm:mb-0">Download:</span>
                  <div className="flex items-center space-x-3">
                    <a
                      href="/resume.pdf"
                      download="Acevedo_Miguel_Resume.pdf"
                      className="text-sky-900 hover:text-sky-700 underline transition-colors"
                      title="Download PDF resume"
                    >
                      PDF
                    </a>
                    <span className="text-gray-300">|</span>
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-900 hover:text-sky-700 underline transition-colors"
                      title="View PDF resume in new tab"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </header>
            
            <Resume />
          </article>
        </main>
      </Container>
    </Layout>
	);
}
