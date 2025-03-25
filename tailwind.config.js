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
      ringColor: {
        gold: 'var(--color-gold)',
      },
      ringOpacity: {
        15: '0.15',
        30: '0.30',
      },
      borderOpacity: {
        15: '0.15',
        20: '0.20',
        30: '0.30',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border|ring|focus:ring|ring-opacity|border-opacity)-gold/,
      variants: ['hover', 'focus', 'active'],
    },
  ],
};