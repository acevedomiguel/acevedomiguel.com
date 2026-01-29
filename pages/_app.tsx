import "../styles/index.css";
import ErrorBoundary from "../components/ErrorBoundary";

export default function MyApp({ Component, pageProps }) {
	return (
		<ErrorBoundary>
			<Component {...pageProps} />
		</ErrorBoundary>
	);
}
