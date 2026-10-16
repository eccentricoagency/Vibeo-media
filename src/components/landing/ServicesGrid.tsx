import { Section, Eyebrow } from "./Section";
import { Users, Shield, LayoutDashboard, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Users,
    audience: "For creators who want to grow",
    title: "Management",
    desc: "Strategy, content, monetization, organization. From focused consulting to full management — you decide how much to hand over.",
    points: ["Strategy & positioning", "Content & marketing", "Monetization", "Day-to-day organization"],
  },
  {
    icon: Shield,
    audience: "For creators with something to defend",
    title: "Protection",
    desc: "We defend you. Stolen content, fake profiles using your name, questionable contracts: one of the strongest legal teams in Europe steps in immediately. You are not on your own.",
    points: ["Stolen or copied content", "Fake profiles using your name", "Contracts with sponsors and platforms", "Anything that touches your image"],
  },
  {
    icon: LayoutDashboard,
    audience: "For creators who want their own space",
    title: "Platform",
    desc: "A space of your own for earnings, live streams, donations, community and content. More control, more ownership, less dependence on the big platforms.",
    points: ["Earnings & live", "Community & donations", "Content & assets", "Your domain, your ownership"],
  },
];

export function ServicesGrid() {
  return (
    <Section id="management" className="py-14 md:py-32">
      <div className="text-center">
        <Eyebrow>Three ways in</Eyebrow>
        <h2 className="mx-auto mt-6 max-w-3xl text-balance tracking-display text-3xl leading-[1.1] md:text-5xl">
          Start where{" "}
          <span className="font-serif italic">you need it most.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Focused consulting, a full growth plan, or a tool of your own. Pick a starting point and scale when you are ready.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:mt-14 md:grid-cols-3">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-6 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                {p.audience}
              </div>
              <h3 className="mt-1.5 text-xl font-medium tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <ul className="mt-6 space-y-2 border-t border-border pt-5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-xs text-foreground/80">
                    <span className="h-1 w-1 rounded-full bg-foreground/40" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Closing concept — not a 4th option, but the full system */}
      <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-3xl border border-foreground bg-foreground p-8 text-background md:flex-row md:items-center md:p-10">
        <div className="max-w-xl">
          <h3 className="text-balance text-2xl font-medium tracking-tight md:text-3xl">
            Want all of it?{" "}
            <span className="font-serif italic text-signature-bright">Step into the system.</span>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-background/70">
            Strategy, management and protection in one team, with the platform that holds it all together. You focus on the content; we take care of the rest.
          </p>
        </div>
        <a
          href="#apply"
          className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-background px-6 py-4 text-base font-medium text-foreground transition-all sm:w-auto sm:py-3.5 sm:text-sm hover:translate-y-[-1px] hover:shadow-lift"
        >
          Apply
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </Section>
  );
}
