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

const SkillsES: React.FC<SkillsProps> = ({ skills }) => {
	return (
		<ResumeSection title="Áreas de Experiencia">
			{skills.map((skill, index) => (
				<div key={`skill-${skill.name}-${index}`} className="mb-6">
					<h3 className="text-lg font-medium mb-1">{skill.name}</h3>
					<p className="text-md">{skill.keywords.join(", ")}</p>
				</div>
			))}
		</ResumeSection>
	);
};
export default SkillsES;
