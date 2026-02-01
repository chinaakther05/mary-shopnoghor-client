import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const ViewDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
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

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:3000/products/${productId}`);

        if (!res.ok) {
          throw new Error(res.status === 404 ? "পণ্যটি পাওয়া যায়নি" : "সার্ভার ত্রুটি হয়েছে");
        }

        const data = await res.json();
        
        if (!data || Object.keys(data).length === 0) {
          throw new Error("পণ্যের তথ্য খালি রয়েছে");
        }

        setProduct(data);
        setError(null);
      } catch (err) {
        console.error("পণ্য লোড করতে ত্রুটি:", err);
        setError(err.message);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    } else {
      setError("অবৈধ পণ্য আইডি");
      setLoading(false);
    }
  }, [productId]);

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

  const handleBack = () => {
    navigate(-1);
  };

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleWhatsAppOrder = () => {
    if (!product) return;
    
    const message = `হ্যালো, আমি আপনার "${product.name}" পণ্যটি অর্ডার করতে চাই।\n\n` +
                   `পণ্যের বিস্তারিত:\n` +
                   `• পণ্যের নাম: ${product.name}\n` +
                   `• প্রাইস: ৳${product.price}\n` +
                   `• ইউনিট: ${product.unit}\n` +
                   `• পরিমাণ: ${quantity}\n` +
                   `• মোট মূল্য: ৳${product.price * quantity}\n\n` +
                   `আমার নাম: [আপনার নাম]\n` +
                   `ঠিকানা: [আপনার ঠিকানা]\n` +
                   `ফোন নম্বর: [আপনার ফোন নম্বর]`;
    
    const whatsappUrl = `https://wa.me/8801577371893?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // লোডিং স্টেট
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center 
                    bg-gradient-to-b from-green-50 to-amber-50 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                    transition-colors duration-500 p-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-green-200 dark:border-green-800 
                        border-t-green-600 dark:border-t-green-500 rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-2 bg-green-600 dark:bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
        <p className="mt-6 text-lg text-green-700 dark:text-green-400 font-medium animate-pulse">
          পণ্যের বিবরণ তোলা হচ্ছে...
        </p>
      </div>
    );
  }

  // এরর স্টেট
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-b from-green-50 to-amber-50 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                    transition-colors duration-500 p-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl 
                      shadow-lg dark:shadow-gray-900/50 p-8 text-center transition-colors duration-300">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full 
                        flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">ত্রুটি</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleBack}
              className="px-6 py-3 bg-gray-600 dark:bg-gray-700 hover:bg-gray-700 
                       dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-300"
            >
              পিছনে যান
            </button>
            <Link
              to="/products"
              className="px-6 py-3 bg-green-600 dark:bg-green-500 hover:bg-green-700 
                       dark:hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-300"
            >
              সকল পণ্য দেখুন
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // পণ্য না পাওয়া গেলে
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-b from-green-50 to-amber-50 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                    transition-colors duration-500 p-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl 
                      shadow-lg dark:shadow-gray-900/50 p-8 text-center transition-colors duration-300">
          <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full 
                        flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">পণ্য পাওয়া যায়নি</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">আপনি যে পণ্যটি খুঁজছেন তা পাওয়া যায়নি।</p>
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-6 py-3 
                     bg-green-600 dark:bg-green-500 hover:bg-green-700 
                     dark:hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-300"
          >
            সকল পণ্য দেখুন
          </Link>
        </div>
      </div>
    );
  }

  // পণ্যের বিবরণ রেন্ডার
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50 
                  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                  transition-colors duration-500 p-4">
      
      {/* Dark Mode Toggle */}
      <div className="flex justify-end mb-4">
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

      <div className="max-w-6xl mx-auto">
        {/* ব্রেডক্রম্ব */}
        <nav className="mb-6">
          <ol className="flex flex-wrap items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="text-green-700 dark:text-green-400 
                    hover:text-green-800 dark:hover:text-green-300 hover:underline">
                হোম
              </Link>
            </li>
            <li className="text-gray-400 dark:text-gray-600">/</li>
            <li>
              <Link to="/products" className="text-green-700 dark:text-green-400 
                    hover:text-green-800 dark:hover:text-green-300 hover:underline">
                পণ্য
              </Link>
            </li>
            <li className="text-gray-400 dark:text-gray-600">/</li>
            <li className="text-gray-600 dark:text-gray-400 font-medium truncate max-w-xs">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/50 
                      overflow-hidden transition-colors duration-300">
          <div className="md:flex">
            {/* ছবির অংশ */}
            <div className="md:w-1/2 p-6 bg-gradient-to-br from-green-50 to-amber-50 
                          dark:from-gray-700/50 dark:to-gray-600/50 transition-colors duration-300">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg 
                            dark:shadow-gray-900">
                <img
                  src={product.image || "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                  alt={product.name}
                  className="w-full h-full object-contain bg-white dark:bg-gray-700 
                           transition-colors duration-300"
                  onError={(e) => {
                    e.target.src = isDarkMode 
                      ? "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      : "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
                
                {/* স্টক স্ট্যাটাস ব্যাজ */}
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold shadow-md 
                                ${product.inStock 
                                  ? 'bg-green-600 dark:bg-green-500 text-white' 
                                  : 'bg-red-500 dark:bg-red-600 text-white'}`}>
                    {product.inStock ? 'স্টকে আছে ✓' : 'স্টক শেষ ✗'}
                  </span>
                </div>

                {/* জৈব/প্রাকৃতিক ব্যাজ */}
                {(product.isOrganic || product.tags?.includes("অরগানিক")) && (
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-amber-100 dark:bg-amber-900/40 
                                  text-amber-800 dark:text-amber-300 text-sm font-semibold 
                                  rounded-full shadow-md flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                      </svg>
                      জৈব পণ্য
                    </span>
                  </div>
                )}
              </div>

              {/* পণ্য ট্যাগস */}
              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {product.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-green-100 dark:bg-green-900/40 
                                               text-green-800 dark:text-green-400 text-sm rounded-full
                                               transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* তথ্যের অংশ */}
            <div className="md:w-1/2 p-6 md:p-8">
              <div className="mb-6">
                <span className="inline-block px-4 py-1 text-sm font-semibold 
                               text-green-800 dark:text-green-400 
                               bg-green-100 dark:bg-green-900/40 
                               rounded-full mb-3 transition-colors duration-300">
                  {product.category || "সাধারণ"}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-200 
                             mt-2 mb-3 transition-colors duration-300">
                  {product.name}
                </h1>
                
                {/* উৎস এবং আইডি */}
                <div className="flex items-center flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-400 
                                transition-colors duration-300">
                    <svg className="w-5 h-5 mr-2 text-amber-500 dark:text-amber-400" 
                         fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{product.origin}</span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-500 transition-colors duration-300">
                    পণ্য আইডি: <span className="font-mono">{product.productId}</span>
                  </div>
                </div>
              </div>

              {/* বর্ণনা */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300 
                             mb-3 transition-colors duration-300">
                  পণ্যের বিবরণ
                </h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-lg 
                           bg-green-50 dark:bg-gray-700/50 p-4 rounded-xl 
                           transition-colors duration-300">
                  {product.description}
                </p>
              </div>

              {/* দাম এবং পরিমাণ সেকশন */}
              <div className="mb-8 p-5 bg-gradient-to-r from-green-50 to-amber-50 
                            dark:from-gray-700/50 dark:to-gray-600/50 
                            rounded-xl border border-green-100 dark:border-gray-700
                            transition-colors duration-300">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-green-700 dark:text-green-400 
                                 mb-1 transition-colors duration-300">
                      ৳ {product.price?.toLocaleString('bn-BD')}
                    </div>
                    <div className="text-gray-600 dark:text-gray-500 text-sm transition-colors duration-300">
                      প্রতি {product.unit || "ইউনিট"}
                    </div>
                  </div>
                  
                  {/* পরিমাণ সিলেক্টর */}
                  <div className="flex items-center mt-3 sm:mt-0">
                    <span className="mr-3 text-gray-700 dark:text-gray-300 font-medium 
                                   transition-colors duration-300">
                      পরিমাণ:
                    </span>
                    <div className="flex items-center border rounded-lg overflow-hidden 
                                  border-gray-300 dark:border-gray-600 
                                  transition-colors duration-300">
                      <button
                        onClick={() => handleQuantityChange('decrease')}
                        disabled={quantity <= 1}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 
                                 hover:bg-gray-200 dark:hover:bg-gray-600 
                                 disabled:opacity-50 disabled:cursor-not-allowed
                                 transition-colors duration-300"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 bg-white dark:bg-gray-800 
                                     min-w-[60px] text-center font-medium 
                                     text-gray-900 dark:text-gray-200 
                                     transition-colors duration-300">
                        {quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange('increase')}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 
                                 hover:bg-gray-200 dark:hover:bg-gray-600 
                                 transition-colors duration-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* মোট মূল্য */}
                <div className="pt-4 border-t border-green-200 dark:border-gray-700 
                              transition-colors duration-300">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300 font-medium 
                                   transition-colors duration-300">
                      মোট মূল্য:
                    </span>
                    <span className="text-2xl font-bold text-green-700 dark:text-green-400 
                                   transition-colors duration-300">
                      ৳ {(product.price * quantity).toLocaleString('bn-BD')}
                    </span>
                  </div>
                </div>
              </div>

              {/* স্টক স্ট্যাটাস */}
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <div className={`w-4 h-4 rounded-full mr-3 
                                ${product.inStock 
                                  ? 'bg-green-500 dark:bg-green-400 animate-pulse' 
                                  : 'bg-red-500 dark:bg-red-400'}`}></div>
                  <span className={`text-lg font-semibold 
                                 ${product.inStock 
                                   ? 'text-green-600 dark:text-green-400' 
                                   : 'text-red-600 dark:text-red-400'} 
                                 transition-colors duration-300`}>
                    {product.inStock ? "স্টকে আছে" : "স্টক শেষ"}
                  </span>
                  {product.inStock && product.stock && (
                    <span className="ml-4 text-gray-600 dark:text-gray-500 transition-colors duration-300">
                      ({product.stock} ইউনিট অবশিষ্ট)
                    </span>
                  )}
                </div>

                {/* রেটিং (যদি থাকে) */}
                {product.rating && (
                  <div className="flex items-center mt-3">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(product.rating) 
                            ? 'fill-current' 
                            : 'fill-gray-300 dark:fill-gray-600'}`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300">
                      {product.rating} <span className="text-gray-500 dark:text-gray-600 text-sm">
                        ({product.reviews || 0} রিভিউ)
                      </span>
                    </span>
                  </div>
                )}
              </div>

              {/* অর্ডার বাটন */}
              <div className="space-y-4">
                <button
                  onClick={handleWhatsAppOrder}
                  disabled={!product.inStock}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 
                            flex items-center justify-center shadow-lg 
                            ${product.inStock
                    ? 'bg-gradient-to-r from-green-600 to-green-700 \
                       dark:from-green-500 dark:to-green-600 \
                       hover:from-green-700 hover:to-green-800 \
                       dark:hover:from-green-600 dark:hover:to-green-700 \
                       text-white hover:shadow-xl'
                    : 'bg-gray-300 dark:bg-gray-700 \
                       text-gray-500 dark:text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                  </svg>
                  {product.inStock ? "হোয়াটসঅ্যাপে অর্ডার করুন" : "স্টক শেষ"}
                </button>

                <div className="flex gap-3">
                  <button
                    onClick={handleBack}
                    className="flex-1 py-3 rounded-xl bg-gray-600 dark:bg-gray-700 
                             hover:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium 
                             transition-colors duration-300 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    পিছনে
                  </button>
                  <Link
                    to="/products"
                    className="flex-1 text-center py-3 rounded-xl 
                             bg-gradient-to-r from-blue-600 to-blue-700 
                             dark:from-blue-500 dark:to-blue-600
                             hover:from-blue-700 hover:to-blue-800 
                             dark:hover:from-blue-600 dark:hover:to-blue-700
                             text-white font-medium shadow-md hover:shadow-lg 
                             transition-all duration-300 flex items-center justify-center"
                  >
                    সকল পণ্য দেখুন
                  </Link>
                </div>
              </div>

              {/* অতিরিক্ত তথ্য */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 
                            transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300 
                             mb-4 transition-colors duration-300">
                  পণ্যের বিশেষত্ব
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-1" 
                         fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-700 dark:text-gray-300 
                                   transition-colors duration-300">
                        প্রাকৃতিক
                      </div>
                      <div className="text-gray-500 dark:text-gray-500 text-sm transition-colors duration-300">
                        রাসায়নিক ও ফরমালিন মুক্ত
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-1" 
                         fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-700 dark:text-gray-300 
                                   transition-colors duration-300">
                        স্থানীয় উৎস
                      </div>
                      <div className="text-gray-500 dark:text-gray-500 text-sm transition-colors duration-300">
                        সরাসরি পাহাড় থেকে সংগ্রহ
                      </div>
                    </div>
                  </div>
                  {product.seller && (
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-1" 
                           fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-700 dark:text-gray-300 
                                     transition-colors duration-300">
                          বিক্রেতা
                        </div>
                        <div className="text-gray-500 dark:text-gray-500 text-sm transition-colors duration-300">
                          {product.seller}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ফরমির মিশন সেকশন */}
          <div className="p-8 bg-gradient-to-r from-green-50 to-amber-50 
                        dark:from-gray-700/50 dark:to-gray-600/50 
                        border-t border-green-100 dark:border-gray-700
                        transition-colors duration-300">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 
                              rounded-full flex items-center justify-center mx-auto
                              transition-colors duration-300">
                  <svg className="w-8 h-8 text-green-700 dark:text-green-400" 
                       fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-green-800 dark:text-green-300 
                             mb-2 text-center md:text-left transition-colors duration-300">
                  ফরমির মিশন
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center md:text-left 
                           transition-colors duration-300">
                  ১০০% প্রাকৃতিক ও ফরমালিনমুক্ত পণ্য সরাসরি পাহাড় থেকে আপনার দোরগোড়ায় পৌঁছে দেওয়া। 
                  স্থানীয় কৃষকদের সমর্থন ও পরিবেশ বাঁচানো আমাদের লক্ষ্য।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;