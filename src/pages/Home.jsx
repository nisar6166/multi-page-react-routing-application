import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="p-10 text-center">
    <h1 className="text-4xl font-bold mb-4">User Directory Management System</h1>
    <p className="text-xl text-gray-700 mb-8 leading-relaxed">
      This application is designed to efficiently manage and view user information. 
      The primary goal of this project is to create a dynamic directory where you can 
      list all users and click on each profile to see their specific details like 
      Email and User ID using <strong>React Router</strong>.
    </p>
    <div className="space-x-4">
      <Link to="/about" className="bg-blue-500 text-white px-4 py-2 rounded">About Page</Link>
      <Link to="/users" className="bg-green-500 text-white px-4 py-2 rounded">View Users</Link>
    </div>
  </div>
);
export default Home;