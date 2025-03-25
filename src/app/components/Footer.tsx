"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gradient-to-b from-cream/50 to-beige border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={footerAnimation}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-medium text-brown">About Guerlain</h4>
            <p className="text-brown/70">
              Since 1828, Guerlain has created some of the world's most iconic fragrances and beauty products, 
              celebrating luxury, artistry, and innovation.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={footerAnimation}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-medium text-brown">Quick Links</h4>
            <ul className="space-y-2">
              {['Our Story', 'Sustainability', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-brown/70 hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={footerAnimation}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-medium text-brown">Contact</h4>
            <ul className="space-y-2 text-brown/70">
              <li>Email: contact@guerlain.com</li>
              <li>Phone: +1 (888) 555-0123</li>
              <li>68 Champs-Élysées, Paris</li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={footerAnimation}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-medium text-brown">Stay Connected</h4>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-full luxury-input"
                required
              />
              <button
                type="submit"
                className="w-full luxury-button rounded-full py-2"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="text-brown/70 hover:text-gold transition-colors duration-300"
                >
                  {social}
                </Link>
              ))}
            </div>
            <p className="text-brown/50 text-sm">
              © {new Date().getFullYear()} Guerlain. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
