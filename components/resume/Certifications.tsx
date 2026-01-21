import type React from 'react';
import Link from 'next/link';
import ResumeSection from './ResumeSection';

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

/**
 * Certifications component displays professional certifications with homepage styling patterns.
 * Uses clean, simple text-based layout matching homepage aesthetic.
 * 
 * Features:
 * - Uses text-md sizing for content consistency with homepage
 * - Applies mb-3 and mb-6 spacing patterns from homepage
 * - Clean, minimal styling without borders or backgrounds
 * - Preserves all certification data and links
 */
const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <ResumeSection title="Certifications">
      {certifications.map((cert, index) => (
        <article key={`cert-${cert.institution}-${index}`} className="mb-6">
          {/* Certification Title */}
          <h3 className="text-lg font-medium mb-1">
            {cert.courses.join(', ')}
          </h3>
          
          {/* Institution */}
          <div className="text-md text-gray-900 mb-1">
            {cert.url ? (
              <Link href={cert.url} className="text-gray-700 hover:text-gray-900 hover:underline">
                {cert.institution}
              </Link>
            ) : (
              cert.institution
            )}
            {cert.area && ` • ${cert.area}`}
          </div>
          
          {/* Date */}
          <div className="text-sm text-gray-600">
            <time dateTime={cert.startDate}>{cert.startDate}</time>
            {cert.endDate && cert.endDate !== cert.startDate && (
              <> - <time dateTime={cert.endDate}>{cert.endDate}</time></>
            )}
          </div>
        </article>
      ))}
    </ResumeSection>
  );
};

export default Certifications;