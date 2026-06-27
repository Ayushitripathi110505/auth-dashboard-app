# Authentication Dashboard

A full-stack authentication system built with the MERN stack that demonstrates secure user authentication, JWT-based authorization, protected routes, and a responsive dashboard. This project was developed to understand authentication workflows commonly used in modern web applications.

---

# 🚀 Features

* User Registration
* User Login
* JWT Authentication
* Password Hashing using bcrypt
* Protected Dashboard
* Persistent User Sessions
* Logout Functionality
* React Context for Authentication State
* Axios Interceptors
* Responsive UI

---

# 🛠 Tech Stack

## Frontend

* React.js
* React Router
* Context API
* Axios
* Tailwind CSS

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt

---

# 🔐 Authentication Flow

1. User registers with name, email, and password.
2. Password is securely hashed using **bcrypt**.
3. User logs in with valid credentials.
4. Server generates a **JWT token**.
5. Token is stored on the client.
6. Axios automatically attaches the token to protected requests.
7. Backend middleware verifies the token before granting access.
8. Authenticated users can access the dashboard.

---

# 📡 REST APIs

Implemented authentication APIs including:

* Register User
* Login User
* Get Current User
* Verify Authentication
* Logout *(Frontend)*

---

# 📂 Project Structure

```text
client/
│── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── services/
│   └── App.jsx

server/
│── controllers/
│── middleware/
│── models/
│── routes/
│── config/
└── server.js
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/yourusername/authentication-dashboard.git
```

Backend

```bash
cd server
npm install
```

Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend

```bash
npm start
```

Frontend

```bash
cd client
npm install
npm run dev
```

---

# 🔑 Key Concepts Learned

* JWT Authentication
* Password Hashing with bcrypt
* Authentication Middleware
* Protected Routes
* React Context API
* Axios Interceptors
* REST API Development
* MongoDB Integration
* Full-Stack Authentication Flow

---

# 📈 Future Improvements

* Email Verification
* Forgot Password
* Password Reset
* OAuth Login (Google/GitHub)
* Refresh Tokens
* Role-Based Authorization
* Profile Management
* Two-Factor Authentication (2FA)

---

# 👩‍💻 Author

**Ayushi Tripathi**

GitHub: https://github.com/Ayushitripathi110505
