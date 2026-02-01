// WhatsAppButton.jsx
import React from 'react';

const WhatsAppButton = () => {
    const phone = "8801577371893"; // WhatsApp নম্বর
    const message = "আমি মেরির স্বপ্নঘর থেকে পণ্য নিতে চাই। দয়া করে আমাকে বিস্তারিত জানান।";
    
    // URL encode করার মাধ্যমে WhatsApp link তৈরি
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <div className="w-full max-w-xs mx-auto">
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center px-4 py-3 bg-white text-emerald-600 dark:bg-gray-200 dark:text-emerald-700 font-semibold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-300 transition-all duration-300"
            >
                💬 WhatsApp এ মেসেজ করুন
            </a>
        </div>
    );
};

export default WhatsAppButton;
