import "../styles/index.css";
// import { useRouter } from "next/router";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false;
// import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
	// const router = useRouter()

	// useEffect(() => {
	//   const handleRouteChange = (url) => {
	//   }
	//   router.events.on('routeChangeComplete', handleRouteChange)
	//   return () => {
	//     router.events.off('routeChangeComplete', handleRouteChange)
	//   }
	// }, [router.events])

	return <Component {...pageProps} />;
}
