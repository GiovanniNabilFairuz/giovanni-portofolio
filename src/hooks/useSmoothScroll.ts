import { useEffect } from "react";

/**
 * Momentum Smooth Scroll Hook for desktop mouse wheels.
 * Converts stepped/choppy mouse wheel clicks into a continuous, silky-smooth
 * physics momentum curve using requestAnimationFrame and linear interpolation (lerp).
 */
export function useSmoothScroll() {
  useEffect(() => {
    // Check if running in browser
    if (typeof window === "undefined") return;

    let currentY = window.scrollY;
    let targetY = window.scrollY;
    let isRunning = false;
    let rafId: number | null = null;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const loop = () => {
      // 0.085 provides a luxurious, soft momentum glide
      currentY = lerp(currentY, targetY, 0.085);
      window.scrollTo(0, currentY);

      if (Math.abs(targetY - currentY) > 0.5) {
        rafId = requestAnimationFrame(loop);
      } else {
        isRunning = false;
        currentY = targetY;
        window.scrollTo(0, currentY);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Don't interfere if user is zooming (Ctrl) or scrolling horizontally (Shift)
      if (e.ctrlKey || e.shiftKey) return;

      // Allow natural scrolling inside local nested scroll containers (e.g. modals, code boxes)
      let el = e.target as HTMLElement | null;
      let hasInnerScroll = false;
      while (el && el !== document.body && el !== document.documentElement) {
        const style = window.getComputedStyle(el);
        if (
          (style.overflowY === "auto" || style.overflowY === "scroll") &&
          el.scrollHeight > el.clientHeight
        ) {
          hasInnerScroll = true;
          break;
        }
        el = el.parentElement;
      }
      if (hasInnerScroll) return;

      e.preventDefault();

      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

      // Dampen delta slightly for a controlled, elegant feel
      targetY = Math.max(0, Math.min(maxScroll, targetY + e.deltaY * 0.95));

      if (!isRunning) {
        isRunning = true;
        currentY = window.scrollY;
        rafId = requestAnimationFrame(loop);
      }
    };

    const handleExternalScroll = () => {
      if (!isRunning) {
        currentY = window.scrollY;
        targetY = window.scrollY;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleExternalScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleExternalScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
}

