import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border p-6 rounded-2xl shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
      <p className="mt-2 font-bold">${product.price}</p>
      <Link
        href={`/products/${product.id}`}
        className="mt-4 inline-block text-indigo-600 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}
