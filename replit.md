# Yatin Garg Portfolio - replit.md

## Overview

This is a modern personal portfolio website for Yatin Garg, an AWS DevOps Engineer. The application is built as a full-stack web application with a React frontend and Express backend, featuring a contact form with database integration for visitor inquiries.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom GitHub-inspired color scheme
- **State Management**: TanStack React Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Style**: REST API with JSON responses
- **Request Processing**: Express middleware for JSON parsing and logging
- **Error Handling**: Centralized error handling middleware

### Database Integration
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema Management**: Drizzle migrations with schema versioning
- **Storage Abstraction**: Interface-based storage layer with in-memory fallback

## Key Components

### Pages
1. **Home**: Landing page with hero section and call-to-action buttons
2. **About**: Personal introduction and core expertise showcase
3. **Skills**: Technical skills organized by categories with visual indicators
4. **Projects**: Portfolio of DevOps and infrastructure projects
5. **Contact**: Contact form with server-side validation and submission

### Core Features
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Contact Form**: Full-stack form handling with validation and database storage
- **Navigation**: Sticky navigation with active state indicators
- **Toast Notifications**: User feedback for form submissions and errors
- **Performance**: Optimized loading with proper font loading and asset management

### UI Components
- Custom components built on Radix UI primitives
- Consistent design system with GitHub-inspired aesthetics  
- Reusable form components with integrated validation
- Card-based layouts for skills and projects presentation

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form validation occurs client-side using Zod schemas
3. Valid data is submitted to `/api/contact` endpoint
4. Backend validates data again using shared schema
5. Contact record is created in database via storage interface
6. Success/error response is returned to frontend
7. User receives toast notification with submission status

### Storage Layer
- **IStorage Interface**: Defines contract for data operations
- **MemStorage Implementation**: In-memory storage for development/fallback
- **Database Storage**: PostgreSQL integration through Drizzle ORM
- **Schema Validation**: Shared Zod schemas between frontend and backend

## External Dependencies

### UI and Styling
- Radix UI primitives for accessible components
- Tailwind CSS for utility-first styling
- Google Fonts (Inter and Fira Code) for typography
- Lucide React for consistent iconography

### Backend Dependencies
- Express.js for server framework
- Drizzle ORM for database operations
- Zod for runtime validation
- Connect-pg-simple for session management (configured but not actively used)

### Development Tools
- Vite for build tooling and development server
- TypeScript for type safety
- ESBuild for production bundling
- PostCSS with Autoprefixer for CSS processing

## Deployment Strategy

### Development
- Vite development server with hot module replacement
- Express server with middleware mode integration
- In-memory storage for rapid development iteration
- Replit-specific development banner and error overlay

### Production Build
1. Frontend assets built with Vite to `dist/public` directory
2. Backend compiled with ESBuild to `dist/index.js`
3. Static file serving configured for production
4. Database migrations applied via `drizzle-kit push`
5. Environment variables required for database connection

### Environment Configuration
- **Development**: NODE_ENV=development with Vite integration
- **Production**: NODE_ENV=production with static file serving
- **Database**: DATABASE_URL environment variable required for PostgreSQL connection

## Changelog

```
Changelog:
- June 29, 2025. Initial setup with modern React portfolio featuring GitHub-inspired design
- June 29, 2025. Integrated authentic resume data and contact information
  • Updated About page with real TCS experience and J.C. Bose University education
  • Added actual project portfolio with specific achievements and metrics
  • Updated skills with real technical expertise from resume
  • Configured resume download functionality with actual PDF file
  • Updated contact form with real email (yatingarg369@gmail.com)
  • Changed title from "AWS DevOps Engineer" to "Cloud and DevOps Engineer"
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```