import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Key Features | Why Choose Our University',
  description: 'Explore the unique features and advantages of studying at our institution.',
};

const FeaturesPage = () => {
  const features = [
    {
      title: 'Expert Faculty',
      description: 'Learn from industry leaders and experienced healthcare professionals with decades of expertise.',
      icon: '🎓'
    },
    {
      title: 'Modern Labs',
      description: 'Access state-of-the-art laboratories equipped with the latest medical and research technology.',
      icon: '🔬'
    },
    {
      title: 'Global Certifications',
      description: 'Earn degrees and certifications that are recognized by healthcare boards across the globe.',
      icon: '🌍'
    },
    {
      title: 'Placement Support',
      description: 'Benefit from our strong network of hospital partners and dedicated career counseling.',
      icon: '💼'
    },
    {
      title: 'Research Focus',
      description: 'Engage in cutting-edge research projects and contribute to the future of healthcare.',
      icon: '💡'
    },
    {
      title: 'Student Community',
      description: 'Join a diverse and vibrant community of students committed to healthcare excellence.',
      icon: '👥'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">World-Class Features</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide a comprehensive ecosystem designed to transform students into elite healthcare professionals.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="p-8 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-4xl mb-6">{f.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
