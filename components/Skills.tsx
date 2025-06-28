'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Code2, BarChart3, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Product & Business',
      icon: Briefcase,
      color: 'blue',
      skills: [
        'Agile SDLC',
        'Scrum Framework',
        'Product Lifecycle',
        'MVP Development',
        'GTM Strategy',
        'Product Roadmaps',
        'Prioritization Frameworks (RICE, MoSCoW)',
        'Stakeholder Management',
        'Jira',
        'Notion',
        'Confluence',
        'Figma',
        'Miro'
      ]
    },
    {
      title: 'AI & Technology',
      icon: Code2,
      color: 'teal',
      skills: [
        'Gen AI',
        'Prompt Engineering',
        'LLM Integration',
        'RAG Pipelines',
        'LangChain',
        'FastAPI',
        'API Integration',
        'Machine Learning',
        'Python',
        'SQL',
        'Azure OpenAI',
        'Databricks',
        'MongoDB',
        'Vector Search'
      ]
    },
    {
      title: 'Analytics & Insights',
      icon: BarChart3,
      color: 'orange',
      skills: [
        'Business Analytics',
        'Data Analytics',
        'Power BI',
        'Tableau',
        'Data Modeling',
        'Statistical Analysis',
        'KPI Development',
        'Dashboard Design',
        'Performance Metrics',
        'Google Analytics'
      ]
    },
    {
      title: 'Leadership & Strategy',
      icon: Users,
      color: 'purple',
      skills: [
        'Product Strategy',
        'Cross-functional Leadership',
        'Strategic Thinking',
        'Customer Journey Mapping',
        'OKRs and KPIs',
        'Communication',
        'Business Storytelling',
        'Problem Solving',
        'Change Management',
        'Mentoring'
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
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning modern product management methodologies, 
            Gen AI technologies, Business Analytics, and strategic leadership to drive innovation and business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`inline-flex items-center justify-center w-16 h-16 ${getColorClasses(category.color).bg} rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform`}
                  >
                    <category.icon className={`w-8 h-8 ${getColorClasses(category.color).text}`} />
                  </motion.div>
                  <CardTitle className={`text-lg ${getColorClasses(category.color).text}`}>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
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
              Continuous Learning & Growth
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Staying at the forefront of Gen AI, product management trends, and Business Analytics through continuous learning, 
              industry certifications, and hands-on experimentation with emerging technologies and Agile methodologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;