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
      className="group relative bg-white p-6 rounded-lg shadow-lg"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={name}
          width={400}
          height={400}
          className="object-cover object-center group-hover:scale-110 transition-transform duration-200"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium text-black">{name}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-xl gold-text">${price}</p>
          <button
            onClick={() => dispatch(addItem({ id, name, price, imageUrl }))}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gold transition-colors"
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
