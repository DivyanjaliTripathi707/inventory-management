import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./Components/Layout";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Users from "./pages/Users";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      {/* Login Page */}
      <Route path="/" element={<Login />} />

      {/* Layout with Sidebar */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/users" element={<Users />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Redirect unknown URLs */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;