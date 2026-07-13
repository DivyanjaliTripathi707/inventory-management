const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");

const {
  registerUser,
  loginUser,
  getUserProfile
} = require("../controllers/userController");
console.log("VerifyToken middleware loaded:", verifyToken); // Debugging line to check if middleware is loaded
console.log("GetUserProfile function loaded:", getUserProfile); // Debugging line to check if controller function is loaded

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", verifyToken, getUserProfile);
module.exports = router;