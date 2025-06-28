'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Rocket, Map, TrendingUp } from 'lucide-react';

const Services = () => {
  const handleBookCall = (serviceTitle: string) => {
    const subject = encodeURIComponent(`Booking Inquiry - ${serviceTitle}`);
    const body = encodeURIComponent(
      `Hi Shivasish,\n\nI'm interested in booking a call to discuss your ${serviceTitle} service.\n\nPlease let me know your availability.\n\nBest regards,`
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
      title: 'AI Product Strategy & Gen AI Consulting',
      icon: Brain,
      description: 'Transform your business with strategic Gen AI and LLM integration, focusing on product-market fit, technical feasibility, and data-driven go-to-market strategies.',
      features: [
        'Gen AI & LLM Product Strategy',
        'Agile SDLC Implementation',
        'Business Analytics Integration',
        'Product-Market Fit Validation'
      ],
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Product Lifecycle Management',
      icon: Rocket,
      description: 'Define and scope your Minimum Viable Product using Agile methodologies and Business Analytics insights, ensuring optimal resource allocation and rapid time-to-market.',
      features: [
        'Agile Product Development',
        'Scrum Framework Implementation',
        'Business Analytics Roadmapping',
        'Resource & Timeline Estimation'
      ],
      gradient: 'from-teal-500 to-teal-700'
    },
    {
      title: 'Strategic Product Planning & Analytics',
      icon: Map,
      description: 'Develop comprehensive product strategies and roadmaps using Business Analytics and Agile methodologies that align with business objectives and market opportunities.',
      features: [
        'Data-Driven Product Strategy',
        'Business Analytics Integration',
        'Stakeholder Alignment Workshops',
        'KPI Framework Development'
      ],
      gradient: 'from-orange-500 to-orange-700'
    },
    {
      title: 'Digital Transformation & AI Advisory',
      icon: TrendingUp,
      description: 'Strategic advisory for organizations looking to leverage Gen AI, LLM technologies, and Business Analytics for competitive advantage and sustainable growth.',
      features: [
        'Gen AI Implementation Strategy',
        'Business Analytics Transformation',
        'Agile Organizational Change',
        'Technology Stack Recommendations'
      ],
      gradient: 'from-purple-500 to-purple-700'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Services Offered
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive product management and Gen AI strategy services using Agile methodologies 
            and Business Analytics to help your business unlock the full potential of artificial intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden">
                <CardHeader className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} text-white rounded-xl mb-4`}
                    >
                      <service.icon className="w-8 h-8" />
                    </motion.div>
                    <CardTitle className="text-2xl mb-4 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Deliverables:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 group/btn mt-6`}
                    onClick={() => handleBookCall(service.title)}
                  >
                    Book a Call
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Product Strategy with Gen AI?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can leverage Gen AI, Business Analytics, and Agile methodologies 
              to drive your business forward. Schedule a consultation to explore opportunities.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-700 hover:bg-blue-800"
              onClick={handleScheduleConsultation}
            >
              Schedule Free Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;