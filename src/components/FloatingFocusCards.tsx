import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

export default function FloatingFocusCards() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <section className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
      {/* Section Header with Floating Badges */}
      <ScrollReveal>
        <div className="relative mb-14 text-center">
          <div className="inline-flex items-center gap-2 border-2 border-line bg-cyan px-4 py-1.5 text-xs font-black uppercase tracking-wider text-ink shadow-brut animate-float-gentle">
            <span>⚡</span>
            <span>Crafted with Precision</span>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-ink md:text-5xl">
            What I Tinker &amp; Build With
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted md:text-lg">
            Kombinasi antara infrastruktur server yang tangguh, visual gerak yang hidup, dan kode sistematis.
          </p>

          {/* Ambient floating decorative doodle */}
          <div className="absolute -top-4 right-8 hidden text-3xl font-black text-yellow md:block animate-spin-slow pointer-events-none select-none">
            ✹
          </div>
          <div className="absolute bottom-0 left-6 hidden text-2xl font-mono text-pink md:block animate-float-reverse pointer-events-none select-none">
            {`// 100% passion`}
          </div>
        </div>
      </ScrollReveal>

      {/* 3 Main Interactive Floating Cards with Staggered Scroll Reveal */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* CARD 1: Infrastructure & Cloud */}
        <ScrollReveal delay={0} className="h-full">
          <div
            onMouseEnter={() => setActiveTab(0)}
            onMouseLeave={() => setActiveTab(null)}
            className={`brut-card h-full relative flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-brut-lg ${
              activeTab === 0 ? "border-green" : ""
            }`}
          >
            {/* Floating Sticker on Top Corner */}
            <div className="absolute -top-3.5 -right-2 z-10 animate-float-gentle">
              <span className="sticker rotate-3 bg-green text-ink text-xs flex items-center gap-1.5 shadow-brut">
                <span className="h-2 w-2 rounded-full bg-ink animate-pulse" />
                <span>LIVE SERVER</span>
              </span>
            </div>

            <div>
              <div className="mb-4 flex items-center justify-between border-b-2 border-line pb-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-10 w-10 items-center justify-center border-2 border-line bg-yellow font-mono text-lg shadow-brut">
                    🖥️
                  </span>
                  <div>
                    <h3 className="font-black text-ink text-lg">Server &amp; Infra</h3>
                    <p className="text-xs font-mono text-muted">Self-Hosted Ecosystem</p>
                  </div>
                </div>
              </div>

              {/* Interactive Terminal Mockup */}
              <div className="mb-5 rounded border-2 border-line bg-[#0F172A] p-3 text-xs font-mono text-green shadow-inner">
                <div className="mb-2 flex items-center gap-1.5 border-b border-gray-700 pb-1.5 text-[10px] text-gray-400">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="ml-1 text-gray-300">proxmox-cluster-node</span>
                </div>
                <p className="text-gray-300">
                  <span className="text-cyan">gio@homelab</span>:<span className="text-yellow">~</span>$ pve-status
                </p>
                <p className="mt-1 text-green">● Nodes: 1 Online | 0 Offline</p>
                <p className="text-green">● Uptime: 99.98% • RAM: 18.2GB / 32GB</p>
                <p className="mt-1 text-gray-400 flex items-center gap-1">
                  <span>[ping-gateway]: 12ms</span>
                  <span className="inline-block h-3 w-1.5 bg-green animate-blink" />
                </p>
              </div>

              <p className="text-sm text-ink leading-relaxed">
                Mengelola dedicated environment dengan Proxmox VE, containerized workload di Docker, reverse proxy aman, dan otomatisasi server berbasis Linux.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-line/10">
              <div className="flex flex-wrap gap-1.5">
                <span className="border border-line bg-bg-2 px-2.5 py-1 text-xs font-bold text-ink">
                  Proxmox
                </span>
                <span className="border border-line bg-bg-2 px-2.5 py-1 text-xs font-bold text-ink">
                  Docker
                </span>
                <span className="border border-line bg-bg-2 px-2.5 py-1 text-xs font-bold text-ink">
                  VPS
                </span>
                <span className="border border-line bg-bg-2 px-2.5 py-1 text-xs font-bold text-ink">
                  Linux Sysadmin
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CARD 2: Motion Design & Visuals */}
        <ScrollReveal delay={180} className="h-full">
          <div
            onMouseEnter={() => setActiveTab(1)}
            onMouseLeave={() => setActiveTab(null)}
            className={`brut-card h-full relative flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-brut-lg ${
              activeTab === 1 ? "border-pink" : ""
            }`}
          >
            {/* Floating Sticker on Top Corner */}
            <div className="absolute -top-3.5 -right-2 z-10 animate-float-reverse">
              <span className="sticker -rotate-2 bg-pink text-white text-xs flex items-center gap-1.5 shadow-brut">
                <span>✦</span>
                <span>60 FPS SMOOTH</span>
              </span>
            </div>

            <div>
              <div className="mb-4 flex items-center justify-between border-b-2 border-line pb-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-10 w-10 items-center justify-center border-2 border-line bg-pink text-white font-mono text-lg shadow-brut">
                    🎬
                  </span>
                  <div>
                    <h3 className="font-black text-ink text-lg">Motion &amp; Visuals</h3>
                    <p className="text-xs font-mono text-muted">Kinetic &amp; Dynamics</p>
                  </div>
                </div>
              </div>

              {/* Interactive Motion Graphic Preview Bar with Visualizer */}
              <div className="mb-5 rounded border-2 border-line bg-[#1E1E2E] p-3 text-xs font-mono text-white shadow-inner">
                <div className="mb-2 flex items-center justify-between border-b border-gray-700 pb-1.5 text-[10px] text-gray-400">
                  <span>timeline.ae — 00:04:12</span>
                  <span className="text-pink font-bold">PLAYING</span>
                </div>

                {/* Bouncing Audio / Motion Wave Bars */}
                <div className="flex items-end justify-center gap-1.5 py-3 h-12">
                  {[12, 24, 18, 32, 16, 28, 20, 36, 14, 26, 30, 16, 22].map((height, i) => (
                    <span
                      key={i}
                      className="w-1.5 bg-gradient-to-t from-pink to-cyan rounded-t transition-all"
                      style={{
                        height: `${height}px`,
                        animation: `sound-wave 1.${(i % 5) + 2}s ease-in-out infinite alternate`,
                        animationDelay: `${i * 0.08}s`,
                      }}
                    />
                  ))}
                </div>

                <div className="flex justify-between text-[10px] text-gray-400 border-t border-gray-700 pt-1.5">
                  <span>Keyframes: Bezier</span>
                  <span className="text-cyan">1080p @ 60fps</span>
                </div>
              </div>

              <p className="text-sm text-ink leading-relaxed">
                Menciptakan animasi grafis bertempo dinamis, kinetic typography, transisi video ekspresif, dan aset visual interaktif menggunakan After Effects.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-line/10">
              <div className="flex flex-wrap gap-1.5">
                <span className="border border-line bg-bg-2 px-2.5 py-1 text-xs font-bold text-ink">
                  After Effects
                </span>
                <span className="border border-line bg-bg-2 px-2.5 py-1 text-xs font-bold text-ink">
                  Kinetic Type
                </span>
                <span className="border border-line bg-bg-2 px-2.5 py-1 text-xs font-bold text-ink">
                  Premiere Pro
                </span>
                <span className="border border-line bg-bg-2 px-2.5 py-1 text-xs font-bold text-ink">
                  Figma
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CARD 3: Software & AI Automation */}
        <ScrollReveal delay={360} className="h-full">
          <div
            onMouseEnter={() => setActiveTab(2)}
            onMouseLeave={() => setActiveTab(null)}
            className={`brut-card h-full relative flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-brut-lg ${
              activeTab === 2 ? "border-cyan" : ""
            }`}
          >
            {/* Floating Sticker on Top Corner */}
            <div className="absolute -top-3.5 -right-2 z-10 animate-float-slow">
              <span className="sticker rotate-2 bg-yellow text-ink text-xs flex items-center gap-1.5 shadow-brut">
                <span>⚡</span>
                <span>AUTO PIPELINE</span>
              </span>
            </div>

            <div>
              <div className="mb-4 flex items-center justify-between border-b-2 border-line pb-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-10 w-10 items-center justify-center border-2 border-line bg-cyan text-ink font-mono text-lg shadow-brut">
                    ⚡
                  </span>
                  <div>
                    <h3 className="font-black text-ink text-lg">AI &amp; Code Tools</h3>
                    <p className="text-xs font-mono text-muted">Python &amp; Integrations</p>
                  </div>
                </div>
              </div>

              {/* Interactive Code Snippet Mockup */}
              <div className="mb-5 rounded border-2 border-line bg-[#0F172A] p-3 text-xs font-mono text-white shadow-inner">
                <div className="mb-2 flex items-center justify-between border-b border-gray-700 pb-1.5 text-[10px] text-gray-400">
                  <span className="text-yellow">pipeline.py</span>
                  <span className="text-green">PASSING</span>
                </div>
                <p className="text-pink">async def <span className="text-cyan">run_automation</span>():</p>
                <p className="pl-3 text-gray-300">
                  model = <span className="text-yellow">"gemini-2.5-pro"</span>
                </p>
                <p className="pl-3 text-gray-300">
                  res = await agent.<span className="text-green">solve</span>(task)
                </p>
                <p className="pl-3 text-cyan">return <span className="text-yellow">{`{"status": 200, "fast": True}`}</span></p>
                <div className="mt-2 text-[10px] text-gray-500 border-t border-gray-700 pt-1 flex justify-between">
                  <span>Task execution: 48ms</span>
                  <span className="text-green">✓ Ready</span>
                </div>
              </div>

              <p className="text-sm text-ink leading-relaxed">
                Membangun script otomasi, bot, integrasi model AI canggih, dan workflow backend yang mempercepat produktivitas dan keandalan sistem.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-line/10">
              <div className="flex flex-wrap gap-1.5">
                <span className="border border-line bg-bg-2 px-2.5 py-1 text-xs font-bold text-ink">
                  Python
                </span>
                <span className="border border-line bg-bg-2 px-2.5 py-1 text-xs font-bold text-ink">
                  AI Engineering
                </span>
                <span className="border border-line bg-bg-2 px-2.5 py-1 text-xs font-bold text-ink">
                  TypeScript
                </span>
                <span className="border border-line bg-bg-2 px-2.5 py-1 text-xs font-bold text-ink">
                  Automation
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Floating Interactive Bottom Action Banner */}
      <ScrollReveal delay={150}>
        <div className="mt-16 relative overflow-hidden border-2 border-line bg-cyan p-8 shadow-brut transition-transform hover:-translate-y-1 duration-200">
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

          {/* Background decorative neo-brutalist circle */}
          <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full border-4 border-line/20 pointer-events-none select-none" />
        </div>
      </ScrollReveal>
    </section>
  );
}
