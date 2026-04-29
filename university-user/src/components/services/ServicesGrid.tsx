import React from 'react';

interface Service {
  id: number;
  title: string;
  icon: string;
  href: string;
  color: string;
}

const ServicesGrid: React.FC = () => {
  const services: Service[] = [
    { id: 1, title: 'Admission', icon: '📝', href: '/admissions', color: 'bg-blue-500' },
    { id: 2, title: 'Academic', icon: '📚', href: '/academics', color: 'bg-green-500' },
    { id: 3, title: 'Examination', icon: '📊', href: '/examination', color: 'bg-purple-500' },
    { id: 4, title: 'Results', icon: '🏆', href: '/results', color: 'bg-orange-500' },
    { id: 5, title: 'Student Portal', icon: '👨‍🎓', href: '/student-portal', color: 'bg-red-500' },
    { id: 6, title: 'Faculty Portal', icon: '👨‍🏫', href: '/faculty-portal', color: 'bg-indigo-500' },
    { id: 7, title: 'Library', icon: '📖', href: '/library', color: 'bg-teal-500' },
    { id: 8, title: 'Research', icon: '🔬', href: '/research', color: 'bg-pink-500' },
    { id: 9, title: 'Placements', icon: '💼', href: '/placements', color: 'bg-yellow-500' },
    { id: 10, title: 'Hostel', icon: '🏠', href: '/hostel', color: 'bg-cyan-500' },
    { id: 11, title: 'Transport', icon: '🚌', href: '/transport', color: 'bg-lime-500' },
    { id: 12, title: 'Medical', icon: '🏥', href: '/medical', color: 'bg-rose-500' },
    { id: 13, title: 'Sports', icon: '⚽', href: '/sports', color: 'bg-emerald-500' },
    { id: 14, title: 'Events', icon: '🎉', href: '/events', color: 'bg-violet-500' },
    { id: 15, title: 'Alumni', icon: '🎓', href: '/alumni', color: 'bg-amber-500' },
    { id: 16, title: 'Contact', icon: '📞', href: '/contact', color: 'bg-slate-500' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            University Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quick access to all university services and departments
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group relative h-full"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <a
                href={service.href}
                className="block bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border border-gray-100 h-full flex flex-col justify-center items-center min-h-[120px]"
              >
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <span className="text-white text-xl">{service.icon}</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 text-center group-hover:text-[#ff6a00] transition-colors leading-tight">
                  {service.title}
                </h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;