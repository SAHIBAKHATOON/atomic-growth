import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  addUser,
  updateUser,
  deleteUser,
} from "./usersSlice";


 import "../../App.css";

 const UsersTable = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAdd = () => {
    if (!name) return;
    dispatch(
      addUser({
        id: Date.now(),
        name,
        email: "newuser@mail.com",
      })
    );
    setName("");
  };

  const handleUpdate = (user) => {
    dispatch(
      updateUser({
        ...user,
        name: name || user.name,
      })
    );
    setEditingId(null);
    setName("");
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }} className="dashboard">
      <h2>User Dashboard</h2>

      {/* CREATE */}
      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Add User</button>

      {/* TABLE */}
      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {editingId === user.id ? (
                  <input
                    defaultValue={user.name}
                    onChange={(e) => setName(e.target.value)}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>{user.email}</td>
              <td>
                {editingId === user.id ? (
                  <button onClick={() => handleUpdate(user)}>
                    Save
                  </button>
                ) : (
                  <button onClick={() => setEditingId(user.id)}>
                    Edit
                  </button>
                )}
                <button onClick={() => dispatch(deleteUser(user.id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
