import Footer from "./Footer";
import EducationSection from "./pages/EducationSection";
import HomeSection from "./pages/HomeSection";
import ProjectsSection from "./pages/ProjectsSection";
import WorkExperienceSection from "./pages/WorkExperienceSection";
import { SidebarEntries } from "@/service";

const Content = () => {
  return (
    <div className="flex flex-col snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      {SidebarEntries.map((entry) => {
        switch (entry.name) {
          case "Education":
            return <EducationSection key={entry.name} />;
          case "Projects":
            return <ProjectsSection key={entry.name} />;
          case "Work":
            return <WorkExperienceSection key={entry.name} />;
          case "Home":
            return <HomeSection key={entry.name} />;
          default:
            return null;
        }
      })}
      <Footer />
    </div>
  );
};

export default Content;
