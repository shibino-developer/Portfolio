import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Github, ExternalLink } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const portfolioData = {
  2025: [
    {
      title: 'Smart CRM Dashboard',
      image: '/projects/crm.png',
      tech: ['React', 'Tailwind', 'Node.js'],
      desc: 'CRM for sales and leads tracking.',
      github: 'https://github.com/...',
      demo: 'https://yourcrmapp.com',
    },
    {
      title: 'Smart CRM Dashboard',
      image: '/projects/crm.png',
      tech: ['React', 'Tailwind', 'Node.js'],
      desc: 'CRM for sales and leads tracking.',
      github: 'https://github.com/...',
      demo: 'https://yourcrmapp.com',
    },
    // Add more...
  ],
  2024: [
    {
      title: 'E-Commerce Store',
      image: '/projects/store.png',
      tech: ['React', 'Firebase'],
      desc: 'Shop app with cart, login, and payments.',
      github: '',
      demo: '',
    },
    {
      title: 'Smart CRM Dashboard',
      image: '/projects/crm.png',
      tech: ['React', 'Tailwind', 'Node.js'],
      desc: 'CRM for sales and leads tracking.',
      github: 'https://github.com/...',
      demo: 'https://yourcrmapp.com',
    },
  ],
};

const sortedYears = Object.keys(portfolioData).sort((a, b) => b - a);

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Portfolio
        </h2>

        {/* Grid rows with 3 cards per row */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sortedYears.map((year, index) => (
            <div
              key={year}
              className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold text-pink-600 mb-4 text-center">
                {year}
              </h3>

              <Swiper
                spaceBetween={15}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="rounded-md overflow-hidden"
              >
                {portfolioData[year].map((project, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="group relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-md"
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 text-white flex flex-col justify-center items-center p-4 rounded-md">
                        <h4 className="text-lg font-bold mb-2 text-center">{project.title}</h4>
                        <p className="text-sm mb-2 text-center">{project.desc}</p>
                        <div className="flex flex-wrap justify-center gap-2 text-xs mb-3">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="bg-pink-500 text-white px-2 py-0.5 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="GitHub"
                            >
                              <Github className="w-5 h-5 hover:text-pink-400" />
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Live Demo"
                            >
                              <ExternalLink className="w-5 h-5 hover:text-pink-400" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
