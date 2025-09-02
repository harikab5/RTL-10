// Translation object for all user-facing text
const translations = {
  English: {
    welcome: 'Welcome to Foodify',
    emailOrUsername: 'Email or Username',
    password: 'Password',
    login: 'Login',
    forgotPassword: 'Forgot Password?',
    register: 'Register',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    newPassword: 'New Password',
    confirmPassword: 'Confirm Password',
    updatePassword: 'Update Password',
    next: 'Next',
    backToLogin: 'Back to Login',
    invalidCredentials: 'Invalid credentials. Please try again.',
    emailRegistered: 'Email already registered. Please login.',
    registrationSuccess: 'Registration successful! Please login.',
    emailNotFound: 'Email not found. Please register.',
    passwordUpdated: 'Password updated successfully! Please login.',
    enterConfirmPassword: 'Please enter and confirm your new password.',
    passwordsNoMatch: 'Passwords do not match.',
    unexpectedError: 'Unexpected error. Please try again.',
  },
  Arabic: {
    welcome: 'مرحبًا بكم في فوديفاي',
    emailOrUsername: 'البريد الإلكتروني أو اسم المستخدم',
    password: 'كلمة المرور',
    login: 'تسجيل الدخول',
    forgotPassword: 'هل نسيت كلمة المرور؟',
    register: 'تسجيل',
    firstName: 'الاسم الأول',
    lastName: 'اسم العائلة',
    email: 'البريد الإلكتروني',
    newPassword: 'كلمة مرور جديدة',
    confirmPassword: 'تأكيد كلمة المرور',
    updatePassword: 'تحديث كلمة المرور',
    next: 'التالي',
    backToLogin: 'العودة لتسجيل الدخول',
    invalidCredentials: 'بيانات الاعتماد غير صحيحة. حاول مرة أخرى.',
    emailRegistered: 'البريد الإلكتروني مسجل بالفعل. يرجى تسجيل الدخول.',
    registrationSuccess: 'تم التسجيل بنجاح! يرجى تسجيل الدخول.',
    emailNotFound: 'البريد الإلكتروني غير موجود. يرجى التسجيل.',
    passwordUpdated: 'تم تحديث كلمة المرور بنجاح! يرجى تسجيل الدخول.',
    enterConfirmPassword: 'يرجى إدخال وتأكيد كلمة المرور الجديدة.',
    passwordsNoMatch: 'كلمتا المرور غير متطابقتين.',
    unexpectedError: 'حدث خطأ غير متوقع. حاول مرة أخرى.',
  },
  Hebrew: {
    welcome: 'ברוכים הבאים לפודיפיי',
    emailOrUsername: 'אימייל או שם משתמש',
    password: 'סיסמה',
    login: 'התחברות',
    forgotPassword: 'שכחת סיסמה?',
    register: 'הרשמה',
    firstName: 'שם פרטי',
    lastName: 'שם משפחה',
    email: 'אימייל',
    newPassword: 'סיסמה חדשה',
    confirmPassword: 'אשר סיסמה',
    updatePassword: 'עדכן סיסמה',
    next: 'הבא',
    backToLogin: 'חזרה להתחברות',
    invalidCredentials: 'פרטי ההתחברות שגויים. נסה שוב.',
    emailRegistered: 'האימייל כבר רשום. אנא התחבר.',
    registrationSuccess: 'ההרשמה הצליחה! אנא התחבר.',
    emailNotFound: 'האימייל לא נמצא. אנא הירשם.',
    passwordUpdated: 'הסיסמה עודכנה בהצלחה! אנא התחבר.',
    enterConfirmPassword: 'אנא הזן ואשר את הסיסמה החדשה.',
    passwordsNoMatch: 'הסיסמאות אינן תואמות.',
    unexpectedError: 'שגיאה לא צפויה. נסה שוב.',
  },
};
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import bgImage from "../assets/welcome.jpg.jpg";
import logoImage from "../assets/logo.png";

// Language dropdown options
const languageOptions = [
  { code: 'English', label: 'English' },
  { code: 'Arabic', label: 'العربية' },
  { code: 'Hebrew', label: 'עברית' },
];

export default function LoginPage() {
  const [form, setForm] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regFirstName, setRegFirstName] = useState("");
  const [regLastName, setRegLastName] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotStep, setForgotStep] = useState(1); // 1: enter email, 2: new password
  const [foundForgotUser, setFoundForgotUser] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'English';
    }
    return 'English';
  });
  const navigate = useNavigate();

  // Handle language change
  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setSelectedLanguage(lang);
    localStorage.setItem('selectedLanguage', lang);
    window.dispatchEvent(new Event('language-changed'));
  };
  // Login logic with localStorage
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@enkonix.in" && password === "admin123") {
      localStorage.setItem('firstname', 'Admin');
      localStorage.setItem('lastname', 'User');
      localStorage.setItem('email', email);
      navigate("/admindashboard");
      return;
    }
    // Check localStorage for registered users
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(
      (u) => (u.email === email || u.name === email) && u.password === password
    );
    if (foundUser) {
      localStorage.setItem('firstname', foundUser.firstName || '');
      localStorage.setItem('lastname', foundUser.lastName || '');
      localStorage.setItem('email', foundUser.email || '');
      navigate("/home1");
    } else {
      setError(translations[selectedLanguage].invalidCredentials);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    // Check if email already exists
    if (users.some((u) => u.email === regEmail)) {
      setMessage(translations[selectedLanguage].emailRegistered);
      setForm("login");
      setRegEmail("");
      setRegPassword("");
      setRegFirstName("");
      setRegLastName("");
      return;
    }
    // Add new user with signup time and date
    const now = new Date();
    const signupTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const signupDate = now.toLocaleDateString();
    users.push({
      firstName: regFirstName,
      lastName: regLastName,
      email: regEmail,
      password: regPassword,
      signupTime,
      signupDate,
    });
    localStorage.setItem("users", JSON.stringify(users));
    // Set for avatar initials immediately after registration
    localStorage.setItem('firstname', regFirstName);
    localStorage.setItem('lastname', regLastName);
    localStorage.setItem('email', regEmail);
  setMessage(translations[selectedLanguage].registrationSuccess);
    setForm("login");
    setRegEmail("");
    setRegPassword("");
    setRegFirstName("");
    setRegLastName("");
  };

  const handleForgot = (e) => {
    e.preventDefault();
    if (forgotStep === 1) {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find((u) => u.email === forgotEmail);
      if (!user) {
        setError(translations[selectedLanguage].emailNotFound);
        setMessage("");
        return;
      }
      setFoundForgotUser(user);
      setForgotStep(2);
      setError("");
      setMessage("");
    } else if (forgotStep === 2) {
      if (!newPassword || !confirmPassword) {
        setError(translations[selectedLanguage].enterConfirmPassword);
        return;
      }
      if (newPassword !== confirmPassword) {
        setError(translations[selectedLanguage].passwordsNoMatch);
        return;
      }
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const idx = users.findIndex((u) => u.email === forgotEmail);
      if (idx !== -1) {
        users[idx].password = newPassword;
        localStorage.setItem("users", JSON.stringify(users));
  setMessage(translations[selectedLanguage].passwordUpdated);
        setForm("login");
        setForgotEmail("");
        setForgotStep(1);
        setNewPassword("");
        setConfirmPassword("");
        setError("");
      } else {
  setError(translations[selectedLanguage].unexpectedError);
      }
    }
  };

  // Main return with language dropdown in top right
  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-cover bg-center relative`}
      style={{
        backgroundImage: `url(${bgImage})`,
        direction: selectedLanguage === 'Arabic' || selectedLanguage === 'Hebrew' ? 'rtl' : 'ltr',
      }}
    >
      {/* Language dropdown in top right */}
      <div className="absolute top-6 right-6 z-20">
        <select
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="bg-white bg-opacity-80 rounded-md px-4 py-2 shadow text-black focus:outline-none"
        >
          {languageOptions.map(opt => (
            <option key={opt.code} value={opt.code}>{opt.label}</option>
          ))}
        </select>
      </div>
      {/* Logo in top left */}
      <img
        src={logoImage}
        alt="Stackly Logo"
        className="h-16 absolute top-6 left-6 z-10 bg-white bg-opacity-80 rounded-full p-2 shadow-lg"
        style={{ objectFit: "contain" }}
      />
      <div className="bg-transparent w-full max-w-md mx-4 flex flex-col items-center">
  <h2 className="text-4xl font-light text-white mb-8 mt-2 tracking-wide">{translations[selectedLanguage].welcome}</h2>
        {message && (
          <div className="text-green-700 text-sm mb-2 text-center">{message}</div>
        )}
        {form === "login" && (
          <form onSubmit={handleLogin} className="space-y-6 w-full">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder={translations[selectedLanguage].emailOrUsername}
                className="w-full border-b border-gray-200 bg-transparent py-3 pl-10 pr-4 text-white placeholder-gray-200 focus:outline-none focus:border-red-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FaUser className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-300" />
            </div>
            <div className="relative mb-6">
              <input
                type="password"
                placeholder={translations[selectedLanguage].password}
                className="w-full border-b border-gray-200 bg-transparent py-3 pl-10 pr-4 text-white placeholder-gray-200 focus:outline-none focus:border-red-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FaLock className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-300" />
            </div>
            {error && <div className="text-red-400 text-sm text-center">{error}</div>}
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-md shadow-md transition"
            >
              {translations[selectedLanguage].login}
            </button>
            <div className="flex justify-end mt-2 text-sm">
              <button
                className="text-gray-200 hover:underline"
                type="button"
                onClick={() => setForm("forgot")}
              >
                {translations[selectedLanguage].forgotPassword}
              </button>
            </div>
          </form>
        )}
        {form === "register" && (
          <form onSubmit={handleRegister} className="space-y-5">
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block text-white mb-1">{translations[selectedLanguage].firstName}</label>
                <input
                  type="text"
                  className="w-full border-b-2 text-white border-gray-300 focus:border-red-500 bg-transparent py-2 pl-2 outline-none"
                  value={regFirstName}
                  onChange={(e) => setRegFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-white mb-1">{translations[selectedLanguage].lastName}</label>
                <input
                  type="text"
                  className="w-full border-b-2 text-white border-gray-300 focus:border-red-500 bg-transparent py-2 pl-2 outline-none"
                  value={regLastName}
                  onChange={(e) => setRegLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
                <label className="block text-white mb-1">{translations[selectedLanguage].email}</label>
              <input
                type="email"
                className="w-full border-b-2 text-white border-gray-300 focus:border-red-500 bg-transparent py-2 pl-2 outline-none"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                required
              />
            </div>
            <div>
                <label className="block text-white mb-1">{translations[selectedLanguage].password}</label>
              <input
                type="password"
                className="w-full border-b-2 text-white border-gray-300 focus:border-red-500 bg-transparent py-2 pl-2 outline-none"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded transition"
            >
              {translations[selectedLanguage].register}
            </button>
          </form>
        )}
        {form === "forgot" && (
          <form onSubmit={handleForgot} className="space-y-5">
            {forgotStep === 1 && (
              <>
                <div>
                  <label className="block text-white mb-1">{translations[selectedLanguage].email}</label>
                  <input
                    type="email"
                    className="w-full text-white border-b-2 border-gray-300 focus:border-red-500 bg-transparent py-2 pl-2 outline-none"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded transition"
                >
                  {translations[selectedLanguage].next}
                </button>
              </>
            )}
            {forgotStep === 2 && (
              <>
                <div>
                  <label className="block text-white mb-1">{translations[selectedLanguage].newPassword}</label>
                  <input
                    type="password"
                    className="w-full text-white border-b-2 border-gray-300 focus:border-red-500 bg-transparent py-2 pl-2 outline-none"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-1">{translations[selectedLanguage].confirmPassword}</label>
                  <input
                    type="password"
                    className="w-full text-white border-b-2 border-gray-300 focus:border-red-500 bg-transparent py-2 pl-2 outline-none"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded transition"
                >
                  {translations[selectedLanguage].updatePassword}
                </button>
              </>
            )}
            {error && <div className="text-red-400 text-sm text-center">{error}</div>}
          </form>
        )}
        {/* Only show Register and Forgot Password for login form, else show Back to Login */}
        {form === "login" && (
          <div className="flex justify-between mt-4 text-sm">
            <button
              className="text-red-300 hover:underline"
              onClick={() => {
                setForm("register");
                setError("");
                setMessage("");
              }}
              type="button"
            >
              {translations[selectedLanguage].register}
            </button>
          </div>
        )}
        {form !== "login" && (
          <div className="flex justify-center mt-4 text-sm">
            <button
              className="text-red-300 hover:underline"
              onClick={() => {
                setForm("login");
                setError("");
                setMessage("");
              }}
              type="button"
            >
              {translations[selectedLanguage].backToLogin}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
