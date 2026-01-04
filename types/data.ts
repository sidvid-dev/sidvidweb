// Site Configuration Types
export interface SiteConfig {
  brandName: string;
  tagline: string;
  description: string;
  contact: {
    email: string;
    phone: string;
    address: {
      street: string;
      cityState: string;
    };
  };
  whatsapp: {
    number: string;
    greeting: string;
    replyTime: string;
    defaultMessage: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// Hero Section Types
export interface HeroData {
  backgroundImage: string;
  heading: string;
  subheading: string;
  brightness: number;
  showScrollIndicator: boolean;
}

// Welcome Section Types
export interface WelcomeData {
  heading: string;
  content: string;
  buttonText: string;
  buttonLink: string;
}

// Services Types
export interface ServiceItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface ServicesData {
  heading: string;
  items: ServiceItem[];
}

// Portfolio Types
export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
}

export interface PortfolioData {
  heading: string;
  items: PortfolioItem[];
}

// Testimonials Types
export interface TestimonialItem {
  id: number;
  name: string;
  location: string;
  text: string;
  image: string;
  rating: number;
}

export interface TestimonialsData {
  heading: string;
  items: TestimonialItem[];
}

// CTA Types
export interface CTAData {
  backgroundImage: string;
  heading: string;
  subheading: string;
  buttonText: string;
  buttonIcon: string;
  buttonLink: string;
  brightness: number;
}

// Navigation Types
export interface NavLink {
  name: string;
  href: string;
}

export interface NavigationData {
  logo: string;
  links: NavLink[];
}

// Social Media Types
export interface SocialLink {
  url: string;
  enabled: boolean;
}

export interface SocialData {
  instagram: SocialLink;
  facebook: SocialLink;
  twitter: SocialLink;
  email: SocialLink;
  linkedin: SocialLink;
  youtube: SocialLink;
}

// Footer Types
export interface FooterData {
  quickLinks: NavLink[];
  services: string[];
  copyright: string;
}

