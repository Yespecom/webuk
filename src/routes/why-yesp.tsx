import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Settings2, Check, Shield, Zap } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/why-yesp")({
  head: () => ({
    meta: [
      { title: "Why Yesp | Outcomes Over Slideware | UK Transformation Partner" },
      { name: "description", content: "Outcome-focused, not consultant-led. Built for UK mid-market businesses who need real change, not generic frameworks or expensive decks." },
      { name: "keywords", content: "why Yesp, UK transformation partner, outcomes-focused consultancy, operational results UK, SME transformation partner" },
      { property: "og:title", content: "Why Yesp | Outcomes Over Slideware" },
      { property: "og:description", content: "Outcome-focused, not consultant-led. Built for UK mid-market businesses." },
      { property: "og:url", content: "https://yesp.uk/why-yesp" },
      { property: "og:image", content: "https://yesp.uk/api/og?title=Why+Yesp&description=Outcome-focused%2C+not+consultant-led.+Built+for+UK+mid-market+businesses.&tag=About+Yesp" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://yesp.uk/api/og?title=Why+Yesp&description=Outcome-focused%2C+not+consultant-led.+Built+for+UK+mid-market+businesses.&tag=About+Yesp" },
      { name: "twitter:title", content: "Why Yesp | UK Transformation Partner" },
    ],
    links: [{ rel: "canonical", href: "https://yesp.uk/why-yesp" }],
  }),
  component: WhyYespPage,
});

const differentiators = [
  { no: "01", title: "Diagnose before building", desc: "We map your operations before writing a single proposal. Every recommendation is evidence-based — not borrowed from a previous client or assumed from an industry playbook." },
  { no: "02", title: "Success defined upfront", desc: "Phase 2 engagements begin with agreed success metrics. You know what we're delivering, how long it takes, and how you'll measure whether it worked — before any work begins." },
  { no: "03", title: "Senior people deliver", desc: "No bait-and-switch. The senior people involved in scoping your engagement are the same people who deliver it. No handoffs once the contract is signed." },
  { no: "04", title: "Vendor neutral", desc: "No software commissions, no preferred partnerships. We recommend what's best for your business. If something isn't the right investment, we'll tell you." },
  { no: "05", title: "We build your capability", desc: "Systems documented. Processes trained. Knowledge transferred. We leave your team more capable — not dependent on us returning next quarter." },
  { no: "06", title: "Transparent pricing", desc: "Phase 1 is a fixed fee. Phase 2 is scoped from Phase 1 findings with a clear price before work begins. Phase 3 is a known monthly investment. No surprises at any stage." },
];

const concerns = [
  { concern: "We've used consultants before and been disappointed.", response: "The most common reasons consultancy fails: recommendations made without evidence, junior delivery after senior scoping, success defined as delivery of a document rather than a business outcome. Our framework addresses all three." },
  { concern: "We can't afford a large transformation programme right now.", response: "Phase 1 is specifically designed as a low-risk, fixed-fee starting point. It gives you everything needed to decide whether and how to proceed — with us or independently." },
  { concern: "We don't have internal capacity to support a project.", response: "The typical time commitment from your team in Phase 1 is 4–6 hours across three weeks. Phase 2 is structured to minimise operational disruption." },
  { concern: "How do we know the ROI will be real?", response: "We don't make ROI claims without evidence. The Opportunity Register from Phase 1 includes a conservative ROI model based on your data and costs — not industry benchmarks." },
];

function WhyYespPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <SiteNav />
      <main>

        {/* Hero */}
        <section className="ink-glow grain relative overflow-hidden bg-[var(--ink)] text-white">
          <div className="container-x py-14 sm:py-20 lg:py-32">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-white/40">Why Yesp</p>
            <h1 className="max-w-3xl text-[2.15rem] leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Outcomes, not slideware.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/55">
              Every engagement is built around measurable results agreed before work begins — not documents delivered at the end.
            </p>
          </div>

          <div className="border-t border-white/[0.07]">
            <div className="container-x grid grid-cols-2 md:grid-cols-4">
              {[
                { icon: <Zap className="h-4 w-4" />, stat: "Fixed fee", label: "Phase 1 assessment" },
                { icon: <Settings2 className="h-4 w-4" />, stat: "2–3 wks", label: "Phase 1 delivery" },
                { icon: <Check className="h-4 w-4" />, stat: "6", label: "Deliverables guaranteed" },
                { icon: <Shield className="h-4 w-4" />, stat: "100%", label: "Senior-led, no handoffs" },
              ].map(({ icon, stat, label }, i) => (
                <div
                  key={stat}
                  className={`px-5 py-6 md:px-8 ${i % 2 === 1 ? "border-l border-white/[0.07]" : ""} ${i >= 2 ? "border-t border-white/[0.07] md:border-t-0 md:border-l border-white/[0.07]" : ""}`}
                >
                  <div className="mb-2 text-white/25">{icon}</div>
                  <div className="font-mono text-xl font-semibold sm:text-2xl">{stat}</div>
                  <div className="mt-1 text-xs text-white/30">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="border-b border-border">
          <div className="container-x py-14 md:py-24">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">The difference</p>
            <h2 className="mb-16 text-4xl">What makes us different.</h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {differentiators.map((d) => (
                <div key={d.no} className="border-t border-border pt-8">
                  <p className="font-mono text-xs text-muted-foreground">{d.no}</p>
                  <h3 className="mt-3 text-lg">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Concerns */}
        <section className="border-b border-border bg-secondary/40">
          <div className="container-x py-12 md:py-20">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Common concerns</p>
                <h2 className="text-3xl">Things we hear before an engagement.</h2>
              </div>
              <div className="space-y-6 lg:col-span-8">
                {concerns.map((c, i) => (
                  <div key={i} className="border-b border-border pb-6">
                    <p className="text-sm font-medium">"{c.concern}"</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.response}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ink-glow grain relative overflow-hidden bg-[var(--ink)] text-white">
          <div className="container-x py-12 md:py-20">
            <h2 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl">If this sounds like the right fit, let's talk.</h2>
            <p className="mt-4 max-w-md text-base text-white/50">
              20-minute discovery call — Mon–Fri, 09:00–17:30 (UK). No obligation. We'll tell you honestly whether we can help.
            </p>
            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
              <a href="https://yespstudio.com/contact" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-medium text-[var(--ink)] transition hover:bg-white/90">
                Book a call <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link to="/assessment" className="inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 text-sm text-white/70 transition hover:border-white/40 hover:text-white">
                Start with an Assessment
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
