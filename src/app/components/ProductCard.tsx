"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

const ProductCard = ({ id, name, price, imageUrl, description }: ProductCardProps) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      className="group relative luxury-card rounded-xl p-6"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/placeholder.jpg';
          }}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          priority
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-medium text-brown">{name}</h3>
        <p className="text-sm text-brown/70">{description}</p>
        <div className="flex justify-between items-center pt-4">
          <p className="text-2xl luxury-text-gradient font-semibold">${price}</p>
          <button
            onClick={() => dispatch(addItem({ id, name, price, imageUrl }))}
            className="luxury-button px-6 py-2 rounded-full text-sm font-medium"
            aria-label={`Add ${name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
