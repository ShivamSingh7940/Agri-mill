import Link from "next/link"

export default function Careers() {
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
              <Link href="/services" className="hover:text-green-200 transition-colors">Best Services</Link>
              <Link href="/careers" className="hover:text-green-200 transition-colors text-green-200">Careers</Link>
              <Link href="/franchise" className="hover:text-green-200 transition-colors">Franchise</Link>
              <Link href="/contact" className="hover:text-green-200 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-green-700 text-white py-16 text-center rounded-b-3xl shadow-md">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">🌱 Grow Your Career With Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          At Kissan Agri Mall, we are building the future of agriculture. Join us in empowering farmers and making a lasting impact.
        </p>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Why Work With Us */}
        <div className="bg-gray-50 p-8 rounded-lg mb-12 shadow">
          <h2 className="text-2xl font-bold text-orange-500 mb-6">Why Work With Us?</h2>
          <p className="text-gray-700 mb-4">
            We’re more than just a workplace – we’re a family that values growth, innovation, and collaboration. 
            Our mission is to revolutionize agriculture while creating a positive impact on society.
          </p>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-800">
            <li>🌍 Impact-driven mission</li>
            <li>🚀 Growth-oriented environment</li>
            <li>🤝 Supportive team culture</li>
            <li>🎓 Learning opportunities</li>
          </ul>
        </div>

        {/* Careers Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Openings */}
          <div className="bg-white p-6 rounded-lg shadow-lg border">
            <h3 className="text-xl font-bold text-green-600 mb-4">Current Openings</h3>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <h4 className="font-semibold text-gray-800">🌾 Agricultural Advisor</h4>
                <p className="text-sm text-gray-600">Full-time • Sonipat, Haryana</p>
              </div>
              <div className="border-b pb-3">
                <h4 className="font-semibold text-gray-800">🏬 Store Manager</h4>
                <p className="text-sm text-gray-600">Full-time • Multiple Locations</p>
              </div>
              <div className="border-b pb-3">
                <h4 className="font-semibold text-gray-800">📈 Sales Executive</h4>
                <p className="text-sm text-gray-600">Full-time • Field Work</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">💻 Digital Marketing Specialist</h4>
                <p className="text-sm text-gray-600">Full-time • Remote/Hybrid</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white p-6 rounded-lg shadow-lg border">
            <h3 className="text-xl font-bold text-green-600 mb-4">Benefits</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Competitive salary packages</li>
              <li>• Health insurance coverage</li>
              <li>• Professional development & training</li>
              <li>• Performance-based incentives</li>
              <li>• Flexible working hours</li>
              <li>• Career growth opportunities</li>
            </ul>
          </div>
        </div>

        {/* Life at Kissan */}
        <section className="bg-gradient-to-r from-green-100 to-green-50 p-8 rounded-2xl shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-6">✨ Life at Kissan</h2>
          <p className="text-gray-700 mb-6">
            At Kissan, we believe work should be meaningful and enjoyable. Our workplace is filled with collaboration,
            creativity, and a shared mission to create a better tomorrow for farmers.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-white rounded-lg shadow">
              🌟 <p className="font-semibold mt-2">Inclusive Culture</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              🎓 <p className="font-semibold mt-2">Learning Everyday</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              💡 <p className="font-semibold mt-2">Innovative Projects</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 mb-6">Join us and be a part of something meaningful. Let’s grow together!</p>
          <Link
            href="/contact"
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
          >
            Apply Now
          </Link>
        </div>
      </main>
    </div>
  )
}
