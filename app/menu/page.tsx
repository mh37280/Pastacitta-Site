import type { Metadata } from "next";
import HeroParallax from "../components/HeroParallax";
import RevealClient from "../components/Reveal";
import CategoryNav from "../components/CategoryNav";
import MenuSectionView from "../components/MenuSection";
import { LightboxProvider } from "../components/Lightbox";
import { fullMenuSections } from "@/data/menu";
import { collectMenuLightbox } from "@/data/lightbox";

export const metadata: Metadata = {
  title: "Pastacitta Menu | Halal Italian Kitchen",
  description:
    "Browse the full Pastacitta menu with starters, salads, pizza, pasta sauces, risotto, halal mains, desserts, and sides.",
};

export default function MenuPage() {
  const { items: lightboxItems, indexByItem } = collectMenuLightbox();
  const navItems = fullMenuSections.map((section) => ({
    id: section.id,
    title: section.title,
  }));

  return (
    <LightboxProvider items={lightboxItems}>
      <div className="menu-page">
        <main>
          <HeroParallax
            image="/img/Backgroup-menu.png"
            variant="menu"
            current="menu"
            scrollTargetId="menu-intro"
          >
            <p className="eyebrow eyebrow-light">Pastacitta full menu</p>
            <h1>Menu</h1>
            <p className="hero-subtitle hero-subtitle-narrow">
              Starters, salads, wood-fired pizza, handmade pasta, risotto, halal mains, combos,
              and house desserts — all under one roof.
            </p>
          </HeroParallax>

          <div className="menu-sticky-bar">
            <div className="page-shell">
              <CategoryNav items={navItems} ariaLabel="Menu section navigation" />
            </div>
          </div>

          <div className="page-shell page-shell-menu">
            <section className="menu-sections">
              {fullMenuSections.map((section) => (
                <MenuSectionView
                  key={section.id}
                  section={section}
                  lightboxOffsets={indexByItem}
                />
              ))}
            </section>
          </div>
        </main>
        <RevealClient />
      </div>
    </LightboxProvider>
  );
}
