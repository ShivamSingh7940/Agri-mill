'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Store() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "Our Store", href: "/store" },
    { name: "Our Mission", href: "/mission" },
    { name: "Franchise", href: "/franchise" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-700 to-green-600 text-white py-3 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-16 h-16 shadow-md relative flex items-center justify-center bg-white">
              <Image
                src="https://res.cloudinary.com/djy15bn9n/image/upload/v1758454184/Screenshot_2025-09-21_165520_hdbb1j.png"
                alt="Samriddhi Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-extrabold tracking-wide">Samriddhi</h1>
              <p className="text-xs opacity-90 tracking-widest">Agri Mall</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative transition-colors duration-300 ${
                  link.name === "Our Store"
                    ? "text-orange-400"
                    : "hover:text-orange-400"
                }`}
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
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
          <div className="fixed top-0 left-0 w-72 h-full bg-gradient-to-b from-green-700 to-green-900 text-white p-6 shadow-xl flex flex-col">
            <button
              className="self-end text-2xl mb-6"
              onClick={() => setSidebarOpen(false)}
            >
              ✕
            </button>
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="py-3 px-4 rounded-lg hover:bg-green-600/70 transition-colors duration-300"
                onClick={() => setSidebarOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-green-800 mb-16 tracking-tight drop-shadow-sm">
          🏬 Our Store Locations
        </h1>

        {/* Store Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {stores.map((store, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur-sm border border-green-100 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-500 p-10"
            >
              <h2 className="text-2xl font-bold text-orange-500 mb-6 tracking-tight">
                {store.name}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {store.desc}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                  <h3 className="text-lg font-semibold text-green-700 mb-4 flex items-center gap-2">
                    🌱 Products Available
                  </h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    {store.products.map((p, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        ✅ {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                  <h3 className="text-lg font-semibold text-green-700 mb-4 flex items-center gap-2">
                    ⚙️ Services
                  </h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    {store.services.map((s, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        💡 {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-green-100">
                <iframe className="w-full h-full" loading="lazy"></iframe>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

// Dummy Data
const stores = [
  {
    name: "Kissan Agri Mall - Sonipat",
    desc: "Our flagship store in Sonipat, Haryana offers a complete range of agricultural products and farmer support services.",
    products: [
      "Seeds & Fertilizers",
      "Bio-stimulants & Pesticides",
      "Farm Equipment",
      "Dairy Products",
      "Animal Feed",
    ],
    services: [
      "Soil Testing",
      "Crop Advisory",
      "Equipment Rental",
      "Technical Support",
    ],
  },
  {
    name: "Kissan Agri Mall - Panipat",
    desc: "Serving farmers of Panipat with quality products and trusted agri services.",
    products: ["Seeds", "Fertilizers", "Organic Inputs", "Farm Tools"],
    services: ["Crop Consultation", "Soil Health Check", "Rental Equipment"],
  },
]
