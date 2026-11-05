import ScrollReveal from "../components/ScrollReveal";

const motionHighlights = [
  {
    title: "Kinetic Typography & Rhythmic Beats",
    tool: "After Effects",
    icon: "⚡",
    bg: "bg-pink",
    badge: "60 FPS",
    desc: "Eksplorasi tipografi berkecepatan tinggi yang diselaraskan dengan tempo audio, memanfaatkan bezier curves untuk akselerasi gerak yang ekspresif.",
  },
  {
    title: "VFX & Compositing Sequences",
    tool: "AE + Premiere",
    icon: "🎬",
    bg: "bg-cyan",
    badge: "Full HD",
    desc: "Penggabungan multi-layer masking, particle effects, color grading bertema cyber/brutalist, serta transisi visual non-destruktif.",
  },
  {
    title: "Dynamic Promo & Tech Bumpers",
    tool: "Motion Design",
    icon: "✨",
    bg: "bg-yellow",
    badge: "Creative",
    desc: "Bumper video dan visual asset interaktif untuk identitas digital, presentasi teknologi, dan showcase portofolio modern.",
  },
];

export default function MotionGraphics() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
      {/* Decorative floating doodles */}
      <div className="pointer-events-none absolute -top-6 left-12 select-none text-3xl font-black text-pink/70 animate-float-slow">
        ✦
      </div>
      <div className="pointer-events-none absolute top-1/2 -right-4 select-none text-4xl font-mono text-cyan/50 animate-float-reverse">
        +
      </div>

      {/* Header */}
      <ScrollReveal>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            Motion Graphics
          </h1>
          <span className="sticker rotate-3 bg-pink text-white shadow-brut animate-float-gentle cursor-default transition-all duration-200 hover:scale-110 hover:rotate-12">
            🎬 60 FPS Visuals
          </span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Sisi kreatif saya dalam merancang animasi visual gerak, kinetic typography, dan dinamika ritmis yang menyatu dengan estetika teknologi.
        </p>
      </ScrollReveal>

      {/* Featured Visualizer Box */}
      <ScrollReveal delay={150}>
        <div className="mt-10 overflow-hidden border-2 border-line bg-[#0F172A] p-6 shadow-brut text-white">
          <div className="flex items-center justify-between border-b border-gray-700 pb-3 text-xs font-mono">
            <span className="text-cyan flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-pink animate-pulse" />
              AFTER_EFFECTS_RENDER_COMPOSITION.aep
            </span>
            <span className="text-yellow">Preview Engine: Active</span>
          </div>

          <div className="flex flex-col items-center justify-center py-10 text-center">
            <span className="text-5xl animate-bounce">🎞️</span>
            <h3 className="mt-4 text-2xl font-black text-white">
              Visual Motion Design Lab
            </h3>
            <p className="mt-2 max-w-md text-sm text-gray-300">
              Setiap frame dirancang dengan perhatian mendalam terhadap timing, spacing, dan ritme dinamis.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Highlights Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {motionHighlights.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 120} className="h-full">
            <div className="brut-card h-full p-6 transition-all duration-200 hover:-translate-y-2 hover:shadow-brut-lg cursor-default">
              <div className="flex items-center justify-between border-b-2 border-line pb-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center border-2 border-line ${item.bg} text-lg shadow-brut`}
                >
                  {item.icon}
                </span>
                <span className="sticker bg-bg-2 text-xs font-bold text-ink">
                  {item.badge}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-black text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-xs font-mono font-bold text-muted uppercase">
                Tool: {item.tool}
              </p>
              <p className="mt-3 text-sm text-ink/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
