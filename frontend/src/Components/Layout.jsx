import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="d-flex">

      {/* Sidebar */}
      <div
        className="bg-dark text-white p-3 d-flex flex-column"
        style={{ width: "250px", minHeight: "100vh" }}
      >
        <h2 className="text-center mb-4">Inventory</h2>

        <ul className="nav flex-column">

          <li className="nav-item mb-2">
            <Link to="/dashboard" className="nav-link text-white">
              📊 Dashboard
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link to="/products" className="nav-link text-white">
              📦 Products
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link to="/add-product" className="nav-link text-white">
              ➕ Add Product
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link to="/users" className="nav-link text-white">
              👥 Users
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link to="/contact" className="nav-link text-white">
              📞 Contact
            </Link>
          </li>

        </ul>

        <div className="mt-auto">
          <Link to="/" className="btn btn-danger w-100">
            Logout
          </Link>
        </div>

      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4 bg-light">
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;