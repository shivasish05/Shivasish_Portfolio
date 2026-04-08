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
      title: 'Healthcare Analytics Transformation',
      company: 'NHS UK',
      icon: BarChart3,
      tools: ['Agile Delivery', 'Product Strategy', 'Business Analytics', 'Stakeholder Alignment'],
      industry: 'Healthcare',
      problem:
        'A critical healthcare system was drowning in fragmented patient data, leading to inefficient resource allocation, delayed treatment decisions, and compromised patient care. Clinical teams spent hours manually aggregating data instead of focusing on patient outcomes.',
      strategy:
        'Led a comprehensive analytics transformation by first understanding the clinical workflow pain points, then designing a unified data platform that provided real-time insights. Established governance frameworks and change management processes to ensure adoption across multiple facilities.',
      execution:
        'Built cross-functional teams of clinicians, data engineers, and administrators. Implemented agile delivery with bi-weekly demos to clinical stakeholders, ensuring continuous feedback and alignment. Developed comprehensive training programs and established data governance standards.',
      outcome:
        'Delivered 35% improvement in resource allocation efficiency, reduced patient wait times by 20%, and achieved 95% adoption rate across participating facilities. The solution became the foundation for broader digital transformation initiatives.',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Sports Performance Intelligence Revolution',
      company: 'Rajasthan Royals',
      icon: TrendingUp,
      tools: ['GenAI', 'Product Lifecycle', 'Performance Analytics', 'Agile Scrum'],
      industry: 'Sports Analytics',
      problem:
        'A professional cricket franchise was losing competitive edge due to outdated performance analysis methods. Coaches relied on manual video analysis and spreadsheets, missing critical insights that could make the difference between winning and losing.',
      strategy:
        'Transformed the entire performance analysis approach by implementing AI-powered analytics that processed match footage, player biometrics, and historical data in real-time. Created intuitive dashboards that provided actionable insights during live matches.',
      execution:
        'Led product discovery with coaching staff to understand their decision-making needs. Built an MVP within 6 weeks, then iterated based on real-game feedback. Integrated with existing systems and trained the entire coaching and analytics team.',
      outcome:
        'Reduced insight generation time from days to minutes, improved match preparation efficiency by 45%, and contributed to a 15% improvement in team performance metrics. The platform became a competitive advantage in the league.',
      gradient: 'from-teal-500 to-teal-700'
    },
    {
      title: 'AI-Powered Marketing Intelligence Platform',
      company: 'Fospha Marketing',
      icon: MessageSquare,
      tools: ['LLM Integration', 'Product Strategy', 'Business Analytics', 'Agile Delivery'],
      industry: 'Marketing Technology',
      problem:
        'Marketing teams were overwhelmed by multi-channel performance data but lacked timely, actionable insights to optimize campaigns and accurately measure ROI.',
      strategy:
        'Designed a product strategy centered on LLM-powered insights, simplifying campaign analysis and enabling marketers to make faster, data-informed decisions.',
      execution:
        'Led market research, defined a phased roadmap, collaborated with engineering teams, and delivered an intuitive analytics dashboard enhanced with AI-driven insights.',
      outcome:
        'Reduced campaign analysis time by 60%, increased marketing ROI by 25%, and achieved a 90% satisfaction score among platform users.',
      gradient: 'from-orange-500 to-orange-700'
    },
    {
      title: 'Supply Chain Optimization Initiative',
      company: 'Allcargo Logistics',
      icon: Brain,
      tools: ['Strategic Planning', 'GenAI', 'Business Analytics', 'Product Execution'],
      industry: 'Logistics',
      problem:
        'Global supply chain complexity resulted in frequent delivery delays, rising operational costs, and limited real-time visibility across logistics operations.',
      strategy:
        'Led a strategic initiative leveraging GenAI and analytics to redesign supply chain workflows, improve visibility, and enable proactive decision-making.',
      execution:
        'Managed end-to-end product execution, collaborated with international teams, implemented performance tracking systems, and supported organizational change adoption.',
      outcome:
        'Reduced delivery delays by 30%, lowered operational costs by 18%, and improved customer satisfaction scores by 40% through data-driven optimization.',
      gradient: 'from-purple-500 to-purple-700'
    }
  ];

  return (
    <section id="case-studies" className="py-28 bg-gradient-to-br from-white via-blue-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-teal-600 to-fuchsia-500 mb-6 drop-shadow-lg">
            Impact Stories
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            Real-world transformations where structured problem-solving, strategic thinking, and execution excellence turned complex challenges into measurable business success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group cursor-pointer overflow-hidden bg-white/60 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-3xl relative">
                <CardHeader className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity rounded-3xl`} />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}>
                        <project.icon className="w-7 h-7" />
                      </div>
                      <Badge variant="secondary" className="text-xs bg-white/80 text-blue-700 border-blue-200 shadow-sm px-3 py-1 rounded-full">
                        {project.industry}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold mb-2 group-hover:text-blue-700 transition-colors tracking-tight">
                      {project.title}
                    </CardTitle>
                    <p className="text-base text-blue-600 font-semibold mb-4">{project.company}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tools.map((tool) => (
                        <Badge key={tool} variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200 px-2 py-1 rounded-full">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Business Challenge</h4>
                    <p className="text-base text-gray-700">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Product Strategy</h4>
                    <p className="text-base text-gray-700">{project.strategy}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Product Execution</h4>
                    <p className="text-base text-gray-700">{project.execution}</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-2xl shadow-inner">
                    <h4 className="font-semibold text-green-800 mb-2 text-lg">Business Impact</h4>
                    <p className="text-base text-green-800 font-semibold">{project.outcome}</p>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full group/btn mt-4 text-lg font-bold text-blue-700 hover:text-fuchsia-600 hover:bg-blue-50 rounded-full py-3"
                    onClick={() => handleViewCaseStudy(project.title, project.company)}
                    aria-label={`View Case Study: ${project.title}`}
                  >
                    View Case Study
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
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
