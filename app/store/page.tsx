'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Store() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "Products", href: "/products" },
    { name: "Our Store", href: "/store" },
    { name: "Our Mission", href: "/mission" },
    { name: "Franchise", href: "/franchise" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 font-sans">

      {/* Header */}
      <header className="bg-gradient-to-r from-green-800 to-green-700 text-white py-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 shadow-lg relative flex items-center justify-center bg-white rounded-full overflow-hidden">
              <Image
                src="https://res.cloudinary.com/djy15bn9n/image/upload/v1758454184/Screenshot_2025-09-21_165520_hdbb1j.png"
                alt="Samriddhi Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wide drop-shadow-sm">Samriddhi</h1>
              <p className="text-sm opacity-70">Agri Mall</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative group transition-all duration-300 ${
                  link.name === "Our Store"
                    ? "text-orange-400 font-semibold"
                    : "hover:text-orange-400"
                }`}
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 transition-all group-hover:w-full"></span>
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

        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-green-800 mb-16 tracking-tight drop-shadow-md">
          🏬 Our Store Locations
        </h1>

        {/* Store Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {stores.map((store, i) => (
            <div
              key={i}
              className="relative bg-white/90 backdrop-blur-sm border border-green-100 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-transform duration-500 p-10"
            >
              <div className="absolute -top-10 right-6 text-6xl opacity-20 select-none">🏬</div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6 tracking-tight drop-shadow-sm">
                {store.name}
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">{store.desc}</p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-tr from-white to-green-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
                  <h3 className="text-lg font-semibold text-green-700 mb-4 flex items-center gap-2">🌱 Products Available</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    {store.products.map((p, idx) => (
                      <li key={idx} className="flex items-center gap-2">✅ {p}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-tr from-white to-green-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
                  <h3 className="text-lg font-semibold text-green-700 mb-4 flex items-center gap-2">⚙️ Services</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    {store.services.map((s, idx) => (
                      <li key={idx} className="flex items-center gap-2">💡 {s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="w-full h-64 rounded-3xl overflow-hidden shadow-xl border border-green-100">
                <iframe
                  className="w-full h-full"
                  loading="lazy"
                  src={store.mapEmbed || ""}
                  title={`Map of ${store.name}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </main>
      {/* Why Visit Our Store Section */}
<section className="mt-20 bg-gradient-to-r from-green-100 via-white to-green-100 py-20 rounded-3xl shadow-inner">
  <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-800 mb-12 drop-shadow-sm">
    🌟 Why Visit Our Stores?
  </h2>
  <div className="grid md:grid-cols-3 gap-10">
    <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
      <div className="text-5xl mb-4">💡</div>
      <h3 className="text-xl font-bold text-orange-500 mb-2">Expert Advice</h3>
      <p className="text-gray-700">
        Our agri-specialists guide you on crop planning, soil management, and more for maximum yield.
      </p>
    </div>

    <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
      <div className="text-5xl mb-4">🛒</div>
      <h3 className="text-xl font-bold text-orange-500 mb-2">Premium Products</h3>
      <p className="text-gray-700">
        Only certified seeds, fertilizers, and equipment to ensure healthy crops and sustainable farming.
      </p>
    </div>

    <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
      <div className="text-5xl mb-4">🚚</div>
      <h3 className="text-xl font-bold text-orange-500 mb-2">Fast & Reliable Service</h3>
      <p className="text-gray-700">
        Quick delivery, on-site support, and responsive customer service to make your experience seamless.
      </p>
    </div>
  </div>

  <div className="text-center mt-12">
    <Link
      href="/contact"
      className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl transition"
    >
      📞 Schedule a Visit
    </Link>
  </div>
</section>

    </div>
  )
}

// Dummy Data
const stores = [
  {
    name: "Samriddhi Agri Mall - Sonipat",
    desc: "Our flagship store in Sonipat, Haryana offers a complete range of agricultural products and farmer support services.",
    products: [
      "Seeds & Fertilizers",
      "Bio-stimulants & Pesticides",
      "Farm Equipment",
      "Dairy Products",
      "Animal Feed",
    ],
    services: ["Soil Testing", "Crop Advisory", "Equipment Rental", "Technical Support"],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13624.486146067!2d77.0158!3d29.3312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1f8a77c59c3f%3A0x7d4e0a7f8c5c6a2c!2sSonipat!5e0!3m2!1sen!2sin!4v1695731455281!5m2!1sen!2sin",
  },
  {
    name: "Samriddhi Agri Mall - Panipat",
    desc: "Serving farmers of Panipat with quality products and trusted agri services.",
    products: ["Seeds", "Fertilizers", "Organic Inputs", "Farm Tools"],
    services: ["Crop Consultation", "Soil Health Check", "Rental Equipment"],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13585.34601234!2d76.9758!3d29.3902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1f9b12345678%3A0x7a12345678abcd!2sPanipat!5e0!3m2!1sen!2sin!4v1695731455281!5m2!1sen!2sin",
  },
]
