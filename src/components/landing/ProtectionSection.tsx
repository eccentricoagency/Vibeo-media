import { motion } from "framer-motion";
import { Shield, Lock, FileText, AlertTriangle, UserX, Image as ImageIcon } from "lucide-react";

const items = [
  { icon: ImageIcon, text: "Copied content" },
  { icon: AlertTriangle, text: "Material published without consent" },
  { icon: UserX, text: "Fake profiles using your name" },
  { icon: Shield, text: "Trouble with the platforms" },
  { icon: FileText, text: "Unclear contracts" },
  { icon: Lock, text: "Your image" },
];

export function ProtectionSection() {
  return (
    <section
      id="protection"
      className="relative overflow-hidden bg-ink py-16 text-background md:py-40"
    >
      {/* cinematic atmosphere */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-signature-bright/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-30%] right-[-10%] h-[460px] w-[460px] rounded-full bg-signature/25 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.04]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-background/70">
              <Shield className="h-3 w-3 text-signature-bright" />
              Protection
            </span>
            <h2 className="mt-7 max-w-xl text-balance tracking-display text-4xl leading-[1.02] md:text-6xl">
              As you grow,{" "}
              <span className="font-serif italic text-signature-bright">
                you have to protect yourself.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-background/65">
              One of the strongest legal teams in Europe monitors, reports and intervenes. You keep
              working. We take care of the rest.
            </p>

            <div className="mt-10 flex items-center gap-3 text-sm text-background/50">
              <span className="font-serif text-3xl italic text-signature-bright">24/7</span>
              <span className="max-w-[14rem] leading-snug">
                active monitoring of your content and your image
              </span>
            </div>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } }}
            className="divide-y divide-background/10 border-y border-background/10"
          >
            {items.map((it) => {
              const Icon = it.icon;
              return (
                <motion.li
                  key={it.text}
                  variants={{
                    hidden: { opacity: 0, x: 16 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="group flex items-center justify-between py-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-background/10 bg-background/5 text-background/70 transition-colors group-hover:border-signature-bright/40 group-hover:text-signature-bright">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-base text-background">{it.text}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-background/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-signature-bright/70" />
                    Handled
                  </span>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
