import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/create" className="mr-4">Create</Link>
      </div>
    </nav>
  );
};

export default NavBar;