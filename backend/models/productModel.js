const db = require("../config/db");

// Add Product
const addProduct = (product, callback) => {
    const sql = `
        INSERT INTO products
        (product_name, brand, category, model, color, price, quantity, supplier, warranty, description)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            product.product_name,
            product.brand,
            product.category,
            product.model,
            product.color,
            product.price,
            product.quantity,
            product.supplier,
            product.warranty,
            product.description,
        ],
        callback
    );
};

// Get All Products
const getAllProducts = (callback) => {
    const sql = "SELECT * FROM products";
    db.query(sql, callback);
};

// Update Product
const updateProduct = (id, product, callback) => {
    const sql = `
        UPDATE products
        SET
            product_name = ?,
            brand = ?,
            category = ?,
            model = ?,
            color = ?,
            price = ?,
            quantity = ?,
            supplier = ?,
            warranty = ?,
            description = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [
            product.product_name,
            product.brand,
            product.category,
            product.model,
            product.color,
            product.price,
            product.quantity,
            product.supplier,
            product.warranty,
            product.description,
            id,
        ],
        callback
    );
};

// Delete Product
const deleteProduct = (id, callback) => {
    const sql = "DELETE FROM products WHERE id = ?";

    db.query(sql, [id], callback);
};

module.exports = {
    addProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
};