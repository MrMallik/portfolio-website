import { forwardRef } from "react";
import { FaGithub } from "react-icons/fa";
import ProfilePic from "../assets/profile.jpg"; // Update with your actual image path

const HomeSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center"
    >
      <img src={ProfilePic} className="w-60 h-60 rounded-full object-center" />
      <div className="flex flex-col m-2">
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
      </div>
    </section>
  );
});

export default HomeSection;
