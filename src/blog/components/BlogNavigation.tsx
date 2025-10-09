import { ArrowLeft } from "lucide-react";

export function BlogNavigation() {
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
            {/* Add search and other navigation items here later */}
          </nav>
        </div>
      </div>
    </header>
  );
}
