import React from 'react';
import aboutImg from '../assets/mm.png';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 py-16 px-4 transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">
                
                {/* হেডার - উন্নত ডিজাইন */}
                <div className="text-center mb-20 relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-emerald-100 dark:bg-emerald-700 rounded-full opacity-20 blur-3xl"></div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 relative">
                        <span className="relative">
                            আমাদের পরিচয়
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400"></span>
                        </span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-xl max-w-3xl mx-auto relative z-10">
                        প্রকৃতির বিশুদ্ধতা, আপনার সুস্বাস্থ্য
                    </p>
                    <div className="flex justify-center gap-4 mt-8">
                        <div className="w-3 h-3 bg-emerald-400 dark:bg-emerald-600 rounded-full"></div>
                        <div className="w-3 h-3 bg-teal-300 dark:bg-teal-600 rounded-full"></div>
                        <div className="w-3 h-3 bg-emerald-300 dark:bg-emerald-500 rounded-full"></div>
                    </div>
                </div>

                {/* মূল কন্টেন্ট - কার্ড ইফেক্ট */}
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
                    <div className="lg:w-1/2 relative group">
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                            <img 
                                src={aboutImg} 
                                alt="আমাদের সম্পর্কে"
                                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* গ্রেডিয়েন্ট ওভারলে */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/10 dark:from-gray-900/20 to-transparent"></div>
                        </div>
                        {/* ডেকোরেটিভ এলিমেন্ট */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-100 dark:bg-teal-700 rounded-full opacity-50"></div>
                        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-emerald-100 dark:bg-emerald-700 rounded-full opacity-50"></div>
                    </div>
                    
                    <div className="lg:w-1/2">
                        <div className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700">
                            <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-sm font-semibold mb-6">
                                🍃 ১০০% অর্গানিক
                            </div>
                            
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 bg-gradient-to-r from-gray-900 to-emerald-700 dark:from-gray-100 dark:to-emerald-400 bg-clip-text text-transparent">
                                মেরির স্বপ্নঘর সম্পর্কে
                            </h2>
                            
                            <div className="space-y-6">
                                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                                    আমরা বাংলাদেশের পাহাড়ি অঞ্চলের ঐতিহ্যবাহী কৃষি পদ্ধতি 
                                    সংরক্ষণ ও সম্প্রসারণে কাজ করছি। আমাদের লক্ষ্য শহুরে 
                                    জনগণের জন্য বিশুদ্ধ, অর্গানিক ও পুষ্টিকর খাদ্য সরবরাহ করা।
                                </p>
                                
                                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                    প্রতিটি পণ্য আমরা ব্যক্তিগতভাবে নির্বাচন করি এবং 
                                    কৃষকদের সাথে সরাসরি কাজ করি যাতে তারা ন্যায্য মূল্য পায় 
                                    এবং আপনিও পেতে পারেন বিশ্বস্ত পণ্য।
                                </p>
                                
                                {/* স্ট্যাটিস্টিক্স */}
                                <div className="grid grid-cols-2 gap-4 pt-6">
                                    <div className="text-center p-4 bg-gradient-to-br from-emerald-50 dark:from-gray-700 to-white dark:to-gray-800 rounded-2xl shadow-sm">
                                        <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">৫০০+</div>
                                        <div className="text-gray-600 dark:text-gray-300 text-sm">সন্তুষ্ট গ্রাহক</div>
                                    </div>
                                    <div className="text-center p-4 bg-gradient-to-br from-emerald-50 dark:from-gray-700 to-white dark:to-gray-800 rounded-2xl shadow-sm">
                                        <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">১০০%</div>
                                        <div className="text-gray-600 dark:text-gray-300 text-sm">বিশুদ্ধতা গ্যারান্টি</div>
                                    </div>
                                </div>
                                
                                <div className="pt-6">
                                    <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                                        <span className="relative z-10">আমাদের পণ্য দেখুন</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-20 blur group-hover:opacity-30 transition-opacity duration-500"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* কার্ড সেকশন */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* বাম কার্ড */}
                    <div className="relative group">
                        <div className="bg-gradient-to-br from-white/80 dark:from-gray-800/60 to-emerald-50/80 dark:to-gray-700/50 p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-gray-700 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/20 dark:from-emerald-700/20 to-teal-200/20 rounded-full -translate-y-16 translate-x-16"></div>
                            
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 relative">
                                <span className="flex items-center gap-3">
                                    <span className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center text-white">
                                        ✓
                                    </span>
                                    আমরা যা করি
                                </span>
                            </h3>
                            
                            <ul className="space-y-4 relative z-10">
                                <li className="flex items-center p-3 bg-gradient-to-r from-white/80 dark:from-gray-800/60 to-emerald-50/80 dark:to-gray-700/50 rounded-xl hover:shadow-md transition-shadow">
                                    <span className="w-8 h-8 bg-emerald-100 dark:bg-emerald-700 text-emerald-600 dark:text-emerald-300 rounded-full flex items-center justify-center mr-4">
                                        🌱
                                    </span>
                                    <span className="font-medium">অর্গানিক পাহাড়ি পণ্য সংগ্রহ</span>
                                </li>
                                <li className="flex items-center p-3 bg-gradient-to-r from-white/80 dark:from-gray-800/60 to-emerald-50/80 dark:to-gray-700/50 rounded-xl hover:shadow-md transition-shadow">
                                    <span className="w-8 h-8 bg-emerald-100 dark:bg-emerald-700 text-emerald-600 dark:text-emerald-300 rounded-full flex items-center justify-center mr-4">
                                        🔬
                                    </span>
                                    <span className="font-medium">ফরমালিন ও রাসায়নিক পরীক্ষা</span>
                                </li>
                                <li className="flex items-center p-3 bg-gradient-to-r from-white/80 dark:from-gray-800/60 to-emerald-50/80 dark:to-gray-700/50 rounded-xl hover:shadow-md transition-shadow">
                                    <span className="w-8 h-8 bg-emerald-100 dark:bg-emerald-700 text-emerald-600 dark:text-emerald-300 rounded-full flex items-center justify-center mr-4">
                                        🚚
                                    </span>
                                    <span className="font-medium">সারা বাংলাদেশে ডেলিভারি</span>
                                </li>
                                <li className="flex items-center p-3 bg-gradient-to-r from-white/80 dark:from-gray-800/60 to-emerald-50/80 dark:to-gray-700/50 rounded-xl hover:shadow-md transition-shadow">
                                    <span className="w-8 h-8 bg-emerald-100 dark:bg-emerald-700 text-emerald-600 dark:text-emerald-300 rounded-full flex items-center justify-center mr-4">
                                        📞
                                    </span>
                                    <span className="font-medium">গ্রাহক সেবা ২৪/৭</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* ডান কার্ড */}
                    <div className="relative group">
                        <div className="bg-gradient-to-br from-emerald-500 to-teal-500 dark:from-teal-700 dark:to-emerald-700 p-8 rounded-3xl shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 dark:bg-gray-200/10 rounded-full -translate-y-16 -translate-x-16"></div>
                            
                            <h3 className="text-2xl font-bold text-white mb-6 relative">
                                <span className="flex items-center gap-3">
                                    <span className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                        📱
                                    </span>
                                    যোগাযোগ
                                </span>
                            </h3>
                            
                            <div className="space-y-6 relative z-10">
                                <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm p-5 rounded-2xl hover:bg-white/15 dark:hover:bg-gray-700/30 transition-colors">
                                    <div className="font-semibold text-white/90 dark:text-gray-200 mb-2">ফোন নম্বর</div>
                                    <div className="text-2xl font-bold text-white dark:text-gray-100">০১৫৭৭৩৭১৮৯৩</div>
                                    <div className="text-white/80 dark:text-gray-300 text-sm mt-2">হোয়াটসঅ্যাপে অর্ডার করুন</div>
                                </div>
                                
                                <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm p-5 rounded-2xl hover:bg-white/15 dark:hover:bg-gray-700/30 transition-colors">
                                    <div className="font-semibold text-white/90 dark:text-gray-200 mb-2">সার্ভিস</div>
                                    <div className="text-white dark:text-gray-100">পুরো বাংলাদেশে হোম ডেলিভারি</div>
                                </div>
                                
                                <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm p-5 rounded-2xl hover:bg-white/15 dark:hover:bg-gray-700/30 transition-colors">
                                    <div className="font-semibold text-white/90 dark:text-gray-200 mb-2">পণ্য</div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/20 dark:bg-gray-700 text-white dark:text-gray-100 text-sm rounded-full">হলুদ</span>
                                        <span className="px-3 py-1 bg-white/20 dark:bg-gray-700 text-white dark:text-gray-100 text-sm rounded-full">আদা</span>
                                        <span className="px-3 py-1 bg-white/20 dark:bg-gray-700 text-white dark:text-gray-100 text-sm rounded-full">মরিচ</span>
                                        <span className="px-3 py-1 bg-white/20 dark:bg-gray-700 text-white dark:text-gray-100 text-sm rounded-full">বিন্নি চাল</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-8 pt-6 border-t border-white/20 dark:border-gray-600">
                                <button className="w-full py-3 bg-white text-emerald-600 dark:bg-gray-200 dark:text-emerald-700 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-300 transition-all duration-300 hover:scale-[1.02] active:scale-95">
                                    এখনই অর্ডার করুন
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <div className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-100 dark:from-gray-800 to-teal-100 dark:to-gray-700 rounded-full">
                        <span className="text-emerald-700 dark:text-emerald-400 font-medium">🍃 প্রকৃতির বিশুদ্ধতা আমাদের অঙ্গীকার 🍃</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
