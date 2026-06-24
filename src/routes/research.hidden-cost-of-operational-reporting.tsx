import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

const report001Schema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://yesp.uk/research/hidden-cost-of-operational-reporting#article",
      headline: "The Hidden Cost of Operational Reporting in UK SMEs",
      description: "How manual reporting consumes more than six months of full-time work every year — and how UK SMEs can recover that cost through Operational Excellence, Digital Transformation, and AI.",
      url: "https://yesp.uk/research/hidden-cost-of-operational-reporting",
      image: "https://yesp.uk/api/og?title=The+Hidden+Cost+of+Operational+Reporting&description=Why+manual+reporting+costs+UK+SMEs+over+1%2C040+hours+a+year+%E2%80%94+and+how+to+fix+it.&tag=Research",
      author: { "@id": "https://yesp.uk/#organization" },
      publisher: { "@id": "https://yesp.uk/#organization" },
      datePublished: "2026-01-01",
      dateModified: "2026-06-24",
      inLanguage: "en-GB",
      about: [
        { "@type": "Thing", name: "Operational Reporting" },
        { "@type": "Thing", name: "UK SME Operations" },
        { "@type": "Thing", name: "Business Process Improvement" },
        { "@type": "Thing", name: "Reporting Automation" },
      ],
      keywords: "operational reporting UK, manual reporting costs, SME operations, reporting automation, UK business efficiency, 1040 hours reporting",
      isPartOf: { "@id": "https://yesp.uk/#website" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://yesp.uk/" },
        { "@type": "ListItem", position: 2, name: "Research", item: "https://yesp.uk/research" },
        { "@type": "ListItem", position: 3, name: "The Hidden Cost of Operational Reporting", item: "https://yesp.uk/research/hidden-cost-of-operational-reporting" },
      ],
    },
  ],
});

export const Route = createFileRoute("/research/hidden-cost-of-operational-reporting")({
  head: () => ({
    meta: [
      {
        title:
          "Research 001 — The Hidden Cost of Operational Reporting in UK SMEs | Yesp Labs",
      },
      {
        name: "description",
        content:
          "How manual reporting consumes more than six months of full-time work every year — and how UK SMEs can recover that cost through Operational Excellence, Digital Transformation, and AI.",
      },
      { name: "keywords", content: "operational reporting UK, manual reporting costs SME, reporting automation UK, business efficiency, hidden cost reporting, 1040 hours" },
      {
        property: "og:title",
        content: "The Hidden Cost of Operational Reporting in UK SMEs",
      },
      {
        property: "og:description",
        content:
          "Field research: manual reporting consumes 1,040+ hours per year in a typical UK SME — more than six months of full-time work. Drawn from direct client work, not surveys.",
      },
      { property: "og:url", content: "https://yesp.uk/research/hidden-cost-of-operational-reporting" },
      { property: "og:image", content: "https://yesp.uk/api/og?title=The+Hidden+Cost+of+Operational+Reporting&description=Why+manual+reporting+costs+UK+SMEs+over+1%2C040+hours+a+year+%E2%80%94+and+how+to+fix+it.&tag=Research" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://yesp.uk/api/og?title=The+Hidden+Cost+of+Operational+Reporting&description=Why+manual+reporting+costs+UK+SMEs+over+1%2C040+hours+a+year+%E2%80%94+and+how+to+fix+it.&tag=Research" },
      { "script:ld+json": report001Schema },
    ],
    links: [{ rel: "canonical", href: "https://yesp.uk/research/hidden-cost-of-operational-reporting" }],
  }),
  component: Research001,
});

function Section({
  title,
  children,
  kicker,
}: {
  title: string;
  children: React.ReactNode;
  kicker?: string;
}) {
  return (
    <section className="border-t border-border py-16">
      {kicker && (
        <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
          {kicker}
        </p>
      )}
      <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      <div className="mt-8 max-w-3xl space-y-5 text-[15px] leading-7 text-[var(--foreground)]/85">
        {children}
      </div>
    </section>
  );
}

function Finding({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="border border-border p-6">
      <div className="text-xs uppercase tracking-[0.22em] text-[var(--brand)]">
        Finding {n}
      </div>
      <h3 className="mt-3 text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">{body}</p>
    </div>
  );
}

function Research001() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <section className="ink-glow grain relative overflow-hidden border-b border-[var(--ink-border)] bg-[var(--ink)] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/50">
            <span>Research Report 001</span>
            <span className="h-px w-8 bg-white/30" />
            <span>Yesp Labs</span>
            <span className="h-px w-8 bg-white/30" />
            <span>Operational Excellence</span>
          </div>
          <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            The Hidden Cost of Operational Reporting in{" "}
            <span className="text-white/40">UK SMEs.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            Thousands of UK businesses rely on reporting to make decisions. Behind every
            report is a hidden process consuming valuable time, resources, and management
            attention. This research explores the true cost.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-4">
            {[
              { k: "1,040", v: "Hours Per Year" },
              { k: "130", v: "Working Days" },
              { k: "26", v: "Full Working Weeks" },
              { k: "6+ mo", v: "Of Full-Time Effort" },
            ].map((m) => (
              <div key={m.v} className="bg-[var(--ink)] p-6">
                <div className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {m.k}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/60">
                  {m.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="container-x">
        <Section title="Executive Summary" kicker="Overview">
          <p>
            Across the UK, thousands of growing businesses rely on reporting to monitor
            performance, measure progress, and make decisions. Yet behind every report is
            often a hidden process consuming valuable time, resources, and management
            attention.
          </p>
          <p>
            In many organisations, reporting remains largely manual. Data is collected
            from multiple systems, copied into spreadsheets, reviewed by different teams,
            and consolidated into management reports. While this process may appear
            manageable, it creates a significant operational burden that increases as the
            business grows.
          </p>
          <p>
            This research explores the true cost of operational reporting, the challenges
            businesses face, and the opportunities available through Operational
            Excellence, Digital Transformation, and AI Transformation.
          </p>
        </Section>

        <Section title="Why This Research Matters" kicker="Context">
          <p>Most businesses measure sales. Many measure profitability.</p>
          <p>Few measure the operational cost of producing information.</p>
          <p>
            Leadership teams often know how much they spend on people, software,
            facilities, and marketing. Very few know:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>How many hours are spent creating reports.</li>
            <li>How much duplication exists across departments.</li>
            <li>How much decision-making is delayed because information arrives too late.</li>
            <li>How many operational issues remain hidden due to poor visibility.</li>
          </ul>
          <p>
            The result is a hidden operational cost that impacts productivity,
            profitability, and growth.
          </p>
        </Section>

        <Section title="The Modern Reporting Problem" kicker="Problem">
          <p>
            As organisations grow, so does complexity. New systems are introduced. New
            teams are created. New customers require additional reporting. New managers
            request more information.
          </p>
          <p>
            Over time, reporting evolves from a simple activity into a business process
            of its own. Unfortunately, most reporting processes are never intentionally
            designed — they develop organically. What begins as a simple spreadsheet
            eventually becomes a collection of disconnected reports maintained by
            multiple people across different departments.
          </p>
        </Section>

        <Section title="How Reporting Typically Works" kicker="Today">
          <p>In a typical organisation, information exists across multiple systems:</p>
          <div className="grid grid-cols-1 border border-border sm:grid-cols-2">
            {[
              ["Customer Data", "Stored inside CRM platforms."],
              ["Financial Data", "Stored inside accounting software."],
              ["Operational Data", "Stored inside ERP or operational systems."],
              ["Project Data", "Stored in project management platforms."],
              ["Team Data", "Stored inside spreadsheets and shared documents."],
            ].map(([t, d], i) => (
              <div
                key={t}
                className={`p-5 ${i > 0 ? "border-t border-border sm:border-t-0" : ""} ${i % 2 === 1 ? "sm:border-l sm:border-border" : ""} ${i >= 2 ? "sm:border-t sm:border-border" : ""}`}
              >
                <div className="text-sm font-semibold">{t}</div>
                <div className="mt-1 text-sm text-[var(--muted-foreground)]">{d}</div>
              </div>
            ))}
          </div>
          <p>
            When leadership requests a report, information must often be gathered from
            multiple sources before it can be analysed. This creates significant
            inefficiencies.
          </p>
        </Section>

        <Section title="The Reporting Lifecycle" kicker="Process">
          <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-5">
            {[
              ["1", "Data Collection", "Data is exported from various systems."],
              ["2", "Data Cleaning", "Incorrect or duplicated information is corrected."],
              ["3", "Consolidation", "Data is merged into a single format."],
              ["4", "Validation", "Managers verify accuracy."],
              ["5", "Presentation", "Insights are presented to decision-makers."],
            ].map(([n, t, d]) => (
              <div key={n} className="bg-background p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-[var(--brand)]">
                  Stage {n}
                </div>
                <div className="mt-2 text-sm font-semibold">{t}</div>
                <div className="mt-1 text-xs text-[var(--muted-foreground)]">{d}</div>
              </div>
            ))}
          </div>
          <p>
            Most effort is spent <em>before</em> analysis even begins. The majority of
            reporting time is consumed simply preparing information.
          </p>
        </Section>

        <Section title="The Real Cost of Manual Reporting" kicker="Calculation">
          <div className="border border-border bg-secondary p-8">
            <p className="text-sm text-[var(--muted-foreground)]">Consider a business with:</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>• 5 department managers</li>
              <li>• 4 hours per week spent preparing reports</li>
            </ul>
            <div className="mt-6 border-t border-border pt-6 font-mono text-sm">
              5 × 4 × 52 = <span className="text-2xl font-semibold">1,040 hours</span> annually
            </div>
            <div className="mt-4 text-sm text-[var(--muted-foreground)]">
              = 130 working days ≈ 26 full working weeks. That is more than six months of
              full-time work every year — and only counts managers directly involved.
            </div>
          </div>
        </Section>

        <Section title="The Visibility Gap" kicker="Insight">
          <p>
            Many organisations believe they have visibility because reports exist. However,
            visibility and reporting are not the same thing.
          </p>
          <div className="grid grid-cols-1 border border-border md:grid-cols-2">
            <div className="p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                Reporting
              </div>
              <div className="mt-2 text-lg font-semibold">tells you what happened.</div>
            </div>
            <div className="border-t border-border p-6 md:border-l md:border-t-0">
              <div className="text-xs uppercase tracking-[0.18em] text-[var(--brand)]">
                Visibility
              </div>
              <div className="mt-2 text-lg font-semibold">
                helps you understand what is happening.
              </div>
            </div>
          </div>
          <p>
            By the time a monthly report identifies a problem, revenue may already be
            lost, customers may already be dissatisfied, and costs may already have
            increased.
          </p>
        </Section>

        <Section title="Common Reporting Challenges" kicker="Patterns">
          <div className="space-y-4">
            {[
              {
                t: "Data Silos",
                d: "Finance, Operations, Sales, and Customer Service maintain separate systems. Leadership lacks a unified view of performance.",
              },
              {
                t: "Spreadsheet Dependency",
                d: "Version control issues, human error, duplicate effort, and limited scalability. As businesses grow, spreadsheet-based reporting becomes harder to manage.",
              },
              {
                t: "Inconsistent Metrics",
                d: "Different teams calculate performance differently. Without standardisation, reports create confusion rather than clarity.",
              },
              {
                t: "Delayed Information",
                d: "Information loses value over time. Delayed reports mean delayed decisions, missed opportunities, and hidden risks.",
              },
            ].map((c) => (
              <div key={c.t} className="border border-border p-5">
                <div className="text-sm font-semibold">{c.t}</div>
                <div className="mt-2 text-sm text-[var(--muted-foreground)]">{c.d}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Research Findings" kicker="Findings">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Finding
              n="01"
              title="Most reporting work is not reporting"
              body="The majority of time is spent gathering and preparing information rather than analysing it. Organisations underestimate this effort because it is distributed across multiple employees."
            />
            <Finding
              n="02"
              title="Complexity grows faster than revenue"
              body="As businesses scale, reporting requirements increase exponentially. Without process improvements, reporting complexity outpaces operational capacity."
            />
            <Finding
              n="03"
              title="Decision-making is often delayed"
              body="Leadership teams cannot act on information they do not have. Delayed reporting leads to delayed action — and operational risk."
            />
            <Finding
              n="04"
              title="Visibility creates competitive advantage"
              body="Organisations with stronger operational visibility consistently make faster, more informed decisions across resource allocation, customer experience, cost control, and strategy."
            />
          </div>
        </Section>

        <Section title="The Role of Operational Excellence, Digital & AI" kicker="Solution">
          <div className="grid grid-cols-1 border border-border md:grid-cols-3">
            {[
              {
                t: "Operational Excellence",
                items: [
                  "Standardising processes across departments",
                  "Defining clear KPIs",
                  "Eliminating reporting waste",
                  "Establishing data ownership",
                ],
              },
              {
                t: "Digital Transformation",
                items: [
                  "System integration",
                  "Data centralisation — a single source of truth",
                  "Reporting automation",
                  "Real-time dashboards",
                ],
              },
              {
                t: "AI Transformation",
                items: [
                  "Predictive insights",
                  "Intelligent alerts",
                  "Decision support",
                  "Forecasting & planning",
                ],
              },
            ].map((c, i) => (
              <div
                key={c.t}
                className={`p-6 ${i > 0 ? "border-t border-border md:border-l md:border-t-0" : ""}`}
              >
                <div className="text-base font-semibold">{c.t}</div>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted-foreground)]">
                  {c.items.map((x) => (
                    <li key={x}>• {x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p>
            AI should not replace operational foundations — it should enhance them. Once
            operational visibility exists, AI compounds its value.
          </p>
        </Section>

        <Section title="Key Recommendations" kicker="Action">
          <div className="space-y-3">
            {[
              ["01", "Understand current reporting costs", "Measure time spent creating reports."],
              ["02", "Eliminate duplicate activities", "Identify repeated manual tasks."],
              ["03", "Standardise performance metrics", "Create a shared understanding of success."],
              ["04", "Improve data accessibility", "Reduce dependency on manual extraction."],
              ["05", "Build operational visibility", "Move from historical reporting to real-time insight."],
            ].map(([n, t, d]) => (
              <div key={n} className="flex items-start gap-6 border border-border p-5">
                <div className="w-10 text-lg font-semibold text-[var(--brand)]">{n}</div>
                <div>
                  <div className="text-sm font-semibold">{t}</div>
                  <div className="mt-1 text-sm text-[var(--muted-foreground)]">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Conclusion" kicker="Closing">
          <p>Reporting should support decisions. It should not consume the resources needed to make them.</p>
          <p>
            The most successful organisations are not those producing the most reports —
            they are the organisations that can access accurate information quickly,
            confidently, and consistently.
          </p>
          <p>
            Operational Excellence, Digital Transformation, and AI Transformation are
            not separate initiatives. Together, they form the foundation of modern
            business performance.
          </p>
          <p className="text-base font-semibold text-foreground">
            The future belongs to organisations that can transform data into action.
          </p>
        </Section>
      </div>

      {/* CTA */}
      <section className="mt-12 border-t border-[var(--ink-border)] bg-[var(--ink)] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-white/50">About Yesp Labs</p>
          <h2 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
            Apply this research to your organisation.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
            Book a Transformation Assessment (£2,500) and receive an Operational, Digital
            and AI Readiness review, Opportunity Register, ROI Analysis, 90-Day Roadmap,
            and a working prototype demonstration.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/assessment"
              className="inline-flex items-center gap-3 border border-white bg-white px-6 py-4 text-sm font-medium text-[var(--ink)] hover:bg-white/90 transition-colors"
            >
              Book Transformation Assessment
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/research"
              className="inline-flex items-center gap-3 border border-white/30 px-6 py-4 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              Explore more research
            </Link>
          </div>
        </div>
      </section>

      {/* Previous / Next */}
      <div className="border-t border-border bg-secondary">
        <div className="container-x py-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <Link
              to="/research"
              className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowUpRight className="h-4 w-4 rotate-[225deg] transition-transform group-hover:-translate-x-0.5" />
              All research
            </Link>
            <Link
              to="/research/ai-readiness-foundation-gap"
              className="group flex items-center gap-3 text-sm font-medium hover:text-[var(--brand)]"
            >
              Next: Report 002 — AI Readiness in UK Mid-Market Operations
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}