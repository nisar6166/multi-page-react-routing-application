import React from 'react';
import { Link } from 'react-router-dom';

const users = [
  { id: 1, name: 'Nisar', email: 'nsr@gmail.com', phone: '5896214736' },
  { id: 2, name: 'Karthik', email: 'krthk@gmail.com', phone: '9856231245' },
  { id: 3, name: 'Jaini', email: 'jni@gmail.com', phone: '7845126523' },
  { id: 1, name: 'Abhilash', email: 'ablsh@gmail.com', phone: '2563148796' },
  { id: 2, name: 'Ashif', email: 'asf@gmail.com', phone: '6523478925' },
  { id: 3, name: 'Anjali', email: 'anj@gmail.com', phone: '6523987451' },
  { id: 1, name: 'Parvathy', email: 'prv@gmail.com', phone: '9236948512' },
  { id: 2, name: 'Arsha', email: 'arh@gmail.com', phone: '9998886263' },
  { id: 3, name: 'Faris', email: 'frz@gmail.com', phone: '99988556622' },
];

const Users = () => (
  <div className="p-10">
    <h2 className="text-2xl font-bold mb-4">Users List</h2>
    <ul className="space-y-4">
      {users.map(user => (
        <li key={user.id} className="border p-4 rounded flex justify-between items-center bg-white shadow-sm">
          <span>{user.name}</span>
          <Link to={`/users/${user.id}`} className="text-blue-600 hover:underline">View Details</Link>
        </li>
      ))}
    </ul>
  </div>   
);
export default Users;
export { users }; // Exporting for use in UserDetail component