import React, { useEffect, useState } from "react";
import servicehero from "../assets/servicehero.mp4";
import { Link } from "react-router-dom";
import dealsImg from "../assets/deals.webp";
import ImpactSection from "../components/ImpactSection"; // adjust path


// Service images
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.avif";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";


const translations = {
  English: {
    heroTitle: "Our Services",
    heroDesc: "From doorstep delivery to fine dining and catering — we’ve got all your food needs covered.",
    readMore: "Read More",
    ongoingDeals: "Ongoing Deals & Offers",
    deals: [
      "Flat 20% off on first-time food delivery orders.",
      "Buy 1 Get 1 Free on selected weekend meals.",
      "Special family combo packs at discounted prices.",
      "Exclusive catering discounts for bulk party orders.",
      "Daily meal subscriptions with extra savings.",
      "Free dessert with every dine-in order above ₹999.",
      "Happy Hours: Extra 15% off on orders placed between 3–5 PM.",
    ],
    exploreCategories: "Explore Our Categories",
    exploreDesc1: "Our restaurant is designed to serve every moment of your day — from the first meal in the morning to late-night cravings. Each category has been carefully curated to match your lifestyle and preferences.",
    exploreDesc2: "Whether you’re looking for a light breakfast, a quick office lunch, a hearty dinner with family, or something sweet to end your day — we have it all. Our chefs combine fresh ingredients with authentic flavors to make every bite memorable.",
    contactTitle: "Ready to Enjoy your Delicious Meal",
    contactDesc: "Have questions about our restaurant, food delivery, or ongoing offers?  Our friendly team is here to assist you with reservations, catering bookings,  party orders, and any special meal requests.  Reach out to us anytime — we’d love to serve you!",
    letsDive: "Lets Dive In",
    categories: [
      { title: "Breakfast Specials", desc: "Start your day with fresh, wholesome, and energy-packed meals." },
      { title: "Lunch Combos", desc: "Balanced meals with the perfect mix of taste and nutrition." },
      { title: "Dinner Feasts", desc: "Indulge in hearty dishes made to bring families together." },
      { title: "Desserts & Drinks", desc: "Sweet treats and refreshing beverages to complete your meal." },
    ],
    services: [
      {
        title: "Food Delivery",
        desc: "Quick and fresh meals delivered right to your doorstep with guaranteed hygiene and taste. We partner with top-rated restaurants and trusted chefs to ensure every meal is delicious, healthy, and made from the finest ingredients. Our advanced delivery system ensures food arrives hot and fresh, preserving its flavor. Whether it’s breakfast, lunch, dinner, or late-night cravings, we’ve got you covered. Fast, reliable, and affordable—our food delivery makes your life easier and tastier every day.",
      },
      {
        title: "Catering Services",
        desc: "Delicious catering solutions designed for weddings, parties, and corporate events of any size. Our catering team curates menus tailored to your occasion, offering everything from light snacks to lavish multi-course meals. We focus on presentation, taste, and customer satisfaction to leave a lasting impression on your guests. Every dish is prepared with love, hygiene, and creativity by our expert chefs. From intimate gatherings to grand celebrations, we handle all catering needs with care and excellence.",
      },
      {
        title: "Dine-In Experience",
        desc: "Step into our cozy restaurant and enjoy a fine dining experience like no other. We combine elegant interiors with a welcoming atmosphere, making it perfect for families, friends, or business meetings. Our chefs prepare signature dishes crafted from fresh, seasonal ingredients to delight your taste buds. Every table is served with attention, ensuring comfort and satisfaction from start to finish. Whether you want a casual meal or a special occasion dinner, our dine-in experience has something for everyone.",
      },
      {
        title: "Party Orders & Bulk Meals",
        desc: "Affordable and customizable bulk meals tailored for parties, celebrations, and corporate gatherings. Our kitchen is equipped to handle large orders without compromising on taste or quality. Choose from a wide range of menus that include snacks, main courses, and desserts to please every guest. We offer flexible packages that fit within your budget while ensuring premium quality food. With timely delivery and delicious flavors, our bulk meals guarantee a memorable experience for all your guests.",
      },
      {
        title: "Subscription Meals",
        desc: "Healthy, tasty, and affordable meal subscription plans designed for your everyday lifestyle. Our subscription offers a variety of choices including vegetarian, high-protein, and balanced diet meals. Each meal is freshly prepared and portion-controlled to support your health goals. We make eating well convenient by delivering nutritious meals directly to your doorstep on time. With flexible plans and no compromise on taste, our subscription service helps you maintain a healthy routine effortlessly.",
      },
      {
        title: "Takeaway / Pickup",
        desc: "Convenient and quick takeaway options for customers who prefer to grab their meals on the go. Order ahead through our website or app and skip the waiting line—your food will be packed and ready. Our packaging ensures freshness, heat retention, and spill-free travel so you can enjoy your meal anywhere. Whether you’re rushing to work, heading home, or planning a quick outing, our takeaway service fits your busy schedule. Fast, hassle-free, and always delicious.",
      },
    ],
  },
  Arabic: {
    heroTitle: "خدماتنا",
    heroDesc: "من التوصيل إلى باب المنزل إلى تناول الطعام الفاخر وخدمات التموين — لدينا كل احتياجاتك الغذائية.",
    readMore: "اقرأ المزيد",
    ongoingDeals: "العروض والخصومات الجارية",
    deals: [
      "خصم 20% على أول طلب توصيل.",
      "اشترِ واحدة واحصل على الأخرى مجانًا في وجبات نهاية الأسبوع المختارة.",
      "عروض عائلية خاصة بأسعار مخفضة.",
      "خصومات حصرية على التموين للطلبات الكبيرة.",
      "اشتراكات وجبات يومية مع توفير إضافي.",
      "حلوى مجانية مع كل طلب تناول طعام بقيمة أكثر من 999 روبية.",
      "ساعات السعادة: خصم إضافي 15% على الطلبات بين 3-5 مساءً.",
    ],
    exploreCategories: "استكشف فئاتنا",
    exploreDesc1: "مطعمنا مصمم لخدمة كل لحظة من يومك — من أول وجبة في الصباح إلى الرغبة في تناول الطعام ليلاً. تم اختيار كل فئة بعناية لتناسب نمط حياتك وتفضيلاتك.",
    exploreDesc2: "سواء كنت تبحث عن إفطار خفيف، أو غداء سريع في المكتب، أو عشاء عائلي دسم، أو شيئًا حلوًا لإنهاء يومك — لدينا كل شيء. يجمع طهاتنا بين المكونات الطازجة والنكهات الأصيلة لجعل كل لقمة لا تُنسى.",
    contactTitle: "جاهز للاستمتاع بوجبتك اللذيذة",
    contactDesc: "هل لديك أسئلة حول مطعمنا أو توصيل الطعام أو العروض الجارية؟ فريقنا الودود هنا لمساعدتك في الحجوزات، وحجوزات التموين، وطلبات الحفلات، وأي طلبات وجبات خاصة. تواصل معنا في أي وقت — يسعدنا خدمتك!",
    letsDive: "لنبدأ الآن",
    categories: [
      { title: "عروض الإفطار", desc: "ابدأ يومك بوجبات طازجة ومغذية ومليئة بالطاقة." },
      { title: "وجبات الغداء", desc: "وجبات متوازنة بمزيج مثالي من الطعم والتغذية." },
      { title: "ولائم العشاء", desc: "استمتع بأطباق شهية تجمع العائلات معًا." },
      { title: "الحلويات والمشروبات", desc: "حلويات لذيذة ومشروبات منعشة تكمل وجبتك." },
    ],
    services: [
      {
        title: "توصيل الطعام",
        desc: "وجبات سريعة وطازجة تُسلم إلى باب منزلك مع ضمان النظافة والطعم. نتعاون مع أفضل المطاعم والطهاة الموثوقين لضمان أن كل وجبة لذيذة وصحية ومعدة من أفضل المكونات. يضمن نظام التوصيل المتقدم لدينا وصول الطعام ساخنًا وطازجًا، مع الحفاظ على نكهته. سواء كان الإفطار أو الغداء أو العشاء أو الرغبة في تناول الطعام ليلاً، نحن هنا من أجلك. سريع وموثوق وبأسعار معقولة—توصيل الطعام لدينا يجعل حياتك أسهل وألذ كل يوم.",
      },
      {
        title: "خدمات التموين",
        desc: "حلول تموين لذيذة مصممة لحفلات الزفاف والمناسبات والحفلات والشركات من أي حجم. يقوم فريق التموين لدينا بإعداد قوائم طعام مخصصة لمناسبتك، ويقدم كل شيء من الوجبات الخفيفة إلى الوجبات الكاملة. نركز على العرض والطعم ورضا العملاء لترك انطباع دائم على ضيوفك. كل طبق يُعد بحب ونظافة وإبداع من قبل طهاتنا الخبراء. من التجمعات الصغيرة إلى الاحتفالات الكبرى، نتعامل مع جميع احتياجات التموين بعناية وتميز.",
      },
      {
        title: "تجربة تناول الطعام",
        desc: "ادخل إلى مطعمنا المريح واستمتع بتجربة طعام فاخرة لا مثيل لها. نجمع بين الديكورات الأنيقة والأجواء الترحيبية، مما يجعله مثاليًا للعائلات والأصدقاء أو الاجتماعات. يعد طهاتنا أطباقًا مميزة من مكونات موسمية طازجة لإرضاء ذوقك. يتم تقديم كل طاولة بعناية لضمان الراحة والرضا من البداية إلى النهاية. سواء كنت ترغب في وجبة عادية أو عشاء خاص، لدينا ما يناسب الجميع.",
      },
      {
        title: "طلبات الحفلات والوجبات الكبيرة",
        desc: "وجبات كبيرة مخصصة وبأسعار معقولة للحفلات والاحتفالات والتجمعات. مطبخنا مجهز للتعامل مع الطلبات الكبيرة دون المساس بالطعم أو الجودة. اختر من بين مجموعة واسعة من القوائم التي تشمل الوجبات الخفيفة والأطباق الرئيسية والحلويات لإرضاء جميع الضيوف. نقدم باقات مرنة تناسب ميزانيتك مع ضمان جودة الطعام. مع التوصيل في الوقت المناسب والنكهات اللذيذة، تضمن وجباتنا الكبيرة تجربة لا تُنسى لجميع ضيوفك.",
      },
      {
        title: "وجبات الاشتراك",
        desc: "خطط اشتراك وجبات صحية ولذيذة وبأسعار معقولة مصممة لنمط حياتك اليومي. يقدم اشتراكنا مجموعة متنوعة من الخيارات بما في ذلك الوجبات النباتية والبروتين العالي والوجبات المتوازنة. كل وجبة تُعد طازجة وبكميات مضبوطة لدعم أهدافك الصحية. نجعل تناول الطعام الصحي سهلاً من خلال توصيل الوجبات المغذية مباشرة إلى باب منزلك في الوقت المحدد. مع خطط مرنة وبدون تنازل عن الطعم، تساعدك خدمتنا على الحفاظ على روتين صحي بسهولة.",
      },
      {
        title: "الوجبات الجاهزة / الاستلام",
        desc: "خيارات وجبات جاهزة وسريعة للعملاء الذين يفضلون تناول وجباتهم أثناء التنقل. اطلب مسبقًا من خلال موقعنا أو التطبيق وتجنب الانتظار—سيكون طعامك جاهزًا ومعبأ. تضمن عبواتنا الحفاظ على الطعم والحرارة وعدم الانسكاب حتى تستمتع بوجبتك في أي مكان. سواء كنت في طريقك للعمل أو المنزل أو تخطط لنزهة سريعة، تناسب خدمتنا جدولك المزدحم. سريع وسهل ودائمًا لذيذ.",
      },
    ],
  },
  Hebrew: {
    heroTitle: "השירותים שלנו",
    heroDesc: "משלוח עד הבית, מסעדה יוקרתית וקייטרינג — כל הצרכים הקולינריים שלך במקום אחד.",
    readMore: "קרא עוד",
    ongoingDeals: "מבצעים והנחות שוטפות",
    deals: [
      "20% הנחה על הזמנת משלוח ראשונה.",
  "קנה אחד קבל אחד חינם בארוחות סופ\"ש נבחרות.",
      "חבילות משפחתיות מיוחדות במחירים מוזלים.",
      "הנחות קייטרינג בלעדיות להזמנות גדולות.",
      "מנויי ארוחות יומיות עם חיסכון נוסף.",
      "קינוח חינם בכל הזמנת מסעדה מעל 999 רופי.",
  "Happy Hours: 15% הנחה נוספת על הזמנות בין 3–5 אחה\"צ.",
    ],
    exploreCategories: "גלו את הקטגוריות שלנו",
    exploreDesc1: "המסעדה שלנו נועדה לשרת כל רגע ביום שלך — מהארוחה הראשונה בבוקר ועד החשק הלילי. כל קטגוריה נבחרה בקפידה כדי להתאים לאורח החיים וההעדפות שלך.",
    exploreDesc2: "בין אם אתם מחפשים ארוחת בוקר קלה, ארוחת צהריים מהירה, ארוחת ערב משפחתית עשירה או משהו מתוק לסיום היום — יש לנו הכל. השפים שלנו משלבים מרכיבים טריים עם טעמים אותנטיים כדי להפוך כל ביס לבלתי נשכח.",
    contactTitle: "מוכנים ליהנות מהארוחה הטעימה שלכם",
    contactDesc: "יש לכם שאלות על המסעדה, משלוחים או מבצעים? הצוות הידידותי שלנו כאן לעזור לכם בהזמנות, קייטרינג, הזמנות לאירועים וכל בקשה מיוחדת. פנו אלינו בכל עת — נשמח לשרת אתכם!",
    letsDive: "בואו נתחיל",
    categories: [
      { title: "ארוחות בוקר מיוחדות", desc: "התחילו את היום עם מנות טריות, מזינות ומלאות אנרגיה." },
      { title: "קומבינציות צהריים", desc: "ארוחות מאוזנות עם שילוב מושלם של טעם ותזונה." },
      { title: "סעודות ערב", desc: "תיהנו ממנות עשירות שמקרבות משפחות יחד." },
      { title: "קינוחים ומשקאות", desc: "מתוקים ומשקאות מרעננים להשלמת הארוחה." },
    ],
    services: [
      {
        title: "משלוח אוכל",
        desc: "מנות מהירות וטריות עד הבית עם הבטחת היגיינה וטעם. אנו משתפים פעולה עם מסעדות מובילות ושפים אמינים כדי להבטיח שכל מנה טעימה, בריאה ומוכנה מהמרכיבים הטובים ביותר. מערכת המשלוחים המתקדמת שלנו מבטיחה שהאוכל יגיע חם וטרי, תוך שמירה על טעמו. בין אם זה בוקר, צהריים, ערב או חשק לילי, אנחנו כאן בשבילכם. מהיר, אמין ומשתלם—המשלוחים שלנו הופכים את החיים שלכם לקלים וטעימים יותר כל יום.",
      },
      {
        title: "שירותי קייטרינג",
        desc: "פתרונות קייטרינג טעימים לאירועים, חתונות וחברות בכל גודל. צוות הקייטרינג שלנו בונה תפריטים מותאמים אישית, ומציע הכל מחטיפים קלים ועד ארוחות מלאות. אנו שמים דגש על הגשה, טעם ושביעות רצון הלקוח כדי להשאיר רושם מתמשך. כל מנה מוכנה באהבה, היגיינה ויצירתיות על ידי השפים המומחים שלנו. מהתכנסויות קטנות ועד חגיגות גדולות, אנו מטפלים בכל צרכי הקייטרינג במקצועיות.",
      },
      {
        title: "חווית מסעדה",
        desc: "היכנסו למסעדה הנעימה שלנו ותיהנו מחוויית אוכל יוקרתית שאין כמותה. אנו משלבים עיצוב אלגנטי עם אווירה מזמינה, מושלם למשפחות, חברים או פגישות עסקיות. השפים שלנו מכינים מנות ייחודיות ממרכיבים עונתיים טריים כדי לפנק את החיך שלכם. כל שולחן מקבל תשומת לב אישית, להבטחת נוחות ושביעות רצון מההתחלה ועד הסוף. בין אם תרצו ארוחה רגילה או ערב מיוחד, יש לנו משהו לכולם.",
      },
      {
        title: "הזמנות לאירועים וארוחות בכמות גדולה",
        desc: "ארוחות בכמות גדולה במחיר משתלם ומותאם לאירועים, חגיגות וחברות. המטבח שלנו ערוך לטפל בהזמנות גדולות מבלי להתפשר על טעם או איכות. בחרו מתוך מגוון תפריטים הכוללים חטיפים, עיקריות וקינוחים לכל אורח. אנו מציעים חבילות גמישות המתאימות לתקציבכם תוך שמירה על איכות גבוהה. עם משלוח בזמן וטעמים נהדרים, הארוחות שלנו מבטיחות חוויה בלתי נשכחת לכל האורחים.",
      },
      {
        title: "ארוחות מנוי",
        desc: "תוכניות מנוי לארוחות בריאות, טעימות ומשתלמות המותאמות לאורח החיים שלכם. המנוי שלנו מציע מגוון אפשרויות כולל מנות צמחוניות, עתירות חלבון ומאוזנות. כל מנה מוכנה טרייה ובכמות מדודה כדי לתמוך ביעדי הבריאות שלכם. אנו הופכים את האכילה הבריאה לנוחה עם משלוח ישיר עד הבית בזמן. עם תוכניות גמישות וללא פשרות בטעם, השירות שלנו עוזר לכם לשמור על שגרה בריאה בקלות.",
      },
      {
        title: "טייק אווי / איסוף",
        desc: "אפשרויות טייק אווי מהירות ונוחות ללקוחות שמעדיפים לקחת את האוכל לדרך. הזמינו מראש באתר או באפליקציה ודלגו על ההמתנה—האוכל שלכם יהיה מוכן וארוז. האריזות שלנו שומרות על טריות, חום ומניעת נזילות כדי שתיהנו מהארוחה בכל מקום. בין אם אתם ממהרים לעבודה, בדרך הביתה או מתכננים יציאה מהירה, השירות שלנו מתאים ללוח הזמנים שלכם. מהיר, קל ותמיד טעים.",
      },
    ],
  },
};





const serviceImgs = [img1, img2, img3, img4, img5, img6];
const servicePaths = [
  "/Food-Delivery",
  "/Catering-Services",
  "/Dine-In-Experience",
  "/PartyOrders-BulkMeals",
  "/Subscription-Meals",
  "/Takeaway-Pickup",
];



const ServicesPage = () => {
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
    <div className={`w-full min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-30 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={servicehero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/70' : 'bg-black bg-opacity-50'}`}></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.heroTitle}</h1>
          <p className="text-lg md:text-xl max-w-2xl">{t.heroDesc}</p>
        </div>
      </section>

      {/* Services Section */}
      <section className={`max-w-6xl mx-auto py-16 px-4 space-y-16 ${theme === 'dark' ? 'bg-[#181818]' : ''}`}>
        {t.services.map((service, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className={`${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
              <img
                src={serviceImgs[index]}
                alt={service.title}
                className="w-full h-[350px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            {/* Content */}
            <div className={`${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                {service.title}
              </h3>
              <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{service.desc}</p>
              <Link
                to={servicePaths[index]}
                className="inline-block mt-4 px-5 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition"
              >
                {t.readMore}
              </Link>
            </div>
          </div>
        ))}
      </section>
  <ImpactSection theme={theme} />

      {/* Ongoing Deals Section */}
      <section className={`max-w-6xl mx-auto py-16 px-4 ${theme === 'dark' ? 'bg-black' : ''}`}>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div>
            <img
              src={dealsImg}
              alt="Ongoing Deals"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>
          {/* Right: Content */}
          <div>
            <h2 className="text-3xl font-bold text-red-600 mb-4">{t.ongoingDeals}</h2>
            <ul className={`list-disc list-inside text-lg space-y-3 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              {t.deals.map((deal, i) => <li key={i}>{deal}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Explore Categories Section */}
      <section className={`max-w-full mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-center ${theme === 'dark' ? 'bg-[#181818]' : 'bg-red-50'}`}>
        {/* Left Info */}
        <div>
          <h2 className="text-3xl font-bold text-red-600 mb-4">{t.exploreCategories}</h2>
          <p className={`text-lg mb-4 leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{t.exploreDesc1}</p>
          <p className={`text-lg mb-4 leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{t.exploreDesc2}</p>
        </div>
        {/* Right Cards */}
        <div className="grid grid-cols-2 gap-6">
          {t.categories.map((cat, index) => (
            <div
              key={index}
              className={`border shadow-md rounded-xl p-6 text-center ${theme === 'dark' ? 'bg-black border-gray-700' : 'bg-white border-gray-200'}`}
            >
              <h3 className="text-lg font-semibold text-red-500 mb-2">
                {cat.title}
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-16 px-4 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-4">{t.contactTitle}</h2>
          <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{t.contactDesc}</p>
          <Link
            to="/contactus"
            className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition"
          >
            {t.letsDive}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
