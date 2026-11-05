import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-32 text-center">
      <p className="font-hand text-3xl text-muted">oops, page not found</p>
      <h1 className="mt-2 text-6xl font-black">404</h1>
      <Link to="/" className="brut-btn mt-8">Kembali ke Home</Link>
    </section>
  );
}
