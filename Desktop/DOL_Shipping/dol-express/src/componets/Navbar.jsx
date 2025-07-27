import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-yellow-500 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Dol Express</h1>
        <nav className="space-x-4 hidden md:block">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#tracking" className="hover:underline">Tracking</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;