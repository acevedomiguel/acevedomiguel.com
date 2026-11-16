import { MetaTagGeneratorImpl } from "./MetaTagGenerator";

const generator = new MetaTagGeneratorImpl();

function descriptionFor(description: string): string | undefined {
	const tags = generator.generateBasicMeta({ title: "Test", description });
	return tags.find((tag) => tag.name === "description")?.content;
}

describe("MetaTagGenerator truncateDescription", () => {
	it("leaves descriptions of 160 chars or fewer unchanged", () => {
		const short = "A".repeat(160);
		expect(descriptionFor(short)).toBe(short);
	});

	it("truncates at the last sentence boundary before 155 chars, without ellipsis", () => {
		const firstSentence = `${"First sentence here. ".repeat(3).trimEnd()}`;
		const description = `${firstSentence} ${"x".repeat(200)}`;
		expect(description.length).toBeGreaterThan(160);

		const result = descriptionFor(description);
		expect(result).toBe(firstSentence);
		expect(result).not.toContain("...");
		expect(result!.length).toBeLessThanOrEqual(160);
	});

	it("falls back to the last word boundary before 155 chars, without ellipsis", () => {
		const description = `word `.repeat(60).trimEnd();
		expect(description.length).toBeGreaterThan(160);

		const result = descriptionFor(description)!;
		expect(result).not.toContain("...");
		expect(result.length).toBeLessThanOrEqual(155);
		expect(description.startsWith(`${result} `)).toBe(true);
	});

	it("never appends a bare ellipsis to og:description", () => {
		const description = `word `.repeat(60).trimEnd();
		const tags = generator.generateOpenGraphMeta({
			title: "Test",
			description,
			url: "https://example.com",
		});
		const ogDescription = tags.find(
			(tag) => tag.property === "og:description",
		)?.content;
		expect(ogDescription).not.toContain("...");
	});
});

describe("MetaTagGenerator og:image dimensions", () => {
	it("declares 1200x630 for summary_large_image cards", () => {
		const tags = generator.generateOpenGraphMeta({
			title: "Test",
			description: "Test",
			url: "https://example.com",
			image: "https://example.com/og-image.png",
		});
		expect(
			tags.find((tag) => tag.property === "og:image:width")?.content,
		).toBe("1200");
		expect(
			tags.find((tag) => tag.property === "og:image:height")?.content,
		).toBe("630");
	});
});
