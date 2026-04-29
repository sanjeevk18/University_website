import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quick Links | Student Resources',
  description: 'Access important student and faculty portals, research, and downloads.',
};

const QuickLinksPage = () => {
  const links = [
    { title: 'Student Portal', desc: 'Grades, assignments, and profile.' },
    { title: 'Faculty Portal', desc: 'Course management and tools.' },
    { title: 'Online Library', desc: 'Access medical journals and books.' },
    { title: 'Fee Payment', desc: 'Secure online fee processing.' },
    { title: 'Examination Results', desc: 'Semester and board results.' },
    { title: 'Research Hub', desc: 'Ongoing projects and publications.' }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold mb-12 text-center">Resources & Quick Links</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {links.map((link, i) => (
            <div key={i} className="flex items-start space-x-6 p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors cursor-pointer border border-transparent hover:border-blue-200">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                {i + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{link.title}</h3>
                <p className="text-gray-600">{link.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinksPage;
