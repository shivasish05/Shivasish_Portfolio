'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Target, TrendingUp, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Strategic Problem Solver',
      description: 'I excel at breaking down complex business challenges into actionable frameworks, using structured problem-solving to identify root causes and develop scalable solutions that drive measurable impact.'
    },
    {
      icon: TrendingUp,
      title: 'Business & Technology Bridge',
      description: 'I seamlessly connect business objectives with technological capabilities, ensuring that AI, data analytics, and digital solutions deliver real value and align with organizational goals.'
    },
    {
      icon: Users,
      title: 'Cross-Functional Leadership',
      description: 'I thrive in collaborative environments, leading diverse teams through change initiatives, managing stakeholder expectations, and fostering alignment across technical and business functions.'
    },
    {
      icon: Lightbulb,
      title: 'Execution Excellence',
      description: 'I combine strategic thinking with hands-on execution, ensuring that innovative ideas translate into tangible outcomes through disciplined project management and continuous improvement.'
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
            Management Consulting Analyst at Accenture specializing in business transformation, supply chain optimization, and AI-enabled solutions. I solve complex problems through structured approaches, data-driven insights, and strategic execution.
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
              From Data Science to Strategic Consulting: A Journey of Transformation
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My journey began with a deep fascination for data and technology. As a fresh graduate, I dove headfirst into the world of machine learning and data science, believing that algorithms and models held the key to solving complex problems. Little did I know that my path would lead me to discover something even more powerful: the art of strategic thinking and human-centered problem-solving.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Exponentia.ai, I transitioned from being a machine learning engineer to leading product delivery initiatives. This shift opened my eyes to the bigger picture — how technology serves as an enabler for business transformation, not just an end in itself. I learned that the most impactful solutions come from understanding stakeholder needs, aligning cross-functional teams, and driving execution with clarity and purpose.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My time at Blenheim Chalcot exposed me to the world of strategic consulting across multiple industries. Working with diverse teams and tackling complex challenges taught me the value of structured problem-solving frameworks, stakeholder management, and the ability to translate insights into actionable strategies. I discovered that my strength lies not just in technical expertise, but in bridging the gap between business objectives and technological solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, as a Management Consulting Analyst at Accenture, I bring this holistic perspective to every engagement. I work at the intersection of business strategy, technology, and execution — helping organizations navigate digital transformation, optimize supply chains, and unlock the potential of AI-driven solutions. My journey has taught me that the most meaningful impact comes from combining technical acumen with strategic thinking and unwavering commitment to results.
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
