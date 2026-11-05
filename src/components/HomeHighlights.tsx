import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    num: "01",
    title: "Server & Homelab",
    tag: "Infra",
    bg: "bg-yellow",
    icon: "🖥️",
    desc: "Virtualisasi Proxmox VE, containerized workload dengan Docker, reverse proxy aman, dan manajemen VPS Linux.",
    tech: ["Proxmox", "Docker", "Linux", "Cloudflare"],
  },
  {
    num: "02",
    title: "Cybersecurity",
    tag: "Defense",
    bg: "bg-cyan",
    icon: "🛡️",
    desc: "Eksplorasi keamanan jaringan, hardening sistem, zero-trust access, dan pemahaman fondasi ethical hacking.",
    tech: ["Network Hardening", "Reverse Proxy", "Firewall", "Access Control"],
  },
  {
    num: "03",
    title: "Motion & Visuals",
    tag: "Creative",
    bg: "bg-pink",
    icon: "🎬",
    desc: "Produksi visual gerak dinamis, kinetic typography ekspresif, video editing, dan desain digital bertempo tinggi.",
    tech: ["After Effects", "Kinetic Type", "Premiere", "Figma"],
  },
  {
    num: "04",
    title: "Automation & AI",
    tag: "Bots & Code",
    bg: "bg-green",
    icon: "⚡",
    desc: "Membangun script otomatisasi Python, bot telegram/discord, pipeline efisien, dan integrasi API AI modern.",
    tech: ["Python", "Task Automation", "AI Workflows", "APIs"],
  },
];

export default function HomeHighlights() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-12 md:py-16">
      {/* Section Header */}
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-line pb-6">
          <div>
            <div className="inline-flex items-center gap-2 border-2 border-line bg-yellow px-3 py-1 text-xs font-black uppercase tracking-wider text-ink shadow-brut mb-3">
              <span>✦</span>
              <span>Core Pillars</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-ink md:text-4xl">
              Focus Areas &amp; Specializations
            </h2>
          </div>
          <p className="max-w-md text-sm font-medium text-muted">
            Fondasi teknis dan minat kreatif yang saya kembangkan secara konsisten dalam setiap eksperimen &amp; proyek.
          </p>
        </div>
      </ScrollReveal>

      {/* 4 Pillars Grid with Staggered Scroll Reveal */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, index) => (
          <ScrollReveal
            key={pillar.num}
            delay={index * 160}
            direction="up"
            className="h-full"
          >
            <div className="brut-card group relative h-full flex flex-col justify-between p-5 transition-all duration-200 hover:-translate-y-2 hover:shadow-brut-lg cursor-default">
              {/* Header inside Card */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black text-muted tracking-widest">
                    #{pillar.num}
                  </span>
                  <span
                    className={`sticker text-[11px] font-black ${pillar.bg} text-ink transition-transform duration-200 group-hover:rotate-6`}
                  >
                    {pillar.tag}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-line bg-bg-2 text-lg shadow-brut transition-transform duration-200 group-hover:scale-110">
                    {pillar.icon}
                  </span>
                  <h3 className="font-black text-ink text-base md:text-lg leading-snug">
                    {pillar.title}
                  </h3>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-ink/80 md:text-sm">
                  {pillar.desc}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="mt-5 border-t border-line/20 pt-3">
                <div className="flex flex-wrap gap-1.5">
                  {pillar.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-line/60 bg-bg-2 px-2 py-0.5 text-[11px] font-bold text-muted transition-colors group-hover:text-ink group-hover:border-line"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

