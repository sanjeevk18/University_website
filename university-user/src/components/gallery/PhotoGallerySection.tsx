import React from 'react';
import Link from 'next/link';

const PhotoGallerySection: React.FC = () => {
  const previewImages = [
    'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600',
    'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600',
    'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600',
    'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600',
    'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600',
    'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Campus Gallery</h2>
            <p className="text-gray-600">A glimpse into our vibrant university life.</p>
          </div>
          <Link href="/gallery" className="text-blue-600 font-bold hover:underline hidden md:block">
            View Full Gallery →
          </Link>
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
            width: max-content;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        {/* Auto Scrolling Gallery Container */}
        <div className="relative w-full overflow-hidden mb-8">
          <div className="flex animate-scroll">
            {/* First Set of Images */}
            {previewImages.map((img, i) => (
              <div key={`set1-${i}`} className="w-[85vw] sm:w-[50vw] md:w-[33.333vw] lg:w-[400px] flex-shrink-0 px-3">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden group">
                  <img 
                    src={img} 
                    alt={`Gallery Preview ${i}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
            
            {/* Duplicated Set of Images for Seamless Infinite Loop */}
            {previewImages.map((img, i) => (
              <div key={`set2-${i}`} className="w-[85vw] sm:w-[50vw] md:w-[33.333vw] lg:w-[400px] flex-shrink-0 px-3">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden group">
                  <img 
                    src={img} 
                    alt={`Gallery Preview Dup ${i}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient Edges for Smooth Fading Effect */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>

        <div className="text-center">
          <Link href="/gallery" className="inline-block px-8 py-3 bg-[#ff6a00] text-white font-bold rounded-xl hover:bg-[#e65c00] transition-colors shadow-lg hover:shadow-[#ff6a00]/30 hover:-translate-y-1">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallerySection;
