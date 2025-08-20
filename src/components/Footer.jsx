import logo from "../assets/logo.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RestaurantFooter() {
  // Theme state logic (copied from Blog/other pages)
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
  }, []);
  useEffect(() => {
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
  }, []);
  return (
    <footer className={theme === 'dark' ? 'bg-[#18181b] border-t mt-0 text-white' : 'bg-white border-t mt-0 text-black'}>
      <div className="max-w-7xl mx-auto px-6 py-10 grid  md:grid-cols-5 gap-8">
        {/* Logo & Brand */}
        <div className="col-span-1 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Stackly Logo" className="h-24 w-24 object-contain" />
          </div>
          <span className="text-red-600 font-semibold mt-2">Delighting Your Taste Buds, Every Day!</span>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-red-700 font-semibold mb-2">Quick Links</h3>
          <ul className={theme === 'dark' ? 'space-y-1 text-gray-300' : 'space-y-1 text-gray-700'}>
  <li>
    <Link to="/home1" className="hover:text-red-600">Home</Link>
  </li>
  <li>
    <Link to="/aboutus" className="hover:text-red-600">About Us</Link>
  </li>
  <li>
    <Link to="/blog" className="hover:text-red-600">Blog</Link>
  </li>
  <li>
    <Link to="/contactus" className="hover:text-red-600">Contact Us</Link>
  </li>
  <li>
    <Link to="/services" className="hover:text-red-600">Services</Link>
  </li>
</ul>
        </div>
        {/* Explore Services */}
        <div>
  <h3 className="text-red-700 font-semibold mb-2">Our Services</h3>
  <ul className={theme === 'dark' ? 'space-y-1 text-gray-300' : 'space-y-1 text-gray-700'}>
    <li>
      <Link to="/Food-Delivery" className="hover:text-red-600">
        Food Delivery
      </Link>
    </li>
    <li>
      <Link to="/Catering-Services" className="hover:text-red-600">
        Catering Services
      </Link>
    </li>
    <li>
      <Link to="/Dine-In-Experience" className="hover:text-red-600">
        Dine-In Experience
      </Link>
    </li>
    <li>
      <Link to="/PartyOrders-BulkMeals" className="hover:text-red-600">
        Party Orders & Bulk Meals
      </Link>
    </li>
    <li>
      <Link to="/Subscription-Meals" className="hover:text-red-600">
        Subscription Meals
      </Link>
    </li>
    <li>
      <Link to="/Takeaway-Pickup" className="hover:text-red-600">
        Takeaway / Pickup
      </Link>
    </li>
  </ul>
</div>
        {/* Contact Info */}
        <div>
          <h3 className="text-red-700 font-semibold mb-2">Contact Us</h3>
          <div className={theme === 'dark' ? 'text-gray-300 text-sm' : 'text-gray-700 text-sm'}>
            <div><span className="font-semibold">Address:</span> 123 Food Street, Gourmet City</div>
            <div><span className="font-semibold">Phone:</span> (123) 456-7890</div>
            <div><span className="font-semibold">Email:</span> support@foodify.com</div>
            <div><span className="font-semibold">Hours:</span> Mon–Sun, 10 AM – 11 PM</div>
          </div>
          <div className="mt-3">
            <span className={theme === 'dark' ? 'font-semibold text-gray-300' : 'font-semibold text-gray-700'}>Follow Us</span>
            <div className={theme === 'dark' ? 'flex gap-3 mt-1 text-xl text-gray-300' : 'flex gap-3 mt-1 text-xl text-gray-600'}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-red-600"><i className="fab fa-instagram"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-red-600"><i className="fab fa-facebook"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-red-600"><i className="fab fa-linkedin"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-red-600"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        {/* Order Now */}
        <div>
          <h3 className="text-red-700 font-semibold mb-2">Order Now</h3>
          <p className={theme === 'dark' ? 'text-gray-300 text-sm mb-4' : 'text-gray-700 text-sm mb-4'}>Craving something delicious? Place your order online and enjoy fast delivery or easy pickup from Foodify!</p>
          <a href="/contactus" className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-red-700 transition">Order Now</a>
        </div>
      </div>
      <div className={theme === 'dark' ? 'border-t text-center text-gray-400 text-xs py-4' : 'border-t text-center text-gray-500 text-xs py-4'}>
        <div className="flex flex-row md:flex-row justify-center gap-4 mb-2">
          <a href="#" className="hover:text-red-600">Privacy Policy</a>
          <a href="#" className="hover:text-red-600">Terms &amp; Conditions</a>
          <a href="#" className="hover:text-red-600">Disclaimer</a>
        </div>
        ©️ 2025 Foodify. All rights reserved.
      </div>
    </footer>
  );
}