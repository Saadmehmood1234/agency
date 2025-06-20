"use client";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Contact } from "./Contact";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      subItems: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "SEO Services", href: "/services/seo-services" },
        { name: "Video Editing", href: "/services/video-editing" },
        {
          name: "Mobile App Development",
          href: "/services/mobile-app-development",
        },
        { name: "E-commerce Solutions", href: "/services/ecommerce-solutions" },
        { name: "Digital Marketing", href: "/services/digital-marketing" },
        {
          name: "Enterprise Resource Planner",
          href: "/services/enterprise-resource-planner",
        },
        {
          name: "Customer Relationship Manager",
          href: "/services/customer-relationship-manager",
        },
      ],
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-white max-lg:bg-white py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-[#FB2056] bg-clip-text text-transparent">
                DigitalApex
              </span>
            </Link>
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center px-3 py-2 text-gray-700 hover:text-[#FB2056] transition-colors font-medium"
                  >
                    {item.name}
                    {item.subItems && <ChevronDown className="w-4 h-4 ml-1" />}
                  </Link>

                  {item.subItems && (
                    <div className="absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="py-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-[#FB2056]"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={() => setShowContact(!showContact)}
                className="px-6 py-2 bg-[#FB2056] text-white rounded-lg font-medium hover:from-indigo-700 transition-all shadow hover:shadow-md"
              >
                Get Started
              </button>
            </nav>
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-indigo-600 focus:outline-none"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden  mt-4 pb-4">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-i[#FB2056] rounded-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.subItems && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-600 hover:bg-indigo-50 hover:text-[#FB2056] rounded-lg text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
        
                <button
                  onClick={() => setShowContact(!showContact)}
                  className="block cursor-pointer px-4 py-3 mt-4 bg-[#FB2056] text-white rounded-lg font-medium text-center"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      {showContact && <Contact onClose={() => setShowContact(false)} />}
    </>
  );
}
