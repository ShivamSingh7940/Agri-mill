'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [current, setCurrent] = useState(0)

  const carouselItems = [
    { id: 1, src:"https://res.cloudinary.com/dtttjumdo/image/upload/v1757845036/ChatGPT_Image_Sep_14_2025_03_38_28_PM_jjcfva.png" },
    { id: 2, src:"https://res.cloudinary.com/dtttjumdo/image/upload/v1757845036/ChatGPT_Image_Sep_14_2025_03_38_28_PM_jjcfva.png" },
    { id: 3, src:"https://res.cloudinary.com/dtttjumdo/image/upload/v1757845036/ChatGPT_Image_Sep_14_2025_03_38_28_PM_jjcfva.png" },
    { id: 4, src:"https://res.cloudinary.com/dtttjumdo/image/upload/v1757845036/ChatGPT_Image_Sep_14_2025_03_38_28_PM_jjcfva.png" }
  ]

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "Our Store", href: "/store" },
    { name: "Our Mission", href: "/mission" },
    { name: "Franchise", href: "/franchise" },
    { name: "Contact", href: "/contact" },
  ]

  const prevSlide = () => setCurrent(prev => prev === 0 ? carouselItems.length - 1 : prev - 1)
  const nextSlide = () => setCurrent(prev => prev === carouselItems.length - 1 ? 0 : prev + 1)

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-green-700 text-white py-3 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 flex items-center justify-between">
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
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-orange-400 transition-colors relative after:block after:h-[2px] after:bg-orange-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
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
      <section
        className="relative h-[500px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/djy15bn9n/image/upload/v1758045085/ChatGPT_Image_Sep_16_2025_11_17_06_PM_bu0pty.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Every Seed of Hard Work <br /> Deserves a Harvest of Happiness
            </h2>
            <p className="text-lg opacity-90 max-w-lg">
              Samriddhi Center – Growing Prosperity with Farmers
            </p>
            <Link
              href="/our-store"
              className="inline-block bg-yellow-400 text-green-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition"
            >
              Explore Our Workings
            </Link>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-orange-500 mb-6">About Us</h2>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug mb-6">
              Dream with Purpose, Plan with Wisdom, Trust the Journey – Get Inspired to Make the Impossible, Possible
            </h1>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At Samriddhi Center, we believe every big journey begins with a dream. With the right plan, mutual trust, 
              and constant inspiration, together we make the impossible, possible – for farmers, communities, and entrepreneurs.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-10 mt-20">
        <div className="container mx-auto px-6 text-center space-y-4">
          <h3 className="text-2xl font-bold">Samriddhi Center</h3>
          <p className="text-sm text-green-200">© 2025 Samriddhi Center – Farming Prosperity, Spreading Trust.</p>
        </div>
      </footer>
    </div>
  )
}
