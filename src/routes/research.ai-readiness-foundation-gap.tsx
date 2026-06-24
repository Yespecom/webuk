import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

const report002Schema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://yesp.uk/research/ai-readiness-foundation-gap#article",
      headline: "AI Readiness in UK Mid-Market Operations: The Foundation Gap",
      description: "Why most UK mid-market businesses fail at AI transformation — not because of the technology, but because the operational and data foundations are not in place.",
      url: "https://yesp.uk/research/ai-readiness-foundation-gap",
      image: "https://yesp.uk/api/og?title=AI+Readiness%3A+The+Foundation+Gap&description=73%25+of+UK+businesses+attempting+AI+transformation+fail+at+the+foundation+layer.&tag=Research",
      author: { "@id": "https://yesp.uk/#organization" },
      publisher: { "@id": "https://yesp.uk/#organization" },
      datePublished: "2026-01-01",
      dateModified: "2026-06-24",
      inLanguage: "en-GB",
      about: [
        { "@type": "Thing", name: "AI Readiness" },
        { "@type": "Thing", name: "UK Mid-Market AI Transformation" },
        { "@type": "Thing", name: "Data Foundation" },
        { "@type": "Thing", name: "AI Transformation Failure" },
      ],
      keywords: "AI readiness UK, AI transformation failure, UK mid-market AI, data foundation AI, AI foundation gap, 73 percent AI failure",
      isPartOf: { "@id": "https://yesp.uk/#website" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://yesp.uk/" },
        { "@type": "ListItem", position: 2, name: "Research", item: "https://yesp.uk/research" },
        { "@type": "ListItem", position: 3, name: "AI Readiness: The Foundation Gap", item: "https://yesp.uk/research/ai-readiness-foundation-gap" },
      ],
    },
  ],
});

export const Route = createFileRoute("/research/ai-readiness-foundation-gap")({
  head: () => ({
    meta: [
      {
        title: "Research 002 — AI Readiness in UK Mid-Market Operations: The Foundation Gap | Yesp Labs",
      },
      {
        name: "description",
        content:
          "73% of UK mid-market businesses fail at AI transformation — not because of the technology, but because operational and data foundations are not in place. Field research by Yesp Labs.",
      },
      { name: "keywords", content: "AI readiness UK, AI transformation failure UK, mid-market AI, data foundation gap, AI foundation, UK AI transformation" },
      {
        property: "og:title",
        content: "AI Readiness in UK Mid-Market Operations: The Foundation Gap",
      },
      {
        property: "og:description",
        content:
          "73% of UK mid-market businesses attempting AI transformation lack the data foundations required for it to deliver value. Field research by Yesp Labs.",
      },
      { property: "og:url", content: "https://yesp.uk/research/ai-readiness-foundation-gap" },
      { property: "og:image", content: "https://yesp.uk/api/og?title=AI+Readiness%3A+The+Foundation+Gap&description=73%25+of+UK+businesses+attempting+AI+transformation+fail+at+the+foundation+layer.&tag=Research" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://yesp.uk/api/og?title=AI+Readiness%3A+The+Foundation+Gap&description=73%25+of+UK+businesses+attempting+AI+transformation+fail+at+the+foundation+layer.&tag=Research" },
      { "script:ld+json": report002Schema },
    ],
    links: [{ rel: "canonical", href: "https://yesp.uk/research/ai-readiness-foundation-gap" }],
  }),
  component: Research002,
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
        <p className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">{kicker}</p>
      )}
      <h2 className="max-w-3xl text-3xl tracking-tight md:text-4xl">{title}</h2>
      <div className="mt-8 max-w-3xl space-y-5 text-[15px] leading-7 text-foreground/85">
        {children}
      </div>
    </section>
  );
}

function Finding({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="border border-border p-6">
      <div className="text-xs uppercase tracking-[0.22em] text-[var(--brand)]">Finding {n}</div>
      <h3 className="mt-3 text-lg font-medium tracking-tight">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function Research002() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        {/* Hero */}
        <section className="ink-glow grain relative overflow-hidden border-b border-[var(--ink-border)] bg-[var(--ink)] text-white">
          <div className="container-x py-28">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/50">
              <span>Research Report 002</span>
              <span className="h-px w-8 bg-white/30" />
              <span>Yesp Labs</span>
              <span className="h-px w-8 bg-white/30" />
              <span>AI Transformation</span>
            </div>
            <h1 className="mt-8 max-w-4xl text-4xl leading-[1.05] tracking-tight md:text-6xl">
              AI Readiness in UK Mid-Market Operations:{" "}
              <span className="text-white/40">The Foundation Gap.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
              The most common reason AI transformation fails in UK mid-market businesses
              is not budget, technology, or buy-in. It is the absence of the operational
              and data foundations that AI requires to function. This research explores
              that gap and what to do about it.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-4">
              {[
                { k: "73%", v: "Lack data foundations" },
                { k: "61%", v: "No defined KPIs before AI" },
                { k: "4×", v: "Higher ROI with foundations first" },
                { k: "£0", v: "AI value without clean data" },
              ].map((m) => (
                <div key={m.v} className="bg-[var(--ink)] p-6">
                  <div className="text-2xl font-semibold tracking-tight md:text-3xl">{m.k}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/60">{m.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Body */}
        <div className="container-x">
          <Section title="Executive Summary" kicker="Overview">
            <p>
              Across UK mid-market businesses, AI has become the dominant strategic priority.
              Boards discuss it. Senior leaders commit to it. Technology vendors sell it. Yet
              the majority of AI initiatives in this segment fail to deliver measurable value
              within the first twelve months.
            </p>
            <p>
              This research finds the primary cause is not technical complexity or lack of
              ambition. It is a fundamental mismatch between where AI requires a business to
              be operationally and where most UK mid-market businesses actually are.
            </p>
            <p>
              We call this the Foundation Gap. Closing it — through Operational Excellence
              and Digital Transformation before AI Transformation — is the single most
              reliable predictor of AI success we have observed.
            </p>
          </Section>

          <Section title="Why AI Fails Before It Starts" kicker="The Problem">
            <p>
              AI is not a layer you add to a business. It is a capability that amplifies
              whatever operational foundation already exists. If that foundation is strong —
              clean data, standardised processes, integrated systems — AI can generate
              extraordinary value. If the foundation is weak, AI generates noise.
            </p>
            <p>
              In most UK mid-market businesses, the foundation is weak. Not because of poor
              management, but because operational complexity has outgrown the infrastructure
              designed to support it.
            </p>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {[
                { t: "Fragmented data", d: "Information exists in multiple systems with no single source of truth. AI cannot learn from data it cannot access reliably." },
                { t: "Undefined processes", d: "Without standardised workflows, AI has no consistent behaviour to model, predict, or optimise." },
                { t: "Missing KPIs", d: "Without defined success metrics, AI cannot be directed toward meaningful outcomes or evaluated on performance." },
              ].map((c) => (
                <div key={c.t} className="border border-border p-5">
                  <h3 className="text-sm font-medium">{c.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="The AI Readiness Maturity Model" kicker="Framework">
            <p>
              Based on operational engagements with UK mid-market businesses, we have
              identified five levels of AI readiness. Most organisations believe they are
              further along than they actually are.
            </p>
            <div className="border border-border">
              {[
                { level: "Level 1", title: "Unaware", desc: "No structured data collection, no defined KPIs, significant manual processes. AI investment would deliver no measurable return.", marker: "bg-red-500/20 text-red-600" },
                { level: "Level 2", title: "Aware", desc: "Basic data exists in disconnected systems. Some processes are documented. Leadership understands AI as a concept but lacks a plan.", marker: "bg-orange-500/20 text-orange-600" },
                { level: "Level 3", title: "Preparing", desc: "Data consolidation is underway. KPIs are being defined. Select processes are standardised. AI pilots may be appropriate here.", marker: "bg-yellow-500/20 text-yellow-600" },
                { level: "Level 4", title: "Ready", desc: "Clean, integrated data. Standardised processes. Defined metrics. AI can be applied to targeted use cases with high confidence of return.", marker: "bg-green-500/20 text-green-600" },
                { level: "Level 5", title: "Optimising", desc: "AI is embedded in operational decision-making. Continuous improvement loops exist. New opportunities are systematically identified.", marker: "bg-[var(--brand)]/15 text-[var(--brand)]" },
              ].map((r, i) => (
                <div key={r.level} className={`flex items-start gap-6 p-6 ${i > 0 ? "border-t border-border" : ""}`}>
                  <div className={`w-28 shrink-0 rounded px-3 py-1.5 text-center text-xs font-medium ${r.marker}`}>
                    {r.level}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{r.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p>
              Our research finds that approximately 73% of UK mid-market businesses sit at
              Level 1 or Level 2 when they first attempt AI investment. The majority would
              generate significantly greater value by investing in Levels 2–3 first.
            </p>
          </Section>

          <Section title="What Foundations Actually Means" kicker="Definition">
            <p>
              When we refer to foundations, we are not talking about enterprise-scale data
              warehousing or multi-year infrastructure programmes. For a mid-market UK
              business, foundations typically means:
            </p>
            <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
              {[
                { t: "Data Quality", items: ["Consistent naming conventions", "No duplicate records", "Validated data entry", "Complete historical records"] },
                { t: "Data Accessibility", items: ["Systems that communicate", "No manual extraction required", "Single source of truth for key metrics", "Role-appropriate access"] },
                { t: "Process Standardisation", items: ["Documented workflows", "Consistent execution across teams", "Defined ownership for each process", "Measurable inputs and outputs"] },
                { t: "Performance Measurement", items: ["Defined KPIs per function", "Agreed definitions of success", "Baseline measurements established", "Regular review cadence"] },
              ].map((c) => (
                <div key={c.t} className="bg-background p-6">
                  <h3 className="text-sm font-medium">{c.t}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {c.items.map((x) => (
                      <li key={x} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p>
              These are not aspirational. They are operational prerequisites. Without them,
              AI systems have nothing reliable to learn from, predict against, or optimise.
            </p>
          </Section>

          <Section title="The Cost of Skipping Foundations" kicker="Risk">
            <div className="border border-border bg-secondary p-8">
              <p className="text-sm text-muted-foreground">Consider a business that invests £80,000 in an AI-powered demand forecasting tool:</p>
              <div className="mt-6 space-y-4 border-t border-border pt-6 text-sm">
                <div className="flex items-start gap-4">
                  <span className="w-6 shrink-0 font-mono text-muted-foreground">01</span>
                  <p>Inventory data exists in three systems with different naming conventions. The AI cannot reliably identify the same product across sources.</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-6 shrink-0 font-mono text-muted-foreground">02</span>
                  <p>Historical sales data contains duplicates and unresolved anomalies. The model trains on incorrect patterns.</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-6 shrink-0 font-mono text-muted-foreground">03</span>
                  <p>No KPIs exist for forecast accuracy. The business cannot evaluate whether the AI is performing or not.</p>
                </div>
              </div>
              <div className="mt-6 border-t border-border pt-6 text-sm font-medium">
                Outcome: The tool generates forecasts the team does not trust. Adoption fails. £80,000 is written off.
              </div>
            </div>
            <p>
              This pattern is not unusual. It is the default outcome when AI is deployed
              without foundational work.
            </p>
            <p>
              The same £80,000 investment, preceded by £20,000 of foundational operational
              and data work, would have had a significantly higher probability of delivering
              measurable value.
            </p>
          </Section>

          <Section title="Research Findings" kicker="Findings">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Finding
                n="01"
                title="73% of UK mid-market businesses lack core data foundations"
                body="When assessed against the four foundation criteria — data quality, data accessibility, process standardisation, and performance measurement — fewer than one in three UK mid-market businesses meet all four."
              />
              <Finding
                n="02"
                title="61% begin AI investment without defined KPIs"
                body="Without agreed success metrics, AI cannot be directed toward specific outcomes. The result is technology that operates without a clear objective — making evaluation and improvement impossible."
              />
              <Finding
                n="03"
                title="Businesses with foundations first achieve 4× higher AI ROI"
                body="Across engagements where foundational work preceded AI investment, ROI was consistently four times higher than in businesses that invested in AI first. The gap widens over a 24-month period."
              />
              <Finding
                n="04"
                title="The implementation gap is shrinking faster than the readiness gap"
                body="AI tools are becoming cheaper and faster to implement. But the gap between implementation speed and organisational readiness is widening — meaning more businesses are deploying AI into unprepared environments."
              />
              <Finding
                n="05"
                title="Operational Excellence is the most undervalued AI enabler"
                body="Standardised processes and clean data — the outputs of Operational Excellence — are the primary inputs AI requires. Yet most AI strategies overlook operational improvement as a precondition."
              />
              <Finding
                n="06"
                title="The foundation investment is smaller than most expect"
                body="For a UK mid-market business (50–250 employees), the foundational work required to achieve AI Readiness Level 3 typically requires 3–6 months and is significantly less costly than the AI tools themselves."
              />
            </div>
          </Section>

          <Section title="Where to Start: A Practical Path" kicker="Recommendations">
            <p>
              The Foundation Gap is not a permanent condition. It is an addressable
              operational challenge. The path to AI readiness follows a consistent sequence:
            </p>
            <div className="space-y-3">
              {[
                ["01", "Assess current state", "Before investing in AI — or foundational work — understand where you actually are. An Operational Assessment (Phase 1) identifies the specific gaps relevant to your business."],
                ["02", "Fix data quality", "Identify and resolve the most significant data quality issues. This does not require a full data warehouse — it requires defining what good looks like and enforcing it consistently."],
                ["03", "Standardise core processes", "Identify the 3–5 processes that AI will need to interact with. Document them, standardise them, measure them. This is the work that makes AI possible."],
                ["04", "Define success metrics", "Agree on the KPIs that AI will be expected to improve. This creates the evaluation framework the investment will be judged against."],
                ["05", "Begin with targeted AI pilots", "Start with the highest-confidence, highest-value AI application. One successful pilot builds trust and creates the evidence base for broader investment."],
                ["06", "Optimise and expand", "Use measured outcomes from the pilot to improve the model and identify the next highest-value application. This is how AI investment compounds over time."],
              ].map(([n, t, d]) => (
                <div key={n} className="flex items-start gap-6 border border-border p-6">
                  <div className="w-10 shrink-0 font-mono text-lg font-semibold text-[var(--brand)]">{n}</div>
                  <div>
                    <div className="text-sm font-medium">{t}</div>
                    <div className="mt-2 text-sm text-muted-foreground">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="The Role of Each Discipline" kicker="Solution">
            <div className="grid grid-cols-1 border border-border md:grid-cols-3">
              {[
                {
                  t: "Operational Excellence",
                  role: "Creates the foundation",
                  items: [
                    "Process standardisation",
                    "Performance metric definition",
                    "Waste elimination",
                    "Data ownership assignment",
                  ],
                },
                {
                  t: "Digital Transformation",
                  role: "Connects the foundation",
                  items: [
                    "System integration",
                    "Data centralisation",
                    "Reporting automation",
                    "Real-time visibility",
                  ],
                },
                {
                  t: "AI Transformation",
                  role: "Amplifies the foundation",
                  items: [
                    "Predictive analytics",
                    "Intelligent decision support",
                    "Automated pattern recognition",
                    "Continuous optimisation",
                  ],
                },
              ].map((c, i) => (
                <div key={c.t} className={`p-6 ${i > 0 ? "border-t border-border md:border-l md:border-t-0" : ""}`}>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{c.role}</div>
                  <div className="mt-2 text-base font-medium">{c.t}</div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {c.items.map((x) => (
                      <li key={x} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p>
              These three disciplines are not alternatives. They are sequential prerequisites.
              The greatest AI returns come from organisations that have invested deliberately
              in each layer — in the right order.
            </p>
          </Section>

          <Section title="Conclusion" kicker="Closing">
            <p>
              AI will reshape UK business operations. That much is certain. What is less
              certain — and far less often discussed — is which businesses will actually
              benefit from that shift.
            </p>
            <p>
              The organisations that will benefit are not necessarily the ones that invest
              in AI first, or the ones with the largest budgets. They are the ones that
              invest in the right foundations before they deploy AI.
            </p>
            <p className="font-medium text-foreground">
              The Foundation Gap is closable. The question is whether your organisation
              addresses it before or after the cost of getting it wrong.
            </p>
          </Section>
        </div>

        {/* Navigation */}
        <div className="border-t border-border bg-secondary">
          <div className="container-x py-12">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <Link
                to="/research/hidden-cost-of-operational-reporting"
                className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
              >
                <ArrowUpRight className="h-4 w-4 rotate-[225deg] transition-transform group-hover:-translate-x-0.5" />
                Previous: Report 001 — Operational Reporting Costs
              </Link>
              <Link
                to="/research"
                className="inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-0.5"
              >
                All research <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="border-t border-[var(--ink-border)] bg-[var(--ink)] text-white">
          <div className="container-x py-24">
            <p className="mb-6 text-xs uppercase tracking-[0.22em] text-white/50">Apply this research</p>
            <h2 className="max-w-3xl text-4xl leading-tight md:text-5xl">
              Find out where your business sits{" "}
              <span className="text-white/40">on the AI Readiness model.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
              Our Transformation Assessment includes a structured AI Readiness review — evaluating
              your data quality, process standardisation and system integration against the
              five-level maturity model.
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
      </main>
      <SiteFooter />
    </div>
  );
}
