import { SidebarEntries } from "@/service";
import { useState } from "react";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const handleClick = (entry: { name: string }) => {
    const sectionId = entry.name.replace(/\s+/g, "-").toLowerCase();
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
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
