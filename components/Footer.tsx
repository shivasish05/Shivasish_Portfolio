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
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
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
              size="sm"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
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
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Shivasish Mahapatra
            </h3>
            <p className="text-gray-400 mt-2">
              Product Manager | Gen AI Strategist | Business Analytics Consultant
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
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
                className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full border-t border-gray-800" />

          {/* Copyright and Attribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center space-y-2"
          >
            <p className="text-gray-400 text-sm">
              © 2025 Shivasish Mahapatra. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs flex items-center justify-center">
              Built with <Heart className="w-3 h-3 mx-1 text-red-500" /> using Next.js, Tailwind CSS, and Framer Motion
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-blue-900 to-teal-900 p-6 rounded-xl"
          >
            <h4 className="text-lg font-semibold text-white mb-2">
              Ready to Transform Your Product Strategy with Gen AI?
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Let's discuss how Gen AI, Business Analytics, and Agile methodologies can drive your business forward.
            </p>
            <Button 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleScheduleCall}
            >
              Schedule a Call
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;