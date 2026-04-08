'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin, Star, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Management Consulting Analyst',
      company: 'Accenture',
      period: 'Mar 2026 - Present (2 months)',
      location: 'Bengaluru, India',
      type: 'Hybrid',
      isCurrent: true,
      highlights: [
        'Solving complex business challenges across technology, supply chain, financial services, and consumer businesses',
        'Bridging business objectives with technology solutions through problem structuring and data-driven insights',
        'Supporting supply chain transformation, operations optimization, and AI/GenAI enablement initiatives'
      ],
      skills: ['Project Management', 'Supply Chain Management', 'AI/GenAI', 'Problem Solving']
    },
    {
      title: 'Project Manager, GenAI & Machine Learning',
      company: 'Exponentia.ai',
      period: 'Oct 2024 - Nov 2025',
      location: 'Mumbi, India',
      type: 'Full-time',
      isCurrent: false,
      highlights: [
        'Transitioned from ML Engineer role to lead GenAI product delivery initiatives',
        'Managed end-to-end product lifecycle and delivery across multiple projects',
        'Led cross-functional teams combining data science and engineering expertise'
      ],
      skills: ['Project Management', 'GenAI Systems', 'Machine Learning', 'Team Leadership']
    },
    {
      title: 'Data Scientist & Product/AI Consultant',
      company: 'Blenheim Chalcot India',
      period: 'Jan 2023 - Oct 2024',
      location: 'Mumbai, India & London, United Kingdom (On-site)',
      type: 'Full-time',
      isCurrent: false,
      highlights: [
        'Worked across multiple ventures: Fospha (Marketing Tech), Agilisys, Rajasthan Royals (Sports Analytics)',
        'International exposure with dual office locations in Mumbai and London',
        'Delivered AI/ML solutions, business analytics, and product strategy consulting'
      ],
      skills: ['Data Science', 'Generative AI', 'Deep Learning', 'Product Consulting']
    },
    {
      title: 'Operations Management Apprenticeship',
      company: 'Allcargo Logistics Ltd',
      period: 'Jun - Jul 2022',
      location: 'Mundra India',
      type: 'Internship',
      isCurrent: false,
      highlights: [
        'Entry point to industry with focus on operations management',
        'Gained foundational understanding of logistics and supply chain operations'
      ],
      skills: ['Operations Management', 'Supply Chain']
    }
  ];

  return (
    <section id="experience" className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-teal-100 px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Career Journey</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-700 to-teal-600 mb-8 drop-shadow-sm">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-medium leading-relaxed">
            From operational foundations to strategic consulting leadership — a transformative journey in solving complex business challenges at the intersection of technology and human insight.
          </p>
        </motion.div>

        <div className="relative">
          {/* Enhanced timeline line with gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 via-teal-500 to-slate-400 h-full rounded-full shadow-lg"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400/50 via-teal-300/50 to-slate-300/50 h-full rounded-full blur-sm"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Enhanced timeline dot with pulse effect */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`w-5 h-5 rounded-full border-4 border-white shadow-xl ${
                    exp.isCurrent
                      ? 'bg-gradient-to-r from-blue-600 to-teal-500 animate-pulse'
                      : 'bg-gradient-to-r from-slate-400 to-slate-500'
                  }`}></div>
                  {exp.isCurrent && (
                    <div className="absolute inset-0 w-5 h-5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full animate-ping opacity-30"></div>
                  )}
                </div>

                {/* Experience card with enhanced styling */}
                <div className={`w-full max-w-2xl ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <Card className={`h-full transition-all duration-500 hover:scale-105 group ${
                    exp.isCurrent
                      ? 'bg-gradient-to-br from-blue-50 via-white to-teal-50 border-2 border-blue-200 shadow-2xl shadow-blue-100/50'
                      : 'bg-white border border-slate-200 shadow-lg hover:shadow-xl'
                  } overflow-hidden relative`}>
                    {/* Current role indicator */}
                    {exp.isCurrent && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        CURRENT
                      </div>
                    )}

                    <CardHeader className="pb-4 pt-6">
                      <div className="flex flex-col gap-3">
                        <CardTitle className={`leading-tight ${
                          exp.isCurrent
                            ? 'text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600'
                            : 'text-xl font-bold text-slate-800'
                        }`}>
                          {exp.title}
                        </CardTitle>
                        <div className="flex flex-col gap-3 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg flex items-center justify-center">
                              <Briefcase className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="font-bold text-slate-700 text-base">{exp.company}</span>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-slate-600">
                            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-full">
                              <Calendar className="w-4 h-4 text-slate-500" />
                              <span className="font-medium">{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-full">
                              <MapPin className="w-4 h-4 text-slate-500" />
                              <span className="font-medium">{exp.location} • {exp.type}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0 pb-6">
                      <div className="mb-6">
                        <ul className="space-y-3">
                          {exp.highlights.map((highlight, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: (index * 0.15) + (i * 0.1) }}
                              viewport={{ once: true }}
                              className="flex gap-3 text-slate-700"
                            >
                              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                exp.isCurrent ? 'bg-gradient-to-r from-blue-500 to-teal-500' : 'bg-slate-400'
                              }`}></div>
                              <span className="leading-relaxed text-sm">{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className={`font-medium transition-all duration-300 hover:scale-105 ${
                              exp.isCurrent
                                ? 'bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 border-blue-200 hover:from-blue-200 hover:to-teal-200'
                                : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                            }`}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
