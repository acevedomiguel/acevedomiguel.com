import Link from "next/link";
import type React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import type { ResumeData } from "../../types/resumedata";

interface PersonalInfoProps {
	basics: ResumeData["basics"];
}

/**
 * PersonalInfo component displays personal information with clean typography
 * matching homepage patterns. Replaces card styling with simple text-based layout.
 *
 * Features:
 * - Uses text-md sizing for content consistency
 * - Applies mb-3 and mb-6 spacing patterns from homepage
 * - Clean, minimal styling without borders or backgrounds
 * - Preserves all personal details and contact information
 */
const PersonalInfo: React.FC<PersonalInfoProps> = ({ basics }) => {
	return (
		<div className="mb-8">
			{/* Name and Title */}
			<h1 className="text-4xl sm:text-5xl font-semibold leading-tight mb-3">
				{basics.name}
			</h1>
			<p className="text-xl sm:text-2xl font-medium mb-6 text-gray-700">{basics.label}</p>

			{/* Professional Summary */}
			<p className="mb-8">{basics.summary}</p>

			{/* Contact Information */}
			<h2 className="contact-info-heading mb-4">Contact Information</h2>
			<address className="mb-4 not-italic">
				<div className="contact-info-grid grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
					{/* Email */}
					{basics.email && (
						<div className="flex items-center">
							<FaEnvelope className="inline mr-2 text-gray-600" />
							<a
								href={`mailto:${basics.email}`}
								className="text-gray-700 hover:text-gray-900 hover:underline break-all"
							>
								{basics.email}
							</a>
						</div>
					)}

					{/* Phone */}
					{basics.phone && (
						<div className="flex items-center">
							<FaPhone className="inline mr-2 text-gray-600" />
							<a
								href={`tel:${basics.phone}`}
								className="text-gray-700 hover:text-gray-900 hover:underline"
							>
								(+852) 6435-6936
							</a>
						</div>
					)}

					{/* Location */}
					{basics.location?.region && (
						<div className="flex items-center">
							<FaMapMarkerAlt className="inline mr-2 text-gray-600" />
							<span>{basics.location.region}</span>
						</div>
					)}

					{/* Website */}
					{basics.url && (
						<div className="flex items-center">
							<CgWebsite className="inline mr-2 text-gray-600" />
							<Link
								href={basics.url}
								className="text-gray-700 hover:text-gray-900 hover:underline"
							>
								{basics.url.replace("https://", "").replace("http://", "")}
							</Link>
						</div>
					)}

					{/* LinkedIn Profile */}
					{basics.profiles && basics.profiles.length > 0 && (
						<div className="flex items-center">
							<FaLinkedin className="inline mr-2 text-gray-600" />
							<Link
								href={basics.profiles[0].url}
								className="text-gray-700 hover:text-gray-900 hover:underline"
							>
								acevedomiguel
							</Link>
						</div>
					)}
				</div>
			</address>
		</div>
	);
};

export default PersonalInfo;
