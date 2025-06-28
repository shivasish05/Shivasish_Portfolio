'use client';

import { motion } from 'framer-motion';

const Companies = () => {
  const companies = [
    { name: 'British Council', logo: '/companies/BritishCouncil_Logo.png', alt: 'British Council Logo' },
    { name: 'Rajasthan Royals', logo: '/companies/rr logo.png', alt: 'Rajasthan Royals Logo' },
    { name: 'Blenheim Chalcot', logo: '/companies/blenheim.png', alt: 'Blenheim Chalcot Logo' },
    { name: 'Exponentia AI', logo: '/companies/exponentia.png', alt: 'Exponentia AI Logo' },
    { name: 'Fospha Marketing', logo: '/companies/fospha.png', alt: 'Fospha Marketing Logo' },
    { name: 'NHS England', logo: '/companies/NHS_England_logo.png', alt: 'NHS England Logo' },
    { name: 'Agilisys', logo: '/companies/agilisys.png', alt: 'Agilisys Logo' },
    { name: 'Allcargo Logistics', logo: '/companies/Allcargo-Logistics.jpg', alt: 'Allcargo Logistics Logo' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've had the privilege to work with diverse companies across industries, 
            delivering AI-driven solutions and strategic product insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg p-6 h-24 flex items-center justify-center shadow-md hover:bg-blue-50 transition-all duration-300">
                <img
                  src={company.logo}
                  alt={company.alt}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            From healthcare and sports to fintech and logistics - delivering impact across diverse sectors
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Companies;