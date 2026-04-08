'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Code2, BarChart3, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Consulting & Delivery',
      icon: Briefcase,
      color: 'blue',
      skills: [
        'Project Management',
        'Business Analysis',
        'Stakeholder Management',
        'Process Optimization',
        'Agile Execution',
        'Problem Solving',
        'Requirement Definition',
        'Roadmap Planning',
        'Change Management',
        'Executive Communication'
      ]
    },
    {
      title: 'Supply Chain & Operations',
      icon: Code2,
      color: 'teal',
      skills: [
        'Supply Chain Management',
        'Operations Optimization',
        'Process Mapping',
        'Performance Improvement',
        'Cost Optimization',
        'Logistics',
        'Vendor Management',
        'Operating Model Design',
        'Process Automation',
        'Workflow Optimization'
      ]
    },
    {
      title: 'Data & Technology',
      icon: BarChart3,
      color: 'orange',
      skills: [
        'Data Analytics',
        'SQL',
        'Python',
        'Dashboarding & Reporting',
        'AI/GenAI Systems',
        'Machine Learning',
        'Data Modeling',
        'Statistical Analysis',
        'Business Intelligence',
        'ETL & Data Pipeline'
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Users,
      color: 'purple',
      skills: [
        'Power BI',
        'Tableau',
        'Databricks',
        'AWS',
        'Jira',
        'Confluence',
        'Figma',
        'Miro',
        'Excel/VBA',
        'Notion'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-700',
        badge: 'bg-blue-50 text-blue-700 border-blue-200'
      },
      teal: {
        bg: 'bg-teal-100',
        text: 'text-teal-700',
        badge: 'bg-teal-50 text-teal-700 border-teal-200'
      },
      orange: {
        bg: 'bg-orange-100',
        text: 'text-orange-700',
        badge: 'bg-orange-50 text-orange-700 border-orange-200'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-700',
        badge: 'bg-purple-50 text-purple-700 border-purple-200'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-white via-blue-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-teal-600 to-fuchsia-500 mb-6 drop-shadow-lg">
            Skills & Expertise
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            A balanced combination of consulting expertise, supply chain knowledge, data analytics, and technology acumen — enabling organizations to solve complex problems and drive measurable outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-white to-blue-50 border-0">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    className={`inline-flex items-center justify-center w-16 h-16 ${getColorClasses(category.color).bg} rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <category.icon className={`w-8 h-8 ${getColorClasses(category.color).text}`} />
                  </motion.div>
                  <CardTitle className={`text-lg ${getColorClasses(category.color).text}`}>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className={`text-xs ${getColorClasses(category.color).badge} hover:scale-105 transition-transform cursor-default`}
                      >
                        {skill}
                      </Badge>
                    ))}
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
              Continuous Learning & Evolution
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I continuously refine my skills by staying close to real-world delivery — experimenting with
              emerging GenAI capabilities, evolving product practices, and learning from each product shipped.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
