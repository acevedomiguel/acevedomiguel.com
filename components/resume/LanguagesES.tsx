import type React from "react";
import ResumeSection from "./ResumeSection";

interface Language {
	language: string;
	fluency: string;
}

interface LanguagesProps {
	languages: Language[];
}

const LanguagesES: React.FC<LanguagesProps> = ({ languages }) => {
	if (!languages || languages.length === 0) {
		return null;
	}

	return (
		<ResumeSection title="Idiomas">
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

export default LanguagesES;
