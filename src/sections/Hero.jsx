import React from 'react';
import profileImg from '../assets/Image1.jpg'; // ✅ Import your image

const Hero = () => (
  <section className="pt-32 pb-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
      
      {/* 🧍 Text Section */}
      <div className="text-center md:text-left flex-1" data-aos="fade-right">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Hi, I'm <span className="text-pink-600">Shibino Abraham</span><br />
          a Professional Coder.
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-md">
          Aspiring IT professional skilled in web design and development, data analytics, techncial writing. Passionate about solving problems, creating meaningful digital content, and continuous learning. Let's connect and collaborate!
    
        </p>
        <div className="mt-6">
          <a href="#portfolio" className="bg-pink-600 text-white px-6 py-3 rounded-full mr-4">View Portfolio</a>
          <a href="#contact" className="border border-pink-600 text-pink-600 px-6 py-3 rounded-full">Contact</a>
        </div>
      </div>

      {/* 🖼️ Image Section */}
      <div className="flex-1 flex justify-center" data-aos="fade-left">
        <img
          src={profileImg}
          alt="Profile"
          className="w-full max-w-sm object-cover"
        />
      </div>
    </div>
  </section>
);

export default Hero;

 