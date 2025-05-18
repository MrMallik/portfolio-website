import { forwardRef } from "react";

const EducationSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      id="education"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold">Education </h1>
      <p className="mt-2">Godavari Institute of Engineering & Technology </p>
      <p>Bachelor of Technology 2018-2022</p>
    </section>
  );
});

export default EducationSection;
