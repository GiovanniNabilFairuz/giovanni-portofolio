import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { site } from "../config/site";
import InteractiveHeroIntro from "./InteractiveWordmark";

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

const skills = [
  {
    name: "Python",
    bg: "bg-yellow",
    textCol: "text-ink",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: "Docker & VPS",
    bg: "bg-green",
    textCol: "text-ink",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="7" rx="1.5" />
        <rect x="2" y="13" width="20" height="7" rx="1.5" />
        <circle cx="6" cy="7.5" r="1" fill="currentColor" />
        <circle cx="6" cy="16.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Git",
    bg: "bg-pink",
    textCol: "text-white",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <path d="M18 8.5a9 9 0 0 1-9 9" />
      </svg>
    ),
  },
  {
    name: "Proxmox Server",
    bg: "bg-yellow",
    textCol: "text-ink",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  {
    name: "After Effects",
    bg: "bg-cyan",
    textCol: "text-ink",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.5" />
        <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" />
      </svg>
    ),
  },
  {
    name: "Figma",
    bg: "bg-pink",
    textCol: "text-white",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
      </svg>
    ),
  },
  {
    name: "AI Development",
    bg: "bg-green",
    textCol: "text-ink",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" />
        <path d="M19 17v4" />
        <path d="M3 5h4" />
        <path d="M17 19h4" />
      </svg>
    ),
  },
];

export default function Hero() {
  const now = useClock();
  const time = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHoveringPhoto, setIsHoveringPhoto] = useState(false);

  const handlePhotoMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / (rect.height / 2)) * 7,
      y: (x / (rect.width / 2)) * 7,
    });
  };

  const handlePhotoMouseEnter = () => {
    setIsHoveringPhoto(true);
  };

  const handlePhotoMouseLeave = () => {
    setIsHoveringPhoto(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr] md:py-24">
      {/* Background Decorative Neo-brutalist Floating Doodles */}
      <div className="pointer-events-none absolute -top-8 left-10 select-none text-2xl font-black text-yellow/70 animate-float-slow">
        ✦
      </div>
      <div className="pointer-events-none absolute top-1/2 -left-6 select-none text-3xl font-mono text-pink/60 animate-float-reverse">
        +
      </div>

      {/* Left Column: Interactive Wordmark & Floating Tech Tags */}
      <div className="space-y-6">
        <InteractiveHeroIntro
          wordmark={site.wordmark}
          time={time}
          professionTag={site.professionTag}
          availability={site.availability}
          headline={site.headline}
        />

        {/* Floating Interactive Skill Pills with Staggered Bobbing */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          {skills.map((skill, index) => (
            <span
              key={skill.name}
              style={{
                animationDelay: `${index * 0.35}s`,
              }}
              className={`animate-float-gentle inline-flex items-center gap-2 border-2 border-line ${skill.bg} px-3.5 py-1.5 text-sm font-bold ${skill.textCol} shadow-brut transition-all duration-200 hover:-translate-y-2 hover:scale-105 hover:rotate-1 hover:shadow-brut-lg active:scale-95 cursor-default select-none`}
            >
              {skill.icon}
              {skill.name}
            </span>
          ))}
        </div>

        {/* Dynamic CTA Action Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 pt-3">
          <Link
            to="/about"
            className="brut-btn group bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-brut-lg"
          >
            <span>About Me</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">
              →
            </span>
          </Link>

          <Link
            to="/projects"
            className="brut-btn bg-yellow group transition-all duration-200 hover:-translate-y-1 hover:shadow-brut-lg"
          >
            <span>Explore Works</span>
            <span className="inline-block transition-transform duration-200 group-hover:rotate-12 group-hover:scale-125">
              ⚡
            </span>
          </Link>

          <Link
            to="/contact"
            className="brut-btn bg-bg-2 hover:bg-cyan group transition-all duration-200 hover:-translate-y-1 hover:shadow-brut-lg"
          >
            <span>Let's Connect</span>
            <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5">
              ✉️
            </span>
          </Link>
        </div>
      </div>

      {/* Right Column: Floating Polaroid Card with 3D Tilt & Floating Badges */}
      <div className="relative mx-auto w-full max-w-sm">
        {/* Floating Ambient Doodles around the Photo */}
        <div className="pointer-events-none absolute -top-10 -right-8 -z-10 animate-spin-slow select-none text-4xl font-black text-yellow opacity-80">
          ✹
        </div>
        <div className="pointer-events-none absolute -bottom-10 -left-6 -z-10 animate-float-gentle select-none font-mono text-2xl font-bold text-cyan/70">
          {"{...}"}
        </div>

        {/* Orbiting Floating Badge 1: Location (Top Right) */}
        <div className="absolute -right-4 -top-6 z-30 animate-float">
          <span className="sticker rotate-6 bg-pink text-white flex items-center gap-1.5 shadow-brut cursor-pointer transition-transform hover:scale-110 hover:rotate-12">
            <span>📍</span>
            <span>{site.location}</span>
          </span>
        </div>

        {/* Orbiting Floating Badge 2: Creative Tech (Top Left) */}
        <div className="absolute -left-6 top-6 z-30 animate-float-reverse">
          <span className="sticker -rotate-6 bg-yellow text-ink flex items-center gap-1.5 shadow-brut cursor-pointer transition-transform hover:scale-110 hover:-rotate-12">
            <span className="text-pink">⚡</span>
            <span>Creative Tech</span>
          </span>
        </div>


        {/* Orbiting Floating Badge 4: Motion Badge (Bottom Left) */}
        <div
          className="absolute -left-4 -bottom-4 z-30 animate-float"
          style={{ animationDelay: "1.8s" }}
        >
          <span className="sticker -rotate-3 bg-cyan text-ink flex items-center gap-1.5 shadow-brut cursor-pointer transition-transform hover:scale-110">
            <span>✦</span>
            <span>60 FPS Motion</span>
          </span>
        </div>

        {/* Main Floating Polaroid Card with 3D Tilt */}
        <div
          onMouseMove={handlePhotoMouseMove}
          onMouseEnter={handlePhotoMouseEnter}
          onMouseLeave={handlePhotoMouseLeave}
          className="animate-float-slow"
        >
          <div
            style={{
              transform: isHoveringPhoto
                ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`
                : "perspective(800px) rotate(-2deg)",
              transition: isHoveringPhoto
                ? "transform 0.1s ease-out"
                : "transform 0.5s ease-out",
            }}
            className="relative border-2 border-line bg-white p-4 pb-16 shadow-brut-lg cursor-pointer"
          >
            <div className="aspect-square w-full overflow-hidden border border-line bg-bg-2">
              <img
                src={site.avatar}
                alt={site.name}
                className="h-full w-full object-cover scale-[1.15] -translate-x-[3%] transition-transform duration-500 hover:scale-[1.2]"
                loading="eager"
              />
            </div>
            <p className="absolute bottom-4 left-0 right-0 text-center font-hand text-2xl select-none">
              {site.name.toLowerCase()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
