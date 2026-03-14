const express = require("express");
const path = require("path");
const router = express.Router();
const { isAuthenticated, isUser } = require("../authentication/authMiddleware");
const Blog = require("../models/Blogs");
// User Dashboard
router.get("/dashboard", isAuthenticated, isUser, (req, res) => {
  res.render("user-dashboard", { user: req.session.user });
});

// About Page
router.get("/about", isAuthenticated, isUser, (req, res) => {
  res.render("about", { user: req.session.user });
});

// Notebook Page
router.get("/notebook", isAuthenticated, isUser, async (req, res) => {
  try {
    const blogs = await Blog.find({ userId: req.session.user.id })
      .sort({ createdAt: -1 });

    res.render("notebook", { blogs });
  } catch (err) {
    res.status(500).send(err.message);
  }
});
// Save Blog
router.post("/notebook", isAuthenticated, isUser, async (req, res) => {
  try {
    const { content } = req.body;

    await Blog.create({
      userId: req.session.user.id,
      content
    });

    res.redirect("/user/notebook");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;