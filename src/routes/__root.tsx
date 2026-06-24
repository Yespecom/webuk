import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

const SITE_URL = "https://yesp.uk";
const OG_IMAGE = `${SITE_URL}/api/og`;

const schemaOrg = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    // ── WebSite ────────────────────────────────────────────────────────
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Yesp",
      alternateName: ["Yesp UK", "yesp.uk"],
      description: "UK Operational Excellence, Digital Transformation and AI Transformation for mid-market businesses.",
      inLanguage: "en-GB",
      publisher: { "@id": `${SITE_URL}/#organization` },
      about: { "@id": `${SITE_URL}/#organization` },
    },
    // ── Yesp UK ────────────────────────────────────────────────────────
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: "Yesp",
      legalName: "Yesp",
      alternateName: ["Yesp UK", "yesp.uk", "Yesp Consultancy"],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.png`,
        width: 512,
        height: 512,
      },
      image: OG_IMAGE,
      description:
        "Yesp is a UK management consultancy that diagnoses operational problems and builds the systems that fix them. Fixed-fee assessment. Senior-led. No hand-offs.",
      parentOrganization: { "@id": "https://yespstudio.com/#organization" },
      founder: { "@id": `${SITE_URL}/#person-ss` },
      employee: { "@id": `${SITE_URL}/#person-ss` },
      foundingLocation: { "@type": "Country", name: "United Kingdom" },
      areaServed: [
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "AdministrativeArea", name: "England" },
        { "@type": "AdministrativeArea", name: "Scotland" },
        { "@type": "AdministrativeArea", name: "Wales" },
        { "@type": "AdministrativeArea", name: "Northern Ireland" },
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "GB",
        addressRegion: "England",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@yesp.uk",
        contactType: "sales",
        areaServed: "GB",
        availableLanguage: "en",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          opens: "09:00",
          closes: "17:30",
        },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Yesp Transformation Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Transformation Assessment",
              description: "Fixed-fee assessment covering operations, systems, data and AI readiness. Six deliverables in 2–3 weeks including a working prototype.",
              serviceType: "Business Transformation Assessment",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Operational Excellence",
              description: "Process mapping, KPI frameworks, bottleneck elimination and performance management systems.",
              serviceType: "Operational Excellence Consultancy",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Transformation",
              description: "System integration, workflow automation, data platform build and real-time business intelligence.",
              serviceType: "Digital Transformation Consultancy",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Transformation",
              description: "AI readiness assessment, use case identification, pilot development and deployment tied to ROI metrics.",
              serviceType: "AI Transformation Consultancy",
            },
          },
        ],
      },
      sameAs: ["https://yespstudio.com"],
      knowsAbout: [
        "Operational Excellence",
        "Digital Transformation",
        "AI Transformation",
        "Business Process Improvement",
        "System Integration",
        "Data Platform Development",
        "AI Readiness Assessment",
        "UK Mid-Market Businesses",
        "Management Consultancy UK",
        "Business Transformation UK",
      ],
    },
    // ── Yesp Studio (parent org, global / India HQ) ────────────────────
    {
      "@type": ["Organization", "Corporation"],
      "@id": "https://yespstudio.com/#organization",
      name: "Yesp Studio",
      alternateName: ["Yesp Studio India", "Yesp Studio Global", "Yesp"],
      url: "https://yespstudio.com",
      description:
        "Yesp Studio is a global technology partner delivering AI, data engineering, and enterprise transformation across India, UK, US, and Germany. Founded in Tamil Nadu, India by Srinithin Somasundaram.",
      founder: { "@id": `${SITE_URL}/#person-ss` },
      foundingLocation: {
        "@type": "State",
        name: "Tamil Nadu",
        containedInPlace: { "@type": "Country", name: "India" },
      },
      address: {
        "@type": "PostalAddress",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      subOrganization: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Germany" },
        { "@type": "State", name: "Tamil Nadu" },
        { "@type": "State", name: "Karnataka" },
        { "@type": "State", name: "Maharashtra" },
        { "@type": "State", name: "Telangana" },
        { "@type": "State", name: "Andhra Pradesh" },
        { "@type": "State", name: "Kerala" },
        { "@type": "State", name: "Delhi" },
        { "@type": "State", name: "Gujarat" },
        { "@type": "State", name: "Rajasthan" },
        { "@type": "State", name: "West Bengal" },
        { "@type": "State", name: "Uttar Pradesh" },
        { "@type": "State", name: "Punjab" },
        { "@type": "State", name: "Haryana" },
        { "@type": "State", name: "Madhya Pradesh" },
        { "@type": "State", name: "Odisha" },
        { "@type": "State", name: "Assam" },
        { "@type": "State", name: "Bihar" },
      ],
      knowsAbout: [
        "AI Development India",
        "Data Engineering India",
        "Software Development Tamil Nadu",
        "Technology Companies India",
        "Tech Giants India",
        "Software Companies Tamil Nadu",
        "Enterprise Transformation India",
        "AI Consulting India",
        "Digital Transformation India",
        "Software Development UK",
        "IT Companies India",
        "Technology Startups India",
        "Software Companies India",
        "AI Companies Tamil Nadu",
      ],
    },
    // ── Person: Srinithin Somasundaram ─────────────────────────────────
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person-ss`,
      name: "Srinithin Somasundaram",
      givenName: "Srinithin",
      familyName: "Somasundaram",
      jobTitle: "Founder & Managing Director",
      description:
        "Srinithin Somasundaram is the founder of Yesp and Yesp Studio — a digital transformation and AI specialist originally from Tamil Nadu, India, building enterprise technology for UK and global businesses.",
      url: `${SITE_URL}/team`,
      worksFor: [
        { "@id": `${SITE_URL}/#organization` },
        { "@id": "https://yespstudio.com/#organization" },
      ],
      nationality: { "@type": "Country", name: "India" },
      homeLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
      },
      knowsAbout: [
        "Digital Transformation",
        "AI Transformation",
        "Operational Excellence",
        "Enterprise Systems",
        "Data Architecture",
        "Management Consultancy",
        "Business Process Improvement",
        "AI Readiness",
        "Software Development India",
        "Technology Companies Tamil Nadu",
        "AI Consulting",
        "System Integration",
      ],
    },
    // ── Site Navigation (sitelinks signal) ─────────────────────────────
    { "@type": "SiteNavigationElement", "name": "Home", "url": `${SITE_URL}/` },
    { "@type": "SiteNavigationElement", "name": "Services", "url": `${SITE_URL}/services` },
    { "@type": "SiteNavigationElement", "name": "Industries", "url": `${SITE_URL}/industries` },
    { "@type": "SiteNavigationElement", "name": "Assessment", "url": `${SITE_URL}/assessment` },
    { "@type": "SiteNavigationElement", "name": "Framework", "url": `${SITE_URL}/framework` },
    { "@type": "SiteNavigationElement", "name": "Why Yesp", "url": `${SITE_URL}/why-yesp` },
    { "@type": "SiteNavigationElement", "name": "Team", "url": `${SITE_URL}/team` },
    { "@type": "SiteNavigationElement", "name": "Research", "url": `${SITE_URL}/research` },
    { "@type": "SiteNavigationElement", "name": "Blog", "url": `${SITE_URL}/blog` },
    { "@type": "SiteNavigationElement", "name": "Careers", "url": `${SITE_URL}/careers` },
  ],
});

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // Global fallback title/description (each page overrides these)
      {
        title: "Yesp | UK Operational Excellence, Digital & AI Transformation",
      },
      {
        name: "description",
        content:
          "Yesp helps UK businesses transform operations through Operational Excellence, Digital Transformation and AI Transformation. Structured assessments for mid-market businesses.",
      },
      // Keywords — branded + geographic
      {
        name: "keywords",
        content:
          "yesp, yesp uk, yesp studio, yesp srinithin, srinithin somasundaram, digital transformation uk, ai transformation uk, operational excellence uk, management consultancy uk, software companies india, tech companies india, software companies tamil nadu, technology companies india, it companies india, ai consulting india, tech giants india, digital transformation india, enterprise transformation uk, business transformation uk, ai companies india",
      },
      { name: "author", content: "Srinithin Somasundaram" },
      // Robots
      { name: "robots", content: "index, follow" },
      { name: "googlebot", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      // UK geo targeting
      { name: "geo.region", content: "GB" },
      { name: "geo.placename", content: "United Kingdom" },
      { name: "language", content: "en-GB" },
      // Open Graph — global defaults
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Yesp" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Yesp — UK Transformation Consultancy" },
      // Twitter / X
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
      // Schema.org JSON-LD
      { "script:ld+json": schemaOrg },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/icon-192.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "canonical", href: SITE_URL },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster position="bottom-right" richColors />
    </QueryClientProvider>
  );
}
