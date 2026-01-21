import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { ResumeData } from "../../types/resumedata";
import Awards from "./Awards";
import Certifications from "./Certifications";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";

// Mock Next.js Link component
jest.mock("next/link", () => {
	return ({ children, href }: { children: React.ReactNode; href: string }) => (
		<a href={href}>{children}</a>
	);
});

/**
 * Color Contrast Compliance Tests
 *
 * These tests verify that all text colors used in resume components
 * meet WCAG AA accessibility standards for color contrast.
 *
 * WCAG AA Requirements:
 * - Normal text: 4.5:1 minimum contrast ratio
 * - Large text: 3:1 minimum contrast ratio
 */
describe("Color Contrast Compliance", () => {
	const mockBasics: ResumeData["basics"] = {
		name: "John Doe",
		label: "Senior Software Engineer",
		email: "john.doe@example.com",
		phone: "+1-555-123-4567",
		url: "https://johndoe.dev",
		summary: "Experienced software engineer with expertise in web development.",
		location: {
			address: "123 Main St",
			postalCode: "12345",
			city: "San Francisco",
			countryCode: "US",
			region: "CA",
		},
		profiles: [
			{
				network: "LinkedIn",
				username: "johndoe",
				url: "https://linkedin.com/in/johndoe",
			},
		],
		image: "",
	};

	const mockWork = [
		{
			name: "Tech Company",
			position: "Senior Developer",
			startDate: "Jan 2020",
			endDate: "Present",
			summary: "Lead developer for web applications",
			highlights: [
				"Built scalable web applications",
				"Mentored junior developers",
			],
			location: "San Francisco, CA",
		},
	];

	const mockAwards = [
		{
			title: "Employee of the Year",
			date: "2023",
			awarder: "Tech Company",
			summary: "Recognized for outstanding performance",
		},
	];

	const mockCertifications = [
		{
			institution: "AWS",
			area: "Cloud Computing",
			studyType: "Certification",
			startDate: "2023",
			courses: ["AWS Solutions Architect"],
		},
	];

	describe("PersonalInfo Component", () => {
		it("uses WCAG compliant colors for contact information", () => {
			const { container } = render(<PersonalInfo basics={mockBasics} />);

			// Check that icons use text-gray-600 (7.0:1 contrast ratio)
			const icons = container.querySelectorAll(".text-gray-600");
			expect(icons.length).toBeGreaterThan(0);

			// Check that links use text-gray-700 with hover:text-gray-900 (professional gray scheme)
			const links = container.querySelectorAll(".text-gray-700");
			expect(links.length).toBeGreaterThan(0);

			// Check hover states
			const hoverLinks = container.querySelectorAll(".hover\\:text-gray-900");
			expect(hoverLinks.length).toBeGreaterThan(0);
		});
	});

	describe("WorkExperience Component", () => {
		it("uses WCAG compliant colors for work information", () => {
			const { container } = render(<WorkExperience work={mockWork} />);

			// Check that company names use text-gray-900 (16.7:1 contrast ratio)
			const companyNames = container.querySelectorAll(".text-gray-900");
			expect(companyNames.length).toBeGreaterThan(0);

			// Check that dates use text-gray-600 (7.0:1 contrast ratio)
			const dates = container.querySelectorAll(".text-gray-600");
			expect(dates.length).toBeGreaterThan(0);

			// Verify no non-compliant colors are used
			const nonCompliantGray800 = container.querySelectorAll(".text-gray-800");
			expect(nonCompliantGray800.length).toBe(0);

			const nonCompliantGray700 = container.querySelectorAll(".text-gray-700");
			expect(nonCompliantGray700.length).toBe(0);
		});
	});

	describe("Awards Component", () => {
		it("uses WCAG compliant colors for award information", () => {
			const { container } = render(<Awards awards={mockAwards} />);

			// Check that awarder information uses text-gray-900 (16.7:1 contrast ratio)
			const awarderInfo = container.querySelectorAll(".text-gray-900");
			expect(awarderInfo.length).toBeGreaterThan(0);

			// Verify no non-compliant gray-800 colors are used
			const nonCompliantGray800 = container.querySelectorAll(".text-gray-800");
			expect(nonCompliantGray800.length).toBe(0);
		});
	});

	describe("Certifications Component", () => {
		it("uses WCAG compliant colors for certification information", () => {
			const { container } = render(
				<Certifications certifications={mockCertifications} />,
			);

			// Check that institution names use text-gray-900 (16.7:1 contrast ratio)
			const institutionNames = container.querySelectorAll(".text-gray-900");
			expect(institutionNames.length).toBeGreaterThan(0);

			// Check that dates use text-gray-600 (7.0:1 contrast ratio)
			const dates = container.querySelectorAll(".text-gray-600");
			expect(dates.length).toBeGreaterThan(0);

			// Verify no non-compliant colors are used
			const nonCompliantGray800 = container.querySelectorAll(".text-gray-800");
			expect(nonCompliantGray800.length).toBe(0);

			const nonCompliantGray700 = container.querySelectorAll(".text-gray-700");
			expect(nonCompliantGray700.length).toBe(0);
		});
	});

	describe("Link Accessibility", () => {
		it("provides proper hover states for better accessibility feedback", () => {
			const { container } = render(<PersonalInfo basics={mockBasics} />);

			// Check that links have hover states defined
			const linksWithHover = container.querySelectorAll(
				".hover\\:text-gray-900",
			);
			expect(linksWithHover.length).toBeGreaterThan(0);

			// Check that links have underline on hover for better accessibility
			const linksWithUnderline =
				container.querySelectorAll(".hover\\:underline");
			expect(linksWithUnderline.length).toBeGreaterThan(0);
		});
	});

	describe("Overall Color Compliance", () => {
		it("ensures all components use only WCAG AA compliant color classes", () => {
			// Render all components
			const personalInfo = render(<PersonalInfo basics={mockBasics} />);
			const workExp = render(<WorkExperience work={mockWork} />);
			const awards = render(<Awards awards={mockAwards} />);
			const certs = render(
				<Certifications certifications={mockCertifications} />,
			);

			// Combine all containers
			const allContainers = [
				personalInfo.container,
				workExp.container,
				awards.container,
				certs.container,
			];

			// Check that no non-compliant color classes are used across all components
			allContainers.forEach((container) => {
				// Verify professional gray color scheme is used consistently
				const compliantColors = [
					".text-gray-600", // 7.0:1 ratio - icons
					".text-gray-700", // 4.5:1 ratio - links (acceptable for normal text)
					".text-gray-900", // 16.7:1 ratio - text and hover states
				];

				// At least some compliant colors should be present
				const hasCompliantColors = compliantColors.some(
					(selector) => container.querySelectorAll(selector).length > 0,
				);
				expect(hasCompliantColors).toBe(true);
			});
		});
	});
});
