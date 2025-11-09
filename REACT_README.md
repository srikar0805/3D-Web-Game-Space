# 🚀 Mars Games Hub - React Version

A modern React application for the Mars Games Hub with routing and component-based architecture.

## 🎮 Features

- **React 18** with modern hooks
- **React Router** for navigation
- **Vite** for fast development and building
- **Three.js** integration for 3D games
- **Responsive design** with CSS animations
- **Component-based architecture**

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
mars-games-hub/
├── public/
│   ├── mars-town.html          # Mars Town Builder game
│   └── space_rafter.html       # Space Rafter game
├── src/
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── Home.css            # Home page styles
│   │   ├── MarsTown.jsx        # Mars Town route
│   │   └── SpaceRafter.jsx     # Space Rafter route
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🎯 Routes

- `/` - Home page with game selection
- `/mars-town` - Mars Town Builder game
- `/space-rafter` - Space Rafter game

## 🚀 Development

The app uses Vite for development, which provides:
- ⚡ Lightning fast HMR (Hot Module Replacement)
- 📦 Optimized builds
- 🔧 Easy configuration

### Running Locally

1. Install Node.js (v16 or higher)
2. Clone the repository
3. Run `npm install`
4. Run `npm run dev`
5. Open http://localhost:3000

## 🎨 Styling

- CSS Modules for component-specific styles
- Global styles in `index.css`
- Animations and transitions for smooth UX
- Responsive design for mobile and desktop

## 🎮 Games Integration

The games are loaded as separate HTML files in the `public` folder:
- `mars-town.html` - Full Mars colony builder
- `space_rafter.html` - Space shooter with time mechanics

When you click a game card, React Router navigates to the game route, which then loads the actual game HTML file.

## 📱 Responsive Design

The app is fully responsive and works on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🔧 Technologies Used

- **React 18** - UI library
- **React Router 6** - Client-side routing
- **Vite** - Build tool
- **Three.js** - 3D graphics
- **CSS3** - Styling and animations

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 🎯 Future Enhancements

- [ ] Convert games to React components
- [ ] Add game state management (Redux/Zustand)
- [ ] Implement save/load functionality
- [ ] Add leaderboards
- [ ] Multiplayer support
- [ ] More games!

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 🎮 Play Now!

Visit the live demo: [Your deployment URL]

---

**Built with ❤️ using React & Three.js**
