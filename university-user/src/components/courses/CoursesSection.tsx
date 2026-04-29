import React from 'react';
import Link from 'next/link';

const CoursesSection: React.FC = () => {
  const popularCourses = [
    { title: 'B.Sc Nursing', duration: '4 Years', icon: '🩺' },
    { title: 'B.Pharm', duration: '4 Years', icon: '💊' },
    { title: 'Medical Lab Tech', duration: '3 Years', icon: '🔬' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Academic Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our industry-aligned healthcare programs designed to shape your career.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {popularCourses.map((course, i) => (
            <div key={i} className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-shadow bg-gray-50">
              <div className="text-4xl mb-4">{course.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
              <p className="text-gray-500 mb-4">Duration: {course.duration}</p>
              <Link href="/courses" className="text-blue-600 font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/courses" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-[#ff6a00] transition-colors">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
