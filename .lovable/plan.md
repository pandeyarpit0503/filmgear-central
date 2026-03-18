

# FilmGear Pro — Film Equipment Rental + Production Management Platform

## Overview
A modern, dark-themed SaaS dashboard platform for film equipment rental and production management, built with React, shadcn/ui, and Tailwind CSS. Clean, minimal design inspired by Linear/Vercel/Stripe.

## Design System
- **Dark mode default** with dark gray backgrounds (not pure black)
- Cards slightly lighter than background with soft shadows
- Blue gradient accent color
- Rounded corners (rounded-2xl), consistent spacing (p-4/p-6/gap-6)
- All shadcn/ui components, lucide-react icons
- Modern typography with clear visual hierarchy

---

## Pages & Features

### 1. Landing Page (`/`)
- Hero section with title, subtitle, and dual CTAs ("Start as Vendor" / "Browse Equipment")
- Feature cards grid: Inventory Management, Instant Booking, Analytics, Secure Payments, Maintenance Tracking
- Final CTA section
- Clean centered SaaS layout

### 2. Authentication Pages
- **Customer Login** (`/login`): Email/password form, Google button, links to signup & vendor login
- **Producer Login** (`/producer-login`): Role selector cards (Driver, Camera Man, Vendor, Producer) with icons and descriptions
- **Sign Up** (`/signup`): Registration form

### 3. Producer Dashboard (`/producer`)
- **Sidebar** with collapsible accordion sections:
  - Main: Dashboard, Film Equipment, Rental Bookings, Active Rentals, Reports & Analytics
  - Camera Dept: Asset Handover, RFQ Management, Camera Reports, Expendables
  - Transport: Trip Logger, Fuel Entry, Geofence
  - Operations: Service Personnel, Photo Verification
  - Settings: Profile, Settings
- **Top navbar**: Search, notifications, profile
- **Dashboard content**:
  - Welcome message + Export Report button
  - 4 metric cards (Equipment Count, Active Rentals, Revenue, Utilization)
  - Department overview grid (Camera, Transport, Lighting, Audio)
  - Recent Equipment Rentals table with status badges
  - Equipment Alerts notifications
  - Quick Actions (Add Film Gear, Manage Team, Full Reports)

### 4. Vendor Dashboard (`/vendor`)
- Simplified sidebar (Inventory, Bookings, Revenue, Equipment, Settings)
- Stats cards (Total Equipment, Active Bookings, Monthly Revenue, Rating)
- Equipment inventory list
- Recent bookings table

### 5. Customer Dashboard (`/customer`)
- Sidebar: Dashboard, Browse Equipment, My Bookings, Cart, Favorites, Profile
- Stats cards (Active Bookings, Favorites, Cart Items, Total Spent)
- Featured Equipment grid
- Recent Bookings list

---

## Architecture
- Component-based with reusable layout components (DashboardLayout, Sidebar, MetricCard, etc.)
- React Router for all page navigation
- Mock data for all dashboard content (API-ready structure)
- ~15-20 new components across pages and shared UI

