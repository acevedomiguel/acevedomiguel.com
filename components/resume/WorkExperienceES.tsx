import type React from "react";
import ResumeSection from "./ResumeSection";

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

const WorkExperienceES: React.FC<WorkExperienceProps> = ({ work }) => {
	const sortedWork = [...work].sort((a, b) => {
		const parseDate = (dateStr: string): Date => {
			if (dateStr === "Presente" || !dateStr) {
				return new Date();
			}
			return new Date(dateStr);
		};

		const aEndDate = parseDate(a.endDate || "Presente");
		const bEndDate = parseDate(b.endDate || "Presente");

		if (aEndDate.getTime() !== bEndDate.getTime()) {
			return bEndDate.getTime() - aEndDate.getTime();
		}

		const aStartDate = parseDate(a.startDate);
		const bStartDate = parseDate(b.startDate);
		return bStartDate.getTime() - aStartDate.getTime();
	});

	return (
		<ResumeSection title="Experiencia Profesional">
			{sortedWork.map((workItem, index) => (
				<article
					key={`work-${workItem.name}-${workItem.position}-${index}`}
					className="mb-6"
				>
					<h3 className="text-lg font-medium mb-1">{workItem.position}</h3>

					<div className="flex flex-col sm:flex-row sm:justify-between mb-3">
						<div className="text-md font-medium text-gray-900">
							{workItem.name}
							{workItem.location && ` • ${workItem.location}`}
						</div>
						<div className="text-sm text-gray-600">
							<time dateTime={workItem.startDate}>{workItem.startDate}</time>{" "}
							-{" "}
							<time
								dateTime={
									workItem.endDate || new Date().toISOString().slice(0, 7)
								}
							>
								{workItem.endDate || "Presente"}
							</time>
						</div>
					</div>

					{workItem.summary && (
						<p className="text-md mb-3">{workItem.summary}</p>
					)}

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

export default WorkExperienceES;
