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
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Yesp",
      description: "UK Operational Excellence, Digital Transformation and AI Transformation for mid-market businesses.",
      inLanguage: "en-GB",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: "Yesp",
      alternateName: "Yesp UK",
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
      foundingLocation: {
        "@type": "Country",
        name: "United Kingdom",
      },
      areaServed: [
        { "@type": "Country", name: "United Kingdom" },
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
      ],
    },
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
