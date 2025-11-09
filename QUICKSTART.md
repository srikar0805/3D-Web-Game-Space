# 🚀 Quick Start Guide - React Version

## Prerequisites

- Node.js (v16 or higher) - [Download here](https://nodejs.org/)
- npm (comes with Node.js)

## Installation Steps

### Option 1: Automatic Setup (Recommended)

```bash
# Run the setup script
./setup-react.sh

# Start the development server
npm run dev
```

### Option 2: Manual Setup

```bash
# 1. Create public directory
mkdir -p public

# 2. Copy game files to public directory
cp mars-town.html public/
cp space_rafter.html public/

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

## 🎮 Using the App

1. **Home Page** - Opens automatically at `http://localhost:3000`
2. **Click a game card** - Navigate to Mars Town Builder or Space Rafter
3. **Play the game** - Enjoy!
4. **Go back** - Use browser back button or the back button in the game

## 📦 Building for Production

```bash
# Build the app
npm run build

# Preview the production build
npm run preview
```

The built files will be in the `dist` folder, ready to deploy!

## 🚀 Deployment Options

### Netlify (Easiest)

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy!

### Vercel

```bash
npm install -g vercel
vercel
```

### GitHub Pages

```bash
npm run build
# Then push the dist folder to gh-pages branch
```

## 🐛 Troubleshooting

### Port already in use?

```bash
# Kill the process on port 3000
npx kill-port 3000

# Or change the port in vite.config.js
```

### Games not loading?

Make sure the HTML files are in the `public` folder:
- `public/mars-town.html`
- `public/space_rafter.html`

### Dependencies not installing?

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📝 Development Tips

- **Hot Reload**: Changes to React components reload instantly
- **Console**: Open browser DevTools (F12) to see logs
- **React DevTools**: Install the React DevTools browser extension

## 🎯 Next Steps

1. ✅ Get the app running
2. 🎮 Play the games
3. 🎨 Customize the styling
4. 🚀 Deploy to production
5. 🌟 Share with friends!

## 💡 Need Help?

- Check the [REACT_README.md](REACT_README.md) for detailed documentation
- Open an issue on GitHub
- Check the browser console for errors

---

**Happy Gaming! 🎮🚀**
