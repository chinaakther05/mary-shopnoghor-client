import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaFacebook, FaEnvelope } from 'react-icons/fa';
import WhatsAppButton from '../components/whatsAppButton/WhatsAppButton';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('ধন্যবাদ! আপনার বার্তা পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    const contactInfo = [
        {
            icon: <FaPhone />,
            title: "ফোন নম্বর",
            details: "০১৫৭৭-৩৭১-৮৯৩",
            description: "২৪/৭ কল করুন",
            color: "from-emerald-500 to-green-400",
            action: "tel:+8801577371893"
        },
        {
            icon: <FaWhatsapp />,
            title: "হোয়াটসঅ্যাপ",
            details: "হোয়াটসঅ্যাপে মেসেজ করুন",
            description: "দ্রুত উত্তর পাবেন",
            color: "from-green-500 to-teal-400",
            action: "whatsapp"
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "ঠিকানা",
            details: "পার্বত্য চট্টগ্রাম",
            description: "বান্দরবান, রাঙ্গামাটি, খাগড়াছড়ি",
            color: "from-amber-500 to-orange-400"
        },
        {
            icon: <FaClock />,
            title: "কাজের সময়",
            details: "সকাল ৯টা - রাত ১০টা",
            description: "শুক্রবার বন্ধ",
            color: "from-blue-500 to-cyan-400"
        }
    ];

    const contactMethods = [
        {
            platform: "ফেসবুক",
            icon: <FaFacebook />,
            link: "https://facebook.com/profile.php?id=100082245783304",
            username: "মেরির স্বপ্নঘর",
            color: "bg-blue-500"
        },
        {
            platform: "হোয়াটসঅ্যাপ",
            icon: <FaWhatsapp />,
            link: "https://wa.me/8801577371893",
            username: "01577371893",
            color: "bg-green-500"
        },
        {
            platform: "ইমেইল",
            icon: <FaEnvelope />,
            link: "mailto:contact@merirshopnogor.com",
            username: "contact@merirshopnogor.com",
            color: "bg-red-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white dark:from-gray-900 dark:via-gray-800/20 dark:to-gray-900 transition-colors duration-500">
            
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/20 to-teal-50/20 dark:from-emerald-900/10 dark:to-teal-900/10"></div>
                
                <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-100/80 to-teal-100/80 dark:from-emerald-800/40 dark:to-teal-800/40 backdrop-blur-sm rounded-full border border-emerald-200/50 dark:border-emerald-700/30 mb-6">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                            <span className="text-emerald-800 dark:text-emerald-300 font-semibold">📞 যোগাযোগ করুন</span>
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping animation-delay-700"></div>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                            আমাদের সাথে <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-400 dark:from-emerald-400 dark:via-green-300 dark:to-teal-300 bg-clip-text text-transparent">যোগাযোগ</span> করুন
                        </h1>
                        
                        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            যেকোনো প্রশ্ন, অর্ডার বা পরামর্শের জন্য আমরা আছি আপনার পাশে। 
                            আপনার সুবিধার জন্য একাধিক যোগাযোগ মাধ্যম রাখা হয়েছে।
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Column - Contact Info Cards */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                {contactInfo.map((info, index) => (
                                    <div 
                                        key={index}
                                        className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-emerald-100/30 dark:border-gray-700/30"
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                        
                                        <div className="relative p-6">
                                            <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl text-white text-xl mb-4`}>
                                                {info.icon}
                                            </div>
                                            
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                                {info.title}
                                            </h3>
                                            
                                            <div className="space-y-2">
                                                <p className="text-gray-700 dark:text-gray-300 font-semibold text-lg">
                                                    {info.details}
                                                </p>
                                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                                    {info.description}
                                                </p>
                                            </div>
                                            
                                            {info.action === "whatsapp" ? (
                                                <div className="mt-4">
                                                    <WhatsAppButton 
                                                        className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                                                        showIcon={true}
                                                        message="হ্যালো, যোগাযোগ করতে চাই।"
                                                    />
                                                </div>
                                            ) : info.action ? (
                                                <a 
                                                    href={info.action}
                                                    className="mt-4 inline-block w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-xl text-center transition-all duration-300 hover:scale-[1.02]"
                                                >
                                                    কল করুন
                                                </a>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Contact Form */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100/30 dark:border-gray-700/30 p-6 md:p-8">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                    সরাসরি বার্তা পাঠান
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    আমরা ২৪ ঘন্টার মধ্যে আপনার বার্তার উত্তর দেব
                                </p>
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                                                আপনার নাম *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-300 outline-none"
                                                placeholder="আপনার পুরো নাম লিখুন"
                                            />
                                        </div>
                                        
                                        <div>
                                            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                                                ফোন নম্বর *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-300 outline-none"
                                                placeholder="০১৭XXXXXXXX"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                                            ইমেইল ঠিকানা
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-300 outline-none"
                                            placeholder="আপনার ইমেইল লিখুন"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                                            বিষয় *
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-300 outline-none"
                                            placeholder="বার্তার বিষয় লিখুন"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                                            আপনার বার্তা *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="6"
                                            className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-300 resize-none outline-none"
                                            placeholder="আপনার বিস্তারিত বার্তা লিখুন..."
                                        ></textarea>
                                    </div>
                                    
                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group"
                                    >
                                        <span>বার্তা পাঠান</span>
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                    
                    {/* Right Column - Social Media & FAQ */}
                    <div className="space-y-8">
                        {/* Social Media Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-700/20 dark:to-teal-700/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100/30 dark:border-emerald-700/30">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                                    সোশ্যাল মিডিয়ায় যুক্ত থাকুন
                                </h3>
                                
                                <div className="space-y-4">
                                    {contactMethods.map((method, index) => (
                                        <a
                                            key={index}
                                            href={method.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 hover:-translate-y-1"
                                        >
                                            <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center text-white text-xl`}>
                                                {method.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-gray-900 dark:text-gray-100">
                                                    {method.platform}
                                                </div>
                                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                                    {method.username}
                                                </div>
                                            </div>
                                            <div className="opacity-0 group-hover:opacity-100 text-gray-400 group-hover:text-emerald-500 transition-all duration-300">
                                                →
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* FAQ Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100/30 dark:border-gray-700/30 p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                                    🔍 সাধারণ প্রশ্ন
                                </h3>
                                
                                <div className="space-y-4">
                                    {[
                                        {
                                            q: "ডেলিভারি কতদিন লাগে?",
                                            a: "সাধারণত ২-৩ দিনের মধ্যে ঢাকায় এবং ৩-৫ দিনের মধ্যে অন্যান্য জেলায় পৌঁছে যায়।"
                                        },
                                        {
                                            q: "পেমেন্ট পদ্ধতি কী?",
                                            a: "ক্যাশ অন ডেলিভারি (COD), বিকাশ, নগদ এবং রকেট পেমেন্ট গ্রহণ করা হয়।"
                                        },
                                        {
                                            q: "পণ্যের গুণগত মান নিশ্চিত?",
                                            a: "হ্যাঁ, প্রতিটি পণ্য সরাসরি পাহাড় থেকে সংগ্রহ করা হয় এবং ফরমালিন টেস্ট করা হয়।"
                                        },
                                        {
                                            q: "রিটার্ন পলিসি কী?",
                                            a: "পণ্যে কোনো সমস্যা থাকলে ২৪ ঘন্টার মধ্যে রিটার্ন নেওয়া হয়।"
                                        }
                                    ].map((faq, index) => (
                                        <div key={index} className="group">
                                            <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 dark:from-gray-700/30 dark:to-gray-600/30 rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer">
                                                <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-700 text-emerald-600 dark:text-emerald-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                                    ?
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                                        {faq.q}
                                                    </div>
                                                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                                                        {faq.a}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                                    <a 
                                        href="#" 
                                        className="text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors flex items-center gap-2"
                                    >
                                        <span>আরও প্রশ্ন দেখুন</span>
                                        <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Contact Banner */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-600 rounded-2xl p-6 text-center">
                                <div className="text-white text-3xl mb-3">📞</div>
                                <h4 className="text-white font-bold text-xl mb-2">
                                    জরুরি কল করুন
                                </h4>
                                <p className="text-white/90 mb-4">
                                    অর্ডার বা জরুরি সমস্যার জন্য
                                </p>
                                <a 
                                    href="tel:+8801577371893"
                                    className="inline-block px-6 py-3 bg-white text-emerald-600 dark:bg-gray-100 dark:text-emerald-700 font-bold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                                >
                                    ০১৫৭৭-৩৭১-৮৯৩
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Map & Location Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-16"
                >
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100/30 dark:border-gray-700/30 overflow-hidden">
                        <div className="p-6 md:p-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                🗺️ আমাদের অবস্থান
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                সরাসরি পাহাড়ি অঞ্চল থেকে আপনার জন্য প্রাকৃতিক পণ্য সংগ্রহ
                            </p>
                            
                            <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-700 dark:to-gray-800 relative">
                                {/* Simple Map Representation */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">🏔️</div>
                                        <div className="font-bold text-gray-800 dark:text-gray-200 text-lg">
                                            পার্বত্য চট্টগ্রাম অঞ্চল
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-400 mt-2">
                                            বান্দরবান, রাঙ্গামাটি, খাগড়াছড়ি
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Location Pins */}
                                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-emerald-500 rounded-full animate-ping"></div>
                                <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-teal-500 rounded-full animate-ping animation-delay-700"></div>
                                <div className="absolute top-2/3 left-1/4 w-4 h-4 bg-amber-500 rounded-full animate-ping animation-delay-1400"></div>
                            </div>
                            
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    "সরাসরি কৃষকের কাছ থেকে সংগ্রহ",
                                    "প্রাকৃতিক পরিবেশে চাষ",
                                    "রাসায়নিক ও ফরমালিন মুক্ত"
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 dark:from-gray-700/30 dark:to-gray-600/30 rounded-xl">
                                        <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-700 text-emerald-600 dark:text-emerald-400 rounded-lg flex items-center justify-center">
                                            ✓
                                        </div>
                                        <span className="font-medium text-gray-800 dark:text-gray-200">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                @keyframes ping {
                    75%, 100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
                .animate-ping {
                    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                .animation-delay-700 {
                    animation-delay: 700ms;
                }
                .animation-delay-1400 {
                    animation-delay: 1400ms;
                }
            `}</style>
        </div>
    );
};

export default Contact;