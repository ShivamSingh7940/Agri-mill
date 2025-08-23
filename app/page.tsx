'use client'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Leaf, Users, Award, Truck, Wrench, ShoppingCart, Phone } from "lucide-react"

export default function Home() {
  // carousel images
  const carouselItems = [
    { id: 1, src: "/images/product1.jpg", title: "Organic Fertilizer" },
    { id: 2, src: "/images/product2.jpg", title: "High Yield Seeds" },
    { id: 3, src: "/images/product3.jpg", title: "Bio Stimulants" },
    { id: 4, src: "/images/product4.jpg", title: "Agri Tools" }
  ]

  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-700 to-green-500 text-white py-3 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform">
            <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Kissan</h1>
              <p className="text-xs opacity-80">Agri Mall</p>
            </div>
          </Link>
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            {["Home","Categories","Our Store","Best Services","Careers","Franchise","Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-yellow-300 transition-colors relative after:block after:h-[2px] after:bg-yellow-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-green-900 to-green-600 flex items-center">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Bio Stimulants <br /> For Modern Farming
            </h2>
            <p className="text-lg opacity-90 max-w-lg">
              Enriched with enzymes, amino acids, vitamins, and proteins to boost crop growth at every stage.
            </p>
            <Link
              href="/store"
              className="inline-block bg-yellow-400 text-green-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition"
            >
              Explore Now
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="bg-white/90 rounded-2xl p-8 shadow-xl text-center space-y-4 max-w-sm">
              <h3 className="text-2xl font-bold text-green-700">Your Growth</h3>
              <p className="text-gray-600">with</p>
              <h3 className="text-2xl font-bold text-green-700">Kissan Agri Mall</h3>
              <div className="bg-green-100 p-4 rounded-lg shadow-inner">
                <p className="text-green-800 font-medium">Join our Franchise & Grow Together 🌱</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-orange-500 mb-6">About Us</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Kissan Agri Mall started its journey in 2019 and has been at the forefront of agricultural innovation.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We provide seeds, fertilizers, bio-products, organic inputs, farm equipment, dairy, poultry, and animal feed— all under one roof.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our integrated farming solutions empower farmers to achieve higher productivity with trust & quality.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/about.jpg"
              alt="About Kissan"
              width={350}
              height={350}
              className="rounded-full shadow-xl hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </section>

      {/* Features / Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-orange-500 mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <Leaf className="mx-auto text-green-600" size={40} />
              <h3 className="font-semibold mt-4">Organic Products</h3>
              <p className="text-gray-600 mt-2 text-sm">Eco-friendly and sustainable farming inputs.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <Users className="mx-auto text-green-600" size={40} />
              <h3 className="font-semibold mt-4">Trusted by Farmers</h3>
              <p className="text-gray-600 mt-2 text-sm">Thousands of farmers rely on us every day.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <Award className="mx-auto text-green-600" size={40} />
              <h3 className="font-semibold mt-4">Quality Guaranteed</h3>
              <p className="text-gray-600 mt-2 text-sm">We deliver only certified and top-quality inputs.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <Truck className="mx-auto text-green-600" size={40} />
              <h3 className="font-semibold mt-4">Pan India Delivery</h3>
              <p className="text-gray-600 mt-2 text-sm">Fast and reliable delivery across the country.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-orange-500 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <Wrench className="mx-auto text-green-600" size={40} />
              <h3 className="font-semibold mt-4">Farm Equipment</h3>
              <p className="text-gray-600 text-sm mt-2">Tools and machinery for efficient farming.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <ShoppingCart className="mx-auto text-green-600" size={40} />
              <h3 className="font-semibold mt-4">One Stop Shop</h3>
              <p className="text-gray-600 text-sm mt-2">All seeds, fertilizers & bio-products in one place.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <Phone className="mx-auto text-green-600" size={40} />
              <h3 className="font-semibold mt-4">24/7 Support</h3>
              <p className="text-gray-600 text-sm mt-2">Expert help for your farming queries anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="opacity-90">Franchise Stores</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">50K+</h3>
            <p className="opacity-90">Farmers Served</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">100+</h3>
            <p className="opacity-90">Product Range</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">5+</h3>
            <p className="opacity-90">Years of Trust</p>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-orange-500 mb-8">Our Products</h2>
          <div className="relative w-full max-w-3xl mx-auto">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {carouselItems.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={800}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                    <p className="mt-4 text-lg font-semibold">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow hover:bg-green-700 transition"
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow hover:bg-green-700 transition"
            >
              ▶
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-orange-500 text-center mb-12">Our Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <Image
                key={i}
                src={`/images/gallery${i}.jpg`}
                alt={`Gallery ${i}`}
                width={400}
                height={300}
                className="rounded-lg shadow-md hover:scale-105 transition-transform object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-orange-500 text-center mb-12">Latest News & Updates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "New Franchise Opened in Pune", desc: "We are expanding to serve farmers closer to home." },
              { title: "Organic Farming Awareness Drive", desc: "Workshops conducted across 5 states to promote eco-friendly farming." },
              { title: "New Product Launch", desc: "Introducing advanced bio-stimulants for better crop yield." }
            ].map((news, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h4 className="font-semibold text-green-700 mb-2">{news.title}</h4>
                <p className="text-gray-600 text-sm">{news.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-green-700 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated With Us</h2>
        <p className="mb-6 opacity-90">Get the latest updates, offers, and news directly in your inbox.</p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none"
          />
          <button className="bg-yellow-400 text-green-900 px-4 py-2 rounded-r-lg font-bold hover:bg-yellow-300 transition">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-green-800 text-white py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Join the Kissan Family Today 🌱</h3>
        <Link
          href="/franchise"
          className="bg-yellow-400 text-green-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
        >
          Become a Partner
        </Link>
        <p className="mt-6 text-sm opacity-80">© {new Date().getFullYear()} Kissan Agri Mall. All rights reserved.</p>
      </footer>
    </div>
  )
}
