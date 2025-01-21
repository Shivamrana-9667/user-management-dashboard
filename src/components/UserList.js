// src/components/UserList.jsx
import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/api';
import UserForm from './UserForm'; // Importing UserForm component

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null); // Track the user to be edited

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers(); // Fetch users from the API
        setUsers(usersData);
      } catch (error) {
        alert('Error fetching users');
      }
    };

    fetchUsers(); // Fetch the users when the component mounts
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id); // Delete user from the API
      setUsers(users.filter((user) => user.id !== id)); // Update user list after deletion
    } catch (error) {
      alert('Error deleting user');
    }
  };

  const handleEdit = (user) => {
    setEditUser(user); // Set the selected user to edit
  };

  const handleAdd = () => {
    setEditUser(null); // Reset to add a new user
  };

  return (
    <div>
      <h2>User Management Dashboard</h2>
      <button onClick={handleAdd}>Add New User</button> {/* Button to open form for adding new user */}
      <UserForm user={editUser} setUsers={setUsers} /> {/* Pass editUser as a prop to UserForm */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>
              <strong>{user.name}</strong>
              <br />
              <span>{user.email}</span>
              <br />
              <span>{user.department}</span>
            </div>
            <div className="buttons-container">
              <button onClick={() => handleEdit(user)}>Edit</button> {/* Trigger Edit */}
              <button onClick={() => handleDelete(user.id)}>Delete</button> {/* Trigger Delete */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
