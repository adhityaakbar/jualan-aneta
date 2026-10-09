"use client";

import React from "react";
import { PRODUCTS, Product } from "@/data/products";
import {
  ShieldCheck,
  Star,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  Code,
  Mail,
  Sparkles,
  Compass,
  Sun,
  Crown
} from "lucide-react";

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
    <div className="min-h-screen bg-amber-50/40 text-slate-800 font-sans selection:bg-amber-400 selection:text-slate-900 relative overflow-x-hidden">

      {/* Zelda-inspired Sky & Mountain Backdrop (Light Mode & Cheerful) */}
      <div className="absolute inset-x-0 top-0 h-[680px] overflow-hidden pointer-events-none z-0">
        {/* Sky Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-100 to-amber-50/0"></div>

        {/* Sun & Glowing Rays */}
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-amber-200/50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-14 right-1/4 w-32 h-32 bg-amber-300/40 rounded-full blur-xl"></div>

        {/* Distant Mountains (Breath of the Wild Style Silhouettes) */}
        <svg
          className="absolute bottom-0 w-full h-80 opacity-35 text-sky-700/30"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,192L80,181.3C160,171,320,149,480,165.3C640,181,800,235,960,224C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>

        <svg
          className="absolute bottom-0 w-full h-64 opacity-55 text-emerald-800/20"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,224L120,202.7C240,181,480,139,720,160C960,181,1200,267,1320,309.3L1440,352L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>

        <svg
          className="absolute -bottom-2 w-full h-44 text-amber-100/80"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,288L180,261.3C360,235,720,181,1080,213.3C1260,229,1380,277,1440,300L1500,320L1500,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Top Banner */}
      <div className="bg-amber-500/90 backdrop-blur-sm text-slate-950 text-xs font-extrabold py-1.5 px-4 text-center border-b border-amber-600/30 flex items-center justify-center gap-2 relative z-20">
        <Sparkles className="w-3.5 h-3.5 animate-spin" />
        <span>Zelda Fantasy Store — Light & Adventurous Theme ({APP_VERSION})</span>
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-amber-50/80 border-b border-amber-200/80 shadow-xs transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 flex items-center justify-center shadow-md shadow-amber-500/30 border-2 border-amber-200 transform rotate-3 hover:rotate-0 transition-transform">
              <Compass className="w-6 h-6 text-slate-900 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-2xl tracking-tight text-slate-900 block leading-none font-serif">
                  Ginko<span className="text-amber-600">Store</span>
                </span>
                <span className="inline-flex items-center gap-1 bg-amber-200/60 border border-amber-300 text-amber-900 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                  <Crown className="w-3 h-3 text-amber-700" /> {APP_VERSION}
                </span>
              </div>
              <span className="text-xs text-amber-800/80 font-medium tracking-wide">Hyrule-Inspired Craft & Tech Services</span>
            </div>
          </div>

          <a
            href="https://wa.me/628118135416"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 px-5 py-2.5 rounded-2xl font-bold text-sm transition-all shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 active:scale-95 border border-amber-300/60"
          >
            <PhoneCall className="w-4 h-4 stroke-[2.5]" />
            <span>Hubungi Perjalanan</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-200/60 border border-amber-300/80 text-amber-900 text-xs font-bold tracking-wide uppercase mb-6 shadow-xs">
            <Sun className="w-4 h-4 text-amber-600 animate-spin" /> Pegunungan Ceria & Petualangan Digital
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-[1.15] font-serif">
            Jelajahi Produk Pilihan <br className="hidden sm:inline" />
            & Layanan <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-emerald-600 bg-clip-text text-transparent">Digital Kustom</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Temukan barang berkualitas tinggi dan jasa pembuatan website/aplikasi modern dengan sentuhan estetika bersih, simpel, dan menyenangkan.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-amber-200/70 shadow-xs hover:shadow-md transition-shadow flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Garansi Original</h4>
                <p className="text-xs text-slate-600">Kualitas terjamin 100%</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-amber-200/70 shadow-xs hover:shadow-md transition-shadow flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                <Code className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Jasa Web & App</h4>
                <p className="text-xs text-slate-600">Custom Next.js & App</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-amber-200/70 shadow-xs hover:shadow-md transition-shadow flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-sky-700" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Fast Response</h4>
                <p className="text-xs text-slate-600">Siap melayani kebutuhan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Products */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-amber-200/80">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-serif">
                Katalog Produk & Layanan
              </h2>
            </div>
            <p className="text-slate-600 text-sm">Pilih produk fisik atau jasa digital kustom favorit Anda</p>
          </div>
          <span className="text-xs font-bold text-amber-800 bg-amber-200/60 border border-amber-300 px-3 py-1 rounded-full uppercase tracking-wider mt-4 sm:mt-0 self-start sm:self-auto">
            {PRODUCTS.length} Koleksi
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className={`group rounded-3xl bg-white/90 backdrop-blur-sm border transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1 shadow-xs hover:shadow-xl ${
                product.contactInfo
                  ? "border-amber-400 bg-gradient-to-b from-white via-amber-50/20 to-white hover:border-amber-500"
                  : "border-amber-200 hover:border-amber-400"
              }`}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-amber-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-amber-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md border border-amber-300">
                    {product.badge}
                  </span>
                )}
                <span className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md text-amber-200 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">
                  {product.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors font-serif">
                    {product.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {product.contactInfo && (
                    <div className="mb-6 p-4 rounded-2xl bg-amber-100/60 border border-amber-200 text-xs space-y-2">
                      <div className="flex items-center gap-2 text-slate-800">
                        <Mail className="w-4 h-4 text-amber-700" />
                        <span>Email: <a href={`mailto:${product.contactInfo.email}`} className="text-amber-800 font-bold underline">{product.contactInfo.email}</a></span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-800">
                        <PhoneCall className="w-4 h-4 text-amber-700" />
                        <span>WhatsApp: <a href={`https://wa.me/${product.contactInfo.wa}`} target="_blank" rel="noopener noreferrer" className="text-amber-800 font-bold underline">+{product.contactInfo.wa}</a></span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-amber-100 flex items-center justify-between">
                  <div>
                    <span className="block text-[11px] text-amber-800/80 font-bold uppercase tracking-wider">
                      {product.contactInfo ? "Konsultasi Biaya" : "Harga Spesial"}
                    </span>
                    <span className="text-2xl font-black text-amber-700 tracking-tight">
                      {product.formattedPrice}
                    </span>
                  </div>

                  <button
                    onClick={() => handleOrder(product)}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 px-5 py-2.5 rounded-2xl font-bold text-sm transition-all shadow-md hover:shadow-lg active:scale-95 border border-amber-300/60"
                  >
                    <span>{product.contactInfo ? "Hubungi Dev" : "Beli Sekarang"}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t border-amber-200/80 bg-amber-100/50 py-10 text-center text-xs text-slate-600 relative z-10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Compass className="w-4 h-4 text-amber-700" />
            <span className="font-bold text-slate-800 text-sm">GinkoStore Adventurer ({APP_VERSION})</span>
          </div>
          <p>© 2026 GinkoStore — Inspirasi Petualangan & Pembuatan Aplikasi Modern</p>
          <p className="mt-1 text-slate-500">jualan.aneta.my.id • Contact: adhitya.akbar@gmail.com / +628118135416</p>
        </div>
      </footer>
    </div>
  );
}
