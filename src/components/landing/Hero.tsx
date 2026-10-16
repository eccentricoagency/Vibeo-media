import { ArrowRight, ShieldCheck, TrendingUp, CheckCircle2 } from "lucide-react";
import { Eyebrow } from "./Section";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-12 md:pt-40 md:pb-28">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute top-40 left-[-15%] h-[360px] w-[360px] rounded-full bg-highlight/40 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <Eyebrow>The agency for Italian creators</Eyebrow>
            <h1 className="mt-6 font-semibold tracking-display text-[40px] leading-[1.03] md:text-[62px] lg:text-[76px]">
              You’re growing.
              <br />
              <span className="font-serif font-normal italic text-foreground">
                But you’re still running it all like day one.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
              Content, platforms, DMs, earnings, live streams, donations, stolen content, requests,
              promotion, legal trouble.
              <br />
              At some point, posting stops being enough.
              <br />
              <span className="text-foreground">You need a structure behind you.</span>
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#apply"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-4 text-base font-semibold text-background transition-all sm:w-auto sm:min-w-52 sm:py-3.5 sm:text-sm hover:translate-y-[-1px] hover:shadow-lift"
              >
                Apply
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#how"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-surface/60 px-6 py-4 text-base font-semibold text-foreground transition-all sm:w-auto sm:min-w-52 sm:py-3.5 sm:text-sm hover:bg-surface hover:shadow-soft"
              >
                See how it works
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                Reviewed by hand
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                Privacy guaranteed
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                Team based in Italy
              </span>
            </div>
          </div>

          {/* Hero mockup */}
          <HeroMock />
        </div>
      </div>
    </section>
  );
}

function HeroMock() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Soft bg glow — desktop only: on mobile the card is nearly full-width,
          so the blur spills past the screen edges and reads as a halo. */}
      <div className="pointer-events-none absolute -inset-8 hidden rounded-2xl bg-linear-to-br from-accent/10 via-transparent to-foreground/5 blur-2xl md:block" />

      {/* Photo card */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-border bg-surface md:shadow-lift">
        <img
          src="/featured-creator.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/0 via-transparent to-foreground/20" />

        {/* Avatar stack — social proof */}
        <div className="absolute left-4 top-4 inline-flex items-center gap-2.5 rounded-lg bg-surface/90 py-1.5 pl-2 pr-3.5 md:shadow-soft backdrop-blur">
          <div className="flex -space-x-2">
            {[
              "/girls-placeholder/creator-01.webp",
              "/girls-placeholder/creator-02.webp",
              "/girls-placeholder/creator-03.webp",
              "/girls-placeholder/creator-04.webp",
            ].map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                className="h-6 w-6 rounded-full border-2 border-surface object-cover"
                loading="lazy"
              />
            ))}
          </div>
          <span className="text-[11px] font-medium">
            + more with us
          </span>
        </div>
      </div>

      {/* Floating: KPI card — top-right, spills outside */}
      <div className="absolute right-2 top-[14%] hidden w-[160px] rotate-[2deg] md:block rounded-xl border border-border bg-card p-3.5 sm:w-[180px] sm:p-4 md:right-[-32px] md:top-[18%] md:shadow-lift">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
          Earnings · 30d
        </div>
        <div className="mt-1 flex items-baseline gap-1.5">
          <span className="text-2xl font-semibold tracking-tight">€42.8k</span>
          <span className="inline-flex items-center text-[11px] text-accent">
            <TrendingUp className="mr-0.5 h-3 w-3" />
            +18%
          </span>
        </div>
        <Sparkline />
      </div>

      {/* Floating: Legal card — left side, spills outside */}
      <div className="absolute left-2 top-[52%] hidden max-w-[calc(100%-1rem)] rotate-[-3deg] md:block rounded-xl border border-border bg-card px-3.5 py-2.5 sm:px-4 sm:py-3 md:left-[-36px] md:shadow-lift">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-accent/10 text-accent">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-medium">Legal · active</div>
            <div className="text-[10px] text-muted-foreground">Takedown in progress</div>
          </div>
        </div>
      </div>

      {/* Floating: solved-activity notification — bottom center, spills outside */}
      <div className="absolute bottom-[-22px] left-1/2 hidden -translate-x-1/2 rotate-[-1.5deg] md:inline-flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 md:shadow-lift">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
          <CheckCircle2 className="h-4 w-4" />
        </div>
        <div>
          <div className="text-sm font-medium">Sponsorship signed · today</div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
            handled by the team · 14 min ago
          </div>
        </div>
      </div>
    </div>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 100 28" className="mt-2 h-7 w-full text-accent">
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="0,22 12,18 22,20 34,12 46,14 58,8 70,11 82,5 100,7"
      />
    </svg>
  );
}
