import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Furriyadh</h1>
        <nav>
          {/* Navigation links will go here */}
          <span className="mx-2">Home</span>
          <span className="mx-2">Dashboard</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;

