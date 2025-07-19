import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#ab0f09]">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* Left Section - Title and Intro */}
        <div data-aos="fade-right">
          <h3 className="text-2xl md:text-2xlfont-bold text-white mb-4 ">About Me</h3>
          {/* <p className="text-gray-600 text-sm">
            I’m a passionate and detail-oriented full-stack developer and digital creator.
            From building robust web applications to designing impactful brochures and
            creating strategic content, I blend creativity with logic to craft meaningful
            digital experiences for businesses and users alike.
          </p> */}
        </div>

        {/* Right Section - Mission and Vision */}
        <div className="md:col-span-2 grid gap-8" data-aos="fade-left">
          {/* Mission */}
          <div className="bg-[#ab0f09] p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-white">My Mission</h3>
            <p className="text-white text-sm">
              To empower individuals and businesses by delivering functional, elegant,
              and scalable digital solutions - be it websites, tools, or content - while
              continually evolving in the ever-changing tech landscape.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#ab0f09] p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-white">My Vision</h3>
            <p className="text-white text-sm">
              To be a versatile digital force  bridging the gap between design, development,
              and communication - and creating impact-driven solutions that stand the test of time.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
