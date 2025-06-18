"use client";
import { notFound } from "next/navigation";
import { services } from "@/lib/constants";
import {
  Check,
  ArrowRight,
  BarChart2,
  Sparkles,
  Target,
  Shield,
  Zap,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ServiceDetailPage() {
  const { service } = useParams();
  const serviceProps = services.find((s) => s.slug === service);
  if (!serviceProps) return notFound();

  const featureIcons = [
    <Sparkles key="sparkles" className="w-6 h-6" />,
    <Target key="target" className="w-6 h-6" />,
    <Shield key="shield" className="w-6 h-6" />,
    <Zap key="zap" className="w-6 h-6" />,
    <Users key="users" className="w-6 h-6" />,
    <BarChart2 key="barchart" className="w-6 h-6" />,
  ];

  const benefits = [
    "Tailored to your specific business goals",
    "Cutting-edge technology solutions",
    "Transparent communication throughout",
    "Measurable results and ROI tracking",
    "Dedicated project management",
    "Ongoing support and maintenance",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#FB2056] to-[#FF8A9B] py-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
        </div>

        <div className="container px-6 mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-white/20 backdrop-blur-sm">
              {serviceProps.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-serif">
              {serviceProps.title} That{" "}
              <span className="text-white/90">Delivers Results</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl leading-relaxed">
              {serviceProps.longDescription}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 container px-6 mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 mb-16 shadow-lg border border-gray-100"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 font-serif">
              How We Elevate Your Business
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-semibold text-xl text-gray-800 mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#FB2056]" />
                  What You'll Gain
                </h3>
                <ul className="space-y-4">
                  {serviceProps.features.slice(0, 4).map((feature, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start"
                    >
                      <div className="bg-[#FB2056]/10 p-1 rounded-full mr-3">
                        <Check className="w-5 h-5 text-[#FB2056]" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl text-gray-800 mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#FB2056]" />
                  Our Approach
                </h3>
                <ul className="space-y-4">
                  {benefits.slice(0, 4).map((benefit, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start"
                    >
                      <div className="bg-[#FB2056]/10 p-1 rounded-full mr-3">
                        <Check className="w-5 h-5 text-[#FB2056]" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Process Section */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center text-gray-900 font-serif"
            >
              Our {serviceProps.title} Process
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceProps.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all"
                >
                  <div className="bg-[#FB2056]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
                    {featureIcons[i] || (
                      <Check className="w-6 h-6 text-[#FB2056]" />
                    )}
                  </div>
                  <h3 className="font-semibold text-xl mb-3 text-gray-800">
                    {feature}
                  </h3>
                  <p className="text-gray-600">
                    We implement this through a customized workflow designed
                    specifically for your business needs and objectives.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#FB2056] to-[#FF6B8B] rounded-2xl p-10 text-center text-white overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/20 blur-xl"></div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto relative z-10">
              Let's discuss how our {serviceProps.title} service can drive real
              results for you.
            </p>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#FB2056] px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all shadow-md relative z-10 inline-flex items-center"
              >
                Schedule Your Free Strategy Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
