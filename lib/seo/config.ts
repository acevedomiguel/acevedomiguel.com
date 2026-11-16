import type { SEOConfig } from "./types";

export const seoConfig: SEOConfig = {
	site: {
		name: "Acevedo Miguel - Cloud Architect & DevOps Engineer",
		url: "https://acevedomiguel.com",
		description:
			"Cloud Architect & DevOps Engineer with 20+ years building serverless infrastructure across APAC. Cloud Lead & IoT at Tensor Energy, Hong Kong.",
		author: {
			"@type": "Person",
			name: "Acevedo Miguel",
			jobTitle: "Cloud Architect & DevOps Engineer",
			description:
				"Cloud Architect and DevOps Engineer with 20+ years of experience in cloud computing, IoT, and infrastructure.",
			url: "https://acevedomiguel.com",
			image: "https://acevedomiguel.com/og-image.png",
			email: "me@acevedomiguel.com",
			telephone: "+852 6435-6936",
			address: {
				"@type": "PostalAddress",
				addressLocality: "Kowloon",
				addressCountry: "HK",
				addressRegion: "Hong Kong",
			},
			sameAs: [
				"https://twitter.com/faultydev",
				"https://rebel.ar/@acevedomiguel",
				"https://infosec.exchange/@faultydev",
			],
			knowsAbout: [
				"DevOps",
				"Backend Development",
				"Cloud Computing",
				"IoT",
				"AWS",
				"Kubernetes",
				"Node.js",
				"TypeScript",
				"Python",
				"Go",
				"Infrastructure as Code",
				"Microservices",
				"CI/CD",
			],
		},
		social: {
			twitter: "@faultydev",
			linkedin: undefined,
			github: undefined,
		},
	},
	pages: {
		home: {
			title: "Acevedo Miguel - Cloud Architect & DevOps Engineer",
			description:
				"Cloud Architect & DevOps Engineer with 20+ years building serverless infrastructure across APAC. Cloud Lead & IoT at Tensor Energy, Hong Kong.",
			keywords: [
				"DevOps Engineer",
				"Backend Developer",
				"Cloud Computing",
				"IoT Specialist",
				"AWS Expert",
				"Kubernetes",
				"Senior Software Engineer",
				"Hong Kong",
				"Tensor Energy",
			],
			structuredDataTypes: ["Person", "Website"],
		},
		resume: {
			title: "Resume - Acevedo Miguel | Cloud Architect & DevOps Engineer",
			description:
				"Resume of Acevedo Miguel: Cloud Architect & DevOps Engineer. 20+ years in AWS, Kubernetes, serverless and IoT across Hong Kong and APAC.",
			keywords: [
				"Resume",
				"CV",
				"DevOps Experience",
				"Backend Development",
				"Cloud Architecture",
				"IoT Projects",
				"AWS Certification",
				"Kubernetes Expert",
				"Senior Engineer",
				"Hong Kong Tech",
			],
			structuredDataTypes: ["Person", "WorkExperience", "Organization"],
		},
		contact: {
			title: "Contact Acevedo Miguel - Cloud Architect & DevOps Engineer",
			description:
				"Contact Acevedo Miguel for DevOps consulting, backend development and IoT projects. Based in Hong Kong, working globally.",
			keywords: [
				"Contact",
				"DevOps Consultant",
				"Backend Developer",
				"IoT Specialist",
				"Hong Kong",
				"Freelance",
				"Consulting",
			],
			structuredDataTypes: ["Person", "ContactPoint"],
		},
	},
	defaults: {
		titleTemplate: "%s | Acevedo Miguel",
		description:
			"Cloud Architect and DevOps Engineer with 20+ years of experience in cloud computing, IoT, and infrastructure.",
		openGraph: {
			type: "website",
			siteName: "Acevedo Miguel",
			image: "https://acevedomiguel.com/og-image.png",
		},
		twitter: {
			card: "summary_large_image",
			creator: "@faultydev",
		},
	},
};

export default seoConfig;
