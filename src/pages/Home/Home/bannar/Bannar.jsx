import React from 'react';
import img1 from '../../../../assets/mariiiii.png';
import img2 from '../../../../assets/cccc.png';
import img3 from '../../../../assets/hhhh.png';
import img4 from '../../../../assets/cccc.png';

const Banner = () => {
  const images = [
    { src: img1, title: 'পাহাড়ি হলুদ', tag: 'অর্গানিক', color: 'bg-gradient-to-br from-yellow-100 to-amber-100' },
    { src: img2, title: 'তাজা আদা', tag: 'রাসায়নিকমুক্ত', color: 'bg-gradient-to-br from-orange-50 to-amber-50' },
    { src: img3, title: 'বিন্নি চাল', tag: 'পুষ্টিগুণ সমৃদ্ধ', color: 'bg-gradient-to-br from-emerald-50 to-green-50' },
    { src: img4, title: 'শুকনা মরিচ', tag: 'মসলা', color: 'bg-gradient-to-br from-red-50 to-orange-50' },
  ];

  return (
    <section className="min-h-[85vh] bg-gradient-to-br from-white via-emerald-50/30 to-white py-12 md:py-20 px-4 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-100 rounded-full opacity-10 blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 rounded-full opacity-10 blur-3xl translate-x-32 translate-y-32"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Text Content with Enhanced Design */}
          <div className="lg:w-1/2 lg:pl-4">
            {/* Badge with Animation */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 font-semibold mb-6 shadow-sm border border-emerald-200 animate-pulse-slow">
              <span className="text-lg">🌿</span>
              <span>১০০% প্রাকৃতিক ও অর্গানিক</span>
            </div>

            {/* Main Heading with Gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="block">পাহাড়ি সম্পদ</span>
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mt-2">
                আপনার হাতের মুঠোয়
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              বাংলাদেশের পাহাড়ি অঞ্চল থেকে সরাসরি সংগৃহীত অর্গানিক মসলা, চাল ও প্রাকৃতিক পণ্য। 
              কোন ফরমালিন বা রাসায়নিক নয়—<span className="font-semibold text-emerald-700">শুধু বিশুদ্ধ প্রকৃতির স্বাদ</span>।
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="flex items-center p-3 bg-white rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-emerald-600">✓</span>
                </div>
                <span className="font-medium">ফরমালিন মুক্ত</span>
              </div>
              <div className="flex items-center p-3 bg-white rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-emerald-600">🚚</span>
                </div>
                <span className="font-medium">সারা দেশে ডেলিভারি</span>
              </div>
              <div className="flex items-center p-3 bg-white rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-emerald-600">🌱</span>
                </div>
                <span className="font-medium">অর্গানিক চাষ</span>
              </div>
              <div className="flex items-center p-3 bg-white rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-emerald-600">💰</span>
                </div>
                <span className="font-medium">সাশ্রয়ী মূল্য</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10">সব পণ্য দেখুন</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-8 py-3.5 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-colors duration-300">
                <span className="flex items-center justify-center gap-2">
                  <span>📞</span>
                  <span>কল করুন: ০১৫৭৭৩৭১৮৯৩</span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Images Grid with Enhanced Design */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-5 lg:gap-6">
              {images.map((img, index) => (
                <div 
                  key={index} 
                  className={`relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${img.color} ${
                    index === 1 || index === 3 ? 'mt-8 lg:mt-12' : ''
                  }`}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-56 md:h-64">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-2xl" />
                    
                    {/* Tag Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-bold rounded-full">
                        {img.tag}
                      </span>
                    </div>
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white text-xl font-bold mb-1">{img.title}</h3>
                      <div className="w-10 h-1 bg-white rounded-full mb-2"></div>
                      <p className="text-white/80 text-sm">অর্ডার করুন এখনই</p>
                    </div>
                  </div>
                  
                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-400/30 rounded-2xl transition-colors duration-500"></div>
                </div>
              ))}
            </div>
            
            {/* Floating Stats Card */}
            <div className="mt-8 lg:mt-12 flex justify-center">
              <div className="inline-flex items-center gap-6 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">৫০০+</div>
                  <div className="text-gray-600 text-sm">সন্তুষ্ট গ্রাহক</div>
                </div>
                <div className="h-8 w-px bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">১০০%</div>
                  <div className="text-gray-600 text-sm">প্রাকৃতিক পণ্য</div>
                </div>
                <div className="h-8 w-px bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">২৪/৭</div>
                  <div className="text-gray-600 text-sm">সাপোর্ট</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Custom Animation for Badge */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Banner;