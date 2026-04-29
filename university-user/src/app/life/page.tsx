import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Campus Life | Student Experience',
  description: 'Experience the vibrant student life, clubs, and extracurricular activities at our campus.',
};

const LifePage = () => {
  const activities = [
    { name: 'Sports & Athletics', img: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=800' },
    { name: 'Cultural Festivals', img: 'https://images.unsplash.com/photo-1514525253361-bee8718a340b?q=80&w=800' },
    { name: 'Student Clubs', img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800' },
    { name: 'Seminars & Workshops', img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800' }
  ];

  return (
    <div className="min-h-screen">
      <section className="h-[60vh] relative flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1523050335191-51ff0882083f?q=80&w=1600" 
          className="absolute inset-0 w-full h-full object-cover brightness-50" 
          alt="Campus Life"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Campus Life</h1>
          <p className="text-xl md:text-2xl font-light">More than just academics. A journey of growth.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Excellence Together</h2>
            <p className="text-gray-600 text-lg">
              Our campus is a melting pot of cultures, ideas, and talents. We provide a supportive environment 
              where students can pursue their passions outside the classroom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((act, i) => (
              <div key={i} className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer">
                <img 
                  src={act.img} 
                  alt={act.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                  <h3 className="text-white text-2xl font-bold">{act.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifePage;
