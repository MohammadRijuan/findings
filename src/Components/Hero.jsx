// src/components/Hero.jsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[60vh] flex items-center bg-hero py-20">
      <div className="container mx-auto px-4 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs border-zinc-200 bg-white/60 dark:border-zinc-800 dark:bg-zinc-900/60">
          ✨ Modern Next.js 15 + App Router
        </p>
        <h1 className="mt-6 text-4xl font-extrabold md:text-5xl">
          Build sleek products with <span className="text-indigo-500">Findings</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-700 dark:text-zinc-300">
          Explore products, view details, and manage your catalog after signing in.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/products" className="rounded-xl bg-indigo-600 px-6 py-3 text-white shadow hover:bg-indigo-700">Browse Products</Link>
          <Link href="/login" className="rounded-xl border border-zinc-200 px-6 py-3 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900">Login</Link>
        </div>
      </div>
    </section>
  );
}
