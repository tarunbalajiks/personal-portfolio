# AI Engineer Portfolio - Frontend Only

A beautiful, responsive personal portfolio website for AI engineers. Built with React, Vite, and Tailwind CSS. **Optimized for direct deployment on Vercel.**

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/pnpm

### Installation

```bash
# Clone or download this repository
cd ai-portfolio-vercel

# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
# or
pnpm build
```

The `dist` folder is ready to be deployed.

## 📦 Deploy to Vercel (Free)

### Option 1: Using Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: Using GitHub

1. Push this repository to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Click "Deploy" (Vercel auto-detects the build settings)
5. Your site is live! 🎉

### Option 3: Drag & Drop

1. Run `npm run build`
2. Go to [vercel.com/new](https://vercel.com/new)
3. Drag and drop the `dist` folder
4. Done!

## 🎨 Customization

### Update Your Information

Edit the components in `src/components/` to add your actual content:

- **Navbar**: `src/components/Navbar.jsx` - Navigation links and resume button
- **Hero**: `src/components/Hero.jsx` - Main headline and CTA
- **Projects**: `src/components/Projects.jsx` - Your project portfolio
- **Experience**: `src/components/Experience.jsx` - Work experience
- **Education**: `src/components/Education.jsx` - Education details
- **Footer**: `src/components/Footer.jsx` - Social links and contact

### Add Social Links

In `Footer.jsx`, update the social media links:

```jsx
<a href="https://github.com/yourusername" className="...">
  <Github size={20} />
</a>
```

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: 'rgb(168, 85, 247)',      // Purple
  secondary: 'rgb(59, 130, 246)',    // Blue
  accent: 'rgb(236, 72, 153)',       // Pink
}
```

### Add Your Resume

1. Place your resume PDF in `public/` folder
2. Update the Resume button in `Navbar.jsx`:

```jsx
<a href="/your-resume.pdf" target="_blank" rel="noopener noreferrer" className="...">
  Resume
</a>
```

## 📁 Project Structure

```
ai-portfolio-vercel/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **Lucide React** - Icons
- **Framer Motion** - Animations

## 📝 License

MIT - Feel free to use this template for your portfolio!

## 🤝 Support

For issues or questions, check the Vercel documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)

---

**Happy deploying! 🚀**
