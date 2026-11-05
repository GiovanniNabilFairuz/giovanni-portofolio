import { useEffect, useRef, useState } from "react";

interface InteractiveHeroIntroProps {
  wordmark: string;
  time: string;
  professionTag: string;
  availability: string;
  headline: string;
}

interface HeroContentProps {
  wordmark: string;
  time: string;
  professionTag: string;
  availability: string;
  headline: string;
  isInverted: boolean;
  wordmarkRef?: React.RefObject<HTMLDivElement>;
  onWordmarkPointerEnter?: (e: React.PointerEvent<HTMLDivElement>) => void;
  onWordmarkPointerMove?: (e: React.PointerEvent<HTMLDivElement>) => void;
  onWordmarkPointerLeave?: () => void;
}

function HeroContent({
  wordmark,
  time,
  professionTag,
  availability,
  headline,
  isInverted,
  wordmarkRef,
  onWordmarkPointerEnter,
  onWordmarkPointerMove,
  onWordmarkPointerLeave,
}: HeroContentProps) {
  const insetX = 10;
  const insetY = 8;

  return (
    <div className="flex flex-col gap-6">
      {/* Top Status */}
      <div className="flex flex-wrap items-center gap-3">
        <span
          className={`sticker inline-flex items-center gap-2 transition-colors duration-150 ${isInverted
            ? "!border-white bg-[#FF386A] text-white"
            : "bg-green text-ink"
            }`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
                isInverted ? "bg-white" : "bg-ink"
              }`}
            />
            <span
              className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                isInverted ? "bg-white" : "bg-ink"
              }`}
            />
          </span>
          Currently building stuff
        </span>
        <span
          className={`font-mono text-sm tabular-nums inline-flex items-center gap-2 transition-colors duration-150 ${isInverted ? "text-white" : "text-ink"
            }`}
          aria-label="Waktu lokal"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
          {time} WIB
        </span>
      </div>

      {/* Intro & Wordmark */}
      <div className="relative inline-block self-start py-1">
        {/* "hello, my name is" - positioned cleanly above without touching cyan box */}
        <p
          className={`font-hand text-3xl select-none mb-4 transition-colors ${isInverted ? "text-white" : "text-muted"
            }`}
        >
          hello, my name is
        </p>

        {/* Wordmark Container with Cyan/Red Bounding Box */}
        <div className="relative inline-block">
          <h1
            className={`text-6xl font-black leading-none tracking-tight md:text-8xl select-none transition-colors ${isInverted ? "text-white" : "text-ink"
              }`}
          >
            {wordmark}
            <span className={isInverted ? "text-[#00F0FF]" : "text-pink"}>
              .
            </span>
          </h1>

          {/* Fixed Bounding Box: Cyan when normal, Red when inside black box */}
          <div
            className={`pointer-events-none absolute border-2 transition-colors ${isInverted ? "border-red-500" : "border-cyan"
              }`}
            style={{
              left: `-${insetX}px`,
              top: `-${insetY}px`,
              right: `-${insetX}px`,
              bottom: `-${insetY}px`,
            }}
          >
            {/* 4 Corner Handles */}
            <span
              className={`absolute -left-1.5 -top-1.5 h-3 w-3 border-2 border-line ${isInverted ? "bg-red-500" : "bg-cyan"
                }`}
            />
            <span
              className={`absolute -right-1.5 -top-1.5 h-3 w-3 border-2 border-line ${isInverted ? "bg-red-500" : "bg-cyan"
                }`}
            />
            <span
              className={`absolute -bottom-1.5 -left-1.5 h-3 w-3 border-2 border-line ${isInverted ? "bg-red-500" : "bg-cyan"
                }`}
            />
            <span
              className={`absolute -bottom-1.5 -right-1.5 h-3 w-3 border-2 border-line ${isInverted ? "bg-red-500" : "bg-cyan"
                }`}
            />

            {/* 4 Edge Midpoint Handles */}
            <span className="absolute left-1/2 -top-1.5 h-2.5 w-2.5 -translate-x-1/2 border-2 border-line bg-white" />
            <span className="absolute left-1/2 -bottom-1.5 h-2.5 w-2.5 -translate-x-1/2 border-2 border-line bg-white" />
            <span className="absolute -left-1.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 border-2 border-line bg-white" />
            <span className="absolute -right-1.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 border-2 border-line bg-white" />
          </div>

          {/* Interactive Trigger Zone: Exactly matches the cyan box bounds */}
          {!isInverted && (
            <div
              ref={wordmarkRef}
              onPointerEnter={onWordmarkPointerEnter}
              onPointerMove={onWordmarkPointerMove}
              onPointerLeave={onWordmarkPointerLeave}
              className="absolute cursor-crosshair z-10"
              style={{
                left: `-${insetX}px`,
                top: `-${insetY}px`,
                right: `-${insetX}px`,
                bottom: `-${insetY}px`,
              }}
            />
          )}
        </div>
      </div>

      {/* Profession Stickers */}
      <div className="flex flex-wrap gap-3">
        <span
          className={`sticker transition-colors duration-150 ${isInverted
            ? "!border-white bg-[#0037C2] text-white"
            : "bg-yellow text-ink"
            }`}
        >
          {professionTag}
        </span>
        <span
          className={`sticker transition-colors duration-150 ${isInverted
            ? "!border-white bg-[#DA472F] text-white"
            : "bg-cyan text-ink"
            }`}
        >
          {availability}
        </span>
      </div>

      {/* Headline */}
      <p
        className={`max-w-xl text-2xl font-bold leading-snug md:text-3xl select-none transition-colors ${isInverted ? "text-white" : "text-ink"
          }`}
      >
        {headline}
      </p>
    </div>
  );
}

export default function InteractiveHeroIntro({
  wordmark,
  time,
  professionTag,
  availability,
  headline,
}: InteractiveHeroIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 600, height: 400 });
  const [pos, setPos] = useState({ x: 220, y: 150 });

  // Constant size of moving black box lens
  const BOX_WIDTH = 280;
  const BOX_HEIGHT = 160;

  // Measure container dimensions accurately
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Instant cursor position tracking without delay
  const updatePointerPosition = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setPos({ x, y });
  };

  const handleWordmarkPointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    updatePointerPosition(e.clientX, e.clientY);
    setIsHovered(true);
  };

  const handleWordmarkPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    updatePointerPosition(e.clientX, e.clientY);
    if (!isHovered) setIsHovered(true);
  };

  const handleWordmarkPointerLeave = () => {
    setIsHovered(false);
  };

  // Center the constant-size black box right on the cursor
  const boxLeft = pos.x - BOX_WIDTH / 2;
  const boxTop = pos.y - BOX_HEIGHT / 2;

  return (
    <div
      ref={containerRef}
      className="relative select-none"
    >
      {/* Base Layer: 100% transparent background, page grid completely intact */}
      <HeroContent
        wordmark={wordmark}
        time={time}
        professionTag={professionTag}
        availability={availability}
        headline={headline}
        isInverted={false}
        wordmarkRef={wordmarkRef}
        onWordmarkPointerEnter={handleWordmarkPointerEnter}
        onWordmarkPointerMove={handleWordmarkPointerMove}
        onWordmarkPointerLeave={handleWordmarkPointerLeave}
      />

      {/* Moving Inverted Black Box:
          - Solid #0F172A background covering entire box bounds (including past left boundary)
          - Smooth pop-in fade animation: scales from 0.25 to 1 on enter, scales back down on exit
          - Perfectly aligns inverted content 1:1 with base layer
      */}
      <div
        className="pointer-events-none absolute z-20 overflow-hidden shadow-2xl"
        style={{
          left: `${boxLeft}px`,
          top: `${boxTop}px`,
          width: `${BOX_WIDTH}px`,
          height: `${BOX_HEIGHT}px`,
          backgroundColor: "#0F172A",
          transform: isHovered ? "scale(1)" : "scale(0.25)",
          opacity: isHovered ? 1 : 0,
          transformOrigin: "center center",
          transition:
            "transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.18s ease-out",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: `${-boxLeft}px`,
            top: `${-boxTop}px`,
            width: `${containerSize.width}px`,
          }}
        >
          <HeroContent
            wordmark={wordmark}
            time={time}
            professionTag={professionTag}
            availability={availability}
            headline={headline}
            isInverted={true}
          />
        </div>
      </div>

      {/* 4 Black Corner handles of the moving box - scale and fade in tandem */}
      <div
        className="pointer-events-none absolute z-30"
        style={{
          left: `${boxLeft}px`,
          top: `${boxTop}px`,
          width: `${BOX_WIDTH}px`,
          height: `${BOX_HEIGHT}px`,
          transform: isHovered ? "scale(1)" : "scale(0.25)",
          opacity: isHovered ? 1 : 0,
          transformOrigin: "center center",
          transition:
            "transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.18s ease-out",
        }}
      >
        <span className="absolute -left-1.5 -top-1.5 h-3 w-3 border-2 border-line bg-ink" />
        <span className="absolute -right-1.5 -top-1.5 h-3 w-3 border-2 border-line bg-ink" />
        <span className="absolute -bottom-1.5 -left-1.5 h-3 w-3 border-2 border-line bg-ink" />
        <span className="absolute -bottom-1.5 -right-1.5 h-3 w-3 border-2 border-line bg-ink" />
      </div>
    </div>
  );
}