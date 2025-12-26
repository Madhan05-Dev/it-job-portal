import AdminLayout from "../../layouts/AdminLayout";
import { getUsers } from "../../utils/storage";

export default function ManageUsers() {
  const users = getUsers();

  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((u, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded shadow"
          >
            <p><b>Name:</b> {u.name}</p>
            <p><b>Email:</b> {u.email}</p>
            <p><b>Role:</b> {u.role}</p>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
