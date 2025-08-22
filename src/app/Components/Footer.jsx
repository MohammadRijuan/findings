export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 py-8 dark:border-zinc-800">
      <div className="container text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Findings. All rights reserved.
      </div>
    </footer>
  );
}
