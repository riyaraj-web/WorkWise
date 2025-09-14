/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d8ff',
          300: '#a5c0ff',
          400: '#8099ff',
          500: '#667eea', // Primary purple
          600: '#5a6dd8',
          700: '#4f5bd5',
          800: '#4338ca',
          900: '#3730a3',
        },
        secondary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#764ba2', // Secondary purple
          600: '#ec4899',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        // Accent Colors
        accent: {
          blue: '#4facfe',
          pink: '#f093fb',
          coral: '#ff6b9d',
          purple: '#9b59b6',
        },
        // Semantic Colors
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
      },
      backgroundImage: {
        // Gradient Definitions
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-tertiary': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'gradient-hero': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #5b2c87 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'purple': '0 10px 25px rgba(102, 126, 234, 0.3)',
        'pink': '0 10px 25px rgba(240, 147, 251, 0.3)',
        'blue': '0 10px 25px rgba(79, 172, 254, 0.3)',
        'glow': '0 0 20px rgba(102, 126, 234, 0.4)',
        'glow-lg': '0 0 40px rgba(102, 126, 234, 0.6)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient': 'gradient 3s ease infinite',
        'shimmer': 'shimmer 6s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(102, 126, 234, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(102, 126, 234, 0.6)',
          },
        },
        gradient: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
        shimmer: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    function({ addUtilities, addComponents, theme }) {
      const newUtilities = {
        // Text Gradient Utilities
        '.text-gradient-primary': {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-secondary': {
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-tertiary': {
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        // Glass Morphism
        '.glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          background: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      };
      
      const newComponents = {
        // Button Components
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.lg'),
          fontWeight: theme('fontWeight.semibold'),
          textDecoration: 'none',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.25s ease',
          position: 'relative',
          overflow: 'hidden',
        },
        '.btn-primary': {
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          color: theme('colors.white'),
          boxShadow: '0 10px 25px rgba(240, 147, 251, 0.3)',
          '&:hover': {
            transform: 'translateY(-2px) scale(1.02)',
            boxShadow: '0 15px 35px rgba(240, 147, 251, 0.4)',
          },
        },
        '.btn-secondary': {
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          color: theme('colors.white'),
          boxShadow: '0 10px 25px rgba(79, 172, 254, 0.3)',
          '&:hover': {
            transform: 'translateY(-2px) scale(1.02)',
            boxShadow: '0 15px 35px rgba(79, 172, 254, 0.4)',
          },
        },
        '.btn-outline': {
          background: 'transparent',
          color: theme('colors.primary.500'),
          border: `2px solid ${theme('colors.primary.500')}`,
          '&:hover': {
            background: theme('colors.primary.500'),
            color: theme('colors.white'),
            transform: 'translateY(-2px)',
          },
        },
        '.btn-ghost': {
          background: 'rgba(255, 255, 255, 0.1)',
          color: theme('colors.white'),
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.2)',
            borderColor: 'rgba(255, 255, 255, 0.4)',
          },
        },
        // Card Components
        '.card': {
          background: theme('colors.white'),
          borderRadius: theme('borderRadius.xl'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.lg'),
          transition: 'all 0.25s ease',
          border: `1px solid ${theme('colors.gray.200')}`,
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: theme('boxShadow.2xl'),
          },
        },
        '.card-glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: theme('colors.white'),
        },
        '.feature-card': {
          background: theme('colors.white'),
          borderRadius: theme('borderRadius.2xl'),
          padding: theme('spacing.8'),
          boxShadow: theme('boxShadow.lg'),
          transition: 'all 0.25s ease',
          border: `1px solid ${theme('colors.gray.100')}`,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          },
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: theme('boxShadow.2xl'),
          },
        },
      };
      
      addUtilities(newUtilities);
      addComponents(newComponents);
    },
  ],
}