// src/components/AddProductForm.jsx
"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function AddProductForm() {
  const [form, setForm] = useState({ name: "", description: "", price: "" });
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...form, price: Number(form.price) }),
      });
      if (!res.ok) throw new Error("Failed to add product");
      setForm({ name: "", description: "", price: "" });
      setOk(true);
      toast.success("Product added!");
      setTimeout(() => setOk(false), 2500);
    } catch (err) {
      toast.error(err.message || "Error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      {ok && <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">Product added successfully!</div>}
      <form onSubmit={onSubmit} className="max-w-md space-y-4">
        <div>
          <label className="block font-medium mb-1">Product Name</label>
          <input name="name" value={form.name} onChange={onChange} required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea name="description" value={form.description} onChange={onChange} required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block font-medium mb-1">Price ($)</label>
          <input name="price" type="number" step="0.01" value={form.price} onChange={onChange} required className="w-full border p-2 rounded" />
        </div>
        <button disabled={loading} className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </>
  );
}
