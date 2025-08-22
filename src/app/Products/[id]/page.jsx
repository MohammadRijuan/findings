import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(id));
        setProduct(found);
      });
  }, [id]);

  if (!product) return <p className="container py-16">Loading product...</p>;

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">{product.details}</p>
      <p className="mt-2 font-bold text-xl">${product.price}</p>
    </div>
  );
}
