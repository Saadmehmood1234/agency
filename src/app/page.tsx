import { ServiceCard } from "@/components/ServiceCard";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { WorkShowcase } from "@/components/WorkShowcase";
import { Globe, Code, Smartphone, Camera, BarChart2, ShoppingCart, PenTool, Mail, Server, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar/>
      <Hero />
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[#FB2056]/10 text-[#FB2056] mb-4">
              What We Offer
            </span>
            <h2 className="text-4xl font-bold mb-4">Our Premium Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <ServiceCard 
              title="Web Development" 
              description="Modern, responsive websites built with Next.js, React, and Tailwind CSS."
              icon={<Globe className="w-8 h-8" />}
              href="/services/web-development"
              color="#FB2056"
            />
            <ServiceCard 
              title="Mobile Apps" 
              description="Cross-platform mobile applications for iOS and Android."
              icon={<Smartphone className="w-8 h-8" />}
              href="/services/mobile-apps"
              color="#4F46E5"
            />
            <ServiceCard 
              title="UI/UX Design" 
              description="Beautiful interfaces with exceptional user experience."
              icon={<PenTool className="w-8 h-8" />}
              href="/services/ui-ux-design"
              color="#10B981"
            />
            <ServiceCard 
              title="Video Production" 
              description="Professional video editing and motion graphics."
              icon={<Camera className="w-8 h-8" />}
              href="/services/video-production"
              color="#F59E0B"
            />
            <ServiceCard 
              title="SEO Optimization" 
              description="Boost your search rankings and organic traffic."
              icon={<BarChart2 className="w-8 h-8" />}
              href="/services/seo"
              color="#3B82F6"
            />
            <ServiceCard 
              title="E-commerce" 
              description="Complete online store solutions."
              icon={<ShoppingCart className="w-8 h-8" />}
              href="/services/ecommerce"
              color="#EC4899"
            />
            <ServiceCard 
              title="Email Marketing" 
              description="Convert subscribers into customers."
              icon={<Mail className="w-8 h-8" />}
              href="/services/email-marketing"
              color="#8B5CF6"
            />
            <ServiceCard 
              title="Social Media" 
              description="Build your brand across platforms."
              icon={<Users className="w-8 h-8" />}
              href="/services/social-media"
              color="#06B6D4"
            />
          </div>
        </div>
      </section>

      <WorkShowcase />
      <Testimonials />
      <section className="py-20 bg-[#FB2056] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's create something amazing together. Get in touch today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#FB2056] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Get a Free Quote
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}