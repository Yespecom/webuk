import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team | Yesp" },
      { name: "description", content: "The people behind Yesp. Senior consultants with real delivery track records — no junior hand-offs, no black-box models." },
      { property: "og:title", content: "Team | Yesp" },
      { property: "og:description", content: "Senior-led delivery. Meet the people behind Yesp's Digital Transformation, AI, and Operational Excellence practice." },
    ],
    links: [{ rel: "canonical", href: "https://yesp.uk/team" }],
  }),
  component: TeamPage,
});

const principles = [
  {
    title: "Diagnosis before prescription",
    desc: "We never recommend a solution until we understand the actual problem. Every engagement starts with the assessment, not a pre-packaged answer.",
  },
  {
    title: "Evidence over opinion",
    desc: "Every recommendation is grounded in your data, your processes, and your people — not in benchmarks from someone else's industry.",
  },
  {
    title: "Accountability for outcomes",
    desc: "We scope engagements around agreed ROI targets. If a project doesn't have a clear, measurable return, we won't propose it.",
  },
  {
    title: "No junior hand-offs",
    desc: "The people who scope the engagement are the people who deliver it. Senior involvement from day one through to close.",
  },
];

function TeamPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <SiteNav />
      <main>

        {/* ── Page header ──────────────────────────────────────────── */}
        <section className="border-b border-border">
          <div className="container-x py-16 md:py-24">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">The team</p>
            <h1 className="text-4xl md:text-5xl">The people behind Yesp.</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Yesp is a senior-led consultancy. No junior hand-offs. No bait-and-switch. The people who scope your engagement are the people who deliver it.
            </p>
          </div>
        </section>

        {/* ── Founder profile ───────────────────────────────────────── */}
        <section className="border-b border-border">
          <div className="container-x py-16 md:py-24">
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">

              {/* Photo */}
              <div className="md:col-span-3">
                <div className="flex h-52 w-52 items-center justify-center rounded-2xl bg-secondary md:h-full md:w-full md:max-h-[280px]">
                  <div className="text-center">
                    <div className="font-mono text-3xl font-semibold text-foreground/20">SS</div>
                    <p className="mt-2 text-xs text-muted-foreground">Photo coming soon</p>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="md:col-span-9">
                <div className="mb-1">
                  <h2 className="text-3xl">Srinithin Somasundaram</h2>
                  <p className="mt-1 text-sm text-muted-foreground">Founder & CEO</p>
                </div>

                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  Owns client strategy, the public point of view, and the operating discipline behind enterprise engagements.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── How we work ───────────────────────────────────────────── */}
        <section className="border-b border-border bg-secondary/40">
          <div className="container-x py-14 md:py-20">
            <div className="mb-12">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">How we work</p>
              <h2 className="text-3xl">Four principles. No exceptions.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {principles.map((p) => (
                <div key={p.title} className="flex gap-4 rounded-xl border border-border bg-white p-8">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foreground/30" />
                  <div>
                    <p className="font-medium text-foreground">{p.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Delivery record ───────────────────────────────────────── */}
        <section className="border-b border-border">
          <div className="container-x py-14 md:py-20">
            <div className="grid gap-10 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Track record</p>
                <h2 className="text-3xl">Delivered, not just designed.</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We don't produce slide decks that collect dust. Every engagement at Yesp ends with working software, active processes, or a roadmap the client's team has already started acting on.
                </p>
                <a
                  href="https://yespstudio.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--ink)] px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-[var(--ink)]/90 hover:shadow-md"
                >
                  Talk to us
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
              <div className="md:col-span-7">
                <div className="grid gap-6 sm:grid-cols-3">
                  {[
                    { stat: "100%", label: "Senior-led delivery", desc: "No hand-offs to junior teams after scoping" },
                    { stat: "2–3 wks", label: "Time to first insight", desc: "Assessment deliverables, not just a kick-off meeting" },
                    { stat: "6", label: "Actionable deliverables", desc: "Included in every assessment, before further commitment" },
                  ].map((s) => (
                    <div key={s.stat} className="rounded-xl border border-border p-6">
                      <div className="font-mono text-3xl font-semibold tracking-tight">{s.stat}</div>
                      <div className="mt-2 text-sm font-medium text-foreground">{s.label}</div>
                      <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="border-b border-border bg-[var(--ink)] text-white">
          <div className="container-x py-14 md:py-20">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-white/30">Get started</p>
                <h2 className="text-3xl md:text-4xl">Want to work with us?</h2>
                <p className="mt-4 text-base leading-relaxed text-white/50">
                  The best way to find out if we can help is a 20-minute call. No obligation, no preparation needed.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <a
                  href="https://yespstudio.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-all duration-200 hover:bg-white/92 hover:shadow-lg"
                >
                  Talk to us — we'll tell you honestly if we can help
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <Link
                  to="/assessment"
                  className="inline-flex items-center gap-2 border border-white/15 px-6 py-3.5 text-sm text-white/60 transition-all duration-200 hover:border-white/35 hover:text-white"
                >
                  See how the assessment works
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
