import { Product } from '@/types/Product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Rice',
    slug: 'rice',
    description: 'High-quality rice sourced from the finest farms. Perfect for bulk B2B orders with consistent quality and competitive pricing.',
    image: '/images/rice.jpg',
    features: [
      'Premium quality grains',
      'Multiple varieties available',
      'Bulk packaging options',
      'Quality assured and tested',
      'Regular supply guaranteed',
    ],
  },
  {
    id: '2',
    name: 'Premium Wheat',
    slug: 'wheat',
    description: 'Top-grade wheat for commercial use. Ideal for flour mills, bakeries, and food manufacturers looking for consistent quality.',
    image: '/images/wheat.jpg',
    features: [
      'High protein content',
      'Certified quality standards',
      'Flexible quantity options',
      'Timely delivery',
      'Competitive bulk rates',
    ],
  },
];

