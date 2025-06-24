import { SidebarEntries } from "@/service";
import { useState } from "react";
import { useActiveSectionObserver } from "./hooks/useActiveSectionObserver";

const sectionIds = SidebarEntries.map((entry) =>
  entry.name.replace(/\s+/g, "-").toLowerCase()
);

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");
  useActiveSectionObserver(sectionIds, setActiveSection);

  const handleClick = (entry: { name: string }) => {
    const sectionId = entry.name.replace(/\s+/g, "-").toLowerCase();
    const section = document.getElementById(sectionId);
    const container = document.querySelector(".snap-y.overflow-y-scroll");
    if (section && container) {
      const sectionTop = section.offsetTop;
      (container as HTMLElement).scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col bg-[#0A2342] w-full min-h-screen p-4 justify-center">
      <div className="flex flex-col gap-8">
        {SidebarEntries.map((entry, i) => (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick(entry);
            }}
            key={i}
            className={`text-white cursor-pointer ${
              entry.name.replace(/\s+/g, "-").toLowerCase() === activeSection
                ? "font-bold"
                : ""
            }`}
          >
            {entry.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
