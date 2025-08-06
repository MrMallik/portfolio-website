import EducationSection from "./pages/sections/EducationSection";
import LandingPage from "./pages/sections/LandingPage";
import ProjectsSection from "./pages/sections/ProjectsSection";
import WorkExperienceSection from "./pages/sections/WorkExperienceSection";

const Content = () => {
  return (
    <div className="flex flex-col snap-y snap-mandatory overflow-y-auto scroll-smooth">
      <LandingPage />
      <WorkExperienceSection />
      <EducationSection />
      <ProjectsSection />
    </div>
  );
};

export default Content;
