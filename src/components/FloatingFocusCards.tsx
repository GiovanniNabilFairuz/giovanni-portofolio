import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

export default function FloatingFocusCards() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
      {/* Bottom Action Banner */}
      <ScrollReveal delay={150}>
        <div className="mt-0 relative overflow-hidden border-2 border-line bg-cyan p-8 shadow-brut">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-1">
              <span className="sticker bg-white text-ink text-xs font-black">
                ✦ COLLABORATION &amp; WORK
              </span>
              <h3 className="text-2xl font-black tracking-tight text-ink md:text-3xl">
                Tertarik bikin sesuatu yang keren bersama?
              </h3>
              <p className="text-sm font-medium text-ink/80 max-w-xl">
                Tersedia untuk proyek server infrastructure, motion visual, script otomatisasi, atau sekadar berdiskusi tentang tech.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="brut-btn bg-white hover:bg-yellow group">
                <span>Let's Talk</span>
                <span className="transition-transform duration-200 group-hover:scale-125">✉️</span>
              </Link>
              <Link to="/motion-graphics" className="brut-btn bg-ink text-white hover:bg-pink">
                <span>Motion Reel</span>
                <span>🎬</span>
              </Link>
            </div>
          </div>

          {/* Background decorative circle */}
          <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full border-4 border-line/20 pointer-events-none select-none" />
        </div>
      </ScrollReveal>
    </section>
  );
}
