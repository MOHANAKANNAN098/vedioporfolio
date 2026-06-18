# Mohanakannan's Portfolio

A modern, interactive portfolio website showcasing full-stack development projects, including the Samkass Finance Manager SaaS application, AI Career Navigator, and Animal Jump Adventure game.

## 🚀 Features

- **Automatic Video Autoplay** - Hero section with auto-playing background video
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - AOS (Animate On Scroll) and Framer Motion animations
- **Project Showcase** - Display of 3 live projects with links
- **Contact Section** - Easy contact form with direct email and phone
- **Social Links** - LinkedIn, GitHub, and other social profiles

## 🛠️ Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS 4 + CSS3
- **Animations**: Framer Motion + AOS
- **Build Tool**: Vite 8
- **Hosting**: Vercel

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. Clone the repository
```bash
git clone https://github.com/MOHANAKANNAN098/vedioporfolio.git
cd vedioporfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

5. Preview production build
```bash
npm run preview
```

## 🚀 Deployment on Vercel

### Method 1: Connect GitHub (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"

**That's it!** Your portfolio is now live on Vercel.

### Method 2: Vercel CLI

1. Install Vercel CLI
```bash
npm i -g vercel
```

2. Deploy from project directory
```bash
vercel
```

3. Follow the prompts to link your project

## 📁 Project Structure

```
├── src/
│   ├── components/        # React components
│   │   ├── Hero.jsx      # Hero section with video autoplay
│   │   ├── About.jsx     # About section
│   │   ├── Projects.jsx  # Projects showcase
│   │   ├── Contact.jsx   # Contact form
│   │   ├── Navbar.jsx    # Navigation bar
│   │   ├── Footer.jsx    # Footer
│   │   ├── Preloader.jsx # Loading screen
│   │   └── Services.jsx  # Services section
│   ├── assets/           # Images and videos
│   ├── App.jsx          # Main App component
│   ├── App.css          # Global styles
│   ├── index.css        # Tailwind imports
│   └── main.jsx         # React entry point
├── public/              # Static assets
├── vite.config.js       # Vite configuration
├── vercel.json          # Vercel configuration
├── netlify.toml         # Netlify configuration (optional)
└── package.json         # Project dependencies
```

## 🎯 Key Sections

### Hero Section
- Automatic video autoplay after preloader
- Muted on load, unmutes after 500ms
- Responsive text overlay
- Scroll-triggered pause/resume

### About Section
- Profile information
- Technology stack showcase
- Key highlights and achievements

### Projects Section
- **Samkass Finance Manager** - SaaS application
  - Website: samkass.site
  - Tech: Python, Flask, PostgreSQL, Supabase
  
- **AI Career Navigator** - Career guidance platform
  - Website: sleai.netlify.app
  - Tech: HTML5, CSS3, JavaScript, AI
  
- **Animal Jump Adventure** - Browser game
  - Website: mohanakannan098.github.io/jumping-game-using-animals-new
  - Tech: HTML5, CSS3, JavaScript, Canvas

### Contact Section
- Email: mohansampath098@gmail.com
- Phone: +91 79049 87242
- Location: Coimbatore, India

## 🎨 Customization

### Update Personal Information
Edit `src/components/About.jsx` and `src/components/Footer.jsx` with your details.

### Change Colors
Modify Tailwind colors in CSS or override in component classes.

### Update Projects
Edit `src/components/Projects.jsx` to add/remove projects.

### Change Logo/Name
Update `src/components/Navbar.jsx` and `src/components/Preloader.jsx`.

## 🔧 Environment Variables

Create a `.env` file in the root directory:
```env
VITE_API_URL=your_api_url
VITE_ENVIRONMENT=production
```

## 📊 Performance Optimization

- Code splitting via Rollup
- Image lazy loading
- Video preload optimization
- CSS purging with Tailwind
- Minified production builds

## 🐛 Troubleshooting

### Video not autoplay on Vercel
- Ensure video file is in `src/assets/hero video/`
- Check browser console for CORS errors
- Verify `vercel.json` headers are correct

### Navigation links not working
- Check section IDs match link anchors
- Ensure smooth scroll is enabled in CSS

### Animations not triggering
- AOS animations trigger on scroll
- Verify viewport intersection is working
- Check console for AOS initialization

## 📝 Notes

- Video autoplay requires muted audio on initial load (browser policy)
- Audio unmutes after 500ms of playback
- Video pauses when scrolling away, resumes when returning
- Mobile-optimized with webkit attributes

## 🔗 Links

- **Portfolio**: [Your Vercel URL]
- **GitHub**: https://github.com/MOHANAKANNAN098
- **LinkedIn**: https://linkedin.com/in/mohanakannan098
- **Samkass**: https://samkass.site

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Mohanakannan S**
- Founder of Samkass Finance Manager
- Full Stack Developer
- B.E. Electrical & Electronics Engineering (1st Year)
- Coimbatore, Tamil Nadu, India

---

Built with ❤️ using React + Vite + Tailwind CSS
