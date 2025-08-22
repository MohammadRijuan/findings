const features = [
  { icon: "⚡", title: "Fast", desc: "Optimized with Next.js for snappy UX." },
  { icon: "🎨", title: "Clean Design", desc: "Minimal, modern components with Tailwind CSS." },
  { icon: "🛠️", title: "Scalable", desc: "Easily move from mock data to database." },
];

export default function ProductHighlights() {
  return (
    <section className="container py-16">
      <h2 className="text-3xl font-bold">Product Highlights</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="border p-6 rounded-2xl shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="text-3xl">{f.icon}</div>
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
