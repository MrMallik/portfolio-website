import { forwardRef } from "react";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";
import Github from "../../social/Github";
import Linkedin from "@/social/Linkedin";
import Steam from "@/social/Steam";

const LandingPage = forwardRef<HTMLElement>((_, ref) => {
  //used this for colour pallete
  //https://pixelied.com/colors/palette-editor/97dffc-858ae3-5939b1-4e148c-2c0735
  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen min-w-screen flex items-center justify-center relative bg-gradient-to-b from-[#F2E6EE] to-[#977DFF]"
    >
      <div className="flex gap-2 absolute top-0 right-0 p-4 z-10">
        <Button variant="ghost">Projects</Button>
        <Button variant="ghost">About</Button>
      </div>
      <div className="flex flex-col text-center gap-4">
        <h1 className="text-7xl md:text-9xl font-semibold">
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
