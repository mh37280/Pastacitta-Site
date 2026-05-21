import Image from "next/image";
import type { MenuItem, PriceValue } from "@/data/menu";
import { LightboxTrigger } from "./Lightbox";

function PriceTag({ price }: { price: PriceValue }) {
  if (typeof price === "string") {
    return <div className="menu-entry-price">{price}</div>;
  }
  return (
    <div className="menu-entry-price-stack">
      <span>
        <small>Reg</small>
        {price.reg}
      </span>
      <span>
        <small>Lrg</small>
        {price.lrg}
      </span>
    </div>
  );
}

type MenuEntryProps = {
  item: MenuItem;
  lightboxIndex?: number;
};

export default function MenuEntry({ item, lightboxIndex }: MenuEntryProps) {
  const hasImage = Boolean(item.image);
  return (
    <article className={`menu-entry${hasImage ? " menu-entry-with-image" : ""}`}>
      {hasImage && item.image && lightboxIndex !== undefined && (
        <LightboxTrigger
          index={lightboxIndex}
          caption={item.name}
          className="menu-entry-thumb"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={96}
            height={96}
            sizes="96px"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </LightboxTrigger>
      )}
      <div className="menu-entry-copy">
        <strong className="menu-entry-name">{item.name}</strong>
        {item.description && <p className="menu-entry-desc">{item.description}</p>}
      </div>
      <PriceTag price={item.price} />
    </article>
  );
}
