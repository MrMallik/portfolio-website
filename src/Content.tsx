import Footer from "./Footer";
import EducationSection from "./pages/sections/EducationSection";
import LandingPage from "./pages/sections/LandingPage";
import ProjectsSection from "./pages/sections/ProjectsSection";
import WorkExperienceSection from "./pages/sections/WorkExperienceSection";
import { SidebarEntries } from "@/service";

const Content = () => {
  return (
    <div className="flex flex-col snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <LandingPage />
      <WorkExperienceSection />
    </div>
  );
};

export default Content;
