import { Link } from "react-router-dom";
import { navItems, site } from "../config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t-2 border-line bg-bg-2">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="text-3xl font-black">{site.wordmark}/</p>
          <p className="mt-2 text-sm text-muted">{site.professionTag}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-2 text-sm font-bold">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-cyan">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex flex-col gap-2 text-sm font-bold">
          {site.socials.map((s) => (
            <li key={s.url}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink"
              >
                {s.label} — {s.handle}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="border-t border-line px-5 py-4 text-center text-xs text-muted">
        © {year} Giovanni. All rights reserved.
      </p>
    </footer>
  );
}
