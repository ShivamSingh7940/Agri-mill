'use client'
import Link from "next/link"
import { useState } from "react"
import Image from "next/image" 

const offerings = [
  {
    icon: "🌾",
    title: "Farm Planning & Design",
    quote: "“A good harvest begins with a good plan.”",
    text: "Scientific farm layout and irrigation design to maximize efficiency, conserve resources, and ensure sustainable yields.",
    cta: "👉 Get Farm Survey",
  },
  {
    icon: "🚜",
    title: "Getting Prepared for Crop",
    quote: "“Well-prepared soil is the foundation of a successful harvest.”",
    text: "We guide and assist in soil preparation, leveling, plowing, raised bed preparation, and field conditioning, so the land is ready for sowing.",
    cta: "👉 Get Farm Prepared",
  },
  {
    icon: "🌱",
    title: "Seeds",
    quote: "“Strong roots grow from strong seeds.”",
    text: "High-quality, farmer-trusted seeds for healthier plants and higher productivity.",
    cta: "👉 Explore Seeds",
  },
  {
    icon: "🌿",
    title: "Fertilizers & Nutrients",
    quote: "“Healthy soil, healthy harvest.”",
    text: "Balanced nutrients and soil boosters for stronger crops and sustainable growth.",
    cta: "👉 Shop Nutrients",
  },
  {
    icon: "🛡️",
    title: "Crop Protection",
    quote: "“Protect your crops, secure your future.”",
    text: "Reliable crop protection products and bio-solutions to safeguard against pests, diseases, and environmental stress.",
    cta: "👉 See Solutions",
  },
]

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "/categories" },
  { name: "Store", href: "/store" },
  { name: "Mission", href: "/mission" },
  { name: "Franchise", href: "/franchise" },
  { name: "Contact", href: "/contact" },
]

export default function Categories() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Header */}
      <header className="bg-gradient-to-r from-green-800 to-green-700 text-white py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 hover:scale-105 transition-transform">
            <div className="w-16 h-16 shadow-lg relative flex items-center justify-center bg-white rounded-full overflow-hidden">
              <Image
                src="https://res.cloudinary.com/djy15bn9n/image/upload/v1758454184/Screenshot_2025-09-21_165520_hdbb1j.png"
                alt="Samriddhi Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wide">Samriddhi</h1>
              <p className="text-sm opacity-70">Agri Mall</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-2 py-1 hover:text-yellow-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-yellow-300 after:scale-x-0 after:origin-left after:transition-transform ${link.name === "Categories" ? "text-yellow-300 after:scale-x-100" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>


      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed top-0 left-0 w-64 h-full bg-green-700 text-white p-6 shadow-lg z-50 flex flex-col">
            <button
              className="self-end text-2xl mb-6"
              onClick={() => setSidebarOpen(false)}
            >
              ✕
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-2 px-3 rounded hover:bg-green-600 transition"
                onClick={() => setSidebarOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <main className="container mx-auto px-6 py-16">

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-green-700 mb-12 tracking-tight">
          🌱 Product Categories
        </h1>

        {/* Why Us Section */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-10">
            🌟 Why Shop With Samriddhi Center?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-tr from-green-50 to-green-100 rounded-3xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">✅ Trusted Products</h3>
              <p className="text-gray-700 mt-2">Only certified seeds, fertilizers, and tools for maximum farmer success.</p>
            </div>
            <div className="p-8 bg-gradient-to-tr from-green-50 to-green-100 rounded-3xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">📦 Wide Variety</h3>
              <p className="text-gray-700 mt-2">From seeds to farm machinery — everything under one roof.</p>
            </div>
            <div className="p-8 bg-gradient-to-tr from-green-50 to-green-100 rounded-3xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">💡 Expert Guidance</h3>
              <p className="text-gray-700 mt-2">Get the best crop advisory and technical support from our agri-experts.</p>
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4 text-center">
            Our Offerings – Everything Your Farm Needs
          </h2>
          <p className="text-gray-600 text-center mb-12">
            “From planning to harvest, Samriddhi Center is your trusted partner in every step of farming.”
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {offerings.map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-4 left-4 text-5xl">{item.icon}</div>
                <h3 className="text-xl font-bold text-orange-500 mb-3 ml-16">{item.title}</h3>
                <p className="italic text-green-700 mb-3 ml-16">{item.quote}</p>
                <p className="text-gray-600 mb-4 ml-16">{item.text}</p>
                <button className="text-green-600 font-semibold hover:underline ml-16">{item.cta}</button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-24 bg-gradient-to-r from-green-700 to-green-600 text-white py-16 rounded-3xl shadow-xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🚜 Ready to Boost Your Farming?</h2>
          <p className="mb-8 text-lg md:text-xl">Visit our nearest store or contact us to explore our full range of agricultural solutions.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/our-store" className="bg-gradient-to-r from-orange-400 to-orange-500 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg">
              🏬 Find a Store
            </Link>
            <Link href="/contact" className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition shadow-lg">
              📞 Contact Us
            </Link>
          </div>
        </section>

      </main>
    </div>
  )
}
