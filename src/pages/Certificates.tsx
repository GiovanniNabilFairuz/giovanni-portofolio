import ScrollReveal from "../components/ScrollReveal";

export default function Certificates() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
      {/* Page Header */}
      <ScrollReveal>
        <div className="mb-12 border-b-2 border-line pb-8">
          <div className="inline-flex items-center gap-2 border-2 border-line bg-yellow px-3 py-1 text-xs font-black uppercase tracking-wider text-ink shadow-brut mb-4">
            <span>🏆</span>
            <span>Credentials</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-ink md:text-6xl">
            Certificates
            <span className="text-cyan">.</span>
          </h1>
          <p className="mt-3 max-w-xl text-base text-muted md:text-lg">
            Sertifikasi dan pencapaian yang saya raih dalam perjalanan belajar teknologi, cybersecurity, dan creative tools.
          </p>
        </div>
      </ScrollReveal>

      {/* Coming Soon State */}
      <ScrollReveal delay={150}>
        <div className="flex flex-col items-center justify-center border-2 border-line border-dashed bg-bg-2 py-24 text-center">
          <span className="mb-4 text-5xl">🔒</span>
          <h2 className="text-2xl font-black text-ink">Coming Soon</h2>
          <p className="mt-2 max-w-sm text-sm text-muted">
            Bagian ini sedang dalam proses. Sertifikat akan ditampilkan di sini segera.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 border-2 border-line bg-cyan px-4 py-2 text-sm font-bold text-ink shadow-brut">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
            </span>
            Work in progress
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

