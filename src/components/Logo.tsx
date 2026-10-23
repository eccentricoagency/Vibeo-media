import { cn } from "@/lib/utils";

/**
 * The Vibeo Media lockup: a rounded-square monogram plus the wordmark.
 * Single source of truth so the nav, the footer and the legal pages cannot
 * drift apart — and so the mark matches the favicon.
 */
export function Logo({
  className,
  size = "sm",
  wordmark = true,
}: {
  className?: string;
  size?: "sm" | "md";
  wordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "grid shrink-0 place-items-center rounded-[0.55rem] bg-foreground",
          size === "sm" ? "h-7 w-7" : "h-8 w-8",
        )}
        aria-hidden
      >
        <span
          className={cn(
            "grid place-items-center rounded-full bg-background font-bold leading-none tracking-[0.02em] text-foreground",
            size === "sm" ? "h-[1.3rem] w-[1.3rem] text-[9px]" : "h-6 w-6 text-[10px]",
          )}
        >
          VM
        </span>
      </span>
      {wordmark && (
        <span
          className={cn(
            "font-semibold tracking-[0.16em]",
            size === "sm" ? "text-sm" : "text-sm",
          )}
        >
          VIBEO MEDIA
        </span>
      )}
    </span>
  );
}
