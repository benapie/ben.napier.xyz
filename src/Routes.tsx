import { ContactPage } from "features/contact-page";
import { SplashPage } from "features/splash-page";
import { ExperiencePage } from "features/xp-page";
import { AnimatePresence } from "framer-motion";
import {
  Navigate,
  Route,
  Routes as ReactRouterRoutes,
  useLocation,
} from "react-router-dom";

export const Routes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="sync">
      <ReactRouterRoutes location={location} key={location.pathname}>
        <Route path="/home" element={<SplashPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </ReactRouterRoutes>
    </AnimatePresence>
  );
};
