// src/app/components/Hero.tsx
const Hero = () => (
  <div className="relative h-[80vh] overflow-hidden">
    <div className="media-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="media-content"
      >
        <source src="/videos/fragrance.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
    <div className="absolute inset-0 flex items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-white luxury-text-gradient max-w-4xl">
        Discover the Art of Fragrance
      </h1>
    </div>
  </div>
);
export default Hero;