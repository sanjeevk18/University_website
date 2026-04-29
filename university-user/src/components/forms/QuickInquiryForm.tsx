'use client';

import React from 'react';

const QuickInquiryForm: React.FC = () => {
  return (
    <section id="inquiry-form" className="bg-[#1a1f36] py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2 block">Admissions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Save Your Paramedical Course</h2>
        </div>

        <form className="w-full max-w-3xl mx-auto bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-sm" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            
            {/* Course Selection */}
            <div className="flex flex-col relative group">
              <label className="text-gray-300 text-sm mb-2 font-semibold tracking-wide group-focus-within:text-white transition-colors">Select Course *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400 group-focus-within:text-[#ff6a00] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                </div>
                <select className="w-full h-[54px] pl-11 pr-4 rounded-xl bg-white/10 border border-white/20 text-white font-medium focus:bg-white focus:text-gray-900 focus:border-[#ff6a00] focus:ring-4 focus:ring-[#ff6a00]/20 outline-none appearance-none cursor-pointer transition-all duration-300">
                  <option value="" className="text-gray-900">Choose your program</option>
                  <option value="nursing" className="text-gray-900">B.Sc Nursing</option>
                  <option value="pharmacy" className="text-gray-900">B.Pharm</option>
                  <option value="mlt" className="text-gray-900">Medical Lab Tech</option>
                  <option value="physiotherapy" className="text-gray-900">Physiotherapy</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Full Name */}
            <div className="flex flex-col relative group">
              <label className="text-gray-300 text-sm mb-2 font-semibold tracking-wide group-focus-within:text-white transition-colors">Full Name *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400 group-focus-within:text-[#ff6a00] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <input 
                  type="text" 
                  placeholder="Enter your legal name" 
                  className="w-full h-[54px] pl-11 pr-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 font-medium focus:bg-white focus:text-gray-900 focus:border-[#ff6a00] focus:ring-4 focus:ring-[#ff6a00]/20 outline-none transition-all duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col relative group">
              <label className="text-gray-300 text-sm mb-2 font-semibold tracking-wide group-focus-within:text-white transition-colors">Full Name *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400 group-focus-within:text-[#ff6a00] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <input 
                  type="text" 
                  placeholder="Enter your legal name" 
                  className="w-full h-[54px] pl-11 pr-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 font-medium focus:bg-white focus:text-gray-900 focus:border-[#ff6a00] focus:ring-4 focus:ring-[#ff6a00]/20 outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="flex flex-col relative group">
              <label className="text-gray-300 text-sm mb-2 font-semibold tracking-wide group-focus-within:text-white transition-colors">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400 group-focus-within:text-[#ff6a00] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full h-[54px] pl-11 pr-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 font-medium focus:bg-white focus:text-gray-900 focus:border-[#ff6a00] focus:ring-4 focus:ring-[#ff6a00]/20 outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Mobile Number */}
            <div className="flex flex-col relative group">
              <label className="text-gray-300 text-sm mb-2 font-semibold tracking-wide group-focus-within:text-white transition-colors">Mobile Number *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-gray-400 group-focus-within:text-[#ff6a00] font-semibold transition-colors">+91</span>
                </div>
                <input 
                  type="tel" 
                  placeholder="00000 00000" 
                  className="w-full h-[54px] pl-12 pr-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 font-medium focus:bg-white focus:text-gray-900 focus:border-[#ff6a00] focus:ring-4 focus:ring-[#ff6a00]/20 outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* City / State */}
            <div className="flex flex-col relative group">
              <label className="text-gray-300 text-sm mb-2 font-semibold tracking-wide group-focus-within:text-white transition-colors">City / State *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400 group-focus-within:text-[#ff6a00] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <input 
                  type="text" 
                  placeholder="e.g. Lucknow, UP" 
                  className="w-full h-[54px] pl-11 pr-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 font-medium focus:bg-white focus:text-gray-900 focus:border-[#ff6a00] focus:ring-4 focus:ring-[#ff6a00]/20 outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col justify-end pt-1">
              <button 
                type="submit" 
                className="group relative w-full h-[54px] bg-gradient-to-r from-[#ff6a00] to-orange-500 text-white font-bold rounded-xl transition-all duration-300 text-lg tracking-wide uppercase shadow-lg shadow-[#ff6a00]/30 hover:shadow-[#ff6a00]/50 hover:scale-[1.02] overflow-hidden mt-[28px]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 flex items-center justify-center">
                  Apply Now
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </button>
            </div>
            
            {/* Terms Footer */}
            <div className="md:col-span-2 text-center mt-2">
              <p className="text-gray-400 text-xs">
                By submitting this form, you agree to our <a href="#" className="text-white hover:underline">Terms & Conditions</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuickInquiryForm;
