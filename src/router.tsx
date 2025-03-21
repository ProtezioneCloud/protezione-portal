
import { createBrowserRouter } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Get the base URL from Vite's environment
const baseUrl = import.meta.env.BASE_URL;

// Create a router with the correct basename for GitHub Pages
export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Index />,
    },
    {
      path: '/privacy-policy',
      element: <PrivacyPolicy />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
  {
    basename: baseUrl,
  }
);
