'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EnquiryForm from '@/components/EnquiryForm';
import SectionHeader from '@/components/SectionHeader';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '+91 XXXXXXXXXX',
    link: 'tel:+91XXXXXXXXXX',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'info@girdhartrading.com',
    link: 'mailto:info@girdhartrading.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    details: 'India',
    link: '#',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: 'Mon - Sat: 9AM - 6PM',
    link: '#',
  },
];

export default function EnquiryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30">
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <SectionHeader
          title="Get a Quote"
          subtitle="Fill out the form below and we'll get back to you with competitive pricing"
        />

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-6 rounded-3xl shadow-soft text-center group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <info.icon className="text-primary-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-gray-600">{info.details}</p>
            </motion.a>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 text-white flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              {[
                'Premium quality grains',
                'Competitive bulk pricing',
                'Reliable & timely delivery',
                'Quality assurance guaranteed',
                '24/7 customer support',
                'Flexible payment terms',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-white/20 p-1 rounded-full">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-primary-50">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm"
            >
              <p className="text-sm text-primary-100">
                &quot;Trusted by over 500+ businesses across India for premium grain supply&quot;
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-3 bg-white rounded-3xl shadow-soft-lg p-8 md:p-12"
          >
            <EnquiryForm />
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </main>
  );
}
