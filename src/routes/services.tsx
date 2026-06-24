import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Settings2, Layers, Sparkles, Check, TrendingUp, Zap, BarChart3, Database, Network, Cpu, Activity } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

const servicesSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://yesp.uk/services#webpage",
      url: "https://yesp.uk/services",
      name: "Digital Transformation, AI Assessment & Operational Excellence Services | Yesp UK",
      description: "Senior-led Digital Transformation, AI readiness assessment, and Operational Excellence for UK mid-market businesses. Fixed-fee assessment. No hand-offs.",
      isPartOf: { "@id": "https://yesp.uk/#website" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://yesp.uk/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://yesp.uk/services" },
        ],
      },
    },
    {
      "@type": "ItemList",
      name: "Yesp Transformation Services",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Service",
            name: "Operational Excellence",
            serviceType: "Operational Excellence Consultancy",
            description: "Process mapping, KPI frameworks, bottleneck elimination and reporting system builds for UK mid-market businesses. You leave with a working prototype, not a slide deck.",
            provider: { "@id": "https://yesp.uk/#organization" },
            areaServed: { "@type": "Country", name: "United Kingdom" },
            url: "https://yesp.uk/services",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Service",
            name: "Digital Transformation",
            serviceType: "Digital Transformation Consultancy",
            description: "System integration, workflow automation, data platform build and real-time BI for UK businesses. Connects disconnected systems and eliminates manual reporting.",
            provider: { "@id": "https://yesp.uk/#organization" },
            areaServed: { "@type": "Country", name: "United Kingdom" },
            url: "https://yesp.uk/services",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Service",
            name: "AI Transformation",
            serviceType: "AI Transformation Consultancy",
            description: "AI readiness assessment, use case identification and prioritisation, pilot development and deployment. Tied to agreed ROI metrics — not hype.",
            provider: { "@id": "https://yesp.uk/#organization" },
            areaServed: { "@type": "Country", name: "United Kingdom" },
            url: "https://yesp.uk/services",
          },
        },
      ],
    },
  ],
});

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Digital Transformation, AI Assessment & Operational Excellence Services | Yesp UK" },
      { name: "description", content: "Yesp delivers Digital Transformation, AI readiness assessment and Operational Excellence for UK businesses. Senior-led, outcome-focused, starting with a fixed-fee assessment. Working prototype included." },
      { name: "keywords", content: "digital transformation services UK, AI assessment consultancy UK, operational excellence UK, system integration UK, process improvement UK, AI readiness UK" },
      { property: "og:title", content: "Transformation Services | Yesp UK" },
      { property: "og:description", content: "Digital Transformation, AI Assessment and Operational Excellence for UK businesses. Senior-led. Fixed-fee assessment. Working prototype included." },
      { property: "og:url", content: "https://yesp.uk/services" },
      { property: "og:image", content: "https://yesp.uk/api/og?title=Transformation+Services&description=Digital+Transformation%2C+AI+Assessment+%26+Operational+Excellence.&tag=Services" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://yesp.uk/api/og?title=Transformation+Services&description=Digital+Transformation%2C+AI+Assessment+%26+Operational+Excellence.&tag=Services" },
      { name: "twitter:title", content: "Transformation Services | Yesp UK" },
      { "script:ld+json": servicesSchema },
    ],
    links: [{ rel: "canonical", href: "https://yesp.uk/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    no: "01",
    title: "Operational Excellence",
    tagline: "Eliminate waste. Recover capacity. Build for scale.",
    icon: Settings2,
    accentIcon: TrendingUp,
    desc: "Most businesses don't have a technology problem — they have a process problem. Before any system or AI investment makes sense, the underlying operations need to be understood, documented, and optimised.",
    whatWeDeliver: [
      { icon: <Activity className="h-4 w-4" />, step: "Operational Mapping", desc: "We document exactly how work gets done — surfacing inefficiencies and waste invisible from the top." },
      { icon: <BarChart3 className="h-4 w-4" />, step: "Bottleneck Analysis", desc: "Identify where throughput is constrained and where capacity is being consumed without return." },
      { icon: <TrendingUp className="h-4 w-4" />, step: "KPI Framework Design", desc: "Define the metrics tied to your actual objectives — not generic industry benchmarks." },
      { icon: <Settings2 className="h-4 w-4" />, step: "Process Redesign", desc: "Rebuild underperforming workflows and standardise what works, with full documentation." },
      { icon: <Check className="h-4 w-4" />, step: "Implementation Support", desc: "We embed change alongside your team — not just document it and leave." },
    ],
    outcomes: [
      "20–40% reduction in manual reporting effort",
      "Faster management decision cycles",
      "Clear KPI ownership across all functions",
      "Processes that scale without adding headcount",
      "Documented workflows your team can sustain",
    ],
  },
  {
    no: "02",
    title: "Digital Transformation",
    tagline: "Integrate your systems. Automate your workflows. See your business in real time.",
    icon: Layers,
    accentIcon: Network,
    desc: "Digital Transformation is not about buying software — it's about eliminating the manual effort that limits your business. We connect your systems, automate your workflows, and build the data foundation your leadership team needs to make faster decisions.",
    whatWeDeliver: [
      { icon: <Network className="h-4 w-4" />, step: "Systems Audit", desc: "Map your technology landscape — what integrates, what doesn't, and what's creating manual workarounds." },
      { icon: <Layers className="h-4 w-4" />, step: "Integration Design & Build", desc: "Design and implement the API connections that eliminate data silos and manual transfers." },
      { icon: <Zap className="h-4 w-4" />, step: "Workflow Automation", desc: "Automate the processes consuming the most time — approvals, reporting, data entry, scheduling." },
      { icon: <Database className="h-4 w-4" />, step: "Data Platform", desc: "Build your single source of truth for reporting, analytics, and future AI investment." },
      { icon: <BarChart3 className="h-4 w-4" />, step: "Dashboards & BI", desc: "Real-time operational visibility — replacing manual weekly packs with live data." },
    ],
    outcomes: [
      "Elimination of manual data transfers between systems",
      "Real-time operational reporting replacing manual packs",
      "Single source of truth for all business data",
      "Automated workflows replacing high-volume manual tasks",
      "Data foundation ready for AI investment",
    ],
  },
  {
    no: "03",
    title: "AI Transformation",
    tagline: "AI scoped to real outcomes. Built on solid foundations.",
    icon: Sparkles,
    accentIcon: Cpu,
    desc: "AI delivers value only when operational and data foundations are in place. We assess your readiness honestly, identify the applications with the clearest ROI, and deploy AI capabilities tied to agreed success metrics — not demos.",
    whatWeDeliver: [
      { icon: <Sparkles className="h-4 w-4" />, step: "AI Readiness Review", desc: "Assess data quality, process standardisation and integration readiness against our maturity model." },
      { icon: <BarChart3 className="h-4 w-4" />, step: "Opportunity Identification", desc: "Find the AI applications with the highest ROI for your specific business and data." },
      { icon: <Database className="h-4 w-4" />, step: "Foundation Preparation", desc: "Address data and process gaps before deployment. Skipping this is why AI programmes fail." },
      { icon: <Cpu className="h-4 w-4" />, step: "Pilot Development & Deployment", desc: "Build a targeted AI pilot against agreed success metrics before broader rollout." },
      { icon: <TrendingUp className="h-4 w-4" />, step: "Measure, Optimise & Expand", desc: "Validate outcomes, improve the model, and identify the next use case." },
    ],
    outcomes: [
      "AI initiatives scoped against measurable business outcomes",
      "Predictive analytics replacing reactive reporting",
      "Automated decision support for operations and planning",
      "AI ROI validated before broader rollout",
      "AI capability your team can own and grow",
    ],
  },
];

const faqs = [
  { q: "Do we have to start with the assessment?", a: "Yes — and for good reason. Businesses that skip it consistently achieve worse outcomes. The assessment ensures every recommendation comes from your operational reality, not generic assumptions." },
  { q: "Can you implement just one service?", a: "Yes. Each can be delivered independently. But the disciplines reinforce each other: Operational Excellence creates the foundation for Digital, which creates the foundation for AI." },
  { q: "How long does a typical engagement take?", a: "Phase 1 takes 2–3 weeks. Phase 2 typically runs 8–24 weeks depending on scope. We define the timeline from assessment findings, not upfront estimates." },
  { q: "Do you work outside the UK?", a: "Our primary focus is UK businesses with 30–500 employees. We understand UK market conditions, regulatory environment, and the specific constraints of UK mid-market operations." },
  { q: "What does senior-led delivery actually mean?", a: "The senior consultants who scope your engagement are the people who deliver it. No handoffs to junior staff once the contract is signed. You deal with the same people throughout." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <SiteNav />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="ink-glow grain relative overflow-hidden bg-[var(--ink)] text-white">
          <div className="container-x py-14 sm:py-20 lg:py-32">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-white/40">Services</p>
            <h1 className="max-w-3xl text-[2.15rem] leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Digital Transformation,<br />AI & Operational Excellence.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/55">
              Three connected services. Each can stand alone — but together they form a complete transformation capability for your business.
            </p>
            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
              <Link to="/assessment" className="inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-medium text-[var(--ink)] transition hover:bg-white/90">
                Start with Assessment <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href="https://yespstudio.com/contact" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 text-sm text-white/70 transition hover:border-white/40 hover:text-white">
                Talk to us first
              </a>
            </div>
          </div>

          {/* Service quick-links */}
          <div className="border-t border-white/[0.07]">
            <div className="container-x">
              <div className="grid grid-cols-3">
                {[
                  { no: "01", label: "Operational Excellence", icon: <Settings2 className="h-4 w-4" /> },
                  { no: "02", label: "Digital Transformation", icon: <Layers className="h-4 w-4" /> },
                  { no: "03", label: "AI Transformation", icon: <Sparkles className="h-4 w-4" /> },
                ].map((s, i) => (
                  <div key={s.no} className={`px-5 py-5 md:px-8 ${i > 0 ? "border-l border-white/[0.07]" : ""}`}>
                    <div className="mb-2 text-white/30">{s.icon}</div>
                    <div className="font-mono text-[11px] text-white/25">{s.no}</div>
                    <div className="mt-0.5 text-xs text-white/50 sm:text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Service sections ──────────────────────────────────────── */}
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <section key={s.no} className={`border-b border-border ${i % 2 === 1 ? "bg-secondary/40" : "bg-white"}`}>
              <div className="container-x py-14 md:py-20">

                {/* Service header */}
                <div className="mb-10 flex flex-wrap items-start gap-6 pb-8 border-b border-border md:mb-12">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--ink)] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs text-muted-foreground">{s.no}</span>
                      <h2 className="text-2xl md:text-3xl">{s.title}</h2>
                    </div>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">{s.tagline}</p>
                  </div>
                </div>

                <div className="grid gap-10 md:gap-16 lg:grid-cols-12">
                  {/* Left — description + outcomes */}
                  <div className="lg:col-span-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    <div className="mt-8 rounded-xl border border-border p-6">
                      <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Outcomes</p>
                      <ul className="space-y-2.5">
                        {s.outcomes.map((o) => (
                          <li key={o} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground/35" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right — how it works */}
                  <div className="lg:col-span-8">
                    <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">How it works</p>
                    <div className="space-y-0">
                      {s.whatWeDeliver.map((h, j) => (
                        <div key={h.step} className={`flex gap-5 py-5 ${j > 0 ? "border-t border-border" : ""}`}>
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground/50">
                            {h.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-3">
                              <span className="font-mono text-[11px] text-muted-foreground">{j + 1}</span>
                              <p className="text-sm font-medium">{h.step}</p>
                            </div>
                            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* ── Engagement model ──────────────────────────────────────── */}
        <section className="border-b border-border">
          <div className="container-x py-14 md:py-20">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">How we engage</p>
            <h2 className="mb-12 text-3xl md:text-4xl">Structured, phased, no surprises.</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { no: "01", title: "Assessment", cost: "Fixed fee", duration: "2–3 weeks", badge: "Always first", desc: "A complete picture of your operations, systems, data, and AI readiness before any further investment. Six deliverables guaranteed." },
                { no: "02", title: "Transform", cost: "Project-based", duration: "8–24 weeks", badge: null, desc: "Implementation of the highest-impact opportunities from Phase 1. Scope defined from assessment findings, not assumptions." },
                { no: "03", title: "Optimise", cost: "Monthly retainer", duration: "Ongoing", badge: null, desc: "Continuous improvement and strategic partnership as your business grows. Monthly reviews and new opportunity identification." },
              ].map((e) => (
                <div key={e.no} className="relative rounded-xl border border-border p-8">
                  {e.badge && (
                    <div className="absolute -top-3 left-6">
                      <span className="rounded-full bg-[var(--ink)] px-3 py-1 text-[11px] font-medium text-white">{e.badge}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">{e.no}</span>
                    <span className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground">{e.cost}</span>
                  </div>
                  <h3 className="mt-4 text-2xl">{e.title}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{e.duration}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="border-b border-border bg-secondary/40">
          <div className="container-x py-12 md:py-20">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Questions</p>
                <h2 className="text-3xl">Common questions.</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Not seeing your question? Book a call — Mon–Fri, 09:00–17:30 (UK). We're happy to discuss your situation before any commitment.
                </p>
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
              Not sure which service fits your business?
            </h2>
            <p className="mt-4 max-w-md text-base text-white/50">
              The Transformation Assessment identifies exactly where to focus — Operational Excellence, Digital, AI, or all three — before any further investment.
            </p>
            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
              <Link to="/assessment" className="inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-medium text-[var(--ink)] transition hover:bg-white/90">
                View Assessment <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href="https://yespstudio.com/contact" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 text-sm text-white/70 transition hover:border-white/40 hover:text-white">
                Talk to us first
              </a>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
