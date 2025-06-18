"use client";
import {
  Mail,
  ArrowRight,
  ChevronDown,
  Phone,
  Calendar,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  Zap,
  LifeBuoy,
  Share2,
  Twitter,
  Linkedin,
  Instagram,
  Dribbble,
  Github,
} from "lucide-react";
import { motion } from "framer-motion";
export function ContactPage() {
  return (
    <div className="bg-white">
      <section className="relative py-28 bg-gradient-to-br from-[#FB2056] to-[#FF8A9B] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
        </div>

        <div className="container px-6 mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-white/20 backdrop-blur-sm text-white"
            >
              Let's Connect
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-serif"
            >
              We'd Love to Hear <br className="hidden md:block" /> From You
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed"
            >
              Whether you have a project in mind or just want to chat about
              possibilities, drop us a line.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 container px-6 mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
          >
            <div className="bg-indigo-100/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
              <Phone className="text-[#FB2056] w-6 h-6 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Call Us</h3>
            <p className="text-gray-600 mb-4">
              Perfect for quick questions or urgent matters
            </p>
            <a
              href="tel:+9773834796"
              className="text-[#FB2056] font-medium transition-colors inline-flex items-center gap-2"
            >
              +977 383 4796
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
          >
            <div className="bg-purple-100/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
              <Mail className="text-[#FB2056] w-6 h-6 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Email Us</h3>
            <p className="text-gray-600 mb-4">
              Send us your inquiries and project details
            </p>
            <a
              href="mailto:mehmoodsaad347@gmail.com"
              className="text-[#FB2056] font-medium hover:text-purple-800 transition-colors inline-flex items-center gap-2 break-all"
            >
              mehmoodsaad347@gmail.com
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
          >
            <div className="bg-indigo-100/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
              <MessageCircle className="text-[#FB2056] w-6 h-6 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Live Chat</h3>
            <p className="text-gray-600 mb-4">
              Instant messaging with our support team
            </p>
            <button className="text-[#FB2056] font-medium hover:text-purple-800 transition-colors inline-flex items-center gap-2">
              Start Chat
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Send className="text-[#FB2056] w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#FB2056] to-[#FB2056] bg-clip-text text-transparent">
                Send a Message
              </h2>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
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
                <div className="relative">
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Project Proposal</option>
                    <option>Partnership</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Your Message*
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#FB2056] to-[#FB2056] text-white font-bold rounded-xl shadow hover:shadow-lg transition-all flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Clock className="text-[#FB2056] w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#FB2056]">
                  Working Hours
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <Calendar className="text-[#FB2056] w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      24/7 Availability
                    </p>
                    <p className="text-gray-600">Always open for your needs</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="bg-gradient-to-br from-indigo-700 to-[#FB2056] rounded-2xl p-8 text-white overflow-hidden relative">
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-white/10"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold">Urgent Support</h3>
                </div>
                <p className="mb-6">
                  For critical issues needing immediate attention.
                </p>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center gap-3 bg-white text-[#FB2056] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  <LifeBuoy className="w-5 h-5" />
                  Emergency Hotline
                </a>
              </div>
            </div> */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#FB2056]">
                    Connect With Us
                  </h3>
                  <p className="text-gray-500 mt-1">
                    Join our growing community
                  </p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Share2 className="text-[#FB2056] w-6 h-6" />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  {
                    name: "Twitter",
                    icon: <Twitter className="w-6 h-6 text-blue-400" />,
                    color: "hover:bg-blue-50 border-blue-100",
                    handle: "@yourhandle",
                  },
                  {
                    name: "LinkedIn",
                    icon: <Linkedin className="w-6 h-6 text-blue-600" />,
                    color: "hover:bg-blue-50 border-blue-200",
                    handle: "company-name",
                  },
                  {
                    name: "Instagram",
                    icon: <Instagram className="w-6 h-6 text-pink-500" />,
                    color: "hover:bg-pink-50 border-pink-100",
                    handle: "@yourhandle",
                  },
                
                  
                  {
                    name: "GitHub",
                    icon: <Github className="w-6 h-6 text-gray-700" />,
                    color: "hover:bg-gray-50 border-gray-200",
                    handle: "github-user",
                  },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    whileHover={{ y: -3 }}
                    href="#"
                    className={`border p-4 rounded-xl transition-all flex items-start gap-3 ${social.color}`}
                  >
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      {social.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{social.name}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {social.handle}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="container px-6 mx-auto pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl h-96 border-2 border-white"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.538443605178!2d-122.41941592426665!3d37.77492947190278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </section>
    </div>
  );
}
