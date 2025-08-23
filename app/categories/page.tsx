import Link from "next/link"

export default function Categories() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-green-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Kissan</h1>
                <p className="text-xs">Agri Mall</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6 text-sm">
              <Link href="/" className="hover:text-green-200 transition-colors">
                Home
              </Link>
              <Link
                href="/categories"
                className="hover:text-green-200 transition-colors text-green-200"
              >
                Categories
              </Link>
              <Link href="/store" className="hover:text-green-200 transition-colors">
                Our Store
              </Link>
              <Link href="/services" className="hover:text-green-200 transition-colors">
                Best Services
              </Link>
              <Link href="/careers" className="hover:text-green-200 transition-colors">
                Careers
              </Link>
              <Link href="/franchise" className="hover:text-green-200 transition-colors">
                Franchise
              </Link>
              <Link href="/contact" className="hover:text-green-200 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold text-center text-green-700 mb-12">
          🌱 Product Categories
        </h1>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg border hover:shadow-2xl hover:border-green-400 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="h-20 w-20 object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="text-2xl font-bold text-orange-500 text-center mb-3">
                {cat.title}
              </h3>
              <p className="text-gray-600 text-center">{cat.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Us Section */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-8">
            🌟 Why Shop With Kissan Agri Mall?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                ✅ Trusted Products
              </h3>
              <p className="text-gray-600">
                Only certified seeds, fertilizers, and tools for maximum farmer success.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                📦 Wide Variety
              </h3>
              <p className="text-gray-600">
                From seeds to farm machinery — everything under one roof.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                💡 Expert Guidance
              </h3>
              <p className="text-gray-600">
                Get the best crop advisory and technical support from our agri-experts.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 bg-green-600 text-white py-16 rounded-2xl shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-4">🚜 Ready to Boost Your Farming?</h2>
          <p className="mb-6 text-lg">
            Visit our nearest store or contact us to explore our full range of agricultural solutions.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/store"
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              🏬 Find a Store
            </Link>
            <Link
              href="/contact"
              className="bg-white text-green-700 hover:bg-green-100 px-6 py-3 rounded-lg font-semibold transition"
            >
              📞 Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

const categories = [
  {
    title: "Seeds & Fertilizers",
    desc: "High-quality seeds and organic fertilizers for better crop yield.",
    img: "/images/seeds.png",
  },
  {
    title: "Farm Equipment",
    desc: "Modern farming equipment and tools for efficient agriculture.",
    img: "/images/equipment.png",
  },
  {
    title: "Bio Products",
    desc: "Organic bio-stimulants and pesticides for sustainable farming.",
    img: "/images/bio.png",
  },
  {
    title: "Dairy Products",
    desc: "Healthy and fresh dairy products for farmers and consumers.",
    img: "/images/dairy.png",
  },
  {
    title: "Animal Feed",
    desc: "Nutritious feed for livestock to enhance growth and health.",
    img: "/images/feed.png",
  },
  {
    title: "Greenhouse Solutions",
    desc: "Advanced greenhouse structures and accessories for modern farming.",
    img: "/images/greenhouse.png",
  },
]
