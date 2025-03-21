
// Environment variables are injected during the build process by GitHub Actions

// Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

// Email configuration
export const EMAIL_SERVICE = import.meta.env.VITE_EMAIL_SERVICE || '';
export const EMAIL_USER = import.meta.env.VITE_EMAIL_USER || '';
export const EMAIL_PASS = import.meta.env.VITE_EMAIL_PASS || '';
export const EMAIL_FROM = import.meta.env.VITE_EMAIL_FROM || '';
export const EMAIL_TO = import.meta.env.VITE_EMAIL_TO || '';

// Function to check if analytics is enabled
export const isAnalyticsEnabled = () => {
  return GA_MEASUREMENT_ID !== '';
};

// Function to check if email is configured
export const isEmailConfigured = () => {
  return EMAIL_SERVICE !== '' && EMAIL_USER !== '' && EMAIL_PASS !== '';
};
