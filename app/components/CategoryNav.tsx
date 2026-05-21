"use client";

import { useEffect, useRef, useState } from "react";

export type CategoryNavItem = { id: string; title: string };

type CategoryNavProps = {
  items: CategoryNavItem[];
  ariaLabel: string;
};

export default function CategoryNav({ items, ariaLabel }: CategoryNavProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const navRef = useRef<HTMLElement | null>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  useEffect(() => {
    const sectionEls = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { threshold: [0.2, 0.4, 0.6], rootMargin: "-20% 0px -55% 0px" }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const container = navRef.current;
    const link = linkRefs.current.get(activeId);
    if (!container || !link) return;

    const containerRect = container.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    const target =
      link.offsetLeft - container.offsetLeft - (containerRect.width - linkRect.width) / 2;
    const max = container.scrollWidth - container.clientWidth;
    const clamped = Math.max(0, Math.min(target, max));

    container.scrollTo({ left: clamped, behavior: "smooth" });
  }, [activeId]);

  return (
    <nav ref={navRef} className="menu-category-nav" aria-label={ariaLabel}>
      {items.map((item) => (
        <a
          key={item.id}
          ref={(el) => {
            if (el) linkRefs.current.set(item.id, el);
            else linkRefs.current.delete(item.id);
          }}
          href={`#${item.id}`}
          className={`menu-category-link${item.id === activeId ? " is-active" : ""}`}
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
}
