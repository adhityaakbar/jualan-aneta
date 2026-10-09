export interface Product {
  id: string;
  title: string;
  price: number;
  formattedPrice: string;
  category: string;
  badge?: string;
  image: string;
  description: string;
  features: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "softcase-xiaomi-13t",
    title: "Softcase Xiaomi 13T Sliding Camera + Ring Stand",
    price: 90000,
    formattedPrice: "Rp 90.000",
    category: "Aksesoris Handphone",
    badge: "Terlaris",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=800&auto=format&fit=crop",
    description: "Casing pelindung premium Xiaomi 13T dilengkapi slider penutup kamera presisi tinggi serta ring stand magnetik multifungsi.",
    features: [
      "Sliding Camera Cover (Melindungi lensa dari goresan)",
      "Ring Stand 360 Degree Rotation",
      "Support Magnetic Car Mount",
      "Bahan TPU Shockproof Armor",
    ],
  },
  {
    id: "bendera-got-motif-2",
    title: "Bendera Game of Thrones (GoT) Motif 2 - House Stark Banner",
    price: 150000,
    formattedPrice: "Rp 150.000",
    category: "Hobi & Koleksi",
    badge: "Eksklusif",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop",
    description: "Bendera koleksi premium serial Game of Thrones motif House Stark 'Winter Is Coming'. Ukuran standar dinding 90x150cm.",
    features: [
      "Bahan Polyester Premium Tebal",
      "Cetakan Motif Tajam & Anti Pudar",
      "Bonus Gantungan Dinding Pasang Cepat",
      "Official Design House Stark",
    ],
  },
  {
    id: "bendera-got-motif-1",
    title: "Bendera Game of Thrones (GoT) Motif 1 - Direwolf Crest",
    price: 150000,
    formattedPrice: "Rp 150.000",
    category: "Hobi & Koleksi",
    badge: "Eksklusif",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    description: "Bendera dekorasi Game of Thrones motif lambang Direwolf bundar vintage. Cocok untuk kamar, cafe, studio, atau event.",
    features: [
      "Serat Polyester High Quality",
      "Double Stitch Ringan & Kuat",
      "Warna Hitam Vintage Aesthetic",
      "Bonus Pin / Metal Bracket Pasang",
    ],
  },
];
