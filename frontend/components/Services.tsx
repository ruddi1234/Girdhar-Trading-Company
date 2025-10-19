'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShoppingBag, Handshake } from 'lucide-react'

const services = [
  {
    icon: ShoppingBag,
    title: 'Grain Retail',
    description: 'Retail supply of high-quality grains sourced directly from trusted farmers and suppliers.',
  },
  {
    icon: Handshake,
    title: 'Commission Agent Services',
    description: 'Helping buyers and sellers connect seamlessly with transparent and efficient commission-based services.',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-container bg-grain-100" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-earth-800 mb-6">
          Our Services
        </h2>
        <div className="h-1 w-20 bg-grain-500 mx-auto" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="bg-grain-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-grain-700" />
              </div>
              <h3 className="text-2xl font-bold text-earth-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

