"use client";
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase/firebase.init";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("User logged in:", result.user);
      window.location.href = "/products";
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="container py-16 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <button
        onClick={handleGoogleLogin}
        className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700"
        disabled={loading}
      >
        {loading ? "Loading..." : "Sign in with Google"}
      </button>
    </div>
  );
}
