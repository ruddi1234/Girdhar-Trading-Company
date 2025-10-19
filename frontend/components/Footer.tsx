'use client'

import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react'

const socialLinks = [
  {
    icon: Facebook,
    href: 'https://facebook.com',
    label: 'Facebook',
  },
  {
    icon: Instagram,
    href: 'https://instagram.com',
    label: 'Instagram',
  },
  {
    icon: MessageCircle,
    href: 'https://wa.me/919215556251',
    label: 'WhatsApp',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
  },
]

export default function Footer() {
  return (
    <footer className="bg-earth-800 text-grain-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-grain-200 mb-3">
            Girdhar Trading Company
          </h3>
          <p className="text-grain-300 mb-1">
            Shop No. 69, New Grain Market
          </p>
          <p className="text-grain-300 mb-1">
            Phone: <a href="tel:+919215556251" className="hover:text-grain-200 transition-colors">+91 9215556251</a>
          </p>
          <p className="text-grain-300">
            Email: <a href="mailto:girdhartradingcompany69@gmail.com" className="hover:text-grain-200 transition-colors">girdhartradingcompany69@gmail.com</a>
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-grain-700 hover:bg-grain-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <Icon className="w-5 h-5" />
              </a>
            )
          })}
        </div>

        <div className="border-t border-grain-700 pt-8 text-center">
          <p className="text-grain-300 text-sm">
            © 2025 Girdhar Trading Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

