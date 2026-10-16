import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, type PanInfo } from "framer-motion";
import { Section } from "./Section";
import { cn } from "@/lib/utils";

type Story = {
  name: string;
  location: string;
  years: string;
  service: string;
  platforms: string;
  img: string;
  quote: string;
};

const stories: Story[] = [
  {
    name: "@aurora",
    location: "Milan",
    years: "3 years",
    service: "Full service",
    platforms: "5",
    img: "/featured-creator.png",
    quote:
      "I was running everything on my own and drowning in it. Now I have a team. All I think about is the content.",
  },
];

const SPRING = { type: "spring" as const, stiffness: 120, damping: 22, mass: 0.6 };

export function FeaturedStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [active, setActive] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (width === 0) return;
    controls.start({ x: -active * width, transition: SPRING });
  }, [active, width, controls]);

  function onDragEnd(_: unknown, info: PanInfo) {
    const threshold = width * 0.15;
    const fast = Math.abs(info.velocity.x) > 350;
    if ((info.offset.x < -threshold || (fast && info.velocity.x < 0)) && active < stories.length - 1) {
      setActive(active + 1);
    } else if ((info.offset.x > threshold || (fast && info.velocity.x > 0)) && active > 0) {
      setActive(active - 1);
    } else {
      controls.start({ x: -active * width, transition: SPRING });
    }
  }

  return (
    <Section className="py-14 md:py-32">
      <div className="mb-8 flex items-end justify-between">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          They chose Vibeo Media
        </span>
        {stories.length > 1 && (
          <span className="hidden text-[11px] text-muted-foreground md:block">
            {active + 1} / {stories.length}
          </span>
        )}
      </div>

      <div ref={containerRef} className="overflow-hidden">
        <motion.div
          className="flex"
          animate={controls}
          drag={stories.length > 1 ? "x" : false}
          dragElastic={0.18}
          dragConstraints={{ left: -(stories.length - 1) * width, right: 0 }}
          onDragEnd={onDragEnd}
        >
          {stories.map((s, i) => (
            <article
              key={i}
              style={{ width }}
              className="grid shrink-0 items-center gap-10 px-0 lg:grid-cols-[0.95fr_1fr] lg:gap-16"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-foreground/10 via-transparent to-accent/10 blur-2xl" />
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[28px] border border-border bg-card shadow-lift">
                  <img
                    src={s.img}
                    alt={`${s.name}, creator`}
                    draggable={false}
                    className="pointer-events-none h-full w-full select-none object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-5 left-5 rounded-2xl border border-border/80 bg-surface/90 px-4 py-2.5 text-xs shadow-soft backdrop-blur">
                  <div className="font-medium">{s.name}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {s.location} · with us for {s.years}
                  </div>
                </div>
              </div>

              <div>
                <blockquote className="text-balance font-serif italic text-3xl leading-[1.2] tracking-tight md:text-[44px] md:leading-[1.15]">
                  {s.quote}
                </blockquote>

                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      With us for
                    </div>
                    <div className="mt-1 text-sm font-medium">{s.years}</div>
                  </div>
                  <div className="hidden h-8 w-px bg-border md:block" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Service
                    </div>
                    <div className="mt-1 text-sm font-medium">{s.service}</div>
                  </div>
                  <div className="hidden h-8 w-px bg-border md:block" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Platforms
                    </div>
                    <div className="mt-1 text-sm font-medium">{s.platforms}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>

      {stories.length > 1 && (
        <div className="mt-10 flex items-center justify-center gap-2">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to story ${i + 1}`}
              className={cn(
                "h-1.5 cursor-pointer rounded-full transition-all",
                active === i
                  ? "w-8 bg-foreground"
                  : "w-1.5 bg-foreground/20 hover:bg-foreground/40",
              )}
            />
          ))}
        </div>
      )}
    </Section>
  );
}
