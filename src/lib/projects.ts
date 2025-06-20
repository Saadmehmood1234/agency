interface BaseProject {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  liveUrl?: string;
}

interface DetailedProject extends BaseProject {
  details: string;
  technologies: string[];
  features: string[];
  challenges?: string[];
  benefits?: string[];
}

type Project = BaseProject | DetailedProject;

export const projects: Project[] = [
  {
    id: 1,
    title: "PrimeFlix Subscription Marketplace",
    description: "A platform offering premium subscriptions to various services at discounted rates",
    category: "Web Development",
    image: "/prime.jpeg",
    link: "/projects/primeflix",
    liveUrl: "https://www.primeflix.site/",
    details: `
      PrimeFlix is an innovative subscription marketplace that provides access to premium platforms
      (like Netflix, Spotify, Adobe Creative Cloud, and more) at significantly reduced prices.
      The platform offers legitimate shared accounts through family plans and bulk purchasing,
      making premium services accessible to budget-conscious users while maintaining full compliance
      with service providers' terms.
    `,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe Payments",
      "Firebase Authentication",
      "Node.js Backend",
      "MongoDB"
    ],
    features: [
      "Multiple subscription categories with detailed comparisons",
      "Secure payment processing",
      "Instant account delivery after purchase",
      "User dashboard for managing subscriptions",
      "Automated renewal reminders",
      "24/7 customer support",
      "Responsive mobile-friendly design"
    ],
    challenges: [
      "Ensuring compliance with service providers' terms",
      "Managing shared account access securely",
      "Preventing fraudulent purchases",
      "Maintaining high availability during peak demand"
    ],
    benefits: [
      "Saves users 50-80% on premium subscriptions",
      "Centralized management of multiple subscriptions",
      "Verified and reliable account sharing",
      "Easy cancellation and refund policy",
      "Regular deals and promotional offers"
    ]
  },
  {
    id: 3,
    title: "Mobile App UI",
    description: "Fitness tracking application with custom dashboard",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
    link: "/projects/mobile-app-ui",
    liveUrl: "#",
    details:
      "Designed a fitness tracking mobile app with focus on user engagement and data visualization.",
    technologies: ["Figma", "Adobe XD", "Lottie Animations"],
    features: [
      "Custom workout tracking",
      "Progress visualization",
      "Social sharing",
      "Dark/light mode",
    ],
  },
  {
    id: 4,
    title: "Restaurant Website",
    description: "Modern responsive website with online reservations",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    link: "/projects/restaurant-website",
  },
  {
    id: 5,
    title: "Product Packaging",
    description: "Eco-friendly packaging design for skincare line",
    category: "Graphic Design",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
    link: "/projects/product-packaging",
  },
];
