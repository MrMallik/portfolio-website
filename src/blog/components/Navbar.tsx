import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 right-0">
      <div className="md: flex items-center gap-2">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="text-[#4e148c] hover:bg-[#F2E6EE]/20 hover:text-[#4e148c] border-[#4e148c]"
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
