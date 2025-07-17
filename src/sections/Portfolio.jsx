import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Github, ExternalLink } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import mrsimage from '../assets/Movie recommendation .jpg';
import pmimage from '../assets/Password manager.jpg';
import erpempimage from '../assets/ERP emp.jpg';
import itinventimage from '../assets/IT invent.jpg'

const portfolioData = {
  2025: [
    {
      title: 'Movie Recommendation System',
      image: mrsimage,
      tech: ['Python', 'Pandas', 'Scikit-learn'],
      desc: 'A content-based movie recommender built using Python, Pandas and Scikit-learn, suggests similar movies based on genre, keywords, and user imput using cosine similarity.',
      github: 'https://github.com/shibino-developer/Movie-Recommendation-System',
      demo: 'https://docs.google.com/presentation/d/1tnSzzkC9TGndTI2l9pGXBBpG8D3oOLARzhIUlh6kFzc/edit?slide=id.p#slide=id.p',
    },
    {
      title: 'Password Manager',
      image: pmimage,
      tech: ['Python', 'Django', 'Cryptography'],
      desc: 'Built a system enhances security by implementing strong encryption, auto-generation of complex passwords, and role-based access control.',
      github: 'https://github.com/shibino-developer/password_manager',
      demo: 'https://docs.google.com/presentation/d/1nXclq0qoS2C-ilgXTHIZanvPRl_vOGg2k4kkzaqT2gQ/edit?slide=id.p#slide=id.p',
    },
    {
      title: 'ERP based Employee Management System',
      image: erpempimage,
      tech: ['Python', 'Django', 'ERP concepts'],
      desc: 'Designed to streamline HR operations by integrating employee records, payroll management, leave tracking, and performance evaluation into a centralized system. ',
      github: 'https://github.com/shibino-developer/Employee-Management-System-ERP-Implementation-',
      demo: 'https://docs.google.com/presentation/d/1ApVES4tj-H2CIkaBMt9ezCIZ1YOjh7f2/edit?slide=id.p1#slide=id.p1',
    },
    {
      title: 'IT Inventory System',
      image: itinventimage,
      tech: ['Google Sheets', 'Google Apps Scripts'],
      desc: 'Developed an automated inventory tracking system using spreadsheets, applying ERP concepts to manage stock levels efficiently.',
      github: 'https://github.com/shibino-developer/Inventory-Management-System',
      demo: 'https://docs.google.com/presentation/d/1zzMGbIJpEimkwQ1QQ0VJXw2q7l3XTtlr/edit?slide=id.p1#slide=id.p1',
    },
    // Add more...
  ],
  2024: [
    {
      title: 'HeartInsight',
      image: '/projects/store.png',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Pickle'],
      desc: 'Shopapp with cart, login, and payments.',
      github: '',
      demo: '',
    },
    {
      title: 'HeartGuard ML: Predictive Health Monitoring System',
      image: '/projects/crm.png',
      tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Flask'],
      desc: 'CRM for sales and leads tracking.',
      github: 'https://github.com/...',
      demo: 'https://yourcrmapp.com',
    },
     {
      title: 'SecureNetGuard: Zero Trust Network Access Implementation',
      image: '/projects/store.png',
      tech: ['Python', 'Flask', 'WT(JSON Web Token'],
      desc: 'Shopapp with cart, login, and payments.',
      github: '',
      demo: '',
    },
    {
      title: 'Online Quiz Master',
      image: '/projects/crm.png',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS'],
      desc: 'CRM for sales and leads tracking.',
      github: 'https://github.com/...',
      demo: 'https://yourcrmapp.com',
    },
    {
      title: 'Recipe Collection Site',
      image: '/projects/crm.png',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      desc: 'CRM for sales and leads tracking.',
      github: 'https://github.com/...',
      demo: 'https://yourcrmapp.com',
    },
     {
      title: 'AI-Generated Poetry: Exploring Shakespearean Sonnets',
      image: '/projects/crm.png',
      tech: ['Python', 'NumPy', 'Tensorflow', 'Web Scraping'],
      desc: 'CRM for sales and leads tracking.',
      github: 'https://github.com/...',
      demo: 'https://yourcrmapp.com',
    },
     {
      title: 'Book Search App',
      image: '/projects/crm.png',
      tech: ['Go', 'CSS3', 'JavaScript', 'Bootstrap', 'ReactJS'],
      desc: 'CRM for sales and leads tracking.',
      github: 'https://github.com/...',
      demo: 'https://yourcrmapp.com',
    },
    {
      title: 'Tools Trading Shop Website',
      image: '/projects/crm.png',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      desc: 'CRM for sales and leads tracking.',
      github: 'https://github.com/...',
      demo: 'https://yourcrmapp.com',
    },
     {
      title: 'Taskmaster',
      image: '/projects/crm.png',
      tech: ['Python', 'Tkinter', 'Matplotlib'],
      desc: 'CRM for sales and leads tracking.',
      github: 'https://github.com/...',
      demo: 'https://yourcrmapp.com',
    },
  ],
  2023: [
    {
      title: 'Weather App',
      image: '/projects/store.png',
      tech: ['Python', 'Django', 'SQLite'],
      desc: 'Shop app with cart, login, and payments.',
      github: '',
      demo: '',
    },
    {
      title: 'Online Marketing Web Application',
      image: '/projects/store.png',
      tech: ['Python', 'Flask', 'SQLAlchemy'],
      desc: 'Shop app with cart, login, and payments.',
      github: '',
      demo: '',
    },
    {
      title: 'College Management System',
      image: '/projects/crm.png',
      tech: ['Python', 'Django', 'SQLite'],
      desc: 'CRM for sales and leads tracking.',
      github: 'https://github.com/...',
      demo: 'https://yourcrmapp.com',
    },
  ],
  2022: [
    {
      title: 'Stock Management and Billing System',
      image: '/projects/store.png',
      tech: ['Python', 'Tkinter', 'SQLite'],
      desc: 'Shop app with cart, login, and payments.',
      github: '',
      demo: '',
    },
  ],
  2021: [
    {
      title: 'Oncolens Detect',
      image: '/projects/store.png',
      tech: ['Python', 'Django', 'React', 'Selenium'],
      desc: 'Shop app with cart, login, and payments.',
      github: '',
      demo: '',
    },
    {
      title: 'Employee Task Tracking and Rating System',
      image: '/projects/crm.png',
      tech: ['Python', 'Tkinter', 'SQLite'],
      desc: 'CRM for sales and leads tracking.',
      github: 'https://github.com/...',
      demo: 'https://yourcrmapp.com',
    },
  ],
  2020: [
    {
      title: 'An Autonomous Agricultural Robot usig IoT',
      image: '/projects/store.png',
      tech: ['Python', 'JavaScript', 'IoT'],
      desc: 'Shop app with cart, login, and payments.',
      github: '',
      demo: '',
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
