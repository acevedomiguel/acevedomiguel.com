import { render, screen } from "@testing-library/react";
import ResumeSection from "./ResumeSection";

describe("ResumeSection", () => {
	it("renders children content correctly", () => {
		render(
			<ResumeSection>
				<p>Test content</p>
			</ResumeSection>,
		);

		expect(screen.getByText("Test content")).toBeInTheDocument();
	});

	it("renders with title when provided", () => {
		render(
			<ResumeSection title="Test Section">
				<p>Test content</p>
			</ResumeSection>,
		);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
			"Test Section",
		);
		expect(screen.getByText("Test content")).toBeInTheDocument();
	});

	it("applies correct CSS classes for spacing and typography", () => {
		const { container } = render(
			<ResumeSection title="Test Section">
				<p>Test content</p>
			</ResumeSection>,
		);

		const section = container.querySelector("section");
		expect(section).toHaveClass("mb-6");

		const heading = screen.getByRole("heading", { level: 2 });
		expect(heading).toHaveClass("text-xl", "font-semibold", "mb-3");
	});

	it("applies custom className when provided", () => {
		const { container } = render(
			<ResumeSection className="custom-class">
				<p>Test content</p>
			</ResumeSection>,
		);

		const section = container.querySelector("section");
		expect(section).toHaveClass("mb-6", "custom-class");
	});

	it("renders without title when not provided", () => {
		render(
			<ResumeSection>
				<p>Test content</p>
			</ResumeSection>,
		);

		expect(screen.queryByRole("heading")).not.toBeInTheDocument();
		expect(screen.getByText("Test content")).toBeInTheDocument();
	});
});
