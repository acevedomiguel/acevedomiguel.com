import type React from "react";
import ResumeSection from "./ResumeSection";

interface SkillItem {
	name: string;
	level?: string;
	keywords: string[];
}

interface SkillsProps {
	skills: SkillItem[];
}

/**
 * Skills component displays skills with clean list styling matching homepage patterns.
 * Uses simple text-based layout without complex styling elements.
 *
 * Features:
 * - Uses text-md sizing for content consistency with homepage
 * - Applies mb-3 spacing patterns from homepage
 * - Clean, minimal styling without borders or backgrounds
 * - Displays all skills categories and items clearly
 * - Simple comma-separated list format for easy scanning
 */
const Skills: React.FC<SkillsProps> = ({ skills }) => {
	return (
		<ResumeSection title="Areas of Expertise">
			{skills.map((skill, index) => (
				<div key={`skill-${skill.name}-${index}`} className="mb-6">
					{/* Skill Category - matching homepage typography hierarchy */}
					<h3 className="text-lg font-medium mb-1">{skill.name}</h3>

					{/* Skills List - using text-md for consistency */}
					<p className="text-md">{skill.keywords.join(", ")}</p>
				</div>
			))}
		</ResumeSection>
	);
};
export default Skills;
