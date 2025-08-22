import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center py-20 bg-hero">
      <h1 className="text-4xl font-extrabold md:text-5xl">
        Build sleek products with <span className="text-indigo-500">Findings</span>
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Explore products, view details, and manage your catalog after login.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/products" className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700">
          Browse Products
        </Link>
        <Link href="/login" className="border border-zinc-200 px-6 py-3 rounded-xl hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900">
          Login
        </Link>
      </div>
    </section>
  );
}
