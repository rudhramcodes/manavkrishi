import { MotionConfig } from 'framer-motion';
import Home from './pages/Home';

export default function App() {
  const engagementOnly = /^\/14-december\/?$/.test(window.location.pathname);
  return <MotionConfig reducedMotion="user"><Home engagementOnly={engagementOnly} /></MotionConfig>;
}
