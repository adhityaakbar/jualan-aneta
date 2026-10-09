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
      { url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='%23FFFFFF'/><circle cx='50' cy='50' r='42' fill='%23000000'/><path d='M33 28 V72 M67 28 V72 M33 28 L67 72' stroke='%23FFFFFF' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'/></svg>", type: "image/svg+xml" }
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
