import { onCLS, onINP, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

/**
 * Reports web vitals metrics to the console (development) or analytics (production)
 * Tracks Core Web Vitals: LCP, INP, CLS, FCP, TTFB
 */
function reportWebVitals(metric: Metric) {
  // In development, log to console
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
    });
  }

  // In production, you can send to analytics
  // Example: sendToAnalytics(metric)
  
  // For now, we'll just store in sessionStorage for debugging
  if (typeof window !== 'undefined') {
    const vitals = JSON.parse(sessionStorage.getItem('webVitals') || '{}');
    vitals[metric.name] = {
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      timestamp: Date.now(),
    };
    sessionStorage.setItem('webVitals', JSON.stringify(vitals));
  }
}

/**
 * Initialize web vitals tracking
 * Call this once in your app initialization
 */
export function initWebVitals() {
  onCLS(reportWebVitals);
  onINP(reportWebVitals);
  onFCP(reportWebVitals);
  onLCP(reportWebVitals);
  onTTFB(reportWebVitals);
}

/**
 * Get current web vitals from sessionStorage
 * Useful for debugging or displaying metrics
 */
export function getWebVitals() {
  if (typeof window === 'undefined') return null;
  return JSON.parse(sessionStorage.getItem('webVitals') || '{}');
}

export default reportWebVitals;
