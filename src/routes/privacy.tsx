import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, Clause, Bullets, Row } from "@/components/legal/LegalLayout";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Vibeo Media" },
      {
        name: "description",
        content:
          "How EVOX S.R.L.S. collects, uses and protects the personal data you share through the Vibeo Media website.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="6 October 2026"
      intro={
        <>
          <p>
            This policy explains what personal data we collect when you use this website or apply to
            work with us, why we collect it, who we share it with and what you can ask us to do
            about it. It is written under Articles 13 and 14 of the EU General Data Protection
            Regulation (Regulation 2016/679, &ldquo;GDPR&rdquo;).
          </p>
          <p className="mt-4">
            We have tried to keep it readable. If anything here is unclear, ask us before you send
            us your information, not after.
          </p>
        </>
      }
    >
      <Clause title="1. Who is responsible for your data">
        <p>
          The data controller is <strong className="text-foreground">EVOX S.R.L.S.</strong>, which
          operates this website and the Vibeo Media service.
        </p>
        <dl className="mt-6 rounded-2xl border border-border bg-card px-5 py-2">
          <Row label="Company">EVOX S.R.L.S.</Row>
          <Row label="Registered office">
            Circonvallazione Alfredo Oriani 2, 37122 Verona (VR), Italy
          </Row>
          <Row label="VAT number">04497460230</Row>
          <Row label="Tax code">04497460230</Row>
          <Row label="EU VAT">IT04497460230</Row>
          <Row label="Companies register (REA)">VR-425478</Row>
          <Row label="Certified email (PEC)">
            <a className="underline underline-offset-4" href="mailto:evox@pec.it">
              evox@pec.it
            </a>
          </Row>
          <Row label="Privacy contact">
            <a className="underline underline-offset-4" href="mailto:privacy@evox.gg">
              privacy@evox.gg
            </a>
          </Row>
          <Row label="General support">
            <a className="underline underline-offset-4" href="mailto:support@evox.gg">
              support@evox.gg
            </a>
          </Row>
        </dl>
        <p>
          We have not appointed a Data Protection Officer, because we are not required to under
          Article 37 GDPR. Privacy requests are handled directly by the company at the address
          above.
        </p>
      </Clause>

      <Clause title="2. What we collect, and why">
        <p>
          <strong className="text-foreground">When you submit the application form.</strong> You
          choose what to tell us, but the form asks for your name, email address, a messaging
          contact (WhatsApp or Telegram), your Instagram handle, links to the platforms you work on,
          your country, whether you currently work with an agency, the kind of support you are
          looking for, and anything else you want to add in the free-text field.
        </p>
        <p>
          We use this to assess your application, to reply to you, and — if we both decide to go
          ahead — to prepare and negotiate a contract. The legal basis is Article 6(1)(b) GDPR:
          steps taken at your request before entering into a contract.
        </p>
        <p>
          <strong className="text-foreground">When you email us.</strong> If you write to us at the
          addresses on this site, we receive your message and your email address, and we keep the
          exchange for as long as we need it to answer you. Same legal basis as above.
        </p>
        <p>
          <strong className="text-foreground">When you simply visit the site.</strong> Our hosting
          provider records standard server logs: IP address, browser and device type, the pages
          requested, and the date and time. We use these to keep the site running and to detect
          abuse. The legal basis is Article 6(1)(f) GDPR, our legitimate interest in the security
          and stability of the service. These logs are not used to build a profile of you.
        </p>
      </Clause>

      <Clause title="3. Sensitive information — please read this one">
        <p>
          We work with creators, and some of them publish adult content. That means an application
          can reveal information about your sex life or sexual orientation, which Article 9 GDPR
          treats as a special category of personal data with stronger protection.
        </p>
        <p>
          We do not ask you for this information, and you do not have to give it to us. The
          application can be assessed without it. If you do choose to include it — for example by
          linking a platform profile or describing the work you do — we process it only on the basis
          of your <strong className="text-foreground">explicit consent</strong> under Article 9(2)(a)
          GDPR, given by sending us the application with that information in it, and only for the
          purpose of evaluating and managing your application.
        </p>
        <p>
          You can withdraw that consent at any time by writing to privacy@evox.gg. Withdrawing it
          does not make our earlier processing unlawful, but it means we will stop and, unless we
          are legally required to keep something, delete what we hold.
        </p>
      </Clause>

      <Clause title="4. You must be 18 or over">
        <p>
          This service is for adults only. Do not submit an application, and do not send us personal
          data, if you are under 18. We do not knowingly process the data of minors. If we discover
          that we have received data from someone under 18, we will delete it without delay.
        </p>
      </Clause>

      <Clause title="5. Is any of this mandatory?">
        <p>
          No. Nothing on this site obliges you to give us your data. But the fields marked as
          required in the application form are the minimum we need to evaluate an application and
          get back to you — without them we cannot process your request. The optional fields are
          exactly that: optional.
        </p>
      </Clause>

      <Clause title="6. Who else sees your data">
        <p>
          We do not sell your personal data, and we do not share it for anyone else&rsquo;s
          marketing. We share it only with the parties below, each of which acts either as a data
          processor on our instructions under Article 28 GDPR or as an independent controller where
          indicated.
        </p>
        <Bullets
          items={[
            <>
              <strong className="text-foreground">Our hosting provider</strong> (Vercel Inc.), which
              serves this website and stores the server logs described above. Acts as a processor.
            </>,
            <>
              <strong className="text-foreground">Resend (Plus Five Five, Inc.)</strong>, which
              delivers the application form to our inbox as an email. It processes the contents of
              your application solely to transmit it to us. Acts as a processor.
            </>,
            <>
              <strong className="text-foreground">Google Ireland Ltd.</strong>, which delivers the
              web fonts used by this site. When your browser loads a font, it connects to Google and
              that connection reveals your IP address. We do not use Google Analytics or any other
              Google tracking product. Google acts as an independent controller for this connection.
            </>,
            <>
              <strong className="text-foreground">Our professional advisers</strong> — lawyers,
              accountants — and the authorities, where we are legally obliged to disclose something
              or need to establish or defend a legal claim.
            </>,
          ]}
        />
      </Clause>

      <Clause title="7. Transfers outside the European Economic Area">
        <p>
          Some of the providers listed above are established in, or process data from, the United
          States. Where your data leaves the EEA, the transfer is covered by the safeguards in
          Chapter V GDPR: either an adequacy decision of the European Commission — including the
          EU&ndash;US Data Privacy Framework, where the provider is certified under it — or the
          Standard Contractual Clauses adopted by the Commission.
        </p>
        <p>
          You can ask us for a copy of the safeguards that apply to a specific transfer by writing
          to privacy@evox.gg.
        </p>
      </Clause>

      <Clause title="8. How long we keep it">
        <Bullets
          items={[
            <>
              <strong className="text-foreground">Applications we do not take forward:</strong> up
              to 12 months from our decision, so we can explain it if you ask and reconsider you if
              your situation changes. Then deleted.
            </>,
            <>
              <strong className="text-foreground">Applications that become a working
              relationship:</strong> for as long as the relationship lasts, and afterwards for the
              periods Italian law requires us to keep contractual and accounting records — generally
              10 years under Article 2220 of the Italian Civil Code.
            </>,
            <>
              <strong className="text-foreground">Email exchanges:</strong> up to 24 months from
              the last message, unless they form part of a working relationship.
            </>,
            <>
              <strong className="text-foreground">Server logs:</strong> a short technical retention
              period at our hosting provider, normally no longer than 30 days.
            </>,
          ]}
        />
        <p>
          If you ask us to delete your data sooner, we will, except for anything we are required to
          keep by law.
        </p>
      </Clause>

      <Clause title="9. How we protect it">
        <p>
          The site is served over an encrypted connection (HTTPS). Access to applications is limited
          to the people inside our team who need it to do their job, and those people are bound by
          confidentiality. No system is perfectly secure, and we will not pretend otherwise — but if
          a breach occurs that is likely to put your rights at risk, we will notify the supervisory
          authority and, where required by Article 34 GDPR, you.
        </p>
      </Clause>

      <Clause title="10. Your rights">
        <p>Under Articles 15 to 22 GDPR you can ask us to:</p>
        <Bullets
          items={[
            "tell you what data we hold about you, and give you a copy of it;",
            "correct it, if it is wrong or incomplete;",
            "delete it;",
            "restrict how we use it while a dispute or a correction is pending;",
            "hand it over in a portable, machine-readable format, or send it to someone else;",
            "stop processing it where we rely on our legitimate interest; and",
            "withdraw a consent you previously gave, at any time.",
          ]}
        />
        <p>
          Write to{" "}
          <a className="text-foreground underline underline-offset-4" href="mailto:privacy@evox.gg">
            privacy@evox.gg
          </a>{" "}
          and we will answer within one month, as Article 12(3) GDPR requires. If your request is
          particularly complex we may extend that by two further months, and we will tell you if we
          do. Exercising these rights is free.
        </p>
        <p>
          If you think we have handled your data badly, you can complain to the Italian supervisory
          authority: <strong className="text-foreground">Garante per la protezione dei dati
          personali</strong>, Piazza Venezia 11, 00187 Roma — garante@gpdp.it —{" "}
          <a
            className="text-foreground underline underline-offset-4"
            href="https://www.garanteprivacy.it"
            target="_blank"
            rel="noopener noreferrer"
          >
            garanteprivacy.it
          </a>
          . You can also go to court.
        </p>
      </Clause>

      <Clause title="11. No automated decision-making">
        <p>
          Applications are read and assessed by people. We do not use automated decision-making or
          profiling that produces legal effects for you, within the meaning of Article 22 GDPR.
        </p>
      </Clause>

      <Clause title="12. Cookies">
        <p>
          This site does not use profiling or advertising cookies. The details are in our{" "}
          <Link to="/cookies" className="text-foreground underline underline-offset-4">
            Cookie Policy
          </Link>
          .
        </p>
      </Clause>

      <Clause title="13. Changes to this policy">
        <p>
          If we change how we handle your data, we will update this page and change the date at the
          top. Where the change is significant and affects data we already hold about you, we will
          tell you directly before it takes effect.
        </p>
      </Clause>
    </LegalLayout>
  );
}
