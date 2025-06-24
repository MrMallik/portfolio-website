import { useEffect } from "react";

export function useActiveSectionObserver(
  sectionIds: string[],
  setActiveSection: (id: string) => void
) {
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px 0px -60% 0px",
      threshold: 0.2,
    });
    sectionIds.forEach((id: string) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sectionIds, setActiveSection]);
}
