'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Shivasish Resume Product New (1).pdf';
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
    // Open email client with pre-filled subject
    const subject = encodeURIComponent('Product Manager Opportunity - Hiring Inquiry');
    const body = encodeURIComponent('Hi Shivasish,\n\nI would like to discuss a Product Manager opportunity with you.\n\nBest regards,');
    window.open(`mailto:mahapatrashiv05@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-gradient-to-r from-blue-600 to-teal-600" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent">
              Shivasish
            </span>
            <br />
            <span className="text-gray-900">Mahapatra</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Product Manager | Gen AI Strategist | Business Analytics Consultant | Data Scientist
          </motion.p>

          <motion.p
            className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Transforming Gen AI and Business Analytics into scalable products with measurable business impact.
            Experienced in leveraging Data Science, Gen AI and Agile methodologies to turn AI capabilities into real-world solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-blue-700 hover:bg-blue-800 group"
              onClick={handleResumeDownload}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-700 text-blue-700 hover:bg-blue-50"
              onClick={handleLetsTalk}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Let's Talk
            </Button>
            
            <Button 
              size="lg" 
              className="bg-teal-600 hover:bg-teal-700"
              onClick={handleHireMe}
            >
              Hire Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center cursor-pointer"
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;