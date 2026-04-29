import React from 'react';

interface QuickLink {
  id: number;
  title: string;
  description: string;
  icon: string;
  href: string;
  gradient: string;
  isExternal?: boolean;
}

const QuickLinks: React.FC = () => {
  const quickLinks: QuickLink[] = [
    {
      id: 1,
      title: 'Student Portal',
      description: 'Access your academic records, assignments, and course materials',
      icon: '👨‍🎓',
      href: '/student-portal',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Faculty Portal',
      description: 'Faculty resources, course management, and academic tools',
      icon: '👨‍🏫',
      href: '/faculty-portal',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Online Library',
      description: 'Digital library with medical journals, books, and research papers',
      icon: '📚',
      href: '/library',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      id: 4,
      title: 'Admission Portal',
      description: 'Apply online, check application status, and admission guidelines',
      icon: '📝',
      href: '/admissions',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Examination Results',
      description: 'Check your examination results and academic performance',
      icon: '📊',
      href: '/results',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 6,
      title: 'Fee Payment',
      description: 'Pay fees online, download receipts, and view payment history',
      icon: '💳',
      href: '/fee-payment',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      id: 7,
      title: 'Career Services',
      description: 'Job placements, career guidance, and industry connections',
      icon: '💼',
      href: '/career-services',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      id: 8,
      title: 'Research Portal',
      description: 'Research opportunities, publications, and academic projects',
      icon: '🔬',
      href: '/research',
      gradient: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zM10 10c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm60 60c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse"></span>
            Quick Access
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Essential
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Quick Links
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access important services and resources quickly with our convenient quick links portal. 
            Everything you need is just one click away.
          </p>
        </div>

        {/* Quick Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickLinks.map((link, index) => (
            <div 
              key={link.id} 
              className="group relative"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              {/* Card */}
              <div className="relative h-full bg-white hover:bg-[#ff6a00] rounded-2xl p-6 shadow-lg hover:shadow-[0_20px_40px_rgba(255,106,0,0.3)] transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] border border-gray-100 cursor-pointer overflow-hidden z-10">
                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${link.gradient} group-hover:bg-none group-hover:bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <span className="text-2xl group-hover:drop-shadow-sm">{link.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-3">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                    {link.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {link.description}
                  </p>
                  
                  {/* Arrow Icon */}
                  <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-white transition-colors duration-300 mt-4">
                    <span className="mr-2 font-bold">Access Now</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Decorative background glow on hover to enhance the orange */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
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
                Need Help Finding Something?
              </h3>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Our support team is here to help you navigate through our services and find exactly what you're looking for.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Call Support</h4>
                <p className="text-blue-200 text-sm">+91 522 123 4567</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Email Support</h4>
                <p className="text-blue-200 text-sm">support@sahu.edu.in</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Help Center</h4>
                <p className="text-blue-200 text-sm">24/7 Online Support</p>
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

export default QuickLinks;