// src/app/page.tsx
import Hero from "@/app/components/Hero";
import ARViewer from "@/app/components/ARViewer";
import Chatbot from "@/app/components/Chatbot";
import ProductCard from "@/app/components/ProductCard";

const sampleProducts = [
  {
    id: '1',
    name: 'L\'Essentiel Haute Perfumery',
    price: 159,
    imageUrl: '/images/products/lessentiel.jpg',
    description: 'A luminous oriental fragrance'
  },
  // Add more sample products...
];

export default function Home() {
  return (
    <div>
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-16 mt-16">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Experience in AR</h2>
          <ARViewer modelPath="/models/perfume-bottle.gltf" />
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">About Guerlain</h2>
          {/* About section content */}
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          {/* Contact form or information */}
        </section>
      </main>
      <Chatbot />
    </div>
  );
}
