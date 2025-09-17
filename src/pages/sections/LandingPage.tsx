import { forwardRef } from "react";
import Typewriter from "typewriter-effect";
import Github from "../../social/Github";
import Linkedin from "@/social/Linkedin";
import Steam from "@/social/Steam";
import ActionMenu from "@/components/ActionMenu";

const LandingPage = forwardRef<HTMLElement>((_, ref) => {
  //used this for colour pallete
  //https://pixelied.com/colors/palette-editor/97dffc-858ae3-5939b1-4e148c-2c0735
  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen min-w-screen flex items-center justify-center relative bg-gradient-to-b from-[#F2E6EE] to-[#977DFF]"
    >
      <div className="flex flex-col text-center gap-4">
        <ActionMenu />
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-[#4e148c] via-[#858ae3] to-[#977dff] bg-clip-text text-transparent drop-shadow-lg mb-2 tracking-tight inline-block px-4 relative after:content-[''] after:block after:h-1 after:mt-2 after:mx-auto after:w-2/3 after:bg-gradient-to-r after:from-[#4e148c] after:via-[#858ae3] after:to-[#977dff] after:rounded-full">
          Pritabrata Mallik
        </h1>
        <div className="text-xl md:text-3xl font-medium">
          <Typewriter
            options={{
              strings: ["Software Developer", "Gamer", "Aviation Enthusiast"],
              autoStart: true,
              loop: true,
              deleteSpeed: 15,
              delay: 15,
            }}
          />
        </div>
        <div className="flex justify-center gap-3">
          <Github />
          <Linkedin />
          <Steam />
        </div>
      </div>
    </section>
  );
});

export default LandingPage;
