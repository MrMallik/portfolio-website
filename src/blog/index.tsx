import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { forwardRef } from "react";

const BlogLandingPage = forwardRef<HTMLElement>((_, ref) => {
  const navigate = useNavigate();
  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F2E6EE] via-[#97dffc] to-[#4e148c] px-4 py-16"
    >
      <div className="fixed top-6 left-6 z-50">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="text-[#4e148c] hover:bg-[#F2E6EE]/20 hover:text-[#4e148c] border-[#4e148c]"
        >
          Go Home
        </Button>
      </div>
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-10 flex flex-col items-center max-w-lg w-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#4e148c] mb-4 text-center drop-shadow-lg">
          Blog Coming Soon
        </h1>
        <p className="text-lg text-[#2c0735] text-center mb-2">
          Stay tuned for updates and articles!
        </p>
        <span className="inline-block mt-4 px-4 py-2 rounded-full bg-[#97dffc] text-[#2c0735] font-semibold shadow">
          Launching soon 🚀
        </span>
      </div>
    </section>
  );
});

export default BlogLandingPage;
