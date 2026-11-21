import posthog from "posthog-js";

type ResumeDownloadSource = "home" | "resume" | "contact";
type ContactMethod = "email" | "phone" | "linkedin";

const posthogConfigured = Boolean(
	process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN &&
		process.env.NEXT_PUBLIC_POSTHOG_HOST
);

const logInfo = (message: string, attributes: Record<string, string>) => {
	if (posthogConfigured) {
		posthog.logger.info(message, attributes);
	}
};

export const portfolioLogger = {
	resumeDownloadRequested(source: ResumeDownloadSource) {
		logInfo("resume download requested", { source });
	},
	contactMethodSelected(contact_method: ContactMethod) {
		logInfo("contact method selected", { contact_method });
	},
	contactDetailCopied(contact_method: "email" | "phone") {
		logInfo("contact detail copied", { contact_method });
	},
	externalProfileVisited(platform: string) {
		logInfo("external profile visited", { platform });
	},
};
