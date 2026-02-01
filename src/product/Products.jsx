import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for dark mode preference
    const checkDarkMode = () => {
      if (localStorage.theme === 'dark' || 
          (!('theme' in localStorage) && 
           window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
      } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove('dark');
      }
    };

    checkDarkMode();

    fetch("http://localhost:3000/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        // স্টক আছে এমন পণ্য প্রথমে দেখানোর জন্য সর্টিং
        const sortedProducts = data.sort((a, b) => b.inStock - a.inStock);
        setProducts(sortedProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("পণ্য লোড করতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।");
        setLoading(false);
      });
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

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center 
                    bg-gradient-to-b from-green-50 to-amber-50 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                    transition-colors duration-500">
        <div className="relative">
          {/* কৃষি থিম লোডিং স্পিনার */}
          <div className="w-16 h-16 border-4 border-green-200 dark:border-green-800 
                        border-t-green-600 dark:border-t-green-500 rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-2 bg-green-600 dark:bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
        <p className="mt-6 text-lg text-green-700 dark:text-green-400 font-medium animate-pulse">
          ফসল তোলা হচ্ছে...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center 
                    bg-gradient-to-b from-green-50 to-amber-50 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                    transition-colors duration-500 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 
                      p-8 max-w-md text-center transition-colors duration-300">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full 
                        flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">সমস্যা হয়েছে</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-green-600 dark:bg-green-500 hover:bg-green-700 
                     dark:hover:bg-green-600 text-white font-medium rounded-lg 
                     transition-colors duration-300"
          >
            আবার চেষ্টা করুন
          </button>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center 
                    bg-gradient-to-b from-green-50 to-amber-50 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                    transition-colors duration-500 p-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-full 
                        flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-amber-600 dark:text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">
            কোনো পণ্য পাওয়া যাচ্ছে না
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            দুঃখিত, বর্তমানে কোনো পণ্য স্টকে নেই। নতুন ফসল আসার জন্য অপেক্ষা করুন।
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50 
                  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                  transition-colors duration-500 p-4">
      
      {/* হেডার */}
      <div className="text-center mb-10 animate-fadeIn">
        <div className="inline-flex items-center justify-center p-3 
                      bg-green-100 dark:bg-green-900/40 rounded-full mb-4 shadow-md">
          <svg className="w-8 h-8 text-green-700 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-300 mb-2">
          ফরমির প্রাকৃতিক পণ্য
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          সরাসরি পাহাড় থেকে আপনার দোরগোড়ায় - ১০০% প্রাকৃতিক ও ফরমালিনমুক্ত
        </p>
        
        {/* Dark Mode Toggle Button */}
        <div className="mt-6 flex justify-center items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 
                     hover:bg-gray-300 dark:hover:bg-gray-600 
                     text-gray-800 dark:text-gray-200 
                     rounded-full flex items-center gap-2 
                     transition-colors duration-300"
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
          
          {/* Animated Dots */}
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full animate-bounce" 
                 style={{animationDelay: "0.1s"}}></div>
            <div className="w-3 h-3 bg-amber-500 dark:bg-amber-400 rounded-full animate-bounce" 
                 style={{animationDelay: "0.2s"}}></div>
            <div className="w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full animate-bounce" 
                 style={{animationDelay: "0.3s"}}></div>
          </div>
        </div>
      </div>

      {/* পণ্য গ্রিড */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div
            key={product.productId}
            className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 
                      hover:shadow-2xl dark:hover:shadow-gray-900/80 
                      transition-all duration-500 overflow-hidden 
                      transform hover:-translate-y-2 animate-fadeInUp 
                      ${!product.inStock ? 'opacity-80 dark:opacity-70' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* ইমেজ সেকশন */}
            <div className="relative w-full h-64 overflow-hidden group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-110 
                         transition-transform duration-700"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = isDarkMode 
                    ? "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    : "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                }}
              />
              
              {/* স্টক স্ট্যাটাস ব্যাজ */}
              <div className="absolute top-3 right-3">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full shadow-md 
                              ${product.inStock 
                                ? 'bg-green-600 dark:bg-green-500 text-white' 
                                : 'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300'}`}>
                  {product.inStock ? 'স্টকে আছে ✓' : 'স্টক শেষ ✗'}
                </span>
              </div>
              
              {/* প্রোডাক্ট ব্যাজ */}
              {product.tags && product.tags.includes("অরগানিক") && (
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/40 
                                text-amber-800 dark:text-amber-300 
                                text-xs font-semibold rounded-full shadow-md flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                    জৈব
                  </span>
                </div>
              )}
              
              {/* গ্রেডিয়েন্ট ওভারলে */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 dark:from-black/40 
                            to-transparent opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500"></div>
            </div>

            {/* পণ্যের তথ্য */}
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 line-clamp-1">
                  {product.name}
                </h2>
                <span className="text-xs text-gray-500 dark:text-gray-400 
                              bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                  {product.productId}
                </span>
              </div>
              
              {/* অরিজিন */}
              <div className="flex items-center mb-3">
                <svg className="w-4 h-4 text-amber-500 dark:text-amber-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{product.origin}</p>
                <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                <p className="text-gray-500 dark:text-gray-500 text-sm">{product.unit}</p>
              </div>
              
              {/* ট্যাগস (যদি থাকে) */}
              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-green-50 dark:bg-green-900/40 
                                             text-green-700 dark:text-green-400 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              {/* বর্ণনা */}
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>
              
              <div className="mt-auto">
                {/* দাম */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-2xl font-bold text-green-700 dark:text-green-400">
                      ৳ {product.price.toLocaleString()}
                    </p>
                    <p className="text-gray-400 dark:text-gray-500 text-xs">প্রতি ইউনিট</p>
                  </div>
                  
                  {/* রেটিং (যদি থাকে) */}
                  {product.rating && (
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-amber-500 dark:text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-gray-700 dark:text-gray-300 font-medium">
                        {product.rating}
                      </span>
                    </div>
                  )}
                </div>

                {/* বাটন */}
                <div className="flex gap-3">
                  <button
                    disabled={!product.inStock}
                    className={`flex-1 py-3 rounded-xl font-medium transition-all duration-300 
                              flex items-center justify-center ${product.inStock
                      ? "bg-gradient-to-r from-green-600 to-green-700 dark:from-green-500 dark:to-green-600 \
                         hover:from-green-700 hover:to-green-800 dark:hover:from-green-600 dark:hover:to-green-700 \
                         text-white shadow-md hover:shadow-lg"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {product.inStock ? (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        কার্টে যোগ করুন
                      </>
                    ) : (
                      "স্টক শেষ"
                    )}
                  </button>
                  
                  <Link
                    to={`/products/${product.productId}`}
                    className="flex-1 text-center py-3 rounded-xl 
                             bg-gradient-to-r from-blue-600 to-blue-700 
                             dark:from-blue-500 dark:to-blue-600
                             hover:from-blue-700 hover:to-blue-800 
                             dark:hover:from-blue-600 dark:hover:to-blue-700
                             text-white font-medium shadow-md hover:shadow-lg 
                             transition-all duration-300 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    বিস্তারিত
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ফুটার নোট */}
      <div className="text-center mt-12 p-6 max-w-3xl mx-auto 
                    bg-white/70 dark:bg-gray-800/70 rounded-2xl 
                    border border-green-200 dark:border-green-800/50 animate-fadeIn
                    backdrop-blur-sm">
        <div className="inline-flex items-center justify-center p-3 
                      bg-green-100 dark:bg-green-900/40 rounded-full mb-4">
          <svg className="w-6 h-6 text-green-700 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">
          ফরমির মিশন
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          ১০০% প্রাকৃতিক ও ফরমালিনমুক্ত পণ্য সরাসরি পাহাড় থেকে আপনার দোরগোড়ায় পৌঁছে দেওয়া।
          স্থানীয় কৃষকদের সমর্থন ও পরিবেশ বাঁচানো আমাদের লক্ষ্য।
        </p>
      </div>
    </div>
  );
};

export default Products;