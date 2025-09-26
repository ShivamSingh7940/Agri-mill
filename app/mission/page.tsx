'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Samriddhi() {
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
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-green-100 font-sans">

      {/* Header */}
      <header className="bg-gradient-to-r from-green-800 to-green-700 text-white py-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
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
                  link.name === "Franchise"
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

      {/* Hero Section */}
      <section className="relative bg-green-700 text-white py-28 text-center overflow-hidden rounded-b-3xl shadow-lg">
        {/* Decorative Shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400 opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-400 opacity-20 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-6">
          🌱 Together, Let’s Grow Prosperity
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 leading-relaxed drop-shadow-md">
          Empowering Farmers. Enabling Smart Farming. Ensuring Prosperity.
        </p>
        <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-green-100/90">
          Samriddhi Center is committed to transforming farming into smart, sustainable, 
          and profitable growth. Quality inputs, expert guidance, and farmer-first service.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
          <Link href="/contact" className="bg-white text-green-700 px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
            👉 Contact Us
          </Link>
          <Link href="/store" className="bg-white text-green-700 px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
            📍 Find Nearest Center
          </Link>
          <Link href="/partner" className="bg-white text-green-700 px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
            🤝 Partner With Us
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-20 container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 text-center mb-12 drop-shadow-sm">
          🌟 Why Choose Samriddhi?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-xl font-bold text-orange-500 mb-2">Expert Advice</h3>
            <p className="text-gray-700">
              Get guidance on crop planning, soil management, and maximizing yield.
            </p>
          </div>
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="text-xl font-bold text-orange-500 mb-2">Premium Products</h3>
            <p className="text-gray-700">
              Certified seeds, fertilizers, and equipment for healthy crops and sustainable farming.
            </p>
          </div>
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-xl font-bold text-orange-500 mb-2">Fast & Reliable Service</h3>
            <p className="text-gray-700">
              Quick delivery, on-site support, and responsive customer service for all farmers.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-24 bg-green-50 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 text-center mb-12 drop-shadow-sm">
          👩‍🌾 Farmers Love Us
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <p className="text-gray-700 italic mb-4">"{t.text}"</p>
              <p className="font-semibold text-green-700">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-24 bg-gradient-to-r from-green-800 to-green-700 text-white py-20 text-center rounded-3xl shadow-lg">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-md">
          🚀 Ready to Elevate Your Farm?
        </h2>
        <p className="max-w-3xl mx-auto mb-10 leading-relaxed text-green-100/90">
          Visit our centers, get expert advice, or partner with us to unlock your farm's full potential.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link href="/store" className="bg-white text-green-700 px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
            📍 Find Nearest Center
          </Link>
          <Link href="/partner" className="bg-white text-green-700 px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
            🤝 Partner With Us
          </Link>
        </div>
      </section>
    </div>
  )
}

// Dummy Testimonials
const testimonials = [
  { name: "Ramesh Kumar", text: "Samriddhi Center transformed my farm with better seeds and expert guidance!" },
  { name: "Sunita Devi", text: "The crop advisory helped me double my yield in just one season!" },
]
