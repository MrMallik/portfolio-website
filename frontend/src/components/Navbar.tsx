import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { resumeUrl, profile } from "@/service";

const navLinks = [
    { path: "/", label: "Home" },
    { path: "/work", label: "Work" },
    { path: "/projects", label: "Projects" },
    { path: "/education", label: "Education" },
];

export const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <div className="sticky top-0 z-50 backdrop-blur-xl bg-background/60">
                <div className="flex h-12 items-center justify-between px-4 sm:px-6">
                    <button
                        onClick={() => navigate("/")}
                        className="text-sm font-semibold tracking-tight text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                        {profile.name}
                    </button>
                    <div className="hidden md:flex items-center gap-0.5">
                        {navLinks.map((link) => (
                            <Button
                                key={link.path}
                                variant="ghost"
                                size="sm"
                                onClick={() => navigate(link.path)}
                                className={`cursor-pointer text-xs h-7 px-2.5 ${location.pathname === link.path
                                    ? "text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {link.label}
                            </Button>
                        ))}
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                                window.open(resumeUrl, "_blank", "noopener,noreferrer")
                            }
                            className="text-muted-foreground hover:text-foreground cursor-pointer text-xs h-7 px-2.5"
                        >
                            Resume <ExternalLink className="size-3 ml-1" />
                        </Button>
                        <ThemeToggle />
                    </div>
                    <div className="flex md:hidden items-center gap-1">
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setMobileOpen(true)}
                            aria-label="Open menu"
                            className="cursor-pointer size-8"
                        >
                            <Menu className="size-4" />
                        </Button>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl"
                    >
                        <div className="flex h-14 items-center justify-between px-4 sm:px-6">
                            <span className="text-sm font-semibold tracking-tight text-foreground">
                                {profile.name}
                            </span>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setMobileOpen(false)}
                                aria-label="Close menu"
                                className="cursor-pointer"
                            >
                                <X className="size-5" />
                            </Button>
                        </div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="flex flex-col items-center justify-center gap-6 pt-16"
                        >
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.path}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.15 + i * 0.05, duration: 0.3 }}
                                    onClick={() => {
                                        setMobileOpen(false);
                                        navigate(link.path);
                                    }}
                                    className={`text-2xl font-medium transition-colors cursor-pointer ${location.pathname === link.path
                                        ? "text-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {link.label}
                                </motion.button>
                            ))}

                            <Button
                                variant="ghost"
                                onClick={() =>
                                    window.open(resumeUrl, "_blank", "noopener,noreferrer")
                                }
                                className="mt-2 text-muted-foreground hover:text-foreground cursor-pointer"
                            >
                                View Resume <ExternalLink className="size-3 ml-1" />
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
