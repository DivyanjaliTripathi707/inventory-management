function Users() {
  return (
    <>
      <h1>Users</h1>

      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Admin</td>
            <td>admin@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Users;