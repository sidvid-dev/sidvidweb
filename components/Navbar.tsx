'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Facebook, Mail, Twitter, Linkedin, Youtube, LucideIcon } from 'lucide-react';
import navigationData from '@/data/navigation.json';
import socialData from '@/data/social.json';
import siteConfig from '@/data/site-config.json';
import type { NavigationData, SocialData, SiteConfig } from '@/types/data';

const navData: NavigationData = navigationData;
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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter enabled social links
  const enabledSocialLinks = Object.entries(socData)
    .filter(([_, value]) => value.enabled)
    .map(([key, value]) => ({
      icon: socialIconMap[key] || Mail,
      href: value.url,
      label: key.charAt(0).toUpperCase() + key.slice(1),
    }));

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 shadow-md backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="flex h-20 items-center justify-between md:h-24">
            {/* Logo */}
            <motion.a
              href="#home"
              className={`font-serif text-2xl font-light tracking-[0.2em] transition-colors md:text-3xl ${
                isScrolled ? 'text-neutral-800' : 'text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {config.brandName}
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 lg:flex">
              {navData.links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-light tracking-[0.15em] transition-colors hover:opacity-70 ${
                    isScrolled ? 'text-neutral-800' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Social Icons */}
            <div className="hidden items-center gap-4 lg:flex">
              {enabledSocialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`transition-colors hover:opacity-70 ${
                      isScrolled ? 'text-neutral-800' : 'text-white'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden ${
                isScrolled ? 'text-neutral-800' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay - Click to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed inset-y-0 right-0 z-50 w-full bg-white shadow-xl sm:w-80"
            >
              <div className="flex h-full flex-col px-6 py-6">
                {/* Close Button */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-serif text-xl tracking-[0.2em] text-neutral-800">
                    {config.brandName}
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-full p-2 text-neutral-800 transition-colors hover:bg-neutral-100"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-6">
                  {navData.links.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xl font-light tracking-[0.15em] text-neutral-800 transition-colors hover:text-neutral-500"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>

                {/* Mobile Social Icons */}
                <div className="mt-auto flex gap-6 border-t border-neutral-200 pt-6">
                  {enabledSocialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="text-neutral-800 transition-colors hover:text-neutral-500"
                      >
                        <Icon className="h-6 w-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

