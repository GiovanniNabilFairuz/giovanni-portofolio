// Default site content for Phase 1. In later phases this data comes from D1
// through the API; these values are the fallback when the API is unavailable.

export const site = {
  wordmark: "GIOVANNI",
  name: "Giovanni",
  avatar: "/giovanni.jpg",
  headline:
    "Building secure systems, exploring cybersecurity, and creating visuals that move.",
  description:
    "Saya tertarik pada teknologi, cybersecurity, server infrastructure, dan motion design.",
  availability: "Open for collaboration",
  professionTag: "Creative Technologist",
  location: "Malang, Indonesia",
  socials: [
    {
      label: "Instagram",
      handle: "@gioognf",
      url: "https://instagram.com/gioognf",
    },
  ],
} as const;

export const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Motion Graphics", to: "/motion-graphics" },
  { label: "Contact", to: "/contact" },
] as const;

export const ADMIN_PATH = "/cumanadmin";
