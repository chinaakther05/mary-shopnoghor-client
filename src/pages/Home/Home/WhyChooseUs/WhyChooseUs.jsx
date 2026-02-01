import React, { useState, useEffect } from 'react';

const WhyChooseUs = () => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Fade in effect on mount
        setVisible(true);
        
        // Auto-rotate active card every 3 seconds
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % reasons.length);
        }, 3000);
        
        return () => clearInterval(interval);
    }, []);

    const reasons = [
        {
            icon: "🌱",
            title: "১০০% অর্গানিক",
            description: "রাসায়নিক সার, কীটনাশক বা ফরমালিন ছাড়াই পাহাড়ে চাষ করা বিশুদ্ধ পণ্য",
            color: "from-emerald-500 to-green-400",
            darkColor: "from-emerald-600 dark:to-green-700",
            details: "প্রতিটি পণ্য পাহাড়ের প্রাকৃতিক পরিবেশে চাষ করা হয়, কোন কৃত্রিম উপায়ে বৃদ্ধি করা হয় না।"
        },
        {
            icon: "👨‍🌾",
            title: "সরাসরি কৃষকের কাছ থেকে",
            description: "কোনো মধ্যস্বত্বভোগী নেই, পণ্য সরাসরি পাহাড়ি কৃষকদের কাছ থেকে সংগ্রহ",
            color: "from-amber-500 to-yellow-400",
            darkColor: "from-amber-600 dark:to-yellow-600",
            details: "আমরা স্থানীয় কৃষকদের সাথে সরাসরি কাজ করি, তাদের ন্যায্য মজুরি দিই এবং তাদের সম্প্রদায়কে সমর্থন করি।"
        },
        {
            icon: "🔬",
            title: "ক্যুয়ালিটি টেস্টেড",
            description: "প্রতিটি ব্যাচের পণ্য রাসায়নিক ও ফরমালিন পরীক্ষা করে নিশ্চিত করা হয়",
            color: "from-blue-500 to-cyan-400",
            darkColor: "from-blue-600 dark:to-cyan-600",
            details: "আমাদের ল্যাবে প্রতিটি পণ্য পরীক্ষা করা হয় এবং শুধুমাত্র মানসম্পন্ন পণ্যই গ্রাহকের কাছে পাঠানো হয়।"
        },
        {
            icon: "🚚",
            title: "দ্রুত ডেলিভারি",
            description: "সারা বাংলাদেশে ২-৩ দিনের মধ্যে সুরক্ষিত প্যাকেটে হোম ডেলিভারি",
            color: "from-purple-500 to-pink-400",
            darkColor: "from-purple-600 dark:to-pink-600",
            details: "আধুনিক প্যাকেজিং সিস্টেম ব্যবহার করে পণ্য তাজা এবং নিরাপদ অবস্থায় আপনার দোরগোড়ায় পৌঁছে দিই।"
        },
        {
            icon: "💰",
            title: "সাশ্রয়ী মূল্য",
            description: "মধ্যস্বত্বভোগী না থাকায় যুক্তিসঙ্গত মূল্যে সেরা কোয়ালিটি",
            color: "from-red-500 to-orange-400",
            darkColor: "from-red-600 dark:to-orange-600",
            details: "সরাসরি কৃষকের কাছ থেকে কেনায় অতিরিক্ত খরচ বাদ পড়ে, তাই আপনি পান সেরা দামে সেরা পণ্য।"
        },
        {
            icon: "📞",
            title: "২৪/৭ সাপোর্ট",
            description: "যেকোনো সমস্যায় কল করুন ০১৫৭৭৩৭১৮৯৩ নম্বরে, আমরা আছি আপনার পাশে",
            color: "from-indigo-500 to-purple-400",
            darkColor: "from-indigo-600 dark:to-purple-600",
            details: "অর্ডার, ডেলিভারি বা পণ্য সম্পর্কিত যেকোনো প্রশ্নের জন্য আমরা ২৪ ঘন্টা সেবা প্রদান করি।"
        }
    ];

    return (
        <section className={`relative py-20 md:py-28 overflow-hidden 
                          bg-gradient-to-b from-white via-emerald-50/30 to-white
                          dark:from-gray-900 dark:via-gray-800/20 dark:to-gray-900
                          transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-200/20 dark:bg-emerald-700/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-200/20 dark:bg-amber-700/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-20 left-10 animate-float-slow text-4xl opacity-10">🍃</div>
            <div className="absolute bottom-20 right-10 animate-float-slower text-5xl opacity-10">🌿</div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header with Animation */}
                <div className={`text-center mb-16 transform transition-all duration-1000 delay-300 
                              ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="inline-flex items-center gap-3 px-6 py-3 
                                  bg-gradient-to-r from-emerald-100/80 to-green-100/80 
                                  dark:from-emerald-800/40 dark:to-green-800/40 
                                  backdrop-blur-sm rounded-full border border-emerald-200/50 
                                  dark:border-emerald-700/30 mb-6">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                        <span className="text-emerald-800 dark:text-emerald-300 font-semibold text-sm md:text-base">
                            💎 আমাদের অঙ্গীকার
                        </span>
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping animation-delay-700"></div>
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                        কেন বেছে নেবেন{' '}
                        <span className="relative">
                            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-400 
                                          dark:from-emerald-400 dark:via-green-300 dark:to-teal-300 
                                          bg-clip-text text-transparent">
                                ফরমির মিশন?
                            </span>
                            <span className="absolute -right-6 -top-2 text-3xl animate-bounce">✨</span>
                        </span>
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        শুধু পণ্য নয়, আমরা অঙ্গীকার করি{' '}
                        <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                            বিশুদ্ধতা, বিশ্বস্ততা ও সেরা সেবার
                        </span>
                    </p>
                    
                    {/* Animated Divider */}
                    <div className="flex justify-center gap-3 mt-8">
                        <div className="w-4 h-4 bg-emerald-400 dark:bg-emerald-600 rounded-full animate-pulse"></div>
                        <div className="w-4 h-4 bg-emerald-300 dark:bg-emerald-500 rounded-full animate-pulse animation-delay-200"></div>
                        <div className="w-4 h-4 bg-emerald-200 dark:bg-emerald-400 rounded-full animate-pulse animation-delay-400"></div>
                    </div>
                </div>

                {/* Main Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {reasons.map((reason, index) => (
                        <div 
                            key={index}
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(-1)}
                            className={`group relative overflow-hidden 
                                     bg-white/80 dark:bg-gray-800/80 
                                     backdrop-blur-sm
                                     rounded-2xl 
                                     shadow-xl hover:shadow-2xl 
                                     transition-all duration-500
                                     transform
                                     ${activeIndex === index ? 'scale-105 -translate-y-2 z-10' : 'hover:-translate-y-1'}
                                     border border-emerald-100/50 dark:border-gray-700/50
                                     hover:border-emerald-300/50 dark:hover:border-emerald-600/50`}
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} dark:${reason.darkColor} 
                                          opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 
                                          transition-opacity duration-500`}></div>
                            
                            {/* Glow Effect */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-br ${reason.color} dark:${reason.darkColor} 
                                          rounded-2xl opacity-0 group-hover:opacity-20 blur-xl 
                                          transition-opacity duration-500 -z-10`}></div>
                            
                            {/* Content */}
                            <div className="relative p-6 lg:p-8">
                                {/* Icon Section */}
                                <div className="relative mb-6">
                                    <div className={`absolute -top-3 -left-3 w-16 h-16 
                                                  bg-gradient-to-br ${reason.color} dark:${reason.darkColor} 
                                                  opacity-10 rounded-full blur-lg`}></div>
                                    <div className={`w-14 h-14 lg:w-16 lg:h-16
                                                  bg-gradient-to-br ${reason.color} dark:${reason.darkColor}
                                                  rounded-2xl flex items-center justify-center 
                                                  text-2xl lg:text-3xl text-white
                                                  transform transition-all duration-500
                                                  ${activeIndex === index ? 'scale-110 rotate-3' : 'group-hover:scale-105'}`}>
                                        {reason.icon}
                                    </div>
                                </div>
                                
                                {/* Title */}
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 
                                             transition-colors duration-300
                                             group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                                    {reason.title}
                                </h3>
                                
                                {/* Main Description */}
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    {reason.description}
                                </p>
                                
                                {/* Extra Details (Shows on hover/active) */}
                                <div className={`overflow-hidden transition-all duration-500 
                                              ${activeIndex === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-emerald-100/50 dark:border-gray-700/50">
                                        {reason.details}
                                    </p>
                                </div>
                                
                                {/* Animated Divider */}
                                <div className="mt-6 relative">
                                    <div className={`w-12 h-1 bg-gradient-to-r ${reason.color} dark:${reason.darkColor} 
                                                  rounded-full transform transition-all duration-500
                                                  ${activeIndex === index ? 'scale-x-150' : 'group-hover:scale-x-125'}`}></div>
                                </div>
                            </div>
                            
                            {/* Bottom Indicator */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 
                                          bg-gradient-to-r ${reason.color} dark:${reason.darkColor}
                                          transform transition-transform duration-500
                                          ${activeIndex === index ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                                          origin-left`}></div>
                        </div>
                    ))}
                </div>

                {/* Extra Info Section with Enhanced Animation */}
                <div className={`relative bg-gradient-to-r from-emerald-50/80 via-white/50 to-teal-50/80 
                              dark:from-gray-700/50 dark:via-gray-800/50 dark:to-gray-700/50 
                              backdrop-blur-sm rounded-3xl p-8 md:p-12 
                              border border-emerald-100/30 dark:border-gray-700/30
                              shadow-2xl transform transition-all duration-1000 delay-500
                              ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    
                    {/* Floating Badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-green-500 
                                      text-white font-bold rounded-full shadow-lg 
                                      flex items-center gap-2">
                            <span>⭐</span>
                            <span>আমাদের প্রতিশ্রুতি</span>
                            <span>⭐</span>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                        <div className="lg:w-2/3">
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                                প্রতিটি পরিবারের জন্য <span className="text-emerald-600 dark:text-emerald-400">বিশুদ্ধ খাবার</span> এর গ্যারান্টি
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                                আমরা বিশ্বাস করি প্রতিটি গ্রাহকের স্বাস্থ্যই আমাদের সম্পদ। 
                                তাই আমরা প্রতিটি পণ্য নির্বাচনে বিশেষ যত্ন নিই। 
                                আপনার পরিবারের সুস্থতা আমাদের <span className="font-semibold">প্রথম অগ্রাধিকার</span>।
                            </p>
                            
                            {/* Features Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    { icon: "✓", text: "গুণগত মান", delay: "100ms" },
                                    { icon: "✓", text: "সময়ানুবর্তিতা", delay: "200ms" },
                                    { icon: "✓", text: "গ্রাহক সন্তুষ্টি", delay: "300ms" },
                                    { icon: "💚", text: "পরিবেশ বান্ধব", delay: "400ms" },
                                    { icon: "🏆", text: "বেস্ট প্রাইস", delay: "500ms" },
                                    { icon: "🛡️", text: "১০০% গ্যারান্টি", delay: "600ms" },
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center p-3 bg-white/60 dark:bg-gray-800/60 
                                                          rounded-xl border border-emerald-100/30 dark:border-gray-700/30">
                                        <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-700 
                                                      text-emerald-600 dark:text-emerald-300 
                                                      rounded-lg flex items-center justify-center mr-3">
                                            {feature.icon}
                                        </div>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                                            {feature.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* CTA Section */}
                        <div className="lg:w-1/3 w-full">
                            <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 
                                          dark:from-emerald-600/20 dark:to-green-600/20 
                                          rounded-2xl p-6 text-center border border-emerald-200/30 
                                          dark:border-emerald-700/30 backdrop-blur-sm">
                                <div className="text-6xl mb-6 animate-bounce-slow">🍃</div>
                                <button className="w-full py-4 bg-gradient-to-r from-emerald-600 to-green-500 
                                                 dark:from-emerald-500 dark:to-green-400 
                                                 text-white rounded-xl font-bold text-lg
                                                 shadow-lg hover:shadow-xl 
                                                 transition-all duration-300 hover:-translate-y-1
                                                 hover:from-emerald-700 hover:to-green-600">
                                    এখনই অর্ডার করুন →
                                </button>
                                <div className="mt-6 p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg">
                                    <div className="text-emerald-700 dark:text-emerald-400 font-bold text-sm mb-1">
                                        হেল্পলাইন নম্বর
                                    </div>
                                    <div className="text-gray-900 dark:text-gray-100 text-xl font-mono font-bold">
                                        ০১৫৭৭-৩৭১-৮৯৩
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                                        ২৪ ঘণ্টা সার্ভিস
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistics with Counting Animation */}
                <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 transform transition-all duration-1000 delay-700
                              ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {[
                        { number: '৫০০+', label: 'সন্তুষ্ট গ্রাহক', suffix: '', color: 'from-emerald-500 to-green-400' },
                        { number: '১০০%', label: 'অর্গানিক পণ্য', suffix: '', color: 'from-amber-500 to-yellow-400' },
                        { number: '২৪/৭', label: 'সাপোর্ট সার্ভিস', suffix: '', color: 'from-blue-500 to-cyan-400' },
                        { number: 'সারা দেশ', label: 'ডেলিভারি কভারেজ', suffix: '', color: 'from-purple-500 to-pink-400' },
                    ].map((stat, i) => (
                        <div key={i} className="relative group">
                            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 
                                          group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
                            <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 
                                          backdrop-blur-sm rounded-2xl shadow-lg
                                          border border-emerald-100/30 dark:border-gray-700/30">
                                <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-br ${stat.color} 
                                              bg-clip-text text-transparent mb-2`}>
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                            </div>
                        </div>
                    ))}
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
                
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.1; }
                    50% { opacity: 0.2; }
                }
                
                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }
                
                .animate-float-slower {
                    animation: float-slower 8s ease-in-out infinite;
                }
                
                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
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
        </section>
    );
};

export default WhyChooseUs;