import { Instagram, Send } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-10 md:py-12">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Logo size="md" />
            <div className="mt-1.5 text-xs text-muted-foreground">
              Management, legal, platform.
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Telegram"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <Send className="h-4 w-4" />
            </a>
            <a
              href="#apply"
              className="ml-2 inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all sm:px-4 sm:py-2 sm:text-xs hover:bg-foreground/90"
            >
              Apply
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Vibeo Media</div>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link to="/cookies" className="hover:text-foreground">
              Cookies
            </Link>
            <a href="mailto:support@evox.gg" className="hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
