const express = require("express");
const router = express.Router();
const path = require("path");

const { isAuthenticated, isAdmin } = require("../authentication/authMiddleware");

router.get("/dashboard", isAuthenticated, isAdmin, (req, res) => {
  res.sendFile(path.join(__dirname, "../views/admin-dashboard.html"));
});

module.exports = router;