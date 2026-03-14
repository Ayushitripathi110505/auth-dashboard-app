const express = require("express");
const session = require("express-session");
const path = require("path");

const authRoutes = require("./routers/authRoutes");
const userRoutes = require("./routers/userRoutes");
const adminRoutes = require("./routers/adminRoutes");

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/**👉 Reads form data
👉 Converts it into JavaScript object
👉 Stores it inside req.body
👉 So you can access form values in your routes */

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false
  })
);
/**Option	Meaning
resave: false	Don’t save session if nothing changed
saveUninitialized: false	Don’t create session until something is stored */
// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ---------------------------
// ROOT PAGE - Role Selection
// ---------------------------
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "role-selection.html"));
});

/**✅ Use res.send() when:
Building APIs
Sending JSON
Sending simple response
✅ Use res.render() when:
Using EJS/Pug
Creating dynamic pages
Building full-stack web app */

/**What does “API project” mean?

An API project is a backend application that:

👉 Only sends and receives data (usually JSON)
👉 Does NOT send HTML pages
👉 Is used by frontend apps, mobile apps, or other services */
// ---------------------------
// HANDLE ROLE SELECTION POST
// ---------------------------
app.post("/role/select", (req, res) => {
  const { role } = req.body;
  res.redirect(`/auth/login?role=${role}`); // redirect to login page for the chosen role
});

// ---------------------------
// ROUTERS
// ---------------------------
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

// ---------------------------
// LOGOUT ROUTE
// ---------------------------
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/"); // back to role selection
  });
});

/**Before Logout
req.session = {
   user: { id: 1, name: "Ayushi" }
}
After Logout
req.session = null
User must login again. */

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});