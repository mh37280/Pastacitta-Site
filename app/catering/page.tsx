import Image from "next/image";
import type { Metadata } from "next";
import HeroParallax from "../components/HeroParallax";
import RevealClient from "../components/Reveal";
import CategoryNav from "../components/CategoryNav";
import { cateringSections } from "@/data/catering";

export const metadata: Metadata = {
  title: "Pastacitta Catering | Halal Italian Trays for Sharing",
  description:
    "Pastacitta catering trays for 3 to 4 people — salads, red, white, pink, and aglio e olio pastas, risotto, and our chicken or veal schnitzel special.",
};

export default function CateringPage() {
  const navItems = cateringSections.map((section) => ({
    id: section.id,
    title: section.title,
  }));

  return (
    <div className="catering-page">
      <main>
        <HeroParallax
          image="/img/Background-catering.png"
          variant="menu"
          current="catering"
          scrollTargetId="catering-sections"
        >
          <p className="eyebrow eyebrow-light">For groups, gatherings &amp; events</p>
          <h1>Catering</h1>
          <p className="hero-subtitle hero-subtitle-narrow">
            Family-style trays of our pasta, risotto, salads, and schnitzel — each tray serves
            three to four people. Call to plan your order.
          </p>
          <div className="cta-row">
            <a className="button button-primary" href="tel:+61286064896">
              Call to Order
            </a>
            <a className="button button-outline" href="#catering-sections">
              View the Trays
            </a>
          </div>
        </HeroParallax>

        <div className="catering-callout">
          <div className="page-shell">
            <div className="catering-callout-inner" data-reveal>
              <div>
                <p className="eyebrow">Tray service</p>
                <h2>Each tray feeds 3 to 4 people</h2>
                <p>
                  Catering pickups and drop-offs by arrangement. We recommend ordering at least
                  48 hours in advance for larger groups so every tray is made fresh.
                </p>
              </div>
              <a className="button button-primary" href="tel:+61286064896">
                (02) 8606 4896
              </a>
            </div>
          </div>
        </div>

        <div className="menu-sticky-bar">
          <div className="page-shell">
            <CategoryNav items={navItems} ariaLabel="Catering section navigation" />
          </div>
        </div>

        <div className="page-shell page-shell-menu">
          <section className="catering-sections" id="catering-sections">
            {cateringSections.map((section) => (
              <section
                key={section.id}
                className="catering-section"
                id={section.id}
                data-reveal
              >
                <div className="catering-section-heading">
                  <p className="eyebrow">{section.eyebrow}</p>
                  <h2>{section.title}</h2>
                </div>
                <ul className="catering-list">
                  {section.items.map((item) => (
                    <li key={item.name} className="catering-item">
                      <span className="catering-item-name">{item.name}</span>
                      <span className="catering-item-dots" aria-hidden="true" />
                      <span className="catering-item-price">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </section>

          <section className="catering-special" id="catering-special" data-reveal>
            <div className="catering-special-media">
              <Image
                src="/img/Other/Crumb%20Schnitzel.jpg"
                alt="Crumbed schnitzel platter"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="catering-special-body">
              <p className="eyebrow">Our Special</p>
              <h2>
                Meat Schnitzel <span className="catering-special-sub">(chicken or veal)</span>
              </h2>
              <p>
                5 pieces, golden-crumbed and ready to serve — perfect alongside any pasta tray.
              </p>
              <div className="catering-special-price">
                <span className="price-stamp">$50</span>
                <span className="price-note">5 pieces only</span>
              </div>
              <a className="button button-primary" href="tel:+61286064896">
                Add to Your Order
              </a>
            </div>
          </section>

          <section className="catering-footnote" data-reveal>
            <p>
              Fresh ingredients · Authentic Italian taste · Made with passion, served with love
              · Buon appetito!
            </p>
          </section>
        </div>
      </main>
      <RevealClient />
    </div>
  );
}
