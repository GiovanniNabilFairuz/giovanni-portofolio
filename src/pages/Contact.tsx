import { site } from "../config/site";
import ScrollReveal from "../components/ScrollReveal";

const contactMethods = [
  {
    label: "Email",
    value: "giovaninabil23@gmail.com",
    href: "mailto:giovaninabil23@gmail.com",
    description: "Kirim email kapan aja — balasnya cepat.",
    bg: "bg-cyan",
    textCol: "text-ink",
    sticker: "✉️",
    cta: "Send Email →",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Instagram DM",
    value: "@gioognf",
    href: "https://instagram.com/gioognf",
    description: "DM aja langsung, paling sering aktif di sini.",
    bg: "bg-pink",
    textCol: "text-white",
    sticker: "📸",
    cta: "Open Instagram →",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
      {/* Decorative floating doodles */}
      <div className="pointer-events-none absolute -top-6 right-16 select-none text-3xl font-black text-yellow/70 animate-float-slow">
        ✦
      </div>
      <div className="pointer-events-none absolute top-1/3 -left-4 select-none text-4xl font-mono text-pink/50 animate-float-reverse">
        +
      </div>
      <div className="pointer-events-none absolute bottom-20 right-8 select-none text-2xl text-cyan/60 animate-float-gentle">
        {"{ }"}
      </div>

      {/* Header */}
      <ScrollReveal>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-5xl font-black tracking-tight md:text-7xl">
              Let's Talk
            </h1>
            <span className="sticker rotate-3 bg-yellow text-ink shadow-brut animate-float-gentle cursor-default transition-all duration-200 hover:-translate-y-2 hover:scale-110 hover:rotate-12 hover:shadow-brut-lg">
              💬 Open
            </span>
          </div>
          <p className="max-w-xl text-lg text-muted">
            Mau ngobrol soal project, kolaborasi, atau cuma sekedar say hi?
            Reach out lewat email atau DM Instagram — I'd love to connect.
          </p>
        </div>
      </ScrollReveal>

      {/* Contact Cards Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {contactMethods.map((method, index) => (
          <ScrollReveal
            key={method.label}
            delay={index * 140}
            direction={index === 0 ? "left" : "right"}
            className="h-full"
          >
            <div className="group relative h-full">
              {/* Floating sticker badge — outside the card so it won't clip */}
              <span className="absolute -top-3 -right-3 z-10 sticker rotate-6 bg-green text-ink shadow-brut transition-transform duration-200 group-hover:rotate-12 group-hover:scale-110">
                {method.sticker} {method.label}
              </span>

              <a
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="brut-card block h-full p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-brut-lg"
              >
                {/* Icon + Label */}
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-12 w-12 items-center justify-center border-2 border-line ${method.bg} ${method.textCol} shadow-brut transition-transform duration-200 group-hover:rotate-6`}
                  >
                    {method.icon}
                  </span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-muted">
                      {method.label}
                    </p>
                    <p className="text-xl font-black">{method.value}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-muted">{method.description}</p>

                {/* CTA button */}
                <div className="mt-5">
                  <span
                    className={`brut-btn ${method.bg} ${method.textCol} text-sm transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-brut-lg`}
                  >
                    {method.cta}
                  </span>
                </div>
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Quick Copy Section */}
      <ScrollReveal delay={180}>
        <div className="mt-16 border-2 border-line bg-bg-2 p-6 shadow-brut transition-all duration-200 hover:-translate-y-1 hover:shadow-brut-lg">
          <div className="flex flex-wrap items-center gap-3">
            <span className="sticker -rotate-2 bg-cyan text-ink transition-transform duration-200 hover:scale-110 hover:rotate-2">
              📋 Quick Copy
            </span>
            <p className="text-sm font-bold text-muted">
              Klik buat langsung copy email-nya
            </p>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText("giovaninabil23@gmail.com");
              }}
              className="brut-btn bg-white hover:bg-yellow group text-left transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-brut-lg"
            >
              <span className="font-mono text-sm md:text-base">
                giovaninabil23@gmail.com
              </span>
              <span className="transition-transform duration-200 group-hover:scale-150 group-hover:rotate-12">
                📋
              </span>
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Availability Indicator */}
      <ScrollReveal delay={240}>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <span className="sticker rotate-1 bg-green text-ink shadow-brut animate-float-gentle cursor-default transition-all duration-200 hover:-translate-y-2 hover:scale-110 hover:rotate-6 hover:shadow-brut-lg">
            <span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full bg-ink animate-blink" />
            {site.availability}
          </span>
          <span
            className="sticker -rotate-1 bg-yellow text-ink shadow-brut animate-float-reverse cursor-default transition-all duration-200 hover:-translate-y-2 hover:scale-110 hover:-rotate-6 hover:shadow-brut-lg"
            style={{ animationDelay: "0.6s" }}
          >
            📍 {site.location}
          </span>
        </div>
      </ScrollReveal>
    </section>
  );
}
