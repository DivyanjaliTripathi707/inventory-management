function Dashboard() {
  return (
    <div className="container-fluid">

      <h2 className="mb-4">Inventory Dashboard</h2>

      <div className="row">

        <div className="col-md-3 mb-4">
          <div className="card bg-primary text-white shadow">
            <div className="card-body">
              <h5>Total Products</h5>
              <h2>250</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card bg-success text-white shadow">
            <div className="card-body">
              <h5>Total Users</h5>
              <h2>15</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card bg-warning text-dark shadow">
            <div className="card-body">
              <h5>Low Stock</h5>
              <h2>8</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card bg-danger text-white shadow">
            <div className="card-body">
              <h5>Out of Stock</h5>
              <h2>4</h2>
            </div>
          </div>
        </div>

      </div>

      <div className="card shadow mt-4">
        <div className="card-header bg-dark text-white">
          Recent Products
        </div>

        <div className="card-body">

          <table className="table table-striped table-hover">

            <thead>
              <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>1</td>
                <td>Laptop</td>
                <td>Electronics</td>
                <td>25</td>
                <td>
                  <span className="badge bg-success">
                    In Stock
                  </span>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Mouse</td>
                <td>Accessories</td>
                <td>5</td>
                <td>
                  <span className="badge bg-warning text-dark">
                    Low Stock
                  </span>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>Keyboard</td>
                <td>Accessories</td>
                <td>0</td>
                <td>
                  <span className="badge bg-danger">
                    Out of Stock
                  </span>
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td>Monitor</td>
                <td>Electronics</td>
                <td>12</td>
                <td>
                  <span className="badge bg-success">
                    In Stock
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>
      </div>

    </div>
  );
}

export default Dashboard;