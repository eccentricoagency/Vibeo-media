import { useState, FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "./Section";
import { toast } from "sonner";
import { Lock, ArrowRight } from "lucide-react";
import { applicationSchema, SUPPORT_TYPES } from "@/lib/application-schema";
import { sendApplication } from "@/lib/send-application";

const supportTypes = SUPPORT_TYPES;

export function ApplicationForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form));

    const parsed = applicationSchema.safeParse(raw);
    if (!parsed.success) {
      toast.error("Check the form", {
        description: parsed.error.issues[0]?.message ?? "Some fields need your attention.",
      });
      return;
    }

    setLoading(true);
    try {
      await sendApplication({ data: parsed.data });
      form.reset();
      toast.success("Application sent", {
        description: "The team reads every application by hand and will get back to you shortly.",
      });
    } catch {
      // Never claim success we cannot back up: point them at a channel that works.
      toast.error("We could not send your application", {
        description:
          "Something went wrong on our side. Please write to us directly at support@evox.gg.",
        duration: 8000,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section id="apply" className="py-14 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Eyebrow>Application</Eyebrow>
          <h2 className="mt-6 text-balance tracking-display text-3xl leading-[1.1] md:text-5xl">
            A private application.
            <br />
            <span className="font-serif italic">Read by a real person.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm text-muted-foreground">
            No automated screening. We read every application. If there is a fit, we will write to
            you to set up a private call.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <Trust>Every profile reviewed by hand</Trust>
            <Trust>Your data stays confidential</Trust>
            <Trust>A reply within 72 working hours</Trust>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-[28px] border border-border bg-surface p-6 shadow-soft md:p-8"
        >
          <div className="mb-5 flex items-center gap-2 text-xs text-muted-foreground">
            <Lock className="h-3.5 w-3.5" />
            Private form · Vibeo Media
          </div>

          {/* Honeypot: hidden from people and screen readers, bait for bots. */}
          <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="WhatsApp / Telegram" name="contact" />
            <Field label="Instagram" name="instagram" placeholder="@" />
            <Field
              label="Links to your platforms"
              name="platforms"
              className="md:col-span-2"
              placeholder="OnlyFans, Fansly, ..."
            />
            <Field label="Country" name="country" />
            <Field label="Current agency (if any)" name="agency" />

            <div className="md:col-span-2">
              <Label>What kind of support you need</Label>
              <select
                name="support"
                className="mt-2 h-12 w-full cursor-pointer rounded-2xl border border-border bg-card px-4 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select
                </option>
                {supportTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <Label>Anything you want to add</Label>
              <textarea
                name="message"
                rows={4}
                className="mt-2 w-full resize-none rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                placeholder="Where you are now, and what you need."
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              By submitting you accept our{" "}
              <Link to="/privacy" className="text-foreground underline underline-offset-4">
                privacy policy
              </Link>
              .
            </p>
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 text-base font-medium text-background transition-all sm:w-auto sm:py-3 sm:text-sm hover:translate-y-[-1px] hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send application"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 h-12 w-full rounded-2xl border border-border bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}

function Trust({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-6 w-6 place-items-center rounded-full border border-border bg-card text-[10px] text-accent">
        ✓
      </span>
      <span className="text-foreground">{children}</span>
    </div>
  );
}
