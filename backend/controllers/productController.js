const Product = require("../models/productModel");

// Add Product
const addProduct = (req, res) => {
    Product.addProduct(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Error adding product",
                error: err,
            });
        }

        res.status(201).json({
            message: "Product added successfully",
        });
    });
};

// Get All Products
const getAllProducts = (req, res) => {
    Product.getAllProducts((err, results) => {
        if (err) {
            return res.status(500).json({
                message: "Error fetching products",
                error: err,
            });
        }

        res.status(200).json({
            message: "Products fetched successfully",
            products: results,
        });
    });
};

// Update Product
const updateProduct = (req, res) => {
    const { id } = req.params;

    Product.updateProduct(id, req.body, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Error updating product",
                error: err,
            });
        }

        res.status(200).json({
            message: "Product updated successfully",
        });
    });
};

// Delete Product
const deleteProduct = (req, res) => {
    const { id } = req.params;

    Product.deleteProduct(id, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Error deleting product",
                error: err,
            });
        }

        res.status(200).json({
            message: "Product deleted successfully",
        });
    });
};

module.exports = {
    addProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
};