import { forwardRef } from "react";
import moment from "moment";

const WorkExperienceSection = forwardRef<HTMLElement>((_, ref) => {
  // Calculate duration for current job using moment.js
  function getDuration(start: string) {
    const startDate = moment(start);
    const now = moment();
    const years = now.diff(startDate, "years");
    const months = now.diff(startDate.clone().add(years, "years"), "months");
    let str = "";
    if (years > 0) str += `${years} year${years > 1 ? "s" : ""}`;
    if (years > 0 && months > 0) str += ` and `;
    if (months > 0) str += `${months} month${months > 1 ? "s" : ""}`;
    return str || "0 months";
  }

  const experiences = [
    {
      title: "Product Development Engineer",
      company: "CodeTantra Tech Solutions Pvt Ltd",
      location: "Hyderabad, IN",
      period: "2022-08-01",
      isCurrent: true,
      description: [
        "Working on scalable web applications and platform features.",
        "Collaborated with cross-functional teams to deliver impactful solutions.",
        "Mentored junior developers and contributed to code reviews.",
      ],
    },
    {
      title: "Programmer Analyst Trainee",
      company: "Cognizant Technology Solutions",
      location: "Hyderabad, IN",
      period: "Mar 2022 - Jun 2022",
      isCurrent: false,
      description: [
        "I was a trainee here at Cognizant and was skilled in Web Technologies and Database Management.",
      ],
    },
    // Add more experiences here
  ];

  return (
    <section
      id="work"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#977dff] via-[#4e148c] to-[#2c0735] text-white px-2 sm:px-4 md:px-8 lg:px-16"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r text-white bg-clip-text drop-shadow-lg mb-2 text-center tracking-tight border-b-4 border-[#977dff] inline-block px-4">
        Work Experience
      </h1>
      <div className="relative w-full max-w-xl sm:max-w-2xl mx-auto mt-5">
        <div className="absolute left-2 sm:left-4 top-0 w-1 h-full bg-gradient-to-b from-[#977dff] via-[#4e148c] to-[#2c0735] rounded-full"></div>
        <ul className="space-y-8 sm:space-y-10 md:space-y-12 ml-8 sm:ml-12">
          {experiences.map((exp, idx) => (
            <li key={idx} className="relative">
              <div className="absolute -left-5 sm:-left-7 top-2 w-4 sm:w-5 h-4 sm:h-5 rounded-full border-4 border-white bg-[#4e148c] shadow-lg"></div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-1 md:gap-0">
                  <span className="text-base sm:text-xl font-semibold text-[#97dffc]">
                    {exp.title}
                  </span>
                  <span className="text-xs sm:text-sm text-[#f2e6ee] mt-1 md:mt-0">
                    {exp.isCurrent ? getDuration(exp.period) : exp.period}
                  </span>
                </div>
                <div className="text-sm sm:text-lg font-medium text-[#f2e6ee]">
                  {exp.company}
                </div>
                <div className="text-xs sm:text-sm text-[#97dffc] mb-2">
                  {exp.location}
                </div>
                <ul className="list-disc list-inside text-[#f2e6ee] text-xs sm:text-base space-y-1">
                  {exp.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});

export default WorkExperienceSection;
