'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Rocket, Map, TrendingUp } from 'lucide-react';

const Services = () => {
  const handleBookCall = (serviceTitle: string) => {
    const subject = encodeURIComponent(`Consultation Inquiry — ${serviceTitle}`);
    const body = encodeURIComponent(
      `Hi Shivasish,\n\nI’d like to discuss how you can help with ${serviceTitle}.\n\nLooking forward to connecting.\n\nBest regards,`
    );
    window.open(`mailto:mahapatrashiv05@gmail.com?subject=${subject}&body=${body}`);
  };

  const handleScheduleConsultation = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const services = [
    {
      title: 'Business Problem Solving & Strategy',
      icon: Brain,
      description:
        'I help organizations tackle complex business challenges through structured problem-solving, stakeholder collaboration, and data-driven strategy definition. From problem framing to solution design, I ensure clarity and alignment across teams.',
      features: [
        'Structured problem analysis & framing',
        'Stakeholder workshops & alignment',
        'Strategic roadmap development',
        'Business case & impact modeling'
      ],
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Supply Chain & Operations Transformation',
      icon: Rocket,
      description:
        'I lead supply chain optimization and operational transformation initiatives. By combining process analysis, data insights, and change management, I help organizations reduce costs, improve efficiency, and enhance decision-making.',
      features: [
        'Supply chain optimization & redesign',
        'Process mapping & automation',
        'Performance analytics & KPI design',
        'Change management & adoption'
      ],
      gradient: 'from-teal-500 to-teal-700'
    },
    {
      title: 'AI/GenAI Enablement & Implementation',
      icon: Map,
      description:
        'I guide organizations in adopting AI and GenAI solutions responsibly and effectively. From use-case identification to implementation roadmapping, I ensure AI initiatives deliver measurable business value and align with organizational goals.',
      features: [
        'AI use-case discovery & prioritization',
        'Implementation roadmap development',
        'Operating model design',
        'Technology & vendor evaluation'
      ],
      gradient: 'from-orange-500 to-orange-700'
    },
    {
      title: 'Data-Driven Decision Making & Analytics',
      icon: TrendingUp,
      description:
        'I develop analytics frameworks and dashboarding systems that empower organizations to make faster, data-backed decisions. By translating data into actionable insights, I enable better business outcomes and strategic alignment.',
      features: [
        'Analytics framework & KPI design',
        'Dashboard & reporting development',
        'Performance monitoring systems',
        'Executive decision support'
      ],
      gradient: 'from-purple-500 to-purple-700'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/50 text-purple-300 text-sm font-semibold backdrop-blur-sm">
              What I Do
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Consulting & Advisory Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I help organizations solve complex business challenges, optimize operations, and enable AI transformation. From strategy to execution, I deliver measurable outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative h-full rounded-2xl overflow-hidden backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/50 transition-colors duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative p-8 h-full flex flex-col">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} text-white rounded-xl mb-6 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-base mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${service.gradient}`} />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleBookCall(service.title)}
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-white bg-gradient-to-r ${service.gradient} hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mt-auto`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="relative rounded-2xl overflow-hidden backdrop-blur-md border border-purple-400/30 p-10 group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 group-hover:from-purple-600/20 group-hover:to-cyan-600/20 transition-all duration-300" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Want to Build Something Impactful?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Let’s explore how thoughtful product strategy, GenAI, and strong execution
                can turn complex ideas into real-world outcomes.
              </p>
              <motion.button
                onClick={handleScheduleConsultation}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg"
              >
                Start a Conversation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
