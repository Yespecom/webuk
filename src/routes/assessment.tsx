import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Settings2, Layers, Sparkles, Database, BarChart3, FileText, Map, PresentationIcon, Cpu, Check, Clock, Users } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

const assessmentSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://yesp.uk/assessment#webpage",
      url: "https://yesp.uk/assessment",
      name: "Transformation Assessment — Fixed-Fee | Yesp UK",
      description: "A structured fixed-fee operational assessment for UK businesses. Six deliverables in 2–3 weeks covering operations, systems, data, and AI readiness. Senior-led.",
      isPartOf: { "@id": "https://yesp.uk/#website" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://yesp.uk/" },
          { "@type": "ListItem", position: 2, name: "Assessment", item: "https://yesp.uk/assessment" },
        ],
      },
    },
    {
      "@type": "Service",
      "@id": "https://yesp.uk/assessment#service",
      name: "Transformation Assessment",
      serviceType: "Business Transformation Assessment",
      description: "A fixed-fee, senior-led assessment covering operations, systems, data quality and AI readiness. Delivers six actionable outputs in 2–3 weeks, including a working prototype built on the client's actual data.",
      provider: { "@id": "https://yesp.uk/#organization" },
      areaServed: { "@type": "Country", name: "United Kingdom" },
      offers: {
        "@type": "Offer",
        priceCurrency: "GBP",
        description: "Fixed fee — no surprise costs",
        eligibleRegion: { "@type": "Country", name: "United Kingdom" },
        availability: "https://schema.org/InStock",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Assessment Deliverables",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Current State Assessment" },
          { "@type": "ListItem", position: 2, name: "Opportunity Register — prioritised by ROI" },
          { "@type": "ListItem", position: 3, name: "ROI Analysis" },
          { "@type": "ListItem", position: 4, name: "90-Day Transformation Roadmap" },
          { "@type": "ListItem", position: 5, name: "Executive Presentation" },
          { "@type": "ListItem", position: 6, name: "Working Prototype" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://yesp.uk/assessment#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does the Transformation Assessment cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The assessment covers five areas: operations and process review, systems and integration landscape, data quality and accessibility, AI readiness evaluation, and KPI and reporting review. It delivers six outputs: Current State Assessment, Opportunity Register, ROI Analysis, 90-Day Roadmap, Executive Presentation, and a Working Prototype.",
          },
        },
        {
          "@type": "Question",
          name: "How long does the Transformation Assessment take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Transformation Assessment takes 2–3 weeks from kickoff to delivery of all six deliverables.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in the fixed fee for the assessment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The fixed fee includes all six deliverables: Current State Assessment, Opportunity Register prioritised by ROI, ROI Analysis, 90-Day Transformation Roadmap, Executive Presentation, and a Working Prototype built on the client's actual data. There are no hidden costs or add-ons.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Working Prototype included in the assessment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Working Prototype is a proof-of-concept demonstrating the highest-value opportunity identified during the assessment. It is built on the client's actual data, ready to show their board, and included in the fixed fee — not an add-on. No UK consultancy includes this in a fixed-fee assessment.",
          },
        },
        {
          "@type": "Question",
          name: "Do we need to commit to further work after the assessment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The assessment is a standalone engagement. There is no obligation to proceed to Phase 2 (Transform). The deliverables are yours to act on however you choose.",
          },
        },
        {
          "@type": "Question",
          name: "Can we start with the Assessment without a discovery call?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. If you have read enough to know the Assessment is right for your business, you can contact us directly to arrange it. We will have a brief conversation to confirm scope and timing before booking.",
          },
        },
      ],
    },
  ],
});

export const Route = createFileRoute("/assessment")({
  head: () => ({
    meta: [
      { title: "Transformation Assessment — Fixed-Fee | Yesp UK" },
      { name: "description", content: "A structured fixed-fee operational assessment for UK businesses. Six deliverables in 2–3 weeks covering operations, systems, data, and AI readiness. Includes a working prototype. Senior-led." },
      { name: "keywords", content: "operational assessment UK, digital transformation assessment, AI readiness assessment UK, business transformation review UK, operations audit UK, fixed fee assessment" },
      { property: "og:title", content: "Transformation Assessment — Fixed Fee | Yesp UK" },
      { property: "og:description", content: "Six actionable deliverables in 2–3 weeks: operations, systems, data and AI readiness review. Includes a working prototype. Senior-led. Fixed fee." },
      { property: "og:url", content: "https://yesp.uk/assessment" },
      { property: "og:image", content: "https://yesp.uk/api/og?title=Transformation+Assessment&description=Six+deliverables+in+2-3+weeks%3A+operations%2C+systems%2C+data+%26+AI+readiness.&tag=Assessment" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://yesp.uk/api/og?title=Transformation+Assessment&description=Six+deliverables+in+2-3+weeks%3A+operations%2C+systems%2C+data+%26+AI+readiness.&tag=Assessment" },
      { name: "twitter:title", content: "Transformation Assessment | Yesp UK" },
      { "script:ld+json": assessmentSchema },
    ],
    links: [{ rel: "canonical", href: "https://yesp.uk/assessment" }],
  }),
  component: AssessmentPage,
});

const assessAreas = [
  { no: "01", icon: <Settings2 className="h-5 w-5" />, label: "Operations", desc: "How work gets done today — process walkthroughs across all business functions to find where time and capacity are being lost." },
  { no: "02", icon: <BarChart3 className="h-5 w-5" />, label: "Processes", desc: "Where inefficiencies and bottlenecks exist, what they cost, and what fixing them is worth to your business." },
  { no: "03", icon: <Layers className="h-5 w-5" />, label: "Systems", desc: "How effectively your technology supports the business, where it falls short, and where manual workarounds are hiding real costs." },
  { no: "04", icon: <Database className="h-5 w-5" />, label: "Data", desc: "Whether information is accessible, reliable, and actionable — and what's needed to enable real-time decision-making." },
  { no: "05", icon: <Sparkles className="h-5 w-5" />, label: "AI Readiness", desc: "Where AI can create genuine value for your business and what data and process foundations need to be in place first." },
];

const deliverables = [
  {
    no: "D/01",
    icon: <FileText className="h-5 w-5" />,
    title: "Current State Assessment",
    desc: "A complete, documented view of your operations, systems, data infrastructure, and workflows — the definitive picture of how your business works today.",
  },
  {
    no: "D/02",
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Opportunity Register",
    desc: "A prioritised list of improvement opportunities, ranked by ROI and feasibility — not a generic list, built from evidence gathered in your business.",
  },
  {
    no: "D/03",
    icon: <Map className="h-5 w-5" />,
    title: "ROI Analysis",
    desc: "Expected business impact and investment requirements, modelled on your actual data and costs — not industry averages or benchmarks.",
  },
  {
    no: "D/04",
    icon: <Map className="h-5 w-5" />,
    title: "90-Day Transformation Roadmap",
    desc: "A practical, sequenced implementation plan ready to act on immediately — with clear owners, timelines, and success metrics.",
  },
  {
    no: "D/05",
    icon: <PresentationIcon className="h-5 w-5" />,
    title: "Executive Presentation",
    desc: "Leadership-ready findings and recommendations structured for internal buy-in and board-level decision making.",
  },
  {
    no: "D/06",
    icon: <Cpu className="h-5 w-5" />,
    title: "Working Prototype",
    desc: "A functional proof-of-concept demonstrating the highest-value opportunity identified — not a mockup or a slide deck.",
  },
];

const timeline = [
  {
    no: "01",
    week: "Week 1",
    title: "Discovery",
    colour: "bg-secondary",
    activities: [
      "Kickoff with senior leadership",
      "Operational process walkthroughs",
      "Systems landscape mapping",
      "Stakeholder interviews",
      "Document and data review",
    ],
  },
  {
    no: "02",
    week: "Week 2",
    title: "Analysis",
    colour: "bg-secondary",
    activities: [
      "Bottleneck identification",
      "Data quality and accessibility audit",
      "KPI and reporting review",
      "AI readiness evaluation",
      "ROI modelling",
    ],
  },
  {
    no: "03",
    week: "Week 3",
    title: "Delivery",
    colour: "bg-secondary",
    activities: [
      "Opportunity prioritisation workshop",
      "Roadmap development",
      "Working prototype demonstration",
      "Executive presentation preparation",
      "Findings delivery session",
    ],
  },
];

const faqs = [
  { q: "Why is the assessment a fixed fee?", a: "Fixed pricing removes ambiguity. You know exactly what you're investing before work begins, and we're accountable for delivering six agreed deliverables within the 2–3 week window. No scope creep, no surprises." },
  { q: "Do we have to use Yesp after the assessment?", a: "No. The assessment is designed to be valuable on its own. You receive a complete picture of your operations and a roadmap you can act on independently or with any partner you choose." },
  { q: "We already know our problems. Why do we still need an assessment?", a: "Most businesses understand their symptoms. The assessment identifies root causes, quantifies impact, and prioritises opportunities by ROI — so transformation addresses the right problems in the right sequence." },
  { q: "How disruptive is the process?", a: "Minimal. The typical time commitment from your team is 4–6 hours across three weeks, primarily in the week 1 discovery phase. We work around your operations." },
  { q: "What size business is this designed for?", a: "UK businesses typically between 30 and 500 employees. We adjust depth and breadth to the size and complexity of your organisation." },
  { q: "What exactly is the working prototype?", a: "We identify the single highest-value opportunity and build a functional proof-of-concept. Not a mockup or a slide — a working demonstration you can use to build internal confidence and accelerate decision-making." },
];

const rightForYou = [
  "You know something needs to change but aren't sure where to start",
  "You've invested in technology and haven't seen the expected results",
  "Your operations work but don't scale with growth",
  "You want evidence-based recommendations, not generic advice",
  "You're evaluating AI or digital transformation and need to know where to begin",
  "You want a low-risk starting point before committing to a larger programme",
];

const notForYou = [
  "You're looking for a generic strategic review without operational depth",
  "You're not prepared to act on findings within 90 days",
  "You need a report to satisfy a stakeholder, not to drive change",
  "Your business has fewer than 20 employees or is pre-revenue",
];

function AssessmentPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <SiteNav />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="ink-glow grain relative overflow-hidden bg-[var(--ink)] text-white">
          <div className="container-x pb-0 pt-16 sm:pt-24 lg:pt-36">
            <div className="max-w-3xl pb-0">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-white/40">Start here</p>
              <h1 className="text-[2.15rem] leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Transformation Assessment
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/55">
                A complete view of your operations, systems, data, and AI readiness. Six concrete deliverables in 2–3 weeks. The foundation for any transformation work.
              </p>
              <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                <a
                  href="https://yespstudio.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-medium text-[var(--ink)] transition hover:bg-white/90"
                >
                  Book Assessment <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://yespstudio.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 text-sm text-white/70 transition hover:border-white/40 hover:text-white"
                >
                  Ask a question first
                </a>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-12 border-t border-white/[0.07]">
            <div className="container-x grid grid-cols-3">
              {[
                { icon: <Clock className="h-4 w-4" />, stat: "2–3 wks", label: "Delivery window" },
                { icon: <FileText className="h-4 w-4" />, stat: "6", label: "Deliverables" },
                { icon: <Users className="h-4 w-4" />, stat: "4–6 hrs", label: "Your team's time" },
              ].map(({ icon, stat, label }, i) => (
                <div
                  key={stat}
                  className={`px-5 py-6 md:px-8 ${i > 0 ? "border-l border-white/[0.07]" : ""}`}
                >
                  <div className="mb-2 text-white/25">{icon}</div>
                  <div className="font-mono text-xl font-semibold sm:text-2xl">{stat}</div>
                  <div className="mt-1 text-xs text-white/30">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What we assess ────────────────────────────────────────── */}
        <section className="border-b border-border">
          <div className="container-x py-14 md:py-20">
            <div className="mb-12">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Scope</p>
              <h2 className="text-3xl md:text-4xl">Five areas. One complete picture.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                We assess every area that affects your business performance — not just the obvious ones. Each area connects to the others, giving us a complete view of where transformation value sits.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {assessAreas.map((a) => (
                <div key={a.no} className="rounded-xl border border-border p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground/60">
                      {a.icon}
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{a.no}</span>
                  </div>
                  <h3 className="text-lg">{a.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Deliverables ──────────────────────────────────────────── */}
        <section className="border-b border-border bg-secondary/40">
          <div className="container-x py-14 md:py-20">
            <div className="mb-12">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">What you receive</p>
              <h2 className="text-3xl md:text-4xl">Six deliverables. All included.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Not a report and a slide deck. Six distinct outputs — each one immediately usable by your team.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {deliverables.map((d) => (
                <div key={d.no} className="rounded-xl border border-border bg-white p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground/60">
                      {d.icon}
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{d.no}</span>
                  </div>
                  <h3 className="text-base font-medium">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ──────────────────────────────────────────────── */}
        <section className="border-b border-border">
          <div className="container-x py-14 md:py-20">
            <div className="mb-12">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Process</p>
              <h2 className="text-3xl md:text-4xl">Three weeks. Complete picture.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {timeline.map((w) => (
                <div key={w.no} className="rounded-xl border border-border p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ink)] font-mono text-xs text-white">
                      {w.no}
                    </span>
                    <div>
                      <p className="font-mono text-xs text-muted-foreground">{w.week}</p>
                      <h3 className="text-lg">{w.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-0">
                    {w.activities.map((a, j) => (
                      <li
                        key={a}
                        className={`flex items-start gap-3 py-2.5 text-sm ${j > 0 ? "border-t border-border" : ""}`}
                      >
                        <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-foreground/30" />
                        <span className="text-muted-foreground">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Right for you ─────────────────────────────────────────── */}
        <section className="border-b border-border bg-secondary/40">
          <div className="container-x py-14 md:py-20">
            <div className="mb-10 lg:mb-14">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Is this right for you?</p>
              <h2 className="text-3xl">The right starting point — and when it isn't.</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-white p-8">
                <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Right for you if</p>
                <ul className="space-y-0">
                  {rightForYou.map((item, j) => (
                    <li
                      key={item}
                      className={`flex items-start gap-3 py-3 text-sm ${j > 0 ? "border-t border-border" : ""}`}
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground/35" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-white p-8">
                <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Not designed for</p>
                <ul className="space-y-0">
                  {notForYou.map((item, j) => (
                    <li
                      key={item}
                      className={`flex items-start gap-3 py-3 text-sm ${j > 0 ? "border-t border-border" : ""}`}
                    >
                      <span className="mt-2 h-px w-3 shrink-0 bg-border" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="border-b border-border">
          <div className="container-x py-14 md:py-20">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Questions</p>
                <h2 className="text-3xl">What people ask before booking.</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Still have questions? Book a 20-minute call — no obligation.
                </p>
                <a href="https://yespstudio.com/contact" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium hover:gap-2.5 transition-all duration-200">
                  Book a call <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="space-y-6 lg:col-span-8">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-border pb-6">
                    <p className="text-sm font-medium">{faq.q}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="ink-glow grain relative overflow-hidden bg-[var(--ink)] text-white">
          <div className="container-x py-14 md:py-20">
            <h2 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl">
              Fixed fee. Six deliverables. Complete picture.
            </h2>
            <p className="mt-4 max-w-md text-base text-white/50">
              Book a 20-minute discovery call — Mon–Fri, 09:00–17:30 (UK). We'll confirm the assessment is right for your business before you commit.
            </p>
            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
              <a
                href="https://yespstudio.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-medium text-[var(--ink)] transition hover:bg-white/90"
              >
                Book Discovery Call <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/framework"
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 text-sm text-white/70 transition hover:border-white/40 hover:text-white"
              >
                View our framework
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
