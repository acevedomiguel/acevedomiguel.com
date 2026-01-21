import { SEOConfig } from './types';

export const seoConfig: SEOConfig = {
  site: {
    name: 'Acevedo Miguel - Senior DevOps & Backend Engineer',
    url: 'https://www.acevedomiguel.com',
    description: 'Senior software engineer with over 20 years of experience in DevOps, backend development, IoT, and cloud computing. Currently Cloud Lead & IoT at Tensor Energy.',
    author: {
      "@type": "Person",
      name: 'Acevedo Miguel',
      jobTitle: 'Senior DevOps & Backend Engineer',
      description: 'Senior software engineer with extensive experience (over 20 years) in digital marketing, devops and infrastructure, with curiosity about IoT',
      url: 'https://www.acevedomiguel.com',
      image: 'https://www.acevedomiguel.com/profile.png',
      email: 'me@acevedomiguel.com',
      telephone: '+852 6435-6936',
      address: {
        "@type": "PostalAddress",
        addressLocality: 'Kowloon',
        addressCountry: 'HK',
        addressRegion: 'Hong Kong'
      },
      sameAs: [
        'https://twitter.com/faultydev',
        'https://rebel.ar/@acevedomiguel',
        'https://infosec.exchange/@faultydev'
      ],
      knowsAbout: [
        'DevOps',
        'Backend Development',
        'Cloud Computing',
        'IoT',
        'AWS',
        'Kubernetes',
        'Node.js',
        'TypeScript',
        'Python',
        'Go',
        'Infrastructure as Code',
        'Microservices',
        'CI/CD'
      ]
    },
    social: {
      twitter: '@faultydev',
      linkedin: undefined,
      github: undefined
    }
  },
  pages: {
    home: {
      title: 'Acevedo Miguel - Senior DevOps & Backend Engineer',
      description: 'Senior software engineer with over 20 years of experience in DevOps, backend development, IoT, and cloud computing. Currently Cloud Lead & IoT at Tensor Energy.',
      keywords: [
        'DevOps Engineer',
        'Backend Developer',
        'Cloud Computing',
        'IoT Specialist',
        'AWS Expert',
        'Kubernetes',
        'Senior Software Engineer',
        'Hong Kong',
        'Tensor Energy'
      ],
      structuredDataTypes: ['Person', 'Website']
    },
    resume: {
      title: 'Resume - Acevedo Miguel | 20+ Years DevOps & Backend Experience',
      description: 'Comprehensive resume of Acevedo Miguel, Senior DevOps Engineer with 20+ years experience. Expert in AWS, Kubernetes, IoT, and cloud infrastructure.',
      keywords: [
        'Resume',
        'CV',
        'DevOps Experience',
        'Backend Development',
        'Cloud Architecture',
        'IoT Projects',
        'AWS Certification',
        'Kubernetes Expert',
        'Senior Engineer',
        'Hong Kong Tech'
      ],
      structuredDataTypes: ['Person', 'WorkExperience', 'Organization']
    },
    contact: {
      title: 'Contact Acevedo Miguel - DevOps & Backend Engineer',
      description: 'Get in touch with Acevedo Miguel for DevOps consulting, backend development, or IoT projects. Based in Hong Kong with global experience.',
      keywords: [
        'Contact',
        'DevOps Consultant',
        'Backend Developer',
        'IoT Specialist',
        'Hong Kong',
        'Freelance',
        'Consulting'
      ],
      structuredDataTypes: ['Person', 'ContactPoint']
    }
  },
  defaults: {
    titleTemplate: '%s | Acevedo Miguel',
    description: 'Senior DevOps & Backend Engineer with 20+ years experience in cloud computing, IoT, and infrastructure.',
    openGraph: {
      type: 'website',
      siteName: 'Acevedo Miguel',
      image: 'https://www.acevedomiguel.com/profile.png'
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@faultydev'
    }
  }
};

export default seoConfig;