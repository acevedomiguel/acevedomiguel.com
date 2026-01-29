import { useEffect } from "react";
import "../styles/index.css";
import ErrorBoundary from "../components/ErrorBoundary";
import { initWebVitals } from "../lib/web-vitals";

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
