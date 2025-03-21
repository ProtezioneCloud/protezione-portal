
import { createBrowserRouter } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';

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
      path: '*',
      element: <NotFound />,
    },
  ],
  {
    basename: baseUrl,
  }
);
