import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  course: string;
  rating: number;
  comment: string;
  avatar: string;
  gradient: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Graduate',
      course: 'B.Sc Nursing',
      rating: 5,
      comment: 'The practical training and modern facilities helped me build confidence in my nursing career. Excellent faculty support throughout the program.',
      avatar: '👩‍⚕️',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      role: 'Student',
      course: 'Pharmacy',
      rating: 5,
      comment: 'Outstanding laboratory facilities and experienced professors. The curriculum is well-designed to meet industry standards.',
      avatar: '👨‍⚕️',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      name: 'Anjali Singh',
      role: 'Graduate',
      course: 'Medical Lab Technology',
      rating: 5,
      comment: 'Great learning environment with hands-on experience. The placement support was excellent and helped me secure a good job.',
      avatar: '👩‍🔬',
      gradient: 'from-purple-500 to-indigo-500'
    }
  ];

  const renderStars = (rating: number): React.JSX.Element[] => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
            Student Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What Our Students
            <span className="block bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our students and graduates about their transformative experience 
            at our university and how we've shaped their healthcare careers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-100">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                  </svg>
                </div>

                {/* Rating */}
                <div className="flex mb-6 group-hover:scale-110 transition-transform duration-300">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Comment */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic group-hover:text-gray-800 transition-colors duration-300">
                  "{testimonial.comment}"
                </blockquote>

                {/* Profile */}
                <div className="flex items-center">
                  <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mr-4`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg group-hover:text-gray-800 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role} - {testimonial.course}
                    </p>
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-gray-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 delay-200"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Students Worldwide
              </h3>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Our commitment to excellence is reflected in the success of our students and graduates.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-blue-200 text-sm md:text-base">Happy Students</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
                <div className="text-blue-200 text-sm md:text-base">Satisfaction Rate</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
                <div className="text-blue-200 text-sm md:text-base">Programs</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-blue-200 text-sm md:text-base">Placement Support</div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-4 right-4 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-3 h-3 bg-white/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-8 w-2 h-2 bg-white/25 rounded-full animate-pulse delay-2000"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;