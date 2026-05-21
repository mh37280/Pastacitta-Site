"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type LightboxItem = { src: string; caption: string };

type LightboxContextValue = {
  open: (index: number) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox(): LightboxContextValue {
  const ctx = useContext(LightboxContext);
  if (!ctx) {
    throw new Error("useLightbox must be used inside <LightboxProvider>");
  }
  return ctx;
}

type LightboxProviderProps = {
  items: LightboxItem[];
  children: ReactNode;
};

export function LightboxProvider({ items, children }: LightboxProviderProps) {
  const [openState, setOpenState] = useState<{ isOpen: boolean; index: number }>({
    isOpen: false,
    index: 0,
  });

  const open = useCallback(
    (index: number) => {
      if (index < 0 || index >= items.length) return;
      setOpenState({ isOpen: true, index });
    },
    [items.length]
  );

  const close = useCallback(() => {
    setOpenState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const step = useCallback(
    (delta: number) => {
      setOpenState((prev) => {
        if (items.length === 0) return prev;
        const next = (prev.index + delta + items.length) % items.length;
        return { ...prev, index: next };
      });
    },
    [items.length]
  );

  useEffect(() => {
    if (openState.isOpen) {
      document.body.classList.add("is-lightbox-open");
    } else {
      document.body.classList.remove("is-lightbox-open");
    }
    return () => {
      document.body.classList.remove("is-lightbox-open");
    };
  }, [openState.isOpen]);

  useEffect(() => {
    if (!openState.isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      else if (event.key === "ArrowLeft") step(-1);
      else if (event.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openState.isOpen, close, step]);

  const value = useMemo<LightboxContextValue>(() => ({ open }), [open]);
  const current = items[openState.index];

  return (
    <LightboxContext.Provider value={value}>
      {children}
      <div
        className={`lightbox${openState.isOpen ? " is-open" : ""}`}
        aria-hidden={!openState.isOpen}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <button
          type="button"
          className="lightbox-close"
          aria-label="Close photo"
          onClick={close}
        >
          ×
        </button>
        <button
          type="button"
          className="lightbox-nav lightbox-prev"
          aria-label="Previous photo"
          onClick={() => step(-1)}
        >
          ‹
        </button>
        <button
          type="button"
          className="lightbox-nav lightbox-next"
          aria-label="Next photo"
          onClick={() => step(1)}
        >
          ›
        </button>
        <figure
          className="lightbox-stage"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={(event) => event.stopPropagation()}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="lightbox-image"
            src={current?.src ?? ""}
            alt={current?.caption ?? ""}
          />
          <figcaption className="lightbox-caption">{current?.caption ?? ""}</figcaption>
        </figure>
      </div>
    </LightboxContext.Provider>
  );
}

type LightboxTriggerProps = {
  index: number;
  caption: string;
  className?: string;
  children: ReactNode;
};

export function LightboxTrigger({ index, caption, className, children }: LightboxTriggerProps) {
  const { open } = useLightbox();
  return (
    <button
      type="button"
      className={className}
      aria-label={`Open photo of ${caption}`}
      onClick={(event) => {
        event.preventDefault();
        open(index);
      }}
    >
      {children}
    </button>
  );
}
