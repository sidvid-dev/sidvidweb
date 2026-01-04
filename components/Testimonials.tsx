'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import testimonialsData from '@/data/testimonials.json';
import type { TestimonialsData } from '@/types/data';

const data: TestimonialsData = testimonialsData;

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % data.items.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.items.length) % data.items.length);
  };

  const current = data.items[currentIndex];

  return (
    <section id="testimonials" className="bg-white px-6 py-16 md:px-8 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center font-serif text-3xl font-light tracking-[0.2em] text-neutral-800 sm:text-4xl md:mb-16 md:text-5xl"
        >
          {data.heading}
        </motion.h2>
        
        <div className="relative">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {/* Image */}
            <motion.div
              key={`image-${current.id}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-3/4 overflow-hidden bg-neutral-200"
            >
              <Image
                src={current.image}
                alt={current.name}
                fill
                className="object-cover"
              />
            </motion.div>
            
            {/* Content */}
            <motion.div
              key={`content-${current.id}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center px-2"
            >
              <p className="mb-6 text-lg leading-relaxed text-neutral-600 sm:text-xl md:mb-8 md:text-2xl">
                &ldquo;{current.text}&rdquo;
              </p>

              <div className="mb-8">
                <h3 className="mb-1 text-xl font-light tracking-[0.15em] text-neutral-800 sm:text-2xl">
                  {current.name.toUpperCase()}
                </h3>
                <p className="text-sm tracking-[0.15em] text-neutral-500 sm:text-base">
                  {current.location}
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={prev}
                  className="rounded-full border-2 border-neutral-300 p-3 transition-colors hover:border-neutral-800 hover:bg-neutral-800 hover:text-white"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={next}
                  className="rounded-full border-2 border-neutral-300 p-3 transition-colors hover:border-neutral-800 hover:bg-neutral-800 hover:text-white"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

