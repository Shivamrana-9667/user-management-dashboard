// src/services/api.js

export const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  };
  
  export const addUser = async (user) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  };
  
  export const editUser = async (id, user) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  };
  
  export const deleteUser = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    });
  };
  