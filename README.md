# Juzzy — Crypto Trading Dashboard

Live market data, AI signals, paper trading, and a 55‑lesson Learn library.

## Features
- Real-time market data (CoinGecko, Binance, DexScreener)
- AI Brain activity stream with anomaly detection
- Interactive charts with resistance-line alerts
- Paper trading with portfolio banking rules
- 55 tutorials across 6 categories with AI assistant & TTS
- On‑chain execution via MetaMask + 0x (Base chain)

## Quick start
```bash
npm install
npm run dev
```
Visit http://localhost:5173

## Deploy to Railway
1. Push this repo to GitHub
2. Connect the repo to Railway
3. Set env vars (see .env.example)
4. Deploy 🚀

## Environment
Copy `.env.example` → `.env` and set:
- `STRIPE_SECRET_KEY` (test key ok)
- `STRIPE_PRICE_ID_WEEKLY` (create in Stripe)
- `STRIPE_SUCCESS_URL`/`STRIPE_CANCEL_URL` (your Railway URL)

## Learn more
Open the **Learn** tab for tutorials covering crypto basics, trading strategies, risk management, DeFi, using Juzzy, and advanced topics.
