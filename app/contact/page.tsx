'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image" 

export default function Contact() {
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
      <header className="bg-green-600 text-white py-3 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform">
  <div className="w-16 h-16 shadow-md relative flex items-center justify-center bg-white">
    <Image
      src="https://res.cloudinary.com/djy15bn9n/image/upload/v1758454184/Screenshot_2025-09-21_165520_hdbb1j.png"
      alt="Samriddhi Logo"
      fill
      className="object-contain"
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
                className={`hover:text-orange-400 transition-colors ${link.name === "Contact" ? "text-orange-400" : ""}`}
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

      {/* Hero */}
      <section className="bg-green-700 text-white py-16 text-center rounded-b-3xl shadow-md">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">📞 Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Have questions or need support? We’re here to help you grow with Kissan Agri Mall.
        </p>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Contact Info & Form */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Info */}
          <div className="bg-white p-6 rounded-lg shadow-lg border">
            <h3 className="text-2xl font-bold text-orange-500 mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Head Office</h4>
                <p className="text-gray-700">
                  Kissan Agri Mall
                  <br /> Sonipat, Haryana <br /> India
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Phone</h4>
                <p className="text-gray-700">+91 98765 43210</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                <p className="text-gray-700">info@kissanagrimall.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Business Hours</h4>
                <p className="text-gray-700">
                  Mon - Sat: 9:00 AM - 7:00 PM <br /> Sun: 10:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg border">
            <h3 className="text-2xl font-bold text-orange-500 mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h4 className="font-bold text-green-600 mb-2">📞 Call Us</h4>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h4 className="font-bold text-green-600 mb-2">📧 Email Us</h4>
            <p className="text-gray-600">info@kissanagrimall.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h4 className="font-bold text-green-600 mb-2">💬 WhatsApp</h4>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
        </section>

        {/* Map */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-green-600 mb-4 text-center">📍 Find Us Here</h3>
          <div className="w-full h-80 rounded-lg overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.65738606639!2d77.0123!3d28.9944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0ff3dbf5b2c5%3A0xd2a02f6a71d8d0b2!2sSonipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 p-8 rounded-lg shadow">
          <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">❓ Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800">How can I become a franchise partner?</h4>
              <p className="text-gray-600">Visit our Franchise page and apply. Our team will reach out to guide you through the process.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Do you provide doorstep delivery?</h4>
              <p className="text-gray-600">Yes, we offer delivery in select locations. Contact us to check availability in your area.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">What are your business hours?</h4>
              <p className="text-gray-600">We’re open Mon-Sat (9 AM - 7 PM) and Sun (10 AM - 5 PM).</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
