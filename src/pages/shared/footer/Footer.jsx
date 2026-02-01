import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../components/logo/Logo';

const Footer = () => {
    return (
        <footer className="bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-200 py-12 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <Logo></Logo>
                        <h3 className="text-2xl font-bold text-emerald-400 dark:text-emerald-300 mb-4">মেরির স্বপ্নঘর</h3>
                        <p className="text-gray-400 dark:text-gray-300">
                            প্রকৃতির বিশুদ্ধতা আপনার দোরগোড়ায়
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-bold mb-4">দ্রুত লিংক</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-emerald-300 transition">হোম</Link></li>
                            <li><Link to="/about" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-emerald-300 transition">আমাদের সম্পর্কে</Link></li>
                            <li><Link to="/products" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-emerald-300 transition">পণ্য</Link></li>
                            <li><Link to="/contact" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-emerald-300 transition">যোগাযোগ</Link></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-bold mb-4">পণ্য</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-400 dark:text-gray-300">হলুদ</li>
                            <li className="text-gray-400 dark:text-gray-300">আদা</li>
                            <li className="text-gray-400 dark:text-gray-300">বিন্নি চাল</li>
                            <li className="text-gray-400 dark:text-gray-300">মরিচ</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-bold mb-4">যোগাযোগ</h4>
                        <div className="space-y-2">
                            <div className="text-gray-400 dark:text-gray-300">ফোন: ০১৫৭৭৩৭১৮৯৩</div>
                            <div className="text-gray-400 dark:text-gray-300">হোয়াটসঅ্যাপ: একই নম্বর</div>
                            <div className="text-gray-400 dark:text-gray-300">ডেলিভারি: সারা বাংলাদেশ</div>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-gray-500 dark:text-gray-400 transition-colors duration-300">
                    <p>© {new Date().getFullYear()} মেরির স্বপ্নঘর। সব права সংরক্ষিত।</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
