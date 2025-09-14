import Link from "next/link"
import Image from "next/image"

export default function Store() {
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
              <Link href="/" className="hover:text-green-200 transition-colors">Home</Link>
              <Link href="/categories" className="hover:text-green-200 transition-colors">Categories</Link>
              <Link href="/store" className="hover:text-green-200 transition-colors text-green-200">Our Store</Link>
              <Link href="/services" className="hover:text-green-200 transition-colors">Best Services</Link>
              <Link href="/careers" className="hover:text-green-200 transition-colors">Careers</Link>
              <Link href="/franchise" className="hover:text-green-200 transition-colors">Franchise</Link>
              <Link href="/contact" className="hover:text-green-200 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold text-center text-green-700 mb-12">
          🏬 Our Store Locations
        </h1>

        {/* Store Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {stores.map((store, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-green-50 to-green-100 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-3xl font-bold text-orange-500 mb-6">{store.name}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{store.desc}</p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Products */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
                    🌱 Products Available
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    {store.products.map((p, idx) => (
                      <li key={idx} className="flex items-center gap-2">✅ {p}</li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
                    ⚙️ Services
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    {store.services.map((s, idx) => (
                      <li key={idx} className="flex items-center gap-2">💡 {s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Map for store */}
              <div className="w-full h-64 rounded-xl overflow-hidden shadow-md mb-10">
                <iframe className="w-full h-full" loading="lazy"></iframe>
              </div>
            </div>
          ))}
        </div>

        {/* Store Gallery */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-10">📸 Store Gallery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {gallery.map((img, i) => (
              <div key={i} className="relative w-full h-64 overflow-hidden rounded-xl shadow-md">
                <Image
                  src={img}
                  alt="store photo"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-10">🌟 Featured Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((f, i) => (
              <div key={i} className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition h-64 flex flex-col items-center">
                <div className="relative w-full h-40 mb-4">
                  <Image src={f.img} alt={f.title} fill className="object-cover rounded-lg" />
                </div>
                <h3 className="font-bold text-orange-500">{f.title}</h3>
                <p className="text-gray-600 text-sm mt-2 text-center">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-10">⭐ Farmer Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <p className="text-gray-600 italic mb-4">“{t.text}”</p>
                <h4 className="font-bold text-green-700">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

const stores = [
  {
    name: "Kissan Agri Mall - Sonipat",
    desc: "Our flagship store in Sonipat, Haryana offers a complete range of agricultural products and farmer support services to help you grow better.",
    products: ["Seeds & Fertilizers","Bio-stimulants & Pesticides","Farm Equipment","Dairy Products","Animal Feed"],
    services: ["Soil Testing", "Crop Advisory", "Equipment Rental", "Technical Support"],
  },
  {
    name: "Kissan Agri Mall - Panipat",
    desc: "Serving farmers of Panipat with quality products and trusted agri services for maximum farm productivity.",
    products: ["Seeds", "Fertilizers", "Organic Inputs", "Farm Tools"],
    services: ["Crop Consultation", "Soil Health Check", "Rental Equipment"],
  }
]

const testimonials = [
  { name: "Ravi Kumar", text: "Best place to buy seeds and fertilizers. My yield improved a lot!", location: "Sonipat" },
  { name: "Meena Devi", text: "Their crop advisory saved my wheat crop. Highly recommended!", location: "Panipat" },
  { name: "Arjun Singh", text: "Good products and great service. Always trust Kissan Agri Mall.", location: "Rohtak" },
]

const gallery = [
  "https://plus.unsplash.com/premium_photo-1664302495846-8be51057b602?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1731012375440-db6c584250c3?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1731012375490-7d4de20d5fe5?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1585537358069-c67a7a471cd0?w=600&auto=format&fit=crop&q=60",
  "https://media.istockphoto.com/id/853982916/photo/vegetables.webp?a=1&b=1&s=612x612&w=0&k=20&c=LqLAQzCsSUGIEotK34PxbHZzWytfcNUW4aC99mLsv-Y=",
  "https://images.unsplash.com/photo-1555447740-6a812da65e7f?w=600&auto=format&fit=crop&q=60",
]

const featured = [
  { title: "Hybrid Wheat Seeds", desc: "High-yielding, drought-resistant variety.", img: "https://media.istockphoto.com/id/915366502/photo/close-up-of-hands-holding-wheat-grain.webp?a=1&b=1&s=612x612&w=0&k=20&c=Kxd3FsMGWpQZ2saEj9n88w-3Z0wTJU5TamEazLSUiLI=" },
  { title: "Organic Fertilizer", desc: "Boosts soil health naturally.", img: "https://media.istockphoto.com/id/2157509794/photo/farmer-hands-holding-an-organic-mixed-rice-husk-before-use-as-plant-fertilizer.webp?a=1&b=1&s=612x612&w=0&k=20&c=YBWZcItSn9goVIus5WW0uFPzptSLB5Tf9KrXEbEi7as=" },
  { title: "Tractor Tools", desc: "Affordable and efficient farm equipment.", img: "https://media.istockphoto.com/id/2171623367/photo/tractor-picking-hay-balls.webp?a=1&b=1&s=612x612&w=0&k=20&c=jqjKlbihIPBZG_CUvpOf4PjO2QSmj5hUEJEeIfL5e6I=" },
  { title: "Dairy Supplements", desc: "Nutritious feed for better milk yield.", img: "https://images.unsplash.com/photo-1602153508753-4ace888c10a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhaXJ5fGVufDB8fDB8fHww" },
]
