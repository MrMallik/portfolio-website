import { forwardRef } from "react";

const EducationSection = forwardRef<HTMLElement>((_, ref) => {
  // Education data array
  const education = [
    {
      school: "Godavari Institute of Engineering & Technology",
      degree: "Bachelor of Technology",
      period: "2018 – 2022",
      description:
        "Graduated with a strong foundation in engineering and technology, actively participating in academic and extracurricular activities.",
    },
    {
      school: "Holy Cross School, Agartala",
      degree: "Indian School Certificate",
      period: "2016 – 2018",
      description:
        "Completed intermediate education with a focus on science and mathematics, laying the groundwork for engineering studies.",
    },
    {
      school: "Holy Cross School, Agartala",
      degree: "Indian Certificate of Secondary Education",
      period: "2014 – 2016",
      description:
        "Completed secondary education with a focus on science and mathematics, achieving a strong academic foundation.",
    },
    // Example for extensibility:
    // {
    //   school: "Some Other University",
    //   degree: "Master of Science",
    //   period: "2022 – 2024",
    //   description: "Specialized in ...",
    // },
  ];

  return (
    <section
      id="education"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-centerA bg-gradient-to-b from-[#2c0735] via-[#858ae3] to-[#97dffc] text-white px-2 sm:px-4 md:px-8 lg:px-16 py-12 sm:py-16 md:py-24"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-8">
        Education
      </h1>
      {/* Icon at the top */}
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#97dffc] shadow-lg border-4 border-white mb-8">
        <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
          <path
            d="M12 3L2 8l10 5 10-5-10-5zm0 13c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"
            fill="#2c0735"
          />
        </svg>
      </div>
      {/* Timeline/List of degrees */}
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-8 md:gap-0 relative">
        {/* Timeline (desktop/tablet only) */}
        <div className="hidden md:flex flex-col items-center w-16 relative">
          {education.map((_, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center flex-1 min-h-[120px]"
            >
              {idx !== 0 && <div className="w-1 flex-1 bg-[#97dffc]" />}
              <div className="w-5 h-5 rounded-full bg-[#858ae3] border-4 border-white shadow mb-1" />
              {idx !== education.length - 1 && (
                <div className="w-1 flex-1 bg-[#97dffc]" />
              )}
            </div>
          ))}
        </div>
        {/* Cards */}
        <div className="flex-1 flex flex-col gap-12">
          {education.map((ed) => (
            <div
              key={ed.school + ed.degree}
              className="relative flex flex-col items-center md:items-start bg-white rounded-2xl p-3 sm:p-8 shadow-2xl w-full z-10"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-[#2c0735] text-center md:text-left">
                {ed.school}
              </div>
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-2 mb-4">
                <span className="inline-block bg-[#858ae3] text-white text-xs sm:text-sm font-semibold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow">
                  {ed.degree}
                </span>
                <span className="inline-block bg-[#f2e6ee] text-[#2c0735] text-xs sm:text-sm font-semibold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow">
                  {ed.period}
                </span>
              </div>
              <div className="w-16 h-1 bg-[#97dffc] rounded-full mb-4 md:ml-0 mx-auto"></div>
              <div className="text-sm sm:text-lg md:text-xl text-center md:text-left text-[#2c0735]">
                {ed.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default EducationSection;
