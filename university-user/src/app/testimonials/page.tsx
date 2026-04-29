import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials | What Our Students Say',
  description: 'Read the success stories and testimonials from our students and alumni.',
};

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Nursing Student',
      text: 'The practical training here is unparalleled. The state-of-the-art labs prepared me for my clinical rotations perfectly.',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200'
    },
    {
      name: 'Ankit Sharma',
      role: 'Alumni, Pharmacy',
      text: 'Transitioning from campus to a corporate hospital was seamless thanks to the industry partnerships of the university.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200'
    },
    {
      name: 'Emily Davis',
      role: 'MLT Student',
      text: 'The faculty members are mentors who truly care about our personal and professional growth.',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Student Success Stories</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-50">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">"{t.text}"</p>
              <h3 className="font-bold text-gray-900">{t.name}</h3>
              <p className="text-blue-600 text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
