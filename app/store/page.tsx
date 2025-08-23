import Link from "next/link"

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
              <div className="w-full h-64 rounded-xl overflow-hidden shadow-md">
                <iframe
                  className="w-full h-full"
                  // src={store.mapUrl}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-10">⭐ Farmer Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
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
    // mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500!2d77.012!3d28.994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dc99d9d9d9d9d%3AKissanAgriMallSonipat!5e0!3m2!1sen!2sin!4v0000000"
  },
  {
    name: "Kissan Agri Mall - Panipat",
    desc: "Serving farmers of Panipat with quality products and trusted agri services for maximum farm productivity.",
    products: ["Seeds", "Fertilizers", "Organic Inputs", "Farm Tools"],
    services: ["Crop Consultation", "Soil Health Check", "Rental Equipment"],
    // mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500!2d76.97!3d29.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e0abcd12345%3AKissanAgriMallPanipat!5e0!3m2!1sen!2sin!4v0000000"
  }
]

const testimonials = [
  { name: "Ravi Kumar", text: "Best place to buy seeds and fertilizers. My yield improved a lot!", location: "Sonipat" },
  { name: "Meena Devi", text: "Their crop advisory saved my wheat crop. Highly recommended!", location: "Panipat" },
  { name: "Arjun Singh", text: "Good products and great service. Always trust Kissan Agri Mall.", location: "Rohtak" },
]
