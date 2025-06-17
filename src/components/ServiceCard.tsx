interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: string;
}

export const ServiceCard = ({ title, description, icon, href, color }: ServiceCardProps) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all h-full"
      style={{ borderTop: `4px solid ${color}` }}
    >
      <div className="p-6">
        <div className="mb-4" style={{ color }}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
        <a 
          href={href} 
          className="font-medium inline-flex items-center hover:underline"
          style={{ color }}
        >
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};