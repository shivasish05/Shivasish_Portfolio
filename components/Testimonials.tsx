'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Product Lead',
      role: 'Head of Product',
      company: 'UK-based Healthcare Organization',
      content:
        'Shivasish played a key role in shaping our AI product roadmap. He was able to bridge technical possibilities with real operational needs, which helped us move from abstract ideas to something teams could actually use.',
      rating: 5
    },
    {
      name: 'Engineering Manager',
      role: 'Platform & AI',
      company: 'Enterprise Analytics Firm',
      content:
        'What stood out was his ability to work comfortably with both engineers and business stakeholders. Requirements were clear, priorities were realistic, and delivery stayed on track even as scope evolved.',
      rating: 5
    },
    {
      name: 'Strategy Director',
      role: 'Business & Growth',
      company: 'Global Marketing Technology Company',
      content:
        'Shivasish brought structure to a very complex problem space. His approach to analytics and product strategy helped us focus on what actually mattered, rather than chasing every possible feature.',
      rating: 5
    },
    {
      name: 'Founder',
      role: 'CEO',
      company: 'Early-Stage AI Startup',
      content:
        'He quickly understood our product challenges and helped us clarify our positioning and roadmap. The outcome wasn’t just better planning, but better conversations with investors and customers.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-teal-600 to-fuchsia-500 mb-6 drop-shadow-lg">
            What Colleagues & Clients Say
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            Feedback from people I’ve worked closely with across product, engineering, and business teams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-white to-blue-50 border-0">
                <CardContent className="p-10">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-blue-500 mr-3" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 leading-relaxed mb-6 italic text-lg">
                    “{testimonial.content}”
                  </blockquote>
                  
                  <div className="border-t pt-4">
                    <div className="font-semibold text-blue-700 text-lg">{testimonial.name}</div>
                    <div className="text-blue-600 text-base">{testimonial.role}</div>
                    <div className="text-gray-500 text-base">{testimonial.company}</div>
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
              Let’s Build the Next Success Story
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              If you’re working through a product, AI, or strategy challenge, I’d be happy to explore
              how we can solve it together — thoughtfully and pragmatically.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
