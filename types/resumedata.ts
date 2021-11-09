export type ResumeData = {
    basics: {
        name: string
        label: string
        image: string
        email: string
        phone: string
        url: string
        summary: string
        location: {
            address: string
            postalCode: string
            city: string
            countryCode: string
            region: string
        },
        profiles: [{
            network: string
            username: string
            url: string
        }]
    },
    work: [{
        name: string
        position:string
        url: string
        startDate: string
        endDate: string
        summary: string
        highlights: string[]
        location: string
    }],
    volunteer: [{
        organization: string
        position: string
        url: string
        startDate: string
        endDate: string
        summary: string
        highlights: string[]
    }],
    certifications: [{
        institution: string
        url: string
        area: string
        studyType: string
        startDate: string
        endDate: string
        score: string
        courses: string[]
    }],
    awards: [{
        title: string
        date: string
        awarder: string
        summary: string
    }],
    publications: [{
        name: string
        publisher: string
        releaseDate: string
        url: string
        summary: string
    }],
    skills: [{
        name: string
        level: string
        keywords: string[]
    }],
    languages: [{
        language: string
        fluency: string
    }],
    interests: [{
        name: string
        keywords: string[]
        description: string
    }],
    references: [{
        name: string
        reference: string
    }],
    projects: [{
        name: string
        description: string
        highlights: string[ ]
        keywords: string []
        startDate: string
        endDate: string
        url: string
        roles: string[]
        image: string
        entityV
        type: string
    }]
}

export default ResumeData;
