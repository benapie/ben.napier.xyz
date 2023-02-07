import { ContactPage } from "features/contact-page";
import { SplashPage } from "features/splash-page";
import { ExperiencePage } from "features/xp-page";
import { Navigate, Route, Routes as ReactRouterRoutes } from "react-router-dom";

export const Routes = () => (
  <ReactRouterRoutes>
    <Route path="/home" element={<SplashPage />} />
    <Route path="/experience" element={<ExperiencePage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="*" element={<Navigate to="/experience" />} />
  </ReactRouterRoutes>
);
