import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import logoImg from "@/assets/yesp-logo.png";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const megaMenus = {
  services: {
    title: "Services",
    items: [
      { label: "Operational Excellence", desc: "Process mapping, KPI design, bottleneck elimination", to: "/services" as const },
      { label: "Digital Transformation", desc: "System integration, automation, data platforms", to: "/services" as const },
      { label: "AI Transformation", desc: "AI readiness, predictive analytics, intelligent automation", to: "/services" as const },
    ],
    viewAll: { label: "All services", to: "/services" as const },
  },
  industries: {
    title: "Industries",
    items: [
      { label: "Logistics & Fulfilment", desc: "Operational visibility and real-time reporting", to: "/industries" as const },
      { label: "Manufacturing", desc: "Throughput, OEE, and production control", to: "/industries" as const },
      { label: "Distribution", desc: "End-to-end data and inventory optimisation", to: "/industries" as const },
      { label: "Retail", desc: "Unified commerce and demand-led operations", to: "/industries" as const },
      { label: "Supply Chain", desc: "Supplier visibility and risk management", to: "/industries" as const },
      { label: "Professional Services", desc: "Utilisation, profitability, and delivery efficiency", to: "/industries" as const },
    ],
    viewAll: { label: "All industries", to: "/industries" as const },
  },
} as const;

type MegaKey = keyof typeof megaMenus;

export function SiteLogo({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-2.5 font-display text-[16px] font-semibold tracking-tight ${className}`}
    >
      <img
        src={logoImg}
        alt="Yesp"
        width={30}
        height={30}
        className={`h-[30px] w-[30px] object-contain ${dark ? "brightness-0 invert" : "[mix-blend-mode:multiply]"}`}
      />
      <span className="hidden sm:inline">Yesp</span>
    </Link>
  );
}

function NavLink({ to, label }: { to: string; label: string }) {
  const routerState = useRouterState();
  const isActive = routerState.location.pathname === to ||
    (to !== "/" && routerState.location.pathname.startsWith(to));

  return (
    <Link
      to={to}
      className={`relative py-0.5 text-[13px] transition-colors ${
        isActive ? "text-foreground font-medium" : "text-foreground/65 hover:text-foreground"
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute -bottom-[1px] left-0 right-0 h-[1.5px] bg-foreground rounded-full" />
      )}
    </Link>
  );
}

function MobileGroup({
  title,
  items,
  onSelect,
}: {
  title: string;
  items: readonly { label: string; to: string }[];
  onSelect: () => void;
}) {
  return (
    <div>
      <div className="mb-2 px-1 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">{title}</div>
      <div className="flex flex-col">
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            onClick={onSelect}
            className="rounded-lg px-3 py-2.5 text-[14px] text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<MegaKey | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mega = activeMega ? megaMenus[activeMega] : null;

  const plainNavLinks = [
    { label: "Assessment", to: "/assessment" },
    { label: "Framework", to: "/framework" },
    { label: "Why Yesp", to: "/why-yesp" },
    { label: "Team", to: "/team" },
    { label: "Research", to: "/research" },
  ] as const;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border bg-white/90 backdrop-blur-xl shadow-[0_1px_0_oklch(0_0_0/0.06)]"
          : "border-transparent bg-white/80 backdrop-blur-xl"
      }`}
    >
      <div className="container-x flex h-[60px] items-center justify-between gap-8">
        <SiteLogo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {(["services", "industries"] as MegaKey[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveMega((p) => (p === key ? null : key))}
              className={`inline-flex items-center gap-1 text-[13px] transition-colors ${
                activeMega === key ? "text-foreground font-medium" : "text-foreground/65 hover:text-foreground"
              }`}
            >
              {megaMenus[key].title}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${activeMega === key ? "rotate-180" : ""}`}
              />
            </button>
          ))}

          <div className="h-4 w-px bg-border" />

          {plainNavLinks.map((n) => (
            <NavLink key={n.label} to={n.to} label={n.label} />
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href="https://yespstudio.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-md bg-[var(--ink)] px-4 py-2 text-[13px] font-medium text-white transition-all duration-200 hover:bg-[var(--ink)]/90 hover:shadow-md"
          >
            Book a Call
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mega menu dropdown */}
      {activeMega && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setActiveMega(null)}
            className="fixed inset-0 top-[60px] z-40 bg-foreground/5 backdrop-blur-sm"
          />
          <div className="relative z-50 border-t border-border bg-white shadow-lg animate-slide-down">
            <div className="container-x py-8">
              <div className="flex items-center justify-between gap-6 mb-6">
                <p className="font-display text-lg font-medium">{mega?.title}</p>
                <button
                  type="button"
                  onClick={() => setActiveMega(null)}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Close ×
                </button>
              </div>

              <div className={`grid gap-2 ${mega && "items" in mega && mega.items.length > 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
                {mega?.items.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setActiveMega(null)}
                    className="group rounded-lg border border-transparent p-4 transition-all duration-200 hover:border-border hover:bg-secondary"
                  >
                    <div className="font-medium text-sm text-foreground">{item.label}</div>
                    {"desc" in item && (
                      <div className="mt-0.5 text-xs text-muted-foreground">{item.desc}</div>
                    )}
                  </Link>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-border">
                <Link
                  to={mega?.viewAll.to ?? "/"}
                  onClick={() => setActiveMega(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {mega?.viewAll.label} <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Mobile sheet */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent
          side="right"
          className="w-[85vw] max-w-[320px] overflow-hidden border-l border-border !bg-white !p-0 !text-foreground shadow-2xl [&>button]:hidden"
        >
          <div className="flex h-full flex-col">
            <SheetHeader className="flex flex-row items-center justify-between border-b border-border px-5 py-4">
              <SheetTitle className="font-display text-sm font-medium">Menu</SheetTitle>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-foreground/60 hover:bg-secondary hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </SheetHeader>

            <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
              <MobileGroup
                title="Services"
                items={megaMenus.services.items}
                onSelect={() => setMobileOpen(false)}
              />
              <MobileGroup
                title="Industries"
                items={megaMenus.industries.items}
                onSelect={() => setMobileOpen(false)}
              />
              <div className="border-t border-border pt-4">
                <div className="flex flex-col gap-1">
                  {plainNavLinks.map((n) => (
                    <Link
                      key={n.label}
                      to={n.to}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-lg px-3 py-2.5 text-[14px] text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      {n.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-border p-5">
              <a
                href="https://yespstudio.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--ink)] px-4 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[var(--ink)]/90"
              >
                Book a Call <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
