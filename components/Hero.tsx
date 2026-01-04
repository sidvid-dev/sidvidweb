'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroData from '@/data/hero.json';
import siteConfig from '@/data/site-config.json';
import type { HeroData, SiteConfig } from '@/types/data';

const data: HeroData = heroData;
const config: SiteConfig = siteConfig;

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${data.backgroundImage})`,
          filter: `brightness(${data.brightness})`
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-4xl font-light tracking-[0.25em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {config.brandName}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 max-w-xl px-4 text-xs font-light tracking-[0.15em] text-white/90 sm:text-sm md:text-base"
        >
          {config.tagline}
        </motion.p>

        {data.showScrollIndicator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-12 animate-bounce"
          >
            <ChevronDown className="h-10 w-10 text-white" />
          </motion.div>
        )}
      </div>
    </section>
  );
}

