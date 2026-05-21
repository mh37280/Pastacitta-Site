import Link from "next/link";
import Image from "next/image";

type NavItem = { href: string; label: string };

const PRIMARY_NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#about", label: "Location" },
  { href: "/#visit", label: "Visit" },
  { href: "/#contact", label: "Contact" },
];

export type TopNavProps = {
  current: "home" | "menu" | "catering" | "gallery";
};

function isCurrent(href: string, current: TopNavProps["current"]): boolean {
  if (current === "home") return href === "/";
  if (current === "menu") return href === "/menu";
  if (current === "catering") return href === "/catering";
  if (current === "gallery") return href === "/gallery";
  return false;
}

export default function TopNav({ current }: TopNavProps) {
  return (
    <header className="topbar hero-topbar">
      <Link className="brand brand-light" href="/#home" aria-label="Pastacitta home">
        <span className="brand-mark">
          <Image src="/img/Logo.jpg" alt="Pastacitta logo" width={76} height={76} priority />
        </span>
      </Link>

      <nav className="topnav topnav-light" aria-label="Primary navigation">
        {PRIMARY_NAV.map((item) => {
          const active = isCurrent(item.href, current);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={active ? "is-current" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <a className="topbar-phone" href="tel:+61286064896" aria-label="Call (02) 8606 4896">
        <span className="phone-green">(02)</span> 8606 <span className="phone-red">4896</span>
      </a>
    </header>
  );
}
