import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';
import ComponentTestPage from './pages/ComponentTestPage'; // Import the test page

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Example state for sidebar

  // Basic toggle function for sidebar (can be triggered by a button in Header later)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* TODO: Add a button or mechanism in Header to toggle sidebar */}
      {/* Example: <button onClick={toggleSidebar}>Toggle Sidebar</button> */}
      <Header />
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} />
        <main className={`flex-1 p-4 ${isSidebarOpen ? 'ml-64' : ''} transition-all duration-300 ease-in-out`}>
          {/* Main content area */}
          <h2 className="text-2xl font-semibold mb-4">Main Content Area</h2>
          <p>This is where the main application content will go.</p>
          <hr className="my-8" />
          {/* Render the component test page */}
          <ComponentTestPage />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
