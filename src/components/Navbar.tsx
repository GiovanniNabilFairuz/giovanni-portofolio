import { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navItems, site } from "../config/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Refs for each nav item so we can measure position + width
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const ulRef = useRef<HTMLUListElement | null>(null);

  // Sliding indicator state
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const [duration, setDuration] = useState(300);
  const prevIndex = useRef(0);

  const getActiveIndex = useCallback(() => {
    return navItems.findIndex((item) =>
      item.to === "/"
        ? location.pathname === "/"
        : location.pathname.startsWith(item.to)
    );
  }, [location.pathname]);

  useEffect(() => {
    const activeIdx = getActiveIndex();
    if (activeIdx < 0) return;

    const el = itemRefs.current[activeIdx];
    const container = ulRef.current;
    if (!el || !container) return;

    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    setIndicator({
      left: elRect.left - containerRect.left,
      width: elRect.width,
    });

    // Duration proportional to distance: 250ms per step
    const steps = Math.abs(activeIdx - prevIndex.current);
    setDuration(Math.max(300, steps * 250));
    prevIndex.current = activeIdx;
  }, [location.pathname, getActiveIndex]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-line bg-bg">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="font-sans text-xl font-black tracking-tight">
          {site.wordmark}
          <span className="text-cyan">/</span>
        </Link>

        <ul
          ref={ulRef}
          className="relative hidden items-center gap-1 md:flex"
        >
          {/* Sliding cyan indicator */}
          <li
            aria-hidden
            className="pointer-events-none absolute top-0 h-full border-2 border-line bg-cyan"
            style={{
              left: indicator.left,
              width: indicator.width,
              transition: `left ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), width ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
            }}
          />

          {navItems.map((item, i) => (
            <li
              key={item.to}
              ref={(el) => { itemRefs.current[i] = el; }}
            >
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative z-10 block px-3 py-2 text-sm font-bold transition-colors duration-150 ${
                    isActive
                      ? "text-ink"
                      : "hover:text-cyan"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="border-2 border-line px-3 py-1 font-bold md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t-2 border-line bg-bg md:hidden">
          {navItems.map((item) => (
            <li key={item.to} className="border-b border-line">
              <NavLink
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-5 py-3 font-bold ${isActive ? "bg-cyan" : ""}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
