import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/Logo";

/**
 * Shared chrome for the legal pages (privacy, cookies).
 * Deliberately plain: no animation, no marketing furniture — these pages
 * exist to be read and, if needed, printed.
 */
export function LegalLayout({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 py-5 md:px-10">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to site
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-4 py-16 md:px-10 md:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Legal
        </p>
        <h1 className="mt-5 tracking-display text-4xl leading-[1.05] md:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: {updated}</p>
        <div className="mt-8 text-base leading-relaxed text-muted-foreground">{intro}</div>

        <div className="mt-12 space-y-10">{children}</div>

        <div className="mt-16 border-t border-border pt-8 text-sm text-muted-foreground">
          <p>
            Questions about this document? Write to{" "}
            <a className="text-foreground underline underline-offset-4" href="mailto:privacy@evox.gg">
              privacy@evox.gg
            </a>
            .
          </p>
          <p className="mt-4">
            <Link to="/privacy" className="text-foreground underline underline-offset-4">
              Privacy Policy
            </Link>
            <span className="px-2">·</span>
            <Link to="/cookies" className="text-foreground underline underline-offset-4">
              Cookie Policy
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export function Clause({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Definition-style row used for the controller's details and the data tables. */
export function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 border-b border-border py-3 last:border-0 sm:grid-cols-[13rem_1fr] sm:gap-4">
      <dt className="text-sm font-medium text-foreground">{label}</dt>
      <dd className="text-sm">{children}</dd>
    </div>
  );
}
