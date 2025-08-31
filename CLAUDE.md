# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Primary development workflow:**
- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build production version
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run prettier` - Format all files with Prettier
- `npm run prettier:check` - Check formatting without making changes

## Project Architecture

This is a **Next.js 14 App Router** landing page for BuildMate/PickAxe DH built with TypeScript and Tailwind CSS.

### Key Architecture Patterns:
- **App Router structure**: Uses Next.js App Router (`app/` directory) with `layout.tsx` and `page.tsx`
- **Component-based architecture**: All UI components in `components/` directory as standalone React components
- **Client components**: Most interactive components use `'use client'` directive for state management
- **Custom Tailwind theme**: Extended with "wokka-" prefixed brand colors defined in `tailwind.config.js`
- **Font integration**: Uses Inter font via Next.js Google Fonts with CSS variables

### Component Structure:
- **Page sections**: Each major section (Hero, Mission, FAQ, etc.) is a separate component
- **Reusable patterns**: Components follow consistent styling patterns with Tailwind classes
- **Interactive elements**: Dropdowns, modals, and accordions use React state

### Styling System:
- **Brand colors**: 
  - `pickaxe-blue`: #FF6B35 (primary)
  - `pickaxe-pale-blue`: #FFB347 (secondary)
  - `wokka-light-orange`: #FFE5D4 (backgrounds)
  - `pickaxe-light-blue`: #FFF3E0 (backgrounds)
- **Container pattern**: Uses `container-custom` class for consistent page width
- **Responsive design**: Mobile-first approach with sm/md/lg breakpoints

### Image Configuration:
- External images allowed from `images.unsplash.com` and `plus.unsplash.com`
- Uses Next.js Image optimization

### Brand Context:
The site represents PickAxe DH (formerly BuildMate), a platform connecting workers with people who need work done. Content focuses on construction/building services, membership tiers, and community building.