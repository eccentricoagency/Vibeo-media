import { Section, Eyebrow } from "./Section";

const stats = [
  { value: "Selective", label: "we review every creator ourselves" },
  { value: "Italy", label: "team in Milan, coverage across Europe" },
  { value: "Protection included", label: "legal support is part of the service" },
];

const profiles = [
  { name: "M.", avatar: "/girls-placeholder/creator-01.webp", years: 4 },
  { name: "L.", avatar: "/girls-placeholder/creator-02.webp", years: 2 },
  { name: "R.", avatar: "/girls-placeholder/creator-03.webp", years: 3 },
  { name: "A.", avatar: "/girls-placeholder/creator-04.webp", years: 5 },
  { name: "G.", avatar: "/girls-placeholder/creator-05.webp", years: 1 },
  { name: "S.", avatar: "/girls-placeholder/creator-06.webp", years: 2 },
];

const MAX_YEARS = Math.max(...profiles.map((p) => p.years));

export function SocialProof() {
  return (
    <Section className="py-14 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-6 text-balance tracking-display text-3xl leading-[1.1] md:text-4xl">
            We work with creators who{" "}
            <span className="font-serif italic">already have something to protect.</span>
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 md:mt-10">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
                <div className="text-lg font-semibold tracking-tight md:text-xl">{s.value}</div>
                <div className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {profiles.map((p, i) => (
            <div
              key={i}
              className="group flex flex-col items-start justify-between rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="flex w-full items-center justify-between">
                <div className="h-10 w-10 overflow-hidden rounded-full border border-border bg-secondary">
                  <img
                    src={p.avatar}
                    alt={p.name}
                    className="h-full w-full scale-105 object-cover blur-[3px]"
                    loading="lazy"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {p.years === 1 ? "1 year" : `${p.years} years`}
                </span>
              </div>
              <div className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-foreground/80"
                  style={{ width: `${(p.years / MAX_YEARS) * 100}%` }}
                />
              </div>
              <div className="mt-2 text-[11px] text-muted-foreground">With us</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
