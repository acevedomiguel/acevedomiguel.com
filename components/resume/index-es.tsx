import { useEffect, useState } from "react";
import type { ResumeData } from "../../types/resumedata";
import CertificationsES from "./CertificationsES";
import LanguagesES from "./LanguagesES";
import PersonalInfo from "./PersonalInfo";
import SkillsES from "./SkillsES";
import WorkExperienceES from "./WorkExperienceES";

const LoadingSkeleton = () => {
	return (
		<main className="max-w-3xl mx-auto p-6 text-md animate-pulse">
			{/* Header Skeleton */}
			<div className="mb-6">
				<div className="h-8 bg-gray-200 rounded w-64 mb-3"></div>
				<div className="h-6 bg-gray-200 rounded w-48 mb-6"></div>
				<div className="h-20 bg-gray-200 rounded w-full mb-6"></div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
					<div className="h-4 bg-gray-200 rounded-sm"></div>
					<div className="h-4 bg-gray-200 rounded-sm"></div>
					<div className="h-4 bg-gray-200 rounded-sm"></div>
					<div className="h-4 bg-gray-200 rounded-sm"></div>
				</div>
			</div>

			{/* Work Experience Skeleton */}
			<div className="mb-6">
				<div className="h-6 bg-gray-200 rounded w-48 mb-4"></div>
				{[1, 2, 3].map((i) => (
					<div key={i} className="mb-6">
						<div className="h-5 bg-gray-200 rounded w-56 mb-2"></div>
						<div className="h-4 bg-gray-200 rounded w-40 mb-3"></div>
						<div className="h-16 bg-gray-200 rounded w-full"></div>
					</div>
				))}
			</div>

			{/* Skills Skeleton */}
			<div className="mb-6">
				<div className="h-6 bg-gray-200 rounded w-40 mb-4"></div>
				<div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
				<div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
			</div>
		</main>
	);
};

const getDataES = (setData: (data: any) => void): Promise<void> => {
	return fetch("/resume-es.json", {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.json();
		})
		.then((myJson) => {
			setData(myJson);
		});
};

const ResumeES = () => {
	const [data, setData] = useState<ResumeData | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		setIsLoading(true);
		getDataES(setData)
			.catch((err) => {
				console.error("Error al cargar datos del currículum:", err);
				setError("Error al cargar datos del currículum. Por favor intente más tarde.");
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <LoadingSkeleton />;
	}

	if (error) {
		return (
			<main className="max-w-3xl mx-auto p-6 text-md">
				<div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
					<h2 className="text-xl font-semibold text-red-800 mb-3">
						No se puede cargar el currículum
					</h2>
					<p className="text-red-600 mb-4">{error}</p>
					<button
						type="button"
						onClick={() => window.location.reload()}
						className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition-colors"
					>
						Reintentar
					</button>
				</div>
			</main>
		);
	}

	if (!data) {
		return null;
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
				<WorkExperienceES work={cv.work} />
			</section>

			{/* Skills Section */}
			<section>
				<SkillsES skills={cv.skills} />
			</section>

			{/* Certifications Section */}
			<section>
				<CertificationsES certifications={cv.certifications} />
			</section>

			{/* Languages Section */}
			<section>
				<LanguagesES languages={cv.languages} />
			</section>
		</main>
	);
};

export default ResumeES;
