
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Toaster } from './components/ui/sonner';
import { LanguageProvider } from './contexts/LanguageContext';
import GoogleAnalytics from './components/GoogleAnalytics';

/**
 * This component wraps our App with the necessary providers
 * and ensures the router is configured correctly for GitHub Pages
 */
const AppWrapper: React.FC = () => {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
      <GoogleAnalytics />
      <Toaster />
    </LanguageProvider>
  );
};

export default AppWrapper;
