import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RestaurantFooter from "../components/Footer";
import home1hero from "../assets/home1hero (1).mp4";
import home1about from "../assets/home1about.mp4";
import menu1 from "../assets/menu1.jpg";
import menu2 from "../assets/menu2.jpg";
import menu3 from "../assets/menu3.jpg";
import menu4 from "../assets/menu4.jpg";


const translations = {
  English: {
    heroTitle: "Best Food For\nYour Taste",
    heroDesc: "Lorem ipsum dolor sit amet, consectetur elit. Fusce quam dolor, dictum at mauris non, ultricies dapibus elit.",
    readMore: "Read More",
    findMenu: "Find Menu",
    aboutTitle: "Discover the Foodify Experience",
    aboutDesc: "At Foodify, we blend gourmet flavors with a cozy atmosphere and lightning-fast delivery. Whether you dine in or order online, our chefs craft every dish with passion and the freshest ingredients. Explore our diverse menu, enjoy exclusive offers, and make every meal a celebration!",
    aboutList: [
      "Chef-crafted, seasonal menus",
      "Fast & reliable delivery",
      "Award-winning service",
      "Special events & catering",
    ],
    aboutBtn: "Learn More",
    menuTitle: "EXPLORE MENU",
    menu1: "Appetizers And Soups",
    menu2: "Main Courses",
    menu3: "Desserts",
    menu4: "Wine",
    whyChooseUs: "Why Choose Us",
    why1: "Fresh Ingredients",
    why1desc: "We use only the freshest, high-quality ingredients in every dish for unbeatable flavor and nutrition.",
    why2: "Skilled Chefs",
    why2desc: "Our chefs are passionate professionals, dedicated to creating memorable dining experiences every time.",
    why3: "Vegan Cuisine",
    why3desc: "We offer a variety of delicious vegan options, crafted to delight every palate.",
    clientsSay: "What Our Clients Say",
    client1: "The best indian foodplace in amsterdam if not netherlands. Get the butter chicken!",
    client2: "Absolutely loved the vegan options! The staff was super friendly and the ambiance was great.",
    client3: "Great place for family dinners. The biryani was flavorful and the desserts were amazing!",
    readyGrow: "Ready to Grow with Social Media?",
    readyDesc: "Let our experts help you build your brand, engage your audience, and drive results through social media. Contact us today for a free consultation!",
    getStarted: "Get Started",
  },
  Arabic: {
    heroTitle: "أفضل طعام لذوقك",
    heroDesc: "لوريم إيبسوم دولور سيت أميت، كونسيكتيتور إيليت. فوسك كوام دولور، ديكتوم آت موريس نون، ألتريسيز دابيبيس إيليت.",
    readMore: "اقرأ المزيد",
    findMenu: "اعثر على القائمة",
    aboutTitle: "اكتشف تجربة فوديفاي",
    aboutDesc: "في فوديفاي، نمزج النكهات الذواقة مع أجواء مريحة وتوصيل سريع. سواء تناولت الطعام في المطعم أو طلبت عبر الإنترنت، يبدع طهاتنا كل طبق بشغف وبأجود المكونات. استكشف قائمتنا المتنوعة، واستمتع بالعروض الحصرية، واجعل كل وجبة احتفالاً!",
    aboutList: [
      "قوائم موسمية من إعداد الطهاة",
      "توصيل سريع وموثوق",
      "خدمة حائزة على جوائز",
      "فعاليات خاصة وخدمات تموين",
    ],
    aboutBtn: "اعرف المزيد",
    menuTitle: "استكشف القائمة",
    menu1: "المقبلات والشوربات",
    menu2: "الأطباق الرئيسية",
    menu3: "الحلويات",
    menu4: "النبيذ",
    whyChooseUs: "لماذا نحن",
    why1: "مكونات طازجة",
    why1desc: "نستخدم فقط أجود وأطازج المكونات في كل طبق لنكهة وقيمة غذائية لا مثيل لها.",
    why2: "طهاة ماهرون",
    why2desc: "طهاتنا محترفون شغوفون، يكرسون أنفسهم لتقديم تجارب طعام لا تُنسى في كل مرة.",
    why3: "مأكولات نباتية",
    why3desc: "نقدم مجموعة متنوعة من الخيارات النباتية اللذيذة لإرضاء جميع الأذواق.",
    clientsSay: "ماذا يقول عملاؤنا",
    client1: "أفضل مطعم هندي في أمستردام إن لم يكن في هولندا. جرب دجاج الزبدة!",
    client2: "أحببت الخيارات النباتية! كان الموظفون ودودين للغاية والأجواء رائعة.",
    client3: "مكان رائع لعشاء العائلة. البرياني كان لذيذاً والحلويات مذهلة!",
    readyGrow: "جاهز للنمو مع وسائل التواصل الاجتماعي؟",
    readyDesc: "دع خبراءنا يساعدونك في بناء علامتك التجارية وجذب جمهورك وتحقيق النتائج من خلال وسائل التواصل الاجتماعي. اتصل بنا اليوم لاستشارة مجانية!",
    getStarted: "ابدأ الآن",
  },
  Hebrew: {
    heroTitle: "האוכל הטוב ביותר לטעמך",
    heroDesc: "לורם איפסום דולור סיט אמט, קונסקטטור אליט. פוסקה קואם דולור, דיקטום את מוריס נון, אולטריסיס דפיבוס אליט.",
    readMore: "קרא עוד",
    findMenu: "מצא תפריט",
    aboutTitle: "גלה את חווית פודיפיי",
    aboutDesc: "בפודיפיי אנו משלבים טעמים גורמה עם אווירה נעימה ומשלוח מהיר. בין אם אתם סועדים במקום או מזמינים אונליין, השפים שלנו יוצרים כל מנה בתשוקה ובמרכיבים הטריים ביותר. גלו את התפריט המגוון שלנו, נהנו מהצעות בלעדיות, והפכו כל ארוחה לחגיגה!",
    aboutList: [
      "תפריטים עונתיים בהכנת שף",
      "משלוח מהיר ואמין",
      "שירות זוכה פרסים",
      "אירועים מיוחדים וקייטרינג",
    ],
    aboutBtn: "למידע נוסף",
    menuTitle: "גלה תפריט",
    menu1: "מנות ראשונות ומרקים",
    menu2: "מנות עיקריות",
    menu3: "קינוחים",
    menu4: "יין",
    whyChooseUs: "למה לבחור בנו",
    why1: "מרכיבים טריים",
    why1desc: "אנו משתמשים רק במרכיבים הטריים והאיכותיים ביותר בכל מנה לטעם ותזונה ללא תחרות.",
    why2: "שפים מיומנים",
    why2desc: "השפים שלנו הם מקצוענים נלהבים, המוקדשים ליצירת חוויות אוכל בלתי נשכחות בכל פעם.",
    why3: "מטבח טבעוני",
    why3desc: "אנו מציעים מגוון אפשרויות טבעוניות טעימות, שנוצרו כדי לרצות כל חיך.",
    clientsSay: "מה הלקוחות שלנו אומרים",
    client1: "המקום ההודי הכי טוב באמסטרדם אם לא בהולנד. קחו את עוף החמאה!",
    client2: "אהבתי את האפשרויות הטבעוניות! הצוות היה מאוד ידידותי והאווירה הייתה נהדרת.",
    client3: "מקום נהדר לארוחות משפחתיות. הביריאני היה טעים והקינוחים היו מדהימים!",
    readyGrow: "מוכן לצמוח עם מדיה חברתית?",
    readyDesc: "תנו למומחים שלנו לעזור לכם לבנות את המותג שלכם, למשוך קהל ולהשיג תוצאות דרך מדיה חברתית. צרו קשר היום לייעוץ חינם!",
    getStarted: "התחל עכשיו",
  },
};

export default function Home1() {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'English';
    }
    return 'English';
  });

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(localStorage.getItem('selectedLanguage') || 'English');
    };
    window.addEventListener('language-changed', handleLanguageChange);
    window.addEventListener('storage', handleLanguageChange);
    return () => {
      window.removeEventListener('language-changed', handleLanguageChange);
      window.removeEventListener('storage', handleLanguageChange);
    };
  }, []);

  const t = translations[language] || translations.English;
  const isRTL = language === 'Arabic' || language === 'Hebrew';

  return (
    <div className="flex flex-col min-h-screen" dir={isRTL ? 'rtl' : 'ltr'}>
     
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden">
        {/* Background Video for Hero Only */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-110"
          src={home1hero}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay with less opacity for more brightness */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white text-center mb-4 drop-shadow-lg">
            {t.heroTitle.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h1>
          <p className="text-lg md:text-xl text-white/90 text-center mb-8 max-w-xl drop-shadow">
            {t.heroDesc}
          </p>
          <div className="flex gap-6">
            <button className="relative border border-white text-white px-8 py-3 rounded-lg text-lg font-serif flex items-center group bg-transparent hover:bg-white/10 transition">
              {t.readMore}
              <span className="ml-3 w-8 h-0.5 bg-white block group-hover:bg-red-500 transition-all"></span>
            </button>
            <button className="bg-white/90 hover:bg-white text-red-700 font-semibold px-8 py-3 rounded-lg text-lg shadow transition">
              {t.findMenu}
            </button>
          </div>
        </div>
      </section>
      {/* About/Feature Section */}
      <section className="relative w-full bg-white/90 py-16 px-4 md:px-0 flex flex-col items-center justify-center z-10">
        <div className="max-w-6xl w-full mx-auto grid  md:grid-cols-2 gap-10 items-stretch">
          {/* Left: Video */}
          <div className="w-full flex justify-center items-center min-h-[340px] h-full">
            <video
              src={home1about}
              className="rounded-2xl shadow-lg w-full max-w-md h-full min-h-[260px] object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          {/* Right: Content */}
          <div className="flex flex-col items-start justify-center min-h-[340px] h-full">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">{t.aboutTitle}</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-lg">{t.aboutDesc}</p>
            <ul className="mb-6 space-y-2 text-gray-700">
              {t.aboutList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition">{t.aboutBtn}</button>
          </div>
        </div>
      </section>

      {/* Explore Menu Section */}
      <section className="w-full bg-red-50 py-16 px-4 md:px-0 flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 font-serif text-center">{t.menuTitle}</h2>
          <div className="grid  sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Menu Card 1 */}
            <div className="flex flex-col items-center">
              <img src={menu1} alt={t.menu1} className="w-full h-80 object-cover rounded-lg shadow-lg" />
              <span className="mt-4 text-gray-900 text-lg font-serif">{t.menu1}</span>
            </div>
            {/* Menu Card 2 */}
            <div className="flex flex-col items-center">
              <img src={menu2} alt={t.menu2} className="w-full h-80 object-cover rounded-lg shadow-lg" />
              <span className="mt-4 text-gray-900 text-lg font-serif">{t.menu2}</span>
            </div>
            {/* Menu Card 3 */}
            <div className="flex flex-col items-center">
              <img src={menu3} alt={t.menu3} className="w-full h-80 object-cover rounded-lg shadow-lg" />
              <span className="mt-4 text-gray-900 text-lg font-serif">{t.menu3}</span>
            </div>
            {/* Menu Card 4 */}
            <div className="flex flex-col items-center">
              <img src={menu4} alt={t.menu4} className="w-full h-80 object-cover rounded-lg shadow-lg" />
              <span className="mt-4 text-gray-900 text-lg font-serif">{t.menu4}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (White theme, red border, black text) */}
      <section className="w-full bg-white py-20 px-4 md:px-0 flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full mx-auto">
          <div className="text-center mb-2">
            <span className="text-lg text-red-600 font-serif italic tracking-wide">{t.whyChooseUs}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-black text-center mb-12">{t.whyChooseUs}</h2>
          <div className="grid  md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-transparent border border-red-600 rounded-none p-10 flex flex-col items-center text-center transition-all">
              {/* Fries Icon SVG */}
              <svg width="64" height="64" fill="none" stroke="#dc2626" strokeWidth="2" viewBox="0 0 64 64" className="mb-6"><rect x="18" y="28" width="28" height="24" rx="4"/><path d="M22 28V18M32 28V12M42 28V20"/></svg>
              <h3 className="text-2xl font-serif font-semibold text-black mb-2">{t.why1}</h3>
              <p className="text-gray-700 text-base">{t.why1desc}</p>
            </div>
            {/* Card 2 (Highlighted) */}
            <div className="bg-transparent border-2 border-red-600 rounded-none p-10 flex flex-col items-center text-center transition-all relative" style={{boxShadow:'0 0 0 4px #fff, 0 0 0 8px #dc2626'}}>
              {/* Drink Icon SVG */}
              <svg width="64" height="64" fill="none" stroke="#dc2626" strokeWidth="2" viewBox="0 0 64 64" className="mb-6"><rect x="22" y="16" width="20" height="32" rx="6"/><path d="M32 48v6"/><circle cx="32" cy="24" r="2"/></svg>
              <h3 className="text-2xl font-serif font-semibold text-black mb-2">{t.why2}</h3>
              <p className="text-gray-700 text-base">{t.why2desc}</p>
            </div>
            {/* Card 3 */}
            <div className="bg-transparent border border-red-600 rounded-none p-10 flex flex-col items-center text-center transition-all">
              {/* Burger Icon SVG */}
              <svg width="64" height="64" fill="none" stroke="#dc2626" strokeWidth="2" viewBox="0 0 64 64" className="mb-6"><ellipse cx="32" cy="28" rx="18" ry="8"/><rect x="14" y="28" width="36" height="10" rx="5"/><rect x="18" y="38" width="28" height="8" rx="4"/></svg>
              <h3 className="text-2xl font-serif font-semibold text-black mb-2">{t.why3}</h3>
              <p className="text-gray-700 text-base">{t.why3desc}</p>
            </div>
          </div>
        </div>
      </section>
      {/* What Our Clients Say Section (Three circular cards, one image each) */}
      <section className="relative w-full flex flex-row items-center justify-center py-20 bg-transparent overflow-hidden">
        {/* Background food image (use menu1 as a placeholder) */}
        <img src={menu1} alt="food background" className="absolute inset-0 w-full h-full object-cover opacity-60 blur-sm z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-red-600 mb-12 text-center drop-shadow">{t.clientsSay}</h2>
          <div className="flex  md:flex-row justify-center items-center w-full gap-8">
            {/* Card 1 */}
            <div className="bg-white  shadow-2xl p-8 md:p-10 flex flex-col items-center justify-center max-w-xs w-full relative" style={{width:'340px', height:'340px',borderRadius:'0px 100px'}}>
              <div className="flex items-center mb-2">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Adolfo Roman" className="w-10 h-10 rounded-full mr-3 border-2 border-yellow-400" />
                <span className="font-semibold text-gray-800 text-lg">Adolfo Roman</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_,i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                ))}
              </div>
              <p className="text-gray-700 text-center mb-4 text-base">{t.client1}</p>
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80" alt="dish1" className="w-32 h-24 object-cover rounded mt-2" />
            </div>
            {/* Card 2 */}
            <div className="bg-white  shadow-2xl p-8 md:p-10 flex flex-col items-center justify-center max-w-xs w-full relative" style={{width:'340px', height:'340px',borderRadius:'0px 100px'}}>
              <div className="flex items-center mb-2">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Maria Lopez" className="w-10 h-10 rounded-full mr-3 border-2 border-yellow-400" />
                <span className="font-semibold text-gray-800 text-lg">Maria Lopez</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_,i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                ))}
              </div>
              <p className="text-gray-700 text-center mb-4 text-base">{t.client2}</p>
              <img src={menu2} alt="dish2" className="w-32 h-24 object-cover rounded mt-2" />
            </div>
            {/* Card 3 */}
            <div className="bg-white  shadow-2xl p-8 md:p-10 flex flex-col items-center justify-center max-w-xs w-full relative" style={{width:'340px', height:'340px',borderRadius:'0px 100px'}}>
              <div className="flex items-center mb-2">
                <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="John Smith" className="w-10 h-10 rounded-full mr-3 border-2 border-yellow-400" />
                <span className="font-semibold text-gray-800 text-lg">John Smith</span>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_,i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                ))}
              </div>
              <p className="text-gray-700 text-center mb-4 text-base">{t.client3}</p>
              <img src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=200&q=80" alt="dish3" className="w-32 h-24 object-cover rounded mt-2" />
            </div>
          </div>
        </div>
      </section>
      {/* CTAs Section (Styled like attachment) */}
      <section className="w-full bg-white py-16 px-4 md:px-0 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full mx-auto flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4" style={{color: 'red'}}>{t.readyGrow}</h2>
          <p className="text-lg text-center text-gray-700 mb-8">{t.readyDesc}</p>
          <a href="#get-started" className="mt-2 px-10 py-4 rounded-full text-white font-semibold text-lg shadow-lg transition bg-red-500" style={{boxShadow:'0 4px 24px 0 rgba(139,92,246,0.15)'}}>{t.getStarted}</a>
        </div>
      </section>
      
    </div>
  );
}