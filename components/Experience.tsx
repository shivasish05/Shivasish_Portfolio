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
      period: 'Mar 2026 - Present',
      location: 'Bengaluru, India',
      type: 'Hybrid',
      isCurrent: true,
      skills: ['Business Analysis', 'Supply Chain Management', 'AI/GenAI', 'Problem Solving']
    },
    {
      title: 'Project Manager, GenAI & Machine Learning',
      company: 'Exponentia.ai',
      period: 'Oct 2024 - Nov 2025',
      location: 'Mumbai, India',
      type: 'Full-time',
      isCurrent: false,
      skills: ['Project Management', 'GenAI Systems', 'Machine Learning', 'Team Leadership']
    },
    {
      title: 'Data Scientist & Product/AI Consultant',
      company: 'Blenheim Chalcot India',
      period: 'Jan 2023 - Oct 2024',
      location: 'Mumbai, India & London, United Kingdom (On-site)',
      type: 'Full-time',
      isCurrent: false,
      skills: ['Data Science', 'Generative AI', 'Deep Learning', 'Product Consulting']
    },
    {
      title: 'Operations Management Apprenticeship',
      company: 'Allcargo Logistics Ltd',
      period: 'Jun - Jul 2022',
      location: 'Mundra, India',
      type: 'Internship',
      isCurrent: false,
      skills: ['Operations Management', 'Supply Chain', 'Documentation', 'Process Improvement']
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-teal-100 px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Career Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-700 to-teal-600 mb-4">
            Professional Experience
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From operational foundations to strategic consulting leadership — a transformative journey in solving complex business challenges.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-teal-500 to-slate-400"></div>
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400/50 via-teal-300/50 to-slate-300/50 blur-sm"></div>

          <div className="space-y-8 md:space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-6"
              >
                {/* Timeline dot - positioned properly */}
                <div className="flex-shrink-0 relative">
                  <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${
                    exp.isCurrent
                      ? 'bg-gradient-to-r from-blue-600 to-teal-500 animate-pulse'
                      : 'bg-gradient-to-r from-slate-400 to-slate-500'
                  }`}></div>
                  {exp.isCurrent && (
                    <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full animate-ping opacity-30"></div>
                  )}
                  {/* Connecting line for mobile */}
                  <div className="md:hidden absolute top-4 left-2 right-0 h-px bg-gradient-to-r from-blue-300 to-transparent"></div>
                </div>

                {/* Experience card - compact and clean */}
                <div className="flex-1 min-w-0">
                  <Card className={`transition-all duration-300 hover:shadow-lg group ${
                    exp.isCurrent
                      ? 'bg-gradient-to-br from-blue-50 via-white to-teal-50 border-2 border-blue-200 shadow-md'
                      : 'bg-white border border-slate-200 shadow-sm'
                  } overflow-hidden relative`}>
                    {/* Current role indicator */}
                    {exp.isCurrent && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-2 py-0.5 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star className="w-2.5 h-2.5 fill-current" />
                        CURRENT
                      </div>
                    )}

                    <CardContent className="p-5">
                      <div className="space-y-3">
                        <div>
                          <CardTitle className={`leading-tight ${
                            exp.isCurrent
                              ? 'text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600'
                              : 'text-lg font-bold text-slate-800'
                          }`}>
                            {exp.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Briefcase className="w-4 h-4 text-blue-600" />
                            <span className="font-semibold text-slate-700">{exp.company}</span>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-slate-600">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-slate-500" />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-slate-500" />
                            <span className="font-medium">{exp.location} • {exp.type}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {exp.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className={`text-xs px-2 py-0.5 font-medium ${
                                exp.isCurrent
                                  ? 'bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 border-blue-200'
                                  : 'bg-slate-100 text-slate-700 border-slate-200'
                              }`}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
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
