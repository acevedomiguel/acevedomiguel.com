import { useState } from "react";
import Head from "next/head";
import {
  FaDownload,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaCheck,
  FaCopy,
  FaLinkedin,
} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Container from "../../components/container";
import Layout from "../../components/layout";
import AreaExpertise from "../../components/area_expertise";

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
			</Head>
			<Container>
        <main role="main" id="main-content">
          <article className="editorial-page max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <header className="mb-8">
              <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4 editorial-ui">
                Contact Me
              </h1>
              <p className="text-gray-600">
                Get in touch for DevOps consulting, backend development, or IoT
                projects. I&apos;m based in Hong Kong with global experience.
              </p>
            </header>

            <section
              aria-labelledby="contact-methods"
            >
              <div>
                <h2 id="contact-methods" className="contact-info-heading mb-4">
                  Contact Information
                </h2>

                <address className="not-italic">
                  <div className="contact-info-grid grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    <div className="group flex items-center" itemScope itemType="https://schema.org/ContactPoint">
                      <FaEnvelope className="inline mr-2 text-gray-600" aria-hidden="true" />
                      <a
                        href="mailto:me@acevedomiguel.com"
                        className="text-gray-700 hover:text-gray-900 hover:underline break-all"
                        itemProp="email"
                      >
                        me@acevedomiguel.com
                      </a>
                      <button
                        type="button"
                        onClick={() => copyToClipboard("me@acevedomiguel.com", "email")}
                        className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded-sm"
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

                    <div className="group flex items-center" itemScope itemType="https://schema.org/ContactPoint">
                      <FaPhone className="inline mr-2 text-gray-600" aria-hidden="true" />
                      <a
                        href="tel:+85264356936"
                        className="text-gray-700 hover:text-gray-900 hover:underline"
                        itemProp="telephone"
                      >
                        (+852) 6435-6936
                      </a>
                      <button
                        type="button"
                        onClick={() => copyToClipboard("+85264356936", "phone")}
                        className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded-sm"
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

                    <div className="flex items-center">
                      <FaMapMarkerAlt className="inline mr-2 text-gray-600" aria-hidden="true" />
                      <span>Kowloon, Hong Kong</span>
                    </div>

                    <div className="flex items-center">
                      <CgWebsite className="inline mr-2 text-gray-600" aria-hidden="true" />
                      <a
                        href="https://acevedomiguel.com"
                        className="text-gray-700 hover:text-gray-900 hover:underline"
                      >
                        acevedomiguel.com
                      </a>
                    </div>

                    <div className="flex items-center">
                      <FaLinkedin className="inline mr-2 text-gray-600" aria-hidden="true" />
                      <a
                        href="https://www.linkedin.com/in/acevedomiguel/"
                        className="text-gray-700 hover:text-gray-900 hover:underline"
                      >
                        acevedomiguel
                      </a>
                    </div>
                  </div>
                </address>
              </div>


            </section>

            <section
              className="mt-12 pt-8 border-t border-gray-200"
              aria-labelledby="resume-download"
            >
              <h2 id="resume-download" className="text-2xl font-semibold mb-4 editorial-ui">
                Resume Download
              </h2>

              <div className="py-2">
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="/resume.pdf"
                    download="Acevedo_Miguel_Resume.pdf"
                    className="editorial-button-primary inline-flex items-center justify-center space-x-2 bg-sky-900 hover:bg-sky-700 text-white text-sm py-3 px-6 rounded-full transition-colors editorial-ui"
                    title="Download PDF resume"
                  >
                    <FaDownload className="w-4 h-4" aria-hidden="true" />
                    <span>Download Resume (PDF)</span>
                  </a>

                  <a
                    href="/resume"
                    className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-sky-900 border border-sky-900 text-sm py-3 px-6 rounded-full transition-colors editorial-ui"
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
              <AreaExpertise />
            </section>
          </article>
        </main>
      </Container>
    </Layout>
  );
}
