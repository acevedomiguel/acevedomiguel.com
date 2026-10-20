import type { ResumeData } from "../../types/resumedata";
import Certifications from "./Certifications";
import Languages from "./Languages";
import PersonalInfo from "./PersonalInfo";
import Skills from "./skills";
import WorkExperience from "./WorkExperience";

interface ResumeProps {
	data: ResumeData;
}

const Resume = ({ data }: ResumeProps) => {
	return (
		<main className="max-w-3xl mx-auto p-6 resume-page resume-content">
			<header>
				<PersonalInfo basics={data.basics} />
			</header>

			<section>
				<WorkExperience work={data.work} />
			</section>

			<section>
				<Skills skills={data.skills} />
			</section>

			<section>
				<Certifications certifications={data.certifications} />
			</section>

			<section>
				<Languages languages={data.languages} />
			</section>
		</main>
	);
};

export default Resume;
