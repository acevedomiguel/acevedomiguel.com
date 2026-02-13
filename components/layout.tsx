import Footer from "./footer";
import Meta from "./meta";

interface LayoutProps {
	children: React.ReactNode;
	pageType?: "home" | "resume" | "contact" | "generic";
	showFooter?: boolean;
}

export default function Layout({
	children,
	pageType = "generic",
	showFooter = true,
}: LayoutProps) {
	return (
		<>
			<Meta pageType={pageType} />
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-sky-900 focus:px-4 focus:py-2 focus:rounded-sm focus:shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-sky-900"
			>
				Skip to main content
			</a>
			<div>
				<main>{children}</main>
			</div>
			{showFooter && <Footer />}
		</>
	);
}
