import Head from "next/head";
import { useRouter } from "next/router";
import { SEOManager } from "../lib/seo";

interface MetaProps {
	description?: string;
	title?: string;
	pageType?: "home" | "resume" | "contact" | "generic";
}

// Enhanced Meta component with backward compatibility
export default function Meta({
	description = "",
	title,
	pageType = "generic",
}: MetaProps) {
	const router = useRouter();
	const seoManager = new SEOManager();

	// Generate basic SEO data for backward compatibility
	const seoResult = seoManager.generatePageSEO({
		pageType,
		title,
		description,
		canonicalUrl: `https://acevedomiguel.com${router.asPath}`,
	});

	return (
		<Head>
			{/* Viewport */}
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			{/* Structured Data */}
			{seoResult.structuredData && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: seoResult.structuredData,
					}}
				/>
			)}

			{/* Canonical URL */}
			<link rel="canonical" href={seoResult.canonicalUrl} />

			{/* Enhanced Meta Tags */}
			{seoResult.metaTags.map((tag, index) => {
				if (tag.name) {
					return (
						<meta
							key={tag.key || `meta-${index}`}
							name={tag.name}
							content={tag.content}
						/>
					);
				} else if (tag.property) {
					return (
						<meta
							key={tag.key || `meta-${index}`}
							property={tag.property}
							content={tag.content}
						/>
					);
				}
				return null;
			})}

			{/* Social Media Profile Links */}
			<link rel="me" href="https://rebel.ar/@acevedomiguel" />
			<link rel="me" href="https://infosec.exchange/@faultydev" />

			{/* App Icons and Favicons */}
			<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
			<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
			<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
			<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
			<link
				rel="apple-touch-icon"
				sizes="114x114"
				href="/apple-icon-114x114.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="120x120"
				href="/apple-icon-120x120.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="144x144"
				href="/apple-icon-144x144.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="152x152"
				href="/apple-icon-152x152.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-icon-180x180.png"
			/>
		<link
			rel="icon"
			type="image/webp"
			sizes="192x192"
			href="/android-icon-192x192.webp"
		/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="96x96"
				href="/favicon-96x96.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link rel="manifest" href="/manifest.json" />
			<meta name="msapplication-TileColor" content="#0c4a6e" />
			<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
			<meta name="theme-color" content="#0c4a6e" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="default" />

		{/* Preload Critical Resources */}
		<link rel="preload" href="/profile.webp" as="image" type="image/webp" />
		</Head>
	);
}
