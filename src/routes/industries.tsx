import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Truck,
  Factory,
  Package,
  ShoppingBag,
  Network,
  Briefcase,
  XCircle,
  CheckCircle2,
  AlertTriangle,
  Layers,
  BarChart2,
  Settings,
} from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

const industryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Logistics & Fulfilment": Truck,
  "Manufacturing": Factory,
  "Distribution": Package,
  "Retail": ShoppingBag,
  "Supply Chain": Network,
  "Professional Services": Briefcase,
};

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      {
        title: "Industries | Logistics, Manufacturing, Retail & Professional Services | Yesp UK",
      },
      {
        name: "description",
        content:
          "Deep operational expertise across UK regulated industries including logistics and fulfilment, manufacturing, distribution, retail, supply chain and professional services.",
      },
      {
        name: "keywords",
        content:
          "logistics transformation UK, manufacturing operational excellence, retail digital transformation, supply chain improvement UK, professional services operations",
      },
      {
        property: "og:title",
        content: "Industries | Logistics, Manufacturing, Retail & Professional Services | Yesp UK",
      },
      {
        property: "og:description",
        content:
          "Operational transformation expertise across logistics, manufacturing, distribution, retail, supply chain and professional services in the UK.",
      },
      { property: "og:url", content: "https://yesp.uk/industries" },
      { property: "og:image", content: "https://yesp.uk/api/og?title=Industries+We+Serve&description=Operational+transformation+across+logistics%2C+manufacturing%2C+retail+%26+professional+services.&tag=Industries" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://yesp.uk/api/og?title=Industries+We+Serve&description=Operational+transformation+across+logistics%2C+manufacturing%2C+retail+%26+professional+services.&tag=Industries" },
      { name: "twitter:title", content: "Industries We Serve | Yesp UK" },
      {
        name: "twitter:description",
        content:
          "Deep operational expertise across UK regulated industries: logistics, manufacturing, retail, distribution, supply chain and professional services.",
      },
    ],
    links: [{ rel: "canonical", href: "https://yesp.uk/industries" }],
  }),
  component: IndustriesPage,
});

const industryDetail = [
  {
    id: "01",
    title: "Logistics & Fulfilment",
    tagline: "From reactive operations to real-time visibility.",
    overview:
      "UK logistics businesses face increasing complexity — more SKUs, more channels, tighter SLAs, and growing customer expectations. Operational underperformance in this environment directly impacts margins and customer retention.",
    challenges: [
      "Manual reporting consuming hours of management time weekly",
      "No real-time visibility across warehouse, transport, and customer service",
      "Disconnected WMS, TMS, and ERP systems creating data silos",
      "KPIs that exist on paper but aren't measured consistently in practice",
      "Inability to identify bottlenecks before they become service failures",
    ],
    opportunities: [
      "Automated reporting dashboards replacing manual weekly packs",
      "Integrated systems giving full operational visibility in real time",
      "Predictive analytics for capacity planning and demand forecasting",
      "Standardised KPI frameworks with clear ownership across shifts",
    ],
  },
  {
    id: "02",
    title: "Manufacturing",
    tagline: "Improve throughput. Reduce waste. Build operational control.",
    overview:
      "UK manufacturers face margin pressure from all directions — energy costs, labour costs, and global competition. Operational Excellence in manufacturing is not a nice-to-have; it is a competitive requirement.",
    challenges: [
      "Production data siloed from finance and customer service",
      "OEE and throughput metrics tracked manually in spreadsheets",
      "Maintenance data not integrated with production planning",
      "Quality issues identified after the fact, not in-process",
      "Manual production reporting delaying management decisions",
    ],
    opportunities: [
      "Integrated production, quality, and maintenance data for real-time OEE visibility",
      "Automated production reporting replacing manual shift summaries",
      "Predictive maintenance using historical fault pattern data",
      "Standardised process documentation reducing variation across shifts",
    ],
  },
  {
    id: "03",
    title: "Distribution",
    tagline: "Connect operations. Create data-driven decision making.",
    overview:
      "Distribution businesses operate at the intersection of suppliers, warehouses, and customers — making end-to-end visibility essential. Most UK distributors lack the operational infrastructure to manage complexity at scale.",
    challenges: [
      "Separate systems for purchasing, inventory, and fulfilment with no shared data",
      "Inventory accuracy issues creating over-ordering and stock-outs simultaneously",
      "Customer reporting produced manually for each account",
      "No centralised view of supplier performance, lead times, or risk",
      "Management decisions made from data that is weeks old",
    ],
    opportunities: [
      "Centralised data platform integrating purchasing, inventory, and fulfilment",
      "Automated customer reporting reducing operational overhead",
      "Inventory optimisation using demand and lead time data",
      "Supplier performance dashboards enabling proactive risk management",
    ],
  },
  {
    id: "04",
    title: "Retail",
    tagline: "Modernise operations. Deliver consistent customer experiences.",
    overview:
      "UK retail is under structural pressure from channel proliferation, cost inflation, and rising customer expectations. Operational efficiency has become the primary lever available to most retailers.",
    challenges: [
      "Disconnected online and offline operations with separate reporting",
      "Inventory data inaccurate across stores, warehouses, and sales channels",
      "Staff scheduling based on intuition rather than demand data",
      "Customer data fragmented across ecommerce, CRM, and POS systems",
      "Manual processes for markdown, replenishment, and performance reporting",
    ],
    opportunities: [
      "Unified view of inventory, sales, and customer data across all channels",
      "Automated demand-based replenishment reducing manual effort and stock error",
      "AI-assisted customer segmentation and personalisation",
      "Real-time performance dashboards replacing manual trading reports",
    ],
  },
  {
    id: "05",
    title: "Supply Chain",
    tagline: "End-to-end visibility from supplier to customer.",
    overview:
      "Supply chain complexity has increased significantly for UK businesses navigating post-Brexit trade flows, global disruption, and margin pressure. Operational visibility across the chain is no longer optional.",
    challenges: [
      "Limited visibility beyond tier-one suppliers",
      "Risk concentrated in manual, relationship-based supplier management",
      "Demand signals not shared effectively between commercial and operations teams",
      "Lead time variability not factored into planning in real time",
      "Sustainability and compliance data collected manually and inconsistently",
    ],
    opportunities: [
      "Supplier performance and risk dashboard with automated data collection",
      "Demand signal integration between commercial forecasts and operational planning",
      "Scenario modelling for supply disruption and demand variability",
      "Compliance and sustainability tracking embedded in procurement workflows",
    ],
  },
  {
    id: "06",
    title: "Professional Services",
    tagline: "Streamline delivery. Improve utilisation. Scale without friction.",
    overview:
      "Professional services firms — from consultancies to accountancies to agencies — often have sophisticated client-facing capabilities but under-developed internal operations. The cost of this mismatch grows with headcount.",
    challenges: [
      "Project profitability visibility delayed by manual time recording and allocation",
      "Resource utilisation tracked in spreadsheets with no real-time view",
      "Client reporting produced manually for each engagement",
      "Revenue recognition and WIP managed without integrated tools",
      "No structured process for knowledge management or methodology scaling",
    ],
    opportunities: [
      "Integrated project management, time, and finance data for real-time profitability",
      "Automated client reporting reducing delivery overhead",
      "Resource utilisation dashboards enabling proactive capacity planning",
      "Standardised delivery methodology reducing variation in engagement quality",
    ],
  },
];

const crossIndustryPatterns = [
  {
    pattern: "Manual reporting is universal",
    desc: "Every industry we work in has the same hidden cost: management time spent producing information instead of using it. The tools differ, but the problem is identical.",
  },
  {
    pattern: "Disconnected systems create silent costs",
    desc: "The cost of data silos is rarely measured directly. It appears as duplicated effort, delayed decisions, and missed opportunities — distributed across the business invisibly.",
  },
  {
    pattern: "KPIs exist but aren't actionable",
    desc: "Most businesses have KPIs. Very few have KPIs that are measured consistently, owned clearly, and connected to the decisions that matter.",
  },
  {
    pattern: "Technology is ahead of process",
    desc: "In almost every case, businesses have more technology than their processes can support. The gap between system capability and operational usage creates waste at scale.",
  },
];

const patternIcons = [AlertTriangle, Layers, BarChart2, Settings];

function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>

        {/* Hero */}
        <section className="border-b border-[var(--ink-border)] bg-[var(--ink)] text-white">
          <div className="container-x py-14 sm:py-20 lg:py-32">
            <p className="mb-6 text-xs uppercase tracking-[0.22em] text-white/40">Who we serve</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Six industries.<br />
              <span className="text-white/35">One structured approach.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/55">
              We work where operational complexity is high and the cost of inefficiency is significant.
            </p>
          </div>

          {/* Industry icon strip */}
          <div className="border-t border-white/10">
            <div className="container-x">
              <div className="grid grid-cols-3 divide-x divide-y divide-white/10 md:grid-cols-6 md:divide-y-0">
                {industryDetail.map((ind) => {
                  const Icon = industryIcons[ind.title] ?? Briefcase;
                  return (
                    <div key={ind.id} className="flex flex-col items-center gap-2 px-4 py-5 text-center">
                      <Icon className="h-5 w-5 text-white/40" />
                      <span className="text-xs text-white/50 leading-tight">{ind.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Cross-industry patterns */}
        <section className="border-b border-border bg-background">
          <div className="container-x py-12 md:py-20">
            <div className="mb-10">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">What we find</p>
              <h2 className="text-4xl font-semibold tracking-tight">
                Different industries. Same root causes.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {crossIndustryPatterns.map((p, i) => {
                const Icon = patternIcons[i] ?? AlertTriangle;
                return (
                  <div key={p.pattern} className="flex gap-4 border border-border bg-background p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary">
                      <Icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">{p.pattern}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Per-industry detail */}
        {industryDetail.map((ind, idx) => {
          const Icon = industryIcons[ind.title] ?? Briefcase;
          return (
            <section key={ind.id} className={`border-b border-border ${idx % 2 === 0 ? "bg-secondary" : "bg-background"}`}>
              <div className="container-x py-16">
                {/* Header */}
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--brand)]/10">
                    <Icon className="h-6 w-6 text-[var(--brand)]" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">{ind.id} / 06</p>
                    <h2 className="text-2xl font-semibold tracking-tight">{ind.title}</h2>
                    <p className="text-sm text-muted-foreground">{ind.tagline}</p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Challenges */}
                  <div className="border border-border bg-background">
                    <div className="flex items-center gap-2 border-b border-border px-5 py-3">
                      <XCircle className="h-4 w-4 text-red-400" />
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">Challenges</span>
                    </div>
                    {ind.challenges.map((c, i) => (
                      <div key={c} className={`flex items-start gap-3 px-5 py-3.5 text-sm ${i > 0 ? "border-t border-border" : ""}`}>
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/60" />
                        <span className="text-muted-foreground">{c}</span>
                      </div>
                    ))}
                  </div>

                  {/* Opportunities */}
                  <div className="border border-border bg-background">
                    <div className="flex items-center gap-2 border-b border-border px-5 py-3">
                      <CheckCircle2 className="h-4 w-4 text-[var(--brand)]" />
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">What becomes possible</span>
                    </div>
                    {ind.opportunities.map((o, i) => (
                      <div key={o} className={`flex items-start gap-3 px-5 py-3.5 text-sm ${i > 0 ? "border-t border-border" : ""}`}>
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]/60" />
                        <span className="text-muted-foreground">{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Stats + CTA */}
        <section className="ink-glow grain relative overflow-hidden bg-[var(--ink)] text-white">
          <div className="container-x py-12 md:py-20">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.22em] text-white/40">Our approach</p>
                <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                  Different problems.<br />
                  <span className="text-white/35">Same method.</span>
                </h2>
                <p className="mt-5 text-base text-white/55">
                  We adapt our lens to your industry. But the structured assessment approach — understand before recommending — applies across all six sectors.
                </p>
                <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                  <a href="https://yespstudio.com/contact" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition hover:bg-white/90">
                    Book Discovery Call <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link to="/assessment" className="inline-flex items-center gap-2 border border-white/25 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10">
                    Start with Assessment
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-px border border-white/10 bg-white/10 self-start">
                {[
                  { k: "6", v: "Industries served" },
                  { k: "£2,500", v: "Assessment fee" },
                  { k: "2–3 wks", v: "Phase 1 duration" },
                ].map((m) => (
                  <div key={m.v} className="flex flex-col gap-1 bg-[var(--ink)] p-6">
                    <div className="font-mono text-3xl font-bold tracking-tight">{m.k}</div>
                    <div className="text-xs text-white/40">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
