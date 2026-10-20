import type { GetStaticProps } from "next";
import Head from "next/head";
import type { ResumeData } from "../../types/resumedata";

const stripProtocol = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

type ResumePrintProps = {
	resume: ResumeData;
};

export default function ResumePrint({ resume }: ResumePrintProps) {
	const cv = resume;
	const basics = cv.basics;
	const linkedin = basics.profiles?.find((p) => p.network === "LinkedIn");

	return (
		<>
			<Head>
				<title>Resume - {basics.name}</title>
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div
				className="w-full min-h-screen bg-white text-gray-900 px-2 py-4"
				style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
				data-print-ready="true"
			>
				{/* Header */}
				<header className="mb-6">
					<h1 className="text-2xl font-semibold tracking-tight">
						{basics.name}
					</h1>
					<p className="text-sm text-gray-600 mt-0.5">{basics.label}</p>
					<p className="text-xs text-gray-500 mt-2 space-x-1">
						{basics.location?.city && basics.location?.region && (
							<span>
								{basics.location.city}, {basics.location.region}
							</span>
						)}
						{basics.email && (
							<>
								<span aria-hidden="true">·</span>{" "}
								<a
									href={`mailto:${basics.email}`}
									className="text-gray-700 underline decoration-gray-300 underline-offset-2"
								>
									{basics.email}
								</a>
							</>
						)}
						{basics.phone && (
							<>
								<span aria-hidden="true">·</span>{" "}
								<a
									href={`tel:${basics.phone.replace(/[^+\d]/g, "")}`}
									className="text-gray-700 underline decoration-gray-300 underline-offset-2"
								>
									{basics.phone}
								</a>
							</>
						)}
						{basics.url && (
							<>
								<span aria-hidden="true">·</span>{" "}
								<a
									href={basics.url}
									className="text-gray-700 underline decoration-gray-300 underline-offset-2"
								>
									{stripProtocol(basics.url)}
								</a>
							</>
						)}
						{linkedin && (
							<>
								<span aria-hidden="true">·</span>{" "}
								<a
									href={linkedin.url}
									className="text-gray-700 underline decoration-gray-300 underline-offset-2"
								>
									{stripProtocol(linkedin.url)}
								</a>
							</>
						)}
					</p>
				</header>

				{/* Summary */}
				{basics.summary && (
					<section className="mb-6">
						<h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500 border-t border-gray-200 pt-3 mb-2">
							Summary
						</h2>
						<p className="text-sm leading-relaxed text-gray-800">
							{basics.summary}
						</p>
					</section>
				)}

				{/* Experience */}
				{cv.work.length > 0 && (
					<section className="mb-6">
						<h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500 border-t border-gray-200 pt-3 mb-3">
							Experience
						</h2>
						<div className="space-y-5">
							{cv.work.map((job) => (
								<div
									key={`${job.name}-${job.startDate}`}
									style={{ breakInside: "avoid" }}
								>
									<div className="flex justify-between items-baseline">
										<h3 className="text-sm font-semibold">
											{job.position}
											<span className="font-normal text-gray-600">
												{" "}
												—{" "}
												{job.url ? (
													<a
														href={job.url}
														className="text-gray-600 underline decoration-gray-300 underline-offset-2"
													>
														{job.name}
													</a>
												) : (
													job.name
												)}
												{job.location && `, ${job.location}`}
											</span>
										</h3>
										<span className="text-xs text-gray-500 whitespace-nowrap ml-4">
											{job.startDate} – {job.endDate}
										</span>
									</div>
									{job.highlights.length > 0 && (
										<ul className="mt-1.5 text-sm text-gray-700 leading-snug list-disc pl-5 space-y-0.5">
											{job.highlights.map((h, i) => (
												<li key={i}>{h}</li>
											))}
										</ul>
									)}
								</div>
							))}
						</div>
					</section>
				)}

				{/* Skills */}
				{cv.skills.length > 0 && (
					<section className="mb-6" style={{ breakInside: "avoid" }}>
						<h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500 border-t border-gray-200 pt-3 mb-2">
							Skills
						</h2>
						<div className="text-sm text-gray-800 space-y-1">
							{cv.skills.map((skill) => (
								<p key={skill.name}>
									<span className="font-semibold">{skill.name}: </span>
									<span className="text-gray-700">
										{skill.keywords.join(", ")}
									</span>
								</p>
							))}
						</div>
					</section>
				)}

				{/* Languages */}
				{cv.languages.length > 0 && (
					<section style={{ breakInside: "avoid" }}>
						<h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500 border-t border-gray-200 pt-3 mb-2">
							Languages
						</h2>
						<p className="text-sm text-gray-800">
							{cv.languages
								.map((l) => (l.fluency ? `${l.language} (${l.fluency})` : l.language))
								.join(" · ")}
						</p>
					</section>
				)}
			</div>
		</>
	);
}

export const getStaticProps: GetStaticProps<ResumePrintProps> = async () => {
	const { loadResumeData } = await import("../../lib/loadResume");

	return {
		props: {
			resume: loadResumeData(),
		},
	};
};
