"use client";

import { useState } from "react";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/firebase/firebase.init";
import ProtectedPage from "@/app/Components/ProtectedPage";

export default function AddProductPage() {
  const [product, setProduct] = useState({ name: "", description: "", price: "" });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setProduct({ ...product, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "products"), {
        name: product.name,
        description: product.description,
        price: parseFloat(product.price),
        createdAt: serverTimestamp()
      });

      setProduct({ name: "", description: "", price: "" });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error adding product:", error);
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
          <div>
            <label className="block font-medium mb-1">Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            ></textarea>
          </div>

          <div>
            <label className="block font-medium mb-1">Price ($)</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
              step="0.01"
              className="w-full border p-2 rounded"
            />
          </div>

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
