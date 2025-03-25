// src/app/page.tsx
import Hero from "@/app/components/Hero";
// import ARViewer from "@/app/components/ARViewer";
import Chatbot from "@/app/components/Chatbot";
import ProductCard from "@/app/components/ProductCard";

const sampleProducts = [
  {
    id: '1',
    name: 'L\'Essentiel Haute Perfumery',
    price: 159,
    imageUrl: '/lessentiel.jpg', // Updated path relative to public directory
    description: 'A luminous oriental fragrance'
  },
  // Add more sample products...
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        <section>
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gradient">About Guerlain</h2>
          <p className="text-lg text-brown/70 leading-relaxed">
            Discover our legacy of exceptional craftsmanship and innovative beauty solutions,
            creating timeless fragrances and skincare that embody luxury and sophistication.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold mb-12 text-gradient">Contact Us</h2>
          {/* Contact form implementation */}
        </section>
      </main>
      <Chatbot />
    </div>
  );
}
