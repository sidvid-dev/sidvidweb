'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import welcomeData from '@/data/welcome.json';
import type { WelcomeData } from '@/types/data';

const data: WelcomeData = welcomeData;

export default function Welcome() {
  return (
    <section id="about" className="bg-neutral-50 px-6 py-16 md:px-8 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 font-serif text-3xl font-light tracking-[0.2em] text-neutral-800 sm:text-4xl md:text-5xl"
        >
          {data.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 text-base leading-relaxed text-neutral-600 sm:text-lg md:text-xl"
        >
          {data.content}
        </motion.p>

        <motion.a
          href={data.buttonLink}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group inline-flex items-center gap-2 border-2 border-neutral-800 px-8 py-3 text-base tracking-[0.2em] text-neutral-800 transition-all hover:bg-neutral-800 hover:text-white"
        >
          {data.buttonText}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </motion.a>
      </div>
    </section>
  );
}

