import { useEffect } from "react";
import posthog from "posthog-js";
import "../styles/index.css";
import ErrorBoundary from "../components/ErrorBoundary";
import { initWebVitals } from "../lib/web-vitals";

const posthogToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

if (typeof window !== "undefined") {
	if (posthogToken && posthogHost) {
		posthog.init(posthogToken, {
			api_host: posthogHost,
			ui_host: 'https://us.posthog.com',
			defaults: "2026-08-30",
			capture_exceptions: true,
			debug: process.env.NODE_ENV === "development",
			logs: {
				serviceName: "acevedomiguel.com",
				environment: process.env.NODE_ENV,
			},
		});
	} else if (process.env.NODE_ENV !== "production") {
		if (!posthogToken) {
			console.error(
				"NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN is configured"
			);
		}

		if (!posthogHost) {
			console.error(
				"NEXT_PUBLIC_POSTHOG_HOST variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once NEXT_PUBLIC_POSTHOG_HOST is configured"
			);
		}
	}
}

export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		// Initialize web vitals tracking on client-side
		initWebVitals();
	}, []);

	return (
		<ErrorBoundary>
			<Component {...pageProps} />
		</ErrorBoundary>
	);
}
