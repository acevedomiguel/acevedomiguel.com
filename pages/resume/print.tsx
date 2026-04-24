import { useEffect, useState } from "react";
import Head from "next/head";
import type { ResumeData } from "../../types/resumedata";

const getData = (): Promise<ResumeData> =>
	fetch("/resume.json", {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	}).then((res) => {
		if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
		return res.json();
	});

export default function ResumePrint() {
	const [data, setData] = useState<ResumeData | null>(null);

	useEffect(() => {
		getData().then(setData).catch(console.error);
	}, []);

	if (!data) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-white">
				<p className="text-gray-500">Loading resume...</p>
			</div>
		);
	}

	const cv = data;
	const basics = cv.basics;
	const allSkills = cv.skills.flatMap((s) => s.keywords);
	const uniqueSkills = [...new Set(allSkills)];

	return (
		<>
			<Head>
				<title>Resume - {basics.name}</title>
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div
				className="flex w-full min-h-screen"
				style={{ fontFamily: "'Segoe UI', Arial, sans-serif" }}
				data-print-ready="true"
			>
				{/* Left Sidebar */}
				<div className="w-[32%] bg-[#2d3e50] text-white p-6 flex flex-col gap-6">
					{/* Contact */}
					<section>
						<h2 className="text-sm font-semibold uppercase tracking-wider mb-3 text-white/90">
							Contact
						</h2>
						<div className="text-sm space-y-1.5 text-white/80">
							{basics.location?.city && basics.location?.region && (
								<p>
									{basics.location.city}, {basics.location.region}
								</p>
							)}
							{basics.phone && <p>{basics.phone}</p>}
							{basics.email && <p>{basics.email}</p>}
							{basics.profiles?.[0] && (
								<p className="break-words">
									{basics.profiles[0].url.replace("https://", "")} ({basics.profiles[0].network})
								</p>
							)}
							{basics.url && (
								<p className="break-words">
									{basics.url.replace("https://", "")} (Personal)
								</p>
							)}
						</div>
					</section>

					{/* Skills */}
					{uniqueSkills.length > 0 && (
						<section>
							<h2 className="text-sm font-semibold uppercase tracking-wider mb-3 text-white/90">
								Top Skills
							</h2>
							<div className="text-sm text-white/80 space-y-1">
								{uniqueSkills.slice(0, 20).map((skill) => (
									<p key={skill}>{skill}</p>
								))}
							</div>
						</section>
					)}

					{/* Languages */}
					{cv.languages.length > 0 && (
						<section>
							<h2 className="text-sm font-semibold uppercase tracking-wider mb-3 text-white/90">
								Languages
							</h2>
							<div className="text-sm text-white/80 space-y-1">
								{cv.languages.map((lang) => (
									<p key={lang.language}>
										{lang.language}{" "}
										{lang.fluency && (
											<span className="text-white/60">({lang.fluency})</span>
										)}
									</p>
								))}
							</div>
						</section>
					)}

					{/* Certifications */}
					{cv.certifications.length > 0 && (
						<section>
							<h2 className="text-sm font-semibold uppercase tracking-wider mb-3 text-white/90">
								Certifications
							</h2>
							<div className="text-sm text-white/80 space-y-1">
								{cv.certifications.map((cert) => (
									<p key={cert.area}>{cert.area}</p>
								))}
							</div>
						</section>
					)}
				</div>

				{/* Right Column */}
				<div className="w-[68%] bg-white p-8">
					{/* Header */}
					<header className="mb-8">
						<h1 className="text-3xl font-bold text-gray-900 mb-1">
							{basics.name}
						</h1>
						<p className="text-base text-gray-700 font-medium">
							{basics.label}
						</p>
						{basics.location?.city && basics.location?.region && (
							<p className="text-sm text-gray-500 mt-1">
								{basics.location.city}, {basics.location.region}
							</p>
						)}
					</header>

					{/* Summary */}
					{basics.summary && (
						<section className="mb-8">
							<h2 className="text-lg font-semibold text-gray-900 mb-3 pb-1 border-b border-gray-200">
								Summary
							</h2>
							<p className="text-sm text-gray-700 leading-relaxed">
								{basics.summary}
							</p>
						</section>
					)}

					{/* Experience */}
					{cv.work.length > 0 && (
						<section className="mb-8">
							<h2 className="text-lg font-semibold text-gray-900 mb-4 pb-1 border-b border-gray-200">
								Experience
							</h2>
							<div className="space-y-5">
								{cv.work.map((job) => (
									<div key={`${job.name}-${job.startDate}`}>
										<div className="flex justify-between items-baseline mb-1">
											<h3 className="text-base font-semibold text-gray-900">
												{job.position}
											</h3>
											<span className="text-xs text-gray-500 whitespace-nowrap ml-2">
												{job.startDate} – {job.endDate}
											</span>
										</div>
										<p className="text-sm text-gray-600 mb-1.5">
											{job.name}
											{job.location && ` · ${job.location}`}
										</p>
										{job.highlights.length > 0 && (
											<ul className="text-sm text-gray-700 list-disc list-inside space-y-0.5">
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
				</div>
			</div>
		</>
	);
}
