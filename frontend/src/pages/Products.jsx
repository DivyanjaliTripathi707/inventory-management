import React from "react";

function Products() {
  const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, qty: 10, status: "In Stock" },
    { id: 2, name: "Mouse", category: "Accessories", price: 500, qty: 25, status: "In Stock" },
    { id: 3, name: "Keyboard", category: "Accessories", price: 1200, qty: 15, status: "In Stock" },
    { id: 4, name: "Monitor", category: "Electronics", price: 12000, qty: 8, status: "Low Stock" },
    { id: 5, name: "Printer", category: "Office", price: 8500, qty: 5, status: "Low Stock" },
    { id: 6, name: "Scanner", category: "Office", price: 7000, qty: 12, status: "In Stock" }
  ];

  return (
    <div className="container-fluid p-4">
      <h2 className="mb-4">Products</h2>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>₹{product.price}</td>
              <td>{product.qty}</td>
              <td>
                <span
                  className={
                    product.status === "In Stock"
                      ? "badge bg-success"
                      : "badge bg-warning text-dark"
                  }
                >
                  {product.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;