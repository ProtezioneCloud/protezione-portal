
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Toaster } from './components/ui/sonner';
import { LanguageProvider } from './contexts/LanguageContext';

/**
 * Note: This component is kept for reference but is not used.
 * The actual app initialization is handled directly in main.tsx with App.tsx.
 */
const AppWrapper: React.FC = () => {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
      <Toaster />
    </LanguageProvider>
  );
};

export default AppWrapper;
