import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./blog";
import AppLayout from "./AppLayout";
import LandingPage from "@/pages/sections/LandingPage";
import WorkExperienceSection from "@/pages/sections/Work";
import ProjectsSection from "@/pages/sections/ProjectsSection";
import EducationSection from "@/pages/sections/EducationSection";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/work" element={<WorkExperienceSection />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/education" element={<EducationSection />} />
      </Route>
      <Route path="/blog/*" element={<Blog />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
