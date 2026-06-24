import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Settings2, Layers, Sparkles, Check, TrendingUp, Zap, Shield, Clock, BarChart3 } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/framework")({
  head: () => ({
    meta: [
      { title: "Transformation Framework: Assess, Transform, Optimise | Yesp UK" },
      { name: "description", content: "Yesp's three-phase transformation framework: Assess, Transform, Optimise. Evidence-based, senior-led, and structured around your specific business outcomes." },
      { name: "keywords", content: "transformation methodology UK, digital transformation framework, assess transform optimise, business change methodology UK" },
      { property: "og:title", content: "Transformation Framework | Yesp UK" },
      { property: "og:description", content: "A structured three-phase delivery methodology for lasting operational and digital change." },
      { property: "og:url", content: "https://yesp.uk/framework" },
      { property: "og:image", content: "https://yesp.uk/api/og?title=Assess%2C+Transform%2C+Optimise&description=A+three-phase+delivery+methodology+for+lasting+operational+change.&tag=Framework" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://yesp.uk/api/og?title=Assess%2C+Transform%2C+Optimise&description=A+three-phase+delivery+methodology+for+lasting+operational+change.&tag=Framework" },
      { name: "twitter:title", content: "Our Delivery Framework | Yesp UK" },
    ],
    links: [{ rel: "canonical", href: "https://yesp.uk/framework" }],
  }),
  component: FrameworkPage,
});

const phases = [
  {
    no: "01",
    title: "Assess",
    sub: "Fixed fee · 2–3 weeks",
    icon: Settings2,
    badge: "Always first",
    why: "Every transformation programme that skips this phase fails. Technology gets deployed before the business is understood, and the result is expensive tools that nobody uses. We don't start without this.",
    whatHappens: [
      "Operational walkthroughs across all business functions",
      "Systems landscape mapping — what exists, what connects, what doesn't",
      "Data quality and accessibility audit",
      "KPI and performance reporting review",
      "AI readiness evaluation",
      "Stakeholder interviews with senior leadership",
    ],
    youGet: [
      "Current State Assessment — complete documented view of your operations",
      "Opportunity Register — prioritised by ROI and feasibility",
      "ROI Analysis — modelled on your actual data",
      "90-Day Transformation Roadmap — ready to act on immediately",
      "Executive Presentation — structured for leadership buy-in",
      "Working Prototype — functional proof-of-concept",
    ],
  },
  {
    no: "02",
    title: "Transform",
    sub: "Project-based · 8–24 weeks",
    icon: Layers,
    badge: null,
    why: "Phase 2 scope is defined entirely from Phase 1 findings. Nothing is recommended that wasn't identified as a priority in the assessment — so every initiative has a clear ROI case and a defined success metric before work begins.",
    whatHappens: [
      "Implementation of priority opportunities from Phase 1",
      "Process redesign and standardisation",
      "System integration and workflow automation",
      "Data platform and reporting infrastructure",
      "Team training and knowledge transfer",
      "Progress measurement against agreed KPIs",
    ],
    youGet: [
      "Measurable operational improvements with agreed outcomes",
      "Integrated systems with real-time visibility",
      "Automated workflows replacing high-volume manual tasks",
      "Data foundation ready for AI investment",
      "Trained teams capable of sustaining the change",
      "Measured ROI validated against Phase 1 projections",
    ],
  },
  {
    no: "03",
    title: "Optimise",
    sub: "Monthly retainer · Ongoing",
    icon: Sparkles,
    badge: null,
    why: "Transformation is not a one-time project — it's an ongoing capability. The businesses that compound their advantage treat operational improvement as a permanent discipline, not a periodic exercise.",
    whatHappens: [
      "Monthly performance reviews against established KPIs",
      "Identification of new improvement opportunities",
      "Ongoing optimisation of implemented systems and processes",
      "AI model refinement and new use case development",
      "Strategic planning support and roadmap updates",
      "Quarterly business reviews with senior leadership",
    ],
    youGet: [
      "Sustained performance improvement — not a one-time uplift",
      "Early identification of opportunities before they become problems",
      "Compound value as each improvement enables the next",
      "A strategic partner with deep knowledge of your business",
      "Continuous AI capability development",
      "Flexibility as business priorities evolve",
    ],
  },
];

const principles = [
  { icon: <Zap className="h-4 w-4" />, title: "Diagnosis before prescription", desc: "We never recommend a solution before understanding the problem. Phase 1 is non-negotiable — not for us, not for the client." },
  { icon: <BarChart3 className="h-4 w-4" />, title: "Evidence over assumption", desc: "Every recommendation is supported by observed evidence from your business — not best practices borrowed from someone else's." },
  { icon: <TrendingUp className="h-4 w-4" />, title: "Sequence matters", desc: "Operational Excellence before Digital. Digital foundations before AI. Getting the sequence wrong creates expensive technical debt that's hard to undo." },
  { icon: <Check className="h-4 w-4" />, title: "Outcomes defined upfront", desc: "Before any Phase 2 work begins, success metrics are agreed in writing. You know exactly what you're getting before any work starts." },
  { icon: <Shield className="h-4 w-4" />, title: "Senior people deliver", desc: "No handoffs. The senior consultants involved in scoping your engagement are the people who deliver it — no junior staff after signing." },
  { icon: <Settings2 className="h-4 w-4" />, title: "We build your capability", desc: "Every system we build is documented. Every process is trained. Our goal is to leave your team more capable — not dependent on us returning." },
];

function FrameworkPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <SiteNav />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="ink-glow grain relative overflow-hidden bg-[var(--ink)] text-white">
          <div className="container-x pb-0 pt-16 sm:pt-24 lg:pt-36">
            <div className="max-w-3xl pb-0">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-white/40">Delivery Framework</p>
              <h1 className="text-[2.15rem] leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Assess, Transform,<br />Optimise.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-white/55">
                Every engagement follows the same structured path. We understand your business first, build the ROI case, then deliver. No shortcuts.
              </p>
            </div>
          </div>

          {/* Phase strip */}
          <div className="mt-12 border-t border-white/[0.07]">
            <div className="container-x grid grid-cols-3">
              {phases.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={p.no} className={`px-5 py-6 md:px-8 ${i > 0 ? "border-l border-white/[0.07]" : ""}`}>
                    <div className="mb-2 text-white/25"><Icon className="h-4 w-4" /></div>
                    <div className="font-mono text-[11px] text-white/25">{p.no}</div>
                    <div className="mt-0.5 text-sm font-medium text-white/60">{p.title}</div>
                    <div className="mt-0.5 text-xs text-white/30">{p.sub}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Phase details ─────────────────────────────────────────── */}
        {phases.map((p, i) => {
          const Icon = p.icon;
          return (
            <section key={p.no} className={`border-b border-border ${i % 2 === 1 ? "bg-secondary/40" : "bg-white"}`}>
              <div className="container-x py-14 md:py-20">

                {/* Phase header */}
                <div className="mb-10 flex flex-wrap items-start gap-6 pb-8 border-b border-border">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--ink)] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs text-muted-foreground">{p.no}</span>
                      <h2 className="text-2xl md:text-3xl">{p.title}</h2>
                      {p.badge && (
                        <span className="rounded-full bg-[var(--ink)] px-3 py-1 text-[11px] font-medium text-white">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{p.sub}</p>
                  </div>
                </div>

                <div className="grid gap-10 md:gap-16 lg:grid-cols-12">
                  {/* Left — why */}
                  <div className="lg:col-span-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.why}</p>
                  </div>

                  {/* Right — what happens / what you get */}
                  <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8">
                    <div>
                      <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">What happens</p>
                      <ul className="space-y-0">
                        {p.whatHappens.map((item, j) => (
                          <li
                            key={item}
                            className={`flex items-start gap-3 py-3 text-sm ${j > 0 ? "border-t border-border" : ""}`}
                          >
                            <span className="font-mono text-xs text-muted-foreground shrink-0 pt-0.5 w-4">{j + 1}</span>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">What you get</p>
                      <ul className="space-y-0">
                        {p.youGet.map((item, j) => (
                          <li
                            key={item}
                            className={`flex items-start gap-3 py-3 text-sm ${j > 0 ? "border-t border-border" : ""}`}
                          >
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground/30" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* ── Principles ────────────────────────────────────────────── */}
        <section className="border-b border-border">
          <div className="container-x py-14 md:py-20">
            <div className="mb-12">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">How we work</p>
              <h2 className="text-3xl md:text-4xl">Six delivery principles.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                These aren't values on a wall. They're the specific commitments that make our engagements work — and the things we won't compromise on.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {principles.map((pr, i) => (
                <div key={pr.title} className="rounded-xl border border-border p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-foreground/60">
                      {pr.icon}
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-base font-medium">{pr.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pr.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="ink-glow grain relative overflow-hidden bg-[var(--ink)] text-white">
          <div className="container-x py-14 md:py-20">
            <h2 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl">
              Every engagement starts with Phase 1.
            </h2>
            <p className="mt-4 max-w-md text-base text-white/50">
              The Transformation Assessment gives you everything you need to decide whether and how to proceed — independently or with us.
            </p>
            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
              <Link
                to="/assessment"
                className="inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-medium text-[var(--ink)] transition hover:bg-white/90"
              >
                View Assessment <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="https://yespstudio.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 text-sm text-white/70 transition hover:border-white/40 hover:text-white"
              >
                Book a discovery call
              </a>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
