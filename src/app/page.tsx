"use client";

import React from "react";
import { PRODUCTS, Product } from "@/data/products";
import {
  ShieldCheck,
  Star,
  ChevronRight,
  PhoneCall,
  CheckCircle2,
  Code,
  Mail,
  Sparkles,
  ShoppingBag
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
    <div className="min-h-screen bg-[#FFFFFF] text-[#1D1D1F] font-sans antialiased selection:bg-[#0071E3] selection:text-white">

      {/* Apple Minimal Top Nav */}
      <header className="sticky top-0 z-50 bg-[#000000]/90 backdrop-blur-md border-b border-white/10 text-white h-[44px]">
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-[12px] font-normal tracking-[0px]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white tracking-tight text-sm">Ginko Store</span>
            <span className="bg-white/10 text-white/80 text-[10px] px-2 py-0.5 rounded-full font-medium">
              {APP_VERSION}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline text-white/70">Official Store & Digital Services</span>
            <a
              href="https://wa.me/628118135416"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0071E3] hover:bg-[#0066CC] text-white px-3 py-1 rounded-full text-[12px] font-normal transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* Cinematic Inverted Hero Section (Apple Style) */}
      <section className="bg-[#000000] text-white pt-16 pb-24 px-6 text-center border-b border-[#E5E7EB]/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#2997FF] text-[14px] font-semibold tracking-wide uppercase mb-3">
            Store & Custom Development
          </p>

          <h1 className="text-[40px] sm:text-[56px] font-bold tracking-tight leading-[1.1] mb-5 text-white">
            Curated Products. <br className="hidden sm:inline" />
            <span className="text-white/80">Tailored Digital Craft.</span>
          </h1>

          <p className="text-[17px] sm:text-[21px] text-[#86868B] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Discover original items and custom website & application development built with precision and clarity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#catalog"
              className="bg-[#0071E3] hover:bg-[#0066CC] text-white px-[21px] py-[11px] rounded-full text-[17px] font-normal inline-flex items-center justify-center h-[44px] min-w-[160px] transition-colors"
            >
              Browse Catalog
            </a>
            <a
              href="https://wa.me/628118135416"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2997FF] hover:text-[#0071E3] px-[21px] py-[11px] rounded-full text-[17px] font-normal inline-flex items-center justify-center h-[44px] transition-colors gap-1 group"
            >
              <span>Consult Project</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Value Pillars Section (Light Muted Surface) */}
      <section className="bg-[#F5F5F7] py-16 px-6 border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="bg-white p-6 rounded-[16px] border border-[#E5E7EB]">
            <ShieldCheck className="w-8 h-8 text-[#0071E3] mb-3" />
            <h3 className="text-[17px] font-semibold text-[#1D1D1F] mb-1">100% Original Guarantee</h3>
            <p className="text-[14px] text-[#86868B] leading-relaxed">Top tier physical items with full quality assurance.</p>
          </div>

          <div className="bg-white p-6 rounded-[16px] border border-[#E5E7EB]">
            <Code className="w-8 h-8 text-[#0071E3] mb-3" />
            <h3 className="text-[17px] font-semibold text-[#1D1D1F] mb-1">Custom Web & Mobile</h3>
            <p className="text-[14px] text-[#86868B] leading-relaxed">Full-stack Next.js and high-performance applications.</p>
          </div>

          <div className="bg-white p-6 rounded-[16px] border border-[#E5E7EB]">
            <CheckCircle2 className="w-8 h-8 text-[#0071E3] mb-3" />
            <h3 className="text-[17px] font-semibold text-[#1D1D1F] mb-1">Fast Response Service</h3>
            <p className="text-[14px] text-[#86868B] leading-relaxed">Direct support via WhatsApp & email consultation.</p>
          </div>
        </div>
      </section>

      {/* Catalog Products Section */}
      <section id="catalog" className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[33px] sm:text-[40px] font-semibold text-[#1D1D1F] tracking-tight mb-3">
            Explore the Collection
          </h2>
          <p className="text-[17px] text-[#86868B]">
            Premium items & dedicated engineering services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-[16px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#0071E3]/40 hover:shadow-sm"
            >
              <div>
                <div className="relative aspect-[16/10] bg-[#F5F5F7] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-[#0071E3] text-white text-[12px] font-medium px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="p-8">
                  <span className="text-[12px] font-semibold tracking-wider text-[#86868B] uppercase block mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-[24px] font-semibold text-[#1D1D1F] mb-3 leading-snug">
                    {product.title}
                  </h3>
                  <p className="text-[15px] text-[#424245] mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-[14px] text-[#1D1D1F]">
                        <CheckCircle2 className="w-4 h-4 text-[#0071E3] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {product.contactInfo && (
                    <div className="mb-6 p-4 rounded-[8px] bg-[#F5F5F7] border border-[#E5E7EB] text-[14px] space-y-1.5">
                      <div className="flex items-center gap-2 text-[#1D1D1F]">
                        <Mail className="w-4 h-4 text-[#0071E3]" />
                        <span>Email: <a href={`mailto:${product.contactInfo.email}`} className="text-[#0066CC] font-medium hover:underline">{product.contactInfo.email}</a></span>
                      </div>
                      <div className="flex items-center gap-2 text-[#1D1D1F]">
                        <PhoneCall className="w-4 h-4 text-[#0071E3]" />
                        <span>WhatsApp: <a href={`https://wa.me/${product.contactInfo.wa}`} target="_blank" rel="noopener noreferrer" className="text-[#0066CC] font-medium hover:underline">+{product.contactInfo.wa}</a></span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="px-8 pb-8 pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                <div>
                  <span className="block text-[12px] text-[#86868B] font-normal">
                    {product.contactInfo ? "Starting Price" : "Price"}
                  </span>
                  <span className="text-[21px] font-semibold text-[#1D1D1F]">
                    {product.formattedPrice}
                  </span>
                </div>

                <button
                  onClick={() => handleOrder(product)}
                  className="bg-[#0071E3] hover:bg-[#0066CC] text-white px-[21px] py-[11px] rounded-full text-[15px] font-normal transition-colors h-[44px] inline-flex items-center justify-center gap-1.5"
                >
                  <span>{product.contactInfo ? "Contact Dev" : "Buy Now"}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Minimal Apple Footer */}
      <footer className="bg-[#F5F5F7] border-t border-[#E5E7EB] py-12 text-[#86868B] text-[12px]">
        <div className="max-w-6xl mx-auto px-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-[#1D1D1F]">Ginko Store ({APP_VERSION})</p>
            <p className="mt-1">Copyright © 2026 Ginko Store Inc. All rights reserved.</p>
          </div>
          <div className="text-center sm:text-right">
            <p>jualan.aneta.my.id</p>
            <p className="mt-1">Contact: adhitya.akbar@gmail.com / +628118135416</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
