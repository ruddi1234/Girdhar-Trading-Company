'use client';

import { motion } from 'framer-motion';
import { Shield, Truck, Award, Headphones } from 'lucide-react';
import SectionHeader from './SectionHeader';

const features = [
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Every grain is tested and certified to meet the highest quality standards.',
  },
  {
    icon: Truck,
    title: 'Reliable Supply',
    description: 'Timely delivery and consistent supply chain to meet your business needs.',
  },
  {
    icon: Award,
    title: 'Best Pricing',
    description: 'Competitive bulk rates with transparent pricing and no hidden costs.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated customer service team ready to assist you anytime.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose Us"
          subtitle="We deliver excellence in every aspect of grain trading"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: index * 0.1 + 0.2 }}
                className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-soft"
              >
                <feature.icon className="text-primary-600" size={32} />
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

