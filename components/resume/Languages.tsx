import type React from "react";
import ResumeSection from "./ResumeSection";

interface Language {
	language: string;
	fluency: string;
}

interface LanguagesProps {
	languages: Language[];
}

/**
 * Languages component displays language skills with homepage styling patterns.
 * Uses clean, simple text-based layout matching homepage aesthetic.
 *
 * Features:
 * - Uses text-md sizing for content consistency with homepage
 * - Applies mb-3 spacing patterns from homepage
 * - Clean, minimal styling without borders or backgrounds
 * - Preserves all language proficiency data
 */
const Languages: React.FC<LanguagesProps> = ({ languages }) => {
	if (!languages || languages.length === 0) {
		return null;
	}

	return (
		<ResumeSection title="Languages">
			<div className="text-md">
				{languages.map((lang, index) => (
					<span key={`lang-${lang.language}-${index}`}>
						<strong>{lang.language}</strong> ({lang.fluency})
						{index < languages.length - 1 && " • "}
					</span>
				))}
			</div>
		</ResumeSection>
	);
};

export default Languages;
