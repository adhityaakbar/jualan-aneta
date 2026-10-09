import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ginko Store — Official Store & Custom App Development",
  description: "Toko resmi Ginko Store menyediakan aksesoris HP, koleksi hobi eksklusif, dan jasa pembuatan aplikasi & website custom.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='%23FFFFFF'/><rect x='5' y='5' width='90' height='90' rx='18' fill='%233E9B56'/><text x='50' y='68' font-size='58' font-weight='900' text-anchor='middle' fill='%23FFFFFF' font-family='sans-serif'>G</text></svg>", type: "image/svg+xml" }
    ]
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
