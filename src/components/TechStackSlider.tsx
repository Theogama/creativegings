
import { useEffect, useRef } from "react";
import HTMLLogo from "./tech-logos/HTMLLogo";
import CSSLogo from "./tech-logos/CSSLogo";
import JSLogo from "./tech-logos/JSLogo";
import ReactLogo from "./tech-logos/ReactLogo";
import NextLogo from "./tech-logos/NextLogo";
import MongoLogo from "./tech-logos/MongoLogo";
import SupabaseLogo from "./tech-logos/SupabaseLogo";
import TailwindLogo from "./tech-logos/TailwindLogo";
import ShadcnLogo from "./tech-logos/ShadcnLogo";

const LOGOS = [
  { icon: <HTMLLogo />, label: "HTML" },
  { icon: <CSSLogo />, label: "CSS" },
  { icon: <JSLogo />, label: "JavaScript" },
  { icon: <ReactLogo />, label: "React" },
  { icon: <NextLogo />, label: "Next.js" },
  { icon: <MongoLogo />, label: "MongoDB" },
  { icon: <SupabaseLogo />, label: "Supabase" },
  { icon: <TailwindLogo />, label: "TailwindCSS" },
  { icon: <ShadcnLogo />, label: "shadcn/ui" },
];

const TechStackSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Simple auto-slide effect
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    let frame = 0;
    let interval: any;
    let maxScroll = slider.scrollWidth - slider.clientWidth;
    let direction = 1;

    const start = () => {
      interval = setInterval(() => {
        if (!slider) return;
        if (slider.scrollLeft + 2 * direction > maxScroll || slider.scrollLeft + 2 * direction < 0) direction *= -1;
        slider.scrollLeft += 2 * direction;
      }, 14); // smooth
    }
    start();
    return () => interval && clearInterval(interval);
  }, []);
  
  return (
    <section className="w-full py-10 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-6 tracking-tight">Our Tech Stack</h2>
        <div
          ref={sliderRef}
          className="flex gap-8 items-center overflow-x-auto no-scrollbar py-3 transition-all"
          style={{ scrollBehavior: "smooth" }}
          tabIndex={-1}
        >
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="flex flex-col items-center min-w-[60px]">
              {logo.icon}
              <span className="text-xs mt-2">{logo.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSlider;
