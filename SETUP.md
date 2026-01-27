# FoundationMark AI Portfolio Advisor - Setup Guide

## Quick Start (5 Minutes)

### Step 1: Fix npm Cache (One-Time Fix)
Run this in your terminal:
```bash
sudo rm -rf ~/.npm/_cacache
```
Enter your Mac password when prompted.

### Step 2: Install Dependencies
```bash
cd /Users/gordongould/projects/foundationmark-demo
npm install
```

### Step 3: Add Your Anthropic API Key
Edit the `.env.local` file and replace `your_api_key_here` with one of your keys:

Either use:
- **MacroScore**: `sk-ant-api03-1BB...MwAA`
- **GRG Longevity**: `sk-ant-api03-2ky...1gAA`

```bash
# Open in your editor
code .env.local

# Or use command line
echo 'ANTHROPIC_API_KEY=sk-ant-api03-2ky...1gAA' > .env.local
```

### Step 4: Run the Demo
```bash
npm run dev
```

Open http://localhost:3000 in your browser!

---

## What You'll See

1. **Chat Interface** - Type messages like:
   - "I manage a $50M foundation and need 6% returns with low risk"
   - "What if inflation rises?"
   - "Show me a more conservative portfolio"

2. **AI Response** - Claude will respond with:
   - Recommended allocation percentages
   - Expected return and risk level
   - Brief explanation

3. **Portfolio Visualization** - A pie chart showing:
   - Stocks (blue)
   - Bonds (green)
   - Alternatives (amber)

---

## Demo Script (2-3 Minutes)

### Opening (30 seconds)
"This is a prototype of an AI-powered portfolio advisor for foundation trustees. Instead of waiting weeks for consultant reports, you just have a conversation."

### Demo (1.5 minutes)
**Type:** "I manage a $75M foundation. We need stable returns to support our 5% spending requirement."

**Show:** AI responds with allocation, pie chart appears

**Follow-up:** "What happens in a recession?"

**Show:** AI explains how portfolio would perform

### Close (30 seconds)
"This is day 1 of development. Imagine this with voice interface, backtesting, compliance monitoring. That's where we're headed."

---

## Troubleshooting

### npm install fails
Try: `npm cache clean --force` then `npm install` again

### Can't find module '@anthropic-ai/sdk'
Make sure package.json has been updated with the SDK. Run:
```bash
npm install @anthropic-ai/sdk recharts
```

### API key error
Double-check your .env.local file has the correct key format:
```
ANTHROPIC_API_KEY=sk-ant-api03-...
```

### Port 3000 already in use
Either:
1. Kill the process: `lsof -ti:3000 | xargs kill`
2. Use different port: `PORT=3001 npm run dev`

---

## Next Steps (After Demo)

If demo goes well:
1. Add voice interface (Wispr integration)
2. Add backtesting feature
3. Connect to real foundation data
4. Deploy to Vercel for live URL

**Timeline:** Voice + polish = 1-2 more days
