'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GreenButton from '@/components/GreenButton';
import { Product } from '@/types/Product';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { PRODUCT_PAGE } from '@/config/constants';

interface ProductPageClientProps {
  product: Product;
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30">
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 md:h-[500px] bg-gradient-to-br from-primary-100 via-accent-100 to-primary-200 rounded-3xl overflow-hidden shadow-soft-lg"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-9xl"
              >
                🌾
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute top-6 right-6 bg-white px-6 py-3 rounded-full shadow-soft flex items-center gap-2"
            >
              <Sparkles className="text-accent-600" size={20} />
              <span className="font-semibold text-primary-700">{PRODUCT_PAGE.premiumQuality}</span>
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-primary-100 px-4 py-2 rounded-full mb-4"
            >
              <span className="text-sm font-semibold text-primary-700">{PRODUCT_PAGE.premiumProduct}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-5xl font-bold text-gray-900 mb-4"
            >
              {product.name}
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="h-1 w-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              {product.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 border-2 border-primary-200 rounded-3xl p-6 mb-8"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{PRODUCT_PAGE.pricing}</p>
                  <p className="text-2xl font-bold text-primary-700">{PRODUCT_PAGE.contactForPrice}</p>
                </div>
                <Sparkles className="text-primary-600" size={32} />
              </div>
              <p className="text-sm text-gray-600 mt-3">
                {PRODUCT_PAGE.pricingSubtext}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Link href="/enquiry">
                <GreenButton
                  variant="primary"
                  fullWidth
                  icon={<ArrowRight size={20} />}
                >
                  {PRODUCT_PAGE.requestQuote}
                </GreenButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-white rounded-3xl shadow-soft p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{PRODUCT_PAGE.keyFeatures}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-primary-50 transition-colors"
              >
                <div className="bg-primary-100 p-2 rounded-full flex-shrink-0">
                  <CheckCircle className="text-primary-600" size={20} />
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">{PRODUCT_PAGE.readyToOrderTitle}</h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {PRODUCT_PAGE.readyToOrderMessage}
          </p>
          <Link href="/enquiry">
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex"
            >
              <GreenButton variant="secondary" icon={<ArrowRight size={20} />}>
                {PRODUCT_PAGE.getQuoteNow}
              </GreenButton>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      <Footer />
    </main>
  );
}

