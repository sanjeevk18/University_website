import React from 'react';

interface Stat {
  id: number;
  number: string;
  label: string;
  icon: string;
  color: string;
}

const StatsSection: React.FC = () => {
  const stats: Stat[] = [
    {
      id: 1,
      number: '15+',
      label: 'Years of Excellence',
      icon: '🏆',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 2,
      number: '2000+',
      label: 'Successful Graduates',
      icon: '🎓',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 3,
      number: '50+',
      label: 'Modern Laboratories',
      icon: '🔬',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 4,
      number: '100+',
      label: 'Expert Faculty',
      icon: '👨‍🏫',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 5,
      number: '95%',
      label: 'Placement Rate',
      icon: '💼',
      color: 'from-pink-400 to-pink-600'
    },
    {
      id: 6,
      number: '25',
      label: 'Acres Campus',
      icon: '🏛️',
      color: 'from-indigo-400 to-indigo-600'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Achievements in Numbers
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Discover the impact we've made in healthcare education over the years
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className="group text-center h-full"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-white/20 h-full flex flex-col justify-center items-center min-h-[180px]">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg flex-shrink-0`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                
                {/* Number */}
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {stat.number}
                </div>
                
                {/* Label */}
                <div className="text-blue-200 text-sm font-medium text-center leading-tight">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-blue-200 mb-6 text-lg">
            Join thousands of successful healthcare professionals who started their journey with us
          </p>
          <button className="px-8 py-3 bg-white text-blue-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-lg">
            Start Your Journey Today
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
    </section>
  );
};

export default StatsSection;