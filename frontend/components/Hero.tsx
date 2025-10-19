'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-grain-600/90 via-earth-700/85 to-grain-800/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=2000)',
          }}
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Girdhar Trading Company
          </h1>
          <div className="h-1 w-32 bg-grain-300 mx-auto mb-6" />
          <p className="text-2xl md:text-3xl text-grain-100 mb-3">
            Commission Agent & Grain Retailer
          </p>
          <p className="text-lg md:text-xl text-grain-200 max-w-2xl mx-auto mb-12">
            Trusted Partner in Grain Trading & Commission Services
          </p>
          
          <motion.button
            onClick={scrollToContact}
            className="bg-grain-300 hover:bg-grain-400 text-earth-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-8 h-8 text-grain-200" />
      </motion.div>
    </section>
  )
}

