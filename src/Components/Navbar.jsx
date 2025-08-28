// src/components/Navbar.jsx
"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-white/60 dark:bg-zinc-950/60 border-b border-zinc-200 dark:border-zinc-800">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-bold text-lg">
          <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
            Findings
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/products" className="hover:opacity-80">Products</Link>
          {session ? (
            <>
              <Link href="/dashboard/add-product" className="hover:opacity-80">Dashboard</Link>
              <button onClick={() => signOut({ callbackUrl: "/" })} className="text-sm">Sign out</button>
            </>
          ) : (
            <Link href="/login" className="hover:opacity-80">Login</Link>
          )}
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800"
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <div className="flex flex-col gap-3 p-4">
            <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
            {session ? (
              <>
                <Link href="/dashboard/add-product" onClick={() => setOpen(false)}>Dashboard</Link>
                <button onClick={() => { setOpen(false); signOut({ callbackUrl: "/" }); }} className="text-left">Sign out</button>
              </>
            ) : (
              <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
