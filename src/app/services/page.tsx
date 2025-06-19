"use client";
import { services } from "@/lib/constants";
import { ServiceCard } from "@/components/ServiceCard";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <div
      className="relative py-20 overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/skeletal-weave.png")',
      }}
    >
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-pink-100/30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-indigo-100/30 blur-3xl"></div>
      </div>

      <div className="container px-5 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-pink-100 text-pink-600">
            What We Do Best
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Services That{" "}
            <span className="text-transparent bg-clip-text bg-[#FB2056]">
              Spark Growth
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't just deliver services—we craft digital experiences that
            move the needle for your business.
          </p>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={`/services/${service.slug}`}
                color={index % 2 === 0 ? "#FB2056" : "#4F46E5"}
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-full shadow-md hover:shadow-lg transition-all">
            <span className="text-gray-900 font-medium">
              Not sure what you need?
            </span>
            <button className="px-6 py-2 bg-[#FB2056] text-white rounded-full font-bold hover:opacity-90 transition-opacity">
              Get Personalized Advice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
