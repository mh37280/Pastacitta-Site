import Image from "next/image";
import type { Metadata } from "next";
import HeroParallax from "../components/HeroParallax";
import RevealClient from "../components/Reveal";
import { LightboxProvider, LightboxTrigger } from "../components/Lightbox";
import { collectGalleryGroups } from "@/data/lightbox";

export const metadata: Metadata = {
  title: "Pastacitta Gallery | Halal Italian Kitchen",
  description:
    "A visual tour of the Pastacitta kitchen — pasta, pizza, salads, risotto, and house desserts, all halal-certified.",
};

export default function GalleryPage() {
  const { groups, items } = collectGalleryGroups();

  return (
    <LightboxProvider items={items}>
      <div className="gallery-page">
        <main>
          <HeroParallax
            image="/img/Background-gal.png"
            variant="menu"
            current="gallery"
            scrollTargetId="gallery-content"
          >
            <p className="eyebrow eyebrow-light">A look inside the kitchen</p>
            <h1>Gallery</h1>
            <p className="hero-subtitle hero-subtitle-narrow">
              Every dish, plated and ready — from our wood-fired pizzas to handmade pasta,
              risotto, and house desserts.
            </p>
          </HeroParallax>

          <div className="page-shell page-shell-menu" id="gallery-content">
            <section className="gallery-sections">
              {groups.map((group) => (
                <section key={group.title} className="gallery-section" data-reveal>
                  <div className="gallery-section-heading">
                    <p className="eyebrow">{group.eyebrow}</p>
                    <h2>{group.title}</h2>
                  </div>
                  <div className="gallery-grid">
                    {group.items.map((item) => (
                      <figure key={`${group.title}-${item.name}`} className="gallery-card">
                        <LightboxTrigger
                          index={item.lightboxIndex}
                          caption={item.name}
                          className="gallery-card-media"
                        >
                          {item.image && (
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 220px"
                              style={{ objectFit: "cover" }}
                            />
                          )}
                        </LightboxTrigger>
                        <figcaption>
                          <strong>{item.name}</strong>
                          {item.subtitle && (
                            <span className="gallery-card-sub">{item.subtitle}</span>
                          )}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              ))}
            </section>
          </div>
        </main>
        <RevealClient />
      </div>
    </LightboxProvider>
  );
}
