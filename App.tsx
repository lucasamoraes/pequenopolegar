import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import About from './pages/About';
import EducationPage from './components/EducationPage';
import Matricula from './pages/Matricula';
import { EDUCATION_LEVELS } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-escola" element={<About />} />
          <Route path="/matricula" element={<Matricula />} />
          
          {/* Dynamic Routes for Education Levels */}
          {EDUCATION_LEVELS.map((level) => (
            <Route 
              key={level.id}
              path={level.slug}
              element={<EducationPage data={level} />}
            />
          ))}
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;