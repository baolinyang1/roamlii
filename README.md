# Roamlii

A digital platform for tourism and hospitality businesses built with Next.js, featuring a tools dashboard with Discovery Suite and Lead Management System offerings.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Docker (Optional)

```bash
# Development
npm run docker:dev

# Production
npm run docker:prod
```

## Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run pretty       # Format code with Prettier
```

## Approach & Architecture

- **Component-Based Design**: Modular components organized by type (Cards, Sections, UI)
- **Static Data Management**: Business logic and content separated into `/src/data` files
- **Responsive First**: Mobile-first design with Tailwind CSS
- **Type Safety**: Comprehensive TypeScript interfaces throughout the application

## Bonus Tasks Completed

### Dark Mode
- Functional dark/light mode toggle using `next-themes`
- Theme persistence across sessions
- Smooth transitions and proper color scheme adjustments
- Theme toggle component in header with system preference detection

### Code Quality & TypeScript
- **Strong Type Definitions**: Comprehensive interfaces in `/src/types/index.ts`
- **Props Typing**: All component props properly typed with readonly interfaces
- **Static Data Types**: Type-safe data structures for plans, tools, and configurations
- **Generic Types**: Reusable types like `NonEmptyArray<T>` and union types
- **Strict Configuration**: Enabled strict TypeScript settings with Next.js optimizations

## Tech Stack

- Next.js 15 (App Router)
- React 
- TypeScript
- Tailwind CSS
- shadcn/ui + Radix UI
- next-themes (Dark Mode)
- Docker

---

**Interview Assessment Project** 
