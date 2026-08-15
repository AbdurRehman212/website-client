"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink } from "@/content/site";

export default function NavLinks({
  links,
  className = "",
  linkClassName = "",
  onNavigate,
  // Literal, complete Tailwind class tokens (not built via interpolation —
  // Tailwind statically scans source text, so a class assembled from a
  // dynamic prop at runtime, e.g. `hover:${accent}`, is never generated).
  accentClassName = "text-gold",
  accentHoverClassName = "hover:text-gold",
}: {
  links: NavLink[];
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
  accentClassName?: string;
  accentHoverClassName?: string;
}) {
  const pathname = usePathname();

  return (
    <ul className={className}>
      {links.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onNavigate}
              aria-current={isActive ? "page" : undefined}
              className={`${linkClassName} ${isActive ? accentClassName : ""} ${accentHoverClassName} transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
