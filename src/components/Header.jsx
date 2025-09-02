import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

// Translation object for all header text
const translations = {
  en: {
    home: 'Home',
    home1: 'Home 1',
    home2: 'Home 2',
    about: 'About Us',
    services: 'Services',
    allServices: 'All Services',
    foodDelivery: 'Food Delivery',
    catering: 'Catering Services',
    dineIn: 'Dine-In Experience',
    partyOrders: 'Party Orders & Bulk Meals',
    subscription: 'Subscription Meals',
    takeaway: 'Takeaway / Pickup',
    blog: 'Blog',
    contact: 'Contact Us',
    backToAdmin: 'Back to Admin Dashboard',
    userDashboard: 'User Dashboard',
    logout: 'Logout',
    orderNow: 'Order Now',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    disclaimer: 'Disclaimer',
  },
  ar: {
    home: 'الرئيسية',
    home1: 'الرئيسية 1',
    home2: 'الرئيسية 2',
    about: 'معلومات عنا',
    services: 'الخدمات',
    allServices: 'كل الخدمات',
    foodDelivery: 'توصيل الطعام',
    catering: 'خدمات التموين',
    dineIn: 'تجربة تناول الطعام',
    partyOrders: 'طلبات الحفلات والوجبات بالجملة',
    subscription: 'وجبات الاشتراك',
    takeaway: 'استلام / وجبات جاهزة',
    blog: 'المدونة',
    contact: 'اتصل بنا',
    backToAdmin: 'العودة إلى لوحة الإدارة',
    userDashboard: 'لوحة المستخدم',
    logout: 'تسجيل الخروج',
    orderNow: 'اطلب الآن',
    privacy: 'سياسة الخصوصية',
    terms: 'الشروط والأحكام',
    disclaimer: 'إخلاء المسؤولية',
  },
  he: {
    home: 'דף הבית',
    home1: 'דף הבית 1',
    home2: 'דף הבית 2',
    about: 'עלינו',
    services: 'שירותים',
    allServices: 'כל השירותים',
    foodDelivery: 'משלוח אוכל',
    catering: 'שירותי קייטרינג',
    dineIn: 'חווית אוכל במקום',
    partyOrders: 'הזמנות למסיבות וארוחות בכמויות',
    subscription: 'ארוחות במנוי',
    takeaway: 'איסוף / טייק אווי',
    blog: 'בלוג',
    contact: 'צור קשר',
    backToAdmin: 'חזרה ללוח מנהל',
    userDashboard: 'לוח משתמש',
    logout: 'התנתק',
    orderNow: 'הזמן עכשיו',
    privacy: 'מדיניות פרטיות',
    terms: 'תנאים והגבלות',
    disclaimer: 'כתב ויתור',
  },
};

const langMap = {
  English: 'en',
  Arabic: 'ar',
  Hebrew: 'he',
  en: 'en',
  ar: 'ar',
  he: 'he',
};

const Header = () => {
  const navigate = useNavigate();
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const homeDropdownTimeout = React.useRef();
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const servicesDropdownTimeout = React.useRef();
  const [theme, setTheme] = useState('light');
  // Language dropdown state
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languageDropdownTimeout = React.useRef();
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'English';
    }
    return 'English';
  });
  const [language, setLanguage] = useState(langMap[selectedLanguage] || 'en');
  // Ensure theme is set only after mount (SSR-safe)
  // Language change handler (stub, you can add i18n logic here)
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setIsLanguageDropdownOpen(false);
    setLanguage(langMap[lang] || 'en');
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedLanguage', lang);
      window.dispatchEvent(new Event('language-changed'));
    }
  };
  // Listen for language changes from other tabs/pages
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleLanguageChangeEvent = () => {
        const newLang = localStorage.getItem('selectedLanguage') || 'English';
        setSelectedLanguage(newLang);
        setLanguage(langMap[newLang] || 'en');
      };
      window.addEventListener('language-changed', handleLanguageChangeEvent);
      window.addEventListener('storage', handleLanguageChangeEvent);
      return () => {
        window.removeEventListener('language-changed', handleLanguageChangeEvent);
        window.removeEventListener('storage', handleLanguageChangeEvent);
      };
    }
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
    }
  }, []);

  // Sync theme with localStorage and document root
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      // Notify other tabs/pages
      window.dispatchEvent(new Event('theme-changed'));
    }
  }, [theme]);

  // Listen for theme changes from other tabs/pages
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem('theme') || 'light';
        setTheme(newTheme);
      };
      window.addEventListener('theme-changed', handleThemeChange);
      window.addEventListener('storage', handleThemeChange);
      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);
      };
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  // Set RTL/LTR direction
  const dir = language === 'ar' || language === 'he' ? 'rtl' : 'ltr';

  return (
    <header
      dir={dir}
      className={`fixed top-0 left-0 right-0 z-50 w-full !fixed !top-0 !left-0 !right-0 !z-50 transition-colors duration-300
        ${theme === 'dark' ? 'bg-[#000] border-b border-[#141B25]' : 'bg-white border-b border-gray-200'}`}
    >
      <div className="w-full px-4  sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex pl-4 sm:pl-6 lg:pl-14 items-center">
            <button onClick={() => navigate('/home1')} className="focus:outline-none">
              <img src={logo} alt="STACKLY" className="h-6 sm:h-8 w-auto" />
            </button>
          </div>

          {/* Right side - Navigation and Icons */}
          <div className="hidden min-[480px]:flex items-center space-x-8">
            {/* Language Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (languageDropdownTimeout.current) clearTimeout(languageDropdownTimeout.current);
                setIsLanguageDropdownOpen(true);
              }}
              onMouseLeave={() => {
                languageDropdownTimeout.current = setTimeout(() => setIsLanguageDropdownOpen(false), 200);
              }}
            >
              <button
                className={`flex items-center px-3 py-2 rounded-md border ${theme === 'dark' ? 'text-white border-gray-700 bg-gray-800 hover:bg-gray-700' : 'text-black border-gray-300 bg-white hover:bg-gray-100'} transition-colors duration-200`}
                aria-haspopup="true"
                aria-expanded={isLanguageDropdownOpen}
                onClick={() => setIsLanguageDropdownOpen((v) => !v)}
              >
                <span className="mr-1">{selectedLanguage}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isLanguageDropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-32 rounded-md shadow-lg border py-2 z-50 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}>
                  <button className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => handleLanguageChange('English')}>English</button>
                  <button className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => handleLanguageChange('Arabic')}>Arabic</button>
                  <button className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => handleLanguageChange('Hebrew')}>Hebrew</button>
                </div>
              )}
            </div>
            {/* Home Dropdown */}

            <div
              className="relative"
              onMouseEnter={() => {
                if (homeDropdownTimeout.current) clearTimeout(homeDropdownTimeout.current);
                setIsHomeDropdownOpen(true);
              }}
              onMouseLeave={() => {
                homeDropdownTimeout.current = setTimeout(() => setIsHomeDropdownOpen(false), 200);
              }}
            >
              <button
                onClick={() => navigate('/home1')}
                className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-red-500 transition-colors duration-200`}
                aria-haspopup="true"
                aria-expanded={isHomeDropdownOpen}
              >
                {translations[language].home}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isHomeDropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg border py-2 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}>
                  <Link to="/home1" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsHomeDropdownOpen(false)}>{translations[language].home1}</Link>
                  <Link to="/home2" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsHomeDropdownOpen(false)}>{translations[language].home2}</Link>
                </div>
              )}
            </div>


            <Link
              to="/aboutus"
              className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-red-500 transition-colors duration-200`}
            >
              {translations[language].about}
            </Link>

            {/* User Dashboard link for non-admin users */}
            

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (servicesDropdownTimeout.current) clearTimeout(servicesDropdownTimeout.current);
                setIsServicesDropdownOpen(true);
              }}
              onMouseLeave={() => {
                servicesDropdownTimeout.current = setTimeout(() => setIsServicesDropdownOpen(false), 200);
              }}
            >
              <button
                onClick={() => navigate('/services')}
                className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-red-500 transition-colors duration-200`}
                aria-haspopup="true"
                aria-expanded={isServicesDropdownOpen}
              >
                {translations[language].services}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesDropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg border py-2 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}>
                  <Link to="/services" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{translations[language].allServices}</Link>
                  <Link to="/Food-Delivery" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{translations[language].foodDelivery}</Link>
                  <Link to="/Catering-Services" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{translations[language].catering}</Link>
                  <Link to="/Dine-In-Experience" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{translations[language].dineIn}</Link>
                  <Link to="/PartyOrders-BulkMeals" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{translations[language].partyOrders}</Link>
                  <Link to="/Subscription-Meals" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{translations[language].subscription}</Link>
                  <Link to="/Takeaway-Pickup" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{translations[language].takeaway}</Link>

                </div>
              )}
            </div>
            
          
            <Link
              to="/blog"
              className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-red-500 transition-colors duration-200`}
            >
              {translations[language].blog}
            </Link>

            <Link
              to="/contactus"
              className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-red-500 transition-colors duration-200`}
            >
              {translations[language].contact}
            </Link>

            {/* Dark Mode Toggle */}
            <button
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-blue-100 border-blue-300 hover:bg-blue-200'}`}
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.07 4.93l-.71-.71M6.34 6.34l-.71-.71m12.02 12.02l-.71-.71M6.34 17.66l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Avatar with Logout Dropdown */}
             <div className="relative">
              {(() => {
                // Always use first letter of firstname and lastname for initials
                const firstname = (localStorage.getItem('firstname') || '').trim();
                const lastname = (localStorage.getItem('lastname') || '').trim();
                const email = (localStorage.getItem('email') || '').trim();
                let initials = '';
                if (firstname.length > 0) {
                  initials += firstname[0].toUpperCase();
                }
                if (lastname.length > 0) {
                  initials += lastname[0].toUpperCase();
                }
                if (!initials) {
                  initials = '?';
                }
  return (
    <>
                    <button
                      className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-semibold focus:outline-none"
                      onClick={() => setIsAvatarDropdownOpen((v) => !v)}
                    >
                      {initials}
                    </button>
                    {isAvatarDropdownOpen && (
                      <div className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg border py-2 z-50 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}> 
                        {email === 'admin@enkonix.in' && (
                          <button
                            className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-red-500' : 'text-gray-800 hover:bg-blue-100'}`}
                            onClick={() => { setIsAvatarDropdownOpen(false); navigate('/admindashboard'); }}
                          >
                            {translations[language].backToAdmin}
                          </button>
                        )}
                        {/* User Dashboard link for non-admin users */}
                        {email && email !== 'admin@enkonix.in' && (
                          <button
                            className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-red-500' : 'text-gray-800 hover:bg-blue-100'}`}
                            onClick={() => { setIsAvatarDropdownOpen(false); navigate('/userdashboard'); }}
                          >
                            {translations[language].userDashboard}
                          </button>
                        )}
                        <button
                          className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-red-500' : 'text-gray-800 hover:bg-blue-100'}`}
                          onClick={() => { setIsAvatarDropdownOpen(false); navigate('/welcome'); }}
                        >
                          {translations[language].logout}
                        </button>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </div>

          {/* Mobile icons - Only visible on very small screens */}
          <div className="flex items-center space-x-4 min-[480px]:hidden">
            {/* Language Dropdown (Mobile) */}
            <div className="relative">
              <button
                className="flex items-center px-2 py-1 rounded-md border border-gray-300 bg-white text-black text-sm"
                onClick={() => setIsLanguageDropdownOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={isLanguageDropdownOpen}
              >
                <span className="mr-1">{selectedLanguage}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                  <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => handleLanguageChange('English')}>English</button>
                  <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => handleLanguageChange('Arabic')}>Arabic</button>
                  <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => handleLanguageChange('Hebrew')}>Hebrew</button>
                </div>
              )}
            </div>
            {/* Dark Mode Toggle (Mobile) */}
            <button
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-blue-100 border-blue-300 hover:bg-blue-200'}`}
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.07 4.93l-.71-.71M6.34 6.34l-.71-.71m12.02 12.02l-.71-.71M6.34 17.66l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Avatar with Logout Dropdown (Mobile) */}
            <div className="relative">
              {(() => {
                // Always use first letter of firstname and lastname for initials
                const firstname = (localStorage.getItem('firstname') || '').trim();
                const lastname = (localStorage.getItem('lastname') || '').trim();
                const email = (localStorage.getItem('email') || '').trim();
                let initials = '';
                if (firstname.length > 0) {
                  initials += firstname[0].toUpperCase();
                }
                if (lastname.length > 0) {
                  initials += lastname[0].toUpperCase();
                }
                if (!initials) {
                  initials = '?';
                }
                return (
                  <>
                    <button
                      className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-semibold focus:outline-none"
                      onClick={() => setIsAvatarDropdownOpen((v) => !v)}
                    >
                      {initials}
                    </button>
                    {isAvatarDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                        {email === 'admin@enkonix.in' && (
                          <button
                            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100"
                            onClick={() => { setIsAvatarDropdownOpen(false); window.location.href = '/admindashboard'; }}
                          >
                            Back to Admin Dashboard
                          </button>
                        )}
                        <button
                          className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100"
                          onClick={() => { setIsAvatarDropdownOpen(false); window.location.href = '/'; }}
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Only visible on very small screens */}
        {isMobileMenuOpen && (
          <div className="min-[480px]:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Home Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleHomeDropdown}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  <span>{translations[language].home}</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isHomeDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isHomeDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    <a href="/" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md" onClick={() => { setIsHomeDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].home1}</a>
                    <a href="/home2" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md" onClick={() => { setIsHomeDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].home2}</a>
                  </div>
                )}
              </div>

              <Link to="/aboutus" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                {translations[language].about}
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServicesDropdown}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  <span>{translations[language].services}</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    <Link to="/services" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].allServices}</Link>
                    <Link to="/Food-Delivery" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].foodDelivery}</Link>
                    <Link to="/Catering-Services" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].catering}</Link>
                    <Link to="/Dine-In-Experience" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].dineIn}</Link>
                    <Link to="/PartyOrders-BulkMeals" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].partyOrders}</Link>
                    <Link to="/Subscription-Meals" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].subscription}</Link>
                    <Link to="/Takeaway-Pickup" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].takeaway}</Link>

                  </div>
                )}
              </div>


              <Link to="/blog" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                {translations[language].blog}
              </Link>

              <Link to="/contact" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                {translations[language].contact}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
