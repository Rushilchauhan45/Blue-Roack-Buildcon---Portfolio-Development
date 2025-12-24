# Blue Rock Buildcon - Premium Builder Portfolio Website

A premium, professional portfolio website for Blue Rock Buildcon - a leading construction and real estate development company.

## 🏗️ Project Overview

This is a complete, production-ready website built with modern web technologies, featuring smooth animations, responsive design, and an elegant user interface.

## ✨ Features

- **Premium Design**: Modern, professional, and corporate builder-style design
- **Smooth Animations**: Elegant animations using Framer Motion
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Image Carousels**: Interactive project showcases with multiple images
- **Contact Form**: Fully functional contact form
- **WhatsApp Integration**: Direct WhatsApp chat option
- **Google Maps**: Embedded location map
- **SEO Optimized**: Clean structure for better search engine visibility

## 🛠️ Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Lightning-fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and page transitions
- **React Router DOM**: Client-side routing
- **Lucide React**: Modern icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Navigation bar with sticky behavior
│   ├── Footer.jsx           # Footer with company info & links
│   ├── Hero.jsx             # Hero section for homepage
│   ├── SectionWrapper.jsx   # Reusable section wrapper with animations
│   ├── SectionTitle.jsx     # Reusable section title component
│   ├── PageTransition.jsx   # Page transition wrapper
│   └── ImageCarousel.jsx    # Image carousel for projects
├── pages/
│   ├── Home.jsx             # Home page (8 sections)
│   ├── About.jsx            # About page
│   ├── Projects.jsx         # Projects page with carousels
│   ├── Services.jsx         # Services page
│   └── Contact.jsx          # Contact page with form & map
├── utils/
│   └── motion.js            # Framer Motion animation variants
├── App.jsx                  # Main app component with routing
├── main.jsx                 # App entry point
└── index.css                # Global styles with Tailwind
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open your browser and visit:
```
http://localhost:3000
```

## 📦 Build for Production

Build the project for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🎨 Design Features

### Color Palette
- **Primary**: Deep Blue (#1e3a8a)
- **Accent**: Sky Blue (#0ea5e9)
- **Text**: Black & Gray shades
- **Background**: White with Gray sections

### Typography
- **Headings**: Montserrat (Bold, Professional)
- **Body**: Inter (Clean, Readable)

### Animations
- Fade In/Out
- Slide Up/Down/Left/Right
- Scale In
- Page Transitions
- Hover Effects

## 📄 Pages Overview

### 1. Home Page
Contains 8 sections in strict order:
1. Hero Section
2. About Us (Short)
3. Services
4. Projects Showcase
5. Why Choose Us
6. Company Stats
7. Testimonials
8. Call To Action

### 2. About Page
- Company Story
- Vision & Mission
- Core Values
- Founder Message
- Certifications
- Timeline/Milestones

### 3. Projects Page
- Ongoing Projects with image carousels
- Completed Projects with image carousels
- Filter by status (All/Ongoing/Completed)
- Project details (location, type, completion %)

### 4. Services Page
- 6 Main Services with detailed descriptions
- Features list for each service
- Process workflow (6 steps)
- Why Choose Our Services

### 5. Contact Page
- Contact Information Cards
- Contact Form
- Google Maps Integration
- WhatsApp CTA Button
- Immediate Assistance Options

## 🌐 Deployment

### Netlify
1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import your repository
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

## 🔧 Customization

### Update Company Information
- Edit contact details in `Footer.jsx` and `Contact.jsx`
- Update company name throughout the components
- Replace placeholder images with actual project photos

### Modify Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#1e3a8a',
    light: '#3b82f6',
    dark: '#1e293b',
  },
  // ... add your colors
}
```

### Add/Remove Sections
- Sections are modular and can be easily added or removed
- Each section uses the `SectionWrapper` component
- Animation variants are defined in `utils/motion.js`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

- Optimized images from Unsplash/Pexels
- Code splitting with React Router
- Lazy loading where applicable
- Minimal bundle size with Vite

## 📞 Support

For questions or support, please contact:
- Email: info@bluerockbuildcon.com
- Phone: +1 (234) 567-890

## 📄 License

This project is proprietary and confidential.

## 🙏 Acknowledgments

- Images from Unsplash and Pexels
- Icons from Lucide React
- Animations powered by Framer Motion

---

**Built with ❤️ for Blue Rock Buildcon**
