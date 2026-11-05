import Hero from "../components/Hero";
import HomeHighlights from "../components/HomeHighlights";
import FloatingFocusCards from "../components/FloatingFocusCards";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <HomeHighlights />
      <FloatingFocusCards />
    </div>
  );
}
