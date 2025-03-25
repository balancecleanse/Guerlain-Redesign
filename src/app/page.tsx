// src/app/page.tsx
// ... existing code ...
// import Hero from "@/app/components/Hero";
// import ARViewer from "@/app/components/ARViewer";
// import Chatbot from "@/app/components/Chatbot";

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      {/* <ARViewer modelPath="/models/perfume-bottle.gltf" /> */}
      {/* <Chatbot /> */}
      <main className="p-8">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          {/* Product listing will go here */}
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
    </div>
  );
}
