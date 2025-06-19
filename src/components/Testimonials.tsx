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
      name: "Saad Mehmood",
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
   <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
  <div className="container mx-auto px-4">
    {/* Header */}
    <div className="text-center max-w-2xl mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm uppercase tracking-wide font-semibold text-[#FB2056] bg-[#FB2056]/10 px-4 py-1 rounded-full">
          Client Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4 text-gray-900">
          Words from Our Happy Clients
        </h2>
        <p className="text-lg text-gray-600">
          We’ve had the pleasure of working with amazing people. Here’s what they’re saying.
        </p>
      </motion.div>
    </div>
    <motion.div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {testimonials.map((testimonial) => (
        <motion.div
          key={testimonial.id}
          className="bg-white rounded-3xl shadow-lg p-8 relative group transition hover:-translate-y-1"
          variants={item}
        >
          <Quote className="absolute top-6 left-6 w-10 h-10 text-[#FB2056]/20 group-hover:text-[#FB2056]/40 transition" />
          <p className="text-gray-700 text-lg mb-8 mt-10 relative z-10 leading-relaxed">
            "{testimonial.content}"
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={`https://i.pravatar.cc/80?u=${testimonial.id}`}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border border-gray-200"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <div className="flex items-center space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  strokeWidth={1.5}
                  className={
                    i < testimonial.rating
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }
                />
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
    <div className="flex justify-center mt-14 gap-4">
      <button className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>
      <button className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  </div>
</section>

  );
}