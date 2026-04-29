import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & News | University Updates',
  description: 'Stay updated with the latest news, research, and campus stories from our university.',
};

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: 'New Research Excellence Center Opened',
      excerpt: 'Our university has inaugurated a state-of-the-art research facility dedicated to healthcare innovation.',
      date: 'Oct 24, 2024',
      category: 'Research',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Annual Sports Meet 2024 Highlights',
      excerpt: 'Celebrating the spirit of sportsmanship and athletic achievement in our latest campus event.',
      date: 'Oct 20, 2024',
      category: 'Campus Life',
      image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Top Scholarship Opportunities for 2025',
      excerpt: 'Learn about the various financial aid programs available for incoming medical and healthcare students.',
      date: 'Oct 15, 2024',
      category: 'Admissions',
      image: 'https://images.unsplash.com/photo-1523050335191-51ff0882083f?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">University Blog</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Latest insights, campus news, and educational breakthroughs.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-[#ff6a00] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <button className="text-blue-600 font-semibold hover:underline">Read More →</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
