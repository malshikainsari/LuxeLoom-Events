<div align="center">

# LuxeLoom Events
### AI-Powered Event Planning Platform

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

**Plan smarter. Celebrate better.**

[Live Demo](https://luxe-loom-events.vercel.app) · [Report Bug](https://github.com/malshikainsari/LuxeLoom-Events/issues)

</div>

---

## 📌 Overview

**LuxeLoom Events** is a full-stack event planning platform that brings together AI-generated event themes, a curated vendor marketplace, and real-time budget tracking — all in one place. Built as an individual project to demonstrate full-stack development with RESTful APIs, MongoDB, and a modern React frontend.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **AI Event Theme Generator** | Generate curated visual themes based on event type, guest count, budget range, date, and location |
| 🏪 **Vendor Marketplace** | Browse and search verified vendors across 6 categories — Venues, Catering, Photographers, DJs, Bakery, and Florists |
| 💰 **Budget Tracker** | Add, edit, and delete expenses with a live pie chart showing cost breakdown |
| 🔐 **User Authentication** | Secure registration and login with JWT-based session management |
| 📊 **Dashboard** | Central hub to navigate all features with animated cards |

---

## 🛠️ Tech Stack

### Frontend
- **React 19** with React Router DOM v7
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **Recharts** for budget visualization
- **React Icons** for UI icons
- **Vite 6** as the build tool

### Backend
- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** (jsonwebtoken) for authentication
- **bcryptjs** for password hashing

---

## 📂 Project Structure

```
LuxeLoom-Events/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Header.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── SignUp.jsx
│   │   │   ├── SignIn.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── EventThemeGenerator.jsx
│   │   │   ├── VendorMarketplace.jsx
│   │   │   └── BudgetTracker.jsx
│   │   └── Pictures/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── luxeloom-backend/
    ├── models/
    │   ├── User.js
    │   ├── Vendor.js
    │   ├── Expense.js
    │   └── SavedTheme.js
    ├── routes/
    │   ├── authRoutes.js
    │   ├── vendorRoutes.js
    │   ├── budgetRoutes.js
    │   └── themeRoutes.js
    ├── middleware/
    │   └── authMiddleware.js
    └── server.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

---

### 1. Clone the repository

```bash
git clone https://github.com/malshikainsari/LuxeLoom-Events.git
cd LuxeLoom-Events
```

---

### 2. Backend Setup

```bash
cd luxeloom-backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/luxeloom
JWT_SECRET=your_secret_key_here
```

Start the backend server:

```bash
npm run dev       # Development (nodemon)
npm start         # Production
```

> Server runs on `http://localhost:5000`

Seed the vendor data (run once after first start):

```bash
curl -X POST http://localhost:5000/api/vendors/seed
```

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

> App runs on `http://localhost:5173`

---

## 🔌 API Endpoints

### Auth — `/api/auth`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/register` | Create a new account |
| `POST` | `/login` | Login and receive JWT |
| `GET` | `/me` | Get logged-in user info *(protected)* |

### Vendors — `/api/vendors`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Get all vendors |
| `GET` | `/?category=Venues` | Filter by category |
| `GET` | `/?search=cake` | Search vendors by name or type |
| `GET` | `/:id` | Get a single vendor |
| `POST` | `/seed` | Seed vendor data into DB *(run once)* |

### Budget Tracker — `/api/budget` *(all protected)*

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Get all expenses for logged-in user |
| `POST` | `/` | Add a new expense |
| `PUT` | `/:id` | Edit an existing expense |
| `DELETE` | `/:id` | Delete an expense |

### Event Themes — `/api/themes` *(all protected)*

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/saved` | Get user's saved themes |
| `POST` | `/save` | Save a generated theme |
| `DELETE` | `/saved/:id` | Remove a saved theme |

---

## 🖥️ Pages

| Route | Page |
|-------|------|
| `/` | Home Page |
| `/signup` | Create Account |
| `/signin` | Login |
| `/dashboard` | User Dashboard |
| `/themegenerator` | AI Event Theme Generator |
| `/vendor` | Vendor Marketplace |
| `/budgettracker` | Budget Tracker |

---

## 🌐 Live Demo

[https://luxe-loom-events.vercel.app](https://luxe-loom-events.vercel.app)

---


<div align="center">

⭐ If you found this project useful, please consider giving it a star!

</div>