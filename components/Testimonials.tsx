'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Head of Product',
      company: 'TechCorp',
      content: 'Shivasish brought exceptional clarity to our AI product strategy. His ability to translate complex technical concepts into actionable business plans was instrumental in our successful product launch.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'DataFlow Solutions',
      content: 'Outstanding execution and communication. Shivasish delivered our RAG pipeline project ahead of schedule and his stakeholder management skills kept everyone aligned throughout the process.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'VP of Strategy',
      company: 'InnovateLabs',
      content: 'His strategic thinking and business acumen are impressive. Shivasish helped us identify key market opportunities and developed a roadmap that increased our product adoption by 40%.',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Founder',
      company: 'StartupAI',
      content: 'Incredible value delivered from day one. Shivasish\'s expertise in both AI technology and product management helped us secure our Series A funding with a clear go-to-market strategy.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What People Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what colleagues and clients say about 
            working with me on AI products and strategic initiatives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-blue-500 mr-3" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-blue-600 text-sm">{testimonial.role}</div>
                    <div className="text-gray-500 text-sm">{testimonial.company}</div>
                  </div>
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
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join the Success Stories
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to add your success story to this list? Let's work together to transform 
              your product vision into reality with strategic AI implementation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;