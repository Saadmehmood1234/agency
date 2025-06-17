"use client"
import { Quote, Star, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director, TechCorp",
      content: "Their web development team transformed our online presence. Our traffic increased by 300% within 3 months!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO, StartupHub",
      content: "The SEO strategy they implemented helped us rank #1 for our main keywords. Exceptional results!",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Creative Director, BrandWorks",
      content: "Their video editing team brought our vision to life with stunning animations and effects. Highly recommend!",
      rating: 4
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
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-[var(--primary)] font-medium mb-4">
              Client Testimonials
            </span>
            <h2 className="text-4xl font-bold mb-4">Trusted by industry leaders</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="text-[var(--primary)] mb-6">
                <Quote className="w-10 h-10 opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16}
                      strokeWidth={1.5}
                      className={i < testimonial.rating ? 'text-[var(--primary)] fill-[var(--primary)]' : 'text-gray-300'}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12 gap-4">
          <button className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}