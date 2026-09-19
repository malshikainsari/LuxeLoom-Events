# LuxeLoom Events - Backend API

Node.js + Express + MongoDB backend for LuxeLoom Events platform.

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Create `.env` file
```bash
cp .env.example .env
```
Edit `.env` and fill in your values:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/luxeloom
JWT_SECRET=any_random_secret_string_here
```

### 3. Start the server
```bash
# Development (with auto-restart)
npm run dev

# Production
npm start
```

Server runs on: `http://localhost:5000`

---

## API Endpoints

### Auth
| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| POST | `/api/auth/register` | Create account | No |
| POST | `/api/auth/login` | Login | No |
| GET | `/api/auth/me` | Get current user | Yes |

### Vendors
| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| GET | `/api/vendors` | Get all vendors | No |
| GET | `/api/vendors?category=Venues` | Filter by category | No |
| GET | `/api/vendors?search=cake` | Search vendors | No |
| GET | `/api/vendors/:id` | Get single vendor | No |
| POST | `/api/vendors/seed` | Seed vendor data (run once) | No |

### Budget Tracker
| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| GET | `/api/budget` | Get my expenses | Yes |
| POST | `/api/budget` | Add expense | Yes |
| PUT | `/api/budget/:id` | Edit expense | Yes |
| DELETE | `/api/budget/:id` | Delete expense | Yes |

### Event Themes
| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| GET | `/api/themes/saved` | Get saved themes | Yes |
| POST | `/api/themes/save` | Save a theme | Yes |
| DELETE | `/api/themes/saved/:id` | Remove saved theme | Yes |

---

## Frontend Integration

Add `Authorization: Bearer <token>` header to protected routes.

Store token in localStorage after login:
```js
localStorage.setItem('token', data.token);
```

Send token with requests:
```js
const token = localStorage.getItem('token');
fetch('http://localhost:5000/api/budget', {
  headers: { Authorization: `Bearer ${token}` }
});
```

### Seed Vendors (run once after starting server)
```bash
curl -X POST http://localhost:5000/api/vendors/seed
```
