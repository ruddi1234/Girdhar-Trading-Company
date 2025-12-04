import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import ProductPageClient from './ProductPageClient';

// Generate static params for all products at build time
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return <ProductPageClient product={product} />;
}
