'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image" 

export default function Franchise() {
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
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
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
    <p className="text-xs opacity-80">Center</p>
  </div>
</Link>


          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-sm">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:text-orange-400 transition-colors ${link.name === "Franchise" ? "text-orange-400" : ""}`}
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

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20 text-center rounded-b-3xl shadow-md">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          🌱 Bring Samriddhi Center to Your Community
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Your Store, Farmer’s Trust
        </p>
        <p className="text-base max-w-3xl mx-auto leading-relaxed">
          Samriddhi Center is expanding across regions, creating opportunities for entrepreneurs
          and progressive farmers to join our mission. By becoming a franchise partner, you not
          only run a profitable business but also serve your farming community with trust,
          quality, and innovation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
          <Link
            href="/contact"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-orange-600 transition"
          >
            👉 Apply for Franchise
          </Link>
          <Link
            href="/franchise-details"
            className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-100 transition"
          >
            📖 Learn More
          </Link>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Franchise Benefits */}
        <section className="bg-white p-8 rounded-xl shadow-lg border text-center">
          <h2 className="text-2xl font-bold text-orange-500 mb-6">✨ Franchise Benefits</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-left max-w-3xl mx-auto">
            <li>🚀 Proven business model in agri retail</li>
            <li>🌱 Strong brand identity with farmer trust</li>
            <li>📦 Wide product range under one roof</li>
            <li>🎓 Training, support & marketing assistance</li>
            <li>🤝 A mission to grow prosperity together</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
