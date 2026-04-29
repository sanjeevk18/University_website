import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Director\'s Message | Our Leadership',
  description: 'Read the message from our director about the vision and commitment of our university.',
};

const DirectorPage = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="w-64 h-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl rotate-3">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800" 
              alt="Director" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Message from the Director</h1>
            <p className="text-blue-600 font-semibold text-lg mb-4">Dr. Robert Henderson, PhD</p>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
        </div>

        <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
          <p className="italic text-xl text-gray-800 leading-relaxed border-l-4 border-blue-600 pl-6 py-2">
            "Our mission is to cultivate not just healthcare professionals, but compassionate leaders who will redefine the future of global wellness."
          </p>
          <p>
            Welcome to the State Allied Healthcare University. For over a decade, our institution has stood as a beacon of academic excellence and clinical innovation. We believe that education is the most powerful tool for social change, especially in the vital field of healthcare.
          </p>
          <p>
            Our curriculum is designed to bridge the gap between traditional learning and modern medical practice. We invest heavily in simulation labs and research facilities to ensure our students are industry-ready from day one.
          </p>
          <p>
            I invite you to explore our campus and join a community dedicated to saving lives and advancing human health. Together, we can build a healthier tomorrow.
          </p>
          <div className="pt-8">
            <p className="font-bold text-gray-900">Dr. Robert Henderson</p>
            <p className="text-sm text-gray-500">Director, State Allied Healthcare University</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorPage;
