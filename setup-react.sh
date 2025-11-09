#!/bin/bash

echo "🚀 Setting up Mars Games Hub React App..."

# Create public directory if it doesn't exist
mkdir -p public

# Copy game HTML files to public directory
echo "📦 Copying game files to public directory..."
cp mars-town.html public/ 2>/dev/null || echo "mars-town.html not found, skipping..."
cp space_rafter.html public/ 2>/dev/null || echo "space_rafter.html not found, skipping..."

# Install dependencies
echo "📥 Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "🎮 To start the development server, run:"
echo "   npm run dev"
echo ""
echo "🏗️ To build for production, run:"
echo "   npm run build"
echo ""
