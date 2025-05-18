import { forwardRef } from "react";
import { FaGithub } from "react-icons/fa";

const HomeSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold">Pritabrata Mallik</h1>
      <p className="mt-2">
        Software Developer, Single Player Gamer and Commercial Aviation
        Enthusiast
      </p>
      <p className="flex items-center gap-2 mt-2">
        <FaGithub className="inline-block align-middle text-xl" />
        <a
          href="https://github.com/MrMallik"
          className="inline-block align-middle"
          target="_blank"
        >
          MrMallik
        </a>
      </p>
    </section>
  );
});

export default HomeSection;
