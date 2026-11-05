export default function MarqueeTicker() {
  const items = [
    { text: "CREATIVE TECHNOLOGIST", icon: "✦", bg: "bg-yellow", textCol: "text-ink" },
    { text: "PROXMOX & VPS INFRASTRUCTURE", icon: "🖥️", bg: "bg-green", textCol: "text-ink" },
    { text: "MOTION GRAPHICS & VFX", icon: "🎬", bg: "bg-pink", textCol: "text-white" },
    { text: "CYBERSECURITY & REVERSE PROXY", icon: "🛡️", bg: "bg-cyan", textCol: "text-ink" },
    { text: "DOCKER & SELF-HOSTED LAB", icon: "📦", bg: "bg-yellow", textCol: "text-ink" },
    { text: "PYTHON & AUTOMATION BOTS", icon: "⚡", bg: "bg-green", textCol: "text-ink" },
    { text: "AFTER EFFECTS & KINETIC TYPE", icon: "✦", bg: "bg-pink", textCol: "text-white" },
    { text: "LINUX & NETWORK ARCHITECTURE", icon: "🐧", bg: "bg-cyan", textCol: "text-ink" },
  ];

  // Duplicate items array so the ticker loops smoothly without gaps
  const tickerItems = [...items, ...items];

  return (
    <div className="relative my-8 w-full overflow-hidden border-y-2 border-line bg-yellow py-3 shadow-brut select-none -rotate-1 transition-transform hover:rotate-0 duration-300">
      <div className="animate-marquee flex items-center gap-6">
        {tickerItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 whitespace-nowrap text-sm font-black tracking-wider text-ink md:text-base"
          >
            <span className="flex h-7 w-7 items-center justify-center border-2 border-line bg-white shadow-brut text-xs">
              {item.icon}
            </span>
            <span>{item.text}</span>
            <span className="mx-2 text-line opacity-50">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
