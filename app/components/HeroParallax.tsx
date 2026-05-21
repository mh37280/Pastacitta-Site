"use client";

import { useEffect, useRef } from "react";
import TopNav, { type TopNavProps } from "./TopNav";

type HeroParallaxProps = {
  image: string;
  variant: "home" | "menu";
  current: TopNavProps["current"];
  scrollTargetId: string;
  children: React.ReactNode;
};

export default function HeroParallax({
  image,
  variant,
  current,
  scrollTargetId,
  children,
}: HeroParallaxProps) {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const apply = () => {
      const heroTop = hero.offsetTop;
      const heroHeight = hero.offsetHeight - window.innerHeight;
      const progress =
        heroHeight > 0
          ? Math.min(Math.max((window.scrollY - heroTop) / heroHeight, 0), 1)
          : 0;
      document.documentElement.style.setProperty("--hero-progress", progress.toFixed(3));
    };

    apply();
    window.addEventListener("scroll", apply, { passive: true });
    window.addEventListener("resize", apply);
    return () => {
      window.removeEventListener("scroll", apply);
      window.removeEventListener("resize", apply);
    };
  }, []);

  const heroClass = variant === "menu" ? "hero-scroll hero-scroll-menu" : "hero-scroll";

  return (
    <section
      ref={heroRef}
      className={heroClass}
      id={`${variant}-top`}
      style={{ ["--hero-image" as string]: `url('${image}')` }}
    >
      <div className="hero-pin">
        <div className="hero-media" />
        <div className="hero-overlay" />

        <div className="hero-content-shell">
          <TopNav current={current} />

          <div
            className={
              variant === "menu" ? "hero-text-stage hero-text-stage-menu" : "hero-text-stage"
            }
          >
            <div className="hero-panel hero-panel-main">{children}</div>
          </div>

          <a
            className="scroll-indicator"
            href={`#${scrollTargetId}`}
            aria-label="Scroll down"
          >
            <span />
          </a>
        </div>
      </div>
    </section>
  );
}
