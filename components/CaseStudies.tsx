'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Brain, MessageSquare, TrendingUp } from 'lucide-react';

const CaseStudies = () => {
  const handleViewCaseStudy = (projectTitle: string, company: string) => {
    const subject = encodeURIComponent(`Case Study Inquiry - ${projectTitle}`);
    const body = encodeURIComponent(
      `Hi Shivasish,\n\nI'm interested in learning more about your case study: ${projectTitle} at ${company}.\n\nCould you please share more details about this project?\n\nBest regards,`
    );
    window.open(`mailto:mahapatrashiv05@gmail.com?subject=${subject}&body=${body}`);
  };

  const projects = [
    {
      title: 'Healthcare Analytics Product Strategy',
      company: 'NHS UK',
      icon: BarChart3,
      tools: ['Agile SDLC', 'Scrum', 'Business Analytics', 'Stakeholder Management'],
      industry: 'Healthcare',
      problem: 'NHS needed a comprehensive product strategy to improve patient care efficiency and resource allocation across multiple facilities, but lacked clear product direction and stakeholder alignment.',
      strategy: 'Led end-to-end product strategy development using Agile methodology, including market analysis, user research, and stakeholder workshops to define product vision and roadmap for healthcare analytics platform.',
      execution: 'Managed cross-functional Scrum teams, conducted user interviews with healthcare professionals, developed product requirements through iterative sprints, and created go-to-market strategy with measurable KPIs.',
      outcome: '35% improvement in resource allocation efficiency, 20% reduction in patient wait times, and successful stakeholder buy-in across 15+ healthcare facilities through data-driven Business Analytics.',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Sports Performance Intelligence Platform',
      company: 'Rajasthan Royals',
      icon: TrendingUp,
      tools: ['Product Lifecycle', 'Gen AI', 'Performance Analytics', 'Agile Scrum'],
      industry: 'Sports Analytics',
      problem: 'Coaching staff struggled to make data-driven decisions during matches due to complex data access and lack of intuitive insights delivery system.',
      strategy: 'Designed and launched an intuitive performance intelligence platform leveraging Gen AI capabilities that transformed complex sports data into actionable insights for real-time decision making.',
      execution: 'Led product discovery through Agile methodology, defined user personas, prioritized features based on coaching needs using Scrum framework, and managed complete product lifecycle from concept to launch.',
      outcome: '10x faster access to performance insights through Gen AI integration, 45% improvement in match preparation efficiency, and increased adoption by 80% of coaching staff within 3 months.',
      gradient: 'from-teal-500 to-teal-700'
    },
    {
      title: 'Marketing Intelligence Product',
      company: 'Fospha Marketing',
      icon: MessageSquare,
      tools: ['LLM Integration', 'Business Analytics', 'Product Strategy', 'Agile SDLC'],
      industry: 'Marketing Technology',
      problem: 'Marketing teams were overwhelmed with data from multiple channels but lacked actionable insights to optimize campaign performance and ROI.',
      strategy: 'Developed comprehensive product strategy for AI-powered marketing intelligence platform using LLM technology, focusing on user experience and business value delivery through iterative Agile development.',
      execution: 'Conducted market research, defined product roadmap using Agile SDLC, managed stakeholder relationships, and led product development to create intuitive analytics dashboard with LLM-powered insights.',
      outcome: '60% reduction in campaign analysis time through LLM automation, 25% increase in campaign ROI, and 90% user satisfaction score across marketing teams leveraging Business Analytics.',
      gradient: 'from-orange-500 to-orange-700'
    },
    {
      title: 'Supply Chain Optimization Strategy',
      company: 'Allcargo Logistics',
      icon: Brain,
      tools: ['Strategic Planning', 'Gen AI', 'Business Analytics', 'Product Lifecycle'],
      industry: 'Logistics',
      problem: 'Complex global supply chain operations were causing delivery delays and increased costs, requiring strategic product approach to optimize end-to-end processes.',
      strategy: 'Led strategic product initiative using Gen AI and Business Analytics to optimize supply chain operations through data-driven insights, process redesign, and stakeholder alignment across global operations.',
      execution: 'Managed product strategy development through complete product lifecycle, coordinated with international teams using Agile methodology, implemented performance tracking systems, and drove organizational change management.',
      outcome: '30% reduction in delivery delays through Gen AI optimization, 18% decrease in operational costs, and improved customer satisfaction scores by 40% through data-driven Business Analytics.',
      gradient: 'from-purple-500 to-purple-700'
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world product management challenges where I've delivered measurable business impact 
            through Agile methodologies, Gen AI integration, and data-driven product decisions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden">
                <CardHeader className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}>
                        <project.icon className="w-6 h-6" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {project.industry}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-blue-700 transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-blue-600 font-medium mb-4">{project.company}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <Badge key={tool} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Business Challenge</h4>
                    <p className="text-sm text-gray-600">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Product Strategy</h4>
                    <p className="text-sm text-gray-600">{project.strategy}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Product Execution</h4>
                    <p className="text-sm text-gray-600">{project.execution}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Business Impact</h4>
                    <p className="text-sm text-green-700">{project.outcome}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn mt-4"
                    onClick={() => handleViewCaseStudy(project.title, project.company)}
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;