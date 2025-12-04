'use client';

import Link from 'next/link';
import { Wheat, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY, CONTACT, NAV_LINKS, FOOTER_PRODUCTS } from '@/config/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-2 rounded-full"
              >
                <Wheat className="text-primary-600" size={24} />
              </motion.div>
              <span className="text-xl font-bold">{COMPANY.name}</span>
            </div>
            <p className="text-primary-100 text-sm">
              {COMPANY.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-100">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2 text-primary-100">
              {FOOTER_PRODUCTS.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-primary-100">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>{CONTACT.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>{CONTACT.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{CONTACT.location}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-primary-700 pt-8 text-center text-primary-200 text-sm"
        >
          <p>&copy; {currentYear} {COMPANY.fullName}. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
