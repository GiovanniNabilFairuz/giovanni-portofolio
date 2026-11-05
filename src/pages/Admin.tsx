import { useEffect, useState } from "react";

type Status = "idle" | "checking" | "ok" | "denied";

const TOKEN_KEY = "giovanni_admin_token";

async function checkToken(token: string): Promise<boolean> {
  try {
    const res = await fetch("/api/admin/me", {
      headers: { Authorization: `Bearer ${token}` },
      credentials: "same-origin",
    });
    return res.ok;
  } catch {
    return false;
  }
}

export default function Admin() {
  const [status, setStatus] = useState<Status>("idle");
  const [token, setToken] = useState("");
  const [inputToken, setInputToken] = useState("");
  const [error, setError] = useState("");

  // On mount: try stored token
  useEffect(() => {
    const stored = localStorage.getItem(TOKEN_KEY);
    if (stored) {
      setStatus("checking");
      checkToken(stored).then((ok) => {
        if (ok) {
          setToken(stored);
          setStatus("ok");
        } else {
          localStorage.removeItem(TOKEN_KEY);
          setStatus("idle");
        }
      });
    }
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setStatus("checking");
    setError("");
    const ok = await checkToken(inputToken);
    if (ok) {
      localStorage.setItem(TOKEN_KEY, inputToken);
      setToken(inputToken);
      setStatus("ok");
    } else {
      setStatus("idle");
      setError("Token salah. Coba lagi.");
    }
  }

  function handleLogout() {
    localStorage.removeItem(TOKEN_KEY);
    setToken("");
    setInputToken("");
    setStatus("idle");
  }

  if (status === "checking") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="font-mono text-sm opacity-60">Memeriksa akses…</p>
      </div>
    );
  }

  if (status !== "ok") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
        >
          <h1 className="mb-1 text-2xl font-black">Admin Login</h1>
          <p className="mb-6 text-sm opacity-50">Hanya pemilik website yang bisa masuk.</p>

          <label className="mb-1 block text-xs font-semibold uppercase tracking-widest opacity-60">
            Admin Token
          </label>
          <input
            id="admin-token-input"
            type="password"
            autoComplete="current-password"
            required
            value={inputToken}
            onChange={(e) => setInputToken(e.target.value)}
            className="mb-4 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 font-mono text-sm outline-none focus:border-white/30"
            placeholder="Paste your ADMIN_TOKEN here"
          />

          {error && <p className="mb-4 text-sm text-red-400">{error}</p>}

          <button
            id="admin-login-btn"
            type="submit"
            className="w-full rounded-lg bg-white px-4 py-2.5 font-bold text-black transition hover:bg-white/90"
          >
            Masuk
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black">Admin Panel</h1>
            <p className="mt-1 text-sm opacity-50">Selamat datang, pemilik website.</p>
          </div>
          <button
            id="admin-logout-btn"
            onClick={handleLogout}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm transition hover:bg-white/10"
          >
            Logout
          </button>
        </div>

        {/* DB Quick Info */}
        <AdminDashboard token={token} />
      </div>
    </div>
  );
}

function AdminDashboard({ token }: { token: string }) {
  const [stats, setStats] = useState<{
    projects: number;
    motionWorks: number;
    messages: number;
  } | null>(null);

  useEffect(() => {
    // Fetch basic stats from the DB via the admin API
    Promise.all([
      fetch("/api/admin/stats", {
        headers: { Authorization: `Bearer ${token}` },
      }).then((r) => (r.ok ? r.json() : null)),
    ]).then(([s]) => {
      if (s) setStats(s as { projects: number; motionWorks: number; messages: number });
    });
  }, [token]);

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {[
        { label: "Projects", value: stats?.projects ?? "–" },
        { label: "Motion Works", value: stats?.motionWorks ?? "–" },
        { label: "Pesan Masuk", value: stats?.messages ?? "–" },
      ].map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <p className="text-4xl font-black">{String(s.value)}</p>
          <p className="mt-1 text-sm opacity-50">{s.label}</p>
        </div>
      ))}

      <div className="sm:col-span-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <p className="text-sm opacity-50 mb-2">Database terhubung ✅ – D1 <code className="text-xs">giovanni-db</code></p>
        <p className="text-xs opacity-40">ADMIN_TOKEN tersimpan sebagai Cloudflare Secret. Hanya kamu yang tahu tokennya.</p>
      </div>
    </div>
  );
}
