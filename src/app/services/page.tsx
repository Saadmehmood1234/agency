import { services } from "@/lib/constants";
import { ServiceCard } from "@/components/ServiceCard";

export default function ServicesPage() {
  return (
    <div className="py-16 container mx-auto px-4">
      <h1 className="text-center mb-4">Our Services</h1>
      <p className="text-center max-w-2xl mx-auto mb-12">
        We offer comprehensive digital solutions to help your business thrive online.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard 
            title={service.title}
            description={service.description}
            icon={service.icon}
            href={`/services/${service.slug}`}
            color="#FB2056" // You can customize the color as needed
          />
           
        ))}
      </div>
    </div>
  );
}