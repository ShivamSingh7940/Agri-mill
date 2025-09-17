import Link from "next/link"

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Header */}
      <header className="bg-green-600 text-white py-2 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow">
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
              <Link href="/store" className="hover:text-green-200 transition-colors">Our Store</Link>
              {/* <Link href="/services" className="hover:text-green-200 transition-colors text-green-200">Best Services</Link> */}
              <Link href="/mission" className="hover:text-green-200 transition-colors">Our Mission</Link>
              <Link href="/franchise" className="hover:text-green-200 transition-colors">Franchise</Link>
              <Link href="/contact" className="hover:text-green-200 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Services */}
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-green-700 mb-14">
          🌱 Our Best Services
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-xl border border-green-200 hover:scale-105 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-orange-600 mb-6 flex items-center gap-2">
              🚜 Kissan Farm Services
            </h3>
            <ul className="text-gray-800 space-y-3">
              <li>✔ Soil & Leaf Composition Advisory</li>
              <li>✔ Pest & Disease Management</li>
              <li>✔ Agricultural Consultation</li>
              <li>✔ Subsidy Guidance</li>
              <li>✔ Farm Machinery Support</li>
              <li>✔ 24/7 Farmer Helpline</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-xl border border-orange-200 hover:scale-105 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-orange-600 mb-6 flex items-center gap-2">
              ⚙️ Technical Support
            </h3>
            <ul className="text-gray-800 space-y-3">
              <li>✔ 24/7 Customer Care</li>
              <li>✔ Product Training & Demos</li>
              <li>✔ Equipment Maintenance</li>
              <li>✔ Crop Monitoring</li>
              <li>✔ Market Price Updates</li>
              <li>✔ Expert Agri-Advice</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-200 hover:scale-105 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
              📦 Supply & Distribution
            </h3>
            <ul className="text-gray-800 space-y-3">
              <li>✔ Timely Delivery of Inputs</li>
              <li>✔ Affordable Seed & Fertilizer Packs</li>
              <li>✔ Bulk Orders for Farmers</li>
              <li>✔ Transparent Pricing</li>
              <li>✔ Quality Certified Products</li>
              <li>✔ Local Distribution Centers</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl shadow-xl border border-yellow-200 hover:scale-105 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-yellow-600 mb-6 flex items-center gap-2">
              📊 Knowledge Hub
            </h3>
            <ul className="text-gray-800 space-y-3">
              <li>✔ Free Farmer Workshops</li>
              <li>✔ Seasonal Crop Planning</li>
              <li>✔ Smart Irrigation Guidance</li>
              <li>✔ Online Learning Videos</li>
              <li>✔ Govt. Scheme Awareness</li>
              <li>✔ Expert Blogs & Articles</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
