import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Settings2, Layers, Sparkles, Check, ClipboardCheck, Clock, Database, Zap, BarChart3 } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

const homepageSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://yesp.uk/#webpage",
      url: "https://yesp.uk/",
      name: "Yesp | UK Digital Transformation, AI Assessment & Operational Excellence",
      description: "UK management consultancy that finds what's broken and builds the systems that fix it. Fixed-fee assessment. Senior-led. No hand-offs.",
      isPartOf: { "@id": "https://yesp.uk/#website" },
      about: { "@id": "https://yesp.uk/#organization" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://yesp.uk/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does Yesp do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yesp is a UK management consultancy that helps mid-market businesses (50–500 employees) transform operations. We diagnose operational problems first, then build the systems that fix them. Our three services are Operational Excellence, Digital Transformation, and AI Transformation.",
          },
        },
        {
          "@type": "Question",
          name: "How does Yesp's Transformation Assessment work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every engagement starts with a fixed-fee Transformation Assessment covering operations, systems, data quality, and AI readiness. It takes 2–3 weeks and delivers six outputs: Current State Assessment, Opportunity Register, ROI Analysis, 90-Day Roadmap, Executive Presentation, and a Working Prototype built on your actual data.",
          },
        },
        {
          "@type": "Question",
          name: "Is Yesp's assessment genuinely a fixed fee with no surprises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Transformation Assessment is a fixed fee with no hidden costs and no add-ons. All six deliverables — including the Working Prototype — are included.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Yesp different from other UK transformation consultancies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yesp's key differentiators are: (1) Diagnosis-first — we never recommend before understanding the problem; (2) Working prototype included in the fixed-fee assessment — no UK consultancy offers this; (3) 100% senior-led with no hand-offs after scoping; (4) Vendor neutral — no software commissions; (5) ROI modelled on your actual data before any commitment.",
          },
        },
        {
          "@type": "Question",
          name: "What industries does Yesp work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yesp primarily works with UK mid-market businesses in logistics and fulfilment, manufacturing, distribution, retail, supply chain, and professional services.",
          },
        },
        {
          "@type": "Question",
          name: "How do I start working with Yesp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Book a free 20-minute discovery call at yespstudio.com/contact. No preparation needed, no obligation. We respond the same day Mon–Fri, 09:00–17:30 (UK). If we can help, we'll tell you. If we can't, we'll tell you that too.",
          },
        },
      ],
    },
  ],
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yesp | Digital Transformation, AI Assessment & Operational Excellence | UK" },
      { name: "description", content: "We find what's broken. Then we build the system that fixes it. Fixed-fee assessment for UK mid-market businesses. Senior-led. Working prototype included. No hand-offs." },
      { name: "keywords", content: "digital transformation UK, AI assessment UK, operational excellence consultancy, business transformation UK, AI readiness UK, process improvement UK, fixed fee assessment" },
      { property: "og:title", content: "Yesp | Digital Transformation & AI Assessment | UK" },
      { property: "og:description", content: "We find what's broken and build the system that fixes it. Fixed-fee assessment for UK businesses. Senior-led. Working prototype included." },
      { property: "og:url", content: "https://yesp.uk/" },
      { property: "og:image", content: "https://yesp.uk/api/og?title=Yesp+%E2%80%94+Digital+%26+AI+Transformation&description=Senior-led+transformation+for+UK+businesses.&tag=UK+Transformation" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://yesp.uk/api/og?title=Yesp+%E2%80%94+Digital+%26+AI+Transformation&description=Senior-led+transformation+for+UK+businesses.&tag=UK+Transformation" },
      { name: "twitter:title", content: "Yesp | Digital Transformation & AI Assessment | UK" },
      { "script:ld+json": homepageSchema },
    ],
    links: [{ rel: "canonical", href: "https://yesp.uk/" }],
  }),
  component: Index,
});

const services = [
  {
    icon: <Settings2 className="h-5 w-5" />,
    no: "01",
    title: "Operational Excellence",
    tagline: "Eliminate waste. Recover capacity.",
    desc: "We map how your business actually runs — not how the org chart says it should. We find where time and money are leaking, redesign the processes, and build the reporting and monitoring systems that make the fix stick. You leave with a working prototype, not a slide deck.",
    bullets: [
      "Process mapping & redesign",
      "KPI framework design",
      "Bottleneck elimination",
      "Performance management system",
    ],
  },
  {
    icon: <Layers className="h-5 w-5" />,
    no: "02",
    title: "Digital Transformation",
    tagline: "Connected systems. Automated workflows.",
    desc: "We connect your disconnected systems, automate the manual workflows draining your team's time, and build the real-time data foundation that ends spreadsheet chaos for good. You leave with integrated, working systems — not a technology roadmap.",
    bullets: [
      "System integration & API design",
      "Workflow automation",
      "Real-time dashboards & BI",
      "Data platform build",
    ],
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    no: "03",
    title: "AI Transformation",
    tagline: "Scoped to ROI. Built on evidence.",
    desc: "We find where AI creates genuine ROI in your specific business — not where it sounds impressive. We assess your data foundation, prioritise the right use cases, and build AI capabilities tied to agreed success metrics. You leave with a working AI pilot, not a proof-of-concept that never ships.",
    bullets: [
      "AI readiness assessment",
      "Use case identification & prioritisation",
      "Pilot development & deployment",
      "Predictive analytics & automation",
    ],
  },
];

const assessmentScope = [
  { icon: <Settings2 className="h-4 w-4" />, label: "Operations and process review" },
  { icon: <Layers className="h-4 w-4" />, label: "Systems and integration landscape" },
  { icon: <Database className="h-4 w-4" />, label: "Data quality and accessibility audit" },
  { icon: <Sparkles className="h-4 w-4" />, label: "AI readiness evaluation" },
  { icon: <BarChart3 className="h-4 w-4" />, label: "KPI and reporting review" },
  { icon: <ClipboardCheck className="h-4 w-4" />, label: "ROI modelling on your actual data" },
];

const whatNext = [
  {
    no: "01",
    title: "You book a 20-minute call",
    desc: "No preparation needed. No obligation. Takes 30 seconds to book.",
  },
  {
    no: "02",
    title: "We confirm within 1 working day",
    desc: "You'll get a calendar confirmation and a brief agenda — you'll know exactly what to expect.",
  },
  {
    no: "03",
    title: "An honest conversation",
    desc: "We listen, tell you what we'd do, and say directly if we're not the right fit.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <SiteNav />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="ink-glow grain relative overflow-hidden bg-[var(--ink)] text-white">
          <div className="container-x pb-0 pt-20 sm:pt-28 lg:pt-44">
            <div className="max-w-4xl pb-14 sm:pb-20 lg:pb-28">
              <div className="hero-headline mb-5 flex flex-wrap gap-2">
                {["Digital Transformation", "AI Assessment", "Operational Excellence"].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/[0.12] px-3 py-1 text-xs text-white/45">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="hero-headline text-[2.2rem] leading-[1.08] sm:text-5xl md:text-[64px] lg:text-[76px]">
                We find what's broken.
                <br />
                <span className="text-white/30">Then we build the system that fixes it.</span>
              </h1>
              <p className="hero-sub mt-5 max-w-[520px] text-sm leading-relaxed text-white/50 sm:text-base sm:leading-[1.7] md:text-lg">
                UK businesses come to us when manual processes, disconnected systems, and missed AI opportunities are costing real money. We start with a structured assessment — then we build what actually needs building. Fixed fee. Senior-led. No hand-offs.
              </p>
              <div className="hero-cta mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                <a
                  href="https://yespstudio.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-all duration-200 hover:bg-white/92 hover:shadow-lg sm:justify-start"
                >
                  Talk to us — we'll tell you honestly if we can help
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 px-6 py-3.5 text-sm text-white/60 backdrop-blur-sm transition-all duration-200 hover:border-white/35 hover:text-white sm:justify-start"
                >
                  See all services
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-stats border-t border-white/[0.07]">
            <div className="container-x grid grid-cols-3">
              {[
                { stat: "2–3 wks", label: "Assessment to working prototype" },
                { stat: "6", label: "Deliverables incl. working prototype" },
                { stat: "100%", label: "Senior-led, no hand-offs" },
              ].map(({ stat, label }, i) => (
                <div
                  key={stat}
                  className={`px-5 py-6 md:px-8 ${i > 0 ? "border-l border-white/[0.07]" : ""}`}
                >
                  <div className="font-mono text-xl font-semibold tracking-tight sm:text-2xl">{stat}</div>
                  <div className="mt-1 text-xs text-white/30">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ─────────────────────────────────────────────── */}
        <section className="border-b border-border">
          <div className="container-x py-16 md:py-24">
            <div className="mb-12">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">What we deliver</p>
              <h2 className="text-3xl md:text-4xl">Three services. One connected programme.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.no}
                  className="group flex flex-col rounded-xl border border-border p-8 transition-all duration-200 hover:border-foreground/20 hover:shadow-md"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground/60">
                      {s.icon}
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{s.no}</span>
                  </div>
                  <h3 className="text-xl">{s.title}</h3>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">{s.tagline}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <ul className="mt-5 space-y-2 border-t border-border pt-5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <Check className="h-3.5 w-3.5 shrink-0 text-foreground/30" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 group-hover:gap-2.5"
                  >
                    Explore service <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Assessment feature ────────────────────────────────────── */}
        <section className="border-b border-[var(--ink-border)] bg-[var(--ink)] text-white">
          <div className="container-x py-16 md:py-24">
            <div className="mb-10 flex flex-wrap items-start justify-between gap-6">
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-white/35">Where every engagement starts</p>
                <h2 className="text-3xl sm:text-4xl">Transformation Assessment</h2>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/[0.12] px-4 py-2 text-sm text-white/40">
                <Clock className="h-4 w-4" />
                2–3 weeks · Fixed fee
              </div>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-base leading-relaxed text-white/55">
                  Before any transformation work begins, we need a complete picture. The assessment covers your operations, systems architecture, data quality, and AI readiness — and delivers six outputs your team can act on immediately.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {assessmentScope.map((item) => (
                    <div key={item.label} className="flex items-center gap-3 text-sm text-white/55">
                      <span className="shrink-0 text-white/25">{item.icon}</span>
                      {item.label}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                  <Link
                    to="/assessment"
                    className="inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-medium text-[var(--ink)] transition hover:bg-white/90"
                  >
                    See how the assessment works <ArrowUpRight className="h-4 w-4" />
                  </Link>
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

              <div>
                <div className="mb-8 rounded-lg border border-white/20 bg-white/[0.06] p-6">
                  <p className="text-xs font-mono uppercase tracking-[0.18em] text-white/40 mb-3">What makes this assessment different</p>
                  <p className="text-lg font-medium text-white leading-snug">
                    You leave with a working prototype — not just a slide deck.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    Built on your actual data. Ready to show your board. Included in the fixed fee.
                  </p>
                </div>
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white/35">Six deliverables included</p>
                <ol className="space-y-0">
                  {[
                    "Current State Assessment",
                    "Opportunity Register — prioritised by ROI",
                    "ROI Analysis",
                    "90-Day Transformation Roadmap",
                    "Executive Presentation",
                    "Working Prototype",
                  ].map((d, i) => (
                    <li key={d} className="flex items-baseline gap-4 border-b border-white/[0.07] py-4">
                      <span className="font-mono text-xs text-white/25 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-sm text-white/65">{d}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ── Engagement model ──────────────────────────────────────── */}
        <section className="border-b border-border bg-secondary/40">
          <div className="container-x py-14 md:py-20">
            <div className="mb-10 md:mb-14">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Engagement model</p>
              <h2 className="text-3xl">How a typical engagement works.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  no: "01",
                  label: "Assess",
                  duration: "2–3 weeks",
                  badge: "Start here",
                  price: "Fixed fee",
                  desc: "Complete review of your operations, systems, data, and AI readiness. Six deliverables. A full picture before any further commitment.",
                },
                {
                  no: "02",
                  label: "Transform",
                  duration: "8–24 weeks",
                  badge: null,
                  price: "Project-based",
                  desc: "Implement the highest-priority opportunities from Phase 1 — process redesign, digital integration, AI deployment.",
                },
                {
                  no: "03",
                  label: "Optimise",
                  duration: "Ongoing",
                  badge: null,
                  price: "Monthly retainer",
                  desc: "Continuous improvement, monthly performance reviews, and strategic partnership as your business grows.",
                },
              ].map((phase) => (
                <div key={phase.no} className="relative rounded-xl border border-border bg-white p-8">
                  {phase.badge && (
                    <div className="absolute -top-3 left-6">
                      <span className="rounded-full bg-[var(--ink)] px-3 py-1 text-[11px] font-medium text-white">
                        {phase.badge}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">{phase.no}</span>
                    <span className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                      {phase.price}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl">{phase.label}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{phase.duration}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why different ─────────────────────────────────────────── */}
        <section className="border-b border-border">
          <div className="container-x py-14 md:py-20">
            <div className="grid gap-10 md:gap-16 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Our difference</p>
                <h2 className="text-3xl">Not theory. Delivered outcomes.</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Every recommendation comes from evidence in your business — not benchmarks from someone else's. Senior people scope the engagement, senior people deliver it.
                </p>
                <Link to="/why-yesp" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium hover:gap-2.5 transition-all duration-200">
                  Why Yesp <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
                {[
                  { icon: <Zap className="h-4 w-4" />, title: "Diagnosis first", desc: "We never recommend a solution before understanding the problem. The assessment is non-negotiable." },
                  { icon: <BarChart3 className="h-4 w-4" />, title: "ROI before commitment", desc: "Phase 2 scope is built from Phase 1 findings. Every initiative has a clear ROI case before work begins." },
                  { icon: <Check className="h-4 w-4" />, title: "Senior delivery", desc: "No bait-and-switch. The people who scope are the people who deliver — no hand-offs after signing." },
                  { icon: <Database className="h-4 w-4" />, title: "Vendor neutral", desc: "No software commissions. We recommend what's best for your business, not what earns us a margin." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground/50">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonials ──────────────────────────────────────────── */}
        <section className="border-b border-border">
          <div className="container-x py-14 md:py-20">
            <div className="mb-10">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">What clients say</p>
              <h2 className="text-3xl">Results that speak for themselves.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  quote: "We'd been talking about fixing our reporting for two years. Yesp mapped the problem in a week, had a working prototype in front of our board in three, and we recovered 14 hours a week of management time within 60 days of implementation.",
                  name: "Operations Director",
                  company: "UK Logistics & Fulfilment, 180 employees",
                },
                {
                  quote: "The assessment was the most useful single investment we made in the business last year. We went in thinking we had a technology problem. We came out understanding we had a process problem — and a clear plan to fix it. The ROI model alone was worth the fee.",
                  name: "CEO",
                  company: "UK Manufacturing, 120 employees",
                },
                {
                  quote: "What set Yesp apart was the honesty. They told us two of the three AI use cases we wanted to pursue weren't viable yet with our current data — and showed us exactly what needed to change first. That kind of candour is rare.",
                  name: "Head of Technology",
                  company: "UK Professional Services, 95 employees",
                },
              ].map((t) => (
                <div key={t.name} className="flex flex-col rounded-xl border border-border bg-white p-8">
                  <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    "{t.quote}"
                  </blockquote>
                  <div className="mt-6 border-t border-border pt-5">
                    <p className="text-sm font-medium text-foreground">{t.name}</p>
                    <p className="mt-0.5 font-mono text-xs text-muted-foreground">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Industries strip ──────────────────────────────────────── */}
        <section className="border-b border-border">
          <div className="container-x py-8 md:py-12">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Industries we serve</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["Logistics & Fulfilment", "Manufacturing", "Distribution", "Retail", "Supply Chain", "Professional Services"].map(
                  (ind) => (
                    <Link
                      key={ind}
                      to="/industries"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {ind}
                    </Link>
                  )
                )}
              </div>
              <Link
                to="/industries"
                className="hidden lg:inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                View all <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Research ─────────────────────────────────────────────── */}
        <section className="border-b border-border bg-secondary/40">
          <div className="container-x py-14 md:py-20">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Field evidence</p>
                <h2 className="text-3xl">We publish what we find in the field.</h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  The 1,040 hrs report and the AI Readiness Foundation Gap report are both drawn from direct client work — not surveys or secondary data.
                </p>
              </div>
              <Link to="/research" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                All research <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  to: "/research/hidden-cost-of-operational-reporting",
                  tag: "Operational Excellence",
                  stat: "1,040 hrs",
                  title: "The Hidden Cost of Operational Reporting in UK SMEs",
                  desc: "Why manual reporting consumes more than six months of full-time work every year — and how to reverse it.",
                },
                {
                  to: "/research/ai-readiness-foundation-gap",
                  tag: "AI Transformation",
                  stat: "73%",
                  title: "AI Readiness in UK Mid-Market: The Foundation Gap",
                  desc: "Most UK businesses attempting AI fail at the foundation layer — not the technology layer.",
                },
              ].map((r) => (
                <Link key={r.to} to={r.to} className="research-card group block rounded-xl border border-border bg-white p-8">
                  <p className="font-mono text-xs text-muted-foreground">{r.tag}</p>
                  <p className="mt-4 font-mono text-4xl font-semibold tracking-tight">{r.stat}</p>
                  <h3 className="mt-4 text-xl leading-snug">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                  <p className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                    Read report{" "}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Blog teaser ──────────────────────────────────────────── */}
        <section className="border-b border-border">
          <div className="container-x py-14 md:py-20">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">From the field</p>
                <h2 className="text-3xl">Insights.</h2>
              </div>
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                All articles <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="divide-y divide-border">
              {[
                {
                  to: "/blog/the-reporting-tax",
                  tag: "Operational Excellence",
                  title: "The Reporting Tax: Why UK SMEs Are Paying 1,040 Hours a Year Without Realising It",
                  date: "June 2026",
                },
                {
                  to: "/blog/why-ai-projects-fail",
                  tag: "AI Transformation",
                  title: "Why Most UK AI Projects Fail — And It Has Nothing to Do With the Technology",
                  date: "May 2026",
                },
                {
                  to: "/blog/five-digital-transformation-mistakes",
                  tag: "Digital Transformation",
                  title: "Five Digital Transformation Mistakes UK Mid-Market Businesses Keep Making",
                  date: "April 2026",
                },
              ].map((post) => (
                <Link
                  key={post.to}
                  to={post.to}
                  className="group flex items-center justify-between gap-8 py-5 first:pt-0 last:pb-0"
                >
                  <div className="flex items-start gap-6 min-w-0">
                    <span className="hidden shrink-0 font-mono text-xs text-muted-foreground sm:block">{post.tag}</span>
                    <p className="text-sm font-medium leading-snug transition-colors group-hover:text-foreground/60 md:text-base">
                      {post.title}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <span className="hidden font-mono text-xs text-muted-foreground md:block">{post.date}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="ink-glow grain relative overflow-hidden bg-[var(--ink)] text-white">
          <div className="container-x py-16 sm:py-20 lg:py-28">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

              {/* Left: CTA */}
              <div>
                <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-white/30">Get started</p>
                <h2 className="text-4xl leading-tight md:text-5xl">
                  Ready to see what's possible?
                </h2>
                <p className="mt-5 max-w-sm text-base leading-relaxed text-white/45">
                  Mon–Fri, 09:00–17:30 (UK). No preparation needed. No obligation.
                </p>
                <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                  <a
                    href="https://yespstudio.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-all duration-200 hover:bg-white/92 hover:shadow-lg"
                  >
                    Talk to us — we'll tell you honestly if we can help
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

              </div>

              {/* Right: What happens next */}
              <div className="lg:pt-10">
                <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-white/35">
                  What happens after you book
                </p>
                <div className="space-y-0">
                  {whatNext.map((step) => (
                    <div
                      key={step.no}
                      className="flex gap-5 border-b border-white/[0.06] py-5 last:border-0"
                    >
                      <span className="mt-0.5 w-5 shrink-0 font-mono text-xs text-white/20">
                        {step.no}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-white/80">{step.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-white/35">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-2">
                  <Link
                    to="/assessment"
                    className="inline-flex items-center gap-1.5 text-xs text-white/35 transition-colors hover:text-white/60"
                  >
                    Or read about the assessment first <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
