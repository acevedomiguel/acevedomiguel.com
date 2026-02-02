import { useState } from "react";
import Head from "next/head";
import {
  FaDownload,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaCheck,
  FaCopy,
} from "react-icons/fa";
import Breadcrumbs from "../../components/Breadcrumbs";
import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";

export default function Index() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = async (
    text: string,
    type: "email" | "phone",
  ): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Layout pageType="contact">
      <Head>
        <title>Contact Acevedo Miguel - DevOps & Backend Engineer</title>
        <meta
          name="description"
          content="Contact Acevedo Miguel for DevOps consulting, backend development, or IoT projects. Based in Hong Kong with global experience. Email: me@acevedomiguel.com, Phone: +852 6435-6936. Schedule a 30-minute consultation."
        />
      </Head>
      <Header />
      <Container>
        <Breadcrumbs className="max-w-3xl mx-auto px-6 mb-4 pt-4" />
        <main role="main" id="main-content">
          <article className="max-w-3xl mx-auto py-8">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Contact Me
              </h1>
              <p className="text-lg text-gray-600">
                Get in touch for DevOps consulting, backend development, or IoT
                projects. I&apos;m based in Hong Kong with global experience.
              </p>
            </header>

            <section
              aria-labelledby="contact-methods"
            >
              <div>
                <h2 id="contact-methods" className="text-xl font-semibold mb-4">
                  Contact Information
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <div
                    className="group"
                    itemScope
                    itemType="https://schema.org/ContactPoint"
                  >
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <FaEnvelope className="text-sky-600" aria-hidden="true" />
                        <span className="text-sm text-gray-500">Email</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <a
                          href="mailto:me@acevedomiguel.com"
                          className="text-gray-900 hover:text-sky-600 transition-colors"
                          itemProp="email"
                        >
                          me@acevedomiguel.com
                        </a>
                        <button
                          type="button"
                          onClick={() =>
                            copyToClipboard("me@acevedomiguel.com", "email")
                          }
                          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded-sm"
                          title="Copy email to clipboard"
                          aria-label="Copy email to clipboard"
                        >
                          {copiedEmail ? (
                            <FaCheck className="text-green-600 w-3 h-3" />
                          ) : (
                            <FaCopy className="text-gray-600 w-3 h-3" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    className="group"
                    itemScope
                    itemType="https://schema.org/ContactPoint"
                  >
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <FaPhone className="text-sky-600" aria-hidden="true" />
                        <span className="text-sm text-gray-500">Phone</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <a
                          href="tel:+85264356936"
                          className="text-gray-900 hover:text-sky-600 transition-colors"
                          itemProp="telephone"
                        >
                          (+852) 6435-6936
                        </a>
                        <button
                          type="button"
                          onClick={() => copyToClipboard("+85264356936", "phone")}
                          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded-sm"
                          title="Copy phone to clipboard"
                          aria-label="Copy phone to clipboard"
                        >
                          {copiedPhone ? (
                            <FaCheck className="text-green-600 w-3 h-3" />
                          ) : (
                            <FaCopy className="text-gray-600 w-3 h-3" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <FaMapMarkerAlt
                          className="text-sky-600"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-gray-500">Location</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-900">Kowloon, Hong Kong</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </section>

            <section
              className="mt-12 pt-8 border-t border-gray-200"
              aria-labelledby="resume-download"
            >
              <h2 id="resume-download" className="text-xl font-semibold mb-4">
                Resume Download
              </h2>

              <div className="bg-gray-50 p-6 rounded-sm">
                <p className="text-gray-600 mb-4">
                  Download my complete professional resume with detailed work
                  experience and technical skills.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/resume.pdf"
                    download="Acevedo_Miguel_Resume.pdf"
                    className="inline-flex items-center justify-center space-x-2 bg-sky-900 hover:bg-sky-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                    title="Download PDF resume"
                  >
                    <FaDownload className="w-4 h-4" aria-hidden="true" />
                    <span>Download Resume (PDF)</span>
                  </a>

                  <a
                    href="/resume"
                    className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-6 py-3 rounded-lg transition-colors font-medium"
                    title="View online resume"
                  >
                    <span>View Online Resume</span>
                  </a>
                </div>
              </div>
            </section>

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
                  <ul className="text-sm text-gray-600 space-y-1" role="list">
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
                  <ul className="text-sm text-gray-600 space-y-1" role="list">
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
                  <ul className="text-sm text-gray-600 space-y-1" role="list">
                    <li>IoT Device Integration</li>
                    <li>MQTT & Message Queues</li>
                    <li>Real-time Data Processing</li>
                    <li>Edge Computing</li>
                  </ul>
                </div>
              </div>
            </section>
          </article>
        </main>
      </Container>
    </Layout>
  );
}
