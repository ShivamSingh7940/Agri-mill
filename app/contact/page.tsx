'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Contact() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState(null)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "Our Store", href: "/store" },
    { name: "Our Mission", href: "/mission" },
    { name: "Franchise", href: "/franchise" },
    { name: "Contact", href: "/contact" },
  ]

  const faqs = [
    { q: "How can I become a franchise partner?", a: "Visit our Franchise page and apply. Our team will reach out to guide you through the process." },
    { q: "Do you provide doorstep delivery?", a: "Yes, we offer delivery in select locations. Contact us to check availability in your area." },
    { q: "What are your business hours?", a: "We’re open Mon-Sat (9 AM - 7 PM) and Sun (10 AM - 5 PM)." },
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
                  link.name === "Contact" ? "text-orange-400 font-semibold" : "hover:text-orange-400"
                }`}
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-white text-2xl" onClick={() => setSidebarOpen(true)}>☰</button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed top-0 left-0 w-72 h-full bg-gradient-to-b from-green-700 to-green-900 text-white p-6 shadow-xl flex flex-col">
            <button className="self-end text-2xl mb-6" onClick={() => setSidebarOpen(false)}>✕</button>
            {navLinks.map(link => (
              <Link key={link.name} href={link.href} className="py-3 px-4 rounded-lg hover:bg-green-600/70 transition-colors duration-300" onClick={() => setSidebarOpen(false)}>{link.name}</Link>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-green-700 text-white py-28 text-center overflow-hidden rounded-b-3xl shadow-lg">
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400 opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-400 opacity-20 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-6">📞 Contact Us</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 leading-relaxed drop-shadow-md">
          Have questions or need support? We’re here to help you grow with Kissan Agri Mall.
        </p>
      </section>

      <main className="container mx-auto px-6 py-16 space-y-20">

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info Card */}
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="text-3xl font-bold text-orange-500 mb-6">Get in Touch</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold mb-1">Head Office</h4>
                <p>Kissan Agri Mall, Sonipat, Haryana, India</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <p>+91 98765 43210</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p>info@kissanagrimall.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Business Hours</h4>
                <p>Mon-Sat: 9 AM - 7 PM | Sun: 10 AM - 5 PM</p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="text-3xl font-bold text-orange-500 mb-6">Send a Message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-500" />
              <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-500" />
              <input type="tel" placeholder="Phone" className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-500" />
              <textarea rows={4} placeholder="Message" className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
              <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">Send Message</button>
            </form>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {["📞 Call Us", "📧 Email Us", "💬 WhatsApp"].map((item, idx) => (
            <div key={idx} className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition transform hover:-translate-y-1">
              <h4 className="font-bold text-green-700 mb-2">{item}</h4>
              <p className="text-gray-600">{item === "📧 Email Us" ? "info@kissanagrimall.com" : "+91 98765 43210"}</p>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.65738606639!2d77.0123!3d28.9944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0ff3dbf5b2c5%3A0xd2a02f6a71d8d0b2!2sSonipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-lg space-y-4">
          <h3 className="text-3xl font-bold text-green-700 text-center mb-6">❓ Frequently Asked Questions</h3>
          {faqs.map((f, idx) => (
            <div key={idx} className="border-b pb-3">
              <button
                className="w-full text-left flex justify-between items-center font-semibold text-gray-800"
                onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
              >
                {f.q}
                <span>{faqOpen === idx ? "−" : "+"}</span>
              </button>
              {faqOpen === idx && <p className="mt-2 text-gray-600">{f.a}</p>}
            </div>
          ))}
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 mt-12">
        <div className="container mx-auto px-6 text-center space-y-4">
          <p>© 2025 Kissan Agri Mall. All rights reserved.</p>
          <div className="flex justify-center gap-4">
            {["Facebook", "Instagram", "Twitter"].map((s, idx) => (
              <a key={idx} href="#" className="hover:text-orange-400 transition">{s}</a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  )
}
