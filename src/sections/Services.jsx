import React from 'react';
import { Briefcase, Code, Smartphone } from 'lucide-react';

const services = [
  { icon: <Briefcase size={24} />, title: "Business Strategy", desc: "Helping businesses build strong tech foundations." },
  { icon: <Code size={24} />, title: "App Development", desc: "Building responsive and modern applications." },
  { icon: <Smartphone size={24} />, title: "Mobile Apps", desc: "Creating seamless mobile experiences." }
];

const Services = () => (
  <section id="services" className="py-20 bg-white text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">What I Do</h2>
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      {services.map((service, i) => (
        <div key={i} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
          <div className="text-pink-600 mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
