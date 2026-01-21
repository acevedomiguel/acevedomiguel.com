import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Skills from "./skills";

describe("Skills Component", () => {
	const mockSkills = [
		{
			name: "Cloud",
			keywords: ["AWS", "Kubernetes", "Docker"],
		},
		{
			name: "Backend",
			keywords: ["Node.js", "TypeScript", "Python"],
		},
	];

	it("renders skills section with title", () => {
		render(<Skills skills={mockSkills} />);

		expect(screen.getByText("Areas of Expertise")).toBeInTheDocument();
	});

	it("displays all skill categories", () => {
		render(<Skills skills={mockSkills} />);

		expect(screen.getByText("Cloud")).toBeInTheDocument();
		expect(screen.getByText("Backend")).toBeInTheDocument();
	});

	it("displays all skills as comma-separated lists", () => {
		render(<Skills skills={mockSkills} />);

		expect(screen.getByText("AWS, Kubernetes, Docker")).toBeInTheDocument();
		expect(screen.getByText("Node.js, TypeScript, Python")).toBeInTheDocument();
	});

	it("applies correct CSS classes for homepage consistency", () => {
		const { container } = render(<Skills skills={mockSkills} />);

		// Check for skill category styling
		const skillCategories = container.querySelectorAll("h3");
		skillCategories.forEach((category) => {
			expect(category).toHaveClass("text-lg", "font-medium", "mb-1");
		});

		// Check for skill content styling
		const skillContent = container.querySelectorAll("p");
		skillContent.forEach((content) => {
			expect(content).toHaveClass("text-md");
		});
	});

	it("handles empty skills array", () => {
		render(<Skills skills={[]} />);

		expect(screen.getByText("Areas of Expertise")).toBeInTheDocument();
		// Should not crash and should still show the section title
	});

	it("handles skills with empty keywords array", () => {
		const skillsWithEmptyKeywords = [
			{
				name: "Empty Category",
				keywords: [],
			},
		];

		render(<Skills skills={skillsWithEmptyKeywords} />);

		expect(screen.getByText("Empty Category")).toBeInTheDocument();
		// Check that empty keywords result in empty paragraph by finding the paragraph after the heading
		const emptyParagraph =
			screen.getByText("Empty Category").nextElementSibling;
		expect(emptyParagraph?.textContent).toBe(""); // Empty string from join
	});
});
