import ScrollReveal from "../components/ScrollReveal";

const projectList = [
  {
    title: "Dedicated Proxmox Homelab Cluster",
    category: "Infrastructure",
    bg: "bg-yellow",
    icon: "🖥️",
    badge: "Active Setup",
    description:
      "Arsitektur server mandiri yang mengelola multi-node virtual machine, containerized workload dengan Docker, reverse proxy otomatis, dan tunnel Cloudflare untuk akses eksternal yang aman.",
    tags: ["Proxmox VE", "Docker", "Linux", "Cloudflare Zero Trust"],
    stats: "99.9% Uptime",
  },
  {
    title: "Reverse Proxy & Hardened Network Gateway",
    category: "Cybersecurity",
    bg: "bg-cyan",
    icon: "🛡️",
    badge: "Security",
    description:
      "Gateway jaringan yang diamankan dengan enkripsi SSL otomatis, rate limiting, isolasi VLAN, dan manajemen access control list untuk proteksi layanan lokal terhadap ancaman publik.",
    tags: ["Reverse Proxy", "UFW Firewall", "SSL/TLS", "DNS Routing"],
    stats: "Multi-Subdomain SSL",
  },
  {
    title: "Python Automation Bot & Task Pipeline",
    category: "Automation",
    bg: "bg-green",
    icon: "⚡",
    badge: "Automated",
    description:
      "Bot otomatisasi berbasis event untuk monitoring status server secara realtime, notifikasi alert sistem darurat, serta otomatisasi workflow repetitive dengan efisiensi tinggi.",
    tags: ["Python 3", "AsyncIO", "REST API", "Server Monitoring"],
    stats: "Sub-second Alerting",
  },
  {
    title: "Kinetic Motion Showcase & Title Sequences",
    category: "Motion Visual",
    bg: "bg-pink",
    icon: "🎬",
    badge: "Creative",
    description:
      "Koleksi eksplorasi kinetic typography bertempo cepat, sinkronisasi audio beat 60 FPS, visual effects, dan dynamic motion graphics untuk video presentasi serta branding visual.",
    tags: ["After Effects", "Kinetic Typography", "Premiere Pro", "VFX"],
    stats: "60 FPS Render",
  },
];

export default function Projects() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
      {/* Decorative background doodles */}
      <div className="pointer-events-none absolute -top-4 right-10 select-none text-3xl font-black text-cyan/70 animate-float-slow">
        ✦
      </div>
      <div className="pointer-events-none absolute top-1/3 -left-4 select-none text-4xl font-mono text-yellow/60 animate-float-reverse">
        +
      </div>

      {/* Header */}
      <ScrollReveal>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            Selected Works
          </h1>
          <span className="sticker rotate-2 bg-yellow text-ink shadow-brut animate-float-gentle cursor-default transition-all duration-200 hover:scale-110 hover:rotate-6">
            ⚡ Engineered &amp; Crafted
          </span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Kumpulan proyek, konfigurasi infrastruktur, dan karya motion visual yang telah dan sedang saya kembangkan.
        </p>
      </ScrollReveal>

      {/* Projects Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projectList.map((project, index) => (
          <ScrollReveal
            key={project.title}
            delay={index * 120}
            direction={index % 2 === 0 ? "left" : "right"}
            className="h-full"
          >
            <div className="brut-card group relative h-full flex flex-col justify-between p-6 transition-all duration-200 hover:-translate-y-2 hover:shadow-brut-lg cursor-default">
              <div>
                <div className="flex items-center justify-between border-b-2 border-line pb-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`flex h-10 w-10 items-center justify-center border-2 border-line ${project.bg} text-lg shadow-brut transition-transform duration-200 group-hover:rotate-6`}
                    >
                      {project.icon}
                    </span>
                    <div>
                      <span className="text-xs font-mono font-bold text-muted uppercase">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-black text-ink md:text-xl">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-ink/90">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 border-t border-line/20 pt-4">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-muted">
                    Highlights:
                  </span>
                  <span className="sticker bg-bg-2 text-[11px] font-black text-ink">
                    {project.stats}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-line bg-white px-2.5 py-1 text-xs font-bold text-ink shadow-sm"
                    >
                      {tag}
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
