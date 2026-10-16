import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, Clause, Bullets } from "@/components/legal/LegalLayout";

export const Route = createFileRoute("/cookies")({
  component: CookiePolicy,
  head: () => ({
    meta: [
      { title: "Cookie Policy — Vibeo Media" },
      {
        name: "description",
        content:
          "Which cookies and third-party services this site uses, and how to control them. No tracking, no advertising cookies.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function CookiePolicy() {
  return (
    <LegalLayout
      title="Cookie Policy"
      updated="6 October 2026"
      intro={
        <>
          <p>
            Short version: this site does not track you. We run no analytics, no advertising pixels
            and no profiling cookies, which is why you are not being asked to dismiss a consent
            banner. The longer version is below, including the two third-party services that see
            your IP address when a page loads.
          </p>
          <p className="mt-4">
            This policy is part of our{" "}
            <Link to="/privacy" className="text-foreground underline underline-offset-4">
              Privacy Policy
            </Link>{" "}
            and uses the same definitions. The controller is EVOX S.R.L.S., whose details are set
            out there.
          </p>
        </>
      }
    >
      <Clause title="1. What cookies are">
        <p>
          A cookie is a small text file a website asks your browser to store, so that something can
          be remembered between pages or visits. Similar results can be achieved with other
          techniques — local storage, pixels, scripts embedded in a page — and the rules treat those
          the same way. Under Italian law (Article 122 of Legislative Decree 196/2003, as amended)
          and the Garante&rsquo;s guidelines of 10 June 2021, cookies that are strictly necessary to
          deliver a service you asked for can be used without consent. Everything else — analytics
          that identify you, advertising, profiling — needs your consent first.
        </p>
      </Clause>

      <Clause title="2. What this site actually uses">
        <p>
          <strong className="text-foreground">No profiling or advertising cookies.</strong> We do
          not use Google Analytics, the Meta pixel, TikTok, Hotjar, or any comparable tool. We do
          not build advertising profiles, and we do not share browsing data with advertisers.
        </p>
        <p>
          <strong className="text-foreground">No consent banner.</strong> Because we set no
          non-essential cookies, there is nothing to ask you to consent to. If that ever changes, a
          banner will appear before any such cookie is set — not after — and this page will be
          updated first.
        </p>
        <p>
          <strong className="text-foreground">Technical cookies.</strong> Our hosting platform may
          set strictly necessary cookies to route requests, balance load and protect the site from
          abuse. These keep the site working, carry no advertising function, and do not require your
          consent.
        </p>
      </Clause>

      <Clause title="3. Third-party services that see your IP address">
        <p>
          One thing on our pages is loaded from another company&rsquo;s servers. It sets no
          profiling cookie on our behalf, but your browser does have to connect to it, and any such
          connection reveals your IP address. We would rather tell you than leave it buried. Every
          image on this site is served from our own domain.
        </p>
        <Bullets
          items={[
            <>
              <strong className="text-foreground">Google Fonts</strong> (Google Ireland Ltd.) —
              serves the typefaces this site is set in, from fonts.googleapis.com and
              fonts.gstatic.com. No Google tracking product is used here. See{" "}
              <a
                className="underline underline-offset-4"
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&rsquo;s privacy policy
              </a>
              .
            </>,
          ]}
        />
      </Clause>

      <Clause title="4. When you click through to someone else">
        <p>
          The platform button opens a separate web app. Once you are there, you are on their
          service and their privacy and cookie policies apply, not ours. The same goes for any social media link in our footer. We have no control over
          what those sites do, and we are not responsible for it.
        </p>
      </Clause>

      <Clause title="5. How to control cookies yourself">
        <p>
          Whatever any website tells you, your browser is the final authority. You can block cookies
          entirely, delete the ones already stored, or be warned before any new one is set. Be aware
          that blocking strictly necessary cookies can stop some sites working properly — ours is
          simple enough that it should survive.
        </p>
        <Bullets
          items={[
            <>
              <a
                className="underline underline-offset-4"
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Chrome
              </a>
            </>,
            <>
              <a
                className="underline underline-offset-4"
                href="https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mozilla Firefox
              </a>
            </>,
            <>
              <a
                className="underline underline-offset-4"
                href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple Safari
              </a>
            </>,
            <>
              <a
                className="underline underline-offset-4"
                href="https://support.microsoft.com/microsoft-edge"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Edge
              </a>
            </>,
          ]}
        />
      </Clause>

      <Clause title="6. Changes to this policy">
        <p>
          If we add a tool that sets cookies beyond the strictly necessary ones, we will update this
          page and put a consent banner in place before the tool goes live. The date at the top
          always tells you when this page last changed.
        </p>
      </Clause>
    </LegalLayout>
  );
}
