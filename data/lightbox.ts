import { fullMenuSections, type MenuItem } from "./menu";
import type { LightboxItem } from "@/app/components/Lightbox";

export function collectMenuLightbox(): {
  items: LightboxItem[];
  indexByItem: Map<MenuItem, number>;
} {
  const items: LightboxItem[] = [];
  const indexByItem = new Map<MenuItem, number>();

  const push = (item: MenuItem) => {
    if (!item.image) return;
    indexByItem.set(item, items.length);
    items.push({ src: item.image, caption: item.name });
  };

  for (const section of fullMenuSections) {
    if (section.type === "pasta-choice" || section.type === "combo") continue;
    if (section.type === "subsections") {
      for (const sub of section.subsections) {
        for (const item of sub.items) push(item);
      }
    } else {
      for (const item of section.items) push(item);
    }
  }

  return { items, indexByItem };
}

export type GalleryEntry = MenuItem & { subtitle?: string; lightboxIndex: number };

export function collectGalleryGroups(): {
  groups: Array<{ title: string; eyebrow: string; items: GalleryEntry[] }>;
  items: LightboxItem[];
} {
  const groups: Array<{ title: string; eyebrow: string; items: GalleryEntry[] }> = [];
  const items: LightboxItem[] = [];

  for (const section of fullMenuSections) {
    if (section.type === "pasta-choice" || section.type === "combo") continue;

    const groupItems: GalleryEntry[] = [];

    if (section.type === "subsections") {
      for (const sub of section.subsections) {
        for (const item of sub.items) {
          if (!item.image) continue;
          const lightboxIndex = items.length;
          items.push({ src: item.image, caption: item.name });
          groupItems.push({ ...item, subtitle: sub.title, lightboxIndex });
        }
      }
    } else {
      for (const item of section.items) {
        if (!item.image) continue;
        const lightboxIndex = items.length;
        items.push({ src: item.image, caption: item.name });
        groupItems.push({ ...item, lightboxIndex });
      }
    }

    if (groupItems.length > 0) {
      groups.push({
        title: section.title,
        eyebrow: section.eyebrow,
        items: groupItems,
      });
    }
  }

  return { groups, items };
}
