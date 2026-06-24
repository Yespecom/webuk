import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

const blogIndexSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://yesp.uk/blog#blog",
      url: "https://yesp.uk/blog",
      name: "Yesp Blog — Operational Excellence, Digital Transformation & AI Insights",
      description: "Practical insights on operational excellence, digital transformation, and AI transformation for UK mid-market businesses. Written from direct client work.",
      publisher: { "@id": "https://yesp.uk/#organization" },
      inLanguage: "en-GB",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://yesp.uk/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://yesp.uk/blog" },
      ],
    },
  ],
});

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Operational Excellence, Digital & AI Transformation Insights | Yesp UK" },
      { name: "description", content: "Practical insights on operational excellence, digital transformation, and AI for UK mid-market businesses. Written from direct client work — not surveys or secondary data." },
      { name: "keywords", content: "operational excellence blog UK, digital transformation insights, AI transformation UK, business operations blog, UK mid-market transformation" },
      { property: "og:title", content: "Yesp Blog — Transformation Insights for UK Businesses" },
      { property: "og:description", content: "Practical insights on operational excellence, digital transformation, and AI. Written from direct client work." },
      { property: "og:url", content: "https://yesp.uk/blog" },
      { property: "og:image", content: "https://yesp.uk/api/og?title=Yesp+Blog&description=Practical+insights+for+UK+mid-market+businesses.&tag=Blog" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://yesp.uk/api/og?title=Yesp+Blog&description=Practical+insights+for+UK+mid-market+businesses.&tag=Blog" },
      { "script:ld+json": blogIndexSchema },
    ],
    links: [{ rel: "canonical", href: "https://yesp.uk/blog" }],
  }),
  component: BlogIndexPage,
});

const posts = [
  {
    to: "/blog/the-reporting-tax",
    tag: "Operational Excellence",
    date: "June 2026",
    readTime: "6 min read",
    title: "The Reporting Tax: Why UK SMEs Are Paying 1,040 Hours a Year Without Realising It",
    desc: "Manual reporting is one of the most expensive hidden costs in UK mid-market operations. Here is how to calculate what it is costing your business — and what to do about it.",
  },
  {
    to: "/blog/why-ai-projects-fail",
    tag: "AI Transformation",
    date: "May 2026",
    readTime: "7 min read",
    title: "Why Most UK AI Projects Fail — And It Has Nothing to Do With the Technology",
    desc: "73% of UK mid-market businesses attempting AI transformation fail at the foundation layer. The problem is not the model. It is what comes before it.",
  },
  {
    to: "/blog/five-digital-transformation-mistakes",
    tag: "Digital Transformation",
    date: "April 2026",
    readTime: "8 min read",
    title: "Five Digital Transformation Mistakes UK Mid-Market Businesses Keep Making",
    desc: "Digital transformation has a credibility problem in UK business. After working across dozens of mid-market engagements, the same five mistakes appear repeatedly — and all of them are avoidable.",
  },
];

function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <SiteNav />
      <main>
        {/* Header */}
        <section className="border-b border-border">
          <div className="container-x py-16 md:py-24">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">From the field</p>
            <h1 className="text-4xl md:text-5xl">Insights.</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Practical writing on operational excellence, digital transformation, and AI — drawn from direct client work in UK mid-market businesses.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="border-b border-border">
          <div className="container-x py-14 md:py-20">
            <div className="divide-y divide-border">
              {posts.map((post) => (
                <Link
                  key={post.to}
                  to={post.to}
                  className="group flex flex-col gap-3 py-10 first:pt-0 last:pb-0 md:flex-row md:items-start md:gap-16"
                >
                  <div className="shrink-0 md:w-40">
                    <span className="font-mono text-xs text-muted-foreground">{post.tag}</span>
                    <p className="mt-1 font-mono text-xs text-muted-foreground/60">{post.date} · {post.readTime}</p>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl leading-snug transition-colors group-hover:text-foreground/70 md:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 group-hover:gap-2.5">
                      Read article <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary/40">
          <div className="container-x py-14 md:py-20">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Start with an assessment</p>
                <h2 className="text-2xl">See what these issues look like in your business.</h2>
              </div>
              <a
                href="https://yespstudio.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--ink)] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[var(--ink)]/90"
              >
                Book a call <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
