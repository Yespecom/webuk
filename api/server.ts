// Vercel treats `export default function(request)` as Node.js (req, res) style
// and silently ignores the returned Response, causing every request to hang
// until maxDuration (504). Named HTTP-method exports are Vercel's Web API format
// where the returned Response IS sent to the client.

export const config = { maxDuration: 30 };

type FetchHandler = {
  fetch(req: Request, env: unknown, ctx: unknown): Promise<Response>;
};

let cachedServer: FetchHandler | null = null;

async function getServer(): Promise<FetchHandler> {
  if (!cachedServer) {
    // @ts-ignore — dist/server/server.js is generated at build time, no types
    const mod = await import('../dist/server/server.js');
    cachedServer = (mod.default ?? mod) as FetchHandler;
  }
  return cachedServer;
}

// Works for both a Fetch API Headers instance and a plain Node.js headers object.
function getHeader(headers: unknown, name: string): string | null {
  if (!headers) return null;
  if (typeof (headers as Headers).get === 'function') {
    return (headers as Headers).get(name);
  }
  const v = (headers as Record<string, unknown>)[name];
  return Array.isArray(v) ? (v[0] ?? null) : typeof v === 'string' ? v : null;
}

async function handleRequest(request: Request): Promise<Response> {
  try {
    const server = await getServer();

    // Even in Web API (named-export) mode Vercel may pass a Node.js
    // IncomingMessage-like object: bare url ('/') and plain-object headers.
    // Normalise both so srvx / h3's `new URL(request.url)` never throws.
    const raw = request as unknown as Record<string, unknown>;
    const rawHeaders = raw.headers ?? {};
    const rawUrl   = (raw.url as string | undefined) ?? '/';

    const proto = getHeader(rawHeaders, 'x-forwarded-proto') ?? 'https';
    const host  = getHeader(rawHeaders, 'x-forwarded-host')
               ?? getHeader(rawHeaders, 'host')
               ?? 'localhost';
    const fullUrl = rawUrl.startsWith('http') ? rawUrl : `${proto}://${host}${rawUrl}`;

    const headers =
      rawHeaders instanceof Headers
        ? rawHeaders
        : new Headers(
            Object.fromEntries(
              Object.entries(rawHeaders as Record<string, unknown>).map(([k, v]) => [
                k,
                Array.isArray(v) ? v.join(', ') : String(v ?? ''),
              ])
            )
          );

    const method = ((raw.method as string | undefined) ?? 'GET').toUpperCase();
    const bodyless = ['GET', 'HEAD', 'OPTIONS'].includes(method);

    const req = new Request(fullUrl, {
      method,
      headers,
      ...(bodyless ? {} : { body: raw.body as BodyInit, duplex: 'half' }),
    } as RequestInit);

    return await server.fetch(req, process.env, {});
  } catch (err) {
    console.error('[api/server] unhandled error:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}

// Named exports = Vercel Web API format. The returned Response is sent to the
// client. All methods are forwarded: GET/HEAD for pages, POST for server fns.
export const GET     = handleRequest;
export const POST    = handleRequest;
export const PUT     = handleRequest;
export const DELETE  = handleRequest;
export const PATCH   = handleRequest;
export const HEAD    = handleRequest;
export const OPTIONS = handleRequest;
