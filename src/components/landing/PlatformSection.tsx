import { Section, Eyebrow } from "./Section";
import { ArrowUpRight } from "lucide-react";

export function PlatformSection() {
  return (
    <Section id="platform" className="py-14 md:py-32">
      <div className="grid items-end gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <Eyebrow>Our own platform</Eyebrow>
          <h2 className="mt-6 text-balance tracking-display text-3xl leading-[1.1] md:text-5xl">
            A space that is actually yours.
            <br />
            <span className="font-serif italic">Not someone else’s system.</span>
          </h2>
        </div>
        {/* Co-branded card. The palette is Vibeoo's, not ours: it is deliberately
            the one visual on this page that does not use the site's own tokens. */}
        <div className="relative overflow-hidden rounded-3xl border border-[#E6CDF7] bg-linear-to-b from-[#FCF6FE] to-[#F3E3FC] p-5 md:w-[28rem] md:max-w-none">
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#C98BEA]/25 blur-2xl" />
          <div className="relative">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0D0A12]">
              Inside the platform
            </span>
            <p className="mt-2.5 text-sm leading-relaxed text-[#4B2A63]">
              Earnings, live, donations, community and content in one interface. More ownership,
              less dependence.
            </p>
            <a
              href="https://vibeostudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex items-center gap-3 rounded-full bg-[#17121F] py-1.5 pl-5 pr-1.5 transition-all hover:bg-[#2B2140] hover:shadow-[0_8px_24px_-10px_#7B2CBF66]"
            >
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-white">
                Explore Vibeoo
              </span>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#C77DF0] text-[#17121F] transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-[28px] border border-border bg-surface md:mt-12 md:shadow-lift">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
          </div>
          <div className="rounded-full border border-border bg-card px-3 py-1 text-[11px] text-muted-foreground">
            app.vibeomedia.io / dashboard
          </div>
          <div className="grid h-6 w-6 place-items-center rounded-full bg-foreground text-[10px] font-medium text-background">
            A.
          </div>
        </div>

        {/* Product screenshot. Width/height match the file so the browser
            reserves the right space and the section does not jump on load. */}
        <img
          src="/software-3.webp"
          alt="The Vibeo Media dashboard: earnings, subscribers, coupons and analytics in one view."
          width={1920}
          height={900}
          loading="lazy"
          decoding="async"
          className="block w-full"
        />
      </div>
    </Section>
  );
}
