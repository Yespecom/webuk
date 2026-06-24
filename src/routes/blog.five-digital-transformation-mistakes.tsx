import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

const articleSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://yesp.uk/blog/five-digital-transformation-mistakes#article",
      headline: "Five Digital Transformation Mistakes UK Mid-Market Businesses Keep Making",
      description: "Digital transformation has a credibility problem in UK business. After working across dozens of mid-market engagements, the same five mistakes appear repeatedly — and all of them are avoidable.",
      url: "https://yesp.uk/blog/five-digital-transformation-mistakes",
      image: "https://yesp.uk/api/og?title=5+Digital+Transformation+Mistakes&description=The+same+five+mistakes+appear+in+every+failed+UK+transformation.&tag=Digital+Transformation",
      author: { "@id": "https://yesp.uk/#organization" },
      publisher: { "@id": "https://yesp.uk/#organization" },
      datePublished: "2026-04-01",
      dateModified: "2026-06-24",
      inLanguage: "en-GB",
      about: [
        { "@type": "Thing", name: "Digital Transformation" },
        { "@type": "Thing", name: "UK Mid-Market Business" },
        { "@type": "Thing", name: "Business Technology" },
      ],
      keywords: "digital transformation mistakes UK, failed digital transformation, UK mid-market digital, technology implementation mistakes, digital transformation failure",
      isPartOf: { "@id": "https://yesp.uk/blog#blog" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://yesp.uk/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://yesp.uk/blog" },
        { "@type": "ListItem", position: 3, name: "Five Digital Transformation Mistakes", item: "https://yesp.uk/blog/five-digital-transformation-mistakes" },
      ],
    },
  ],
});

export const Route = createFileRoute("/blog/five-digital-transformation-mistakes")({
  head: () => ({
    meta: [
      { title: "Five Digital Transformation Mistakes UK Mid-Market Businesses Keep Making | Yesp" },
      { name: "description", content: "Digital transformation has a credibility problem in UK business. After working across dozens of mid-market engagements, the same five mistakes appear repeatedly — and all of them are avoidable." },
      { name: "keywords", content: "digital transformation mistakes UK, failed digital transformation, UK business technology, transformation failure, digital transformation tips UK" },
      { property: "og:title", content: "Five Digital Transformation Mistakes UK Mid-Market Businesses Keep Making" },
      { property: "og:description", content: "After working across dozens of UK mid-market engagements, the same five digital transformation mistakes appear repeatedly — and all of them are avoidable." },
      { property: "og:url", content: "https://yesp.uk/blog/five-digital-transformation-mistakes" },
      { property: "og:image", content: "https://yesp.uk/api/og?title=5+Digital+Transformation+Mistakes&description=The+same+five+mistakes+appear+in+every+failed+UK+transformation.&tag=Digital+Transformation" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://yesp.uk/api/og?title=5+Digital+Transformation+Mistakes&description=The+same+five+mistakes+appear+in+every+failed+UK+transformation.&tag=Digital+Transformation" },
      { "script:ld+json": articleSchema },
    ],
    links: [{ rel: "canonical", href: "https://yesp.uk/blog/five-digital-transformation-mistakes" }],
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
                <span className="font-mono text-xs text-white/40">Digital Transformation</span>
                <span className="text-white/20">·</span>
                <span className="font-mono text-xs text-white/40">April 2026 · 8 min read</span>
              </div>
              <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
                Five Digital Transformation Mistakes UK Mid-Market Businesses Keep Making
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/55 md:text-lg">
                Digital transformation has a credibility problem in UK business. After working across dozens of mid-market engagements, the same five mistakes appear repeatedly — and all of them are avoidable.
              </p>
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="border-b border-border">
          <div className="container-x py-14 md:py-20">
            <div className="mx-auto max-w-2xl space-y-8 text-[15px] leading-[1.8] text-foreground/80">

              <p>
                The term "digital transformation" has been abused to the point where many UK business leaders are instinctively sceptical of it. That scepticism is usually warranted — not because the underlying objective is flawed, but because the way most organisations approach it is.
              </p>

              <p>
                What follows is not theory. It is a pattern we have observed across enough engagements to say with confidence: the businesses that fail at digital transformation fail for consistent, predictable, avoidable reasons.
              </p>

              <h2 className="mt-10 text-2xl font-medium text-foreground">Mistake 1: Starting with software, not with operations</h2>

              <p>
                The most common digital transformation mistake is buying a platform before understanding the processes it will need to support. A new ERP, a new CRM, a new warehouse management system — all of these are solutions looking for a problem definition that has not yet been produced.
              </p>

              <p>
                Software embeds the processes you configure it around. If those processes are poorly designed, duplicated, or inconsistently followed, the software will automate the dysfunction rather than fix it. The business then finds itself locked into a platform that costs as much to unwind as it cost to implement.
              </p>

              <p>
                The correct sequence is: understand operations first, simplify and standardise second, then select and configure technology to support the standardised process. This sequence is rarely followed because vendors sell software, not process work. And process work requires time that implementation projects are not scoped to include.
              </p>

              <h2 className="mt-10 text-2xl font-medium text-foreground">Mistake 2: Underestimating the data problem</h2>

              <p>
                Most UK mid-market businesses carry years of data debt. CRM records that were never cleaned. Inventory data that drifted from reality after a system migration. Customer records duplicated across three platforms. Historical data in formats that no longer match current schemas.
              </p>

              <p>
                Digital transformation projects that depend on data — which is all of them — consistently underestimate the time and cost of addressing this debt. Implementation timelines are built assuming the data is in better shape than it is. When the reality emerges mid-project, budgets are already committed and scope cannot be reduced.
              </p>

              <p>
                A data quality audit before any transformation commitment is not optional overhead. It is the single most important input to an accurate project scope.
              </p>

              <h2 className="mt-10 text-2xl font-medium text-foreground">Mistake 3: Confusing automation with transformation</h2>

              <p>
                Automating a broken process produces a faster broken process. This is not transformation. It is digitised dysfunction.
              </p>

              <p>
                The distinction matters because automation is the thing most visible in digital transformation projects, and it generates the most compelling demos. An automated approval workflow, an integrated dashboard, a robotic data entry process — these look like progress. If the underlying business logic they encode is flawed, they create technical debt faster than manual processes would have.
              </p>

              <p>
                True digital transformation changes how decisions are made, not just how data moves. That requires a business design conversation before a technology conversation.
              </p>

              <h2 className="mt-10 text-2xl font-medium text-foreground">Mistake 4: No single point of accountability</h2>

              <p>
                Digital transformation projects that are owned by IT fail because IT cannot mandate operational change. Projects owned by a business unit fail because they optimise for local efficiency rather than organisational coherence. Projects owned by a vendor fail because the vendor's interest is in scope expansion, not outcome delivery.
              </p>

              <p>
                Successful transformations have a single accountable executive who owns the outcome — not the technology, not the project management, not the budget. Someone who can make decisions across functions, enforce adoption, and is personally accountable for whether the business is measurably better afterwards.
              </p>

              <p>
                If that person does not exist at the start of the project, the project should not start.
              </p>

              <h2 className="mt-10 text-2xl font-medium text-foreground">Mistake 5: Treating adoption as an afterthought</h2>

              <p>
                The most technically successful implementation in the world delivers no value if the people who are supposed to use it do not. Technology adoption in UK mid-market businesses is consistently underinvested compared to implementation. Training budgets are cut. Change management is treated as a communications exercise rather than a behavioural design challenge. Workarounds emerge immediately and persist indefinitely.
              </p>

              <p>
                The useful question at the start of any transformation project is not <em>how do we build this?</em> but <em>how do we know people will use it?</em> Answering that question honestly — and building the answer into the project scope — is what separates transformations that stick from those that produce another unused system.
              </p>

              <h2 className="mt-10 text-2xl font-medium text-foreground">The common thread</h2>

              <p>
                All five mistakes share a root cause: beginning with answers rather than questions. The businesses that avoid these patterns invest in understanding their operations, their data, and their people before committing to technology. That investment takes weeks, not months. It costs a fraction of a failed implementation. And it makes everything that follows faster, cheaper, and more likely to deliver the return the business expected when it started.
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
                  <Link to="/blog/the-reporting-tax" className="group flex items-start gap-4 border-b border-border pb-4">
                    <div className="flex-1">
                      <p className="text-sm font-medium transition-colors group-hover:text-foreground/70">The Reporting Tax: Why UK SMEs Are Paying 1,040 Hours a Year Without Realising It</p>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">Operational Excellence · June 2026</p>
                    </div>
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  </Link>
                  <Link to="/blog/why-ai-projects-fail" className="group flex items-start gap-4 border-b border-border pb-4">
                    <div className="flex-1">
                      <p className="text-sm font-medium transition-colors group-hover:text-foreground/70">Why Most UK AI Projects Fail — And It Has Nothing to Do With the Technology</p>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">AI Transformation · May 2026</p>
                    </div>
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  </Link>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-white p-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Start the right way</p>
                <h3 className="mt-3 text-xl">Understand before you build.</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  A Transformation Assessment covers your operations, systems, and data quality before any technology commitment. Six deliverables in 2–3 weeks — including a working prototype on your actual data.
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
