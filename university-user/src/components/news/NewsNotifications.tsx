import React from 'react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  type: 'notification' | 'event';
  isNew?: boolean;
  category?: string;
}

const NewsNotifications: React.FC = () => {
  const notifications: NewsItem[] = [
    {
      id: 1,
      title: 'Answer Key of Assistant Professor Recruitment Test (English) held on 26-04-2026',
      date: '27 Apr 2026',
      type: 'notification',
      isNew: true,
      category: 'Press Release'
    },
    {
      id: 2,
      title: 'Press Note Regarding Answer key of Assistant Professor Recruitment test (held on 26-04-2026)',
      date: '27 Apr 2026',
      type: 'notification',
      isNew: true,
      category: 'Press Release'
    },
    {
      id: 3,
      title: 'Notification for Updating Faculty Data for Academic Activities',
      date: '27 Apr 2026',
      type: 'notification',
      isNew: true,
      category: 'Academic'
    },
    {
      id: 4,
      title: 'Annual Examination Results Declaration - B.Sc Nursing 2024',
      date: '25 Apr 2026',
      type: 'notification',
      category: 'Results'
    },
    {
      id: 5,
      title: 'New Admission Guidelines for Academic Year 2026-27',
      date: '24 Apr 2026',
      type: 'notification',
      category: 'Admissions'
    }
  ];

  const events: NewsItem[] = [
    {
      id: 1,
      title: 'Programme Notice on the Death Anniversary of Raja Mahendra Pratap Ji',
      date: '25 Apr 2026',
      type: 'event',
      isNew: true,
      category: 'Memorial'
    },
    {
      id: 2,
      title: 'One-day training on the POSH Act 2013 (Sexual Harassment Act, 2013) & UGC Compliances',
      date: '08 Apr 2026',
      type: 'event',
      isNew: true,
      category: 'Training'
    },
    {
      id: 3,
      title: 'AI for ALL awareness campaign',
      date: '06 Apr 2026',
      type: 'event',
      isNew: true,
      category: 'Workshop'
    },
    {
      id: 4,
      title: 'Annual Healthcare Conference 2026',
      date: '15 Mar 2026',
      type: 'event',
      category: 'Conference'
    },
    {
      id: 5,
      title: 'Student Research Symposium',
      date: '10 Mar 2026',
      type: 'event',
      category: 'Academic'
    }
  ];

  const getCategoryColor = (category: string): string => {
    const colors: { [key: string]: string } = {
      'Press Release': 'bg-red-100 text-red-800',
      'Academic': 'bg-blue-100 text-blue-800',
      'Results': 'bg-green-100 text-green-800',
      'Admissions': 'bg-purple-100 text-purple-800',
      'Memorial': 'bg-orange-100 text-orange-800',
      'Training': 'bg-indigo-100 text-indigo-800',
      'Workshop': 'bg-teal-100 text-teal-800',
      'Conference': 'bg-pink-100 text-pink-800',
    };
    return colors[category || ''] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* News and Notifications Grid */}
        <div className="grid lg:grid-cols-2 gap-8 shadow-2xl rounded-3xl bg-white overflow-hidden border border-gray-100">
          {/* Notifications Section */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 border border-blue-100">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">NOTIFICATIONS/ PRESS RELEASE</h3>
              </div>
              <button className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition-colors">
                VIEW ALL
              </button>
            </div>

            {/* Notifications List */}
            <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-hide">
              {notifications.map((item, index) => (
                <div 
                  key={item.id} 
                  className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-semibold text-blue-600">{item.date}</span>
                    <div className="flex items-center space-x-2">
                      {item.category && (
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                          {item.category}
                        </span>
                      )}
                      {item.isNew && (
                        <span className="px-2 py-1 bg-green-500 text-white rounded-full text-xs font-bold animate-pulse">
                          New
                        </span>
                      )}
                    </div>
                  </div>
                  <h4 className="text-gray-900 font-medium leading-relaxed group-hover:text-[#ff6a00] transition-colors cursor-pointer">
                    {item.title}
                  </h4>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Click to read more
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 border border-purple-100">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">EVENTS</h3>
              </div>
              <button className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition-colors">
                VIEW ALL
              </button>
            </div>

            {/* Events List */}
            <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-hide">
              {events.map((item, index) => (
                <div 
                  key={item.id} 
                  className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-semibold text-purple-600">{item.date}</span>
                    <div className="flex items-center space-x-2">
                      {item.category && (
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                          {item.category}
                        </span>
                      )}
                      {item.isNew && (
                        <span className="px-2 py-1 bg-green-500 text-white rounded-full text-xs font-bold animate-pulse">
                          New
                        </span>
                      )}
                    </div>
                  </div>
                  <h4 className="text-gray-900 font-medium leading-relaxed group-hover:text-purple-600 transition-colors cursor-pointer">
                    {item.title}
                  </h4>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    View event details
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Connected</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest updates, notifications, and event announcements directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsNotifications;