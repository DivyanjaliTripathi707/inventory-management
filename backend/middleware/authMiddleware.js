const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    // Request headers se token nikalna
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // "Bearer TOKEN_STRING" se token alag karna

    if (!token) {
        return res.status(403).json({ message: "Access Denied: No Token Provided" });
    }

    try {
        // Token ko verify karna (Wahi secret key use karein jo controller mein thi)
        const verified = jwt.verify(token, process.env.JWT_SECRET || "secretkey123");
        req.user = verified; // User payload ko request object mein attach karna
        next(); // Agle middleware ya controller par bhejna
    } catch (err) {
        return res.status(401).json({ message: "Invalid or Expired Token" });
    }
};

module.exports = verifyToken;