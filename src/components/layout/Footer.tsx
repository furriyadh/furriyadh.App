import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Furriyadh. All rights reserved.</p>
        {/* Additional footer links or info can go here */}
      </div>
    </footer>
  );
};

export default Footer;

