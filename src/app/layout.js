import "./globals.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

export const metadata = {
  title: "Findings",
  description: "Modern product app with Next.js 15",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Do not set dark class here; ThemeToggle will manage it */}
      <body className="bg-white text-gray-900 dark:bg-zinc-950 dark:text-zinc-100 min-h-screen">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
