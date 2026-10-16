import { Section } from "./Section";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <Section className="py-14 md:py-28">
      <div className="relative overflow-hidden rounded-[32px] border border-border bg-surface p-10 text-center md:p-16">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-signature/15 blur-3xl" />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-balance tracking-display text-3xl leading-[1.05] md:text-6xl">
            Tell us where you are now.
            <br />
            <span className="font-serif italic text-signature">We’ll tell you what makes sense for you.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Every application is read by hand. If your profile is a fit, the team will reach out
            for a private call.
          </p>
          <a
            href="#apply"
            className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-base font-medium text-background transition-all sm:w-auto sm:text-sm hover:translate-y-[-1px] hover:shadow-lift"
          >
            Apply
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </Section>
  );
}
