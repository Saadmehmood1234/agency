"use client";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import ArrowUpRight from "lucide-react";
export function WorkShowcase() {
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#FB2056]/10 text-[#FB2056] text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
              Our Craft
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-serif">
              Digital Stories <br className="hidden md:block" />
              We're Proud Of
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Each project is a unique journey. Here are some where we went
              beyond the brief to create something special.
            </p>
          </div>
          <Link
            href="/work"
            className="group flex items-center gap-3 text-lg font-medium text-[#FB2056] transition-colors"
          >
            See everything we've made
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map(
            (project: {
              id: number;
              title: string;
              description: string;
              category: string;
              image: string;
              link: string;
              liveUrl?: string;
            }) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-500"
                variants={item}
                whileHover={{ y: -8 }}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,[YOUR_BASE64_PLACEHOLDER]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 rounded-full bg-white text-gray-900 text-xs font-medium mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-white text-2xl font-bold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex gap-3">
                      <Link
                        href={project.link}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors text-sm"
                      >
                        Case study
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-white text-white rounded-full hover:bg-white/10 transition-colors text-sm"
                        >
                          Live site
                          <ArrowRight className="w-4 h-4 rotate-45" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600 transform rotate-45 origin-bottom-left translate-y-[-50%] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
