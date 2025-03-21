
// src/utils/configUtils.ts

// Measurement ID from environment variable
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string;

// Local storage key for cookie consent
const COOKIE_CONSENT_KEY = 'protezione-cookie-consent';

/**
 * Determine if analytics should be enabled
 * 1. Check if consent was given
 * 2. Check if ID is available
 * 3. Check if not in development mode
 */
export const isAnalyticsEnabled = (): boolean => {
  // Check for user consent
  const cookieConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
  const hasConsent = cookieConsent === 'accept';
  
  // Check for GA ID
  const hasGAID = !!GA_MEASUREMENT_ID;
  
  // Check if in production
  const isProduction = import.meta.env.PROD;
  
  return hasConsent && hasGAID && isProduction;
};

// Email configuration
export const EMAIL_CONFIG = {
  SERVICE: import.meta.env.VITE_EMAIL_SERVICE as string,
  USER: import.meta.env.VITE_EMAIL_USER as string,
  PASS: import.meta.env.VITE_EMAIL_PASS as string,
  FROM: import.meta.env.VITE_EMAIL_FROM as string,
  TO: import.meta.env.VITE_EMAIL_TO as string,
};

/**
 * Check if email functionality is configured
 */
export const isEmailConfigured = (): boolean => {
  return !!(
    EMAIL_CONFIG.SERVICE &&
    EMAIL_CONFIG.USER &&
    EMAIL_CONFIG.PASS &&
    EMAIL_CONFIG.FROM &&
    EMAIL_CONFIG.TO
  );
};
