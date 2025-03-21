
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GA_MEASUREMENT_ID, isAnalyticsEnabled } from '@/utils/configUtils';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (
      command: 'js' | 'config' | 'event',
      action: unknown,
      options?: Record<string, unknown>
    ) => void;
  }
}

// Add Google Analytics script to document head
const addGoogleAnalyticsScript = () => {
  if (!isAnalyticsEnabled()) return;
  
  // Skip if the script is already loaded
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) return;
  
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args) {
    window.dataLayer.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
};

// The Google Analytics component now needs to be used inside a route
const GoogleAnalytics = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (isAnalyticsEnabled()) {
      addGoogleAnalyticsScript();
    }
  }, []);
  
  useEffect(() => {
    if (isAnalyticsEnabled() && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, { page_path: location.pathname });
    }
  }, [location]);
  
  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
