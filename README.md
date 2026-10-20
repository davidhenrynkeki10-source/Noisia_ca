# Noisia — Creative Agency

A modern web application built with **Node.js**, **Next.js 15 (App Router)**, **React 19**, and **Tailwind CSS v4**.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Next.js 15 (App Router)
- **Frontend**: React 19, Lucide React
- **Styling**: Tailwind CSS v4, PostCSS
- **API**: Next.js Route Handlers (Node.js runtime)

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 3. Build for Production
```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── api/
│   │   └── health/
│   │       └── route.js    # Node.js API route handler
│   ├── globals.css         # Tailwind v4 configuration & styles
│   ├── layout.jsx          # Root layout & Google/CDN typography
│   └── page.jsx            # Creative agency split-screen home page
├── public/                 # Static assets (favicon, robots.txt)
├── next.config.mjs         # Next.js configuration
├── postcss.config.mjs      # PostCSS & Tailwind v4 plugin config
└── package.json            # Scripts & dependencies
```
