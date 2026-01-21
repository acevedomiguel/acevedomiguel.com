import type React from 'react';
import Link from "next/link";
import { BsPhone } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import type { ResumeData } from "../../types/resumedata";

interface PersonalInfoProps {
  basics: ResumeData['basics'];
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
    <div className="mb-6">
      {/* Name and Title */}
      <h1 className="text-2xl font-bold mb-3">
        {basics.name}
      </h1>
      <p className="text-lg font-medium mb-6">
        {basics.label}
      </p>
      
      {/* Professional Summary */}
      <p className="text-md mb-6">{basics.summary}</p>
      
      {/* Contact Information */}
      <address className="mb-6 not-italic">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {/* Email */}
          {basics.email && (
            <div className="text-md">
              <FaEnvelope className="inline mr-2 text-gray-700" /> 
              <a href={`mailto:${basics.email}`} className="text-blue-700 hover:underline">
                {basics.email}
              </a>
            </div>
          )}
          
          {/* Phone */}
          {basics.phone && (
            <div className="text-md">
              <BsPhone className="inline mr-2 text-gray-700" /> 
              <a href={`tel:${basics.phone}`} className="text-blue-700 hover:underline">
                {basics.phone}
              </a>
            </div>
          )}
          
          {/* Location */}
          {basics.location?.city && (
            <div className="text-md">
              <ImLocation className="inline mr-2 text-gray-700" /> 
              {basics.location.city}
            </div>
          )}
          
          {/* Website */}
          {basics.url && (
            <div className="text-md">
              <CgWebsite className="inline mr-2 text-gray-700" /> 
              <Link href={basics.url} className="text-blue-700 hover:underline">
                {basics.url.replace('https://', '').replace('http://', '')}
              </Link>
            </div>
          )}
          
          {/* LinkedIn Profile */}
          {basics.profiles && basics.profiles.length > 0 && (
            <div className="text-md">
              <FaLinkedin className="inline mr-2 text-gray-700" /> 
              <Link href={basics.profiles[0].url} className="text-blue-700 hover:underline">
                {basics.profiles[0].username}
              </Link>
            </div>
          )}
        </div>
      </address>
    </div>
  );
};

export default PersonalInfo;