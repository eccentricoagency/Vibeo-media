import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";

const links = [
  { href: "#management", label: "Management" },
  { href: "#platform", label: "Platform" },
  { href: "#protection", label: "Legal" },
  { href: "#apply", label: "Apply" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 16);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-10">
        <div
          className={cn(
            "flex items-center justify-between rounded-xl border border-transparent px-4 py-2.5 transition-all duration-300",
            scrolled && "glass border-border shadow-soft",
          )}
        >
          <a href="#top" className="flex items-center">
            <Logo />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#apply"
            className="inline-flex items-center rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-all sm:px-4 sm:py-2 sm:text-xs hover:bg-foreground/90 hover:shadow-soft"
          >
            Apply
          </a>
        </div>
      </div>
    </header>
  );
}
