"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "/categories" },
  { name: "Products", href: "/products" },
  { name: "Our Store", href: "/store" },
  { name: "Our Mission", href: "/mission" },
  { name: "Franchise", href: "/franchise" },
  { name: "Contact", href: "/contact" },
];

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

// FAQItem Component with animated expand/collapse
interface FAQ {
  question: string;
  answer: string;
}

const FAQItem = ({ faq }: { faq: FAQ }) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open]);

  return (
    <div className="border rounded-lg p-4 cursor-pointer hover:bg-green-50 transition">
      <div className="flex items-center space-x-2" onClick={() => setOpen(!open)}>
        <span className="text-green-700 font-bold text-xl">{open ? "−" : "+"}</span>
        <h3 className="font-semibold text-lg">{faq.question}</h3>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: open ? `${height}px` : "0px" }}
        className="overflow-hidden transition-max-height duration-500 ease-in-out mt-2"
      >
        <p className="text-gray-600">{faq.answer}</p>
      </div>
    </div>
  );
};

export default function ProductsPage() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <Head>
        <title>Samriddhi Agri Mall - Products</title>
        <meta
          name="description"
          content="Premium seeds, fertilizers, and farming equipment for sustainable agriculture."
        />
      </Head>

      {/* Header */}
      <header className="bg-green-600 text-white py-2 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 hover:scale-105 transition-transform"
          >
            <div className="w-16 h-16 shadow-lg relative flex items-center justify-center bg-white rounded-full overflow-hidden">
              <Image
                src="https://res.cloudinary.com/djy15bn9n/image/upload/v1758454184/Screenshot_2025-09-21_165520_hdbb1j.png"
                alt="Samriddhi Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wide">Samriddhi</h1>
              <p className="text-sm opacity-70">Agri Mall</p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:text-green-200 transition-colors ${
                  link.name === "Products"
                    ? "text-green-200 font-semibold"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed top-0 left-0 w-72 h-full bg-gradient-to-b from-green-700 to-green-900 text-white p-6 shadow-xl flex flex-col animate-slide-in">
            <button
              className="self-end text-2xl mb-6"
              onClick={() => setSidebarOpen(false)}
            >
              ✕
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-3 px-4 rounded-lg hover:bg-green-600/70 transition-colors duration-300"
                onClick={() => setSidebarOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

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

      {/* Products Section with Decorative Backgrounds */}
      <section className="relative py-20">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-green-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-200 rounded-full translate-x-1/2 translate-y-1/2 opacity-30"></div>

        <div className="container mx-auto px-4 flex flex-col gap-10 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-700 mb-14">
            🌾 Our Products
          </h2>

          {products.map((product, index) => (
            <div
              key={product.id}
              className={`p-8 rounded-2xl shadow-xl border hover:scale-105 hover:shadow-2xl transition duration-300 mx-auto w-full max-w-3xl ${
                index % 2 === 0
                  ? "bg-gradient-to-br from-green-50 to-white border-green-200"
                  : "bg-gradient-to-br from-orange-50 to-white border-orange-200"
              }`}
            >
              <div className="relative w-full h-64 mb-6 rounded-lg shadow-md overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-3">
                {product.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expanded === product.id ? "max-h-96 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{product.more}</p>
              </div>

              <button
                onClick={() => toggleExpand(product.id)}
                aria-expanded={expanded === product.id}
                className="mt-4 text-green-700 font-semibold hover:underline"
              >
                {expanded === product.id ? "Show Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-green-50 mt-20 rounded-xl shadow-inner">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-8">
            💬 What Farmers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <p className="italic text-gray-600">
                "Samriddhi’s seeds gave me the best harvest in years. Truly a
                game changer!"
              </p>
              <h4 className="mt-4 font-bold text-green-700">– Ramesh, Farmer</h4>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <p className="italic text-gray-600">
                "Affordable and organic fertilizers have improved my soil quality.
                Highly recommend!"
              </p>
              <h4 className="mt-4 font-bold text-green-700">– Meena, Farmer</h4>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
            ❓ Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                question: "Do you deliver nationwide?",
                answer: "Yes, we deliver to all major cities and towns in India.",
              },
              {
                question: "Are the products certified organic?",
                answer:
                  "Most of our products are government-certified organic and eco-safe.",
              },
              {
                question: "Do you provide bulk discounts?",
                answer:
                  "Yes, bulk buyers and cooperatives can avail special discounts.",
              },
            ].map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-6 mt-10">
        <p>© {new Date().getFullYear()} Samriddhi Agri Mall. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
