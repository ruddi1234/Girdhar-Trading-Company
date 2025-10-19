'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-container bg-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-earth-800 mb-6">
            About Us
          </h2>
          <div className="h-1 w-20 bg-grain-500 mb-8" />
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Girdhar Trading Company specializes in commission-based grain trading and retail. 
            With years of experience and strong market presence, we help farmers, wholesalers, 
            and buyers connect with the right opportunities in the grain market.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our commitment to quality, transparency, and fair dealing has made us a trusted 
            name in the grain trading industry.
          </p>
        </div>

        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000)',
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}

