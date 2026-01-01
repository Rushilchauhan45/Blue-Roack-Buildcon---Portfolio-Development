# Blue Rock Buildcon - Premium Builder Portfolio Website

A premium, professional portfolio website for Blue Rock Buildcon - a leading construction and real estate development company with over 20 years of excellence.

## 🏗️ Project Overview

This is a complete, production-ready website built with modern web technologies, featuring smooth animations, responsive design, and an elegant user interface. The website showcases Blue Rock Buildcon's expertise in residential construction, commercial projects, redevelopment, and interior design.

## ✨ Key Features

### 🎨 Design & UX
- **Premium Design**: Modern, professional corporate builder-style design
- **Smooth Animations**: Elegant animations using Framer Motion throughout
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop) with NO horizontal scrolling
- **Transparent Navbar**: Semi-transparent navbar that overlays page content beautifully
- **Blue Gradient Headers**: Consistent blue gradient backgrounds across all pages

### 🖼️ Interactive Components
- **Image Carousels**: Interactive project showcases with multiple images
- **Testimonials Carousel**: Auto-playing testimonial slider with navigation controls
- **Hover Effects**: Smooth hover animations on cards and buttons
- **Page Transitions**: Seamless page transitions with Framer Motion

### 📱 User Engagement
- **WhatsApp Integration**: Floating WhatsApp button for direct chat
- **Contact Form**: Fully functional contact form with validation
- **Google Maps**: Embedded location map
- **Scroll to Top**: Smooth scroll to top button
- **Statistics Counter**: Animated counter for company achievements

### 🎯 Content Sections
- **8 Homepage Sections**: Hero, About, Services, Projects, Why Choose Us, Stats, Testimonials, CTA
- **Dedicated Pages**: About, Projects, Services, Contact
- **Project Filters**: Filter projects by category (All, Ongoing, Completed)
- **Service Showcase**: 6 comprehensive service offerings with details

## 🛠️ Tech Stack

- **React 18**: Modern React with hooks and functional components
- **Vite**: Lightning-fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Advanced animations and page transitions
- **React Router DOM v6**: Client-side routing with modern API
- **Lucide React**: Modern, clean icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Navigation with SVG logo
│   ├── Footer.jsx           # Footer with company info & links
│   ├── Hero.jsx             # Hero section with image slideshow
│   ├── SectionWrapper.jsx   # Reusable section wrapper with animations
│   ├── SectionTitle.jsx     # Reusable section title component
│   ├── PageTransition.jsx   # Page transition wrapper
│   ├── ImageCarousel.jsx    # Image carousel for projects
│   ├── FloatingWhatsApp.jsx # Floating WhatsApp button
│   └── ScrollToTop.jsx      # Scroll to top functionality
├── pages/
│   ├── Home.jsx             # Home page (8 sections)
│   ├── About.jsx            # About page with timeline
│   ├── Projects.jsx         # Projects page with filters
│   ├── Services.jsx         # Services page with details
│   └── Contact.jsx          # Contact page with form & map
├── hooks/
│   └── useCountUp.js        # Custom hook for animated counters
├── utils/
│   └── motion.js            # Framer Motion animation variants
├── App.jsx                  # Main app with routing & overflow fixes
├── main.jsx                 # App entry point
└── index.css                # Global styles with overflow fixes
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Development
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- **Primary**: Blue tones (#1e3a8a, #3b82f6, #0ea5e9)
- **Accent**: Green (#10b981)
- **Secondary**: Gray shades

### Logo
The navbar uses an inline SVG logo. To update:
1. Open `src/components/Navbar.jsx`
2. Modify the SVG code in the logo section

### Content
Update content in respective page components:
- Homepage: `src/pages/Home.jsx`
- About: `src/pages/About.jsx`
- Projects: `src/pages/Projects.jsx`
- Services: `src/pages/Services.jsx`
- Contact: `src/pages/Contact.jsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components are tested and optimized for mobile-first design.

## ✅ Recent Updates

### Latest Improvements (January 2026)
1. ✅ **Fixed Horizontal Overflow**: Added overflow-x-hidden to prevent horizontal scrolling on mobile
2. ✅ **Navbar Background**: Made navbar transparent/semi-transparent to overlay page backgrounds
3. ✅ **Blue Headers**: Added consistent blue gradient backgrounds to all page headers
4. ✅ **Testimonials Carousel**: Converted static testimonials to auto-playing carousel with navigation
5. ✅ **Logo Update**: Replaced text logo with professional SVG logo
6. ✅ **Typography Fix**: Optimized hero section font sizes for better readability
7. ✅ **Component Rendering**: Fixed layout and wrapper issues across all pages
8. ✅ **SectionWrapper**: Added overflow handling and relative positioning

## 🐛 Bug Fixes
- Fixed horizontal scrollbar on mobile devices
- Resolved navbar background consistency issues
- Fixed component rendering across different pages
- Improved responsive padding and container widths
- Added proper overflow handling to all main containers

## 📄 License

This project is private and proprietary to Blue Rock Buildcon.

## 👥 Contact

For any questions or support, please contact:
- **Email**: info@bluerockbuildcon.com
- **Phone**: +1 (234) 567-890

---

**Built with ❤️ for Blue Rock Buildcon**
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
