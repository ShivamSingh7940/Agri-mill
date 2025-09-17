
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
            {["Home","Categories","Our Store","Our Mission","Franchise","Contact"].map((item) => (
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
      <section
  className="relative h-[500px] bg-cover bg-center flex items-center"
  style={{
    backgroundImage:
      "url('https://res.cloudinary.com/djy15bn9n/image/upload/v1758045085/ChatGPT_Image_Sep_16_2025_11_17_06_PM_bu0pty.png')",
  }}
>
  {/* dark overlay */}
  <div className="absolute inset-0 bg-black/40 z-0"></div>

  <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-8 items-center">
    <div className="text-white space-y-6">
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Every Seed of Hard Work  <br /> Deserves a Harvest of Happiness
      </h2>
      <p className="text-lg opacity-90 max-w-lg">
        Samriddhi Center – Growing Prosperity with Farmers
      </p>
      <Link
        href="/store"
        className="inline-block bg-yellow-400 text-green-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition"
      >
        Explore Our Workings
      </Link>
    </div>

    <div className="flex justify-center">
      {/* <div className="bg-white/90 rounded-2xl p-8 shadow-xl text-center space-y-4 max-w-sm"> */}
        {/* <h3 className="text-2xl font-bold text-green-700">Your Growth</h3>
        <p className="text-gray-600">with</p>
        <h3 className="text-2xl font-bold text-green-700">Kissan Agri Mall</h3> */}
        {/* <div className="bg-green-100 p-4 rounded-lg shadow-inner"> */}
          {/* <p className="text-green-800 font-medium">
            Join our Franchise & Grow Together 🌱
          </p> */}
        {/* </div> */}
      {/* </div> */}
    </div>
  </div>
</section>

      {/* About Us */}
     <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    {/* Left side content */}
    <div>
      <h2 className="text-3xl font-bold text-orange-500 mb-6">About Us</h2>

      {/* Headline */}
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug mb-6">
        Dream with Purpose, Plan with Wisdom, Trust the Journey – Get Inspired to Make the Impossible, Possible
      </h1>

      {/* Text content */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        At Samriddhi Center, we believe every big journey begins with a dream. With the right plan, mutual trust, 
        and constant inspiration, together we make the impossible, possible – for farmers, communities, and entrepreneurs.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Samriddhi Center is more than a retail shop – it’s a promise to farmers. With modern agri inputs, expert guidance, 
        and reliable support, we empower farming families to achieve better yields and brighter futures.
      </p>
      <p className="text-gray-700 leading-relaxed">
        From one store, we are now expanding into a nationwide network – so that every farmer, in every corner, 
        can access trusted products and services with ease.
      </p>
    </div>

    {/* Right side highlights (centered) */}
    <div className="flex justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm text-left">
        <h3 className="text-xl font-bold text-green-700 mb-6 text-center">Highlights:</h3>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start gap-2">
            <span>🌾</span>
            <span>Trusted products, tested by farmers</span>
          </li>
          <li className="flex items-start gap-2">
            <span>🌱</span>
            <span>Local support with global vision</span>
          </li>
          <li className="flex items-start gap-2">
            <span>🚜</span>
            <span>One-stop solution for all Smart farm needs</span>
          </li>
          <li className="flex items-start gap-2">
            <span>🤝</span>
            <span>Franchise model for growth & prosperity</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>



      {/* Carousel Section */}
     <section className="py-20 bg-white">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-orange-500 mb-8">Our Products</h2>

    {/* Carousel */}
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

    {/* === Our Offerings Section === */}
    <div className="mt-20 text-left">
      <h2 className="text-3xl font-bold text-green-700 mb-2 text-center">
        Our Offerings – Everything Your Farm Needs Under One Roof
      </h2>
      <p className="text-gray-600 text-center mb-10">
        “From planning to harvest, Samriddhi Center is your trusted partner in every step of farming.”
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-orange-500 mb-2">
            🌾 Farm Planning & Design
          </h3>
          <p className="italic text-green-700 mb-2">
            “A good harvest begins with a good plan.”
          </p>
          <p className="text-gray-600 mb-3">
            Scientific farm layout and irrigation design to maximize efficiency,
            conserve resources, and ensure sustainable yields.
          </p>
          <button className="text-green-600 font-semibold hover:underline">
            👉 Get Farm Survey
          </button>
        </div>

        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-orange-500 mb-2">
            🚜 Getting Prepared for Crop
          </h3>
          <p className="italic text-green-700 mb-2">
            “Well-prepared soil is the foundation of a successful harvest.”
          </p>
          <p className="text-gray-600 mb-3">
            We guide and assist in soil preparation, leveling, plowing, raised bed
            preparation, and field conditioning, so the land is ready for sowing.
          </p>
          <button className="text-green-600 font-semibold hover:underline">
            👉 Get Farm Prepared
          </button>
        </div>

        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-orange-500 mb-2">🌱 Seeds</h3>
          <p className="italic text-green-700 mb-2">
            “Strong roots grow from strong seeds.”
          </p>
          <p className="text-gray-600 mb-3">
            High-quality, farmer-trusted seeds for healthier plants and higher
            productivity.
          </p>
          <button className="text-green-600 font-semibold hover:underline">
            👉 Explore Seeds
          </button>
        </div>

        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-orange-500 mb-2">
            🌿 Fertilizers & Nutrients
          </h3>
          <p className="italic text-green-700 mb-2">
            “Healthy soil, healthy harvest.”
          </p>
          <p className="text-gray-600 mb-3">
            Balanced nutrients and soil boosters for stronger crops and
            sustainable growth.
          </p>
          <button className="text-green-600 font-semibold hover:underline">
            👉 Shop Nutrients
          </button>
        </div>

        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-orange-500 mb-2">
            🛡️ Crop Protection
          </h3>
          <p className="italic text-green-700 mb-2">
            “Protect your crops, secure your future.”
          </p>
          <p className="text-gray-600 mb-3">
            Reliable crop protection products and bio-solutions to safeguard
            against pests, diseases, and environmental stress.
          </p>
          <button className="text-green-600 font-semibold hover:underline">
            👉 See Solutions
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Vision & Mission */}
      {/* <section className="py-20 bg-gradient-to-b from-green-50 to-white">
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
      </section> */}

      {/* Footer */}
      <footer className="bg-green-700 text-white py-10 mt-20">
        <div className="container mx-auto px-6 text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            {/* <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
              {/* <span className="text-white font-bold"> </span> */}
            {/* </div> */} 
            <h3 className="text-2xl font-bold">Samriddhi Center</h3>
          </div>
          <p className="text-sm text-green-200">© 2025 Samriddhi Center – Farming Prosperity, Spreading Trust.</p>
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
