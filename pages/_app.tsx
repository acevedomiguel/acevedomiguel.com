import '../styles/index.css'
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false;
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ga from '../components/ga'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


  return <Component {...pageProps} />
}