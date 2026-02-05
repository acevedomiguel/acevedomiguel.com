import Link from "next/link";
import type React from "react";
import ResumeSection from "./ResumeSection";

interface Certification {
	institution: string;
	url?: string;
	area: string;
	studyType: string;
	startDate: string;
	endDate?: string;
	score?: string;
	courses: string[];
}

interface CertificationsProps {
	certifications: Certification[];
}

const CertificationsES: React.FC<CertificationsProps> = ({ certifications }) => {
	if (!certifications || certifications.length === 0) {
		return null;
	}

	return (
		<ResumeSection title="Certificaciones">
			{certifications.map((cert, index) => (
				<article key={`cert-${cert.institution}-${index}`} className="mb-6">
					<h3 className="text-lg font-medium mb-1">
						{cert.courses.join(", ")}
					</h3>

					<div className="text-md text-gray-900 mb-1">
						{cert.url ? (
							<Link
								href={cert.url}
								className="text-gray-700 hover:text-gray-900 hover:underline"
							>
								{cert.institution}
							</Link>
						) : (
							cert.institution
						)}
						{cert.area && ` • ${cert.area}`}
					</div>

					<div className="text-sm text-gray-600">
						<time dateTime={cert.startDate}>{cert.startDate}</time>
						{cert.endDate && cert.endDate !== cert.startDate && (
							<>
								{" "}
								- <time dateTime={cert.endDate}>{cert.endDate}</time>
							</>
						)}
					</div>
				</article>
			))}
		</ResumeSection>
	);
};

export default CertificationsES;
