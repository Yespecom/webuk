import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

const articleSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://yesp.uk/blog/why-ai-projects-fail#article",
      headline: "Why Most UK AI Projects Fail — And It Has Nothing to Do With the Technology",
      description: "73% of UK mid-market businesses attempting AI transformation fail at the foundation layer. The problem is not the model. It is what comes before it.",
      url: "https://yesp.uk/blog/why-ai-projects-fail",
      image: "https://yesp.uk/api/og?title=Why+UK+AI+Projects+Fail&description=73%25+fail+at+the+foundation+layer%2C+not+the+technology.&tag=AI+Transformation",
      author: { "@id": "https://yesp.uk/#organization" },
      publisher: { "@id": "https://yesp.uk/#organization" },
      datePublished: "2026-05-01",
      dateModified: "2026-06-24",
      inLanguage: "en-GB",
      about: [
        { "@type": "Thing", name: "AI Transformation" },
        { "@type": "Thing", name: "UK Mid-Market AI" },
        { "@type": "Thing", name: "AI Readiness" },
        { "@type": "Thing", name: "Data Foundation" },
      ],
      keywords: "AI projects fail UK, why AI transformation fails, AI readiness UK, data foundation AI, UK mid-market AI, AI failure rate",
      isPartOf: { "@id": "https://yesp.uk/blog#blog" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://yesp.uk/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://yesp.uk/blog" },
        { "@type": "ListItem", position: 3, name: "Why Most UK AI Projects Fail", item: "https://yesp.uk/blog/why-ai-projects-fail" },
      ],
    },
  ],
});

export const Route = createFileRoute("/blog/why-ai-projects-fail")({
  head: () => ({
    meta: [
      { title: "Why Most UK AI Projects Fail — And It Has Nothing to Do With the Technology | Yesp" },
      { name: "description", content: "73% of UK mid-market businesses attempting AI transformation fail at the foundation layer. The problem is not the model. It is what comes before it." },
      { name: "keywords", content: "AI projects fail UK, why AI transformation fails, AI readiness UK, data foundation AI, UK mid-market AI, AI foundation gap" },
      { property: "og:title", content: "Why Most UK AI Projects Fail — And It Has Nothing to Do With the Technology" },
      { property: "og:description", content: "73% of UK mid-market businesses fail at AI not because of the technology, but because the operational and data foundations are not in place." },
      { property: "og:url", content: "https://yesp.uk/blog/why-ai-projects-fail" },
      { property: "og:image", content: "https://yesp.uk/api/og?title=Why+UK+AI+Projects+Fail&description=73%25+fail+at+the+foundation+layer%2C+not+the+technology.&tag=AI+Transformation" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://yesp.uk/api/og?title=Why+UK+AI+Projects+Fail&description=73%25+fail+at+the+foundation+layer%2C+not+the+technology.&tag=AI+Transformation" },
      { "script:ld+json": articleSchema },
    ],
    links: [{ rel: "canonical", href: "https://yesp.uk/blog/why-ai-projects-fail" }],
  }),
  component: Article,
});

function Article() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <SiteNav />
      <main>
        {/* Header */}
        <section className="border-b border-border bg-[var(--ink)] text-white">
          <div className="container-x py-16 md:py-24">
            <div className="max-w-3xl">
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <Link to="/blog" className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 hover:text-white/70 transition-colors">
                  Blog
                </Link>
                <span className="text-white/20">·</span>
                <span className="font-mono text-xs text-white/40">AI Transformation</span>
                <span className="text-white/20">·</span>
                <span className="font-mono text-xs text-white/40">May 2026 · 7 min read</span>
              </div>
              <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
                Why Most UK AI Projects Fail — And It Has Nothing to Do With the Technology
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/55 md:text-lg">
                Across the UK mid-market, businesses are attempting AI transformation at a rate not seen since the ERP rush of the early 2000s. The failure rate is comparable too.
              </p>
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="border-b border-border">
          <div className="container-x py-14 md:py-20">
            <div className="mx-auto max-w-2xl space-y-8 text-[15px] leading-[1.8] text-foreground/80">

              <p>
                Our research found that 73% of UK mid-market businesses attempting AI transformation fail to achieve meaningful value from it. When we analysed why, the answer was consistent: the failure point was not the AI model, the vendor, or the implementation team. It was what came before all of that.
              </p>

              <p>
                The businesses that succeed with AI do not have better technology. They have better foundations.
              </p>

              <h2 className="mt-10 text-2xl font-medium text-foreground">The three foundation gaps</h2>

              <p>
                In every failed AI engagement we have examined, one or more of three foundation gaps was present. Usually all three.
              </p>

              <h3 className="mt-8 text-lg font-medium text-foreground">1. The data gap</h3>
              <p>
                AI systems are only as good as the data they run on. In most UK mid-market businesses, operational data is fragmented across three to seven disconnected systems — an ERP, a CRM, a logistics platform, a spreadsheet, and several shadow systems no one officially acknowledges. There is no single source of truth. Data quality has never been audited. Historical records are incomplete.
              </p>
              <p>
                Feeding a machine learning model with this data does not produce intelligent outputs. It produces confident-sounding nonsense. The model finds patterns in the noise and presents them as insight.
              </p>

              <h3 className="mt-8 text-lg font-medium text-foreground">2. The process gap</h3>
              <p>
                AI augments processes. It does not replace the need to have them. A business with poorly defined, undocumented, inconsistently followed processes cannot automate those processes with AI — it can only automate the inconsistency at scale.
              </p>
              <p>
                The businesses that get AI to work have typically spent time before implementation mapping, simplifying, and standardising their operations. Not because AI requires this — but because the discipline of understanding your operations clearly is a prerequisite for knowing where AI adds value and where it does not.
              </p>

              <h3 className="mt-8 text-lg font-medium text-foreground">3. The ROI definition gap</h3>
              <p>
                Most UK businesses begin AI projects without agreeing what success looks like. The vendor proposes a use case. The business approves a budget. The implementation proceeds. Six months later, someone asks whether it worked and discovers there is no baseline to compare against.
              </p>
              <p>
                AI investment without pre-agreed, measurable ROI targets produces unaccountable spending. It also makes it impossible to make rational decisions about whether to continue, adjust, or stop.
              </p>

              <h2 className="mt-10 text-2xl font-medium text-foreground">Why businesses keep making the same mistake</h2>

              <p>
                The pattern is not hard to understand. Senior leadership reads about AI productivity gains. The board asks what the AI strategy is. A vendor arrives with a compelling demonstration. The business says yes before doing the foundational work.
              </p>

              <p>
                There is also a structural incentive problem. AI vendors are selling a product. Their interest is in closing the deal, not in advising clients that they are not ready for it. An honest AI vendor would sometimes say: <em>come back to us in 12 months, after you have sorted your data infrastructure.</em> Most do not.
              </p>

              <div className="my-8 rounded-xl border-l-4 border-[var(--ink)] bg-secondary/40 p-6">
                <p className="text-sm leading-relaxed text-foreground">
                  "The most useful thing we can tell a client who wants to start an AI project is whether they are actually ready for one. Sometimes the answer is not yet — and the honest version of our job is to say so."
                </p>
              </div>

              <h2 className="mt-10 text-2xl font-medium text-foreground">What AI-ready actually looks like</h2>

              <p>
                A business is ready for AI investment when it can say yes to four questions:
              </p>

              <ol className="list-decimal space-y-3 pl-6">
                <li><strong className="text-foreground">Is our core operational data accessible, accurate, and consistent?</strong> Not perfect — but not fundamentally broken.</li>
                <li><strong className="text-foreground">Do we have documented, reasonably consistent processes in the areas where we want to apply AI?</strong> AI cannot stabilise what it cannot observe.</li>
                <li><strong className="text-foreground">Can we define, before implementation, what success looks like in measurable terms?</strong> Not "better decisions" — specific metrics, specific baselines, specific targets.</li>
                <li><strong className="text-foreground">Is there clear internal ownership of the AI initiative — someone accountable for outcomes, not just for deploying the technology?</strong></li>
              </ol>

              <p>
                Most businesses attempting AI today cannot say yes to all four. The ones that can consistently achieve meaningful outcomes.
              </p>

              <h2 className="mt-10 text-2xl font-medium text-foreground">The right order of operations</h2>

              <p>
                The businesses that succeed with AI do not start with AI. They start by understanding what is happening in their operations, cleaning and connecting their data, standardising their key processes, and defining clear success criteria for AI use cases. Then they implement.
              </p>

              <p>
                This sounds slower. In practice it is faster — because it eliminates the expensive false starts that account for most of the 73% failure rate.
              </p>

              <p>
                An AI readiness assessment — one that evaluates data quality, process maturity, and use case ROI before any technology decision — typically takes 2–3 weeks and costs significantly less than a failed AI implementation. It is the one investment most businesses wish they had made before the one they regret.
              </p>

            </div>
          </div>
        </article>

        {/* Related / CTA */}
        <section className="border-b border-border bg-secondary/40">
          <div className="container-x py-14 md:py-20">
            <div className="grid gap-8 md:grid-cols-2 md:gap-16">
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">More from the field</p>
                <h2 className="text-2xl">Related reading</h2>
                <div className="mt-6 space-y-4">
                  <Link to="/blog/five-digital-transformation-mistakes" className="group flex items-start gap-4 border-b border-border pb-4">
                    <div className="flex-1">
                      <p className="text-sm font-medium transition-colors group-hover:text-foreground/70">Five Digital Transformation Mistakes UK Mid-Market Businesses Keep Making</p>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">Digital Transformation · April 2026</p>
                    </div>
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  </Link>
                  <Link to="/research/ai-readiness-foundation-gap" className="group flex items-start gap-4 border-b border-border pb-4">
                    <div className="flex-1">
                      <p className="text-sm font-medium transition-colors group-hover:text-foreground/70">Research 002 — AI Readiness in UK Mid-Market: The Foundation Gap</p>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">Research Report</p>
                    </div>
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  </Link>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-white p-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Assess before you invest</p>
                <h3 className="mt-3 text-xl">Find out if your business is AI-ready.</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Our AI readiness assessment evaluates data quality, process maturity, and use case ROI before any technology decision. Part of the 6-deliverable Transformation Assessment.
                </p>
                <a
                  href="https://yespstudio.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 bg-[var(--ink)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--ink)]/90"
                >
                  Book a call <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
