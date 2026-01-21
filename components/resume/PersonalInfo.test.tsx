import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { ResumeData } from "../../types/resumedata";
import PersonalInfo from "./PersonalInfo";

// Mock Next.js Link component
jest.mock("next/link", () => {
	return ({ children, href }: { children: React.ReactNode; href: string }) => (
		<a href={href}>{children}</a>
	);
});

describe("PersonalInfo Component", () => {
	const mockBasics: ResumeData["basics"] = {
		name: "John Doe",
		label: "Senior Software Engineer",
		image: "",
		email: "john.doe@example.com",
		phone: "+1 (555) 123-4567",
		url: "https://johndoe.com",
		summary:
			"Experienced software engineer with expertise in full-stack development.",
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
				username: "linkedin.com/in/johndoe",
				url: "https://www.linkedin.com/in/johndoe/",
			},
		],
	};

	it("renders personal information with clean typography", () => {
		render(<PersonalInfo basics={mockBasics} />);

		// Check name is displayed as h1 with proper styling
		const nameHeading = screen.getByRole("heading", { level: 1 });
		expect(nameHeading).toHaveTextContent("John Doe");
		expect(nameHeading).toHaveClass("text-3xl", "font-bold", "mb-2");

		// Check title is displayed as p (not h2) with proper styling
		const titleElement = screen.getByText("Senior Software Engineer");
		expect(titleElement.tagName).toBe("P");
		expect(titleElement).toHaveClass("text-xl", "font-medium", "mb-6");

		// Check summary is displayed with proper styling
		expect(
			screen.getByText(
				"Experienced software engineer with expertise in full-stack development.",
			),
		).toHaveClass("text-md", "mb-6");
	});

	it("displays all contact information with proper spacing", () => {
		render(<PersonalInfo basics={mockBasics} />);

		// Check email
		expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();

		// Check location (shows city)
		expect(screen.getByText("San Francisco")).toBeInTheDocument();

		// Check phone
		expect(screen.getByText("+1 (555) 123-4567")).toBeInTheDocument();

		// Check website URL (without protocol)
		expect(screen.getByText("johndoe.com")).toBeInTheDocument();

		// Check LinkedIn profile
		expect(screen.getByText("linkedin.com/in/johndoe")).toBeInTheDocument();
	});

	it("uses grid layout for contact information", () => {
		render(<PersonalInfo basics={mockBasics} />);

		// Check that contact information uses grid layout
		const gridContainer = screen.getByRole("group"); // address element has group role
		expect(gridContainer.querySelector(".grid")).toBeInTheDocument();
		expect(gridContainer.querySelector(".grid-cols-1")).toBeInTheDocument();
		expect(
			gridContainer.querySelector(".sm\\:grid-cols-2"),
		).toBeInTheDocument();
	});

	it("handles missing profiles gracefully", () => {
		// Create a test version by omitting profiles and casting
		const { profiles, ...basicsWithoutProfiles } = mockBasics;
		const testBasics = { ...basicsWithoutProfiles, profiles: [] };

		render(
			<PersonalInfo basics={testBasics as unknown as ResumeData["basics"]} />,
		);

		// Should still render other contact information
		expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
		expect(screen.getByText("San Francisco")).toBeInTheDocument();

		// LinkedIn should not be present
		expect(
			screen.queryByText("linkedin.com/in/johndoe"),
		).not.toBeInTheDocument();
	});

	it("uses proper semantic HTML structure", () => {
		render(<PersonalInfo basics={mockBasics} />);

		// Check heading hierarchy (only h1 in current implementation)
		const h1 = screen.getByRole("heading", { level: 1 });
		expect(h1).toBeInTheDocument();

		// Check address element is used for contact info
		const address = screen.getByRole("group"); // address has group role
		expect(address.tagName).toBe("ADDRESS");
		expect(address).toHaveClass("not-italic");

		// Check links are properly structured
		const links = screen.getAllByRole("link");
		expect(links.length).toBe(4); // Email, phone, website, and LinkedIn links
	});

	it("applies homepage-consistent spacing patterns", () => {
		const { container } = render(<PersonalInfo basics={mockBasics} />);

		// Check main container has mb-6
		const mainDiv = container.firstChild as HTMLElement;
		expect(mainDiv).toHaveClass("mb-6");

		// Check summary has mb-6 spacing
		const summary = screen.getByText(
			"Experienced software engineer with expertise in full-stack development.",
		);
		expect(summary).toHaveClass("mb-6");

		// Check address has mb-6 spacing
		const address = screen.getByRole("group");
		expect(address).toHaveClass("mb-6");
	});
});
