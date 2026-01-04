'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, LucideIcon } from 'lucide-react';
import ctaData from '@/data/cta.json';
import siteConfig from '@/data/site-config.json';
import type { CTAData, SiteConfig } from '@/types/data';

const data: CTAData = ctaData;
const config: SiteConfig = siteConfig;

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Mail,
  MessageCircle,
};

export default function CTA() {
  const Icon = iconMap[data.buttonIcon] || Mail;

  // Handle WhatsApp link
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (data.buttonLink === 'whatsapp') {
      e.preventDefault();
      const whatsappUrl = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(config.whatsapp.defaultMessage)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="contact" className="relative h-[60vh] min-h-[400px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${data.backgroundImage})`,
          filter: `brightness(${data.brightness})`
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-serif text-2xl font-light tracking-[0.2em] text-white sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl"
        >
          {data.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 px-4 text-xs tracking-[0.15em] text-white/90 sm:text-sm md:text-base"
        >
          {data.subheading}
        </motion.p>

        <motion.a
          href={data.buttonLink === 'whatsapp' ? '#' : data.buttonLink}
          onClick={handleClick}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group inline-flex items-center gap-2 border-2 border-white px-8 py-3 text-sm tracking-[0.2em] text-white transition-all hover:bg-white hover:text-neutral-800"
        >
          <Icon className="h-4 w-4" />
          {data.buttonText}
        </motion.a>
      </div>
    </section>
  );
}

