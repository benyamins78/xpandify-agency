export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  role: string;
  techStack: string;
  year: string;
  liveUrl: string;
  heroImage: string;
  detailImages: string[];
  headline: string;
  paragraph1: string;
  paragraph2: string;
  imageBg?: string;
}

export const projectsData: Project[] = [
  {
    id: "01",
    slug: "saeidian-trading-company",
    title: "Saeidian Trading Company",
    category: "Global Trade Architecture",
    role: "Full Stack Engineering, Brand Identity",
    techStack: "Next.js, TypeScript, Tailwind CSS, Headless CMS",
    year: "2026",
    liveUrl: "#",
    heroImage: "/images/saeidian-hero.jpg",
    detailImages: ["/images/saeidian-detail1.jpg", "/images/saeidian-detail2.jpg", "/images/saeidian-full.jpg"],
    headline: "Engineering digital excellence for a world-class international trading powerhouse.",
    paragraph1: "Saeidian Trading Company required an uncompromising digital presence to showcase their global supply chain operations, luxury commodities, and institutional partnerships across international markets.",
    paragraph2: "We built a lightning-fast, highly secure headless web platform combining brutalist luxury design with robust multi-language support and real-time trade logistics tracking.",
    imageBg: "from-[#1f493d] to-[#0f241e]"
  },
  {
    id: "02",
    slug: "maison-global",
    title: "Maison Global",
    category: "E-Commerce Architecture",
    role: "Full Stack Development, UX/UI Design",
    techStack: "Next.js, Tailwind CSS, Shopify Plus",
    year: "2026",
    liveUrl: "#",
    heroImage: "/images/project1-hero.jpg",
    detailImages: ["/images/project1-detail1.jpg", "/images/project1-detail2.jpg", "/images/project1-full.jpg"],
    headline: "Redefining the luxury e-commerce experience through headless architecture.",
    paragraph1: "The challenge was to create a digital storefront that felt as premium and exclusive as the physical garments themselves. We moved away from rigid templates, opting for a custom Next.js frontend communicating with a headless backend.",
    paragraph2: "This allowed for buttery-smooth page transitions, instant product loading, and a highly editorial layout that traditional e-commerce platforms struggle to achieve out-of-the-box.",
    imageBg: "from-[#1a3a31] to-[#0a1814]"
  },
  {
    id: "03",
    slug: "aura-wealth",
    title: "Aura Wealth",
    category: "Bespoke Web App",
    role: "Frontend Engineering, State Management",
    techStack: "React, Framer Motion, Node.js",
    year: "2026",
    liveUrl: "#",
    heroImage: "/images/project2-hero.jpg",
    detailImages: ["/images/project2-detail1.jpg", "/images/project2-detail2.jpg", "/images/project2-full.jpg"],
    headline: "Engineering a secure, high-performance financial dashboard.",
    paragraph1: "Aura Wealth required a data-dense interface that didn't compromise on aesthetics. We engineered a custom dashboard utilizing advanced React state management.",
    paragraph2: "The result is a lightning-fast web application that handles complex real-time financial data while maintaining a clean, minimalist luxury aesthetic.",
    imageBg: "from-[#245446] to-[#122b23]"
  },
  {
    id: "04",
    slug: "vanguard-global",
    title: "Vanguard Global",
    category: "Fintech Platform",
    role: "Architectural Consulting, Security Auditing",
    techStack: "Next.js, TypeScript, WebSockets",
    year: "2026",
    liveUrl: "#",
    heroImage: "/images/project3-hero.jpg",
    detailImages: ["/images/project3-detail1.jpg", "/images/project3-detail2.jpg", "/images/project3-full.jpg"],
    headline: "Architecting lightning-fast institutional trading endpoints.",
    paragraph1: "Vanguard Global demanded ultra-low latency and impenetrable security. We restructured their entire web platform to utilize edge computing and encrypted WebSockets.",
    paragraph2: "The upgrade resulted in a 400% increase in transaction throughput and zero downtime during peak trading hours.",
    imageBg: "from-[#1f493d] to-[#0a1814]"
  },
  {
    id: "05",
    slug: "quantix-ai",
    title: "Quantix AI",
    category: "SaaS Enterprise",
    role: "Full-Stack Development, AI Integration",
    techStack: "Python FastAPI, React, Tailwind CSS",
    year: "2026",
    liveUrl: "#",
    heroImage: "/images/project5-hero.jpg",
    detailImages: ["/images/project5-detail1.jpg", "/images/project5-detail2.jpg", "/images/project5-full.jpg"],
    headline: "Enterprise intelligence dashboards with fluid data visualization.",
    paragraph1: "Quantix AI processes massive streams of enterprise telemetry. We designed an intuitive dark-mode interface that transforms complex data streams into actionable insights.",
    paragraph2: "Modular component architecture allows enterprise clients to customize their workspace widgets in real time.",
    imageBg: "from-[#1a3a31] to-[#0f241e]"
  },
  {
    id: "06",
    slug: "lumina-studios",
    title: "Lumina Studios",
    category: "Creative Direction",
    role: "Brand Strategy, Web Production",
    techStack: "Next.js, WebGL, Tailwind CSS",
    year: "2025",
    liveUrl: "#",
    heroImage: "/images/project6-hero.jpg",
    detailImages: ["/images/project6-detail1.jpg", "/images/project6-detail2.jpg", "/images/project6-full.jpg"],
    headline: "An immersive digital portfolio for a world-renowned architecture firm.",
    paragraph1: "Lumina Studios showcases monumental architectural photography. We developed an ultra-lightweight WebGL gallery system that preserves extreme image fidelity.",
    paragraph2: "Visitors experience seamless spatial transitions that mimic walking through physical architectural galleries.",
    imageBg: "from-[#245446] to-[#0a1814]"
  }
];
