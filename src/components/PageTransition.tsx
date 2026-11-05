import { useLocation } from "react-router-dom";
import { useEffect, type ReactNode } from "react";

/**
 * Buttery smooth fade-in + slide-up entrance animation triggered on every page change.
 * Home page uses a 1000ms duration curve as requested.
 * Uses key={pathname} so React remounts the container cleanly and triggers CSS animation instantly.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    // Instantly reset scroll to top on page navigation
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div
      key={pathname}
      className={`${isHome ? "animate-page-enter-home" : "animate-page-enter"} will-change-transform`}
    >
      {children}
    </div>
  );
}
