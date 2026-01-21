import type React from 'react';
import ResumeSection from './ResumeSection';

interface Award {
  title: string;
  date: string;
  awarder: string;
  summary?: string;
}

interface AwardsProps {
  awards: Award[];
}

/**
 * Awards component displays awards and recognitions with homepage styling patterns.
 * Uses clean, simple text-based layout matching homepage aesthetic.
 * 
 * Features:
 * - Uses text-md sizing for content consistency with homepage
 * - Applies mb-3 and mb-6 spacing patterns from homepage
 * - Clean, minimal styling without borders or backgrounds
 * - Preserves all award data and descriptions
 */
const Awards: React.FC<AwardsProps> = ({ awards }) => {
  if (!awards || awards.length === 0) {
    return null;
  }

  return (
    <ResumeSection title="Awards & Recognition">
      {awards.map((award, index) => (
        <article key={`award-${award.title}-${index}`} className="mb-3">
          {/* Award Title */}
          <h3 className="text-lg font-medium mb-1">
            {award.title}
          </h3>
          
          {/* Awarder and Date */}
          <div className="text-md text-gray-900 mb-2">
            {award.awarder} • <time dateTime={award.date}>{award.date}</time>
          </div>
          
          {/* Summary */}
          {award.summary && (
            <p className="text-md">
              {award.summary}
            </p>
          )}
        </article>
      ))}
    </ResumeSection>
  );
};

export default Awards;