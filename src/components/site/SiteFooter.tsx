import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import logoImg from "@/assets/yesp-logo.png";
import { sendContactEmail } from "@/lib/api/contact.functions";

export function SiteFooter() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);

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
      {/* Contact form strip */}
      <div className="relative z-10 border-b border-white/[0.07]">
        <div className="container-x py-12 md:py-16">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
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

            <div className="lg:col-span-7">
              {sent ? (
                <div className="flex h-full items-center border border-white/15 p-8">
                  <div>
                    <div className="text-2xl font-medium">Message received.</div>
                    <p className="mt-3 text-sm text-white/60">
                      We'll be in touch within one UK business day.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-6 text-sm text-white/50 underline underline-offset-4 hover:text-white transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-white/50">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all duration-200 focus:border-white/35 focus:bg-white/[0.07]"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-white/50">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@company.co.uk"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="w-full border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all duration-200 focus:border-white/35 focus:bg-white/[0.07]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-white/50">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your business and what you're trying to solve..."
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="w-full resize-none border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all duration-200 focus:border-white/35 focus:bg-white/[0.07]"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={pending}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-white bg-white px-6 py-3.5 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {pending ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowUpRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
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
