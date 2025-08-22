"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-white/60 dark:bg-zinc-950/60 border-b border-zinc-200 dark:border-zinc-800">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
            Findings
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/products" className="hover:opacity-80">Products</Link>
          <Link href="/login" className="hover:opacity-80">Login</Link>
          <ThemeToggle />
        </div>

        <button
          className="md:hidden p-2 rounded-lg border border-zinc-200 dark:border-zinc-800"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <div className="flex flex-col gap-3 p-4">
            <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
            <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
