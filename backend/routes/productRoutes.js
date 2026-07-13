const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");

const {
    addProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
} = require("../controllers/productController");

router.post("/", verifyToken, addProduct);
router.get("/", getAllProducts);
router.put("/:id", verifyToken, updateProduct);
router.delete("/:id", verifyToken, deleteProduct);

module.exports = router;