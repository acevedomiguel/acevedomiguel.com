import type React from "react";

interface ResumeSectionProps {
	title?: string;
	children: React.ReactNode;
	className?: string;
}

/**
 * ResumeSection component provides consistent content organization
 * with clean section separation and typography hierarchy matching homepage patterns.
 *
 * Features:
 * - Uses mb-6 spacing for section separation (matching homepage)
 * - Applies consistent typography hierarchy
 * - Optional section title with text-xl font-semibold styling
 * - Clean, minimal styling without borders or backgrounds
 */
const ResumeSection: React.FC<ResumeSectionProps> = ({
	title,
	children,
	className = "",
}) => {
	return (
		<section className={`mb-6 ${className}`}>
			{title && <h2 className="text-xl font-semibold mb-3">{title}</h2>}
			{children}
		</section>
	);
};

export default ResumeSection;
