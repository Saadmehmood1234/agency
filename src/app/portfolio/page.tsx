"use client";

import { Eye, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A custom online store with advanced product filtering and checkout",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
    link: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Mobile App UI",
    description: "Fitness tracking application with custom dashboard",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
    link: "#",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Restaurant Website",
    description: "Modern responsive website with online reservations",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    link: "#",
  },
  {
    id: 5,
    title: "Product Packaging",
    description: "Eco-friendly packaging design for skincare line",
    category: "Graphic Design",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
    link: "#",
  },
];

export default function PortfolioPage() {
  return (
    <section
      className="min-h-screen py-20"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/skeletal-weave.png")',
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-[#FB2056] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Portfolio
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Explore our diverse range of projects across different industries
            and disciplines.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-[#FB2056] text-white rounded-full mb-2">
                      {project.category}
                    </span>
                    <p className="text-white text-sm">{project.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:hidden">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-700" />
                      </a>
                    )}
                    <a
                      href={project.link}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                      aria-label="View details"
                    >
                      <Eye className="w-4 h-4 text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <button className="px-8 py-3 bg-[#FB2056] hover:bg-[#e01c4d] text-white font-medium rounded-full transition-colors shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
