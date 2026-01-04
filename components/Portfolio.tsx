'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import portfolioData from '@/data/portfolio.json';
import type { PortfolioData } from '@/types/data';

const data: PortfolioData = portfolioData;

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-neutral-100 px-6 py-16 md:px-8 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center font-serif text-3xl font-light tracking-[0.2em] text-neutral-800 sm:text-4xl md:mb-16 md:text-5xl"
        >
          {data.heading}
        </motion.h2>
        
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
          {data.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-4/3 overflow-hidden bg-neutral-200"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="mb-2 text-xs tracking-[0.2em] text-white/80 sm:text-sm">
                  {item.category}
                </p>
                <h3 className="text-xl font-light tracking-widest text-white sm:text-2xl">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

