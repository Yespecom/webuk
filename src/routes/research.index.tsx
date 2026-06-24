import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/research/")({
  head: () => ({
    meta: [
      {
        title: "Yesp Labs | Research on UK Operational Performance, Digital & AI Transformation",
      },
      {
        name: "description",
        content:
          "Independent research from Yesp Labs on operational reporting costs, AI readiness, digital maturity and transformation ROI in UK mid-market businesses.",
      },
      {
        name: "keywords",
        content:
          "operational research UK, AI readiness report, digital transformation research UK, SME operations study, UK business performance research",
      },
      { property: "og:title", content: "Yesp Labs — Research on UK Operational Performance" },
      {
        property: "og:description",
        content:
          "Research that helps UK business leaders understand emerging challenges and act on real opportunities.",
      },
      { property: "og:url", content: "https://yesp.uk/research" },
      { property: "og:image", content: "https://yesp.uk/api/og?title=Yesp+Labs+Research&description=Evidence-based+research+on+UK+operational+performance%2C+AI+readiness+%26+digital+transformation.&tag=Research" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://yesp.uk/api/og?title=Yesp+Labs+Research&description=Evidence-based+research+on+UK+operational+performance%2C+AI+readiness+%26+digital+transformation.&tag=Research" },
    ],
    links: [{ rel: "canonical", href: "https://yesp.uk/research" }],
  }),
  component: ResearchIndex,
});

const published = [
  {
    slug: "hidden-cost-of-operational-reporting",
    to: "/research/hidden-cost-of-operational-reporting",
    tag: "Operational Excellence",
    year: "2026",
    title: "The Hidden Cost of Operational Reporting in UK SMEs",
    summary:
      "Why manual reporting consumes more than six months of full-time work every year — and how Operational Excellence, Digital Transformation, and AI Transformation reverse it.",
    stat: { value: "1,040", label: "hours lost per year" },
  },
  {
    slug: "ai-readiness-foundation-gap",
    to: "/research/ai-readiness-foundation-gap",
    tag: "AI Transformation",
    year: "2026",
    title: "AI Readiness in UK Mid-Market Operations: The Foundation Gap",
    summary:
      "Most UK businesses attempting AI transformation fail at the foundation layer — not the technology layer. This report reveals why and what to fix first.",
    stat: { value: "73%", label: "lack data foundations" },
  },
];

const upcoming = [
  {
    tag: "Digital Transformation",
    eta: "Q3 2026",
    title: "The £47,000 Spreadsheet: How Manual Data Entry Erodes UK Productivity",
    summary:
      "A deep look at the true labour cost of spreadsheet dependency in UK distribution, logistics and manufacturing businesses.",
  },
  {
    tag: "Operational Excellence",
    eta: "Q3 2026",
    title: "Data Silos and the Visibility Gap in UK Mid-Market Operations",
    summary:
      "How fragmented systems limit decision-making — and what a single source of operational truth looks like in practice.",
  },
  {
    tag: "Digital Transformation",
    eta: "Q4 2026",
    title: "Process Maturity in UK Logistics & Distribution: A Benchmark Study",
    summary:
      "Industry benchmarks on process standardisation, automation adoption and operational KPI frameworks across 50+ UK businesses.",
  },
];

const researchAreas = [
  {
    area: "Operational Excellence",
    desc: "Process efficiency, waste elimination, KPI frameworks and performance management across UK mid-market businesses.",
    reports: 2,
    live: 1,
  },
  {
    area: "Digital Transformation",
    desc: "System integration, automation adoption, data centralisation and the shift from manual to digital operations.",
    reports: 2,
    live: 0,
  },
  {
    area: "AI Transformation",
    desc: "AI readiness foundations, data quality, predictive analytics and AI ROI in UK business operations.",
    reports: 1,
    live: 1,
  },
  {
    area: "Industry Benchmarks",
    desc: "Cross-sector comparisons of operational maturity, digital adoption and transformation outcomes.",
    reports: 0,
    live: 0,
  },
];

function ResearchIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        {/* Hero */}
        <section className="ink-glow grain relative overflow-hidden border-b border-[var(--ink-border)] bg-[var(--ink)] text-white">
          <div className="container-x py-28 lg:py-36">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/40">
              <span>Yesp Labs</span>
              <span className="h-px w-6 bg-white/20" />
              <span>Independent Research</span>
            </div>
            <h1 className="mt-8 max-w-4xl text-5xl leading-[1.02] md:text-6xl lg:text-7xl">
              Research on the future of{" "}
              <span className="text-white/35">operational performance.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65">
              Evidence-based research exploring operational reporting, AI readiness, digital
              transformation and process maturity in UK mid-market businesses.
            </p>
          </div>

          {/* Stats strip */}
          <div className="border-t border-white/10">
            <div className="container-x">
              <div className="grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
                {[
                  { k: "5", v: "Active reports" },
                  { k: "2", v: "Published" },
                  { k: "3", v: "Research areas" },
                  { k: "UK", v: "Mid-market focus" },
                ].map((m) => (
                  <div key={m.v} className="px-8 py-7">
                    <div className="font-mono text-3xl font-semibold tracking-tight">{m.k}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Published reports — featured cards */}
        <section className="border-b border-border bg-background">
          <div className="container-x py-14 md:py-24">
            <div className="mb-10 flex items-baseline justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Published</p>
                <h2 className="mt-2 text-2xl tracking-tight md:text-3xl">Available now</h2>
              </div>
              <span className="text-sm text-muted-foreground">{published.length} reports</span>
            </div>

            <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
              {published.map((r) => (
                <Link
                  key={r.slug}
                  to={r.to}
                  className="group flex flex-col bg-background p-8 transition-colors hover:bg-secondary lg:p-10"
                >
                  {/* Tag + year */}
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-[var(--brand)]/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--brand)]">
                      {r.tag}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{r.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-2xl leading-snug tracking-tight md:text-3xl">
                    {r.title}
                  </h3>

                  {/* Summary */}
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.summary}</p>

                  {/* Stat + CTA */}
                  <div className="mt-8 flex items-end justify-between border-t border-border pt-6">
                    <div className="border border-border px-3 py-2">
                      <div className="font-mono text-2xl font-semibold tracking-tight">{r.stat.value}</div>
                      <div className="mt-0.5 text-xs text-muted-foreground">{r.stat.label}</div>
                    </div>
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand)]">
                      Read report
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming reports */}
        <section className="border-b border-border bg-secondary">
          <div className="container-x py-14 md:py-24">
            <div className="mb-10 flex items-baseline justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">In progress</p>
                <h2 className="mt-2 text-2xl tracking-tight md:text-3xl">Coming soon</h2>
              </div>
              <span className="text-sm text-muted-foreground">{upcoming.length} reports</span>
            </div>

            <div className="border border-border bg-background">
              {upcoming.map((r, i) => (
                <div
                  key={r.title}
                  className={`flex flex-col gap-4 p-6 md:flex-row md:items-start md:gap-10 ${i > 0 ? "border-t border-border" : ""}`}
                >
                  {/* Tag + eta */}
                  <div className="flex w-52 shrink-0 flex-col gap-2">
                    <span className="inline-block w-fit bg-muted px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {r.tag}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">Expected {r.eta}</span>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg tracking-tight">{r.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{r.summary}</p>
                  </div>
                  <div className="shrink-0 text-xs text-muted-foreground">Coming soon</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research areas */}
        <section className="border-b border-border bg-background">
          <div className="container-x py-14 md:py-24">
            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Coverage</p>
              <h2 className="mt-2 text-2xl tracking-tight md:text-3xl">Research areas</h2>
            </div>
            <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {researchAreas.map((a) => (
                <div key={a.area} className="flex flex-col bg-background p-6">
                  <h3 className="text-base font-medium">{a.area}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                  <div className="mt-auto pt-6 text-xs text-muted-foreground">
                    {a.live > 0
                      ? `${a.live} published · ${a.reports - a.live} in progress`
                      : a.reports > 0
                        ? `${a.reports} in progress`
                        : "Planned"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="border-b border-border bg-secondary">
          <div className="container-x py-14 md:py-24">
            <div className="grid gap-8 md:gap-16 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">Methodology</p>
                <h2 className="text-4xl leading-tight">
                  Research grounded in operational reality.
                </h2>
              </div>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-7">
                <p>
                  Yesp Labs research is drawn from direct engagement with UK mid-market businesses
                  across logistics, manufacturing, distribution, retail and professional services.
                </p>
                <p>
                  Our findings are not based on surveys or secondary data alone. They reflect the
                  operational patterns, challenges, and opportunities we observe across real
                  transformation programmes.
                </p>
                <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
                  {[
                    { k: "Primary", v: "Operational engagement data" },
                    { k: "Validated", v: "Cross-industry patterns" },
                    { k: "UK-focused", v: "Mid-market, 50–500 employees" },
                  ].map((m) => (
                    <div key={m.k} className="bg-background p-5">
                      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{m.k}</div>
                      <div className="mt-2 text-sm font-medium">{m.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ink-glow grain relative overflow-hidden bg-[var(--ink)] text-white">
          <div className="container-x py-14 md:py-24">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="mb-6 text-xs uppercase tracking-[0.22em] text-white/50">Apply this research</p>
                <h2 className="text-4xl leading-tight md:text-5xl">
                  See how these findings apply{" "}
                  <span className="text-white/40">to your business.</span>
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65">
                  Book a Transformation Assessment (£2,500) and receive an Operational, Digital and
                  AI Readiness review, Opportunity Register, ROI Analysis, 90-Day Roadmap, and a
                  working prototype demonstration.
                </p>
                <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                  <Link
                    to="/assessment"
                    className="inline-flex items-center gap-3 border border-white bg-white px-6 py-4 text-sm font-medium text-[var(--ink)] hover:bg-white/90 transition-colors"
                  >
                    Book Transformation Assessment — £2,500
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://yespstudio.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-white/30 px-6 py-4 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                  >
                    Talk to us first
                  </a>
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
