const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ==========================================
// 1. Register User
// ==========================================
const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        User.findUserByEmail(email, async (err, results) => {
            if (err) {
                return res.status(500).json({ message: "Database Error" });
            }

            if (results && results.length > 0) {
                return res.status(400).json({ message: "Email already exists" });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            User.createUser({ name, email, password: hashedPassword, role }, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "Error creating user" });
                }
                res.status(201).json({ message: "User registered successfully" });
            });
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// ==========================================
// 2. Login User
// ==========================================
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        User.findUserByEmail(email, async (err, results) => {
            if (err) {
                return res.status(500).json({ message: "Database Error" });
            }

            if (!results || results.length === 0) {
                return res.status(404).json({ message: "User not found" });
            }

            const user = results[0];
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ message: "Invalid credentials" });
            }

            const token = jwt.sign(
                { id: user.id, role: user.role },
                process.env.JWT_SECRET || "fallback_secret",
                { expiresIn: "1h" }
            );

            res.status(200).json({
                message: "Login successful",
                token,
                user: { id: user.id, name: user.name, email: user.email, role: user.role }
            });
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// ==========================================
// 3. Get User Profile (Secure)
// ==========================================
const getUserProfile = async (req, res) => {
    try {
        // Auth middleware se req.user mein data aa chuka hai
        const userId = req.user.id; 

        User.findUserById(userId, (err, results) => {
            if (err) {
                return res.status(500).json({ message: "Database Error" });
            }

            if (!results || results.length === 0) {
                return res.status(404).json({ message: "User profile not found" });
            }

            const user = results[0];
            // Security ke liye password hide karke bhej rahe hain
            res.status(200).json({
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            });
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// ==========================================
// Exports (Sabhi functions ko export kiya)
// ==========================================
module.exports = {
    registerUser,
    loginUser,
    getUserProfile
};