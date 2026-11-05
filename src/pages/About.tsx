import { site } from "../config/site";
import ScrollReveal from "../components/ScrollReveal";

const infoBits = [
  {
    label: "Hometown",
    value: "Kediri, East Java, Indonesia",
    icon: "🏠",
    bg: "bg-cyan",
    textCol: "text-ink",
  },
  {
    label: "Birth Date",
    value: "23 January 2011",
    icon: "🎂",
    bg: "bg-pink",
    textCol: "text-white",
  },
];

export default function About() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
      {/* Decorative floating doodles */}
      <div className="pointer-events-none absolute -top-6 left-12 select-none text-3xl font-black text-yellow/70 animate-float-slow">
        ✦
      </div>
      <div className="pointer-events-none absolute top-1/4 -right-4 select-none text-4xl font-mono text-pink/50 animate-float-reverse">
        +
      </div>
      <div className="pointer-events-none absolute bottom-32 left-6 select-none text-2xl text-cyan/60 animate-float-gentle">
        {"{ }"}
      </div>

      {/* Header */}
      <ScrollReveal>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            About Me
          </h1>
          <span className="sticker rotate-3 bg-green text-ink shadow-brut animate-float-gentle cursor-default transition-all duration-200 hover:-translate-y-2 hover:scale-110 hover:rotate-12 hover:shadow-brut-lg">
            👋 Hello!
          </span>
        </div>
      </ScrollReveal>

      {/* Subtitle */}
      <ScrollReveal delay={100}>
        <p className="mt-4 max-w-2xl text-lg font-bold text-muted">
          A little introduction about myself.
        </p>
      </ScrollReveal>

      {/* Bio content */}
      <div className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-ink/90 md:text-lg">
        <ScrollReveal delay={200}>
          <p>
            Hi! I'm{" "}
            <span className="font-black text-ink">Giovanni Nabil Fairuz</span>, a
            Grade 10 student at{" "}
            <span className="border-b-2 border-yellow font-bold">
              SMK Telkom Malang
            </span>
            , majoring in{" "}
            <span className="border-b-2 border-cyan font-bold">
              Computer and Network Engineering (TKJ)
            </span>
            .
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p>
            I'm someone who enjoys exploring technology, understanding how things
            work, and turning curiosity into something meaningful. My interests
            revolve around{" "}
            <span className="font-bold">cybersecurity</span>,{" "}
            <span className="font-bold">server infrastructure</span>,{" "}
            <span className="font-bold">Linux systems</span>, and{" "}
            <span className="font-bold">software development</span>.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p>
            Beyond technology, I also enjoy creative things such as{" "}
            <span className="font-bold">motion graphics</span>,{" "}
            <span className="font-bold">visual design</span>, and{" "}
            <span className="font-bold">digital experiences</span>. I love
            combining technical skills with creativity to build things that are
            both functional and visually engaging.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p>
            I'm still at the beginning of my journey, constantly learning,
            experimenting, and discovering new possibilities. For me, every
            experience is an opportunity to grow and every project is another step
            forward.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="border-l-4 border-yellow pl-4 font-black text-ink italic">
            Still curious. Still learning. Always building.
          </p>
        </ScrollReveal>
      </div>

      {/* Info Cards */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 max-w-3xl">
        {infoBits.map((item, i) => (
          <ScrollReveal key={item.label} delay={i * 150} direction={i === 0 ? "left" : "right"}>
            <div
              className="group relative brut-card p-5 transition-all duration-200 hover:-translate-y-2 hover:shadow-brut-lg cursor-default"
            >
              {/* Icon badge */}
              <span
                className={`absolute -top-3 -left-3 z-10 flex h-10 w-10 items-center justify-center border-2 border-line ${item.bg} ${item.textCol} text-lg shadow-brut transition-transform duration-200 group-hover:scale-125 group-hover:rotate-12`}
              >
                {item.icon}
              </span>

              <div className="ml-6">
                <p className="text-xs font-bold uppercase tracking-wider text-muted">
                  {item.label}
                </p>
                <p className="mt-1 text-lg font-black md:text-xl">
                  {item.value}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Location + School stickers */}
      <ScrollReveal delay={200}>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <span className="sticker rotate-1 bg-yellow text-ink shadow-brut animate-float-gentle cursor-default transition-all duration-200 hover:-translate-y-2 hover:scale-110 hover:rotate-6 hover:shadow-brut-lg">
            📍 {site.location}
          </span>
          <span
            className="sticker -rotate-2 bg-cyan text-ink shadow-brut animate-float-reverse cursor-default transition-all duration-200 hover:-translate-y-2 hover:scale-110 hover:-rotate-6 hover:shadow-brut-lg"
            style={{ animationDelay: "0.5s" }}
          >
            🎓 SMK Telkom Malang
          </span>
        </div>
      </ScrollReveal>
    </section>
  );
}
