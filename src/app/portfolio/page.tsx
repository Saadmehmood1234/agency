"use client";

import { Eye } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A scalable e-commerce platform built with Next.js, Stripe, and Tailwind CSS.",
    image: "/images/portfolio/ecommerce.png",
    slug: "ecommerce-website"
  },
  {
    id: 2,
    title: "SEO Landing Page",
    description: "Optimized landing page with fast loading and 98+ Lighthouse score.",
    image: "/images/portfolio/seo-landing.png",
    slug: "seo-landing-page"
  },
  {
    id: 3,
    title: "Video Production Site",
    description: "Creative portfolio for a video editing agency with motion effects.",
    image: "/images/portfolio/video-editing.png",
    slug: "video-production-site"
  },
  {
    id: 4,
    title: "Digital Marketing Dashboard",
    description: "Admin dashboard for campaign performance, built in React and Chart.js.",
    image: "/images/portfolio/dashboard.png",
    slug: "digital-marketing-dashboard"
  }
];

export default function PortfolioPage() {
  return (
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-[#FB2056] mb-4"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Work
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore a few of the amazing projects we’ve completed for our clients — from web apps to marketing tools.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
              <a 
                href={`/work/${project.slug}`} 
                className="absolute top-4 right-4 bg-white text-[#FB2056] p-2 rounded-full shadow-md hover:bg-[#FB2056] hover:text-white transition"
              >
                <Eye className="w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
