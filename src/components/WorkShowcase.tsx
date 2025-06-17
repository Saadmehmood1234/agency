"use client"
import { ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function WorkShowcase() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A custom online store with advanced product filtering and checkout",
      category: "Web Development",
      image: "/project1.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Corporate Branding",
      description: "Complete visual identity for a financial services company",
      category: "Graphic Design",
      image: "/project2.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "Mobile App UI",
      description: "Fitness tracking application with custom dashboard",
      category: "UI/UX Design",
      image: "/project3.jpg",
      link: "#"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="text-[var(--primary)] font-medium mb-3 inline-block">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Crafting digital excellence
          </h2>
          <p className="text-lg text-gray-600">
            Selected projects that demonstrate our approach to solving complex problems.
          </p>
        </div>
        <Link 
          href="/work" 
          className="group flex items-center gap-2 text-lg font-medium text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors"
        >
          Explore full portfolio
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id} 
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            variants={item}
            whileHover={{ y: -5 }}
          >
            {/* Replace with actual image */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-300 h-80 w-full"></div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--primary)] text-white text-xs font-medium mb-3">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-200 mb-6">{project.description}</p>
                <Link 
                  href={project.link} 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                >
                  View details
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}