import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="gold-text text-2xl font-bold">GUERLAIN</Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/fragrances" className="text-white hover:gold-text transition-colors">
              Fragrances
            </Link>
            <Link href="/skincare" className="text-white hover:gold-text transition-colors">
              Skincare
            </Link>
            <Link href="/makeup" className="text-white hover:gold-text transition-colors">
              Makeup
            </Link>
            <Link href="/collections" className="text-white hover:gold-text transition-colors">
              Collections
            </Link>
          </div>
          
          <button 
            className="text-white hover:gold-text transition-colors"
            aria-label="Shopping Cart"
          >
            <span className="sr-only">Cart</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
