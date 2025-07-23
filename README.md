# Vishvambar Udavant's Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion, showcasing the work and skills of Vishvambar Udavant, a B.Tech Computer Science student at MIT ADT University, Pune.

## 🚀 Features

- **Modern Design**: Clean, professional, and visually appealing interface
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Components**: Hover effects, scroll animations, and micro-interactions
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags, Open Graph, and Twitter card support
- **Fast Loading**: Optimized performance and lazy loading

## 🛠️ Built With

- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Icons** - Popular icon library
- **Vite** - Fast build tool (alternative to Create React App)

## 📁 Project Structure

```
vishvambar-portfolio/
├── public/
│   ├── index.html
│   ├── site.webmanifest
│   ├── robots.txt
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── Hero.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Navigation.js
│   │   └── Footer.js
│   ├── context/
│   │   └── ThemeContext.js
│   ├── hooks/
│   ├── assets/
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/vishvambar/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 🌐 Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure the `_redirects` file for SPA routing

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

## 📱 Sections

### Hero Section
- Eye-catching introduction with animated text
- Call-to-action buttons for resume and contact
- Smooth scroll indicator

### Projects Section
- Showcase of featured projects with descriptions
- Technology stack for each project
- Live demo and GitHub repository links

### Skills Section
- Categorized technical skills (Frontend, Backend, Tools)
- Progress bars with animations
- Additional learning technologies

### About Section
- Personal background and goals
- Key highlights and stats
- Call-to-action for collaboration

### Contact Section
- Contact form with validation
- Social media links
- Contact information

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Content
- Update personal information in each component
- Replace project data with your own projects
- Modify skills and technologies
- Update contact information and social links

### Animations
Customize animations in components using Framer Motion:
```javascript
const variants = {
  // Your custom animations
};
```

## 📈 Performance

- Lazy loading for images
- Optimized animations
- Minimal bundle size
- Fast Time to Interactive (TTI)

## 🔧 Development Tools

- ESLint for code linting
- Prettier for code formatting
- Tailwind CSS IntelliSense
- Framer Motion DevTools

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Vishvambar - [vishvambar.dev@gmail.com](mailto:vishvambar.dev@gmail.com)

Portfolio: [https://vishvambar.netlify.app](https://vishvambar.netlify.app)

GitHub: [https://github.com/vishvambar](https://github.com/vishvambar)

LinkedIn: [https://linkedin.com/in/vishvambar](https://linkedin.com/in/vishvambar)

---

⭐ If you found this project helpful, please give it a star!
