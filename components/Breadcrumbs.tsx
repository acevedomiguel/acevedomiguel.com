import { useRouter } from "next/router";
import { BreadcrumbNavigation } from "../lib/seo";

interface BreadcrumbsProps {
	className?: string;
}

export default function Breadcrumbs({ className = "" }: BreadcrumbsProps) {
	const router = useRouter();
	const breadcrumbNav = new BreadcrumbNavigation();

	const breadcrumbData = breadcrumbNav.generateReactBreadcrumbProps(
		router.asPath,
		router.pathname === "/" ? "home" : "generic",
	);

	if (!breadcrumbData.showBreadcrumbs) {
		return null;
	}

	return (
		<>
			{/* Structured Data */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: breadcrumbData.structuredData,
				}}
			/>

			{/* Breadcrumb Navigation */}
			<nav
				aria-label="Breadcrumb"
				className={`breadcrumb-navigation ${className}`}
			>
				<ol
					className="flex flex-wrap items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-600"
					role="list"
				>
					{breadcrumbData.breadcrumbs.map((breadcrumb, index) => {
						const isLast = index === breadcrumbData.breadcrumbs.length - 1;

						return (
							<li
								key={breadcrumb.position}
								className="flex items-center"
								role="listitem"
							>
								{!isLast ? (
									<>
										<a
											href={breadcrumb.url}
											className="hover:text-gray-900 transition-colors truncate max-w-[120px] sm:max-w-none"
											title={`Go to ${breadcrumb.name}`}
										>
											{breadcrumb.name}
										</a>
										<span
											className="mx-1 sm:mx-2 text-gray-400"
											aria-hidden="true"
										>
											/
										</span>
									</>
								) : (
									<span
										className="text-gray-900 font-medium truncate max-w-[120px] sm:max-w-none"
										aria-current="page"
									>
										{breadcrumb.name}
									</span>
								)}
							</li>
						);
					})}
				</ol>
			</nav>
		</>
	);
}
