'use client'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Wrench, ShoppingCart, Phone } from "lucide-react"

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [current, setCurrent] = useState(0)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "Products", href: "/products" },
    { name: "Store", href: "/store" },
    { name: "Mission", href: "/mission" },
    { name: "Franchise", href: "/franchise" },
    { name: "Contact", href: "/contact" },
  ]

  const carouselItems = [
    { id: 1, src: "https://res.cloudinary.com/dtttjumdo/image/upload/v1757845036/ChatGPT_Image_Sep_14_2025_03_38_28_PM_jjcfva.png", title: "Organic Fertilizer" },
    { id: 2, src: "https://res.cloudinary.com/dtttjumdo/image/upload/v1757846798/ChatGPT_Image_Sep_14_2025_04_15_59_PM_bpb10k.png", title: "High Yield Seeds" },
    { id: 3, src: "https://res.cloudinary.com/dtttjumdo/image/upload/v1757847063/ChatGPT_Image_Sep_14_2025_04_19_56_PM_jxocp5.png", title: "Bio Stimulants" },
    { id: 4, src: "https://res.cloudinary.com/dtttjumdo/image/upload/v1757847317/ChatGPT_Image_Sep_14_2025_04_24_44_PM_joclnm.png", title: "Agri Tools" }
  ]

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
  const nextSlide = () => setCurrent((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">

      {/* Header */}
      <header className="bg-gradient-to-r from-green-800 to-green-700 text-white py-4 shadow-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 hover:scale-105 transition-transform">
            <div className="w-16 h-16 shadow-lg relative flex items-center justify-center bg-white rounded-full overflow-hidden">
              <Image src="https://res.cloudinary.com/djy15bn9n/image/upload/v1758454184/Screenshot_2025-09-21_165520_hdbb1j.png" alt="Samriddhi Logo" fill className="object-contain"/>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wide">Samriddhi</h1>
              <p className="text-sm opacity-70">Agri Mall</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            {navLinks.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-yellow-300 relative after:block after:h-[2px] after:bg-yellow-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-2xl" onClick={() => setSidebarOpen(true)}>☰</button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed top-0 left-0 w-64 h-full bg-green-800 text-white p-6 shadow-2xl flex flex-col">
            <button className="self-end text-2xl mb-6" onClick={() => setSidebarOpen(false)}>✕</button>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="py-2 px-3 rounded hover:bg-green-700 transition" onClick={() => setSidebarOpen(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[550px] bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://res.cloudinary.com/djy15bn9n/image/upload/v1758045085/ChatGPT_Image_Sep_16_2025_11_17_06_PM_bu0pty.png')" }}>
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-6">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">Every Seed of Harvest deserves a Seed of Happiness</h2>
            <p className="text-lg md:text-xl opacity-90 max-w-lg drop-shadow-md">Samriddhi Center – Growing Prosperity with Farmers</p>
            <Link href="/store" className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 text-green-900 font-bold px-8 py-3 rounded-xl shadow-xl hover:scale-105 transition-transform">
              Explore Our Workings
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="bg-white/95 rounded-3xl p-10 shadow-2xl text-center space-y-4 max-w-sm transform hover:scale-105 transition-transform">
              <h3 className="text-3xl font-bold text-green-800">Your Growth</h3>
              <p className="text-gray-700">with</p>
              <h3 className="text-3xl font-bold text-green-800">Samriddhi Agri Mall</h3>
              <div className="bg-green-100 p-5 rounded-xl shadow-inner">
                <p className="text-green-900 font-medium">Join our Franchise & Grow Together 🌱</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-yellow-600 mb-16 tracking-wide">Our Premium Services</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[{
              icon: Wrench, title: "Farm Equipment", desc: "Tools and machinery for efficient farming."
            },{
              icon: ShoppingCart, title: "One Stop Shop", desc: "All seeds, fertilizers & bio-products in one place."
            },{
              icon: Phone, title: "24/7 Support", desc: "Expert help for your farming queries anytime."
            }].map((service, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-transform hover:-translate-y-2">
                <service.icon className="mx-auto text-green-700" size={50} />
                <h3 className="font-semibold text-xl mt-5">{service.title}</h3>
                <p className="text-gray-600 mt-3">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
          {[
            { value: "500+", label: "Franchise Stores" },
            { value: "50K+", label: "Farmers Served" },
            { value: "100+", label: "Product Range" },
            { value: "5+", label: "Years of Trust" }
          ].map((stat,i) => (
            <div key={i}>
              <h3 className="text-5xl font-extrabold drop-shadow-lg">{stat.value}</h3>
              <p className="opacity-90 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      
   
{/* Carousel Section */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-yellow-600 mb-12 tracking-wide">Our Products</h2>

    <div className="relative max-w-6xl mx-auto">

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-[-40px] z-20 -translate-y-1/2 bg-green-800 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition"
      >
        ◀
      </button>

      {/* Carousel Wrapper */}
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {carouselItems.map((item) => (
            <div key={item.id} className="min-w-full flex-shrink-0">
              <Image
                src={item.src}
                alt={item.title}
                width={1200}    // optional for retina
                height={500}    // adjust height as needed
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <p className="mt-4 text-lg font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-[-40px] z-20 -translate-y-1/2 bg-green-800 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition"
      >
        ▶
      </button>

    </div>
  </div>
</section>



      {/* Footer */}
      {/* <footer className="bg-green-900 text-white py-16 text-center">
        <h3 className="text-3xl font-bold mb-6">Join the Kissan Family Today 🌱</h3>
        <Link href="/franchise" className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-green-900 px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl">
          Become a Partner
        </Link>
        <p className="mt-6 text-sm opacity-80">© {new Date().getFullYear()} Samriddhi Agri Mall. All rights reserved.</p>
      </footer> */}
      {/* News & Updates Section */}
<section className="py-24 bg-gray-100">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-yellow-600 text-center mb-16 tracking-wide">Latest News & Updates</h2>
    <div className="grid md:grid-cols-3 gap-10">
      {[
        { title: "New Franchise Opened in Pune", desc: "We are expanding to serve farmers closer to home." },
        { title: "Organic Farming Awareness Drive", desc: "Workshops conducted across 5 states to promote eco-friendly farming." },
        { title: "New Product Launch", desc: "Introducing advanced bio-stimulants for better crop yield." }
      ].map((news, i) => (
        <div key={i} className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-transform hover:-translate-y-2">
          <h4 className="font-semibold text-green-800 text-xl mb-3">{news.title}</h4>
          <p className="text-gray-700 text-sm">{news.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Newsletter Signup Section */}
<section className="py-20 bg-green-700 text-white text-center">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold mb-4">Stay Updated With Us</h2>
    <p className="mb-8 opacity-90 text-lg">Get the latest updates, offers, and news directly in your inbox.</p>
    <div className="flex justify-center max-w-md mx-auto">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-3 rounded-l-xl text-gray-800 w-full focus:outline-none"
      />
      <button className="bg-yellow-400 text-green-900 px-6 py-3 rounded-r-xl font-bold hover:bg-yellow-300 transition shadow-lg">
        Subscribe
      </button>
    </div>
  </div>
</section>

{/* Footer CTA Section */}
<footer className="bg-green-900 text-white py-20 text-center">
  <div className="container mx-auto px-6">
    <h3 className="text-3xl font-bold mb-6">Join the Samriddhi Family Today 🌱</h3>
    <Link
      href="/franchise"
      className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-green-900 px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl"
    >
      Become a Partner
    </Link>
    <p className="mt-8 text-sm opacity-80">© {new Date().getFullYear()} Samriddhi Agri Mall. All rights reserved.</p>
  </div>
</footer>

    </div>
  )
}
