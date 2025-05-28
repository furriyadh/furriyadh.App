import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">Furriyadh</Link> {/* Link logo to home */}
        </h1>
        <nav className="hidden md:flex space-x-4">
          {/* Navigation links using React Router's Link */}
          <Link to="/" className="hover:text-gray-300">الرئيسية</Link>
          <Link to="/solutions" className="hover:text-gray-300">الحلول</Link>
          <Link to="/integrations" className="hover:text-gray-300">التكاملات</Link>
          <Link to="/pricing" className="hover:text-gray-300">الأسعار</Link>
          <Link to="/resources" className="hover:text-gray-300">الموارد</Link>
          <Link to="/contact" className="hover:text-gray-300">الاتصال</Link>
          <Link to="/test" className="hover:text-gray-300">(Test Page)</Link> {/* Keep test page link for now */}
        </nav>
        {/* TODO: Add mobile menu button here */}
        <div className="md:hidden">
          {/* Placeholder for mobile menu button */}
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

