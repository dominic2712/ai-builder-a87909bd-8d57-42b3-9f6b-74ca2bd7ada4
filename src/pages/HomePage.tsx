import React from 'react';
import NavBar from '../components/NavBar';

const HomePage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <h1 className="text-3xl font-bold">Welcome to the AI Website</h1>
      <p className="mt-4">This website talks about AI.</p>
    </div>
  );
};

export default HomePage;