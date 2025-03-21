
import { createRoot } from 'react-dom/client'
import './index.css'
import './setupGitHubPages.ts'
import AppWrapper from './AppWrapper'

createRoot(document.getElementById("root")!).render(<AppWrapper />);
