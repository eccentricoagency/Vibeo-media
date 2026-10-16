import { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id={id} className={cn("relative", className)}>
      <div ref={ref} className="reveal mx-auto w-full max-w-6xl px-4 md:px-10">
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </span>
  );
}
