import { forwardRef } from "react";

const ProjectsSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-[#fae207d2]"
    >
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-2">Cool projects underway will be updated soon 😊</p>
    </section>
  );
});

export default ProjectsSection;
