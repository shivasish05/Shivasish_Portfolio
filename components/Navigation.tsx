'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsOpen(false);
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Shivasish_Resume.pdf';
    link.download = 'Shivasish_Mahapatra_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Expertise', href: '#skills' },
    { name: 'What I Do', href: '#services' },
    { name: 'Let’s Connect', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-purple-500/20' 
          : 'bg-gradient-to-b from-slate-900/50 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-5">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent cursor-pointer tracking-tight"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
          >
            SM
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                whileHover={{ y: -2 }}
                className="text-base font-semibold text-gray-300 hover:text-cyan-300 transition-all duration-200 cursor-pointer px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-cyan-600/10 focus:outline-none focus:ring-2 focus:ring-purple-400"
                tabIndex={0}
                aria-label={item.name}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeDownload}
              className="ml-4 px-6 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg flex items-center gap-2"
              aria-label="Download Resume"
            >
              <Download className="w-5 h-5" />
              Resume
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-300 focus:outline-none p-2"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-purple-500/20 rounded-b-2xl shadow-xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  whileHover={{ x: 5 }}
                  className="block px-4 py-3 text-lg font-semibold text-gray-300 hover:text-cyan-300 hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-cyan-600/10 rounded-lg transition-all duration-200 cursor-pointer"
                  tabIndex={0}
                  aria-label={item.name}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleResumeDownload}
                className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 mt-4 text-lg font-semibold rounded-lg text-white transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                aria-label="Download Resume"
              >
                <Download className="w-5 h-5" />
                Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
