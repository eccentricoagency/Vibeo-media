import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import { MotionConfig } from "framer-motion";

import appCss from "../styles.css?url";
import { ContactWidget } from "@/components/landing/ContactWidget";

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

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
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
            className="inline-flex cursor-pointer items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
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
      { title: "Vibeo Media — Premium infrastructure for creators" },
      {
        name: "description",
        content:
          "Vibeo Media: management, legal support and a dedicated platform for creators who want to grow with a serious structure behind them.",
      },
      { name: "author", content: "Vibeo Media" },
      { name: "theme-color", content: "#f8f3e9" },
      { property: "og:title", content: "Vibeo Media — Premium infrastructure for creators" },
      {
        property: "og:description",
        content:
          "Management, legal and a platform for creators. Every application read by hand.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@vibeomedia" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      // ?v= busts the browser favicon cache whenever the mark changes.
      { rel: "icon", href: "/favicon.svg?v=2", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon-32.png?v=2", type: "image/png", sizes: "32x32" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png?v=2" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

/**
 * Scroll reveals and Framer Motion both render their content at opacity:0 and
 * fade it in from JavaScript. If the scripts never run — blocked, failed to
 * load, disabled — the page would be served but look empty. This makes every
 * such element visible in that case, so the content degrades instead of
 * disappearing.
 */
const NO_SCRIPT_FALLBACK = `
  .reveal,
  [style*="opacity:0"] {
    opacity: 1 !important;
    transform: none !important;
  }
`;

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: NO_SCRIPT_FALLBACK }} />
        </noscript>
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
      {/* reducedMotion="user" honours the OS-level "reduce animations" setting
          (GNOME, KDE, macOS, Windows). Without it Framer Motion animates
          regardless of what the visitor asked their system for. */}
      <MotionConfig reducedMotion="user">
        <Outlet />
        <ContactWidget />
      </MotionConfig>
    </QueryClientProvider>
  );
}
