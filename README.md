<div align="center">

#  LuxeLoom Events
### AI-Powered Event Planning Platform

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Auth-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

**Plan smarter. Celebrate better.**

[Live Demo](https://luxe-loom-events.vercel.app) · [Report Bug](https://github.com/malshikainsari/LuxeLoom-Events/issues)

</div>

---

## 📌 Overview

**LuxeLoom Events** is a full-stack AI-powered event planning platform that brings together AI-generated event themes, a curated vendor marketplace, and real-time budget tracking — all in one place. Built as an individual project to demonstrate full-stack development with RESTful APIs, MongoDB Atlas, Firebase Authentication, and a modern React frontend.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Authentication** | Secure login and registration via Google Sign-In and Email/Password using Firebase Auth |
| 🎨 **AI Event Theme Generator** | Generates 4 personalized event themes using the Groq AI API (LLaMA model) based on event type, guests, budget, date, and location |
| 🏪 **Vendor Marketplace** | Browse and search verified vendors across 6 categories — Venues, Catering, Photographers, DJs, Bakery, and Florists |
| 💰 **Budget Tracker** | Add, edit, and delete expenses with a live pie chart — data persisted per user in MongoDB |
| 🛡️ **Protected Routes** | Dashboard and all inner pages require authentication — unauthenticated users are redirected to Sign In |
| 📊 **Dashboard** | Personalized welcome with user's name, animated feature cards, and logout |

---

## 🛠️ Tech Stack

### Frontend
- **React 19** with React Router DOM v7
- **Firebase SDK** — Google Sign-In & Email/Password Auth
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **Recharts** for budget pie chart visualization
- **React Icons** for UI icons
- **Vite 6** as the build tool

### Backend
- **Node.js** with **Express.js**
- **MongoDB Atlas** with **Mongoose**
- **Firebase Admin SDK** for verifying Firebase ID tokens
- **Groq AI API** (LLaMA model via OpenAI-compatible SDK) for AI theme generation

---

## 📂 Project Structure

```
LuxeLoom-Events/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Header.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── SignUp.jsx
│   │   │   ├── SignIn.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── EventThemeGenerator.jsx
│   │   │   ├── VendorMarketplace.jsx
│   │   │   └── BudgetTracker.jsx
│   │   ├── Pictures/
│   │   └── firebase.js
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── luxeloom-backend/
    ├── models/
    │   ├── Vendor.js
    │   ├── Expense.js
    │   └── SavedTheme.js
    ├── routes/
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
- MongoDB Atlas account
- Firebase project with Authentication enabled (Google + Email/Password)
- Groq API key — [console.groq.com](https://console.groq.com) (free tier available)

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
MONGO_URI=your_mongodb_atlas_connection_string
GROQ_API_KEY=your_groq_api_key

FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

> Get Firebase credentials: Firebase Console → Project Settings → Service Accounts → Generate new private key

Start the server:

```bash
npm run dev    # Development
npm start      # Production
```

> Runs on `http://localhost:5000`

Seed vendor data (once after first start):

```bash
curl -X POST http://localhost:5000/api/vendors/seed
```

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Add your Firebase config to `src/firebase.js`:

```js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
```

```bash
npm run dev
```

> Runs on `http://localhost:5173`

---

## 🔌 API Endpoints

### Vendors — `/api/vendors`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Get all vendors |
| `GET` | `/?category=Venues` | Filter by category |
| `GET` | `/?search=cake` | Search vendors |
| `POST` | `/seed` | Seed vendor data *(run once)* |

### Budget Tracker — `/api/budget` *(protected)*

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Get logged-in user's expenses |
| `POST` | `/` | Add a new expense |
| `PUT` | `/:id` | Edit an expense |
| `DELETE` | `/:id` | Delete an expense |

### Event Themes — `/api/themes`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/generate` | Generate 4 AI themes via Groq API |
| `GET` | `/saved` | Get saved themes *(protected)* |
| `POST` | `/save` | Save a theme *(protected)* |
| `DELETE` | `/saved/:id` | Remove a saved theme *(protected)* |

---

## 🖥️ Pages

| Route | Page | Auth Required |
|-------|------|---------------|
| `/` | Home Page | No |
| `/signup` | Sign In | No |
| `/signin` | Sign Up | No |
| `/dashboard` | Dashboard | ✅ Yes |
| `/themegenerator` | AI Theme Generator | ✅ Yes |
| `/vendor` | Vendor Marketplace | ✅ Yes |
| `/budgettracker` | Budget Tracker | ✅ Yes |

---

## 👩‍💻 Author

**Malshika Insari**
Software Engineering Undergraduate — Sabaragamuwa University of Sri Lanka

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/malshika-insari-b4833a2b7)
[![Portfolio](https://img.shields.io/badge/Portfolio-malshika.me-FF5722?style=flat&logo=google-chrome&logoColor=white)](https://malshika.me)

---

<div align="center">

⭐ If you found this project useful, please consider giving it a star!

</div>