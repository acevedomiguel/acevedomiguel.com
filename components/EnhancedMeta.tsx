import Head from "next/head";
import { useRouter } from "next/router";
import { SEOManager } from "../lib/seo";
import type { SEOManagerProps } from "../lib/seo/types";

interface EnhancedMetaProps {
	title?: string;
	description?: string;
	pageType?: "home" | "resume" | "contact" | "generic";
	structuredData?: any;
	additionalMeta?: Array<{
		name?: string;
		property?: string;
		content: string;
		key?: string;
	}>;
}

export default function EnhancedMeta({
	title,
	description,
	pageType = "generic",
	structuredData,
	additionalMeta = [],
}: EnhancedMetaProps) {
	const router = useRouter();
	const seoManager = new SEOManager();

	// Generate SEO data
	const seoProps: SEOManagerProps = {
		pageType,
		title,
		description,
		canonicalUrl: `https://acevedomiguel.com${router.asPath}`,
		structuredData,
		additionalMeta,
	};

	const seoResult = seoManager.generatePageSEO(seoProps);

	return (
		<Head>
			{/* Structured Data */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: seoResult.structuredData,
				}}
			/>

			{/* Canonical URL */}
			<link rel="canonical" href={seoResult.canonicalUrl} />

			{/* Generated Meta Tags */}
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

			{/* Favicon and App Icons */}
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
				type="image/png"
				sizes="192x192"
				href="/android-icon-192x192.png"
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

			{/* Microsoft Tile Configuration */}
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
			<meta name="theme-color" content="#ffffff" />

			{/* Preload Critical Resources */}
			<link rel="preload" href="/profile.png" as="image" />

			{/* DNS Prefetch for External Domains */}
			<link rel="dns-prefetch" href="//fonts.googleapis.com" />
			<link rel="dns-prefetch" href="//fonts.gstatic.com" />
		</Head>
	);
}
