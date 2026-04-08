'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Target, TrendingUp, Users, Lightbulb, Award, Briefcase } from 'lucide-react';

const About = () => {
  const journey = [
    {
      period: "2022",
      title: "Operations Foundation",
      company: "Allcargo Logistics",
      description: "Built foundational understanding of supply chain and operations management"
    },
    {
      period: "2023-2024",
      title: "Data Science & AI Consulting",
      company: "Blenheim Chalcot",
      description: "Delivered AI/ML solutions across multiple ventures and international markets"
    },
    {
      period: "2024-2025",
      title: "Product Leadership",
      company: "Exponentia.ai",
      description: "Led GenAI product delivery and cross-functional teams to execution excellence"
    },
    {
      period: "2026-Present",
      title: "Strategic Consulting",
      company: "Accenture",
      description: "Driving business transformation through structured problem-solving and AI enablement"
    }
  ];

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

        {/* Structured Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-800">My Approach</h3>
                  <div className="space-y-3 text-slate-600">
                    <p className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="leading-relaxed">From data science foundations to strategic consulting, I've evolved to solve complex problems at the intersection of business and technology.</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="leading-relaxed">I excel at translating stakeholder needs into actionable strategies, leading cross-functional teams, and driving measurable business outcomes.</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="leading-relaxed">My strength lies in combining analytical rigor with human-centered problem-solving to create sustainable, scalable solutions.</span>
                    </p>
                  </div>
                </div>
                <div className="md:col-span-1 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mb-3">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-slate-500 font-medium">Problem Solver</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-blue-600" />
              Career Evolution
            </h3>

            <div className="space-y-6">
              {journey.map((item, index) => (
                <motion.div
                  key={item.period}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {item.period.split('-')[0]}
                    </div>
                  </div>
                  <div className="flex-1 pb-6 border-l-2 border-blue-200 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>
                    <h4 className="text-lg font-bold text-slate-800 mb-1">{item.title}</h4>
                    <p className="text-blue-600 font-medium text-sm mb-2">{item.company}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="bg-gradient-to-br from-blue-50 via-white to-teal-50 border-2 border-blue-100 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-800 mb-2">3+</div>
                <div className="text-lg text-slate-600 font-medium mb-1">Years of Impact</div>
                <div className="text-sm text-slate-500">
                  Driving AI & Business Transformation
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

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
