'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import siteConfig from '@/data/site-config.json';
import type { SiteConfig } from '@/types/data';

const config: SiteConfig = siteConfig;

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleStartChat = () => {
    const whatsappUrl = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(config.whatsapp.defaultMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  return (
    <>
      {/* Chat Widget Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[320px] overflow-hidden rounded-lg bg-white shadow-2xl md:bottom-28 md:right-8 md:w-[360px]"
          >
            {/* Header */}
            <div className="relative bg-[#075E54] px-5 py-4 text-white">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-3 top-3 text-white/80 transition-colors hover:text-white"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white/20">
                  <MessageCircle className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="font-medium">{config.brandName}</h3>
                  <p className="text-xs text-white/80">{config.whatsapp.replyTime}</p>
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div className="bg-[#E5DDD5] p-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h100v100H0z\' fill=\'%23e5ddd5\'/%3E%3Cpath d=\'M20 10h60v2H20zm0 20h40v2H20zm0 20h50v2H20z\' fill=\'%23d1c7b7\' opacity=\'.1\'/%3E%3C/svg%3E")' }}>
              {/* Message Bubble */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative mb-4"
              >
                <div className="rounded-lg rounded-tl-none bg-white p-3 shadow-sm">
                  <p className="mb-1 text-xs font-medium text-neutral-600">{config.brandName}</p>
                  <p className="text-sm text-neutral-800">{config.whatsapp.greeting}</p>
                  <span className="mt-1 block text-right text-xs text-neutral-400">
                    {getCurrentTime()}
                  </span>
                </div>
                {/* Tail */}
                <div className="absolute -left-2 top-0 h-0 w-0 border-b-8 border-r-8 border-b-transparent border-r-white" />
              </motion.div>

              {/* Start Chat Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={handleStartChat}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-medium text-white shadow-md transition-all hover:bg-[#20BA5A] hover:shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Click to Start Chat
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: 'spring' }}
        className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8"
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-shadow hover:shadow-xl md:h-16 md:w-16"
          aria-label="Open WhatsApp chat"
        >
          {/* Pulse Animation */}
          {!isOpen && (
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-75" />
          )}

          {/* Icon */}
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-7 w-7 text-white md:h-8 md:w-8" />
              </motion.div>
            ) : (
              <motion.div
                key="message"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-7 w-7 text-white md:h-8 md:w-8" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Notification Badge */}
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, type: 'spring' }}
            className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white"
          >
            1
          </motion.div>
        )}
      </motion.div>
    </>
  );
}

