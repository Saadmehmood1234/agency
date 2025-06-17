"use client";

import { HeartHandshake, Rocket, Users, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="bg-white text-gray-800 min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-[#FB2056]"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're a passionate team dedicated to helping businesses grow by creating impactful digital experiences.
          </p>
        </div>

        {/* About Section */}
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Since our founding, we've helped startups and enterprises alike unlock their potential online through custom websites, digital strategy, and visual storytelling. Our mission is to create experiences that inspire action and drive results.
          </p>
        </motion.div>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: <Rocket className="w-8 h-8 text-[#FB2056]" />,
              title: "Innovation",
              text: "We embrace creativity and modern tech to build solutions that stand out."
            },
            {
              icon: <HeartHandshake className="w-8 h-8 text-[#FB2056]" />,
              title: "Client First",
              text: "Your goals are our mission. We partner closely to bring your vision to life."
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-[#FB2056]" />,
              title: "Quality",
              text: "From code to communication, we deliver nothing less than excellence."
            },
            {
              icon: <Users className="w-8 h-8 text-[#FB2056]" />,
              title: "Collaboration",
              text: "Teamwork drives us — with clients, colleagues, and communities."
            },
          ].map(({ icon, title, text }, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-[#fff5f7] p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center"
            >
              <div className="mb-4 flex justify-center">{icon}</div>
              <h3 className="text-xl font-bold mb-2 text-[#FB2056]">{title}</h3>
              <p className="text-gray-600">{text}</p>
            </motion.div>
          ))}
        </div>

        {/* Final Call to Action */}
        <motion.div 
          className="bg-[#FB2056] text-white p-10 rounded-2xl text-center shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Let’s Build Something Great Together</h2>
          <p className="mb-6">Whether you're launching a startup or scaling your business — we're here to help you grow.</p>
          <a 
            href="/#contact"
            className="inline-block px-8 py-4 bg-white text-[#FB2056] rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
