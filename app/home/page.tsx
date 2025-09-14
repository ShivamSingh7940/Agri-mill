
'use client'
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  // carousel images
  const [current, setCurrent] = useState(0);

  const carouselItems = [
    { id: 1, src:"https://res.cloudinary.com/dtttjumdo/image/upload/v1757845036/ChatGPT_Image_Sep_14_2025_03_38_28_PM_jjcfva.png" },
    { id: 2, src:"https://res.cloudinary.com/dtttjumdo/image/upload/v1757845036/ChatGPT_Image_Sep_14_2025_03_38_28_PM_jjcfva.png" },
    { id: 3, src:"https://res.cloudinary.com/dtttjumdo/image/upload/v1757845036/ChatGPT_Image_Sep_14_2025_03_38_28_PM_jjcfva.png" },
    { id: 4, src:"https://res.cloudinary.com/dtttjumdo/image/upload/v1757845036/ChatGPT_Image_Sep_14_2025_03_38_28_PM_jjcfva.png" }
  
  ]

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
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight animate-fadeIn">
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
              src="data:image/png;base64,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"
              alt="KAM Logo"
              width={200}
              height={200}
              className="rounded-full shadow-xl hover:scale-105 transition-transform"
            />
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
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-green-600 text-white p-2 rounded-full shadow hover:bg-green-700"
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-green-600 text-white p-2 rounded-full shadow hover:bg-green-700"
            >
              ▶
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index ? "bg-green-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-orange-500 mb-12">Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
                  🌍
                </div>
                <p className="text-gray-700 text-lg font-medium">
                  To be the most preferred choice for farmers in the agri-retail chain.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-10">
                <Image
                  src="/farmer-green-field.png"
                  alt="Farmer in field"
                  width={280}
                  height={180}
                  className="mx-auto rounded-lg mb-6"
                />
                <p className="text-gray-700 text-lg font-medium">
                  To provide integrated Agri solutions to all farm sectors and enhance productivity with commitment & values.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-10 mt-20">
        <div className="container mx-auto px-6 text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold">K</span>
            </div>
            <h3 className="text-2xl font-bold">Kissan Agri Mall</h3>
          </div>
          <p className="text-sm text-green-200">© 2024 Kissan Agri Mall. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="https://facebook.com" className="hover:text-yellow-300">📘</Link>
            <Link href="https://twitter.com" className="hover:text-yellow-300">🐦</Link>
            <Link href="https://instagram.com" className="hover:text-yellow-300">📸</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
