# Wokka Landing Page

A modern, responsive landing page for Wokka built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design matching the original Wokka branding
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and TypeScript
- 🎯 Optimized for performance and SEO
- 🚀 Ready for deployment on Vercel

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Images**: Unsplash (stock photos)
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd wokka-landing
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
wokka-landing/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Mission.tsx        # Mission section
│   ├── WhoWeAre.tsx       # About section
│   ├── Team.tsx           # Team section
│   ├── FAQ.tsx            # FAQ section
│   ├── Membership.tsx     # Membership options
│   └── Footer.tsx         # Footer
├── public/                 # Static assets
└── tailwind.config.js     # Tailwind configuration
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment

```bash
npm run build
npm start
```

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`:

- `wokka-orange`: #FF6B35
- `wokka-yellow`: #FFB347
- `wokka-light-orange`: #FFE5D4
- `wokka-light-yellow`: #FFF3E0

### Content

Update the content in each component file to match your needs.

## License

This project is licensed under the MIT License.
