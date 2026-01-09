import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav className="bg-slate-800 p-4 text-white flex gap-6 justify-center shadow-lg">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-400 font-bold border-b-2 border-orange-400" : "hover:text-gray-300"}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-orange-400 font-bold border-b-2 border-orange-400" : "hover:text-gray-300"}>About</NavLink>
        <NavLink to="/users" className={({ isActive }) => isActive ? "text-orange-400 font-bold border-b-2 border-orange-400" : "hover:text-gray-300"}>Users</NavLink>
    </nav>
);
export default Navbar;