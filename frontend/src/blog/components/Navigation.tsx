import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full border-b bg-background">
      <div className="container mx-auto px-4 py-3 flex justify-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/")}
          className="text-muted-foreground hover:text-foreground"
        >
          Home
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/blog/")}
          className="text-muted-foreground hover:text-foreground"
        >
          Blog
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
