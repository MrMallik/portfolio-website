import { Button } from "@/components/ui/button";
import { FiExternalLink } from "react-icons/fi";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";

// const actions = [
//   { label: "Contact", key: "contact" },
//   { label: "Settings", key: "settings" },
// ];

export default function ActionMenu() {
  const navigate = useNavigate();
  return (
    <div className="fixed top-6 left-6 z-50 flex items-center gap-1">
      <NavigationMenu className="list-none gap-1">
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent border-none text-base font-semibold transition-colors duration-150 hover:bg-[#f2e6ee] hover:text-[#4e148c] focus:bg-[#e0d7fa] focus:text-[#4e148c] active:bg-[#e0d7fa] active:text-[#4e148c] px-4 py-2 rounded-lg">
            Quick Actions
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col gap-1 p-2">
            {actions.map((action) => (
              <Button
                key={action.key}
                variant="ghost"
                className="justify-start w-full rounded-lg px-4 py-2 text-base font-semibold transition-colors duration-150 hover:bg-[#f2e6ee] hover:text-[#4e148c] focus:bg-[#e0d7fa] focus:text-[#4e148c] active:bg-[#e0d7fa] active:text-[#4e148c]"
                onClick={() => console.log(action.label)}
              >
                {action.label}
              </Button>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Button
              variant="ghost"
              onClick={() => {
                navigate("/blog");
              }}
            >
              Blog
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Button
              variant="ghost"
              onClick={() => {
                window.open(
                  "https://r2.pritabrata.com/resume_pritabrata.pdf",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <div className="flex items-center gap-1">
                View Resume <FiExternalLink />
              </div>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>
    </div>
  );
}
