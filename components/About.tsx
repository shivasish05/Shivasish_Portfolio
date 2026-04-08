'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Target, TrendingUp, Users, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Strategic Problem Solver',
      description: 'Breaking down complex business challenges into actionable frameworks and scalable solutions.'
    },
    {
      icon: TrendingUp,
      title: 'Business & Technology Bridge',
      description: 'Connecting business objectives with technological capabilities for measurable impact.'
    },
    {
      icon: Users,
      title: 'Cross-Functional Leadership',
      description: 'Leading diverse teams through change initiatives and stakeholder alignment.'
    },
    {
      icon: Lightbulb,
      title: 'Execution Excellence',
      description: 'Translating innovative ideas into tangible outcomes through disciplined execution.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-teal-500 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-teal-100 px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">About Me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-700 to-teal-600 mb-6">
            Strategic Mind, Execution Focus
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Management Consulting Analyst at Accenture, specializing in business transformation, supply chain optimization, and AI-enabled solutions. I bridge strategic thinking with hands-on execution to deliver measurable impact.
          </p>
        </motion.div>

        {/* Journey Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  From Data Science to Strategic Consulting: A Journey of Transformation
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">The Analytical Beginning</h4>
                      <p className="text-slate-600 leading-relaxed">
                        My journey started with a deep fascination for data and algorithms. As a fresh graduate, I immersed myself in machine learning and data science, believing that computational models held the key to solving complex problems.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">The Realization</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Working at Exponentia.ai opened my eyes to the bigger picture. Technology wasn't just an end in itself—it was an enabler for business transformation. I learned that the most impactful solutions come from understanding people, processes, and organizational dynamics.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">The Evolution</h4>
                      <p className="text-slate-600 leading-relaxed">
                        At Blenheim Chalcot, I experienced the world of strategic consulting across diverse industries. This exposure taught me the art of stakeholder management, structured problem-solving frameworks, and translating insights into actionable strategies.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      4
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">The Synthesis</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Today at Accenture, I bring this holistic perspective to every engagement. I operate at the intersection of business strategy, technology, and execution—helping organizations navigate digital transformation while delivering measurable impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/50 rounded-2xl border border-slate-200">
                <p className="text-slate-700 text-center font-medium italic">
                  "My transformation taught me that the most meaningful impact comes from combining technical expertise with strategic thinking and unwavering commitment to results."
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-4">Core Strengths</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            What sets me apart in solving complex business challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group bg-white border border-slate-200 hover:border-blue-200">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-100 to-teal-100 rounded-xl mb-4 group-hover:shadow-lg transition-all"
                  >
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <h4 className="text-lg font-bold text-slate-800 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
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
