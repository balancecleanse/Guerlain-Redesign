module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          light: 'var(--color-gold-light)',
          DEFAULT: 'var(--color-gold)',
          dark: 'var(--color-gold-dark)',
        },
        beige: 'var(--color-beige)',
        cream: 'var(--color-cream)',
        burgundy: 'var(--color-burgundy)',
        brown: 'var(--color-brown)',
      },
      borderColor: {
        gold: 'var(--color-gold)',
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, var(--color-gold-dark) 0%, var(--color-gold) 50%, var(--color-gold-light) 100%)',
      },
    },
  },
  plugins: [],
  // Enable all color opacity variations
  safelist: [
    {
      pattern: /(bg|text|border)-gold/,
      variants: ['hover', 'focus', 'active'],
    },
  ],
};