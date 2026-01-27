#!/bin/bash

echo "🚀 FoundationMark AI Demo - Quick Start"
echo "========================================"
echo ""

# Check if API key is set
if grep -q "your_api_key_here" .env.local 2>/dev/null; then
    echo "⚠️  API Key not set!"
    echo ""
    echo "Please edit .env.local and add your Anthropic API key:"
    echo "  - MacroScore: sk-ant-api03-1BB...MwAA"
    echo "  - GRG Longevity: sk-ant-api03-2ky...1gAA"
    echo ""
    read -p "Press Enter after you've added your API key..."
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

echo "✅ Starting dev server..."
echo "🌐 Open http://localhost:3000 in your browser"
echo ""
npm run dev
