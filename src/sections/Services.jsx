import React from 'react';
import {
  Code,
  PenLine,
  LayoutTemplate,
  Table,
  MonitorSmartphone,
  FileText,
} from 'lucide-react';

const services = [
  {
    icon: <Code size={28} />,
    title: "Full-Stack Web Development",
    desc: "Building complete, scalable web applications  from responsive frontend interfaces to robust backend APIs.",
  },
  {
    icon: <PenLine size={28} />,
    title: "Technical & Social Blogging",
    desc: "Writing insightful blogs on technology and social topics to educate, inspire, and engage readers.",
  },
  {
    icon: <LayoutTemplate size={28} />,
    title: "Creative Brochure Design",
    desc: "Designing eye-catching digital brochures and marketing materials with clean visuals and effective messaging.",
  },
  {
    icon: <Table size={28} />,
    title: "Business & Tech Support",
    desc: "Solving business problems through efficient Excel automation, dashboards, data analysis, and reporting.",
  },
  {
    icon: <MonitorSmartphone size={28} />,
    title: "UI/UX Design",
    desc: "Crafting intuitive, modern, and user-friendly interface designs that enhance user experience.",
  },
  {
    icon: <FileText size={28} />,
    title: "Content Strategy & Documentation",
    desc: "Creating structured documentation, knowledge bases, and tech guides for developers and business teams.",
  },
];

const Services = () => (
  <section id="services" className="py-20 bg-white text-center dark:bg-gray-950">
    <h2 className="text-3xl font-bold text-[#060504] dark:text-white mb-6">What I Do</h2>
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      {services.map((service, i) => (
        <div
          key={i}
          className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
          data-aos="fade-up"
          data-aos-delay={i * 100}
        >
          <div className="text-[#ab0f09] mb-4 flex justify-center">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-[#060504]  dark:text-white">{service.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
