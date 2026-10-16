// Secrets of the Worker. They are set in the Cloudflare dashboard, so `wrangler types` can't see them.
declare namespace Cloudflare {
  interface Env {
    TURNSTILE_SECRET_KEY: string;
  }
}
