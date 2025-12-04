// Company Information
export const COMPANY = {
  name: 'Girdhar Trading',
  fullName: 'Girdhar Trading Company',
  tagline: 'Your trusted partner in premium grain supply. Quality assured, delivered with care.',
  description: 'Premium B2B grain supplier specializing in bulk wheat and rice. Quality assured, competitive pricing, and reliable delivery for your business needs.',
} as const;

// Contact Information
export const CONTACT = {
  phone: '+91 XXXXXXXXXX',
  phoneFormatted: '+91XXXXXXXXXX',
  email: 'info@girdhartrading.com',
  location: 'India',
  businessHours: 'Mon - Sat: 9AM - 6PM',
} as const;

// Navigation Links
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products/rice', label: 'Rice' },
  { href: '/products/wheat', label: 'Wheat' },
  { href: '/enquiry', label: 'Get Quote' },
] as const;

// Contact Info Cards (for enquiry page)
export const CONTACT_INFO = [
  {
    icon: 'Phone',
    title: 'Phone',
    details: CONTACT.phone,
    link: `tel:${CONTACT.phoneFormatted}`,
  },
  {
    icon: 'Mail',
    title: 'Email',
    details: CONTACT.email,
    link: `mailto:${CONTACT.email}`,
  },
  {
    icon: 'MapPin',
    title: 'Location',
    details: CONTACT.location,
    link: '#',
  },
  {
    icon: 'Clock',
    title: 'Business Hours',
    details: CONTACT.businessHours,
    link: '#',
  },
] as const;

// Why Choose Us Features
export const WHY_CHOOSE_US = [
  'Premium quality grains',
  'Competitive bulk pricing',
  'Reliable & timely delivery',
  'Quality assurance guaranteed',
  '24/7 customer support',
  'Flexible payment terms',
] as const;

// Testimonial/Trust Statement
export const TRUST_STATEMENT = 'Trusted by over 500+ businesses across India for premium grain supply';

// Footer Product List
export const FOOTER_PRODUCTS = [
  'Premium Basmati Rice',
  'Organic Rice',
  'Wheat Grain',
  'Wheat Flour',
] as const;

// Page Metadata
export const METADATA = {
  title: `${COMPANY.fullName} | Bulk Wheat & Rice Suppliers`,
  description: COMPANY.description,
} as const;

// Enquiry Form Messages
export const ENQUIRY_MESSAGES = {
  successTitle: 'Enquiry Submitted!',
  successMessage: "Thank you! We'll get back to you soon with pricing and details.",
  submitAnother: 'Submit Another Enquiry',
  submitting: 'Submitting...',
  submitButton: 'Submit Enquiry',
} as const;

// Enquiry Page Content
export const ENQUIRY_PAGE = {
  title: 'Get a Quote',
  subtitle: "Fill out the form below and we'll get back to you with competitive pricing",
  whyChooseUsTitle: 'Why Choose Us?',
  readyToOrderTitle: 'Ready to Order?',
  readyToOrderMessage: 'Get in touch with us for competitive pricing and reliable supply',
  getQuoteButton: 'Get Quote Now',
} as const;

// Product Page Content
export const PRODUCT_PAGE = {
  premiumQuality: 'Premium Quality',
  premiumProduct: 'Premium Product',
  pricing: 'Pricing',
  contactForPrice: 'Contact for Price',
  pricingSubtext: 'Competitive bulk rates available • Quality assured',
  requestQuote: 'Request Quote',
  keyFeatures: 'Key Features',
  readyToOrderTitle: 'Ready to Order?',
  readyToOrderMessage: 'Get in touch with us for competitive pricing and reliable supply',
  getQuoteNow: 'Get Quote Now',
} as const;

