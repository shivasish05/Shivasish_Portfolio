'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Shivasish_Resume.pdf';
    link.download = 'Shivasish_Mahapatra_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLetsTalk = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleHireMe = () => {
    const subject = encodeURIComponent('Product Manager Opportunity');
    const body = encodeURIComponent(
      'Hi Shivasish,\n\nI would like to explore a Product / AI leadership opportunity with you.\n\nBest regards,'
    );
    window.open(`mailto:mahapatrashiv05@gmail.com?subject=${subject}&body=${body}`);
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-24 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <div className="relative group">
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-cyan-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition duration-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-glow-lg border-2 border-cyan-400/50 bg-gradient-to-br from-purple-900 to-slate-900 mx-auto">
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
          className="flex-1 text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/50 text-purple-300 text-sm font-semibold backdrop-blur-sm">
              Building real-world GenAI products
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Shivasish Mahapatra
            </span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Project Manager · GenAI Delivery · Product & Business Strategy
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I design and deliver AI-powered products that solve real business problems — from strategy and discovery to production rollout.
            <br className="hidden md:inline" />
            Experienced in translating complex GenAI systems into scalable, measurable outcomes using strong product execution.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-start items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={handleResumeDownload}
              className="group relative px-8 py-4 font-semibold text-lg text-white overflow-hidden rounded-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:from-purple-700 group-hover:to-cyan-700 transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
              <div className="relative flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Resume
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>

            <motion.button
              onClick={handleLetsTalk}
              className="group relative px-8 py-4 font-semibold text-lg text-white overflow-hidden rounded-xl border-2 border-cyan-400/50 hover:border-cyan-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-purple-600/10 group-hover:from-cyan-600/20 group-hover:to-purple-600/20" />
              <div className="relative flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Let’s Talk
              </div>
            </motion.button>

            <motion.button
              onClick={handleHireMe}
              className="group relative px-8 py-4 font-semibold text-lg text-white overflow-hidden rounded-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 group-hover:from-pink-700 group-hover:to-purple-700 transition-all duration-300" />
              <div className="relative">Explore Opportunities</div>
            </motion.button>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">3+</div>
              <div className="text-gray-400 mt-2">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">20+</div>
              <div className="text-gray-400 mt-2">Products & Initiatives</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Global</div>
              <div className="text-gray-400 mt-2">Client Exposure</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="w-7 h-12 border-2 border-gradient-to-b from-purple-400 to-cyan-400 rounded-full flex justify-center cursor-pointer backdrop-blur-md bg-white/5 hover:bg-white/10"
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
        >
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
