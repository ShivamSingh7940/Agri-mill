import Link from "next/link"

export default function Franchise() {
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
              <Link href="/careers" className="hover:text-green-200 transition-colors">Careers</Link>
              <Link href="/franchise" className="hover:text-green-200 transition-colors text-green-200">Franchise</Link>
              <Link href="/contact" className="hover:text-green-200 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16 text-center rounded-b-3xl shadow-md">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">🌱 Become a Kissan Franchise Partner</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Partner with India's fastest-growing agricultural retail chain and start your journey towards business success.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-orange-600 transition"
          >
            Apply Now
          </Link>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Why & Investment */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg border">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Why Choose Our Franchise?</h3>
            <ul className="text-gray-700 space-y-3">
              <li>• Established brand with proven business model</li>
              <li>• Comprehensive training and support</li>
              <li>• Marketing and promotional assistance</li>
              <li>• Quality product sourcing</li>
              <li>• Territory protection</li>
              <li>• Ongoing operational support</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Investment Details</h3>
            <div className="text-gray-700 space-y-3">
              <p><strong>Initial Investment:</strong> ₹5-15 Lakhs</p>
              <p><strong>Space Required:</strong> 1000-2000 sq ft</p>
              <p><strong>Franchise Fee:</strong> ₹2 Lakhs</p>
              <p><strong>Royalty:</strong> 3% of monthly turnover</p>
              <p><strong>Payback Period:</strong> 18-24 months</p>
            </div>
          </div>
        </div>

        {/* Franchise Process */}
        <section className="bg-gradient-to-r from-green-100 to-green-50 p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">🚀 How to Become a Franchisee</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-orange-500">1️⃣ Apply</h4>
              <p className="text-sm text-gray-600">Submit your application online</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-orange-500">2️⃣ Review</h4>
              <p className="text-sm text-gray-600">Our team reviews your profile</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-orange-500">3️⃣ Agreement</h4>
              <p className="text-sm text-gray-600">Sign franchise agreement</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-orange-500">4️⃣ Launch</h4>
              <p className="text-sm text-gray-600">Start your Kissan store</p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">🏆 Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <p className="italic text-gray-700">
                “Partnering with Kissan has been life-changing. The support and brand recognition helped me grow my
                business quickly.”
              </p>
              <p className="mt-4 font-semibold text-green-600">– Rajesh Kumar, Franchise Owner (Haryana)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <p className="italic text-gray-700">
                “The training and supply chain support make operations smooth. Customers trust the Kissan brand.”
              </p>
              <p className="mt-4 font-semibold text-green-600">– Priya Sharma, Franchise Owner (Punjab)</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gray-50 p-8 rounded-lg text-center shadow">
          <h3 className="text-2xl font-bold text-green-600 mb-4">Ready to Start Your Journey?</h3>
          <p className="text-gray-700 mb-6">
            Don’t miss the opportunity to be part of India’s agricultural revolution. Join the Kissan family today!
          </p>
          <Link
            href="/contact"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </main>
    </div>
  )
}
