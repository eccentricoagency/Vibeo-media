import { Section, Eyebrow } from "./Section";

// Placeholder portraits in public/girls-placeholder: swap in the real photoshoot
// images once they are available, keeping the same file names.
const creators = [
  { name: "@aurora", tag: "Fashion · Milan", img: "/featured-creator.png" },
  { name: "@nora", tag: "Lifestyle · Rome", img: "/girls-placeholder/creator-01.webp" },
  { name: "@vera", tag: "Fitness · Bologna", img: "/girls-placeholder/creator-02.webp" },
  { name: "@mila", tag: "Beauty · Turin", img: "/girls-placeholder/creator-03.webp" },
  { name: "@gaia", tag: "Music · Naples", img: "/girls-placeholder/creator-04.webp" },
  { name: "@sofia", tag: "Travel · Florence", img: "/girls-placeholder/creator-05.webp" },
  { name: "@lia", tag: "Gaming · Verona", img: "/girls-placeholder/creator-06.webp" },
  { name: "@bea", tag: "Art · Venice", img: "/girls-placeholder/creator-07.webp" },
];

export function EcosystemSection() {
  return (
    <Section className="py-14 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Not a platform. A network.</Eyebrow>
        <h2 className="mt-6 text-balance tracking-display text-3xl leading-[1.1] md:text-5xl">
          The creators who stopped{" "}
          <span className="font-serif italic">working alone.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
          People guided, supported and protected every day. Not names on a list, but a real
          ecosystem with a team behind it.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 md:mt-14 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {creators.map((c) => (
          <div
            key={c.name}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-card"
          >
            <img
              src={c.img}
              alt={c.name}
              loading="lazy"
              className="h-full w-full scale-105 object-cover blur-[8px] transition-transform duration-500 group-hover:scale-[1.09]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/0 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <div className="text-sm font-medium text-background">{c.name}</div>
              <div className="text-[10px] uppercase tracking-wider text-background/70">
                {c.tag}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="#apply"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
        >
          Do the same: get support across the board
        </a>
      </div>
    </Section>
  );
}
