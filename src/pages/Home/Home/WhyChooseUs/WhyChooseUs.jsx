import React from 'react';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: "🌱",
            title: "১০০% অর্গানিক",
            description: "রাসায়নিক সার, কীটনাশক বা ফরমালিন ছাড়াই পাহাড়ে চাষ করা বিশুদ্ধ পণ্য",
            color: "from-emerald-500 to-green-400"
        },
        {
            icon: "👨‍🌾",
            title: "সরাসরি কৃষকের কাছ থেকে",
            description: "কোনো মধ্যস্বত্বভোগী নেই, পণ্য সরাসরি পাহাড়ি কৃষকদের কাছ থেকে সংগ্রহ",
            color: "from-amber-500 to-yellow-400"
        },
        {
            icon: "🔬",
            title: "ক্যুয়ালিটি টেস্টেড",
            description: "প্রতিটি ব্যাচের পণ্য রাসায়নিক ও ফরমালিন পরীক্ষা করে নিশ্চিত করা হয়",
            color: "from-blue-500 to-cyan-400"
        },
        {
            icon: "🚚",
            title: "দ্রুত ডেলিভারি",
            description: "সারা বাংলাদেশে ২-৩ দিনের মধ্যে সুরক্ষিত প্যাকেটে হোম ডেলিভারি",
            color: "from-purple-500 to-pink-400"
        },
        {
            icon: "💰",
            title: "সাশ্রয়ী মূল্য",
            description: "মধ্যস্বত্বভোগী না থাকায় যুক্তিসঙ্গত মূল্যে সেরা কোয়ালিটি",
            color: "from-red-500 to-orange-400"
        },
        {
            icon: "📞",
            title: "২৪/৭ সাপোর্ট",
            description: "যেকোনো সমস্যায় কল করুন ০১৫৭৭৩৭১৮৯৩ নম্বরে, আমরা আছি আপনার পাশে",
            color: "from-indigo-500 to-purple-400"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                {/* হেডার সেকশন */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        কেন <span className="text-emerald-600">আমাদের</span> পছন্দ করবেন?
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        আমরা শুধু পণ্য বিক্রি করি না, আমরা অঙ্গীকার করি বিশুদ্ধতা, বিশ্বস্ততা ও সেরা সেবার
                    </p>
                    <div className="flex justify-center gap-3 mt-6">
                        <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
                        <div className="w-4 h-4 bg-emerald-300 rounded-full"></div>
                        <div className="w-4 h-4 bg-emerald-200 rounded-full"></div>
                    </div>
                </div>

                {/* মূল কন্টেন্ট - ৬টি কারণ */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div 
                            key={index} 
                            className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* গ্রেডিয়েন্ট ব্যাকগ্রাউন্ড */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                            
                            {/* আইকন সেকশন */}
                            <div className="p-8">
                                <div className="relative">
                                    <div className={`absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br ${reason.color} opacity-10 rounded-full blur-xl`}></div>
                                    <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center text-3xl text-white mb-6 relative z-10 transform group-hover:scale-110 transition-transform duration-500`}>
                                        {reason.icon}
                                    </div>
                                </div>
                                
                                {/* টাইটেল এবং ডেস্ক্রিপশন */}
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {reason.description}
                                </p>
                                
                                {/* ডিভাইডার লাইন */}
                                <div className={`mt-6 w-12 h-1 bg-gradient-to-r ${reason.color} rounded-full`}></div>
                            </div>
                            
                            {/* হোভার ইফেক্ট বটম বার */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                        </div>
                    ))}
                </div>

                {/* এক্সট্রা ইনফো সেকশন */}
                <div className="mt-20 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="lg:w-2/3">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                আমাদের প্রতিশ্রুতি
                            </h3>
                            <p className="text-gray-700">
                                আমরা বিশ্বাস করি প্রতিটি গ্রাহকের স্বাস্থ্যই আমাদের সম্পদ। 
                                তাই আমরা প্রতিটি পণ্য নির্বাচনে বিশেষ যত্ন নিই। 
                                আপনার পরিবারের সুস্থতা আমাদের প্রথম অগ্রাধিকার।
                            </p>
                            <div className="mt-6 flex items-center gap-4">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mr-3">
                                        ✓
                                    </div>
                                    <span className="text-gray-700">গুণগত মান</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mr-3">
                                        ✓
                                    </div>
                                    <span className="text-gray-700">সময়ানুবর্তিতা</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mr-3">
                                        ✓
                                    </div>
                                    <span className="text-gray-700">গ্রাহক সন্তুষ্টি</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="lg:w-1/3 text-center lg:text-right">
                            <div className="text-5xl mb-4">🍃</div>
                            <button className="px-8 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-300 hover:scale-105">
                                এখনই অর্ডার করুন
                            </button>
                            <p className="text-gray-600 text-sm mt-3">কল করুন: ০১৫৭৭৩৭১৮৯৩</p>
                        </div>
                    </div>
                </div>

                {/* স্ট্যাটিস্টিক্স */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                        <div className="text-3xl font-bold text-emerald-600 mb-2">৫০০+</div>
                        <div className="text-gray-600">সন্তুষ্ট গ্রাহক</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                        <div className="text-3xl font-bold text-emerald-600 mb-2">১০০%</div>
                        <div className="text-gray-600">অর্গানিক পণ্য</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                        <div className="text-3xl font-bold text-emerald-600 mb-2">২৪/৭</div>
                        <div className="text-gray-600">সাপোর্ট সার্ভিস</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                        <div className="text-3xl font-bold text-emerald-600 mb-2">সারা দেশ</div>
                        <div className="text-gray-600">ডেলিভারি কভারেজ</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;