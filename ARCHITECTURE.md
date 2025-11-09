# 🏗️ React Architecture Overview

## Application Flow

```
User Opens Browser
        ↓
   index.html loads
        ↓
   src/main.jsx runs
        ↓
   src/App.jsx renders
        ↓
   React Router activates
        ↓
   ┌─────────────────────────────┐
   │  Route: /                   │
   │  Component: Home.jsx        │
   │  Shows: Game selection      │
   └─────────────────────────────┘
        ↓ (User clicks game)
   ┌─────────────────────────────┐
   │  Route: /mars-town          │
   │  Component: MarsTown.jsx    │
   │  Loads: public/mars-town.html│
   └─────────────────────────────┘
        OR
   ┌─────────────────────────────┐
   │  Route: /space-rafter       │
   │  Component: SpaceRafter.jsx │
   │  Loads: public/space_rafter.html│
   └─────────────────────────────┘
```

## Component Hierarchy

```
App.jsx (Router)
  │
  ├── Route: /
  │     └── Home.jsx
  │           ├── Header
  │           ├── Game Cards
  │           │     ├── Mars Town Card
  │           │     └── Space Rafter Card
  │           └── Footer
  │
  ├── Route: /mars-town
  │     └── MarsTown.jsx
  │           └── Redirects to mars-town.html
  │
  └── Route: /space-rafter
        └── SpaceRafter.jsx
              └── Redirects to space_rafter.html
```

## File Dependencies

```
index.html
  └── src/main.jsx
        └── src/App.jsx
              ├── react-router-dom
              ├── src/pages/Home.jsx
              │     └── src/pages/Home.css
              ├── src/pages/MarsTown.jsx
              └── src/pages/SpaceRafter.jsx
```

## Data Flow

```
User Action → React Component → Router → New Component → Render
     ↓              ↓              ↓           ↓            ↓
  Click Card   Home.jsx      navigate()   MarsTown.jsx  Game Loads
```

## Build Process

### Development (`npm run dev`)
```
Source Files (src/)
        ↓
   Vite Dev Server
        ↓
   Hot Module Replacement
        ↓
   Browser (localhost:3000)
```

### Production (`npm run build`)
```
Source Files (src/)
        ↓
   Vite Build Process
        ↓
   Optimization & Bundling
        ↓
   Output (dist/)
        ├── index.html
        ├── assets/
        │     ├── index-[hash].js
        │     └── index-[hash].css
        └── public files copied
```

## State Management

Currently using **React Router** for navigation state:

```
useNavigate() hook
        ↓
   navigate('/mars-town')
        ↓
   URL changes
        ↓
   Router matches route
        ↓
   Component renders
```

## Styling Architecture

```
Global Styles (src/index.css)
        ↓
   Applied to entire app
        ↓
Component Styles (Home.css)
        ↓
   Applied to specific component
        ↓
Inline Styles (style prop)
        ↓
   Applied to specific elements
```

## Asset Loading

```
Static Assets (public/)
        ↓
   Copied as-is to dist/
        ↓
   Accessible via root path
        ↓
Example: /mars-town.html
```

```
Imported Assets (src/)
        ↓
   Processed by Vite
        ↓
   Optimized & bundled
        ↓
Example: import logo from './logo.png'
```

## Routing Strategy

### Client-Side Routing (React Router)
- Fast navigation (no page reload)
- Smooth transitions
- Browser history support
- Back/forward buttons work

### External Navigation (window.location)
- Used for game HTML files
- Full page load
- Preserves game state
- Simple integration

## Performance Optimization

```
Code Splitting
        ↓
   Lazy Loading
        ↓
   Tree Shaking
        ↓
   Minification
        ↓
   Optimized Bundle
```

## Development Workflow

```
1. Edit src/pages/Home.jsx
        ↓
2. Save file
        ↓
3. Vite detects change
        ↓
4. Hot Module Replacement
        ↓
5. Browser updates instantly
        ↓
6. No manual refresh needed!
```

## Deployment Flow

```
Local Development
        ↓
   npm run build
        ↓
   dist/ folder created
        ↓
   Upload to hosting
        ↓
   ┌─────────────────┐
   │   Netlify       │
   │   Vercel        │
   │   GitHub Pages  │
   │   AWS S3        │
   └─────────────────┘
        ↓
   Live Website! 🎉
```

## Technology Stack

```
┌─────────────────────────────────┐
│         Browser                 │
│  ┌───────────────────────────┐  │
│  │      React 18             │  │
│  │  ┌─────────────────────┐  │  │
│  │  │  React Router 6     │  │  │
│  │  └─────────────────────┘  │  │
│  │  ┌─────────────────────┐  │  │
│  │  │  Three.js (Games)   │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
         ↑
         │ Built by
         │
┌─────────────────────────────────┐
│         Vite                    │
│  - Fast HMR                     │
│  - Optimized builds             │
│  - ES modules                   │
└─────────────────────────────────┘
```

## Future Architecture (Optional Enhancements)

```
Current: HTML Games in public/
        ↓
Future: React Game Components
        ↓
   ┌─────────────────────────────┐
   │  State Management           │
   │  (Redux/Zustand)            │
   └─────────────────────────────┘
        ↓
   ┌─────────────────────────────┐
   │  Game Components            │
   │  - MarsGame.jsx             │
   │  - SpaceGame.jsx            │
   └─────────────────────────────┘
        ↓
   ┌─────────────────────────────┐
   │  Shared Game Logic          │
   │  - hooks/useGame.js         │
   │  - utils/gameEngine.js      │
   └─────────────────────────────┘
```

## Key Concepts

### React Components
- Reusable UI pieces
- Accept props
- Manage own state
- Return JSX

### React Router
- Client-side routing
- No page reloads
- URL-based navigation
- History management

### Vite
- Next-gen build tool
- Lightning-fast HMR
- Optimized production builds
- ES modules native

### JSX
- JavaScript + XML
- React's templating syntax
- Compiles to JavaScript
- Type-safe with TypeScript

---

**This architecture provides:**
- ⚡ Fast development
- 🎨 Clean code organization
- 🚀 Optimized performance
- 🔧 Easy maintenance
- 📈 Scalability

**Ready to build? Run `npm run dev`! 🎮**
