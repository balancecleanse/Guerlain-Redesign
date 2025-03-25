// src/app/components/Hero.tsx
const Hero = () => (
  <div className="relative h-screen overflow-hidden">
    <video
      autoPlay
      loop
      muted
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/videos/fragrance.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black opacity-40"></div>
    <div className="relative z-10 flex h-full items-center justify-center text-white">
      <h1 className="text-5xl font-bold px-4 text-center">
        Discover the Art of Fragrance
      </h1>
    </div>
  </div>
);
export default Hero;