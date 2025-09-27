"use client";
import React, { useState } from "react";
import Link from "next/link";

const products = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dtttjumdo/image/upload/v1757845036/ChatGPT_Image_Sep_14_2025_03_38_28_PM_jjcfva.png",
    title: "Organic Fertilizers",
    description: "High-quality seeds for better yield and healthier crops.",
    more: "Our organic fertilizers are derived from natural sources like compost, animal manure, and bio-waste. They not only enrich the soil with nutrients but also improve soil structure, increase water retention, and enhance microbial activity for long-term fertility.",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dtttjumdo/image/upload/v1757846798/ChatGPT_Image_Sep_14_2025_04_15_59_PM_bpb10k.png",
    title: "Farming Seeds",
    description: "Organic fertilizers that boost soil fertility naturally.",
    more: "We provide certified farming seeds with high germination rates. Our seeds are carefully selected to be disease-resistant, climate-friendly, and capable of producing higher yields, ensuring farmers get maximum output from their efforts.",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dtttjumdo/image/upload/v1757847063/ChatGPT_Image_Sep_14_2025_04_19_56_PM_jxocp5.png",
    title: "Seeds and Fertilizers",
    description: "Pesticides with eco-friendly formulations.",
    more: "This combo includes both seeds and fertilizers that are designed to complement each other. Farmers can ensure healthy crop growth from day one while maintaining sustainable farming practices.",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dtttjumdo/image/upload/v1757847317/ChatGPT_Image_Sep_14_2025_04_24_44_PM_joclnm.png",
    title: "Farming Equipments",
    description: "Farm equipment for modern and efficient farming.",
    more: "Our farming equipment ranges from traditional tools to modern machinery like tillers, sprayers, and harvesters. These machines help reduce labor costs, improve efficiency, and support farmers in scaling their productivity.",
  },
];

export default function ProductsPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Header */}
      <header className="bg-green-600 text-white py-2 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Samriddhi</h1>
                <p className="text-xs">Agri Mall</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6 text-sm">
              <Link href="/" className="hover:text-green-200">
                Home
              </Link>
              <Link href="/categories" className="hover:text-green-200">
                Categories
              </Link>
              <Link href="/products" className="text-green-200 font-semibold">
                Products
              </Link>
              <Link href="/store" className="hover:text-green-200">
                Our Store
              </Link>
              <Link href="/mission" className="hover:text-green-200">
                Our Mission
              </Link>
              <Link href="/franchise" className="hover:text-green-200">
                Franchise
              </Link>
              <Link href="/contact" className="hover:text-green-200">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 bg-green-100">
        <h1 className="text-5xl font-extrabold text-green-700 mb-6">
          🌱 Nurture Your Farm, Grow with Us!
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          At <span className="font-semibold">Samriddhi Agri Mall</span>, we
          bring you premium quality seeds, fertilizers, pesticides, and modern
          equipment—all designed to empower farmers and ensure sustainable
          growth.
        </p>
        <Link
          href="/store"
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          Visit Our Store
        </Link>
      </section>

      {/* Products Section */}
      <main className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-700 mb-14">
          🌾 Our Products
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`p-8 rounded-2xl shadow-xl border hover:scale-105 hover:shadow-2xl transition duration-300 
                ${
                  index % 2 === 0
                    ? "bg-gradient-to-br from-green-50 to-white border-green-200"
                    : "bg-gradient-to-br from-orange-50 to-white border-orange-200"
                }`}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg mb-6 shadow-md"
              />
              <h3 className="text-2xl font-bold text-green-700 mb-3">
                {product.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>

              {/* Expandable description */}
              {expanded === product.id && (
                <p className="text-gray-600 mt-3">{product.more}</p>
              )}

              <button
                onClick={() => toggleExpand(product.id)}
                className="mt-4 text-green-700 font-semibold hover:underline"
              >
                {expanded === product.id ? "Show Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
        {/* Testimonials */}{" "}
        <section className="py-16 bg-green-50">
          {" "}
          <div className="container mx-auto px-4 text-center">
            {" "}
            <h2 className="text-3xl font-bold text-green-700 mb-8">
              💬 What Farmers Say
            </h2>{" "}
            <div className="grid md:grid-cols-2 gap-8">
              {" "}
              <div className="p-6 bg-white rounded-xl shadow-md">
                {" "}
                <p className="italic text-gray-600">
                  {" "}
                  "Samriddhi’s seeds gave me the best harvest in years. Truly a
                  game changer!"{" "}
                </p>{" "}
                <h4 className="mt-4 font-bold text-green-700">
                  – Ramesh, Farmer
                </h4>{" "}
              </div>{" "}
              <div className="p-6 bg-white rounded-xl shadow-md">
                {" "}
                <p className="italic text-gray-600">
                  {" "}
                  "Affordable and organic fertilizers have improved my soil
                  quality. Highly recommend!"{" "}
                </p>{" "}
                <h4 className="mt-4 font-bold text-green-700">
                  – Meena, Farmer
                </h4>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* FAQ */}{" "}
        <section className="py-16 bg-white">
          {" "}
          <div className="container mx-auto px-4">
            {" "}
            <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
              ❓ Frequently Asked Questions
            </h2>{" "}
            <div className="space-y-6 max-w-3xl mx-auto">
              {" "}
              <div>
                {" "}
                <h3 className="font-semibold text-lg">
                  Do you deliver nationwide?
                </h3>{" "}
                <p className="text-gray-600">
                  Yes, we deliver to all major cities and towns in India.
                </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <h3 className="font-semibold text-lg">
                  Are the products certified organic?
                </h3>{" "}
                <p className="text-gray-600">
                  Most of our products are government-certified organic and
                  eco-safe.
                </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <h3 className="font-semibold text-lg">
                  Do you provide bulk discounts?
                </h3>{" "}
                <p className="text-gray-600">
                  Yes, bulk buyers and cooperatives can avail special discounts.
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-6">
        <p>
          © {new Date().getFullYear()} Samriddhi Agri Mall. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
