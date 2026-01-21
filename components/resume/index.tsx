import { useEffect, useState } from "react";
import getData from "../../lib/getdata";
import type { ResumeData } from "../../types/resumedata";
import PersonalInfo from "./PersonalInfo";
import Skills from "./skills";
import WorkExperience from "./WorkExperience";
import Certifications from "./Certifications";
import Languages from "./Languages";

const Resume = () => {
	const [data, setData] = useState();

	useEffect(() => {
		getData(setData);
	}, []);

	if (!data) {
		return <div />;
	}

	const cv: ResumeData = data;

	return (
		<main className="max-w-3xl mx-auto p-6 text-md">
			{/* Personal Information Header */}
			<header>
				<PersonalInfo basics={cv.basics} />
			</header>

			{/* Professional Experience Section */}
			<section>
				<WorkExperience work={cv.work} />
			</section>

			{/* Skills Section */}
			<section>
				<Skills skills={cv.skills} />
			</section>
			
			{/* Certifications Section */}
			<section>
				<Certifications certifications={cv.certifications} />
			</section>
			
			{/* Languages Section */}
			<section>
				<Languages languages={cv.languages} />
			</section>
		</main>
	);
};

export default Resume;
