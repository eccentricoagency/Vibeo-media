import { motion } from "framer-motion";
import { Section } from "./Section";

const proofs = [
  { value: "10 years", label: "in marketing and the creator business" },
  { value: "Tens of millions €", label: "generated in the industry" },
  { value: "Legal team", label: "among the strongest in Europe" },
  { value: "One team", label: "strategy, management and protection" },
];

export function PositioningSection() {
  return (
    <Section id="why-us" className="py-10 md:py-16">
      <div className="relative overflow-hidden rounded-[32px] border border-border bg-foreground p-8 text-background md:p-14">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-background/[0.04] blur-3xl" />

        <div className="relative">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-background/50">
            Why us
          </span>
          <h2 className="mt-6 max-w-3xl text-balance tracking-display text-3xl leading-[1.05] md:text-5xl">
            Tired of self-appointed{" "}
            <span className="font-serif italic text-signature-bright">managers?</span>
          </h2>
          <p className="mt-5 max-w-xl text-balance leading-relaxed text-background/70 md:text-lg">
            Plenty of people started calling themselves an agency last week. We have been in
            marketing and the creator business <span className="text-background">for 10 years.</span>
          </p>

          <div className="mt-8 grid grid-cols-2 md:mt-12 gap-x-6 gap-y-8 border-t border-background/15 pt-10 md:grid-cols-4 md:gap-8">
            {proofs.map((p, i) => (
              <motion.div
                key={p.value}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-balance text-xl font-semibold tracking-tight md:text-2xl">
                  {p.value}
                </div>
                <div className="mt-2 text-xs leading-relaxed text-background/60 md:text-sm">
                  {p.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
