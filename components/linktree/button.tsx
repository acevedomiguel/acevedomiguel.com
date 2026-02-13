import Link from "next/link";
import React from "react";

interface ButtonProps {
	children: React.ReactNode;
	href: string;
	title?: string;
	target?: string;
	rel?: string;
	variant?: "icon" | "link";
	className?: string;
	ariaLabel?: string;
}

export const Button = (props: ButtonProps) => {
	const { children, href, title, target, rel, variant = "icon", className = "", ariaLabel } = props;
	
	const baseClasses = "transition-colors duration-150 focus:shadow-outline";
	
	const variantClasses = {
		icon: "w-12 h-12 mr-2 pt-3 items-center justify-center text-center text-gray-700 bg-white rounded-full hover:bg-gray-200",
		link: "flex items-center justify-center w-full px-6 py-4 text-gray-700 bg-white rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 hover:shadow-md hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700"
	};
	
	const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();
	
	return (
		<Link href={href} passHref title={title} target={target} rel={rel} aria-label={ariaLabel}>
			<div className={combinedClasses}>
				{children}
			</div>
		</Link>
	);
};

export default Button;
