import Link from "next/link"

export default function Samriddhi() {
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
              {/* <Link href="/services" className="hover:text-green-200 transition-colors">Best Services</Link> */}
              <Link href="/mission" className="hover:text-green-200 transition-colors">Our Mission</Link>
              <Link href="/franchise" className="hover:text-green-200 transition-colors">Franchise</Link>
              <Link href="/contact" className="hover:text-green-200 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20 text-center rounded-b-3xl shadow-md">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          🌱 Together, Let’s Grow Prosperity
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Empowering Farmers. Enabling Smart Farming. Ensuring Prosperity.
        </p>
        <p className="text-base max-w-3xl mx-auto leading-relaxed">
          Samriddhi Center is committed to transforming farming into smart, sustainable, 
          and profitable growth. Through quality inputs, expert guidance, and farmer-first service, 
          we aim to build trust and nurture prosperity for every grower.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
          <Link
            href="/contact"
            className="bg-white text-green-700 px-6 py-3 rounded-lg shadow hover:bg-green-100 transition"
          >
            👉 Contact Us
          </Link>
          <Link
            href="/store"
            className="bg-white text-green-700 px-6 py-3 rounded-lg shadow hover:bg-green-100 transition"
          >
            📍 Find Nearest Center
          </Link>
          <Link
            href="/partner"
            className="bg-white text-green-700 px-6 py-3 rounded-lg shadow hover:bg-green-100 transition"
          >
            🤝 Partner With Us
          </Link>
        </div>
      </section>
    </div>
  )
}
