import React from 'react';

const Header = () => (
  <header className="p-6 shadow-md bg-white fixed top-0 left-0 right-0 z-50">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold text-[#14523d]">Shibino Abraham</h1>
      <nav className="space-x-6 text-base text-[#14523d]">
        <a href="#services">What I Do</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#blog">Blog</a>
        {/* <a href="#resume">Resume</a> */}
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;
