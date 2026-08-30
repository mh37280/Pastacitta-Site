import Image from "next/image";
import type { MenuItem, MenuSection } from "@/data/menu";
import MenuEntry from "./MenuEntry";
import { LightboxTrigger } from "./Lightbox";

function splitItems<T>(items: T[]): [T[], T[]] {
  const midpoint = Math.ceil(items.length / 2);
  return [items.slice(0, midpoint), items.slice(midpoint)];
}

function MenuColumns({
  items,
  lightboxOffsets,
}: {
  items: MenuItem[];
  lightboxOffsets: Map<MenuItem, number>;
}) {
  const [left, right] = splitItems(items);
  const columns = [left, right].filter((col) => col.length > 0);
  return (
    <div className="menu-section-grid">
      {columns.map((column, idx) => (
        <div key={idx} className="menu-column">
          {column.map((item, j) => (
            <MenuEntry
              key={`${item.name}-${j}`}
              item={item}
              lightboxIndex={lightboxOffsets.get(item)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

type MenuSectionProps = {
  section: MenuSection;
  lightboxOffsets: Map<MenuItem, number>;
};

export default function MenuSectionView({ section, lightboxOffsets }: MenuSectionProps) {
  if (section.type === "pasta-choice") {
    return (
      <section className="menu-section" id={section.id} data-menu-section data-reveal>
        <div className="menu-section-heading centered-left">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2>{section.title}</h2>
          <p className="menu-section-note">{section.note}</p>
        </div>
        <div className="menu-pasta-options">
          {section.options.map((option) => (
            <article key={option.name} className="menu-pasta-option">
              <strong>{option.name}</strong>
              {option.extra && <small>{option.extra}</small>}
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (section.type === "subsections") {
    return (
      <section className="menu-section" id={section.id} data-menu-section data-reveal>
        <div className="menu-section-heading">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2>{section.title}</h2>
          <p className="menu-section-note">{section.note}</p>
        </div>
        <div className="menu-subsections">
          {section.subsections.map((sub) => (
            <article key={sub.title} className="menu-subsection">
              <h3 className="menu-subsection-title">{sub.title}</h3>
              <MenuColumns items={sub.items} lightboxOffsets={lightboxOffsets} />
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (section.type === "combo") {
    return (
      <section className="menu-section" id={section.id} data-menu-section data-reveal>
        <div className="menu-section-heading">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2>{section.title}</h2>
        </div>
        <div className="menu-combo-grid">
          {section.items.map((item) => {
            const lightboxIndex = lightboxOffsets.get(item);
            return (
              <article
                key={item.name}
                className={`combo-card combo-card-${item.tone}${item.image ? " combo-card-with-image" : ""}`}
              >
                {item.image && lightboxIndex !== undefined && (
                  <LightboxTrigger
                    index={lightboxIndex}
                    caption={item.name}
                    className="combo-card-media"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="160px"
                      style={{ objectFit: "cover" }}
                    />
                  </LightboxTrigger>
                )}
                <div>
                  <h3>{item.name}</h3>
                  <p className="combo-price">{item.price}</p>
                  {item.description && <p className="combo-note">{item.description}</p>}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section className="menu-section" id={section.id} data-menu-section data-reveal>
      <div className="menu-section-heading">
        <p className="eyebrow">Menu Section</p>
        <h2>{section.title}</h2>
        {section.note && <p className="menu-section-note">{section.note}</p>}
      </div>
      <MenuColumns items={section.items} lightboxOffsets={lightboxOffsets} />
    </section>
  );
}
