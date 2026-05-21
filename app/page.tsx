import Link from "next/link";
import type { Metadata } from "next";
import HeroParallax from "./components/HeroParallax";
import RevealClient from "./components/Reveal";
import { menuPreviewSections } from "@/data/menu";

export const metadata: Metadata = {
  title: "Pastacitta | Halal Italian Kitchen",
  description:
    "Pastacitta is a halal Italian kitchen serving pasta, pizza, schnitzel, risotto, and house desserts. Reserve a table, explore the full menu, and follow the restaurant online.",
};

export default function HomePage() {
  return (
    <div className="home-page">
      <main>
        <HeroParallax
          image="/img/Background.png"
          variant="home"
          current="home"
          scrollTargetId="intro"
        >
          <p className="eyebrow eyebrow-light">Halal Italian Kitchen</p>
          <h1>
            Pasta. Pizza.<br />
            <span style={{ whiteSpace: "nowrap" }}>Pure Pleasure.</span>
          </h1>
          <p className="hero-subtitle">
            Handmade pasta, pizza, and slow-cooked classics — crafted with care, served with pride.
          </p>
          <div className="cta-row">
            <a className="button button-primary" href="tel:+61286064896">
              Reserve a Table
            </a>
            <Link className="button button-outline" href="/menu">
              View Full Menu
            </Link>
          </div>
        </HeroParallax>

        <section className="intro-panel" id="intro">
          <div className="intro-wrap" data-reveal>
            <p className="eyebrow">A taste of Italy, halal certified</p>
            <h2>Italian comfort food made the right way — for everyone.</h2>
            <p className="intro-copy">
              From silky fettuccine carbonara to charred, blistered pizza — every dish at
              Pastacitta is prepared fresh, with 100% halal-certified ingredients and the soul
              of an Italian kitchen.
            </p>
            <div className="intro-actions">
              <a className="button button-secondary" href="tel:+61286064896">
                Make a Reservation
              </a>
              <Link className="button button-text" href="/menu">
                See Full Menu
              </Link>
            </div>
          </div>
        </section>

        <div className="page-shell">
          <section className="feature-strip" aria-label="Key actions" data-reveal>
            <article>
              <p>100% Halal</p>
              <strong>
                Every ingredient certified halal — so you can dine with complete confidence
              </strong>
            </article>
            <article>
              <p>Made Fresh Daily</p>
              <strong>
                Pasta rolled in-house, sauces simmered slow, desserts crafted from scratch each
                morning
              </strong>
            </article>
            <article>
              <p>Dine In &amp; Takeaway</p>
              <strong>
                Reserve a table for the full experience, or grab your favourites on the go
              </strong>
            </article>
          </section>

          <section className="section section-preview" id="menu-preview">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">From our kitchen</p>
              <h2>A menu built around flavour, not compromise.</h2>
              <p>
                Pasta, pizza, schnitzel, risotto — each section crafted with premium halal
                ingredients and cooked to order.
              </p>
            </div>
            <div className="menu-preview-grid">
              {menuPreviewSections.map((section) => (
                <article key={section.title} className="preview-card" data-reveal>
                  <p className="eyebrow">{section.title}</p>
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </article>
              ))}
            </div>
            <div className="section-cta" data-reveal>
              <Link className="button button-primary" href="/menu">
                Open Full Menu
              </Link>
            </div>
          </section>

          <section className="section map-section" id="about" data-reveal>
            <div className="section-heading">
              <p className="eyebrow">Find us</p>
              <h2>137 Merrylands Rd, Merrylands NSW 2160</h2>
            </div>
            <div className="map-embed">
              <iframe
                src="https://maps.google.com/maps?q=137+Merrylands+Rd+Merrylands+NSW+2160+Australia&t=&z=18&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height={440}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pastacitta location — 137 Merrylands Rd, Merrylands NSW 2160"
              />
            </div>
          </section>

          <section className="section visit-grid" id="visit">
            <article className="visit-card" data-reveal>
              <p className="eyebrow">Visit</p>
              <h2>Come find us</h2>
              <p>We&apos;d love to have you. Book a table by phone or just walk in.</p>
              <dl>
                <div>
                  <dt>Address</dt>
                  <dd>137 Merrylands Rd, Merrylands 2160</dd>
                </div>
                <div>
                  <dt>Hours</dt>
                  <dd>Mon–Sun, 11:00 AM – 10:00 PM</dd>
                </div>
                <div>
                  <dt>Reservations</dt>
                  <dd>
                    <a href="tel:+61286064896" style={{ color: "inherit" }}>
                      Call (02) 8606 4896
                    </a>
                  </dd>
                </div>
              </dl>
            </article>

            <article className="visit-card accent-card" id="contact" data-reveal>
              <p className="eyebrow">Contact</p>
              <h2>Get in touch</h2>
              <div className="contact-actions">
                <a className="button button-light" href="tel:+61286064896">
                  Call (02) 8606 4896
                </a>
                <a
                  className="button button-ghost"
                  href="https://instagram.com/pastacitta"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a
                  className="button button-ghost"
                  href="https://facebook.com/pastacitta"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </div>
            </article>
          </section>
        </div>
      </main>
      <RevealClient />
    </div>
  );
}
