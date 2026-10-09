"use client";

import React from "react";
import { PRODUCTS, Product } from "@/data/products";
import { ShoppingBag, ShieldCheck, Truck, Star, PhoneCall, CheckCircle2, ArrowRight, Code, Mail, Tag } from "lucide-react";

export const APP_VERSION = "v1.0.1";

export default function Home() {
  const handleOrder = (product: Product) => {
    if (product.contactInfo) {
      const text = encodeURIComponent(
        `Halo! Saya tertarik dengan *${product.title}*. Mohon informasi estimasi biaya dan konsultasi proyek.`
      );
      window.open(`https://wa.me/${product.contactInfo.wa}?text=${text}`, "_blank");
    } else {
      const text = encodeURIComponent(
        `Halo! Saya berminat membeli produk *${product.title}* seharga *${product.formattedPrice}* di web jualan.aneta.my.id. Mohon informasi cara pemesanannya.`
      );
      window.open(`https://wa.me/628118135416?text=${text}`, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <ShoppingBag className="w-5 h-5 text-slate-950 font-bold" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white block leading-none">
                  Ginko<span className="text-emerald-400">Biloba</span> Store
                </span>
                <span className="inline-flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  <Tag className="w-2.5 h-2.5" /> {APP_VERSION}
                </span>
              </div>
              <span className="text-xs text-slate-400 font-medium">Official Store & Digital Services</span>
            </div>
          </div>
          <a
            href="https://wa.me/628118135416"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-4 py-2 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-emerald-500/25"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Hubungi Kami</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-800/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))]"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-6">
            <Star className="w-3.5 h-3.5 fill-emerald-400" /> Toko Online & Jasa Pembuatan Aplikasi
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Produk Pilihan & Jasa Digital <br className="hidden sm:inline" />
            Dengan <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Kualitas Terbaik</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Dapatkan produk fisik berkualitas serta layanan pembuatan website dan aplikasi kustom untuk mendukung kebutuhan bisnis Anda.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
              <div>
                <h4 className="font-semibold text-sm text-white">Garansi 100% Original</h4>
                <p className="text-xs text-slate-400">Jaminan produk berkualitas</p>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
              <Code className="w-8 h-8 text-emerald-400 shrink-0" />
              <div>
                <h4 className="font-semibold text-sm text-white">Jasa Web & App</h4>
                <p className="text-xs text-slate-400">Fullstack custom solution</p>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 col-span-2 md:col-span-1">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 shrink-0" />
              <div>
                <h4 className="font-semibold text-sm text-white">Respon Fast Track</h4>
                <p className="text-xs text-slate-400">Layanan ramah & cepat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Products */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">Katalog Produk & Layanan</h2>
            <p className="text-slate-400 text-sm">Pilih produk atau layanan digital dan konsultasi langsung via WhatsApp / Email</p>
          </div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-4 md:mt-0">
            {PRODUCTS.length} Item Tersedia
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className={`group rounded-3xl bg-slate-900/80 border transition-all duration-300 flex flex-col overflow-hidden hover:shadow-xl ${
                product.contactInfo
                  ? "border-emerald-500/60 bg-slate-900/90 hover:border-emerald-400"
                  : "border-slate-800 hover:border-emerald-500/40 hover:shadow-emerald-500/5"
              }`}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {product.badge}
                  </span>
                )}
                <span className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-sm text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-800">
                  {product.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {product.contactInfo && (
                    <div className="mb-6 p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs space-y-2">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Mail className="w-4 h-4 text-emerald-400" />
                        <span>Email: <a href={`mailto:${product.contactInfo.email}`} className="text-emerald-400 underline font-medium">{product.contactInfo.email}</a></span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <PhoneCall className="w-4 h-4 text-emerald-400" />
                        <span>WhatsApp: <a href={`https://wa.me/${product.contactInfo.wa}`} target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline font-medium">+{product.contactInfo.wa}</a></span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="block text-xs text-slate-500 font-medium">
                      {product.contactInfo ? "Harga & Konsultasi" : "Harga Promo"}
                    </span>
                    <span className="text-2xl font-black text-emerald-400 tracking-tight">
                      {product.formattedPrice}
                    </span>
                  </div>

                  <button
                    onClick={() => handleOrder(product)}
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-4 py-2.5 rounded-2xl font-bold text-sm transition-all shadow-md hover:shadow-emerald-500/25 active:scale-95"
                  >
                    <span>{product.contactInfo ? "Hubungi Pengembang" : "Beli Sekarang"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-800/80 bg-slate-950/90 py-8 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4">
          <p>© 2026 GinkoBiloba Store ({APP_VERSION}) — Powered by Next.js & LXC Server</p>
          <p className="mt-1 text-slate-600">jualan.aneta.my.id • Contact: adhitya.akbar@gmail.com / +628118135416</p>
        </div>
      </footer>
    </div>
  );
}
