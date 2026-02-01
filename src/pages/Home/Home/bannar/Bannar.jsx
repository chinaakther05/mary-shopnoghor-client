import React, { useState, useEffect } from 'react';
import img1 from '../../../../assets/mariiiii.png';
import img2 from '../../../../assets/cccc.png';
import img3 from '../../../../assets/hhhh.png';
import img4 from '../../../../assets/cccc.png';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../../../../components/whatsAppButton/WhatsAppButton';

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % 3);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const images = [
    { 
      src: img1, 
      title: 'পাহাড়ি চুইঝাল', 
      tag: 'তীব্র ঝাল', 
      color: 'bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 dark:from-red-900/30 dark:via-orange-900/30 dark:to-amber-900/30',
      description: 'বান্দরবানের পাহাড়ে চাষকৃত'
    },
    { 
      src: img2, 
      title: 'পাহাড়ি আদা', 
      tag: 'প্রাকৃতিক', 
      color: 'bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-900/30 dark:via-orange-900/30 dark:to-yellow-900/30',
      description: 'রাসায়নিকমুক্ত বিশুদ্ধ'
    },
    { 
      src: img3, 
      title: 'বিন্নি চাল', 
      tag: 'সুগন্ধি', 
      color: 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-900/30 dark:via-green-900/30 dark:to-teal-900/30',
      description: 'পার্বত্য চট্টগ্রামের বিশেষ চাল'
    },
    { 
      src: img4, 
      title: 'পাহাড়ি হলুদ', 
      tag: 'উচ্চ কারকিউমিন', 
      color: 'bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-900/30 dark:via-amber-900/30 dark:to-orange-900/30',
      description: 'ভেজালমুক্ত অর্গানিক'
    },
  ];

  const features = [
    { icon: '🌿', label: 'ফরমালিন মুক্ত', color: 'text-green-600 dark:text-green-400' },
    { icon: '🚚', label: 'সারা দেশে ডেলিভারি', color: 'text-blue-600 dark:text-blue-400' },
    { icon: '💰', label: 'সাশ্রয়ী মূল্য', color: 'text-amber-600 dark:text-amber-400' },
    { icon: '👨‍🌾', label: 'স্থানীয় কৃষক', color: 'text-emerald-600 dark:text-emerald-400' },
  ];

  const stats = [
    { number: '৫০০+', label: 'সন্তুষ্ট গ্রাহক', delay: '100ms' },
    { number: '১০০%', label: 'প্রাকৃতিক পণ্য', delay: '300ms' },
    { number: '২৪/৭', label: 'হোয়াটসঅ্যাপ সাপোর্ট', delay: '500ms' },
  ];

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-green-50/80 via-amber-50/60 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-200 dark:bg-green-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-40 w-80 h-80 bg-amber-200 dark:bg-amber-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-1/4 w-80 h-80 bg-emerald-200 dark:bg-emerald-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        {/* Floating Leaves */}
        <div className="absolute top-10 left-10 animate-float-slow">
          <span className="text-4xl opacity-20">🍃</span>
        </div>
        <div className="absolute bottom-20 right-20 animate-float-slower">
          <span className="text-3xl opacity-20">🌿</span>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float">
          <span className="text-2xl opacity-15">🍂</span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content - Animated Text */}
          <div className={`lg:w-1/2 transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Main Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100/80 to-amber-100/80 dark:from-green-800/40 dark:to-amber-800/40 backdrop-blur-sm mb-6 border border-green-200/50 dark:border-green-700/30 animate-pulse-slow">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              <span className="text-sm font-semibold text-green-800 dark:text-green-300">
                🌱 ফরমির মিশন: প্রকৃতির বিশুদ্ধতা
              </span>
            </div>

            {/* Main Heading with Typewriter Effect */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="block">পাহাড়ের</span>
              <span className="block mt-2 relative">
                <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400 dark:from-green-400 dark:via-emerald-300 dark:to-teal-300 bg-clip-text text-transparent">
                  প্রাকৃতিক স্বাদ
                </span>
                <span className="absolute -right-2 top-0 text-3xl animate-bounce">✨</span>
              </span>
              <span className="block mt-2 text-gray-700 dark:text-gray-300 text-3xl md:text-4xl">
                আপনার দোরগোড়ায়
              </span>
            </h1>

            {/* Description with Fade In */}
            <div className={`mb-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
                বাংলাদেশের পাহাড়ি অঞ্চল থেকে সরাসরি সংগ্রহকৃত <span className="font-semibold text-green-700 dark:text-green-400">অর্গানিক মসলা ও পণ্য</span>। 
                কোন ফরমালিন, কোন রাসায়নিক—শুধু প্রকৃতির <span className="italic">অবিচ্ছিন্ন বিশুদ্ধতা</span>।
              </p>
            </div>

            {/* Features Grid with Stagger Animation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-3 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-green-100/50 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{feature.icon}</span>
                    <span className={`text-sm font-medium ${feature.color}`}>{feature.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                to="/products"
                className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-500 dark:to-emerald-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 dark:from-emerald-400 dark:to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center">
                  <span className="mr-2">🛒</span>
                  সকল পণ্য দেখুন
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              
              <WhatsAppButton 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-500 dark:to-teal-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0"
                showIcon={true}
                message="হ্যালো, ফরমির মিশন থেকে পণ্য সম্পর্কে জানতে চাই।"
              />
            </div>

            {/* Stats with Counter Animation */}
            <div className="grid grid-cols-3 gap-6 max-w-md">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-green-100/30 dark:border-gray-700/30"
                >
                  <div className="text-2xl md:text-3xl font-bold text-green-700 dark:text-green-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Gallery */}
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Main Rotating Image */}
              <div className="relative mb-8">
                <div className="w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src={images[currentImage].src}
                    alt={images[currentImage].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-green-800 dark:text-green-300 font-bold rounded-full text-sm">
                      {images[currentImage].tag}
                    </span>
                    <h3 className="text-white text-2xl font-bold mt-2">{images[currentImage].title}</h3>
                    <p className="text-white/80 text-sm">{images[currentImage].description}</p>
                  </div>
                </div>
                
                {/* Image Navigation Dots */}
                <div className="flex justify-center mt-4 space-x-2">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentImage === index 
                          ? 'bg-green-600 w-8' 
                          : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                {images.map((img, index) => (
                  <div 
                    key={index}
                    className={`relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${img.color} ${
                      index % 2 === 0 ? 'mt-0' : 'mt-6'
                    } transform hover:-translate-y-2`}
                  >
                    <div className="relative h-48 md:h-56">
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-green-700 dark:text-green-300 text-xs font-bold rounded-full">
                          {img.tag}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-white font-bold text-lg">{img.title}</h3>
                        <div className="w-8 h-1 bg-white rounded-full my-2"></div>
                        <p className="text-white/80 text-sm">ক্লিক করুন দেখতে</p>
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-400/50 rounded-2xl transition-colors duration-300"></div>
                    <div className="absolute -bottom-10 group-hover:bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-300">
                      <span className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">👇</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Quote */}
              <div className="absolute -bottom-6 -right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl max-w-xs transform rotate-3 hover:rotate-0 transition-transform">
                <div className="flex items-start">
                  <span className="text-3xl mr-3">💬</span>
                  <div>
                    <p className="text-sm italic text-gray-700 dark:text-gray-300">
                      "প্রকৃতির দেওয়া স্বাদ, ফরমির দেওয়া বিশ্বাস"
                    </p>
                    <div className="w-full h-px bg-green-200 dark:bg-green-700 my-2"></div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">- স্থানীয় কৃষক</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Banner;