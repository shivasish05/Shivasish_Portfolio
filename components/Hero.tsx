'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleLetsTalk = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleExploreOpportunities = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-0" />

      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-30"
          animate={{ x: [0, 50, -50, 0], y: [0, 30, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{ x: [0, -40, 40, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-shrink-0 order-2 lg:order-1"
        >
          <div className="relative group">
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-cyan-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition duration-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-glow-lg border-2 border-cyan-400/50 bg-gradient-to-br from-purple-900 to-slate-900 mx-auto">
              <img
                src="/profile/profile headshot.png"
                alt="Shivasish Mahapatra"
                className="object-cover object-top w-full h-full hover:scale-110 transition-transform duration-500"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://randomuser.me/api/portraits/men/32.jpg'; }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left order-1 lg:order-2"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex justify-center lg:justify-start mb-4 lg:mb-6 w-full"
          >
            <span className="max-w-xl w-full sm:w-auto px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/50 text-purple-300 text-xs lg:text-sm font-semibold backdrop-blur-sm whitespace-normal break-words">
              Consulting Analyst at Accenture | Strategy & Transformation
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Shivasish Mahapatra
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-4 lg:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Management Consultant · Problem Solver · Business Transformation
          </motion.p>

          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 lg:mb-12 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I help organizations solve complex business challenges through structured problem-solving, data-driven insights, and strategic execution. Specializing in supply chain optimization, operational transformation, and AI-enabled business solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-start items-center mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={handleLetsTalk}
              className="group relative px-6 py-3 lg:px-8 lg:py-4 font-semibold text-base lg:text-lg text-white overflow-hidden rounded-xl w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:from-purple-700 group-hover:to-cyan-700 transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
              <div className="relative flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5" />
                Let's Connect
                <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>

            <motion.button
              onClick={handleExploreOpportunities}
              className="group relative px-6 py-3 lg:px-8 lg:py-4 font-semibold text-base lg:text-lg text-white overflow-hidden rounded-xl border-2 border-cyan-400/50 hover:border-cyan-400 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-purple-600/10 group-hover:from-cyan-600/20 group-hover:to-purple-600/20" />
              <div className="relative flex items-center justify-center gap-2">
                Explore Opportunities
              </div>
            </motion.button>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4 lg:gap-8 mt-8 lg:mt-16 pt-8 lg:pt-12 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="text-center">
              <div className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">3+</div>
              <div className="text-xs lg:text-base text-gray-400 mt-1 lg:mt-2">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">20+</div>
              <div className="text-xs lg:text-base text-gray-400 mt-1 lg:mt-2">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">5+</div>
              <div className="text-xs lg:text-base text-gray-400 mt-1 lg:mt-2">Industries Served</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
