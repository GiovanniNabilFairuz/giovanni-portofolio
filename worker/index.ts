import { Hono } from "hono";
import { secureHeaders } from "hono/secure-headers";
import { cors } from "hono/cors";
import { env } from "hono/adapter";
import type { Bindings, Variables } from "./types";


const app = new Hono<{ Bindings: Bindings; Variables: Variables }>();

app.use("*", secureHeaders());

// Public API: CORS locked to same origin. No credentials cross origins.
app.use(
  "/api/*",
  cors({
    origin: (origin, c) => (origin === new URL(c.req.url).origin ? origin : ""),
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: false,
  }),
);

app.get("/api/health", (c) => c.json({ ok: true, service: "giovanni" }));

// Every /api/admin/* route requires a Bearer token stored as a secret.
// This secret (ADMIN_TOKEN) is only known to you, the site owner.
app.use("/api/admin/*", async (c, next) => {
  const currentEnv = env<Bindings>(c);

  // Allow bypass in local dev only
  if (
    currentEnv.DEV_BYPASS_ACCESS === "1" &&
    new URL(c.req.url).hostname === "localhost"
  ) {
    c.set("adminEmail", "dev@localhost");
    await next();
    return;
  }

  const auth = c.req.header("Authorization") ?? "";
  const token = auth.replace(/^Bearer\s+/i, "");
  if (!token || token !== currentEnv.ADMIN_TOKEN) {
    return c.json({ error: "unauthorized" }, 401);
  }
  c.set("adminEmail", "admin");
  await next();
});

app.get("/api/admin/me", (c) => {
  return c.json({ email: c.get("adminEmail") });
});

// Returns basic DB statistics for the admin dashboard
app.get("/api/admin/stats", async (c) => {
  const currentEnv = env<Bindings>(c);
  const db = currentEnv.DB;
  if (!db) {
    return c.json({
      projects: 0,
      motionWorks: 0,
      messages: 0,
    });
  }
  const [projects, motionWorks, messages] = await Promise.all([
    db.prepare("SELECT COUNT(*) as n FROM projects").first<{ n: number }>(),
    db.prepare("SELECT COUNT(*) as n FROM motion_works").first<{ n: number }>(),
    db.prepare("SELECT COUNT(*) as n FROM contact_messages").first<{ n: number }>(),
  ]);
  return c.json({
    projects: projects?.n ?? 0,
    motionWorks: motionWorks?.n ?? 0,
    messages: messages?.n ?? 0,
  });
});



// State-changing admin requests require a custom header. Browsers cannot send
// it cross-site without a CORS preflight, which the policy above rejects.
app.use("/api/admin/*", async (c, next) => {
  if (["POST", "PUT", "PATCH", "DELETE"].includes(c.req.method)) {
    if (c.req.header("X-Requested-With") !== "giovanni-admin") {
      return c.json({ error: "missing csrf header" }, 403);
    }
  }
  await next();
});

app.notFound((c) => c.json({ error: "not found" }, 404));

app.onError((err, c) => {
  console.error("unhandled", err);
  return c.json({ error: "internal error" }, 500);
});

export default app;
