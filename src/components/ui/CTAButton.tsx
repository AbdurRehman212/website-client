import Link from "next/link";
import { ReactNode } from "react";

const base =
  "inline-flex items-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep";

const variants = {
  primary: "bg-gold text-navy hover:bg-gold-light",
  outline: "border border-gold text-gold hover:bg-gold hover:text-navy",
  ghost: "border border-navy/20 text-navy hover:border-navy hover:bg-navy/5",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}
