# Design System Documentation

## Overview
This document outlines the design system extracted from the law firm website. The system formalizes the existing cyan/teal aesthetic while introducing modern UI patterns and improvements.

## Color Palette

### Primary Colors (Cyan/Teal)
- **Light Cyan**: `#00d4ff` - Accents and highlights
- **Primary Blue**: `#0ea5e9` - Main interactive elements
- **Dark Cyan**: `#0284c7` - Darker accents, button hover states
- **Teal Dark**: `#14b8a6` - Secondary accent
- **Emerald**: `#10b981` - Tertiary accent

### Neutral Colors
- **Slate 50-900**: Full spectrum for backgrounds, text, and borders
- **Pink**: `#ec4899` - Form focus states and accents
- **Gray**: `#6b7280` - Secondary text

## Button Design

### Primary Button
- **Gradient**: `linear-gradient(to right, #0ea5e9 0%, #0284c7 50%, #075985 100%)`
- **Hover**: Enhanced shadow with gradient direction change
- **States**: 
  - Default: Cyan/teal gradient with shadow
  - Hover: Darker gradient with increased shadow
  - Focus: Ring around button
  - Disabled: 50% opacity with disabled cursor

### Button Sizes
- **XL**: `h-14 w-40 px-8` - Primary CTAs
- **LG**: `h-12 px-6` - Secondary actions
- **MD**: `h-10 px-5` - Tertiary actions

## Typography

### Font Family
- **Sans-serif**: `system-ui, -apple-system, sans-serif`

### Font Sizes
- `xs`: 0.75rem
- `sm`: 0.875rem
- `base`: 1rem
- `lg`: 1.125rem
- `xl`: 1.25rem
- `2xl`: 1.5rem
- `3xl`: 1.875rem
- `4xl`: 2.25rem

## Spacing System

Used for padding, margins, and gaps:
- `xs`: 0.25rem (4px)
- `sm`: 0.5rem (8px)
- `md`: 1rem (16px)
- `lg`: 1.5rem (24px)
- `xl`: 2rem (32px)
- `2xl`: 2.5rem (40px)
- `3xl`: 3rem (48px)
- `4xl`: 4rem (64px)

## Modern UI Features

### Shadows
- **Small**: Subtle elevation for hover states
- **Medium**: Default shadow for cards
- **Large**: Prominent emphasis
- **XL**: Maximum depth

### Transitions
- **Fast**: 150ms for quick feedback
- **Base**: 200ms for standard interactions
- **Slow**: 350ms for complex animations

### Border Radius
- **sm**: 0.25rem - Minimal rounding
- **md**: 0.375rem - Standard rounding
- **lg**: 0.5rem - Medium rounding
- **xl**: 0.75rem - Large rounding
- **full**: 9999px - Circular elements

## Component Guidelines

### Navigation Links
- Color: Gray-700 by default
- Hover: Cyan-700 with smooth transition
- Transition: 200ms ease-in-out
- Font Weight: Medium

### Form Inputs
- Border: Bottom border only (elegant minimal style)
- Focus: Pink border with smooth transition
- Label: Floats above on focus (modern UX pattern)
- Error: Red text below field

### Form Dividers
- Gradient from cyan to teal
- Rounded ends for modern touch
- Used to visually separate sections

## Implementation

### Using the Design System
The design system is defined in `src/lib/design-system.ts` and can be imported and used in components:

```typescript
import { designSystem } from '@/lib/design-system'
```

### Tailwind Extensions
The Tailwind config extends with:
- Modern shadow system
- Smooth transitions
- Enhanced border radius
- Color tokens from design system

## Modern Improvements Applied

1. **Smooth Transitions**: All interactive elements have 200ms transitions
2. **Enhanced Shadows**: Layered shadows for depth and hierarchy
3. **Better Visual Feedback**: Hover states with color and shadow changes
4. **Improved Form UX**: Floating labels and better error messaging
5. **Gradient Accents**: Used subtly in dividers and visual elements
6. **Consistent Spacing**: Formal spacing scale for alignment

## Maintained Design Philosophy

- **Cyan/Teal Identity**: Preserved the original color scheme
- **Elegance**: Clean, minimal design without unnecessary elements
- **Professional**: Law firm aesthetic maintained
- **Accessible**: Good contrast ratios and readable typography
- **Modern**: Contemporary UI patterns and smooth interactions

## Future Extensions

To extend this design system:
1. Add new color variants by updating `design-system.ts`
2. Create new component patterns in component library
3. Extend Tailwind config with new utilities
4. Document component variations as they're created

---
Generated for the Law Firm Website Design System
