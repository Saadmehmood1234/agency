"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center ">
      <div className="container max-lg:mt-16 mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row  gap-12 items-center">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Elevate Your{" "}
              <span className="text-transparent bg-clip-text bg-[#FB2056]">
                Digital Presence
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              We craft exceptional digital experiences that drive measurable
              results for your business.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#FB2056] cursor-pointer text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Get Started
              </motion.button>
            <Link href="/portfolio">
              <motion.button
                whileHover={{
                  y: -2,
                  backgroundColor: "rgba(99, 102, 241, 0.1)",
                }}
                className="px-8 py-4 border-2 border-[#FB2056] text-[#FB2056] rounded-lg font-medium transition-colors"
              >
                View Our Work
              </motion.button>
            </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-100 rounded-full">
                  <Phone className="w-5 h-5 text-[#FB2056]" />
                </div>
                <span>9773834796</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-full">
                  <Mail className="w-5 h-5 text-[#FB2056]" />
                </div>
                <span>mehmoodsaad347@gmail.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 bg-[#FB2056]  text-transparent bg-clip-text">
              Let's Talk About Your Project
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg   transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg  transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg  f transition-all"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg  transition-all"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full cursor-pointer py-4 bg-[#FB2056] text-white font-medium rounded-lg shadow hover:shadow-md transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
