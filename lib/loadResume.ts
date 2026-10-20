import fs from "node:fs";
import path from "node:path";
import type { ResumeData } from "../types/resumedata";

/** Read resume.json during static generation. Do not import this from client components. */
export function loadResumeData(): ResumeData {
	const filePath = path.join(process.cwd(), "public", "resume.json");
	const raw = fs.readFileSync(filePath, "utf8");
	const data = JSON.parse(raw) as ResumeData;

	if (!data?.basics?.name || !Array.isArray(data.work)) {
		throw new Error(`Invalid resume data in ${filePath}`);
	}

	return data;
}
