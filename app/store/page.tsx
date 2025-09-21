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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-green-700 text-white py-3 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
         <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform">
  <div className="w-9 h-9 rounded-full overflow-hidden shadow-md relative">
    <Image
      src="https://res.cloudinary.com/djy15bn9n/image/upload/v1758454184/Screenshot_2025-09-21_165520_hdbb1j.png"
      alt="Samriddhi Logo"
      fill
      className="object-cover"
    />
  </div>
  <div>
    <h1 className="text-xl font-bold">Samriddhi</h1>
    <p className="text-xs opacity-80">Agri Mall</p>
  </div>
</Link>


          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-sm">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:text-orange-400 transition-colors ${link.name === "Our Store" ? "text-orange-400" : ""}`}
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
            {navLinks.map(link => (
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold text-center text-green-700 mb-12">
          🏬 Our Store Locations
        </h1>

        {/* Store Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {stores.map((store, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-green-50 to-green-100 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-3xl font-bold text-orange-500 mb-6">{store.name}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{store.desc}</p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">🌱 Products Available</h3>
                  <ul className="text-gray-700 space-y-2">
                    {store.products.map((p, idx) => (
                      <li key={idx} className="flex items-center gap-2">✅ {p}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">⚙️ Services</h3>
                  <ul className="text-gray-700 space-y-2">
                    {store.services.map((s, idx) => (
                      <li key={idx} className="flex items-center gap-2">💡 {s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="w-full h-64 rounded-xl overflow-hidden shadow-md mb-10">
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
    products: ["Seeds & Fertilizers","Bio-stimulants & Pesticides","Farm Equipment","Dairy Products","Animal Feed"],
    services: ["Soil Testing", "Crop Advisory", "Equipment Rental", "Technical Support"],
  },
  {
    name: "Kissan Agri Mall - Panipat",
    desc: "Serving farmers of Panipat with quality products and trusted agri services.",
    products: ["Seeds", "Fertilizers", "Organic Inputs", "Farm Tools"],
    services: ["Crop Consultation", "Soil Health Check", "Rental Equipment"],
  }
]
