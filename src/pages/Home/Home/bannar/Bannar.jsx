import React from 'react';
import img1 from '../../../../assets/mariiiii.png';
import img2 from '../../../../assets/cccc.png';
import img3 from '../../../../assets/hhhh.png';
import img4 from '../../../../assets/cccc.png';

const Banner = () => {
  const images = [
    { src: img1, title: 'পাহাড়ি হলুদ', tag: 'অর্গানিক', color: 'bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-700 dark:to-amber-700' },
    { src: img2, title: 'তাজা আদা', tag: 'রাসায়নিকমুক্ত', color: 'bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-700 dark:to-amber-700' },
    { src: img3, title: 'বিন্নি চাল', tag: 'পুষ্টিগুণ সমৃদ্ধ', color: 'bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-700 dark:to-green-800' },
    { src: img4, title: 'শুকনা মরিচ', tag: 'মসলা', color: 'bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-700 dark:to-orange-700' },
  ];

  return (
    <section className="min-h-[85vh] bg-gradient-to-br from-white via-emerald-50/30 to-white dark:from-gray-900 dark:via-gray-800/40 dark:to-gray-900 py-12 md:py-20 px-4 overflow-hidden transition-colors duration-300">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-100 dark:bg-emerald-700 rounded-full opacity-10 blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 dark:bg-teal-700 rounded-full opacity-10 blur-3xl translate-x-32 translate-y-32"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Text Content */}
          <div className="lg:w-1/2 lg:pl-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-100 dark:from-emerald-700 to-teal-100 dark:to-teal-700 text-emerald-700 dark:text-emerald-200 font-semibold mb-6 shadow-sm border border-emerald-200 dark:border-emerald-600 animate-pulse-slow">
              <span className="text-lg">🌿</span>
              <span>১০০% প্রাকৃতিক ও অর্গানিক</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
              <span className="block">পাহাড়ি সম্পদ</span>
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent mt-2">
                আপনার হাতের মুঠোয়
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              বাংলাদেশের পাহাড়ি অঞ্চল থেকে সরাসরি সংগৃহীত অর্গানিক মসলা, চাল ও প্রাকৃতিক পণ্য। 
              কোন ফরমালিন বা রাসায়নিক নয়—<span className="font-semibold text-emerald-700 dark:text-emerald-300">শুধু বিশুদ্ধ প্রকৃতির স্বাদ</span>।
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: '✓', label: 'ফরমালিন মুক্ত' },
                { icon: '🚚', label: 'সারা দেশে ডেলিভারি' },
                { icon: '🌱', label: 'অর্গানিক চাষ' },
                { icon: '💰', label: 'সাশ্রয়ী মূল্য' },
              ].map((item, i) => (
                <div key={i} className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-700 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-emerald-600 dark:text-emerald-300">{item.icon}</span>
                  </div>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10">সব পণ্য দেখুন</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-8 py-3.5 border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-300 font-semibold rounded-xl hover:bg-emerald-50 dark:hover:bg-gray-700 transition-colors duration-300">
                <span className="flex items-center justify-center gap-2">
                  <span>📞</span>
                  <span>কল করুন: ০১৫৭৭৩৭১৮৯৩</span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Images Grid */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-5 lg:gap-6">
              {images.map((img, index) => (
                <div 
                  key={index} 
                  className={`relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${img.color} ${
                    index === 1 || index === 3 ? 'mt-8 lg:mt-12' : ''
                  }`}
                >
                  <div className="relative overflow-hidden h-56 md:h-64">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-2xl" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/40 backdrop-blur-sm text-emerald-700 dark:text-emerald-300 text-xs font-bold rounded-full">
                        {img.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white dark:text-gray-100 text-xl font-bold mb-1">{img.title}</h3>
                      <div className="w-10 h-1 bg-white rounded-full mb-2"></div>
                      <p className="text-white/80 dark:text-gray-300 text-sm">অর্ডার করুন এখনই</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-400/30 rounded-2xl transition-colors duration-500"></div>
                </div>
              ))}
            </div>

            {/* Floating Stats Card */}
            <div className="mt-8 lg:mt-12 flex justify-center">
              <div className="inline-flex items-center gap-6 px-8 py-4 bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl">
                {[
                  { number: '৫০০+', label: 'সন্তুষ্ট গ্রাহক' },
                  { number: '১০০%', label: 'প্রাকৃতিক পণ্য' },
                  { number: '২৪/৭', label: 'সাপোর্ট' },
                ].map((item, i) => (
                  <React.Fragment key={i}>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{item.number}</div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm">{item.label}</div>
                    </div>
                    {i < 2 && <div className="h-8 w-px bg-gray-300 dark:bg-gray-600"></div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Custom Animation */}
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
