export const SidebarEntries = [
  {
    name: "Home",
  },
  {
    name: "Work",
  },
  {
    name: "Projects",
  },
  {
    name: "Education",
  },
];

export function isMobileDevice() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768;
}
