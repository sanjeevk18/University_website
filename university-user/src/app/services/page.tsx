import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Services | Supporting Your Success',
  description: 'Discover the range of services we offer to support student learning, well-being, and career development.',
};

const ServicesPage = () => {
  const services = [
    { title: 'Academic Advising', desc: 'Personalized guidance on course selection and career planning.' },
    { title: 'Counseling Services', desc: 'Mental health support and wellness resources for all students.' },
    { title: 'Career Development', desc: 'Resume workshops, mock interviews, and job placement assistance.' },
    { title: 'Library & E-Resources', desc: '24/7 access to physical and digital journals, books, and databases.' },
    { title: 'Housing & Dining', desc: 'Comfortable on-campus accommodation with nutritious meal plans.' },
    { title: 'IT Support', desc: 'Technical assistance for all your hardware and software needs.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Supporting Your Success</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            From housing to career planning, we provide the resources you need to thrive during and after your studies.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 text-2xl font-bold">
                {i + 1}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
