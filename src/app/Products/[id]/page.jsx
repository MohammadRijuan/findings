"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db } from "@/firebase/firebase.init";
import { doc, getDoc } from "firebase/firestore";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@/lib/firebase";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) setProduct({ id: docSnap.id, ...docSnap.data() });
        else console.log("No such document:", id);
      } catch (err) {
        console.error("Firestore error:", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="mb-2">{product.description}</p>
      <p className="text-lg font-semibold">${product.price}</p>
    </div>
  );
}
