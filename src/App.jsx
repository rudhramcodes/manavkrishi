import { MotionConfig } from 'framer-motion';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  const engagementOnly = /^\/14-december\/?$/.test(window.location.pathname);
  if (window.location.pathname !== '/' && !engagementOnly) return <NotFound />;
  return <MotionConfig reducedMotion="user"><Home engagementOnly={engagementOnly} /></MotionConfig>;
}
