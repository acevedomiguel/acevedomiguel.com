import '../styles/index.css';
import '../styles/algolia-search.css';
import '../styles/blog.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}