// src/components/UserForm.jsx
import React, { useState, useEffect } from 'react';
import { addUser, editUser } from '../services/api';

const UserForm = ({ user, setUsers }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
  });

  // Update form data when the user prop changes
  useEffect(() => {
    if (user) {
      setFormData({ ...user });
    } else {
      setFormData({ name: '', email: '', department: '' }); // Reset form for new user
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user) {
        // Edit an existing user
        const updatedUser = await editUser(user.id, formData);
        setUsers((prevUsers) =>
          prevUsers.map((u) => (u.id === updatedUser.id ? updatedUser : u))
        );
      } else {
        // Add a new user
        const newUser = await addUser(formData);
        setUsers((prevUsers) => [...prevUsers, newUser]);
      }
      alert(user ? 'User updated successfully' : 'User added successfully');
      setFormData({ name: '', email: '', department: '' }); // Reset the form after submit
    } catch (error) {
      alert('Error saving user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="department"
        value={formData.department}
        onChange={handleChange}
        placeholder="Department"
        required
      />
      <button type="submit">{user ? 'Update User' : 'Add User'}</button>
    </form>
  );
};

export default UserForm;
