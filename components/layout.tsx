import Footer from "./footer";
import Meta from "./meta";
import Nav from "./nav";

interface LayoutProps {
	children: React.ReactNode;
	pageType?: "home" | "resume" | "contact" | "generic";
	/** Overrides default SEO title for Open Graph / Twitter (HTML <title> can still be set in page Head). */
	title?: string;
	/** Overrides default meta description for this page (single source: Meta in <head>). */
	description?: string;
	showFooter?: boolean;
	showNav?: boolean;
}

export default function Layout({
	children,
	pageType = "generic",
	title,
	description,
	showFooter = true,
	showNav = true,
}: LayoutProps) {
	return (
		<>
			<Meta
				pageType={pageType}
				title={title}
				description={description}
			/>
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-sky-900 focus:px-4 focus:py-2 focus:rounded-sm focus:shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-sky-900"
			>
				Skip to main content
			</a>
			{showNav && <Nav />}
			<div>
				<main>{children}</main>
			</div>
			{showFooter && <Footer />}
		</>
	);
}
