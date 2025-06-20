"use client";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/projects";
import ArrowUpRight from "lucide-react";
export function WorkShowcase() {
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
    <section className="py-24 ">
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
            href="/portfolio"
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
                    <span className="inline-block px-3 py-1 rounded-full bg-[#FB2056] text-white text-xs font-medium mb-3">
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
                        href={'/portfolio/' + project.id}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#FB2056] text-white rounded-full hover:bg-[#FB2140] transition-colors text-sm"
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
