import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Check, ChevronsUpDown, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function Compose() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  // Predefined tags for suggestions
  const availableTags = [
    "react", "javascript", "typescript", "web-development", 
    "frontend", "backend", "fullstack", "tutorial", "tips",
    "css", "html", "nodejs", "python", "design", "ui", "ux"
  ];

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleTitleClick = () => {
    setIsEditingTitle(true);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setIsEditingTitle(false);
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "Escape") {
      setIsEditingTitle(false);
    }
  };

  // Tag handling functions
  const addTag = (tag: string) => {
    if (tag && !tags.includes(tag.toLowerCase())) {
      setTags([...tags, tag.toLowerCase()]);
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleTagSelect = (selectedTag: string) => {
    if (tags.includes(selectedTag)) {
      removeTag(selectedTag);
    } else {
      addTag(selectedTag);
    }
  };

  return (
    <div className="flex flex-col min-h-screen gap-10">
      <div className="sticky w-full">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            {/* Back Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBackClick}
              className="text-[#4e148c] hover:text-[#2c0735] hover:bg-[#F2E6EE]/20 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>

            {/* Editable Title */}
            <div className="flex-1">
              {(isEditingTitle || title === "") ? (
                <Input
                  value={title}
                  onChange={handleTitleChange}
                  onBlur={handleTitleBlur}
                  onKeyDown={handleTitleKeyDown}
                  className="text-4xl font-semibold border-none shadow-none bg-transparent px-0 py-0 h-auto focus-visible:ring-0 focus-visible:outline-none text-[#2c0735] placeholder:text-[#4e148c]/60"
                  placeholder="Enter your blog title..."
                  autoFocus
                />
              ) : (
                <h1
                  onClick={handleTitleClick}
                  className="text-4xl font-semibold text-[#2c0735] cursor-text hover:text-[#4e148c] transition-colors py-2 px-0 min-h-[2.5rem] flex items-center"
                >
                  {title || "Untitled Masterpiece"}
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tags Section */}
      <div className="container mx-auto px-6 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-[#4e148c]">Tags</span>
            
            {/* Selected Tags Display */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-[#F2E6EE]/40 text-[#4e148c] rounded-full text-sm border border-[#F2E6EE]/60"
                >
                  <span>{tag}</span>
                  <button
                    onClick={() => removeTag(tag)}
                    className="hover:bg-[#4e148c]/20 rounded-full p-0.5 transition-colors"
                  >
                    <Plus className="h-3 w-3 rotate-45" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add Tag Combobox */}
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="h-8 px-3 text-sm text-[#4e148c] border-[#F2E6EE]/60 hover:border-[#4e148c] hover:bg-[#F2E6EE]/20"
                >
                  <Plus className="h-3 w-3 mr-1" />
                  Add tag
                  <ChevronsUpDown className="ml-2 h-3 w-3 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0" align="start">
                <Command>
                  <CommandInput placeholder="Search tags..." className="h-9" />
                  <CommandList>
                    <CommandEmpty>No tag found.</CommandEmpty>
                    <CommandGroup>
                      {availableTags.map((tag) => (
                        <CommandItem
                          key={tag}
                          value={tag}
                          onSelect={() => handleTagSelect(tag)}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              tags.includes(tag) ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {tag}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Placeholder for future content */}
          <div className="min-h-[400px] bg-muted/20 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
            <p className="text-muted-foreground text-lg">
              Content area coming in Phase 4...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
