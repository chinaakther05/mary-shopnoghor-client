import React from "react";
import img1 from "../../../../assets/111111111.png";
import img2 from "../../../../assets/111111111.png";
import img3 from "../../../../assets/shopnogor.png";
import img4 from "../../../../assets/mariiiii.png";

const ImageStrip = () => {
  const images = [
    { src: img1, title: "পাহাড়ি হলুদ", tag: "জৈব" },
    { src: img2, title: "চুইঝাল", tag: "তীব্র ঝাল" },
    { src: img3, title: "ফরমির দোকান", tag: "স্থানীয়" },
    { src: img4, title: "মরিচ", tag: "শুকনা" },
    { src: img1, title: "পাহাড়ি হলুদ", tag: "জৈব" },
    { src: img2, title: "চুইঝাল", tag: "তীব্র ঝাল" },
    { src: img3, title: "ফরমির দোকান", tag: "স্থানীয়" },
    { src: img4, title: "মরিচ", tag: "শুকনা" },
    { src: img1, title: "পাহাড়ি হলুদ", tag: "জৈব" },
    { src: img2, title: "চুইঝাল", tag: "তীব্র ঝাল" },
    { src: img3, title: "ফরমির দোকান", tag: "স্থানীয়" },
    { src: img4, title: "মরিচ", tag: "শুকনা" },
  ];

  const imageSet = [...images, ...images, ...images, ...images]; // Seamless loop

  return (
    <div className="relative w-full overflow-hidden py-10 md:py-16 
                    bg-gradient-to-r from-green-50/60 via-amber-50/40 to-green-50/60 
                    dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 
                    transition-all duration-500 group">
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
      
      {/* Section Title */}
      <div className="text-center mb-8 px-4">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 
                      bg-gradient-to-r from-green-100 to-emerald-100 
                      dark:from-green-800/40 dark:to-emerald-800/40 
                      rounded-full border border-green-200 dark:border-green-700/30 
                      backdrop-blur-sm mb-4">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-800 dark:text-green-300 font-semibold text-sm md:text-base">
            🛒 আমাদের জনপ্রিয় পণ্যসমূহ
          </span>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          ফরমির <span className="text-green-600 dark:text-green-400">বিশেষ সংগ্রহ</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-2 max-w-2xl mx-auto">
          বাংলাদেশের পাহাড়ি অঞ্চল থেকে সরাসরি সংগ্রহকৃত প্রাকৃতিক পণ্য
        </p>
      </div>

      {/* First Strip - Scroll Left */}
      <div className="relative overflow-hidden mb-6 md:mb-8">
        <div className="flex gap-5 md:gap-8 animate-scroll-left whitespace-nowrap min-w-max py-2">
          {imageSet.map((image, index) => (
            <div key={`left-${index}`} className="relative group">
              <div className="
                h-44 w-72 md:h-52 md:w-80
                bg-white dark:bg-gray-800
                rounded-2xl
                shadow-lg dark:shadow-gray-800/50
                hover:shadow-2xl dark:hover:shadow-gray-700/70
                transition-all duration-500
                overflow-hidden
                border border-green-100 dark:border-gray-700
                hover:border-green-300 dark:hover:border-green-600
                hover:-translate-y-2
              ">
                <img
                  src={image.src}
                  alt={image.title}
                  className="
                    w-full h-3/4 object-cover
                    group-hover:scale-110
                    transition-transform duration-700
                  "
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Tag */}
                <div className="absolute top-4 right-4">
                  <span className="
                    px-3 py-1.5
                    bg-white/90 dark:bg-gray-800/90
                    backdrop-blur-sm
                    text-green-700 dark:text-green-400
                    text-xs font-bold
                    rounded-full
                    border border-green-200 dark:border-green-700
                    shadow-sm
                  ">
                    {image.tag}
                  </span>
                </div>
                
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 
                              bg-gradient-to-t from-white/95 via-white/80 to-transparent
                              dark:from-gray-800/95 dark:via-gray-800/80 dark:to-transparent">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {image.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      অর্ডার করুন
                    </p>
                    <span className="text-green-600 dark:text-green-400 text-xl transform -translate-x-2 
                                  opacity-0 group-hover:opacity-100 group-hover:translate-x-0 
                                  transition-all duration-300">
                      →
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-amber-400/20 
                            rounded-2xl blur-xl opacity-0 group-hover:opacity-70 
                            transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>
        
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 
                      bg-gradient-to-r from-green-50/60 dark:from-gray-900 via-transparent 
                      pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 
                      bg-gradient-to-l from-green-50/60 dark:from-gray-900 via-transparent 
                      pointer-events-none"></div>
      </div>

      {/* Second Strip - Scroll Right (Reversed) */}
      <div className="relative overflow-hidden">
        <div className="flex gap-5 md:gap-8 animate-scroll-right whitespace-nowrap min-w-max py-2">
          {imageSet.map((image, index) => (
            <div key={`right-${index}`} className="relative group">
              <div className="
                h-36 w-64 md:h-40 md:w-72
                bg-white dark:bg-gray-800
                rounded-xl
                shadow-md dark:shadow-gray-800/50
                hover:shadow-xl dark:hover:shadow-gray-700/70
                transition-all duration-500
                overflow-hidden
                border border-amber-100 dark:border-gray-700
                hover:border-amber-300 dark:hover:border-amber-600
                hover:-translate-y-1
              ">
                <img
                  src={image.src}
                  alt={image.title}
                  className="
                    w-full h-2/3 object-cover
                    group-hover:scale-105
                    transition-transform duration-700
                  "
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Title */}
                <div className="p-3">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {image.title}
                    </h3>
                    <span className="
                      px-2 py-0.5
                      bg-amber-100 dark:bg-amber-800/30
                      text-amber-700 dark:text-amber-400
                      text-xs font-medium
                      rounded-full
                    ">
                      {image.tag}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    প্রাকৃতিক ও বিশুদ্ধ
                  </p>
                </div>
              </div>
              
              {/* Pulse effect on hover */}
              <div className="absolute -inset-0.5 rounded-xl 
                            bg-gradient-to-r from-green-400/10 to-amber-400/10 
                            opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>
        
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 
                      bg-gradient-to-r from-green-50/60 dark:from-gray-900 via-transparent 
                      pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 
                      bg-gradient-to-l from-green-50/60 dark:from-gray-900 via-transparent 
                      pointer-events-none"></div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-10 md:mt-14 px-4">
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 
                      bg-white/60 dark:bg-gray-800/60 
                      backdrop-blur-sm rounded-2xl p-6 
                      border border-green-200 dark:border-gray-700
                      shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 
                          rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">🛒</span>
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900 dark:text-white">সমস্ত পণ্য দেখুন</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">ফরমির সম্পূর্ণ সংগ্রহ</p>
            </div>
          </div>
          <button className="
            px-6 py-3
            bg-gradient-to-r from-green-600 to-emerald-500
            hover:from-green-700 hover:to-emerald-600
            text-white font-semibold
            rounded-xl
            shadow-md hover:shadow-lg
            transition-all duration-300
            hover:-translate-y-1
            flex items-center gap-2
          ">
            <span>দেখুন এখন</span>
            <span className="text-xl transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 45s linear infinite;
        }
        
        /* Pause on hover */
        .group:hover .animate-scroll-left,
        .group:hover .animate-scroll-right {
          animation-play-state: paused;
        }
        
        /* Smooth edges for gradient */
        @supports (mask-image: linear-gradient(to right, transparent, black, transparent)) {
          .mask-fade {
            mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 10%,
              black 90%,
              transparent 100%
            );
          }
        }
      `}</style>
    </div>
  );
};

export default ImageStrip;