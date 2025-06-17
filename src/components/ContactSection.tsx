"use client"
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactPage() {
  return (
    <div className="bg-gray-50">
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-indigo-100 max-w-2xl mx-auto"
          >
            We'd love to hear from you. Reach out for inquiries, collaborations, or just to say hello!
          </motion.p>
        </div>
      </section>
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Phone className="text-indigo-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Phone</h3>
            <p className="text-gray-600 mb-4">Speak directly with our team</p>
            <a href="tel:+15551234567" className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
              +1 (555) 123-4567
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Mail className="text-purple-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Email</h3>
            <p className="text-gray-600 mb-4">Send us a message anytime</p>
            <a href="mailto:hello@digitalapex.com" className="text-purple-600 font-medium hover:text-purple-800 transition-colors">
              hello@digitalapex.com
            </a>
          </motion.div>

          {/* Contact Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <MapPin className="text-indigo-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Office</h3>
            <p className="text-gray-600 mb-4">Visit us during work hours</p>
            <p className="text-gray-700">123 Business Ave, Suite 400<br />San Francisco, CA 94107</p>
          </motion.div>
        </div>

        {/* Contact Form Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name*</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email*</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message*</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow hover:shadow-md transition-all flex items-center justify-center gap-2"
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
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Office Hours</h3>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <Clock className="text-indigo-600 w-5 h-5 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Monday - Friday</p>
                    <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-indigo-600 w-5 h-5 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Saturday - Sunday</p>
                    <p className="text-gray-600">Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Connect With Us</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Twitter', 'Facebook', 'Instagram', 'LinkedIn', 'Dribbble', 'Behance'].map((social) => (
                  <motion.a
                    key={social}
                    whileHover={{ y: -3 }}
                    href="#"
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col items-center"
                  >
                    <div className="bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                      <span className="text-indigo-600 font-medium text-sm">{social.charAt(0)}</span>
                    </div>
                    <span className="text-sm text-gray-700">{social}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-3">Need Immediate Help?</h3>
              <p className="mb-4">Our support team is available 24/7 for urgent inquiries.</p>
              <a 
                href="tel:+15551234567" 
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Emergency Contact
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 pb-20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl h-96"
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