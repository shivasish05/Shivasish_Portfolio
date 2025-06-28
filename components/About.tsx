'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Target, TrendingUp, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: '3+ Years Experience',
      description: 'Gen AI, Business Analytics, Product Management Lifecycle, AI Products, and Strategic Product Management'
    },
    {
      icon: TrendingUp,
      title: 'Business Impact',
      description: 'Delivered measurable results through Business Analytics, LLM integration, RAG pipelines and Agile methodologies'
    },
    {
      icon: Users,
      title: 'Leadership Potential',
      description: 'Excellent communicator transitioning to business-facing leadership roles using Scrum framework'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Transforming Gen AI capabilities into market-ready products through Agile SDLC'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate Product Manager with a unique blend of Gen AI expertise and business acumen, 
            specializing in transforming Gen AI and Business Analytics into products that drive real business value using Agile methodologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              My Journey
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With a strong foundation in Gen AI and Business Analytics, I've evolved from a technical contributor 
              to a strategic product leader. My experience spans across diverse industries, from healthcare 
              and sports analytics to marketing technology and logistics, using Agile methodologies and Scrum framework.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I excel at bridging the gap between Gen AI capabilities and business requirements, 
              ensuring that AI-driven products not only work technically but also deliver measurable business impact through Business Analytics. 
              My approach combines data-driven decision making with strong stakeholder management and cross-functional leadership using Agile SDLC.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl p-6 flex items-center justify-center mx-auto shadow-md">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-700 mb-2">3+</div>
                <div className="text-base text-gray-600">Years of Impact</div>
                <div className="mt-2 text-xs text-gray-500">
                  Across ML, AI Products & Business Strategy
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors"
                  >
                    <item.icon className="w-8 h-8 text-blue-700" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;