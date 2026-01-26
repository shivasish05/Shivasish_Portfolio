'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScheduleCall = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-gray-900 to-teal-900 text-white py-16 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center space-y-12">
          {/* Back to Top Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="lg"
              className="border-blue-400 text-blue-200 hover:bg-blue-800 hover:text-white shadow-lg px-8 py-3 text-lg font-semibold rounded-full"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-5 h-5 mr-2" />
              Back to Top
            </Button>
          </motion.div>

          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-teal-400 to-fuchsia-400 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-lg">
              Shivasish Mahapatra
            </h3>
            <p className="text-blue-200 mt-2 text-lg font-medium">
              Project Manager · GenAI Delivery · Business & Product Strategy
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8"
          >
            {[
              { name: 'About', href: '#about' },
              { name: 'Case Studies', href: '#case-studies' },
              { name: 'Skills', href: '#skills' },
              { name: 'Services', href: '#services' },
              { name: 'Contact', href: '#contact' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-blue-200 hover:text-white transition-colors duration-200 cursor-pointer text-lg font-semibold px-4 py-2 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                tabIndex={0}
                aria-label={item.name}
              >
                {item.name}
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full border-t border-blue-800" />

          {/* Copyright and Attribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center space-y-2"
          >
            <p className="text-blue-200 text-base">
              © 2026 Shivasish Mahapatra. All rights reserved.
            </p>
            <p className="text-blue-300 text-sm flex items-center justify-center">
              Designed and built with <Heart className="w-4 h-4 mx-1 text-fuchsia-400 animate-pulse" /> using modern web technologies
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-blue-800 via-fuchsia-700 to-teal-800 p-10 rounded-2xl shadow-xl mt-8"
          >
            <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">
              Have a Product or AI Challenge to Solve?
            </h4>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Let’s explore how GenAI, analytics, and strong product execution can create real, measurable impact.
            </p>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-fuchsia-500 hover:from-blue-700 hover:to-fuchsia-600 text-lg px-8 py-4 shadow-lg rounded-full"
              onClick={handleScheduleCall}
              aria-label="Schedule a Call"
            >
              Start a Conversation
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
