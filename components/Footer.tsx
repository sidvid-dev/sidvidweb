'use client';

import { Instagram, Facebook, Twitter, Mail, Linkedin, Youtube, LucideIcon } from 'lucide-react';
import footerData from '@/data/footer.json';
import socialData from '@/data/social.json';
import siteConfig from '@/data/site-config.json';
import type { FooterData, SocialData, SiteConfig } from '@/types/data';

const data: FooterData = footerData;
const socData: SocialData = socialData;
const config: SiteConfig = siteConfig;

// Icon mapping for social media
const socialIconMap: Record<string, LucideIcon> = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  email: Mail,
  linkedin: Linkedin,
  youtube: Youtube,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Filter enabled social links
  const enabledSocialLinks = Object.entries(socData)
    .filter(([_, value]) => value.enabled)
    .map(([key, value]) => ({
      icon: socialIconMap[key] || Mail,
      href: value.url,
      label: key.charAt(0).toUpperCase() + key.slice(1),
    }));

  return (
    <footer className="bg-neutral-800 px-6 py-12 text-white md:px-8 md:py-16">
      <div className="mx-auto w-full max-w-6xl">
        {/* Main Footer Content */}
        <div className="mb-8 grid gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-3 font-serif text-lg font-light tracking-[0.2em] sm:text-xl md:mb-4">
              {config.brandName}
            </h3>
            <p className="text-xs text-neutral-400 sm:text-sm">
              {config.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-xs font-light tracking-[0.2em] sm:text-sm md:mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400 sm:text-sm">
              {data.quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-3 text-xs font-light tracking-[0.2em] sm:text-sm md:mb-4">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400 sm:text-sm">
              {data.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-xs font-light tracking-[0.2em] sm:text-sm md:mb-4">
              CONTACT
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400 sm:text-sm">
              <li>{config.contact.email}</li>
              <li>{config.contact.phone}</li>
              <li>{config.contact.address.street}</li>
              <li>{config.contact.address.cityState}</li>
            </ul>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="mb-8 flex justify-center gap-6">
          {enabledSocialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                className="rounded-full border border-neutral-600 p-2 transition-colors hover:border-white hover:bg-white hover:text-neutral-800"
                aria-label={social.label}
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-700 pt-8 text-center">
          <p className="text-xs tracking-[0.2em] text-neutral-500">
            {data.copyright.replace('{year}', currentYear.toString()).toUpperCase()}
          </p>
        </div>
      </div>
    </footer>
  );
}

