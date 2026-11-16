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

describe("MetaTagGenerator existing behavior", () => {
	it("emits keywords, author, viewport, language and locale meta tags", () => {
		const tags = generator.generateBasicMeta({
			title: "Test",
			description: "Desc",
			keywords: ["a", "b"],
			author: "Acevedo Miguel",
			language: "en",
			locale: "en_US",
		});
		const byName = (name: string) =>
			tags.find((tag) => tag.name === name)?.content;
		expect(byName("keywords")).toBe("a, b");
		expect(byName("author")).toBe("Acevedo Miguel");
		expect(byName("viewport")).toBe("width=device-width, initial-scale=1");
		expect(byName("language")).toBe("en");
		expect(byName("locale")).toBe("en_US");
		expect(byName("robots")).toBe("index, follow");
		expect(byName("googlebot")).toBe("index, follow");
	});

	it("honors a custom viewport", () => {
		const tags = generator.generateBasicMeta({
			title: "Test",
			description: "Desc",
			viewport: "width=1024",
		});
		expect(tags.find((tag) => tag.name === "viewport")?.content).toBe(
			"width=1024",
		);
	});

	it("omits optional basic tags when not provided", () => {
		const tags = generator.generateBasicMeta({ title: "Test" } as never);
		expect(tags.find((tag) => tag.name === "description")).toBeUndefined();
		expect(tags.find((tag) => tag.name === "keywords")).toBeUndefined();
		expect(tags.find((tag) => tag.name === "author")).toBeUndefined();
	});

	it("emits og tags with defaults and optional fields", () => {
		const tags = generator.generateOpenGraphMeta({
			title: "T",
			description: "D",
			url: "https://example.com/x",
			siteName: "Site",
		});
		const byProp = (prop: string) =>
			tags.find((tag) => tag.property === prop)?.content;
		expect(byProp("og:title")).toBe("T");
		expect(byProp("og:url")).toBe("https://example.com/x");
		expect(byProp("og:type")).toBe("website");
		expect(byProp("og:site_name")).toBe("Site");
		expect(byProp("og:locale")).toBe("en_US");
		expect(byProp("og:image")).toBeUndefined();
	});

	it("emits twitter card tags with optional image and creator", () => {
		const tags = generator.generateTwitterCardMeta({
			card: "summary_large_image",
			title: "T",
			description: "D",
			image: "https://example.com/i.png",
			creator: "@faultydev",
		});
		const byName = (name: string) =>
			tags.find((tag) => tag.name === name)?.content;
		expect(byName("twitter:card")).toBe("summary_large_image");
		expect(byName("twitter:image")).toBe("https://example.com/i.png");
		expect(byName("twitter:creator")).toBe("@faultydev");
	});

	it("omits twitter image and creator when not provided", () => {
		const tags = generator.generateTwitterCardMeta({
			card: "summary",
			title: "T",
			description: "D",
		});
		expect(
			tags.find((tag) => tag.name === "twitter:image"),
		).toBeUndefined();
		expect(
			tags.find((tag) => tag.name === "twitter:creator"),
		).toBeUndefined();
	});

	describe("generateCanonicalUrl", () => {
		it("returns the bare domain for home paths", () => {
			expect(generator.generateCanonicalUrl("/")).toBe(
				"https://acevedomiguel.com",
			);
			expect(generator.generateCanonicalUrl("index")).toBe(
				"https://acevedomiguel.com",
			);
		});

		it("builds canonical URLs for subpages", () => {
			expect(generator.generateCanonicalUrl("/resume")).toBe(
				"https://acevedomiguel.com/resume",
			);
		});

		it("strips a trailing slash from the base URL", () => {
			const g = new MetaTagGeneratorImpl("https://example.com/");
			expect(g.generateCanonicalUrl("contact")).toBe(
				"https://example.com/contact",
			);
		});
	});

	it("generateAllMetaTags combines basic, og, twitter and canonical", () => {
		const tags = generator.generateAllMetaTags({
			basic: { title: "T", description: "D" },
			openGraph: { title: "T", description: "D", url: "https://example.com" },
			twitter: { card: "summary", title: "T", description: "D" },
			canonicalPath: "/resume",
		});
		expect(tags.find((tag) => tag.name === "description")).toBeDefined();
		expect(
			tags.find((tag) => tag.property === "og:title"),
		).toBeDefined();
		expect(
			tags.find((tag) => tag.name === "twitter:card"),
		).toBeDefined();
		expect(tags.find((tag) => tag.key === "canonical")?.content).toBe(
			"https://acevedomiguel.com/resume",
		);
	});

	describe("truncateTitle", () => {
		it("leaves titles of 60 chars or fewer unchanged", () => {
			const tags = generator.generateOpenGraphMeta({
				title: "A".repeat(60),
				description: "D",
				url: "https://example.com",
			});
			expect(
				tags.find((tag) => tag.property === "og:title")?.content,
			).toBe("A".repeat(60));
		});

		it("truncates long titles at a word boundary with an ellipsis", () => {
			const title = `word `.repeat(30).trimEnd();
			const tags = generator.generateOpenGraphMeta({
				title,
				description: "D",
				url: "https://example.com",
			});
			const result = tags.find(
				(tag) => tag.property === "og:title",
			)?.content!;
			expect(result.endsWith("...")).toBe(true);
			expect(result.length).toBeLessThanOrEqual(60);
		});

		it("truncates mid-word when no usable word boundary exists", () => {
			const tags = generator.generateOpenGraphMeta({
				title: "A".repeat(100),
				description: "D",
				url: "https://example.com",
			});
			expect(
				tags.find((tag) => tag.property === "og:title")?.content,
			).toBe(`${"A".repeat(57)}...`);
		});
	});
});
