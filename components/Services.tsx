'use client';

import { motion } from 'framer-motion';
import { Camera, Video, Plane, Heart, Star, Award, Users, Mail, Phone, MapPin, Clock, Calendar, LucideIcon } from 'lucide-react';
import servicesData from '@/data/services.json';
import type { ServicesData } from '@/types/data';

const data: ServicesData = servicesData;

// Icon mapping - maps string names to actual icon components
const iconMap: Record<string, LucideIcon> = {
  Camera,
  Video,
  Plane,
  Heart,
  Star,
  Award,
  Users,
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
};

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 py-16 md:px-8 md:py-24 lg:py-32">
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

        <div className="grid gap-10 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {data.items.map((service, index) => {
            const Icon = iconMap[service.icon] || Camera;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group text-center"
              >
                <div className="mb-5 flex justify-center md:mb-6">
                  <div className="rounded-full bg-neutral-100 p-6 transition-all group-hover:bg-neutral-800 md:p-8">
                    <Icon className="h-10 w-10 text-neutral-800 transition-colors group-hover:text-white md:h-12 md:w-12" />
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-light tracking-[0.15em] text-neutral-800 sm:text-2xl md:mb-4">
                  {service.title.toUpperCase()}
                </h3>

                <p className="px-2 text-base leading-relaxed text-neutral-600 sm:text-lg">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

