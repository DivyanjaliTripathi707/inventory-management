function Users() {
  const users = [
    {
      id: 1,
      name: "Admin",
      email: "admin@gmail.com",
      role: "Admin",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      role: "Manager",
    },
    {
      id: 3,
      name: "Priya Singh",
      email: "priya@gmail.com",
      role: "Staff",
    },
    {
      id: 4,
      name: "Aman Verma",
      email: "aman@gmail.com",
      role: "Staff",
    },
    {
      id: 5,
      name: "Neha Gupta",
      email: "neha@gmail.com",
      role: "Manager",
    }
  ];

  return (
    <div className="container-fluid">
      <h2 className="mb-4">Users</h2>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">
                  Edit
                </button>

                <button className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;