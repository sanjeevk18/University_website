import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Campus & Facilities',
  description: 'Take a virtual tour of our campus, laboratories, and student events through our photo gallery.',
};

const GalleryPage = () => {
  const images = [
    'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800',
    'https://images.unsplash.com/photo-1523050335191-51ff0882083f?q=80&w=800',
    'https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?q=80&w=800',
    'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=800',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800'
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Visualizing Excellence</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg">
              <img 
                src={img} 
                alt="Campus" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-lg">View Larger</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
