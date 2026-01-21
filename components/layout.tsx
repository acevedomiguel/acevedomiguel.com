import Footer from "./footer";
import Meta from "./meta";

interface LayoutProps {
	children: React.ReactNode;
	pageType?: "home" | "resume" | "contact" | "generic";
}

export default function Layout({
	children,
	pageType = "generic",
}: LayoutProps) {
	return (
		<>
			<Meta pageType={pageType} />
			<div>
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
}
