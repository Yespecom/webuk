import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Briefcase, Clock, MapPin } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Yesp" },
      { name: "description", content: "Join Yesp. We're hiring consultants, analysts, and business development professionals to help UK mid-market businesses transform." },
      { property: "og:title", content: "Careers | Yesp" },
      { property: "og:description", content: "Open roles at Yesp — engineering culture, enterprise standards, remote-first." },
    ],
    links: [{ rel: "canonical", href: "https://yesp.uk/careers" }],
  }),
  component: CareersPage,
});

const roles = [
  {
    title: "Sales Development Representative",
    type: "Internship",
    duration: "3-month minimum",
    location: "Remote",
    desc: "Support outbound business development — research prospects, qualify leads, and help build pipeline for senior consultants.",
  },
  {
    title: "Business Intelligence Analyst",
    type: "Internship",
    duration: "3-month minimum",
    location: "Remote",
    desc: "Work alongside delivery teams on data modelling, dashboard builds, and BI tooling for client engagements.",
  },
  {
    title: "Lead Generation Specialist",
    type: "Internship",
    duration: "3-month minimum",
    location: "Remote",
    desc: "Identify and qualify target accounts across UK mid-market sectors — logistics, manufacturing, distribution.",
  },
  {
    title: "Client Acquisition Consultant",
    type: "Contract",
    duration: "Ongoing",
    location: "Remote",
    exp: "1+ year experience required",
    desc: "Own a segment of the new business pipeline — from first contact through to scoped assessment. Requires proven consultative sales experience.",
  },
];

const benefits = [
  { label: "Competitive compensation", desc: "With performance bonuses tied to outcomes." },
  { label: "Health insurance", desc: "Comprehensive cover included." },
  { label: "Professional development", desc: "Annual budget for training, certifications, and conferences." },
  { label: "Flexible working", desc: "Remote-first with flexible PTO." },
  { label: "Global mobility", desc: "Opportunities to work across international engagements." },
];

const processSteps = [
  { no: "01", label: "Online application", desc: "Submit your CV, contact details, and a LinkedIn or portfolio URL." },
  { no: "02", label: "Screening", desc: "A brief call to understand your background and what you're looking for." },
  { no: "03", label: "Technical assessment", desc: "A short task relevant to the role — we keep it practical, not abstract." },
  { no: "04", label: "Interview", desc: "A conversation with the team. We ask about real situations, not hypotheticals." },
  { no: "05", label: "Offer", desc: "We move quickly. You'll hear back within 5 business days of each stage." },
];

function CareersPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <SiteNav />
      <main>

        {/* ── Page header ──────────────────────────────────────────── */}
        <section className="border-b border-border">
          <div className="container-x py-16 md:py-24">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">Careers</p>
            <h1 className="text-4xl md:text-5xl">Join Yesp.</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Engineering culture. Enterprise standards. We work on hard operational problems with UK businesses — and we're looking for people who want to do the same.
            </p>
          </div>
        </section>

        {/* ── Open roles ────────────────────────────────────────────── */}
        <section className="border-b border-border">
          <div className="container-x py-14 md:py-20">
            <div className="mb-10">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Open positions</p>
              <h2 className="text-3xl">4 roles available.</h2>
            </div>
            <div className="space-y-4">
              {roles.map((role) => (
                <div key={role.title} className="rounded-xl border border-border p-7 transition-all duration-200 hover:border-foreground/20 hover:shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-medium">{role.title}</h3>
                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          role.type === "Internship"
                            ? "bg-secondary text-muted-foreground"
                            : "bg-[var(--ink)] text-white"
                        }`}>
                          {role.type}
                        </span>
                      </div>
                      {"exp" in role && (
                        <p className="mt-0.5 text-xs text-muted-foreground">{role.exp}</p>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{role.duration}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{role.location}</span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{role.desc}</p>
                  <a
                    href={`mailto:hello@yesp.uk?subject=Application — ${encodeURIComponent(role.title)}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:gap-2.5"
                  >
                    Apply for this role <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits ──────────────────────────────────────────────── */}
        <section className="border-b border-border bg-secondary/40">
          <div className="container-x py-14 md:py-20">
            <div className="mb-10">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">What we offer</p>
              <h2 className="text-3xl">Benefits.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b) => (
                <div key={b.label} className="rounded-xl border border-border bg-white p-6">
                  <p className="font-medium text-foreground">{b.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Culture ───────────────────────────────────────────────── */}
        <section className="border-b border-border">
          <div className="container-x py-14 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Culture</p>
                <h2 className="text-3xl">How we work.</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We run a blend of engineering rigour and enterprise delivery standards. Friday tech talks, quarterly hackathons, an AI research guild, and open-source contribution time sit alongside governance, accountability, and measurable client outcomes.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We take DEI and accessibility seriously — not as a policy, but as part of how we build.
                </p>
              </div>
              <div>
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Regular practices</p>
                <ul className="space-y-3">
                  {[
                    "Friday tech talks",
                    "Quarterly hackathons",
                    "Mentorship programme",
                    "AI research guild",
                    "International offsites",
                    "Open-source contribution time",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground border-b border-border pb-3 last:border-0">
                      <Briefcase className="h-3.5 w-3.5 shrink-0 text-foreground/25" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Application process ───────────────────────────────────── */}
        <section className="border-b border-border bg-secondary/40">
          <div className="container-x py-14 md:py-20">
            <div className="mb-10">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">How to apply</p>
              <h2 className="text-3xl">Five steps. No surprises.</h2>
              <p className="mt-3 text-sm text-muted-foreground">You'll hear back within 5 business days of each stage.</p>
            </div>
            <div className="space-y-0 max-w-2xl">
              {processSteps.map((step) => (
                <div key={step.no} className="flex gap-6 border-b border-border py-5 last:border-0">
                  <span className="mt-0.5 w-6 shrink-0 font-mono text-xs text-muted-foreground">{step.no}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{step.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="bg-[var(--ink)] text-white">
          <div className="container-x py-14 md:py-20">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-white/30">Get in touch</p>
                <h2 className="text-3xl md:text-4xl">Ready to apply?</h2>
                <p className="mt-4 text-base leading-relaxed text-white/50">
                  Send your CV and a brief note about the role you're interested in to{" "}
                  <a href="mailto:hello@yesp.uk" className="text-white/70 underline underline-offset-2 hover:text-white transition-colors">
                    hello@yesp.uk
                  </a>
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <a
                  href="mailto:hello@yesp.uk?subject=Careers enquiry"
                  className="group inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-all duration-200 hover:bg-white/92 hover:shadow-lg"
                >
                  Email us about a role
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <Link
                  to="/team"
                  className="inline-flex items-center gap-2 border border-white/15 px-6 py-3.5 text-sm text-white/60 transition-all duration-200 hover:border-white/35 hover:text-white"
                >
                  Meet the team first
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
