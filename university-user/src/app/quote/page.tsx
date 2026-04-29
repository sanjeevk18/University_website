import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admission Inquiry | Get a Custom Quote',
  description: 'Request a customized educational plan and fee quote based on your career goals.',
};

const QuotePage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-blue-900 text-white p-12 md:p-24 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Start Your Journey Today</h1>
        <p className="text-xl text-blue-100 mb-12 leading-relaxed">
          Tell us about your educational background and career aspirations. Our admission counselors will provide you with a personalized roadmap and fee structure.
        </p>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-800 p-3 rounded-lg">✓</div>
            <p>Personalized career counseling</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-800 p-3 rounded-lg">✓</div>
            <p>Custom scholarship evaluation</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-800 p-3 rounded-lg">✓</div>
            <p>Instant support from our helpdesk</p>
          </div>
        </div>
      </div>
      
      <div className="md:w-1/2 bg-white p-12 md:p-24 flex flex-col justify-center">
        <form className="max-w-md w-full mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Inquiry Form</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none" placeholder="john@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Course of Interest</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white">
              <option>Select a course</option>
              <option>Bachelor of Science</option>
              <option>Medical Lab Technology</option>
              <option>Pharmacy</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none" placeholder="Tell us about your requirements..."></textarea>
          </div>
          <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-[#ff6a00] transition-colors shadow-lg shadow-blue-200">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuotePage;
