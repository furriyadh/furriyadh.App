import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';

// Import Page Components (Placeholders for now - will be created next)
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import IntegrationsPage from './pages/IntegrationsPage';
import PricingPage from './pages/PricingPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import ComponentTestPage from './pages/ComponentTestPage'; // Keep the test page

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* TODO: Add toggle button in Header */}
      <Header />
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} />
        <main className={`flex-1 p-4 ${isSidebarOpen ? 'ml-64' : ''} transition-all duration-300 ease-in-out`}>
          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/integrations" element={<IntegrationsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/test" element={<ComponentTestPage />} /> {/* Keep test page route */}
            {/* Add other routes as needed */}
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;

