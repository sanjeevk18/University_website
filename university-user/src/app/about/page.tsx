import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about State Allied Healthcare University, Lucknow - our history, mission, vision, and commitment to healthcare education excellence.',
};

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our University</h1>
            <p className="text-xl text-blue-100">
              Committed to excellence in healthcare education since our establishment
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To provide world-class healthcare education that combines theoretical knowledge 
                with practical skills, preparing competent healthcare professionals who can 
                contribute meaningfully to society's health and well-being.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be recognized as a premier healthcare education institution that sets 
                benchmarks in academic excellence, research innovation, and community service, 
                shaping the future of healthcare in India and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Our History
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2010 - Foundation</h3>
                  <p className="text-gray-700">
                    State Allied Healthcare University was established with the vision of 
                    providing quality healthcare education in Uttar Pradesh.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2015 - Expansion</h3>
                  <p className="text-gray-700">
                    Added new programs in Pharmacy, Medical Lab Technology, and Physiotherapy 
                    to meet growing healthcare demands.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2020 - Modernization</h3>
                  <p className="text-gray-700">
                    Upgraded facilities with state-of-the-art laboratories and digital 
                    learning infrastructure to enhance student experience.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2024 - Present</h3>
                  <p className="text-gray-700">
                    Continuing to innovate in healthcare education with research programs 
                    and industry partnerships for better student outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Excellence</h3>
              <p className="text-gray-700">
                Striving for the highest standards in education, research, and service delivery.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Integrity</h3>
              <p className="text-gray-700">
                Maintaining honesty, transparency, and ethical practices in all our endeavors.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation</h3>
              <p className="text-gray-700">
                Embracing new technologies and methodologies to enhance learning experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Dr. Rajesh Kumar</h3>
              <p className="text-blue-600 font-medium mb-3">Chancellor</p>
              <p className="text-gray-700 text-sm">
                Leading the institution with over 25 years of experience in healthcare education.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👩‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Dr. Priya Sharma</h3>
              <p className="text-blue-600 font-medium mb-3">Vice Chancellor</p>
              <p className="text-gray-700 text-sm">
                Overseeing academic programs and research initiatives with expertise in medical sciences.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Prof. Amit Singh</h3>
              <p className="text-blue-600 font-medium mb-3">Dean of Academics</p>
              <p className="text-gray-700 text-sm">
                Managing curriculum development and faculty coordination across all departments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;