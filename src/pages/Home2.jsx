import React, { useEffect, useState } from "react";
import ImpactSection from "../components/ImpactSection";
import chef1 from "../assets/chef1.jpg";
import chef2 from "../assets/chef2.jpg";
import chef3 from "../assets/chef3.jpg";
import home2hero from "../assets/home2hero.mp4";
import menu1 from "../assets/menu1.jpg";
import menu2 from "../assets/menu2.jpg";
import menu3 from "../assets/menu3.jpg";
import menu4 from "../assets/menu4.jpg";
import special1 from "../assets/special1.jpg";
import special2 from "../assets/special2.jpg";
import special3 from "../assets/special3.jpg";
import special4 from "../assets/special4.jpg";
import buffet1 from "../assets/buffet1.jpg";
import buffet2 from "../assets/buffet2.jpg";
import heritage from "../assets/heritage.jpg";

const translations = {
  English: {
    heroTitle: "Experience Gourmet Dining at Foodify",
    heroDesc: "Welcome to Foodify, where every meal is a celebration! Enjoy chef-crafted dishes, a cozy dine-in atmosphere, and lightning-fast delivery. Discover our diverse menu, special offers, and exceptional service—crafted just for you.",
    readMore: "Read More",
    specialsTitle: "Chef’s Specials Gallery",
    specials: ["Special 1", "Special 2", "Special 3", "Special 4"],
    heritageTitle: "Heritage & Legacy",
    heritageDesc: "Our restaurant's journey began decades ago, rooted in a passion for authentic flavors and heartfelt hospitality. From humble beginnings to a celebrated culinary destination, our legacy is built on tradition, innovation, and a commitment to excellence. Every dish tells a story—of family, culture, and the joy of sharing great food.",
    heritageList: [
      "Established in 1985, serving generations of food lovers",
      "Family-owned and operated with pride",
      "Honoring traditional recipes with a modern twist",
      "Recognized for excellence in taste and service",
    ],
    heritageBtn: "Learn More",
    professionalsTitle: "Meet Our Professionals",
    chef1: "Gordon Ramsay",
    chef2: "Dominique Crenn",
    chef3: "Auguste Escoffier",
    chefRole: "Chef",
    eventsTitle: "Live Events & Dining Nights",
    musicNights: "Music Nights",
    buffetThemes: "Buffet Themes",
    eventsCardTitle: "Unforgettable Evenings",
    eventsCardDesc: "Join us for vibrant live music nights, themed buffets, and exclusive dining experiences. Our events bring together great food, entertainment, and a lively atmosphere for all ages.",
    eventsList: [
      "Weekly live music performances",
      "Rotating buffet themes",
      "Special guest appearances",
      "Family-friendly fun",
    ],
    eventsBtn: "See Upcoming Events",
    ctaTitle: "Reserve Your Table or Order Online!",
    ctaDesc: "Experience gourmet dining, chef’s specials, and unforgettable evenings at Foodify. Book your table for a special night or order your favorite dishes for home delivery. We’re here to delight your taste buds—every day!",
    reserveBtn: "Reserve a Table",
    orderBtn: "Order Online",
  },
  Arabic: {
    heroTitle: "اختبر تجربة الطعام الفاخر في فوديفاي",
    heroDesc: "مرحبًا بك في فوديفاي، حيث كل وجبة هي احتفال! استمتع بأطباق من إعداد الطهاة، وأجواء مريحة، وتوصيل سريع. اكتشف قائمتنا المتنوعة، العروض الخاصة، والخدمة الاستثنائية—كل ذلك من أجلك.",
    readMore: "اقرأ المزيد",
    specialsTitle: "معرض أطباق الشيف الخاصة",
    specials: ["طبق خاص 1", "طبق خاص 2", "طبق خاص 3", "طبق خاص 4"],
    heritageTitle: "الإرث والتقاليد",
    heritageDesc: "بدأت رحلة مطعمنا منذ عقود، متجذرة في شغف النكهات الأصيلة والضيافة الدافئة. من بدايات متواضعة إلى وجهة طهي مشهورة، بني إرثنا على التقاليد والابتكار والتميز. كل طبق يروي قصة—عن العائلة والثقافة وفرحة مشاركة الطعام الرائع.",
    heritageList: [
      "تأسس عام 1985، يخدم أجيالاً من عشاق الطعام",
      "مملوك ومدار عائليًا بفخر",
      "نحترم الوصفات التقليدية مع لمسة عصرية",
      "حاصلون على جوائز في الطعم والخدمة",
    ],
    heritageBtn: "اعرف المزيد",
    professionalsTitle: "تعرف على محترفينا",
    chef1: "غوردون رامزي",
    chef2: "دومينيك كرين",
    chef3: "أوغست إسكوفير",
    chefRole: "طاهٍ",
    eventsTitle: "الفعاليات الحية وليالي الطعام",
    musicNights: "ليالي الموسيقى",
    buffetThemes: "مواضيع البوفيه",
    eventsCardTitle: "أمسيات لا تُنسى",
    eventsCardDesc: "انضم إلينا في ليالي الموسيقى الحية، والبوفيهات ذات المواضيع، وتجارب الطعام الحصرية. تجمع فعالياتنا بين الطعام الرائع، والترفيه، والأجواء الحيوية لجميع الأعمار.",
    eventsList: [
      "عروض موسيقية حية أسبوعية",
      "مواضيع بوفيه متجددة",
      "ضيوف مميزون",
      "متعة لجميع أفراد العائلة",
    ],
    eventsBtn: "شاهد الفعاليات القادمة",
    ctaTitle: "احجز طاولتك أو اطلب عبر الإنترنت!",
    ctaDesc: "اختبر الطعام الفاخر، أطباق الشيف الخاصة، والأمسيات التي لا تُنسى في فوديفاي. احجز طاولتك لليلة مميزة أو اطلب أطباقك المفضلة للتوصيل. نحن هنا لإسعاد ذوقك—كل يوم!",
    reserveBtn: "احجز طاولة",
    orderBtn: "اطلب عبر الإنترنت",
  },
  Hebrew: {
    heroTitle: "חווית אוכל גורמה בפודיפיי",
    heroDesc: "ברוכים הבאים לפודיפיי, כאן כל ארוחה היא חגיגה! תהנו ממנות שף, אווירה נעימה ומשלוח מהיר. גלו את התפריט המגוון שלנו, מבצעים מיוחדים ושירות יוצא דופן—הכל בשבילכם.",
    readMore: "קרא עוד",
    specialsTitle: "גלריית מנות השף",
    specials: ["מנה מיוחדת 1", "מנה מיוחדת 2", "מנה מיוחדת 3", "מנה מיוחדת 4"],
    heritageTitle: "מורשת ומסורת",
    heritageDesc: "המסע של המסעדה שלנו החל לפני עשרות שנים, מתוך תשוקה לטעמים אותנטיים ואירוח חם. מהתחלה צנועה ליעד קולינרי נחשב, המורשת שלנו נבנתה על מסורת, חדשנות ומחויבות למצוינות. כל מנה מספרת סיפור—על משפחה, תרבות ושמחת השיתוף.",
    heritageList: [
      "נוסד ב-1985, משרת דורות של אוהבי אוכל",
      "בבעלות וניהול משפחתי בגאווה",
      "כיבוד מתכונים מסורתיים עם טוויסט מודרני",
      "מוכר למצוינות בטעם ובשירות",
    ],
    heritageBtn: "למידע נוסף",
    professionalsTitle: "הכירו את המקצוענים שלנו",
    chef1: "גורדון רמזי",
    chef2: "דומיניק קרן",
    chef3: "אוגוסט אסקופייה",
    chefRole: "שף",
    eventsTitle: "אירועים חיים ולילות אוכל",
    musicNights: "לילות מוזיקה",
    buffetThemes: "נושאי בופה",
    eventsCardTitle: "ערבים בלתי נשכחים",
    eventsCardDesc: "הצטרפו אלינו לערבי מוזיקה חיה, בופה נושאי וחוויות אוכל ייחודיות. האירועים שלנו משלבים אוכל נהדר, בידור ואווירה תוססת לכל הגילאים.",
    eventsList: [
      "הופעות מוזיקה חיה שבועיות",
      "נושאי בופה מתחלפים",
      "אורחים מיוחדים",
      "כיף לכל המשפחה",
    ],
    eventsBtn: "צפה באירועים הקרובים",
    ctaTitle: "הזמן שולחן או הזמן אונליין!",
    ctaDesc: "חווית אוכל גורמה, מנות שף וערבים בלתי נשכחים בפודיפיי. הזמינו שולחן לערב מיוחד או הזמינו את המנות האהובות עליכם למשלוח. אנחנו כאן כדי לפנק אתכם—כל יום!",
    reserveBtn: "הזמן שולחן",
    orderBtn: "הזמן אונליין",
  },
};

export default function Home2() {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'English';
    }
    return 'English';
  });
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(localStorage.getItem('selectedLanguage') || 'English');
    };
    const handleThemeChange = () => {
      setTheme(localStorage.getItem('theme') || 'light');
    };
    window.addEventListener('language-changed', handleLanguageChange);
    window.addEventListener('storage', handleLanguageChange);
    window.addEventListener('theme-changed', handleThemeChange);
    window.addEventListener('storage', handleThemeChange);
    return () => {
      window.removeEventListener('language-changed', handleLanguageChange);
      window.removeEventListener('storage', handleLanguageChange);
      window.removeEventListener('theme-changed', handleThemeChange);
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);

  const t = translations[language] || translations.English;
  const isRTL = language === 'Arabic' || language === 'Hebrew';

  // Theme toggle handler
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      window.dispatchEvent(new Event('theme-changed'));
    }
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-30 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>

      {/* Our Impact Section */}
      <ImpactSection theme={theme} />
			
			{/* Hero Section */}
      <section className={`relative flex flex-col items-center justify-center h-screen w-full overflow-hidden ${theme === 'dark' ? 'bg-black' : ''}`}>
        {/* Background Video for Hero Only */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-110"
          src={home2hero}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay for readability */}
        <div className={`absolute inset-0 z-10 ${theme === 'dark' ? 'bg-black/70' : 'bg-black/50'}`} />
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
           <h1 className={`text-5xl md:text-6xl font-serif font-bold text-center mb-4 drop-shadow-lg ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
             {t.heroTitle}
           </h1>
           <p className={`text-lg md:text-xl text-center mb-8 max-w-2xl drop-shadow ${theme === 'dark' ? 'text-white/90' : 'text-white/90'}`}>
             {t.heroDesc}
           </p>
           <button className={`relative border border-white text-white px-8 py-3 rounded-lg text-lg font-serif flex items-center group bg-transparent hover:bg-white/10 transition ${theme === 'dark' ? '' : ''}`}>
             {t.readMore}
             <span className="ml-3 w-8 h-0.5 bg-white block group-hover:bg-red-500 transition-all"></span>
           </button>
        </div>
      </section>

      			{/* Chef’s Specials Gallery Section */}
      			<section className={`w-full py-16 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl w-full mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-10 font-serif text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t.specialsTitle}
          </h2>

          <div className="grid  sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { img: special1, title: t.specials[0] },
              { img: special2, title: t.specials[1] },
              { img: special3, title: t.specials[2] },
              { img: special4, title: t.specials[3] },
            ].map((dish, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
              >
                <img
                  src={dish.img}
                  alt={dish.title}
                  className="w-full h-80 object-cover"
                />
                <div className="p-4 text-center">
                  <span className={`text-lg font-serif ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{dish.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


                 <section className={`w-full py-20 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-black' : 'bg-red-50'}`}>
        <div className="max-w-6xl w-full mx-auto grid  md:grid-cols-2 gap-10 items-center">
          {/* Left: Heritage Image */}
          <div className="w-full h-full min-h-[340px]">
            <img
              src={heritage}
              alt="Heritage & Legacy"
              className="rounded-2xl shadow-lg w-full h-full min-h-[260px] object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="grid gap-4 h-full min-h-[340px] content-center">
            <h2 className={`text-3xl md:text-4xl font-bold font-serif ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t.heritageTitle}
            </h2>
            <p className={`text-lg max-w-lg ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              {t.heritageDesc}
            </p>
            <ul className={`space-y-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              {t.heritageList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition">
              {t.heritageBtn}
            </button>
          </div>
        </div>
      </section>


			{/* Meet Our Professionals Section */}
      <section className={`w-full py-20 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#222]' : 'bg-red-50'}`}>
  <h2 className={`text-5xl md:text-6xl font-serif font-bold text-center mb-16 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.professionalsTitle}</h2>
				<div className="max-w-6xl w-full mx-auto grid  md:grid-cols-3 gap-12">
					{/* Chef 1 */}
					<div className="flex flex-col items-center">
						<img src={chef1} alt="Gordon Ramsay" className="w-full h-96 object-cover rounded-lg shadow-lg mb-6" />
            <h3 className={`text-2xl font-serif font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.chef1}</h3>
            <span className={`text-lg font-serif mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.chefRole}</span>
					</div>
					{/* Chef 2 with social icons */}
					<div className="flex flex-col items-center relative">
						<img src={chef3} alt="Dominique Crenn" className="w-full h-96 object-cover rounded-lg shadow-lg mb-6" />
						{/* Social icons */}
						<div className="absolute left-4 top-10 flex flex-col gap-4 z-10">
							<a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-twitter"></i></a>
							<a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-facebook"></i></a>
							<a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-instagram"></i></a>
							<a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-whatsapp"></i></a>
						</div>
            <h3 className={`text-2xl font-serif font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.chef2}</h3>
            <span className={`text-lg font-serif mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.chefRole}</span>
					</div>
					{/* Chef 3 */}
					<div className="flex flex-col items-center">
						<img src={chef2} alt="Auguste Escoffier" className="w-full h-96 object-cover rounded-lg shadow-lg mb-6" />
            <h3 className={`text-2xl font-serif font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.chef3}</h3>
            <span className={`text-lg font-serif mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.chefRole}</span>
					</div>
				</div>
			</section>

			{/* Live Events & Dining Nights Section */}
      <section className={`w-full py-20 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#222]' : 'bg-red-50'}`}>
  <div className="max-w-6xl w-full mx-auto">
  <h2 className={`text-3xl md:text-4xl font-bold mb-10 font-serif text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
      {t.eventsTitle}
    </h2>

    <div className="grid  md:grid-cols-3 gap-8 items-stretch">
      {/* Left Card: Music Night */}
  <div className={`grid gap-4 rounded-lg shadow-lg p-6 text-center ${theme === 'dark' ? 'bg-[#181818]' : 'bg-white'}`}> 
        <img
          src={buffet1}
          alt="Music Night"
          className="w-full h-56 object-cover rounded"
        />
  <span className={`text-lg font-serif font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {t.musicNights}
        </span>
      </div>

      {/* Middle Card: Info */}
  <div className={`grid gap-4 rounded-lg shadow-lg p-8 border-2 text-center ${theme === 'dark' ? 'bg-[#222] border-[#333]' : 'bg-red-50 border-red-200'}`}> 
  <h3 className="text-2xl font-serif font-bold text-red-600">
          {t.eventsCardTitle}
        </h3>
  <p className={` ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}> 
          {t.eventsCardDesc}
        </p>
  <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}> 
          {t.eventsList.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition">
          {t.eventsBtn}
        </button>
      </div>

      {/* Right Card: Buffet Theme */}
  <div className={`grid gap-4 rounded-lg shadow-lg p-6 text-center ${theme === 'dark' ? 'bg-[#181818]' : 'bg-white'}`}> 
        <img
          src={buffet2}
          alt="Buffet Theme"
          className="w-full h-56 object-cover rounded"
        />
  <span className={`text-lg font-serif font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {t.buffetThemes}
        </span>
      </div>
    </div>
  </div>
</section>

			
			{/* Meet Our Professionals Section */}
			
			{/* CTA Section */}
  <section className={`w-full py-16 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#181818]' : 'bg-white'}`}>
				<div className="max-w-3xl w-full mx-auto flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-red-600">{t.ctaTitle}</h2>
          <p className={`text-lg text-center mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{t.ctaDesc}</p>
          <div className="flex flex-row sm:flex-row gap-4">
            <a href="#reserve" className="px-10 py-4 rounded-full text-white font-semibold text-lg shadow-lg transition bg-red-600 hover:bg-red-700">{t.reserveBtn}</a>
            <a href="#order" className={`px-10 py-4 rounded-full font-semibold text-lg shadow-lg transition border ${theme === 'dark' ? 'text-red-400 bg-[#181818] border-red-400 hover:bg-[#222]' : 'text-red-600 bg-white border-red-600 hover:bg-red-100'}`}>{t.orderBtn}</a>
          </div>
				</div>
			</section>
			
		</div>
	);
}