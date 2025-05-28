import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import './i18n';
import './styles/globals.css';
import './styles/responsive.css';

// استيراد الصفحات
import HomePage from './pages/HomePage';
import Solutions from './pages/Solutions';
import Integrations from './pages/Integrations';
import Resources from './pages/Resources';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  // تأثير لتعيين لون الخلفية للصفحة بالكامل
  useEffect(() => {
    document.body.className = 'bg-blue-950';
    document.body.style.color = 'white';
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
