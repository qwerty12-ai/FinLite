# 🎯 FinLite — Frontend Finance Dashboard UI

[![Live demo](https://img.shields.io/badge/Live-Demo-brightgreen)](#)

**FinLite** is a frontend-only **React + Vite + Tailwind + Recharts** dashboard (no backend or database included). It is designed as a real-world UI project for visualizing transactions, balances, and spending insights with light/dark theme support.

> Built for speed and clarity: 100% client-side with local dataset and solid UI/UX behavior.

---

## ✨ Overview

FinLite provides:

- 📊 Income/expense summary cards
- 📈 Balance trend line chart
- 🥧 Category spend pie chart
- 🔄 Transaction sorting/filtering/search
- 🔐 Viewer/admin role UI state
- 🌗 Light & dark mode toggle
- 📱 Responsive layout for desktop/mobile

---

## 🔥 Features

| Feature | Description |
|--------|------------|
| Summary Cards | Total Income, Total Expense, and Balance metrics |
| Balance Trend Chart | Recharts line chart showing balance over time |
| Category Spending Chart | Recharts pie chart for expense categories |
| Transaction Table | Displays transactions with date, category, type, amount |
| Search & Sort | Search by category + sort by amount (asc/desc) |
| Filter | Filter transactions by all, income, or expense |
| Insights | Highest spending category + income vs expense status |
| Role Switch | Viewer/Admin mode with different UI controls |
| Theme Toggle | Light/dark mode support via Tailwind `dark:` classes |
| Responsive Design | Mobile-first layout optimized for all devices |
| Hover Effects | Interactive hover states on cards and table rows |
| Transitions | Smooth animations on interactions |
| No Backend | Frontend-only with local mock data in `src/data/transactions.js` |

---

## 🧠 Tech Stack

| Layer | Tech |
|------|------|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS |
| Charts | Recharts |
| Icons | React Icons |
| Linter | ESLint |

---

## ▶️ Run locally

1. Clone repo
```bash
git clone "https://github.com/qwerty12-ai/FinLite.git"
```
2. Install
```bash
npm install
```
3. Start dev server
```bash
npm run dev
```
4. Open `http://localhost:5173`

---

## 🧪 Build & Preview

- `npm run build`
- `npm run preview`

---

## 🛠️ Lint

- `npm run lint`

---

## 📁 Structure

- `src/App.jsx` - app wrapper, nav, theme/role toggles
- `src/pages/Dashboard.jsx` - dashboard layout + data pipeline
- `src/components/SummaryCard.jsx` - metric cards
- `src/components/BalanceChart.jsx` - line chart box
- `src/components/CategoryChart.jsx` - pie chart box
- `src/components/Insights.jsx` - expense insights and message
- `src/components/RoleInfo.jsx` - role controls
- `src/components/SearchSort.jsx` - search + sort UI
- `src/components/TransactionsTable.jsx` - transactions table
- `src/data/transactions.js` - seed transaction data

---

## 💡 Dark Mode

- Uses `dark` state in `App.jsx`.
- `document.documentElement.classList.toggle("dark", dark)` for Tailwind theme mode.
- Includes `dark:` styles on cards and inputs.

---

## 🧑‍💻 Author

**Mohd Abdul Sabeeh**  
Full-Stack Developer • Hyderabad  
📧 sabeeh.abdul@outlook.com  
🌐 [LinkedIn](https://www.linkedin.com/in/mohd-abdul-sabeeh-38429a2ba) • [GitHub](https://github.com/qwerty12-ai/)

---

## 🪪 License

MIT License