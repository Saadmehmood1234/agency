import { 
  Globe, 
  LineChart, 
  Film, 
  Megaphone, 
  Smartphone, 
  ShoppingCart,
  PenTool,
  Server,
  Mail,
  Users,
  LucideIcon
} from 'lucide-react';
import { ReactElement } from 'react';

interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  category: string;
  features: string[];
  icon: ReactElement;
}

export const services: Service[] = [  {
    id: 1,
    title: "Web Development",
    slug: "web-development",
    description: "Modern, responsive websites built with the latest technologies.",
    longDescription: "Our web development services create fast, secure, and scalable websites tailored to your business needs. We use modern frameworks like Next.js to deliver optimal performance.",
    category: "Development",
    features: [
      "Custom website development",
      "E-commerce solutions",
      "CMS integration",
      "API development",
      "Performance optimization",
      "Progressive Web Apps"
    ],
    icon: <Globe className="w-10 h-10" />
  },
  {
    id: 2,
    title: "SEO Services",
    slug: "seo-services",
    description: "Improve your search rankings and drive organic traffic.",
    longDescription: "Our comprehensive SEO strategies help your website rank higher in search results, increasing visibility and attracting quality leads.",
    category: "Marketing",
    features: [
      "Keyword research & strategy",
      "On-page optimization",
      "Technical SEO audits",
      "Link building",
      "Local SEO",
      "SEO analytics & reporting"
    ],
    icon: <LineChart className="w-10 h-10" />
  },
  {
    id: 3,
    title: "Video Editing",
    slug: "video-editing",
    description: "Professional video production and editing services.",
    longDescription: "From corporate videos to social media content, we create engaging visual stories that captivate your audience.",
    category: "Creative",
    features: [
      "Commercial video production",
      "Social media clips",
      "Motion graphics",
      "Color grading",
      "Audio enhancement",
      "2D/3D animation"
    ],
    icon: <Film className="w-10 h-10" />
  },
  {
    id: 4,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Data-driven marketing strategies for maximum ROI.",
    longDescription: "We develop customized digital marketing campaigns that connect with your target audience and deliver measurable results.",
    category: "Marketing",
    features: [
      "Social media marketing",
      "PPC advertising",
      "Content marketing",
      "Email campaigns",
      "Influencer partnerships",
      "Conversion rate optimization"
    ],
    icon: <Megaphone className="w-10 h-10" />
  },
  {
    id: 5,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Native and cross-platform mobile applications.",
    longDescription: "We build intuitive, high-performance mobile apps for iOS and Android that engage users and grow your business.",
    category: "Development",
    features: [
      "iOS app development",
      "Android app development",
      "React Native apps",
      "App UI/UX design",
      "API integration",
      "App store optimization"
    ],
    icon: <Smartphone className="w-10 h-10" />
  },
  {
    id: 6,
    title: "E-commerce Solutions",
    slug: "ecommerce-solutions",
    description: "Complete online store setup and optimization.",
    longDescription: "We create seamless e-commerce experiences that convert visitors into customers and maximize your online sales.",
    category: "Development",
    features: [
      "Shopify development",
      "WooCommerce solutions",
      "Custom cart functionality",
      "Payment gateway integration",
      "Inventory management",
      "Conversion optimization"
    ],
    icon: <ShoppingCart className="w-10 h-10" />
  },
  {
    id: 7,
    title: "Graphic Design",
    slug: "graphic-design",
    description: "Visually stunning designs for all media.",
    longDescription: "Our creative team delivers impactful designs that strengthen your brand identity across all platforms.",
    category: "Creative",
    features: [
      "Logo & branding",
      "Print materials",
      "Social media graphics",
      "Infographics",
      "Packaging design",
      "Illustrations"
    ],
    icon: <PenTool className="w-10 h-10" />
  },
  {
    id: 8,
    title: "Web Hosting",
    slug: "web-hosting",
    description: "Reliable, secure hosting solutions.",
    longDescription: "We provide enterprise-grade hosting with 99.9% uptime, top-notch security, and expert support.",
    category: "Infrastructure",
    features: [
      "Shared hosting",
      "VPS hosting",
      "Dedicated servers",
      "SSL certificates",
      "Automated backups",
      "24/7 monitoring"
    ],
    icon: <Server className="w-10 h-10" />
  },
  {
    id: 9,
    title: "Email Marketing",
    slug: "email-marketing",
    description: "Convert subscribers into customers.",
    longDescription: "We design and execute email campaigns that nurture leads and drive repeat business.",
    category: "Marketing",
    features: [
      "Newsletter design",
      "Automation workflows",
      "List segmentation",
      "A/B testing",
      "Analytics & reporting",
      "GDPR compliance"
    ],
    icon: <Mail className="w-10 h-10" />
  },
  {
    id: 10,
    title: "Social Media Management",
    slug: "social-media-management",
    description: "Build your brand across social platforms.",
    longDescription: "We handle everything from content creation to community management, growing your social presence strategically.",
    category: "Marketing",
    features: [
      "Content calendar",
      "Platform strategy",
      "Community engagement",
      "Paid social advertising",
      "Influencer collaborations",
      "Performance analytics"
    ],
    icon: <Users className="w-10 h-10" />
  }
];