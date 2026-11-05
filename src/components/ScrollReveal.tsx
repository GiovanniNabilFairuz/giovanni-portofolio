import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  /** Additional CSS class names */
  className?: string;
  /** Stagger delay in milliseconds before transition starts */
  delay?: number;
  /** Direction from which the element slides in */
  direction?: "up" | "down" | "left" | "right";
  /** Travel distance in pixels (default 40) */
  distance?: number;
  /** Duration in milliseconds (default 850) */
  duration?: number;
}

/**
 * Neo-Brutalist Staggered Scroll Reveal with luxurious delay.
 * Fades in and slides elements smoothly into place as the user scrolls.
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 40,
  duration = 850,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if element is already inside the viewport on initial load
    const rect = el.getBoundingClientRect();
    const isInViewportNow = rect.top < window.innerHeight && rect.bottom > 0;

    if (isInViewportNow) {
      // Trigger smoothly with staggered delay
      const timer = setTimeout(() => {
        setVisible(true);
      }, 80 + delay);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Noticeable delay when scrolling into view for a deliberate, elegant entrance
          setTimeout(() => {
            setVisible(true);
          }, 80 + delay);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const hiddenTransform: Record<string, string> = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
  };

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate(0, 0)" : hiddenTransform[direction],
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
