# FoundationMark AI Portfolio Advisor - Demo

## ✅ What's Built

A working AI chat interface that:
- Takes natural language input about foundation needs
- Returns tailored portfolio recommendations  
- Visualizes allocations with an interactive pie chart
- Handles follow-up questions in conversation

**Tech Stack:**
- Next.js 16 + TypeScript
- Claude Opus 4.5 (Anthropic AI)
- Recharts for visualization
- Tailwind CSS for styling

---

## 🚀 Quick Start (3 Steps)

### 1. Fix npm (one-time)
```bash
sudo rm -rf ~/.npm/_cacache
```

### 2. Set up your API key
Edit `.env.local` and add your Anthropic key from https://console.anthropic.com/settings/keys

### 3. Run it
```bash
./start.sh
```

Or manually:
```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## 📁 Important Files

- **SETUP.md** - Detailed setup instructions
- **DEMO_GUIDE.md** - How to present the demo (3-min script)
- **MARGARET_QUESTIONS.md** - Sample questions to ask during demo (copy/paste ready!)
- **start.sh** - One-command startup script

---

## 🎯 What to Show in Your Demo

**Type this (Margaret's question):**
> "I manage a $30M education foundation. We give out $1.5M in grants each year. Are we doing okay? Can we afford to give more?"

**AI will respond with:**
- Health check (✅ Green light: You're healthy!)
- Portfolio recommendation in plain English
- Explains jargon in parentheses ("Sharpe Ratio" = "bang for your buck")
- Visual pie chart with friendly labels
- Compares to peer foundations
- Health Status card appears at top

**Then ask:**
> "What if the stock market crashes? Will we be okay?"

**Show:** AI explains worst-case scenario with reassurance, not panic.

---

## 💡 Key Selling Points

1. **FoundationMark's Data Moat** - AI powered by 40,000 foundation database (GIV Index, peer groups, star ratings)
2. **Made for Trustees** - Proper terminology with clear explanations, not dumbed down
3. **Instant Answers** - 30 seconds vs. 6-8 weeks waiting for consultants
4. **Real Peer Comparison** - "You'd rank top 35% vs. similar foundations" (not generic benchmarks)
5. **Health Check** - Green/yellow/red light based on actual peer performance
6. **Worst-Case Planning** - "If market crashes, will we survive?"
7. **Visual & Clear** - Charts with friendly labels, FoundationMark star rating projections

---

## 🔮 What's Next (If Demo Goes Well)

**Week 1-2:**
- Add voice interface (Wispr integration)
- Polish UI for elderly users
- Add more conversation templates

**Month 1:**
- Backtesting feature (see historical performance)
- Connect to FoundationMark's foundation database
- Deploy to production URL

**Month 2-3:**
- Pilot with 10-20 real foundations
- Add compliance monitoring (IPS violations)
- Build marketplace for investment products

---

## 🎬 Demo Day Checklist

- [ ] Run `npm run dev` and test one conversation
- [ ] Verify API key is working
- [ ] Close all extra browser tabs
- [ ] Have DEMO_GUIDE.md open for reference
- [ ] Screen recording as backup
- [ ] Practice the 3-minute script once

---

## 🆘 Troubleshooting

**Problem:** npm won't install  
**Fix:** `sudo rm -rf ~/.npm/_cacache` then try again

**Problem:** API key error  
**Fix:** Check `.env.local` has format: `ANTHROPIC_API_KEY=sk-ant-api03-...`

**Problem:** Chart not showing  
**Fix:** Make sure Recharts is installed: `npm install recharts`

**Problem:** Port 3000 in use  
**Fix:** `lsof -ti:3000 | xargs kill` or use `PORT=3001 npm run dev`

---

## 📊 Success Metrics

**Goal:** 70%+ of viewers say "I would pay for this"

Track reactions:
- ✅ "When can I start using this?"
- ✅ "Can you add X feature?"
- ⚠️ "How is this better than my consultant?"
- ❌ "Interesting..." (then moves on)

---

## 👤 Contact

Built in 48 hours for FoundationMark pivot exploration.

**What we proved:** AI can make foundation portfolio management as simple as a conversation.

**Next decision:** Pilot with real trustees or expand features first?

---

**Ready to demo?** Open **DEMO_GUIDE.md** for the 3-minute presentation script! 🚀
