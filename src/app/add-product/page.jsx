"use client";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/firebase.init";
import ProtectedPage from "@/components/ProtectedPage";

export default function AddProductPage() {
  const [product, setProduct] = useState({ name: "", description: "", price: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setProduct({ ...product, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "products"), {
        ...product,
        price: parseFloat(product.price),
        createdAt: serverTimestamp(),
      });
      setProduct({ name: "", description: "", price: "" });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <ProtectedPage>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-6">Add Product</h1>
        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
            Product added successfully!
          </div>
        )}
        <form onSubmit={handleSubmit} className="max-w-md space-y-4">
          <input
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product name"
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border p-2 rounded"
            required
          />
          <input
            name="price"
            type="number"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full border p-2 rounded"
            required
            step="0.01"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </ProtectedPage>
  );
}
