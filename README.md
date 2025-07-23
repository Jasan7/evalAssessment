# Real-Time BTC/USDT Price Tracker

A React-based application that connects to the Binance WebSocket API to display real-time BTC/USDT trade prices.

## Features

- **Live price updates** via WebSocket
- **Search functionality** to look up different coins
- **Auto-updating** UI with color-coded indicators (up/down/neutral)
- **Tailwind CSS for sleek styling**
- **Deployed on Vercel** for easy access
- Clean React architecture with `useEffect` and `useRef` for WebSocket lifecycle handling

## Try It Live

[Live App on Vercel](https://eval-assessment.vercel.app/)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

```

### 2. Install Dependencies

```bash
npm install

```
### 3. Start the app

```bash
npm run dev

```
Then visit http://localhost:5173 in your browser.

## Technologies Used

- React
- JavaScript
- [Binance](https://github.com/binance/binance-spot-api-docs) and [Coingecko](https://www.coingecko.com/en/api) WebSocket API
- Tailwind CSS 
- Vercel (for deployment) 