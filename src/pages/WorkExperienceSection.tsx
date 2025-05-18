import { forwardRef } from "react";
import moment from "moment";
const WorkExperienceSection = forwardRef<HTMLElement>((_, ref) => {
  const today = moment();
  const ctJoiningDate = moment("2022-08-01");
  const years = today.diff(ctJoiningDate, "years");
  const months = today.diff(
    ctJoiningDate.clone().add(years, "years"),
    "months"
  );
  return (
    <section
      id="work"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold">Work Experience</h1>
      <p className="mt-2">Product Development Engineer</p>
      <p>🏢CodeTantra Tech Solutions Pvt Ltd </p>
      <p>📍 Hyderabad, IN</p>
      <p>{` 2022 - Present  ${years} years, ${months} months`}.</p>
    </section>
  );
});

export default WorkExperienceSection;
