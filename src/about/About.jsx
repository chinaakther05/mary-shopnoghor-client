import React, { useState, useEffect } from 'react';
import aboutImg from '../assets/mm.png';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/whatsAppButton/WhatsAppButton';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Trigger animation on mount
        setIsVisible(true);

        // Check dark mode preference
        if (localStorage.theme === 'dark' || 
            (!('theme' in localStorage) && 
             window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        
        if (newDarkMode) {
            localStorage.theme = 'dark';
            document.documentElement.classList.add('dark');
        } else {
            localStorage.theme = 'light';
            document.documentElement.classList.remove('dark');
        }
    };

    const stats = [
        { number: '৫০০+', label: 'সন্তুষ্ট গ্রাহক', icon: '😊', delay: '100ms' },
        { number: '১০০%', label: 'বিশুদ্ধতা গ্যারান্টি', icon: '✅', delay: '300ms' },
        { number: '২৪/৭', label: 'সাপোর্ট সার্ভিস', icon: '📞', delay: '500ms' },
        { number: 'সারা দেশ', label: 'ডেলিভারি কভারেজ', icon: '🚚', delay: '700ms' },
    ];

    const services = [
        { icon: '🌱', title: 'অর্গানিক পাহাড়ি পণ্য সংগ্রহ', color: 'from-emerald-500 to-green-400' },
        { icon: '🔬', title: 'ফরমালিন ও রাসায়নিক পরীক্ষা', color: 'from-teal-500 to-cyan-400' },
        { icon: '🚚', title: 'সারা বাংলাদেশে ডেলিভারি', color: 'from-blue-500 to-indigo-400' },
        { icon: '📞', title: 'গ্রাহক সেবা ২৪/৭', color: 'from-purple-500 to-pink-400' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white
                      dark:from-gray-900 dark:via-gray-800/20 dark:to-gray-900
                      text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden">
            
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-10 w-96 h-96 bg-emerald-100 dark:bg-emerald-800/10 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 right-10 w-80 h-80 bg-teal-100 dark:bg-teal-800/10 rounded-full opacity-10 blur-3xl"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-20 left-5 animate-float-slow text-5xl opacity-10">🍃</div>
            <div className="absolute bottom-40 right-10 animate-float-slower text-4xl opacity-10">🌿</div>

            <div className="container mx-auto max-w-7xl px-4 py-12 md:py-20 relative z-10">
                
                {/* Dark Mode Toggle */}
                <div className="flex justify-end mb-8">
                    <button
                        onClick={toggleDarkMode}
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 
                                 hover:bg-gray-300 dark:hover:bg-gray-600 
                                 text-gray-800 dark:text-gray-200 
                                 rounded-full flex items-center gap-2 
                                 transition-colors duration-300 text-sm"
                    >
                        {isDarkMode ? (
                            <>
                                <span className="text-lg">☀️</span>
                                <span>লাইট মোড</span>
                            </>
                        ) : (
                            <>
                                <span className="text-lg">🌙</span>
                                <span>ডার্ক মোড</span>
                            </>
                        )}
                    </button>
                </div>

                {/* Hero Header Section */}
                <div className={`text-center mb-16 md:mb-24 transform transition-all duration-1000 delay-300 
                               ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    
                    {/* Decorative Badge */}
                    <div className="inline-flex items-center gap-3 px-6 py-3 
                                  bg-gradient-to-r from-emerald-100/80 to-teal-100/80 
                                  dark:from-emerald-800/40 dark:to-teal-800/40 
                                  backdrop-blur-sm rounded-full border border-emerald-200/50 
                                  dark:border-emerald-700/30 mb-6">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                        <span className="text-emerald-800 dark:text-emerald-300 font-semibold text-sm md:text-base">
                            💎 আমাদের পরিচয়
                        </span>
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping animation-delay-700"></div>
                    </div>
                    
                    {/* Main Heading with Gradient */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative">
                        <span className="block text-gray-900 dark:text-gray-100">
                            মেরির স্বপ্নঘর
                        </span>
                        <span className="block mt-2">
                            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-400 
                                          dark:from-emerald-400 dark:via-green-300 dark:to-teal-300 
                                          bg-clip-text text-transparent">
                                প্রকৃতির বিশুদ্ধতা
                            </span>
                        </span>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 
                                      bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mt-8 leading-relaxed">
                        বাংলাদেশের পাহাড়ি অঞ্চল থেকে সরাসরি সংগ্রহকৃত 
                        <span className="font-semibold text-emerald-700 dark:text-emerald-400"> অর্গানিক পণ্য</span>, 
                        শহুরে জীবনে <span className="italic">প্রকৃতির অবিচ্ছিন্ন স্বাদ</span>।
                    </p>
                    
                    {/* Animated Dots */}
                    <div className="flex justify-center gap-4 mt-8">
                        <div className="w-3 h-3 bg-emerald-400 dark:bg-emerald-600 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-teal-300 dark:bg-teal-600 rounded-full animate-pulse animation-delay-200"></div>
                        <div className="w-3 h-3 bg-emerald-300 dark:bg-emerald-500 rounded-full animate-pulse animation-delay-400"></div>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-20">
                    
                    {/* Image Section */}
                    <div className={`lg:w-1/2 relative group transform transition-all duration-1000 delay-500 
                                  ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl dark:shadow-gray-900/50">
                            <img 
                                src={aboutImg} 
                                alt="মেরির স্বপ্নঘর - পাহাড়ি কৃষি"
                                className="w-full h-[500px] object-cover transform group-hover:scale-105 
                                         transition-transform duration-700"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/10 dark:from-gray-900/20 
                                          via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-500"></div>
                            
                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6">
                                <div className="px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm 
                                              text-emerald-700 dark:text-emerald-400 font-bold rounded-full 
                                              flex items-center gap-2">
                                    <span>🏔️</span>
                                    <span>পাহাড়ি ঐতিহ্য</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative Circles */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-100 dark:bg-teal-700 
                                      rounded-full opacity-30 blur-xl animate-pulse-slow"></div>
                        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-emerald-100 dark:bg-emerald-700 
                                      rounded-full opacity-30 blur-xl animate-pulse-slow animation-delay-2000"></div>
                    </div>
                    
                    {/* Text Content Section */}
                    <div className={`lg:w-1/2 transform transition-all duration-1000 delay-700 
                                  ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl 
                                      shadow-xl border border-emerald-100/30 dark:border-gray-700/30
                                      hover:shadow-2xl transition-all duration-500">
                            
                            {/* Category Badge */}
                            <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 
                                          dark:from-emerald-600 dark:to-teal-600 text-white rounded-full 
                                          text-sm font-semibold mb-6 shadow-md">
                                🌱 ১০০% অর্গানিক ও প্রাকৃতিক
                            </div>
                            
                            {/* Section Title */}
                            <h2 className="text-3xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-gray-900 to-emerald-700 
                                              dark:from-gray-100 dark:to-emerald-400 
                                              bg-clip-text text-transparent">
                                    আমাদের গল্প ও উদ্দেশ্য
                                </span>
                            </h2>
                            
                            {/* Description */}
                            <div className="space-y-6">
                                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                    <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                                        "মেরির স্বপ্নঘর"
                                    </span> 
                                    {' '}শুধু একটি ব্যবসা প্রতিষ্ঠান নয়, এটি একটি সামাজিক উদ্যোগ। 
                                    আমরা বাংলাদেশের পাহাড়ি অঞ্চলের ঐতিহ্যবাহী কৃষি পদ্ধতি সংরক্ষণ 
                                    ও সম্প্রসারণে কাজ করছি।
                                </p>
                                
                                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                    আমাদের মূল লক্ষ্য শহুরে জনগণের জন্য 
                                    <span className="font-semibold"> বিশুদ্ধ, অর্গানিক ও পুষ্টিকর খাদ্য </span>
                                    সরবরাহ করা এবং একই সাথে স্থানীয় কৃষকদের জন্য ন্যায্য আয়ের ব্যবস্থা করা।
                                </p>
                                
                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-4 pt-6">
                                    {stats.map((stat, index) => (
                                        <div 
                                            key={index}
                                            className="text-center p-4 bg-gradient-to-br from-emerald-50/50 to-white/50
                                                    dark:from-gray-700/50 dark:to-gray-800/50 rounded-2xl shadow-sm
                                                    border border-emerald-100/20 dark:border-gray-700/20
                                                    transform transition-all duration-300 hover:scale-105 hover:shadow-md"
                                        >
                                            <div className="text-2xl mb-1">{stat.icon}</div>
                                            <div className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                                                {stat.number}
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* CTA Button */}
                                <div className="pt-8">
                                    <Link 
                                        to="/products"
                                        className="group relative inline-flex items-center px-8 py-4 
                                                 bg-gradient-to-r from-emerald-500 to-teal-500 
                                                 dark:from-emerald-400 dark:to-teal-400
                                                 text-white rounded-xl font-semibold overflow-hidden 
                                                 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-600 
                                                      dark:from-teal-400 dark:to-emerald-500 
                                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <span className="relative z-10 flex items-center gap-2">
                                            <span>🛒</span>
                                            আমাদের পণ্য দেখুন
                                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    
                    {/* Services Card */}
                    <div className={`relative group transform transition-all duration-1000 delay-900 
                                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="bg-gradient-to-br from-white/80 dark:from-gray-800/60 to-emerald-50/80 
                                      dark:to-gray-700/50 p-8 rounded-3xl shadow-xl 
                                      border border-emerald-100/30 dark:border-gray-700/30
                                      transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                            
                            {/* Decorative Circle */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/10 
                                          dark:from-emerald-700/10 to-teal-200/10 rounded-full 
                                          -translate-y-16 translate-x-16"></div>
                            
                            {/* Card Header */}
                            <div className="mb-8 relative z-10">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                    <span className="flex items-center gap-3">
                                        <span className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-400 
                                                      rounded-lg flex items-center justify-center text-white text-xl">
                                            ⚡
                                        </span>
                                        <span>আমরা যা করি</span>
                                    </span>
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    সম্পূর্ণ প্রাকৃতিক প্রক্রিয়ায় পণ্য সংগ্রহ থেকে শুরু করে আপনার দোরগোড়ায় পৌঁছে দেওয়া পর্যন্ত
                                </p>
                            </div>
                            
                            {/* Services List */}
                            <div className="space-y-4 relative z-10">
                                {services.map((service, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-center p-4 bg-gradient-to-r from-white/60 dark:from-gray-800/40 
                                                  to-emerald-50/40 dark:to-gray-700/40 rounded-xl hover:shadow-lg 
                                                  transition-all duration-300 transform hover:scale-[1.02] 
                                                  border border-emerald-100/20 dark:border-gray-700/20"
                                    >
                                        <div className={`w-12 h-12 bg-gradient-to-br ${service.color} 
                                                      rounded-lg flex items-center justify-center text-white text-xl mr-4`}>
                                            {service.icon}
                                        </div>
                                        <span className="font-medium text-gray-800 dark:text-gray-200">
                                            {service.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact & WhatsApp Card */}
                    <div className={`relative group transform transition-all duration-1000 delay-1100 
                                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="bg-gradient-to-br from-emerald-500 to-teal-500 
                                      dark:from-teal-700 dark:to-emerald-700 p-8 rounded-3xl shadow-xl 
                                      transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
                                      border border-emerald-400/20 dark:border-teal-600/20">
                            
                            {/* Decorative Circle */}
                            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 dark:bg-gray-200/10 
                                          rounded-full -translate-y-16 -translate-x-16"></div>
                            
                            {/* Card Header */}
                            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">
                                <span className="flex items-center gap-3">
                                    <span className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-xl">
                                        📱
                                    </span>
                                    <span>আমাদের সাথে যোগাযোগ করুন</span>
                                </span>
                            </h3>
                            
                            {/* Contact Info */}
                            <div className="space-y-6 relative z-10">
                                {/* Phone Number Section */}
                                <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm p-6 rounded-2xl 
                                              hover:bg-white/15 dark:hover:bg-gray-700/30 transition-all duration-300">
                                    <div className="font-semibold text-white/90 dark:text-gray-200 mb-3 flex items-center gap-2">
                                        <span>📞</span>
                                        <span>ফোন নম্বর</span>
                                    </div>
                                    <div className="text-2xl md:text-3xl font-bold text-white dark:text-gray-100 mb-3">
                                        ০১৫৭৭-৩৭১-৮৯৩
                                    </div>
                                    <div className="text-white/80 dark:text-gray-300 text-sm">
                                        ২৪ ঘন্টা হোয়াটসঅ্যাপে অর্ডার করুন
                                    </div>
                                </div>
                                
                                {/* WhatsApp Button Section */}
                                <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm p-6 rounded-2xl 
                                              hover:bg-white/15 dark:hover:bg-gray-700/30 transition-all duration-300">
                                    <WhatsAppButton 
                                        className="w-full py-3 px-6 bg-white/20 hover:bg-white/30 
                                                 dark:bg-gray-700/40 dark:hover:bg-gray-600/50 
                                                 text-white rounded-xl font-semibold 
                                                 transition-all duration-300 hover:scale-[1.02] 
                                                 flex items-center justify-center gap-3"
                                        showIcon={true}
                                        message="হ্যালো, মেরির স্বপ্নঘর সম্পর্কে বিস্তারিত জানতে চাই।"
                                    />
                                </div>
                                
                                {/* Products Section */}
                                <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm p-6 rounded-2xl 
                                              hover:bg-white/15 dark:hover:bg-gray-700/30 transition-all duration-300">
                                    <div className="font-semibold text-white/90 dark:text-gray-200 mb-3">
                                        আমাদের বিশেষ পণ্যসমূহ
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {['হলুদ', 'আদা', 'মরিচ', 'বিন্নি চাল', 'চুইঝাল', 'তেঁতুল'].map((product, idx) => (
                                            <span 
                                                key={idx}
                                                className="px-3 py-1.5 bg-white/20 dark:bg-gray-700/40 
                                                         text-white dark:text-gray-100 text-sm rounded-full 
                                                         backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-600/50 
                                                         transition-colors duration-300"
                                            >
                                                {product}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Quick Order Button */}
                            <div className="mt-8 pt-6 border-t border-white/20 dark:border-gray-600/50">
                                <button className="w-full py-4 bg-white text-emerald-600 dark:bg-gray-100 
                                                 dark:text-emerald-700 rounded-xl font-bold 
                                                 transition-all duration-300 hover:scale-[1.02] 
                                                 active:scale-95 hover:shadow-lg flex items-center justify-center gap-2">
                                    <span>⚡</span>
                                    এখনই অর্ডার করুন
                                    <span>→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Quote */}
                <div className={`text-center transform transition-all duration-1000 delay-1300 
                              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 
                                  dark:from-gray-800/50 dark:to-gray-700/50 backdrop-blur-sm rounded-2xl
                                  border border-emerald-200/20 dark:border-gray-700/30">
                        <p className="text-emerald-800 dark:text-emerald-400 font-medium text-lg">
                            🍃 প্রকৃতির বিশুদ্ধতা আমাদের অঙ্গীকার 🍃
                        </p>
                        <p className="text-gray-600 dark:text-gray-500 text-sm mt-2">
                            স্বাস্থ্যকর জীবন, প্রাকৃতিক পণ্য
                        </p>
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                
                @keyframes float-slower {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 0.4; }
                }
                
                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }
                
                .animate-float-slower {
                    animation: float-slower 8s ease-in-out infinite;
                }
                
                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }
                
                .animation-delay-200 {
                    animation-delay: 200ms;
                }
                
                .animation-delay-400 {
                    animation-delay: 400ms;
                }
                
                .animation-delay-700 {
                    animation-delay: 700ms;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2000ms;
                }
            `}</style>
        </div>
    );
};

export default About;