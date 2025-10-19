import { ArrowLeft, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function BlogNavigation() {
  const navigate = useNavigate();

  const handleComposeClick = () => {
    navigate("/blog/compose");
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex flex-1 items-center justify-between gap-4">
          <nav className="flex items-center space-x-6">
            <a
              href="/"
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#4e148c] hover:text-[#2c0735] transition-colors rounded-md hover:bg-[#F2E6EE]/20"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Portfolio</span>
            </a>
          </nav>
          <nav className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={handleComposeClick}
              className="text-[#4e148c] hover:text-[#2c0735] hover:bg-[#F2E6EE]/20 transition-colors"
            >
              <Edit3 className="h-4 w-4 mr-2" />
              Compose
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
