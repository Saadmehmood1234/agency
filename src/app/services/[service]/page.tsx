import { notFound } from 'next/navigation';
import { services } from '@/lib/constants';
import { Check, ArrowRight, Calendar, Clock, BarChart, Settings, Users, Mail } from 'lucide-react';

export default function ServiceDetailPage({
  params,
}: {
  params: { service: string };
}) {
  const service = services.find((s) => s.slug === params.service);
  
  if (!service) return notFound();

  // Icon mapping for features
  const featureIcons = [
    <Calendar className="w-5 h-5" />,
    <Clock className="w-5 h-5" />,
    <BarChart className="w-5 h-5" />,
    <Settings className="w-5 h-5" />,
    <Users className="w-5 h-5" />,
    <Mail className="w-5 h-5" />,
  ];

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-[#FB2056] to-[#FF6B8B] py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-white/20 mb-4">
              {service.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl opacity-90 max-w-3xl">{service.longDescription}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Service Overview */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12 border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Service Overview</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Key Benefits</h3>
                <ul className="space-y-3">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-[#FB2056] mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Why Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#FB2056] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Industry-leading expertise</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#FB2056] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Customized solutions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#FB2056] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Proven results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.features.map((feature, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#FB2056]/50 transition-colors">
                  <div className="text-[#FB2056] mb-3">
                    {featureIcons[i] || <Check className="w-5 h-5" />}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature}</h3>
                  <p className="text-gray-600">Detailed description of this feature and how it benefits your business.</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#FB2056]/5 border border-[#FB2056]/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Contact us today to discuss how we can help with your {service.title} needs.
            </p>
            <button className="bg-[#FB2056] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#E01A4E] transition-colors inline-flex items-center">
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}