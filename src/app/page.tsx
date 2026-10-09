"use client";

import React, { useState } from "react";
import { PRODUCTS, Product } from "@/data/products";
import {
  Search,
  ShoppingBag,
  Heart,
  Star,
  X,
  SlidersHorizontal,
  ShieldCheck,
  Check,
  ChevronRight,
  Sparkles,
  PhoneCall,
  Mail,
  ExternalLink,
  Code
} from "lucide-react";

export const APP_VERSION = "v1.0.1";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(PRODUCTS[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [wishlist, setWishlist] = useState<string[]>([]);

  const categories = ["All", "Aksesoris Handphone", "Hobi & Koleksi", "Digital Service"];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

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
    <div className="min-h-screen bg-[#F8FAF8] text-[#1F2937] font-sans antialiased selection:bg-[#3E9B56] selection:text-white flex flex-col">

      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#E4E4E7] px-4 sm:px-8 h-16 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#3E9B56] text-white flex items-center justify-center font-bold text-lg shadow-sm">
              G
            </div>
            <div>
              <span className="font-extrabold text-lg text-[#1F2937] tracking-tight">Ginko Store</span>
              <span className="ml-2 text-[11px] font-semibold bg-[#F4F4F5] text-[#3E9B56] px-2 py-0.5 rounded-full border border-[#E4E4E7]">
                {APP_VERSION}
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#6B7280]">
            <span className="text-[#3E9B56] font-semibold border-b-2 border-[#3E9B56] pb-4 pt-4 cursor-pointer">
              Catalog
            </span>
            <a href="https://www.tokopedia.com/ginkobiloba" target="_blank" rel="noopener noreferrer" className="hover:text-[#3E9B56] transition-colors flex items-center gap-1">
              <span>Tokopedia Store</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a href="https://wa.me/628118135416" target="_blank" rel="noopener noreferrer" className="hover:text-[#3E9B56] transition-colors">
              Custom Development
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.tokopedia.com/ginkobiloba"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B4619] bg-[#E8F5E9] border border-[#3E9B56]/30 px-3 py-1.5 rounded-full hover:bg-[#3E9B56] hover:text-white transition-all"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Tokopedia Official</span>
          </a>
          <a
            href="https://wa.me/628118135416"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3E9B56] hover:bg-[#0B4619] text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Contact WA</span>
          </a>
        </div>
      </header>

      {/* Main 3-Column Layout */}
      <div className="flex-1 max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0">

        {/* Sidebar Filters (3 Cols) */}
        <aside className="lg:col-span-3 p-6 border-r border-[#E4E4E7] bg-white hidden lg:block">
          <div className="space-y-6 sticky top-20">
            <div>
              <h3 className="text-sm font-bold text-[#1F2937] uppercase tracking-wider mb-3 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#3E9B56]" />
                Categories
              </h3>
              <div className="space-y-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                      selectedCategory === cat
                        ? "bg-[#E8F5E9] text-[#0B4619] font-bold"
                        : "text-[#6B7280] hover:bg-[#F8FAF8] hover:text-[#1F2937]"
                    }`}
                  >
                    <span>{cat}</span>
                    {selectedCategory === cat && <Check className="w-4 h-4 text-[#3E9B56]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Promo Card Banner (Dark Forest Green) */}
            <div className="bg-[#0B4619] text-white p-5 rounded-2xl relative overflow-hidden shadow-md">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-24 h-24 bg-[#3E9B56]/30 rounded-full blur-xl"></div>
              <span className="bg-[#FFC107] text-[#0B4619] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                SPECIAL OFFER
              </span>
              <h4 className="text-lg font-bold leading-tight mb-2">Custom App & Website Order</h4>
              <p className="text-xs text-white/80 mb-4 leading-relaxed">
                Need a tailored Next.js app or store? Consult directly with our tech lead.
              </p>
              <a
                href="https://wa.me/628118135416?text=Halo%20saya%20tertarik%20konsultasi%20jasa%20pembuatan%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#FFC107] hover:bg-[#ffb000] text-[#0B4619] text-center font-bold text-sm py-2.5 rounded-xl block transition-colors shadow-sm"
              >
                Consult Project
              </a>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAF8] border border-[#E4E4E7] text-xs text-[#6B7280] space-y-2">
              <div className="flex items-center gap-2 text-[#1F2937] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#3E9B56]" />
                <span>100% Quality Assured</span>
              </div>
              <p>Original items & production-ready software solutions.</p>
            </div>
          </div>
        </aside>

        {/* Center Product Grid (5 to 6 Cols) */}
        <main className="lg:col-span-5 p-6 bg-[#F8FAF8] border-r border-[#E4E4E7]">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
            <input
              type="text"
              placeholder="Search products or services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-[#E4E4E7] rounded-2xl text-sm focus:outline-none focus:border-[#3E9B56] focus:ring-1 focus:ring-[#3E9B56] transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#1F2937]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-[#1F2937]">
              {selectedCategory === "All" ? "All Collections" : selectedCategory}
            </h2>
            <span className="text-xs font-medium text-[#6B7280]">
              Showing {filteredProducts.length} items
            </span>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredProducts.map((product) => {
              const isSelected = selectedProduct?.id === product.id;
              const isFav = wishlist.includes(product.id);

              return (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className={`bg-white rounded-2xl p-4 border transition-all cursor-pointer flex flex-col justify-between relative group ${
                    isSelected
                      ? "border-[#3E9B56] ring-2 ring-[#3E9B56]/20 shadow-md"
                      : "border-[#E4E4E7] hover:border-[#3E9B56]/50 hover:shadow-sm"
                  }`}
                >
                  <button
                    onClick={(e) => toggleWishlist(product.id, e)}
                    className={`absolute top-6 right-6 z-10 p-2 rounded-full backdrop-blur-md transition-all ${
                      isFav
                        ? "bg-red-50 text-red-500"
                        : "bg-white/80 text-[#6B7280] hover:text-red-500 hover:bg-white"
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? "fill-red-500" : ""}`} />
                  </button>

                  <div>
                    <div className="aspect-square bg-[#F8FAF8] rounded-xl overflow-hidden mb-3 relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.badge && (
                        <span className="absolute bottom-2 left-2 bg-[#3E9B56] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <span className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider block mb-1">
                      {product.category}
                    </span>

                    <h3 className="font-bold text-sm text-[#1F2937] line-clamp-2 mb-2 leading-snug">
                      {product.title}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-[#E4E4E7] flex items-center justify-between mt-2">
                    <span className="font-extrabold text-sm text-[#0B4619]">
                      {product.formattedPrice}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOrder(product);
                      }}
                      className="bg-[#3E9B56] hover:bg-[#0B4619] text-white text-xs px-3 py-1.5 rounded-xl font-medium transition-colors"
                    >
                      {product.contactInfo ? "Contact" : "Order"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </main>

        {/* Right Detail Side Drawer (4 Cols) */}
        <aside className="lg:col-span-4 p-6 bg-white border-l border-[#E4E4E7]">
          {selectedProduct ? (
            <div className="sticky top-20 space-y-6">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#F8FAF8] border border-[#E4E4E7] relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
                {selectedProduct.badge && (
                  <span className="absolute top-4 left-4 bg-[#3E9B56] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    {selectedProduct.badge}
                  </span>
                )}
              </div>

              <div>
                <span className="text-xs font-bold text-[#3E9B56] uppercase tracking-wider">
                  {selectedProduct.category}
                </span>
                <h2 className="text-xl font-extrabold text-[#1F2937] mt-1 mb-2 leading-tight">
                  {selectedProduct.title}
                </h2>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-extrabold text-[#0B4619]">
                    {selectedProduct.formattedPrice}
                  </span>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
                  {selectedProduct.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#E4E4E7]">
                <h4 className="text-xs font-bold text-[#1F2937] uppercase tracking-wider">
                  Key Specifications
                </h4>
                <ul className="space-y-2">
                  {selectedProduct.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-[#1F2937]">
                      <Check className="w-4 h-4 text-[#3E9B56] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProduct.contactInfo && (
                <div className="p-4 rounded-xl bg-[#E8F5E9] border border-[#3E9B56]/30 text-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-[#0B4619]">
                    <Mail className="w-4 h-4 text-[#3E9B56]" />
                    <span>Email: <a href={`mailto:${selectedProduct.contactInfo.email}`} className="font-bold underline">{selectedProduct.contactInfo.email}</a></span>
                  </div>
                  <div className="flex items-center gap-2 text-[#0B4619]">
                    <PhoneCall className="w-4 h-4 text-[#3E9B56]" />
                    <span>WhatsApp: <a href={`https://wa.me/${selectedProduct.contactInfo.wa}`} target="_blank" rel="noopener noreferrer" className="font-bold underline">+{selectedProduct.contactInfo.wa}</a></span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E4E4E7] space-y-3">
                {selectedProduct.tokopediaUrl && (
                  <a
                    href={selectedProduct.tokopediaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#E8F5E9] hover:bg-[#3E9B56] text-[#0B4619] hover:text-white border border-[#3E9B56]/40 text-center font-bold text-sm py-3 rounded-2xl transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Beli di Tokopedia Store</span>
                  </a>
                )}

                <button
                  onClick={() => handleOrder(selectedProduct)}
                  className="w-full bg-[#3E9B56] hover:bg-[#0B4619] text-white font-bold text-sm py-3 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{selectedProduct.contactInfo ? "Konsultasi Dev via WhatsApp" : "Pesan Langsung via WhatsApp"}</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-[#6B7280]">
              <p>Select a product to view details.</p>
            </div>
          )}
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E4E4E7] py-8 px-6 text-center text-xs text-[#6B7280] mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold text-[#1F2937]">Ginko Store ({APP_VERSION})</span> — OYOTEE Clean E-Commerce Theme
          </div>
          <div>
            jualan.aneta.my.id • Contact: adhitya.akbar@gmail.com / +628118135416
          </div>
        </div>
      </footer>
    </div>
  );
}
