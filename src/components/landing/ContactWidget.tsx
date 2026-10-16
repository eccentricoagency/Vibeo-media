import { useEffect, useRef, useState } from "react";
import { Mail, X, ArrowRight } from "lucide-react";

/**
 * Floating contact panel. Same shape as the chat bubble it replaces, but it
 * hands the visitor to our own application form instead of a third-party
 * messenger — and carries whatever they typed over into the form's message
 * field, so opening the panel is never wasted effort.
 */
export function ContactWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const t = window.setTimeout(() => textareaRef.current?.focus(), 220);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [open]);

  function goToForm() {
    const form = document.getElementById("apply");
    if (!form) return;

    // Carry the draft into the form instead of throwing it away.
    const field = form.querySelector<HTMLTextAreaElement>("textarea[name='message']");
    const draft = message.trim();
    if (field && draft) {
      field.value = draft;
      // Let React know the value changed rather than silently desyncing state.
      field.dispatchEvent(new Event("input", { bubbles: true }));
    }

    setOpen(false);
    form.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      form.querySelector<HTMLInputElement>("input[name='name']")?.focus({ preventScroll: true });
    }, 600);
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 print:hidden">
      {open && (
        <div
          role="dialog"
          aria-label="Contact Vibeo Media"
          className="w-[clamp(280px,90vw,360px)] origin-bottom-right overflow-hidden rounded-2xl border border-border bg-card shadow-lift animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          <div className="relative bg-foreground px-5 pb-6 pt-5 text-background">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-signature-bright/20 blur-2xl" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-background/70 transition-colors hover:bg-background/15 hover:text-background"
            >
              <X className="h-4 w-4" strokeWidth={2} />
            </button>
            <div className="relative flex items-center gap-3">
              <div className="relative shrink-0">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-background text-xs font-bold tracking-[0.02em] text-foreground">
                  VM
                </span>
                <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-foreground bg-signature-bright" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold leading-tight">Vibeo Media</p>
                <p className="text-xs leading-tight text-background/70">
                  We usually reply within a few hours
                </p>
              </div>
            </div>
          </div>

          <div className="px-5 py-5">
            <div className="relative max-w-[85%] rounded-xl rounded-tl-sm border border-border bg-secondary px-4 py-3 text-sm">
              <p className="font-medium text-foreground">Hi 👋</p>
              <p className="mt-1 leading-snug text-muted-foreground">
                Tell us where you are right now. A real person reads every message.
              </p>
            </div>

            <div className="mt-4">
              <label htmlFor="contact-message" className="sr-only">
                Your message
              </label>
              <textarea
                id="contact-message"
                ref={textareaRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    goToForm();
                  }
                }}
                rows={2}
                placeholder="Write a message…"
                className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-foreground/10"
              />
            </div>

            <button
              type="button"
              onClick={goToForm}
              className="mt-3 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform active:scale-[0.98]"
            >
              Continue to the form
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </button>
            <p className="mt-3 text-center text-[11px] text-muted-foreground/70">
              Private · Reviewed by a person, not a bot
            </p>
          </div>
        </div>
      )}

      <div className="relative h-14 w-14">
        {!open && (
          <span className="absolute inset-0 rounded-2xl bg-signature animate-wa-ping" aria-hidden />
        )}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close the contact panel" : "Contact us"}
          aria-expanded={open}
          className="relative inline-flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl bg-foreground text-background shadow-lift transition-transform hover:scale-105 active:scale-95"
        >
          {open ? <X className="h-6 w-6" strokeWidth={2} /> : <Mail className="h-6 w-6" strokeWidth={2} />}
        </button>
      </div>
    </div>
  );
}
