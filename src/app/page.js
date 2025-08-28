
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import ProductCard from "@/Components/ProductCard";
import ProductHighlights from "@/Components/ProductHighlights";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="mt-16">
        <Hero />
        <ProductHighlights />
        {/* Show products */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
