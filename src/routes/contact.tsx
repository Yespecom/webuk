import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import heroImg from "@/assets/hero.jpg";
import { sendContactEmail } from "@/lib/api/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Book a Discovery Call | Yesp UK Transformation Consultancy",
      },
      {
        name: "description",
        content:
          "Book a free 20-minute discovery call with Yesp. Mon–Fri, 09:00–17:30 (UK), no obligation. Discuss your operational challenges and find out if we're the right partner for your business.",
      },
      {
        name: "keywords",
        content:
          "book discovery call UK, operations consultant contact, transformation consultancy UK, business improvement enquiry, UK consultancy contact",
      },
      {
        property: "og:title",
        content: "Book a Discovery Call | Yesp UK Transformation Consultancy",
      },
      {
        property: "og:description",
        content:
          "Free 20-minute discovery call. Mon–Fri, 09:00–17:30 (UK), no obligation. We'll tell you honestly whether we're the right fit.",
      },
      { property: "og:url", content: "https://yesp.uk/contact" },
      { property: "og:image", content: "https://yesp.uk/api/og?title=Book+a+Discovery+Call&description=Free+20-minute+discovery+call.+UK+business+hours%2C+no+obligation.&tag=Contact" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://yesp.uk/api/og?title=Book+a+Discovery+Call&description=Free+20-minute+discovery+call.+UK+business+hours%2C+no+obligation.&tag=Contact" },
      { name: "twitter:title", content: "Book a Discovery Call | Yesp UK" },
      {
        name: "twitter:description",
        content:
          "Free 20-minute discovery call with Yesp UK. No obligation. Same-day response Mon–Fri, 09:00–17:30 (UK).",
      },
    ],
    links: [{ rel: "canonical", href: "https://yesp.uk/contact" }],
  }),
  component: ContactPage,
});

const callSteps = [
  {
    step: "01",
    title: "Tell us about your business",
    desc: "We'll ask about your operations, size, industry, and current challenges. No prepared pitch required — just an honest conversation.",
  },
  {
    step: "02",
    title: "We'll ask the right questions",
    desc: "Our goal is to understand whether we can genuinely help — not to sell a service you don't need. We'll ask specific questions about your operations, systems, and data.",
  },
  {
    step: "03",
    title: "We'll give you an honest answer",
    desc: "If Yesp is the right fit, we'll explain exactly what an engagement would look like and what it would cost. If we're not the right fit, we'll tell you that too.",
  },
  {
    step: "04",
    title: "Next steps, only if there are any",
    desc: "If there's a genuine fit, we'll outline the right starting point — usually a Transformation Assessment. No pressure, no follow-up cadence, no sales process.",
  },
];

const faqs = [
  {
    q: "How quickly will you respond?",
    a: "Mon–Fri, 09:00–17:30 (UK). Same-day response. Enquiries received outside those hours will be responded to the following working day.",
  },
  {
    q: "Is the discovery call really free?",
    a: "Yes. The discovery call is 20 minutes, completely free, and carries no obligation. We use it to understand whether we can genuinely help your business. If we can, great. If we can't, we'll tell you.",
  },
  {
    q: "What information should I prepare for the call?",
    a: "Nothing formal is required. It helps to have a rough sense of your business size (headcount, turnover), your industry, and the 1–2 challenges you're most trying to solve. That's it.",
  },
  {
    q: "Can we start with the Assessment without a discovery call?",
    a: "Yes. If you've read enough to know the Assessment is right for your business, you can contact us directly to arrange it. We'll have a brief conversation to confirm scope and timing before booking.",
  },
  {
    q: "Do you work with businesses outside the UK?",
    a: "Our primary focus is UK mid-market businesses. We understand the UK regulatory environment, market conditions, and business culture. International enquiries are considered on a case-by-case basis.",
  },
  {
    q: "What if we're not sure we need transformation — can we still talk?",
    a: "Absolutely. Many of the businesses we work with begin uncertain about what they need. The discovery call is specifically designed to help you work that out — with no commitment required.",
  },
];

const alternativeEngagements = [
  {
    title: "Read our research",
    desc: "Yesp Labs publishes independent research on operational reporting costs, AI readiness, and transformation ROI in UK mid-market businesses. Start with Report 001 or 002.",
    link: "/research",
    linkLabel: "View all research",
  },
  {
    title: "Start with an Assessment",
    desc: "Our £2,500 Transformation Assessment is a low-risk starting point that gives you a complete operational picture before any larger commitment.",
    link: "/assessment",
    linkLabel: "View Assessment details",
  },
  {
    title: "Understand our framework",
    desc: "Read how our three-phase framework — Assess, Transform, Optimise — works in practice, and why sequence matters in transformation programmes.",
    link: "/framework",
    linkLabel: "View our framework",
  },
];

const topics = [
  "Operational Excellence",
  "Digital Transformation",
  "AI Transformation",
  "Transformation Assessment",
  "General enquiry",
] as const;

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", topic: "", message: "" });
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }
    setPending(true);
    try {
      const messageBody = form.topic
        ? `Topic: ${form.topic}\nCompany: ${form.company || "—"}\n\n${form.message}`
        : `Company: ${form.company || "—"}\n\n${form.message}`;
      await sendContactEmail({ data: { name: form.name, email: form.email, message: messageBody } });
      setSent(true);
    } catch {
      toast.error("Something went wrong. Please email us directly at hello@yesp.uk");
    } finally {
      setPending(false);
    }
  }

  const inputCls =
    "w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground placeholder:text-muted-foreground/60";

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 border border-border bg-secondary p-16 text-center">
        <CheckCircle2 className="h-10 w-10 text-[var(--brand)]" />
        <div>
          <h3 className="text-2xl font-medium tracking-tight">Message received.</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            We'll respond within one UK business day. If your enquiry is urgent, email us
            directly at{" "}
            <a href="mailto:hello@yesp.uk" className="underline underline-offset-4 hover:text-foreground transition-colors">
              hello@yesp.uk
            </a>
            .
          </p>
        </div>
        <button
          onClick={() => { setSent(false); setForm({ name: "", email: "", company: "", topic: "", message: "" }); }}
          className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Name <span className="text-foreground">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Your full name"
            value={form.name}
            onChange={set("name")}
            className={inputCls}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Email <span className="text-foreground">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="your@company.co.uk"
            value={form.email}
            onChange={set("email")}
            className={inputCls}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Company
          </label>
          <input
            type="text"
            placeholder="Your company name"
            value={form.company}
            onChange={set("company")}
            className={inputCls}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Topic
          </label>
          <select
            value={form.topic}
            onChange={set("topic")}
            className={inputCls + " cursor-pointer appearance-none"}
          >
            <option value="">Select a topic</option>
            {topics.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Message <span className="text-foreground">*</span>
        </label>
        <textarea
          required
          rows={6}
          placeholder="Tell us about your business, your current challenges, and what you're hoping to achieve..."
          value={form.message}
          onChange={set("message")}
          className={inputCls + " resize-none"}
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-3 border border-foreground bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send Message
              <ArrowUpRight className="h-4 w-4" />
            </>
          )}
        </button>
        <p className="text-xs text-muted-foreground">
          We respond to every enquiry Mon–Fri, 09:00–17:30 (UK).
        </p>
      </div>
    </form>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[var(--ink)] text-white">
          <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/60 via-[var(--ink)]/85 to-[var(--ink)]" />
          <div className="relative container-x py-28 lg:py-40">
            <p className="mb-6 text-xs uppercase tracking-[0.22em] text-white/50">
              Let's start with a conversation
            </p>
            <h1 className="max-w-4xl text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
              Transformation starts with{" "}
              <span className="text-white/40">understanding.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
              Book a discovery call and we'll discuss your business, challenges, and
              opportunities. If we're the right partner, we'll tell you. If we're not,
              we'll tell you that too.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="mailto:hello@yesp.uk"
                className="inline-flex items-center gap-3 border border-white bg-white px-6 py-4 text-base font-medium text-[var(--ink)] hover:bg-white/90 transition-colors"
              >
                hello@yesp.uk
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@yesp.uk?subject=Discovery Call Request"
                className="inline-flex items-center gap-3 border border-white/30 px-6 py-4 text-base font-medium text-white hover:bg-white/10 transition-colors"
              >
                Book 20-Minute Call
              </a>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="border-b border-border bg-background">
          <div className="container-x py-16">
            <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-4">
              {[
                { k: "20 min", v: "Discovery call" },
                { k: "Free", v: "No fee, no obligation" },
                { k: "Same day", v: "Response Mon–Fri, 09:00–17:30 (UK)" },
                { k: "Honest", v: "We'll tell you if we can't help" },
              ].map((m) => (
                <div key={m.v} className="bg-background p-8">
                  <div className="text-3xl font-semibold tracking-tight">{m.k}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{m.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to expect */}
        <section className="border-b border-border bg-background">
          <div className="container-x py-14 md:py-24">
            <div className="grid gap-8 md:gap-16 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="mb-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">What to expect</p>
                <h2 className="text-4xl leading-tight md:text-5xl">
                  A conversation, not a pitch.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  We've deliberately designed our discovery process to be low-pressure and
                  genuinely useful — even if you don't engage with Yesp afterwards.
                </p>
              </div>
              <div className="space-y-4 lg:col-span-7">
                {callSteps.map((item) => (
                  <div key={item.step} className="flex gap-6 border-b border-border pb-6">
                    <div className="font-mono text-sm text-muted-foreground pt-0.5 shrink-0">{item.step}</div>
                    <div>
                      <h3 className="text-base font-medium">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact details */}
        <section className="border-b border-border bg-secondary">
          <div className="container-x py-14 md:py-24">
            <div className="grid gap-8 md:gap-16 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="mb-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">Get in touch</p>
                <h2 className="text-4xl leading-tight md:text-5xl">
                  Reach us directly.
                </h2>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
                  <div className="bg-background p-8">
                    <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Email</div>
                    <a
                      href="mailto:hello@yesp.uk"
                      className="mt-3 block text-xl font-medium hover:text-[var(--brand)] transition-colors"
                    >
                      hello@yesp.uk
                    </a>
                    <p className="mt-2 text-sm text-muted-foreground">
                      For all enquiries including discovery calls, assessments, and general questions.
                    </p>
                  </div>
                  <div className="bg-background p-8">
                    <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Business hours</div>
                    <div className="mt-3 text-xl font-medium">Mon–Fri, 09:00–17:30 (UK)</div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Same-day response during business hours.
                    </p>
                  </div>
                  <div className="bg-background p-8">
                    <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Region</div>
                    <div className="mt-3 text-xl font-medium">United Kingdom</div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Primarily serving UK mid-market businesses (50–500 employees).
                    </p>
                  </div>
                  <div className="bg-background p-8">
                    <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Starting point</div>
                    <div className="mt-3 text-xl font-medium">Assessment — Fixed fee</div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Fixed fee. No hidden costs. Everything scoped before you commit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact form */}
        <section className="border-b border-border bg-background">
          <div className="container-x py-14 md:py-24">
            <div className="grid gap-8 md:gap-16 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="mb-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">Send a message</p>
                <h2 className="text-4xl leading-tight md:text-5xl">
                  Not ready for a call?
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  Send us a message and we'll respond within one UK business day. There's no
                  obligation and no sales process — just an honest reply.
                </p>
                <div className="mt-8 space-y-4 border-t border-border pt-8">
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email us directly</div>
                    <a
                      href="mailto:hello@yesp.uk"
                      className="mt-2 block text-base font-medium hover:text-[var(--brand)] transition-colors"
                    >
                      hello@yesp.uk
                    </a>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Business hours</div>
                    <div className="mt-2 text-base font-medium">Mon–Fri, 09:00–17:30 (UK)</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-border bg-secondary">
          <div className="container-x py-14 md:py-24">
            <div className="grid gap-8 md:gap-16 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">Questions</p>
                <h2 className="text-3xl leading-tight md:text-4xl">
                  Before you get in touch.
                </h2>
              </div>
              <div className="space-y-6 lg:col-span-8">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-border pb-6">
                    <h3 className="text-base font-medium">{faq.q}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Not ready for a call */}
        <section className="bg-background">
          <div className="container-x py-14 md:py-24">
            <p className="mb-12 text-xs uppercase tracking-[0.22em] text-muted-foreground">Not ready for a call?</p>
            <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
              {alternativeEngagements.map((alt) => (
                <div key={alt.title} className="bg-background p-8">
                  <h3 className="text-xl font-medium">{alt.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{alt.desc}</p>
                  <Link
                    to={alt.link}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-0.5 hover:text-[var(--brand)] hover:border-[var(--brand)] transition-colors"
                  >
                    {alt.linkLabel} <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
