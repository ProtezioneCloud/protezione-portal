
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GA_MEASUREMENT_ID, isAnalyticsEnabled } from '@/utils/configUtils';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize gtag function
const initializeGA = () => {
  if (!isAnalyticsEnabled()) return;
  
  // Add Google Analytics script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
};

// Track page views
const trackPageView = (path: string) => {
  if (!isAnalyticsEnabled() || !window.gtag) return;
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
  });
};

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    initializeGA();
  }, []);

  useEffect(() => {
    if (isAnalyticsEnabled()) {
      trackPageView(location.pathname);
    }
  }, [location]);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
