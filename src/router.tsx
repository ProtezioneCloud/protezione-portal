
import { createBrowserRouter } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';

// Get the base URL from Vite's environment
const baseUrl = import.meta.env.BASE_URL;

// Note: This router is kept for reference but is not used.
// The actual routing is handled in App.tsx with BrowserRouter.
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
