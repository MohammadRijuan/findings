
import Providers from "@/Components/Providers";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";



export const metadata = {
  title: "Findings",
  description: "Modern product app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-zinc-950 dark:text-zinc-100 min-h-screen">
        <Providers>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
