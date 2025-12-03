'use client';

import Link from 'next/link';
import { Product } from '@/types/Product';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white rounded-3xl shadow-soft overflow-hidden group"
    >
      <div className="relative h-72 bg-gradient-to-br from-primary-50 via-accent-50 to-primary-100 flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-8xl"
        >
          {product.slug === 'rice' ? '🌾' : '🌾'}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-soft flex items-center gap-2"
        >
          <Sparkles className="text-accent-600" size={16} />
          <span className="text-sm font-semibold text-primary-700">Premium Quality</span>
        </motion.div>
      </div>

      <div className="p-6">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-gray-800 mb-2"
        >
          {product.name}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-gray-600 mb-4 line-clamp-2"
        >
          {product.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100"
        >
          <span className="text-lg font-semibold text-primary-600 bg-primary-50 px-4 py-2 rounded-full">
            Contact for Price
          </span>
        </motion.div>

        <Link href={`/products/${product.slug}`}>
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-full font-semibold shadow-soft hover:shadow-soft-lg transition-all group"
          >
            View Details
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}

