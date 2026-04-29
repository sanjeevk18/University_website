import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | Leadership & Faculty',
  description: 'Meet the dedicated leaders and faculty members driving excellence at our university.',
};

const TeamPage = () => {
  const members = [
    { name: 'Dr. Sarah Johnson', role: 'Chancellor', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400' },
    { name: 'Prof. Michael Chen', role: 'Dean of Research', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400' },
    { name: 'Dr. Elena Rodriguez', role: 'Head of Medicine', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400' },
    { name: 'Prof. David Wilson', role: 'Director of Admissions', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400' },
    { name: 'Dr. James Miller', role: 'Chief Registrar', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400' },
    { name: 'Dr. Lisa Thompson', role: 'Head of Pharmacy', img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400' }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Leadership & Faculty</h1>
          <p className="text-gray-600 text-lg">
            Our team consists of world-renowned educators, researchers, and administrators dedicated to 
            your professional and personal growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {members.map((member, i) => (
            <div key={i} className="text-center group">
              <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden border-8 border-gray-50 group-hover:border-blue-50 transition-colors">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
