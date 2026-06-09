// Design System - Extracted from existing site aesthetic
export const designSystem = {
  colors: {
    // Primary cyan/teal scheme (matching existing buttons and design)
    primary: {
      light: '#00d4ff',
      main: '#0ea5e9',
      dark: '#0284c7',
    },
    secondary: {
      light: '#7dd3fc',
      main: '#0284c7',
      dark: '#075985',
    },
    accent: {
      teal: '#14b8a6',
      emerald: '#10b981',
    },
    // Neutral/background colors (from existing design)
    neutral: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    slate: {
      400: '#cbd5e1',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
    },
    // Existing accent colors
    pink: '#ec4899',
    gray: '#6b7280',
  },
  // Current button gradient (cyan to teal)
  gradients: {
    buttonPrimary: 'linear-gradient(to right, #0ea5e9 0%, #0284c7 50%, #075985 100%)',
    buttonHover: 'linear-gradient(135deg, #0284c7 0%, #075985 100%)',
  },
  // Spacing system (consistent with Tailwind)
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3rem',
    '4xl': '4rem',
  },
  // Typography
  typography: {
    fontFamily: {
      sans: 'system-ui, -apple-system, sans-serif',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
  },
  // Shadows (for modern polish)
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },
  // Transitions (for modern feel)
  transitions: {
    fast: '150ms ease-in-out',
    base: '200ms ease-in-out',
    slow: '350ms ease-in-out',
  },
  // Border radius
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
};

export type DesignSystem = typeof designSystem;
