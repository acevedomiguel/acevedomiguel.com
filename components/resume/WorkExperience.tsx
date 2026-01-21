import type React from 'react';
import ResumeSection from './ResumeSection';

interface WorkItem {
  name: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights: string[];
  location?: string;
  stack?: string[];
}

interface WorkExperienceProps {
  work: WorkItem[];
}

/**
 * WorkExperience component displays work experience with homepage styling patterns.
 * Transforms timeline-based styling to clean, simple text-based layout.
 * 
 * Features:
 * - Uses text-md sizing for content consistency with homepage
 * - Applies mb-3 and mb-6 spacing patterns from homepage
 * - Clean, minimal styling without dark backgrounds or card styling
 * - Maintains proper chronological order (most recent positions first)
 * - Prioritizes by end date, then start date for accurate timeline
 * - Handles ongoing positions ("Present") with highest priority
 * - Preserves all work experience data and descriptions
 */
const WorkExperience: React.FC<WorkExperienceProps> = ({ work }) => {
  // Sort work experience by chronological order (most recent first)
  const sortedWork = [...work].sort((a, b) => {
    // Helper function to parse date strings in "MMM YYYY" format
    const parseDate = (dateStr: string): Date => {
      if (dateStr === 'Present' || !dateStr) {
        return new Date(); // Current date for ongoing positions
      }
      return new Date(dateStr);
    };

    // Get end dates for comparison (prioritize by when position ended)
    const aEndDate = parseDate(a.endDate || 'Present');
    const bEndDate = parseDate(b.endDate || 'Present');
    
    // If end dates are different, sort by end date (most recent first)
    if (aEndDate.getTime() !== bEndDate.getTime()) {
      return bEndDate.getTime() - aEndDate.getTime();
    }
    
    // If end dates are the same, sort by start date (most recent first)
    const aStartDate = parseDate(a.startDate);
    const bStartDate = parseDate(b.startDate);
    return bStartDate.getTime() - aStartDate.getTime();
  });

  return (
    <ResumeSection title="Professional Experience">
      {sortedWork.map((workItem, index) => (
        <article key={`work-${workItem.name}-${workItem.position}-${index}`} className="mb-6">
          {/* Job Title - matching homepage typography hierarchy */}
          <h3 className="text-lg font-medium mb-1">
            {workItem.position}
          </h3>
          
          {/* Company Name and Date Range */}
          <div className="flex flex-col sm:flex-row sm:justify-between mb-3">
            <div className="text-md font-medium text-gray-900">
              {workItem.name}
              {workItem.location && ` • ${workItem.location}`}
            </div>
            <div className="text-sm text-gray-600">
              <time dateTime={workItem.startDate}>{workItem.startDate}</time> - <time dateTime={workItem.endDate || new Date().toISOString().slice(0, 7)}>{workItem.endDate || 'Present'}</time>
            </div>
          </div>
          
          {/* Summary - if available */}
          {workItem.summary && (
            <p className="text-md mb-3">
              {workItem.summary}
            </p>
          )}
          
          {/* Job Highlights/Descriptions - using homepage text-md and mb-3 spacing */}
          {workItem.highlights?.map((highlight, highlightIndex) => (
            <p
              key={`highlight-${workItem.name}-${index}-${highlightIndex}`}
              className="text-md mb-3"
            >
              {highlight}
            </p>
          ))}
        </article>
      ))}
    </ResumeSection>
  );
};

export default WorkExperience;