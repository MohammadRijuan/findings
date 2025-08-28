// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 py-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
        © {new Date().getFullYear()} Findings. All rights reserved.
      </div>
    </footer>
  );
}
