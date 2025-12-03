'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import GreenButton from '@/components/GreenButton';
import { products } from '@/data/products';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      <section id="products" className="py-20 bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Premium Products"
            subtitle="High-quality grains sourced from the finest farms across India"
          />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Place an Order?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get competitive pricing and reliable supply for your business needs
            </p>
            <Link href="/enquiry">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex"
              >
                <GreenButton variant="secondary" icon={<ArrowRight size={20} />}>
                  Get a Quote Now
                </GreenButton>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
