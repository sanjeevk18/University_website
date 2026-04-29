import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Courses | Healthcare Programs',
  description: 'Explore our range of undergraduate and postgraduate healthcare programs.',
};

const CoursesPage = () => {
  const courses = [
    { title: 'B.Sc Nursing', duration: '4 Years', icon: '🩺' },
    { title: 'B.Pharm', duration: '4 Years', icon: '💊' },
    { title: 'Medical Lab Tech', duration: '3 Years', icon: '🔬' },
    { title: 'Physiotherapy', duration: '4.5 Years', icon: '🦴' },
    { title: 'Radiology', duration: '3 Years', icon: '🦴' },
    { title: 'Public Health', duration: '2 Years', icon: '🏥' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Academic Programs</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((c, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{c.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
              <p className="text-gray-500 mb-6 font-medium">Duration: {c.duration}</p>
              <button className="text-blue-600 font-bold hover:underline">Full Curriculum →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
