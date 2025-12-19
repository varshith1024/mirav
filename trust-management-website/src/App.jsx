import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Registration from './pages/Registration';
import Hospitals from './pages/Hospitals';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Login from './pages/Login';
import Access from './pages/Access';
import AdminRegister from './pages/AdminRegister';
import Volunteer from './pages/Volunteer';
import ScrollToTop from './components/layout/ScrollToTop';
import TestVolunteerID from './pages/TestVolunteerID';
function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop/>
        <div className="App min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/hospitals" element={<Hospitals />} />
              <Route path="/news" element={<News />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin-register" element={<AdminRegister />} /> 
              <Route path="/access" element={<Access />} /> 
              <Route path="/test-volunteer-id" element={<TestVolunteerID />} />

            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;