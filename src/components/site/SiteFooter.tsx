import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import logoImg from "@/assets/yesp-logo.png";

export function SiteFooter() {
  const cols: Record<string, { label: string; to?: string; href?: string }[]> = {
    Explore: [
      { label: "Services", to: "/services" },
      { label: "Industries", to: "/industries" },
      { label: "Assessment", to: "/assessment" },
      { label: "Research", to: "/research" },
      { label: "Blog", to: "/blog" },
    ],
    Company: [
      { label: "Why Yesp", to: "/why-yesp" },
      { label: "Framework", to: "/framework" },
      { label: "Team", to: "/team" },
      { label: "Careers", to: "/careers" },
      { label: "Contact", href: "https://yespstudio.com/contact" },
    ],
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setPending(true);
    try {
      await sendContactEmail({
        data: { name: form.name, email: form.email, message: form.message },
      });
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent — we'll be in touch within one business day.");
    } catch {
      toast.error("Something went wrong. Please email us directly at hello@yesp.uk");
    } finally {
      setPending(false);
    }
  }

  return (
    <footer className="ink-glow grain relative overflow-hidden border-t border-[var(--ink-border)] bg-[var(--ink)] text-white">
      {/* Contact strip */}
      <div className="relative z-10 border-b border-white/[0.07]">
        <div className="container-x py-12 md:py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/50">Start a conversation</p>
              <h2 className="mt-3 text-2xl leading-tight md:text-3xl">
                Send us a message.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                We respond to every enquiry Mon–Fri, 09:00–17:30 (UK).
              </p>
              <a
                href="mailto:hello@yesp.uk"
                className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                hello@yesp.uk <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <a
              href="https://yespstudio.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-all duration-200 hover:bg-white/92 hover:shadow-lg"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative z-10 container-x py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-5">
            <Link to="/" className="inline-block">
              <img
                src={logoImg}
                alt="Yesp"
                width={52}
                height={52}
                className="h-13 w-13 object-contain"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              Operational Excellence, Digital Transformation, and AI Transformation for UK mid-market businesses.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/35">
              Yesp is the UK practice of{" "}
              <a
                href="https://yespstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 underline underline-offset-4 hover:text-white transition-colors"
              >
                Yesp Studio
              </a>{" "}
              — a global technology partner delivering AI, data engineering, and enterprise transformation across India, UK, US, and Germany.
            </p>
            <div className="mt-6 flex flex-col gap-1.5 text-sm text-white/55">
              <a href="mailto:hello@yesp.uk" className="hover:text-white transition-colors">
                hello@yesp.uk
              </a>
              <span>United Kingdom · Mon–Fri, 09:00–17:30 (UK)</span>
            </div>
          </div>

          {Object.entries(cols).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <div className="text-xs uppercase tracking-[0.2em] text-white/35">{title}</div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {links.map((l) => (
                  <li key={l.label}>
                    {l.href ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                        {l.label}
                      </a>
                    ) : (
                      <Link to={l.to!} className="text-white/60 hover:text-white transition-colors">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-white/35">Research</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  to="/research/hidden-cost-of-operational-reporting"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Operational Reporting Costs
                </Link>
              </li>
              <li>
                <Link
                  to="/research/ai-readiness-foundation-gap"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  AI Readiness Foundation Gap
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-white/40 hover:text-white transition-colors">
                  All research →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.07] pt-7">
          <p className="text-xs text-white/20">© 2026 Yesp</p>
        </div>
      </div>
    </footer>
  );
}
