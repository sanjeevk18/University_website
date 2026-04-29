import React from 'react';

const DirectorMessage: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Director's Photo */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
              {/* Director's Photo */}
              <div className="aspect-[4/5] rounded-2xl flex items-center justify-center relative overflow-hidden shadow-xl group">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop" 
                  alt="Dr. Rajesh Kumar" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent"></div>
                <div className="text-center text-white relative z-10 mt-auto pb-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-2xl font-bold drop-shadow-md">Dr. Rajesh Kumar</p>
                  <p className="text-sm text-blue-300 font-semibold uppercase tracking-wider">Director & Chancellor</p>
                </div>
              </div>

              {/* Decorative Quote */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce delay-2000"></div>
          </div>

          {/* Right Content - Message */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                Message from Director
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Leading Healthcare Education
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Into the Future
                </span>
              </h2>
            </div>

            {/* Message Content */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                "Welcome to State Allied Healthcare University, Lucknow. As we embark on this journey 
                of excellence in healthcare education, I am proud to lead an institution that has been 
                at the forefront of shaping competent healthcare professionals for over a decade."
              </p>
              
              <p>
                Our commitment to providing world-class education, combined with state-of-the-art facilities 
                and experienced faculty, ensures that our students are well-prepared to meet the challenges 
                of the ever-evolving healthcare industry.
              </p>
              
              <p>
                We believe in nurturing not just skilled professionals, but compassionate individuals who 
                will contribute meaningfully to society's health and well-being. Our comprehensive programs, 
                practical training, and industry partnerships provide students with the knowledge and 
                experience needed to excel in their chosen fields.
              </p>
            </div>

            {/* Signature and Details */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <div className="text-2xl font-bold text-gray-900 mb-1">Dr. Rajesh Kumar</div>
                  <div className="text-blue-600 font-semibold">Director & Chancellor</div>
                  <div className="text-sm text-gray-600">M.D., Ph.D. in Healthcare Administration</div>
                </div>
                <div className="w-24 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Signature</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">Research Papers</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600">10+</div>
                <div className="text-sm text-gray-600">Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;