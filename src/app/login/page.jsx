"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="container py-16 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <button
        onClick={() => signIn("google")}
        className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700"
      >
        Sign in with Google
      </button>
    </div>
  );
}
