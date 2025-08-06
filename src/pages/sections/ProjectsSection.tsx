import { forwardRef } from "react";

const ProjectsSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#97dffc] via-[#858ae3] to-[#f2e6ee] text-[#2c0735] px-2 sm:px-4 md:px-8 lg:px-16"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r text-white bg-clip-text drop-shadow-lg mb-2 text-center tracking-tight border-b-4 border-[#97dffc] inline-block px-4">
        Projects
      </h1>
      <div className="w-full max-w-xl sm:max-w-2xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 shadow-lg text-center">
          <p className="text-base sm:text-lg md:text-xl text-[#2c0735]">
            Cool projects underway will be updated soon 😊
          </p>
        </div>
      </div>
    </section>
  );
});

export default ProjectsSection;
