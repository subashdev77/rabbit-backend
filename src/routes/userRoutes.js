const express = require("express");
const userController = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Register a new user
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/profile", protect, userController.getUser);

module.exports = router;
