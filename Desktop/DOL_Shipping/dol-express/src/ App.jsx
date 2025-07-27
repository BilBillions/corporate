import Tracking from "./components/Tracking";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Tracking />
    </div>
  );
}
import React from 'react';
import HeroSection from '../React/components/HeroSection';
import Services from '../React/components/Services';
import Tracking from './componets/Tracking';
import ContactForm from '../React/components/ContactForm';
import Footer from '../React/components/Footer';

function App() {
  return (
    <div className="bg-white text-gray-800">
      <header className="bg-yellow-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Dol Express</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#tracking" className="hover:underline">Tracking</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <HeroSection />
      <Services />
      <Tracking />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
