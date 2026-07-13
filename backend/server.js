const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();   // <-- Ye pehle aayega

app.use(cors());
app.use(express.json());


app.use("/api/products", productRoutes); 
app.use("/api/users", userRoutes); 

app.get("/", (req, res) => {
    res.send("Electronics Inventory Management Backend is Running...");
});

const PORT = process.env.PORT || 5000;
app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(result);
  });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});