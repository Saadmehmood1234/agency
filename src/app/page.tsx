"use client";
import { ServiceCard } from "@/components/ServiceCard";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { WorkShowcase } from "@/components/WorkShowcase";
import { motion } from "framer-motion";
import React from "react";
import { services } from "@/lib/constants";
import Link from "next/link";
import { Search, TrendingUp } from "lucide-react";
import {
  Globe,
  Code,
  Smartphone,
  Camera,
  BarChart2,
  ShoppingCart,
  PenTool,
  Mail,
  Server,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main
      className="min-h-screen "
      style={{
        backgroundColor: "#ffffff",
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/skeletal-weave.png")',
      }}
    >
      <Hero />
      <section className="relative py-20 ">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-teal-100/20 blur-3xl -z-10" />
        {services.map((service) => (  
          <div key={service.slug} className="container mx-auto px-6">
            <div
              key={`${service.slug}-header`}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 my-4">
                {service.title}
              </h2>
            </div>
            <div
              key={`${service.slug}-card`}
              className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-3 gap-0">
                <div
                  key={`${service.slug}-left`}
                  className="p-8 md:p-10 bg-[#FB2056] text-white"
                  style={{
                    backgroundColor: "#fb2056",
                    backgroundImage:
                      'url("https://www.transparenttextures.com/patterns/buried.png")',
                  }}
                >
                  <div
                    key={`${service.slug}-icon`}
                    className="flex items-center justify-center w-16 h-16 mb-6 bg-white/10 rounded-xl backdrop-blur-sm"
                  >
                    {React.cloneElement(service.icon, {
                      key: `${service.slug}-icon-clone`,
                    })}
                  </div>
                  <h3
                    key={`${service.slug}-title`}
                    className="text-2xl font-bold mb-4"
                  >
                    {service.title}
                  </h3>
                  <p
                    key={`${service.slug}-desc`}
                    className="text-blue-100 mb-6"
                  >
                    {service.description}
                  </p>

                  <div
                    key={`${service.slug}-link`}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <Link href={`/services/${service.slug}`}>
                      <span className="font-medium text-blue-50 group-hover:text-white transition-colors">
                        Get started
                      </span>
                    </Link>
                    <svg
                      key={`${service.slug}-arrow`}
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M6.75 13.5L11.25 9L6.75 4.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  key={`${service.slug}-middle`}
                  className="p-8 md:p-10 border-t md:border-t-0 md:border-l border-gray-200/50"
                >
                  <h4
                    key={`${service.slug}-features-title`}
                    className="text-lg font-semibold text-gray-900 mb-6"
                  >
                    Key Features
                  </h4>
                  <ul
                    key={`${service.slug}-features-list`}
                    className="space-y-4"
                  >
                    {service.features.map((feature, index) => (
                      <li
                        key={`${service.slug}-feature-${index}`}
                        className="flex items-start"
                      >
                        <svg
                          key={`${service.slug}-feature-icon-${index}`}
                          className="flex-shrink-0 w-5 h-5 text-[#FB2056] mt-0.5 mr-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span
                          key={`${service.slug}-feature-text-${index}`}
                          className="text-gray-700"
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  key={`${service.slug}-right`}
                  className="hidden md:block relative bg-gray-50 overflow-hidden"
                >
                  <div
                    key={`${service.slug}-gradient`}
                    className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-teal-100/30"
                  ></div>
                  <div
                    key={`${service.slug}-icons-container`}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div
                      key={`${service.slug}-icons-wrapper`}
                      className="relative w-64 h-64"
                    >
                      <div
                        key={`${service.slug}-icon1`}
                        className="absolute top-0 left-0 w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center"
                      >
                        <BarChart2 className="w-6 h-6 text-[#FB2056]" />
                      </div>
                      <div
                        key={`${service.slug}-icon2`}
                        className="absolute top-8 right-8 w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center"
                      >
                        <Search className="w-7 h-7 text-[#FB2056]" />
                      </div>
                      <div
                        key={`${service.slug}-icon3`}
                        className="absolute bottom-8 left-8 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center"
                      >
                        <TrendingUp className="w-8 h-8 text-[#FB2056]" />
                      </div>
                      <div
                        key={`${service.slug}-icon4`}
                        className="absolute bottom-12 right-12 w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center"
                      >
                        <Globe className="w-6 h-6 text-[#FB2056]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <WorkShowcase />
      <Testimonials />
      <section
        className="py-24  text-white relative overflow-hidden"
        style={{
          backgroundColor: "#fb2056",
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/buried.png")',
        }}
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')]"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Let's build something extraordinary together. Reach out now and
            let’s talk strategy, design, and innovation.
          </p>

          {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-[#FB2056] text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors">
              Get a Free Quote
            </button>
            <button className="px-8 py-3 border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-colors">
              View Case Studies
            </button>
          </div> */}
        </div>
      </section>
    </main>
  );
}
