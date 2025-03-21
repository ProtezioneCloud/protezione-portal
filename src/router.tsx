
import { createBrowserRouter } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import GoogleAnalytics from './components/GoogleAnalytics';

// Get the base URL from Vite's environment
const baseUrl = import.meta.env.BASE_URL;

// Wrap each component to include GoogleAnalytics
const withAnalytics = (Component: React.ComponentType) => () => (
  <>
    <Component />
    <GoogleAnalytics />
  </>
);

// Create a router with the correct basename for GitHub Pages
export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: withAnalytics(Index)(),
    },
    {
      path: '/privacy-policy',
      element: withAnalytics(PrivacyPolicy)(),
    },
    {
      path: '*',
      element: withAnalytics(NotFound)(),
    },
  ],
  {
    basename: baseUrl,
  }
);
