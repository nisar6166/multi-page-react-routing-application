import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { users } from './Users';

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find(u => u.id === parseInt(id));

  if (!user) return <p className="p-10">User not found!</p>;

  return (
    <div className="p-10 bg-white m-10 shadow rounded-lg">
      <h2 className="text-3xl font-bold mb-2">{user.name}</h2>
      <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-gray-600">Phone: {user.phone} </p>
      <p className="text-gray-600">User ID: {user.id}</p>
      <button 
        onClick={() => navigate('/users')}
        className="mt-6 bg-gray-500 text-white px-4 py-2 rounded"
      >
        Go Back
      </button>
    </div>
  );
};
export default UserDetail;