'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9215556251',
    href: 'tel:+919215556251',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'girdhartradingcompany69@gmail.com',
    href: 'mailto:girdhartradingcompany69@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Shop No. 69, New Grain Market',
    href: null,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us',
    href: 'https://wa.me/919215556251',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="section-container bg-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-earth-800 mb-6">
          Get In Touch
        </h2>
        <div className="h-1 w-20 bg-grain-500 mx-auto mb-6" />
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Have questions or want to discuss business opportunities? Reach out to us today.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {contactInfo.map((item, index) => {
          const Icon = item.icon
          const content = (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-grain-50 border-2 border-grain-300 p-6 rounded-2xl text-center ${
                item.href ? 'hover:bg-grain-100 hover:border-grain-400 transition-all duration-300 cursor-pointer' : ''
              }`}
            >
              <div className="bg-grain-300 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-earth-800" />
              </div>
              <h3 className="font-semibold text-earth-800 mb-2">{item.label}</h3>
              <p className="text-gray-700 text-sm break-words">{item.value}</p>
            </motion.div>
          )

          return item.href ? (
            <a key={index} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
              {content}
            </a>
          ) : (
            <div key={index}>{content}</div>
          )
        })}
      </div>
    </section>
  )
}

