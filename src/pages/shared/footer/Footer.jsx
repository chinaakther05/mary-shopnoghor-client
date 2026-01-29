import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-emerald-400 mb-4">মেরির স্বপ্নঘর</h3>
                        <p className="text-gray-400">
                            প্রকৃতির বিশুদ্ধতা আপনার দোরগোড়ায়
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-bold mb-4">দ্রুত লিংক</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-400 hover:text-white transition">হোম</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition">আমাদের সম্পর্কে</Link></li>
                            <li><Link to="/products" className="text-gray-400 hover:text-white transition">পণ্য</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition">যোগাযোগ</Link></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-bold mb-4">পণ্য</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-400">হলুদ</li>
                            <li className="text-gray-400">আদা</li>
                            <li className="text-gray-400">বিন্নি চাল</li>
                            <li className="text-gray-400">মরিচ</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-bold mb-4">যোগাযোগ</h4>
                        <div className="space-y-2">
                            <div className="text-gray-400">ফোন: ০১৫৭৭৩৭১৮৯৩</div>
                            <div className="text-gray-400">হোয়াটসঅ্যাপ: একই নম্বর</div>
                            <div className="text-gray-400">ডেলিভারি: সারা বাংলাদেশ</div>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                    <p>© {new Date().getFullYear()} মেরির স্বপ্নঘর। সব права সংরক্ষিত।</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;