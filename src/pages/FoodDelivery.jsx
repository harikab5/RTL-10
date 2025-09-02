import React, { useState } from "react";
import foodhero from "../assets/foodhero.mp4";
import serviceImg from "../assets/food1.webp"; // Replace with your service image
import food from "../assets/food2.webp"; // <-- Import your image
import food3 from "../assets/food3.jpg"; // Replace with your call to action image

import { FaUtensils, FaShoppingCart, FaTruck, FaSmile, FaArrowLeft, FaArrowRight } from "react-icons/fa";


// Translation object for all text
const translations = {
  en: {
    heroTitle: "Delicious Food Delivered Fast",
    heroDesc: "Enjoy hot, fresh, and tasty meals at your doorstep – quick delivery, multiple cuisines, and unbeatable offers just for you!",
    aboutTitle: "About Our Service",
    about: [
      "Our food delivery service ensures that you get fresh and delicious meals at your doorstep in record time. We partner with top restaurants and chefs to bring a wide variety of cuisines to your table.",
      "Whether it’s a quick lunch, a family dinner, or a special celebration, we guarantee quality, hygiene, and satisfaction with every order.",
      "We carefully select only the finest ingredients and prepare meals with utmost care to maintain freshness and flavor. Every order is handled with strict hygiene standards.",
      "Our platform makes ordering seamless and convenient – choose your favorite dishes, customize them to your liking, and track your delivery in real time.",
      "We also offer flexible subscription plans, catering services for events, and special discounts for bulk orders, ensuring there’s something for everyone."
    ],
    pricingTitle: "Our Pricing",
    pricingDesc: "Choose a plan that fits your appetite. Upgrade anytime — no hidden fees!",
    plans: [
      {
        name: "Starter",
        price: "$9",
        period: "/month",
        features: ["1 meal per day", "Free delivery over $20", "Basic support"],
        highlighted: false,
      },
      {
        name: "Regular",
        price: "$19",
        period: "/month",
        features: ["2 meals per day", "Priority delivery", "Discount coupons"],
        highlighted: true,
      },
      {
        name: "Premium",
        price: "$29",
        period: "/month",
        features: ["Unlimited meals", "Free delivery always", "Premium support"],
        highlighted: false,
      },
    ],
    testimonials: [
      { name: "Sarah Johnson", role: "Food Blogger", text: "The delivery was super fast and the food was absolutely delicious! Highly recommend this service." },
      { name: "Michael Lee", role: "Chef", text: "I was impressed by how fresh everything was. Definitely a go-to for late-night cravings." },
      { name: "Emily Davis", role: "Student", text: "Affordable and tasty! I love that I can track my order in real-time." },
      { name: "David Wilson", role: "Business Analyst", text: "Best restaurant delivery experience I've had. Excellent customer support as well." },
      { name: "Olivia Martinez", role: "Designer", text: "Meals always arrive hot and neatly packed. Perfect for busy work days." },
    ],
    testimonialsTitle: "What Our Customers Say",
    howItWorksTitle: "How It Works",
    howItWorksDesc: "Ordering delicious food from your favorite restaurant is simple and fast.",
    steps: [
      { title: "Choose Your Meal", description: "Browse our menu and select your favorite dishes quickly." },
      { title: "Place Your Order", description: "Add meals to your cart, customize options, and checkout securely." },
      { title: "Fast Delivery", description: "Track your order in real-time as it arrives fresh and hot." },
      { title: "Enjoy Your Food", description: "Delicious meals delivered to your doorstep with satisfaction." },
    ],
    ctaTitle: "Ready to Order?",
    ctaDesc: "Order now and get your favorite meals delivered <br /> fresh, hot, and in record time. Taste the difference today!",
    ctaBtn: "Order Now",
  },
  ar: {
    heroTitle: "طعام لذيذ يُوصَل بسرعة",
    heroDesc: "استمتع بوجبات ساخنة وطازجة ولذيذة إلى باب منزلك – توصيل سريع، مطابخ متنوعة، وعروض لا تُضاهى خصيصًا لك!",
    aboutTitle: "عن خدمتنا",
    about: [
      "خدمة توصيل الطعام لدينا تضمن حصولك على وجبات طازجة ولذيذة إلى باب منزلك في وقت قياسي. نتعاون مع أفضل المطاعم والطهاة لنقدم لك مجموعة واسعة من المطابخ.",
      "سواء كان غداء سريعًا، عشاء عائليًا، أو احتفالًا خاصًا، نضمن الجودة والنظافة والرضا مع كل طلب.",
      "نختار بعناية أفضل المكونات ونعد الوجبات بأقصى درجات العناية للحفاظ على الطزاجة والنكهة. كل طلب يُعالج بمعايير نظافة صارمة.",
      "منصتنا تجعل الطلب سهلاً ومريحًا – اختر أطباقك المفضلة، خصصها حسب رغبتك، وتابع التوصيل في الوقت الفعلي.",
      "نقدم أيضًا خطط اشتراك مرنة، وخدمات تموين للمناسبات، وخصومات خاصة للطلبات الكبيرة، لنضمن وجود ما يناسب الجميع."
    ],
    pricingTitle: "أسعارنا",
    pricingDesc: "اختر الخطة التي تناسب شهيتك. يمكنك الترقية في أي وقت – بدون رسوم خفية!",
    plans: [
      {
        name: "مبتدئ",
        price: "$9",
        period: "/شهر",
        features: ["وجبة واحدة يوميًا", "توصيل مجاني للطلبات فوق $20", "دعم أساسي"],
        highlighted: false,
      },
      {
        name: "عادي",
        price: "$19",
        period: "/شهر",
        features: ["وجبتان يوميًا", "توصيل أولوية", "قسائم خصم"],
        highlighted: true,
      },
      {
        name: "مميز",
        price: "$29",
        period: "/شهر",
        features: ["وجبات غير محدودة", "توصيل مجاني دائمًا", "دعم مميز"],
        highlighted: false,
      },
    ],
    testimonials: [
      { name: "سارة جونسون", role: "مدونة طعام", text: "كان التوصيل سريعًا جدًا والطعام لذيذ للغاية! أنصح بهذه الخدمة بشدة." },
      { name: "مايكل لي", role: "طاهٍ", text: "أعجبني مدى طزاجة كل شيء. بالتأكيد خياري الأول لرغبات منتصف الليل." },
      { name: "إميلي ديفيس", role: "طالبة", text: "سعر مناسب وطعم رائع! أحب أنني أستطيع تتبع طلبي في الوقت الفعلي." },
      { name: "ديفيد ويلسون", role: "محلل أعمال", text: "أفضل تجربة توصيل مطاعم حصلت عليها. دعم العملاء ممتاز أيضًا." },
      { name: "أوليفيا مارتينيز", role: "مصممة", text: "الوجبات تصل دائمًا ساخنة ومعبأة بعناية. مثالية لأيام العمل المزدحمة." },
    ],
    testimonialsTitle: "ماذا يقول عملاؤنا",
    howItWorksTitle: "كيف تعمل الخدمة",
    howItWorksDesc: "طلب الطعام اللذيذ من مطعمك المفضل سهل وسريع.",
    steps: [
      { title: "اختر وجبتك", description: "تصفح قائمتنا واختر أطباقك المفضلة بسرعة." },
      { title: "أكمل الطلب", description: "أضف الوجبات إلى السلة، خصص الخيارات، وأكمل الدفع بأمان." },
      { title: "توصيل سريع", description: "تابع طلبك في الوقت الفعلي حتى يصلك طازجًا وساخنًا." },
      { title: "استمتع بوجبتك", description: "وجبات لذيذة تُوصَل إلى بابك مع رضا تام." },
    ],
    ctaTitle: "جاهز للطلب؟",
    ctaDesc: "اطلب الآن واحصل على وجباتك المفضلة <br /> طازجة، ساخنة، وفي وقت قياسي. جرب الفرق اليوم!",
    ctaBtn: "اطلب الآن",
  },
  he: {
    heroTitle: "אוכל טעים מגיע במהירות",
    heroDesc: "תיהנו מארוחות חמות, טריות וטעימות עד הבית – משלוח מהיר, מטבחים מגוונים ומבצעים בלעדיים במיוחד בשבילכם!",
    aboutTitle: "על השירות שלנו",
    about: [
      "שירות המשלוחים שלנו מבטיח שתקבלו ארוחות טריות וטעימות עד הבית בזמן שיא. אנו משתפים פעולה עם מסעדות ושפים מובילים כדי להביא לכם מגוון רחב של מטבחים.",
      "בין אם זה ארוחת צהריים מהירה, ארוחת ערב משפחתית או חגיגה מיוחדת, אנו מבטיחים איכות, היגיינה ושביעות רצון בכל הזמנה.",
      "אנו בוחרים בקפידה את המרכיבים הטובים ביותר ומבשלים את המנות בדאגה מרבית לשמירה על טריות וטעם. כל הזמנה מטופלת בסטנדרטים מחמירים של ניקיון.",
      "הפלטפורמה שלנו הופכת את ההזמנה לפשוטה ונוחה – בחרו את המנות האהובות, התאימו אותן לטעמכם, ועקבו אחרי המשלוח בזמן אמת.",
      "אנו מציעים גם מסלולי מנוי גמישים, שירותי קייטרינג לאירועים, והנחות מיוחדות להזמנות גדולות – כך שיש משהו לכל אחד."
    ],
    pricingTitle: "המחירים שלנו",
    pricingDesc: "בחרו מסלול שמתאים לתיאבון שלכם. אפשר לשדרג בכל עת – ללא עמלות נסתרות!",
    plans: [
      {
        name: "מתחיל",
        price: "$9",
        period: "/חודש",
        features: ["ארוחה אחת ביום", "משלוח חינם מעל $20", "תמיכה בסיסית"],
        highlighted: false,
      },
      {
        name: "רגיל",
        price: "$19",
        period: "/חודש",
        features: ["2 ארוחות ביום", "משלוח בעדיפות", "קופוני הנחה"],
        highlighted: true,
      },
      {
        name: "פרימיום",
        price: "$29",
        period: "/חודש",
        features: ["ארוחות ללא הגבלה", "משלוח חינם תמיד", "תמיכה פרימיום"],
        highlighted: false,
      },
    ],
    testimonials: [
      { name: "שרה ג'ונסון", role: "בלוגרית אוכל", text: "המשלוח היה מהיר במיוחד והאוכל היה טעים מאוד! ממליצה בחום על השירות." },
      { name: "מייקל לי", role: "שף", text: "התרשמתי מהטריות של הכל. בהחלט הבחירה שלי ללילות רעב." },
      { name: "אמילי דיוויס", role: "סטודנטית", text: "מחיר משתלם וטעם נהדר! אוהבת שאפשר לעקוב אחרי ההזמנה בזמן אמת." },
      { name: "דוד וילסון", role: "אנליסט עסקי", text: "חווית משלוח המסעדות הכי טובה שהייתה לי. גם שירות הלקוחות מצוין." },
      { name: "אוליביה מרטינז", role: "מעצבת", text: "הארוחות תמיד מגיעות חמות וארוזות בקפידה. מושלם לימי עבודה עמוסים." },
    ],
    testimonialsTitle: "מה הלקוחות שלנו אומרים",
    howItWorksTitle: "איך זה עובד",
    howItWorksDesc: "להזמין אוכל טעים מהמסעדה האהובה עליכם זה פשוט ומהיר.",
    steps: [
      { title: "בחרו מנה", description: "עיינו בתפריט ובחרו את המנות האהובות עליכם במהירות." },
      { title: "בצעו הזמנה", description: "הוסיפו מנות לעגלה, התאימו אפשרויות ושלמו בבטחה." },
      { title: "משלוח מהיר", description: "עקבו אחרי ההזמנה בזמן אמת עד שהיא מגיעה חמה וטרייה." },
      { title: "תיהנו מהאוכל", description: "ארוחות טעימות מגיעות עד הבית עם שביעות רצון מלאה." },
    ],
    ctaTitle: "מוכנים להזמין?",
    ctaDesc: "הזמינו עכשיו וקבלו את המנות האהובות עליכם <br /> טריות, חמות ובזמן שיא. תטעמו את ההבדל כבר היום!",
    ctaBtn: "הזמינו עכשיו",
  },
};
 

const stepIcons = [
  <FaUtensils size={28} className="text-white" />,
  <FaShoppingCart size={28} className="text-white" />,
  <FaTruck size={28} className="text-white" />,
  <FaSmile size={28} className="text-white" />,
];
// ...plans now in translations


const FoodDeliveryHero = () => {
  // Language and theme state synced with Header
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('light');
  // Map UI language names to codes
  const langMap = {
    English: 'en',
    Arabic: 'ar',
    Hebrew: 'he',
    en: 'en',
    ar: 'ar',
    he: 'he',
  };
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
      const storedSelectedLang = localStorage.getItem('selectedLanguage') || 'English';
      setLanguage(langMap[storedSelectedLang] || 'en');
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem('theme') || 'light';
        setTheme(newTheme);
      };
      const handleLangChange = () => {
        const newSelectedLang = localStorage.getItem('selectedLanguage') || 'English';
        setLanguage(langMap[newSelectedLang] || 'en');
      };
      window.addEventListener('theme-changed', handleThemeChange);
      window.addEventListener('storage', handleThemeChange);
      window.addEventListener('language-changed', handleLangChange);
      window.addEventListener('storage', handleLangChange);
      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);
        window.removeEventListener('language-changed', handleLangChange);
        window.removeEventListener('storage', handleLangChange);
      };
    }
  }, []);

  // Theme toggle handler
  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      window.dispatchEvent(new Event('theme-changed'));
    }
  };

  // Set RTL/LTR direction
  const dir = language === 'ar' || language === 'he' ? 'rtl' : 'ltr';

  // Testimonial carousel
  const [index, setIndex] = useState(0);
  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % translations[language].testimonials.length);
  };
  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + translations[language].testimonials.length) % translations[language].testimonials.length);
  };
  const testimonial = translations[language].testimonials[index];

  // Section background classes
  const sectionBg = theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black';
  const sectionAltBg = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-red-50 text-black';
  const cardBg = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black';
  const pricingBg = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black';

  return (
    <div dir={dir} className={sectionBg}>
      {/* Theme Toggle Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={handleToggleTheme}
          className={`px-4 py-2 rounded-full font-semibold shadow transition duration-300 ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
        >
          {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
      {/* Hero Section */}
  <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={foodhero}
          autoPlay
          loop
          muted
          playsInline
        />
  <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
  <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
            {translations[language].heroTitle}
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
            {translations[language].heroDesc}
          </p>
        </div>
      </section>

  {/* About Our Service Section */}
  <section className={`py-20 px-6 md:px-20 ${sectionAltBg}`}> 
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src={serviceImg}
              alt="Our Service"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
              {translations[language].aboutTitle}
            </h2>
            {translations[language].about.map((p, i) => (
              <p className="mb-4" key={i} style={dir === 'rtl' ? {textAlign:'right'} : {}}>{p}</p>
            ))}


          </div>
        </div>
      </section>

      {/*how it works section */  }
       

  <section className={`py-20 px-6 ${pricingBg} text-center`} id="pricing">
      <h2 className="text-4xl font-bold text-red-500 mb-4" style={dir === 'rtl' ? {textAlign:'right'} : {}}>{translations[language].pricingTitle}</h2>
  <p className="max-w-2xl mx-auto mb-12" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
        {translations[language].pricingDesc}
      </p>
        <h2 className="text-4xl font-bold text-red-500 mb-4" style={dir === 'rtl' ? {textAlign:'right'} : {}}>{translations[language].howItWorksTitle}</h2>
        <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'} max-w-2xl mx-auto mb-12`} style={dir === 'rtl' ? {textAlign:'right'} : {}}>
          {translations[language].howItWorksDesc}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {translations[language].steps.map((step, index) => (
            <div key={index} className="flex items-center">
              {/* Step card */}
              <div className="flex flex-col  hover:scale-105 transition items-center max-w-[200px]">
                <div className={`rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md ${theme === 'dark' ? 'bg-red-700' : 'bg-red-500'}`}> 
                  {stepIcons[index]}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'} text-sm`}>{step.description}</p>
              </div>

              {/* Arrow (between steps only, hidden on small screens) */}
              {index < translations[language].steps.length - 1 && (
                <FaArrowRight size={30} className={`${theme === 'dark' ? 'text-white' : 'text-gray-400'} mx-6 hidden md:block`} />
              )}
            </div>
          ))}
        </div>

      <div className="grid  md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {translations[language].plans.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col items-center rounded-2xl p-8 shadow-lg border 
              ${plan.highlighted ? (theme === 'dark' ? 'bg-red-700 text-white scale-105' : 'bg-red-500 text-white scale-105') : (theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800')}`}
            style={dir === 'rtl' ? {textAlign:'right'} : {}}
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <div className="text-4xl font-extrabold mb-2">
              {plan.price} <span className="text-lg font-medium">{plan.period}</span>
            </div>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-sm">{feature}</li>
              ))}
            </ul>
            <button
              className={`px-6 py-3 rounded-full font-semibold transition 
                ${plan.highlighted 
                  ? "bg-white text-red-500 hover:bg-gray-100" 
                  : "bg-red-500 text-white hover:bg-red-600"}`}
            >
              {language === 'ar' ? 'ابدأ الآن' : language === 'he' ? 'התחל עכשיו' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </section>



  <section className={`py-10 px-4 ${sectionAltBg}`}>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
    {/* Left Side - Text Card */}
    <div className="text-center md:text-left">
      <h2 className={`text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`} style={dir === 'rtl' ? {textAlign:'right'} : {}}>
        {translations[language].testimonialsTitle}
      </h2>
      <div className={`rounded-2xl p-8 shadow-lg ${cardBg}`}>
        <p className="text-lg italic mb-6" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
          "{testimonial.text}"
        </p>
        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
        <p className="text-red-500 text-sm">{testimonial.role}</p>
      </div>

      {/* Arrows */}
      <div className="flex justify-center md:justify-start gap-4 mt-6">
        <button
          onClick={prevTestimonial}
          className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextTestimonial}
          className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>

    {/* Right Side - Image */}
    <div className="flex justify-center">
      <img
        src={food}
        alt="Delicious food"
        className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover"
      />
    </div>
  </div>
</section>
<section className={`py-20 px-6 ${pricingBg} text-center`}>
      <h2 className="text-4xl font-bold text-red-500 mb-4" style={dir === 'rtl' ? {textAlign:'right'} : {}}>{translations[language].howItWorksTitle}</h2>
      <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'} max-w-2xl mx-auto mb-12`} style={dir === 'rtl' ? {textAlign:'right'} : {}}>
        {translations[language].howItWorksDesc}
      </p>

      <div className="flex flex-wrap justify-center items-center gap-6">
        {translations[language].steps.map((step, index) => (
          <div key={index} className="flex items-center">
            {/* Step card */}
            <div className="flex flex-col  hover:scale-105 transition items-center max-w-[200px]">
              <div className={`rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md ${theme === 'dark' ? 'bg-red-700' : 'bg-red-500'}`}> 
                {stepIcons[index]}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'} text-sm`}>{step.description}</p>
            </div>

            {/* Arrow (between steps only, hidden on small screens) */}
            {index < translations[language].steps.length - 1 && (
              <FaArrowRight size={30} className="text-gray-400 mx-6 hidden md:block" />
            )}
          </div>
        ))}
      </div>
    </section>




      {/* Call to Action Section */}
  <section className="relative py-24 px-6 md:px-20 text-white">
  {/* Background Image */}
  <img
    src={food3}
    alt="Delicious food"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Red Transparent Overlay */}
  <div className="absolute inset-0 bg-red-500/70 z-0"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
    <h2 className="text-5xl  font-extrabold mb-6" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
      {translations[language].ctaTitle}
    </h2>
    <p className="text-lg md:text-xl mb-8 leading-relaxed" style={dir === 'rtl' ? {textAlign:'right'} : {}} dangerouslySetInnerHTML={{__html: translations[language].ctaDesc}} />
    <button
      onClick={() => {
        document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
      }}
      className="bg-white text-black py-4 px-10 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
    >
      {translations[language].ctaBtn}
    </button>
  </div>
</section>

    </div>
  );
};

export default FoodDeliveryHero;
