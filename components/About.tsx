'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Target, TrendingUp, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: '3+ Years of Impact',
      description: 'Hands-on experience delivering GenAI products, business analytics solutions, and end-to-end product initiatives across multiple industries'
    },
    {
      icon: TrendingUp,
      title: 'Business-Driven Outcomes',
      description: 'Built and delivered AI-powered solutions using LLMs, RAG pipelines, and analytics frameworks that translated directly into measurable business results'
    },
    {
      icon: Users,
      title: 'Cross-Functional Leadership',
      description: 'Proven ability to lead and align engineers, data scientists, and business stakeholders within Agile and Scrum-driven environments'
    },
    {
      icon: Lightbulb,
      title: 'Product & Innovation Mindset',
      description: 'Focused on converting emerging GenAI capabilities into secure, scalable, and market-ready enterprise products'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white via-blue-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-teal-600 to-fuchsia-500 mb-6 drop-shadow-lg">
            About Me
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            Project Manager specializing in Generative AI and business analytics, focused on building enterprise-grade AI products that solve real-world problems and deliver measurable business value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-blue-700 mb-6 tracking-tight">
              My Journey
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I started my journey with a strong technical foundation in Generative AI and business analytics and gradually evolved into a product-focused delivery leader. Over the years, I’ve worked across diverse domains including healthcare, logistics, marketing technology, fintech, and enterprise analytics, delivering solutions within Agile and Scrum-driven environments.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My core strength lies in bridging the gap between advanced AI capabilities and business objectives. I work closely with stakeholders and engineering teams to ensure AI-driven products are not only technically robust, but also aligned with operational goals, governance standards, and long-term business impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-64 h-64 bg-gradient-to-br from-blue-200 to-teal-200 rounded-3xl p-6 flex items-center justify-center mx-auto shadow-2xl border-4 border-white">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-700 mb-2">3+</div>
                <div className="text-base text-gray-600">Years of Impact</div>
                <div className="mt-2 text-xs text-gray-500">
                  Delivering AI Products & Business Outcomes
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-gradient-to-br from-white to-blue-50 border-0">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full mb-4 group-hover:scale-110 transition-transform shadow-lg"
                  >
                    <item.icon className="w-8 h-8 text-blue-700" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-blue-700 mb-3 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-base leading-relaxed">
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
