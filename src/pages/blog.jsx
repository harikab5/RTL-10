import React from "react";
// Translation object for Blog page
const translations = {
  en: {
    heroTitle: "Explore Our Blogs",
    heroDesc: "Stay updated with the latest insights, trends, and knowledge in AI, Web Development, Data Science, and more. Learn and grow with us!",
    featured: "Featured Articles",
    categories: "Explore by Categories",
    categoriesDesc1: "Our menu is thoughtfully categorized to help you easily find dishes that match your cravings—whether it's Starters, Main Course, Desserts, or refreshing beverages delivered to your doorstep.",
    categoriesDesc2: "Browse through our categories and discover meals crafted to satisfy every taste. Whether you’re looking for a quick bite, a family dinner, or a sweet treat to end your day, our restaurant offers freshly prepared food, speedy delivery, and flavors you’ll love. Enjoy convenience, taste, and quality—all in one place.",
    serviceComparison: "Service Comparison",
    myths: "Myths & Facts",
    mythItems: [
      { myth: "Online food delivery always takes too long.", fact: "Our delivery partners ensure your food arrives hot and fresh, usually within 30–40 minutes." },
      { myth: "Restaurant food isn’t as fresh as homemade meals.", fact: "We use fresh, high-quality ingredients daily to prepare every dish with care." },
      { myth: "Online delivery is always expensive.", fact: "With combo deals, discounts, and free delivery offers, you can enjoy great meals at affordable prices." },
      { myth: "Ordering food online is unsafe.", fact: "Our platform ensures safe packaging, contactless delivery, and hygienic kitchen practices." },
      { myth: "You can’t customize your order when ordering online.", fact: "Our menu lets you add special instructions, choose spice levels, and request add-ons with ease." },
      { myth: "Delivery food is unhealthy.", fact: "We offer balanced meals, healthy options, and freshly prepared dishes to suit your lifestyle." },
    ],
    tipsTitle: "Cooking Tips 🧑‍🍳",
  },
  ar: {
    heroTitle: "استكشف مدوناتنا",
    heroDesc: "ابقَ على اطلاع بآخر الرؤى والاتجاهات والمعرفة في الذكاء الاصطناعي وتطوير الويب وعلوم البيانات والمزيد. تعلم وانمو معنا!",
    featured: "مقالات مميزة",
    categories: "استكشف حسب الفئات",
    categoriesDesc1: "تم تصنيف قائمتنا بعناية لمساعدتك في العثور بسهولة على الأطباق التي تناسب رغباتك — سواء كانت مقبلات أو أطباق رئيسية أو حلويات أو مشروبات منعشة تُسلم إلى بابك.",
    categoriesDesc2: "تصفح فئاتنا واكتشف وجبات مصممة لإرضاء كل الأذواق. سواء كنت تبحث عن وجبة سريعة، عشاء عائلي، أو حلوى لختام يومك، يقدم مطعمنا طعامًا طازجًا، وتوصيلًا سريعًا، ونكهات ستعجبك. استمتع بالراحة والطعم والجودة — كل ذلك في مكان واحد.",
    serviceComparison: "مقارنة الخدمات",
    myths: "خرافات وحقائق",
    mythItems: [
      { myth: "توصيل الطعام عبر الإنترنت يستغرق وقتًا طويلاً دائمًا.", fact: "شركاؤنا في التوصيل يضمنون وصول طعامك ساخنًا وطازجًا عادةً خلال 30-40 دقيقة." },
      { myth: "طعام المطاعم ليس طازجًا مثل الطعام المنزلي.", fact: "نستخدم مكونات طازجة وعالية الجودة يوميًا لتحضير كل طبق بعناية." },
      { myth: "التوصيل عبر الإنترنت دائمًا مكلف.", fact: "مع العروض المجمعة والخصومات وعروض التوصيل المجاني، يمكنك الاستمتاع بوجبات رائعة بأسعار معقولة." },
      { myth: "طلب الطعام عبر الإنترنت غير آمن.", fact: "يضمن منصتنا تغليفًا آمنًا وتوصيلًا بدون تلامس وممارسات مطبخ صحية." },
      { myth: "لا يمكنك تخصيص طلبك عند الطلب عبر الإنترنت.", fact: "تتيح لك قائمتنا إضافة تعليمات خاصة، واختيار مستوى التوابل، وطلب الإضافات بسهولة." },
      { myth: "طعام التوصيل غير صحي.", fact: "نقدم وجبات متوازنة وخيارات صحية وأطباق طازجة تناسب نمط حياتك." },
    ],
    tipsTitle: "نصائح الطبخ 🧑‍🍳",
  },
  he: {
    heroTitle: "גלה את הבלוגים שלנו",
    heroDesc: "הישאר מעודכן עם התובנות, הטרנדים והידע האחרונים בבינה מלאכותית, פיתוח אתרים, מדעי הנתונים ועוד. למד והתפתח איתנו!",
    featured: "מאמרים נבחרים",
    categories: "חקור לפי קטגוריות",
    categoriesDesc1: "התפריט שלנו מחולק בקפידה כדי לעזור לך למצוא בקלות מנות שמתאימות לחשקים שלך — בין אם זה מנות ראשונות, עיקריות, קינוחים או משקאות מרעננים עד הבית.",
    categoriesDesc2: "עיין בקטגוריות שלנו וגלה ארוחות שמותאמות לכל טעם. בין אם אתה מחפש נשנוש מהיר, ארוחת ערב משפחתית או קינוח לסיום היום, המסעדה שלנו מציעה אוכל טרי, משלוח מהיר וטעמים שתאהב. תהנה מנוחות, טעם ואיכות — הכל במקום אחד.",
    serviceComparison: "השוואת שירותים",
    myths: "מיתוסים ועובדות",
    mythItems: [
      { myth: "משלוח אוכל אונליין תמיד לוקח הרבה זמן.", fact: "השליחים שלנו דואגים שהאוכל יגיע חם וטרי, בדרך כלל תוך 30–40 דקות." },
      { myth: "אוכל ממסעדה לא טרי כמו אוכל ביתי.", fact: "אנחנו משתמשים במרכיבים טריים ואיכותיים מדי יום כדי להכין כל מנה בקפידה." },
      { myth: "משלוח אונליין תמיד יקר.", fact: "עם דילים, הנחות והצעות משלוח חינם, תוכל ליהנות מארוחות נהדרות במחירים משתלמים." },
      { myth: "הזמנת אוכל אונליין אינה בטוחה.", fact: "הפלטפורמה שלנו מבטיחה אריזה בטוחה, משלוח ללא מגע ונהלי מטבח היגייניים." },
      { myth: "אי אפשר להתאים אישית הזמנה אונליין.", fact: "התפריט שלנו מאפשר להוסיף הוראות מיוחדות, לבחור רמת חריפות ולבקש תוספות בקלות." },
      { myth: "אוכל משלוחים לא בריא.", fact: "אנחנו מציעים מנות מאוזנות, אפשרויות בריאות ואוכל טרי שמותאם לאורח החיים שלך." },
    ],
    tipsTitle: "טיפים לבישול 🧑‍🍳",
  },
};
import blogHero from "../assets/blog.mp4";
import { Brain, Code, BarChart3 } from "lucide-react";
import feature1 from "../assets/feature1.webp"; // re
import feature2 from "../assets/feature2.jpg"; // replace with your delivery-related image
import feature3 from "../assets/feature3.png"; // replace with your cuisine variety image
import { Link } from "react-router-dom";
// Categories, features, services, and tips will be translated below

const categories = [
  { key: 'starters' },
  { key: 'main' },
  { key: 'desserts' },
  { key: 'beverages' },
];

const categoryTranslations = {
  en: {
    starters: {
      name: "Starters",
      desc: "Tasty appetizers and light bites to kickstart your meal.",
    },
    main: {
      name: "Main Course",
      desc: "Deliciously crafted dishes to satisfy every craving.",
    },
    desserts: {
      name: "Desserts",
      desc: "Sweet treats and indulgent delights to end on a high note.",
    },
    beverages: {
      name: "Beverages",
      desc: "Refreshing drinks, juices, and shakes to complement your meal.",
    },
  },
  ar: {
    starters: {
      name: "المقبلات",
      desc: "مقبلات خفيفة ولذيذة لبدء وجبتك.",
    },
    main: {
      name: "الطبق الرئيسي",
      desc: "أطباق شهية مُعدة بعناية لتلبي جميع رغباتك.",
    },
    desserts: {
      name: "الحلويات",
      desc: "حلويات لذيذة ومميزة لإنهاء وجبتك بأفضل طريقة.",
    },
    beverages: {
      name: "المشروبات",
      desc: "عصائر ومشروبات منعشة تكمل وجبتك.",
    },
  },
  he: {
    starters: {
      name: "מנות פתיחה",
      desc: "מנות ראשונות קלות וטעימות להתחלת הארוחה שלך.",
    },
    main: {
      name: "עיקרית",
      desc: "מנות עיקריות טעימות שמספקות כל חשק.",
    },
    desserts: {
      name: "קינוחים",
      desc: "קינוחים ומתוקים מפנקים לסיום מושלם.",
    },
    beverages: {
      name: "משקאות",
      desc: "משקאות, מיצים ושייקים מרעננים להשלמת הארוחה.",
    },
  },
};

const cookingTips = [
  { key: 0 }, { key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }, { key: 7 }
];

const cookingTipsTranslations = {
  en: [
    "Always soak onions in cold water for 10 minutes before using in salads – it removes bitterness and adds crunch.",
    "Marinate meat at least 30 minutes before cooking – it makes it juicier and full of flavor.",
    "Use leftover rice to make quick fried rice – it cooks better and doesn’t stick together.",
    "Add a pinch of salt while boiling pasta – it enhances the flavor and prevents stickiness.",
    "Toast spices lightly before grinding or cooking – it brings out deeper flavors and aroma.",
    "When frying, don’t overcrowd the pan – it lowers oil temperature and makes food soggy.",
    "Use lemon juice to balance overly salty or spicy dishes – it adds freshness too.",
    "Let cooked meat rest for 5 minutes before cutting – it locks in juices for better taste.",
  ],
  ar: [
    "انقع البصل في ماء بارد لمدة 10 دقائق قبل استخدامه في السلطات – يزيل المرارة ويضيف قرمشة.",
    "انقع اللحم لمدة 30 دقيقة على الأقل قبل الطهي – يجعله أكثر طراوة وغنًى بالنكهة.",
    "استخدم الأرز المتبقي لتحضير أرز مقلي سريع – يطهى بشكل أفضل ولا يلتصق.",
    "أضف رشة ملح أثناء سلق المعكرونة – يعزز النكهة ويمنع الالتصاق.",
    "حمص التوابل قليلاً قبل الطحن أو الطهي – يبرز النكهات والروائح العميقة.",
    "عند القلي، لا تملأ المقلاة كثيرًا – يقلل من حرارة الزيت ويجعل الطعام طريًا.",
    "استخدم عصير الليمون لموازنة الأطباق المالحة أو الحارة – يضيف انتعاشًا أيضًا.",
    "اترك اللحم المطبوخ يرتاح 5 دقائق قبل التقطيع – يحافظ على العصارة والطعم.",
  ],
  he: [
    "יש להשרות בצל במים קרים 10 דקות לפני שמוסיפים לסלט – זה מסיר מרירות ומוסיף קראנץ'.",
    "יש להשרות בשר לפחות 30 דקות לפני הבישול – זה עושה אותו עסיסי ומלא טעם.",
    "השתמשו באורז שנשאר להכנת אורז מוקפץ מהיר – הוא מתבשל טוב יותר ולא נדבק.",
    "הוסיפו קמצוץ מלח בעת בישול פסטה – זה משפר את הטעם ומונע הידבקות.",
    "קלו קלות תבלינים לפני טחינה או בישול – זה מוציא טעמים וארומה עמוקים.",
    "בעת טיגון, אל תעמיסו את המחבת – זה מוריד את טמפרטורת השמן והאוכל יוצא סמרטוטי.",
    "השתמשו במיץ לימון לאיזון תבשילים מלוחים או חריפים מדי – זה מוסיף רעננות.",
    "תנו לבשר לנוח 5 דקות אחרי הבישול לפני שחותכים – זה שומר על העסיסיות והטעם.",
  ],
};



const features = [
  {
    key: 'ingredients',
    image: feature1,
    link: "/blog/1",
  },
  {
    key: 'delivery',
    image: feature2,
    link: "/blog/2",
  },
  {
    key: 'variety',
    image: feature3,
    link: "/blog/3",
  },
];

const featureTranslations = {
  en: {
    ingredients: {
      title: "Fresh & Quality Ingredients",
      description: "We use only the freshest, handpicked ingredients to create delicious meals. Every dish is crafted with care to ensure authentic taste and balanced nutrition.",
    },
    delivery: {
      title: "Fast & Reliable Delivery",
      description: "Get your food delivered hot, fresh, and right on time. With smart tracking, you’ll always know exactly when your meal arrives.",
    },
    variety: {
      title: "Wide Variety of Cuisines",
      description: "From local favorites to global flavors, our menu has something for everyone. Enjoy a wide range of dishes made fresh to satisfy every craving.",
    },
    readMore: "Read More →",
  },
  ar: {
    ingredients: {
      title: "مكونات طازجة وعالية الجودة",
      description: "نستخدم فقط أجود وأطزج المكونات المختارة يدويًا لإعداد وجبات لذيذة. كل طبق يُحضّر بعناية لضمان الطعم الأصيل والتغذية المتوازنة.",
    },
    delivery: {
      title: "توصيل سريع وموثوق",
      description: "احصل على طعامك ساخنًا وطازجًا وفي الوقت المحدد. مع التتبع الذكي، ستعرف دائمًا متى يصل طلبك بالضبط.",
    },
    variety: {
      title: "تنوع واسع من المطابخ",
      description: "من الأطباق المحلية إلى النكهات العالمية، لدينا ما يناسب الجميع. استمتع بتشكيلة واسعة من الأطباق الطازجة لتلبي جميع رغباتك.",
    },
    readMore: "اقرأ المزيد ←",
  },
  he: {
    ingredients: {
      title: "מרכיבים טריים ואיכותיים",
      description: "אנחנו משתמשים רק במרכיבים הטריים והאיכותיים ביותר כדי להכין מנות טעימות. כל מנה מוכנה בקפידה להבטחת טעם אותנטי ותזונה מאוזנת.",
    },
    delivery: {
      title: "משלוח מהיר ואמין",
      description: "קבל את האוכל שלך חם, טרי ובזמן. עם מעקב חכם, תדע תמיד מתי ההזמנה שלך מגיעה.",
    },
    variety: {
      title: "מגוון רחב של מטבחים",
      description: "מהמועדפים המקומיים ועד טעמים עולמיים, יש לנו משהו לכל אחד. תיהנה ממגוון רחב של מנות טריות שיספקו כל חשק.",
    },
    readMore: "קרא עוד ←",
  },
};



const services = [
  { key: 'takeaway' },
  { key: 'subscription' },
  { key: 'party' },
  { key: 'dinein' },
  { key: 'catering' },
  { key: 'delivery' },
];

const serviceTranslations = {
  en: {
    takeaway: {
      name: "Takeaway / Pickup",
      features: [
        "Quick self-pickup service",
        "No waiting time",
        "Freshly packed meals",
        "Special discounts for takeaway",
      ],
    },
    subscription: {
      name: "Subscription Meals",
      features: [
        "Daily & weekly meal plans",
        "Healthy & diet-friendly options",
        "Flexible subscriptions",
        "Freshly prepared every day",
      ],
    },
    party: {
      name: "Party Orders & Bulk Meals",
      features: [
        "Large quantity food packages",
        "Customizable menu options",
        "Affordable bulk pricing",
        "Timely preparation & delivery",
      ],
    },
    dinein: {
      name: "Dine-In Experience",
      features: [
        "Comfortable family-friendly seating",
        "Chef’s special signature dishes",
        "Hygienic & cozy ambience",
        "Attentive customer service",
      ],
    },
    catering: {
      name: "Catering Services",
      features: [
        "Customized menus for events",
        "Professional on-site service",
        "Bulk food preparation",
        "Perfect for weddings & corporate events",
      ],
    },
    delivery: {
      name: "Food Delivery",
      features: [
        "Fast & hassle-free delivery",
        "Real-time order tracking",
        "Multiple secure payment options",
        "Exclusive online deals",
      ],
    },
    features: "Features",
  },
  ar: {
    takeaway: {
      name: "الاستلام / التيك أواي",
      features: [
        "خدمة استلام ذاتي سريعة",
        "بدون انتظار",
        "وجبات معبأة طازجة",
        "خصومات خاصة للتيك أواي",
      ],
    },
    subscription: {
      name: "وجبات الاشتراك",
      features: [
        "خطط وجبات يومية وأسبوعية",
        "خيارات صحية وملائمة للحمية",
        "اشتراكات مرنة",
        "تحضير طازج يوميًا",
      ],
    },
    party: {
      name: "طلبات الحفلات والوجبات بالجملة",
      features: [
        "حزم طعام بكميات كبيرة",
        "خيارات قائمة مخصصة",
        "أسعار جملة مناسبة",
        "تحضير وتوصيل في الوقت المحدد",
      ],
    },
    dinein: {
      name: "تجربة تناول الطعام بالمطعم",
      features: [
        "مقاعد عائلية مريحة",
        "أطباق الشيف المميزة",
        "أجواء صحية ومريحة",
        "خدمة عملاء مميزة",
      ],
    },
    catering: {
      name: "خدمات التموين",
      features: [
        "قوائم مخصصة للمناسبات",
        "خدمة احترافية في الموقع",
        "تحضير طعام بالجملة",
        "مثالية للأعراس والفعاليات",
      ],
    },
    delivery: {
      name: "توصيل الطعام",
      features: [
        "توصيل سريع وسهل",
        "تتبع الطلب لحظيًا",
        "خيارات دفع آمنة متعددة",
        "عروض حصرية عبر الإنترنت",
      ],
    },
    features: "المميزات",
  },
  he: {
    takeaway: {
      name: "איסוף עצמי / טייק אווי",
      features: [
        "שירות איסוף עצמי מהיר",
        "ללא זמן המתנה",
        "ארוחות ארוזות טריות",
        "הנחות מיוחדות לטייק אווי",
      ],
    },
    subscription: {
      name: "ארוחות מנוי",
      features: [
        "תוכניות ארוחות יומיות ושבועיות",
        "אפשרויות בריאות ודיאטטיות",
        "מנויים גמישים",
        "מוכן טרי כל יום",
      ],
    },
    party: {
      name: "הזמנות למסיבות וארוחות בכמויות",
      features: [
        "חבילות אוכל בכמויות גדולות",
        "אפשרויות תפריט מותאמות",
        "מחירי סיטונאות משתלמים",
        "הכנה ואספקה בזמן",
      ],
    },
    dinein: {
      name: "חווית ישיבה במסעדה",
      features: [
        "מושבים נוחים למשפחות",
        "מנות שף מיוחדות",
        "אווירה היגיינית ונעימה",
        "שירות לקוחות אדיב",
      ],
    },
    catering: {
      name: "שירותי קייטרינג",
      features: [
        "תפריטים מותאמים לאירועים",
        "שירות מקצועי באתר",
        "הכנת אוכל בכמויות",
        "מושלם לחתונות ואירועים עסקיים",
      ],
    },
    delivery: {
      name: "משלוח אוכל",
      features: [
        "משלוח מהיר וללא טרחה",
        "מעקב הזמנה בזמן אמת",
        "אפשרויות תשלום מאובטחות",
        "מבצעים בלעדיים אונליין",
      ],
    },
    features: "מאפיינים",
  },
};


export default function BlogHero() {
  // Theme state synced with Header
  const [theme, setTheme] = React.useState('light');
  const [language, setLanguage] = React.useState('en');
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
      const storedLang = localStorage.getItem('language') || 'en';
      setLanguage(storedLang);
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem('theme') || 'light';
        setTheme(newTheme);
      };
      const handleLangChange = () => {
        const newLang = localStorage.getItem('language') || 'en';
        setLanguage(newLang);
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

  // Set RTL/LTR direction
  const dir = language === 'ar' || language === 'he' ? 'rtl' : 'ltr';

  return (
    <div className={theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'} dir={dir}>
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center" style={{ color: theme === 'dark' ? '#fff' : '#222' }}>
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={blogHero}
          autoPlay
          muted
          loop
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative text-center px-6" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {translations[language].heroTitle}
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-white'}`}
            style={dir === 'rtl' ? { textAlign: 'right' } : {}}>
            {translations[language].heroDesc}
          </p>
        </div>
      </section>

      {/* Latest Blogs Section */}
      

      {/* Featured Articles Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-red-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            {translations[language].featured}
          </h2>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const t = featureTranslations[language][feature.key];
              return (
                <article
                  key={index}
                  className={`rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-gray-50 text-black'}`}
                >
                  {/* Image */}
                  <img
                    src={feature.image}
                    alt={t.title}
                    className="w-full h-48 object-cover"
                  />

                  {/* Content */}
                  <div className="p-6">
                    <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                      style={dir === 'rtl' ? { textAlign: 'right' } : {}}>
                      {t.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}
                      style={dir === 'rtl' ? { textAlign: 'right' } : {}}>
                      {t.description}
                    </p>
                    <Link
                      to={feature.link}
                      className="text-red-500 font-semibold hover:underline"
                      style={dir === 'rtl' ? { direction: 'rtl', textAlign: 'right', display: 'block' } : {}}
                    >
                      {featureTranslations[language].readMore}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#fff]'}`}>
        <div className="max-w-7xl mx-auto px-6 grid  md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {translations[language].categories}
            </h2>
            <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
              style={dir === 'rtl' ? { textAlign: 'right' } : {}}>
              {translations[language].categoriesDesc1}
            </p>
            <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
              style={dir === 'rtl' ? { textAlign: 'right' } : {}}>
              {translations[language].categoriesDesc2}
            </p>

          </div>

          {/* Right Cards Grid */}
          <div className="grid  sm:grid-cols-2 gap-6">
            {categories.map((cat, index) => {
              const t = categoryTranslations[language][cat.key];
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black'}`}
                  style={dir === 'rtl' ? { textAlign: 'right' } : {}}
                >
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#ef4444' }}>{t.name}</h3>
                  <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}>{t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>




      <section className={`py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-red-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              {translations[language].serviceComparison}
            </h2>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className={`w-full border rounded-lg shadow-md text-left ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <thead className={theme === 'dark' ? 'bg-[#111] text-white' : 'bg-[#000] text-white'}>
              <tr>
                <th className="px-6 py-3">{serviceTranslations[language].features}</th>
                {services.map((service, idx) => (
                  <th key={idx} className="px-6 py-3 text-center">
                    {serviceTranslations[language][service.key].name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={theme === 'dark' ? 'bg-[#222] divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}>
              {serviceTranslations[language][services[0].key].features.map((_, i) => (
                <tr key={i}>
                  {/* Feature Name */}
                  <td className={`px-6 py-4 font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                    {serviceTranslations[language][services[0].key].features[i]}
                  </td>
                  {/* Features across services */}
                  {services.map((service, j) => (
                    <td
                      key={j}
                      className={`px-6 py-4 text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                      {serviceTranslations[language][service.key].features[i] || "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>




  <section className={`py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#fff]'}`}>
    <div className="max-w-6xl mx-auto px-6">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#ef4444' }}>
        {translations[language].myths}
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {translations[language].mythItems.map((item, idx) => (
          <div className="space-y-4" key={idx}>
            <div className="flex gap-2">
              <h3 className="text-red-600 font-bold">{language === 'ar' ? 'خرافة:' : language === 'he' ? 'מיתוס:' : 'Myth:'}</h3>
              <p className={theme === 'dark' ? 'text-white' : 'text-black'}>{item.myth}</p>
            </div>
            <div className="flex gap-2">
              <h3 className="text-green-600 font-bold">{language === 'ar' ? 'حقيقة:' : language === 'he' ? 'עובדה:' : 'Fact:'}</h3>
              <p className={theme === 'dark' ? 'text-white' : 'text-black'}>{item.fact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>


    {/* Cooking Tips Section */}
    <div className={`py-10 ${theme === 'dark' ? 'bg-[#000]' : 'bg-red-50'}`}>
      <h2 className={`text-3xl font-bold text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`} style={dir === 'rtl' ? { direction: 'rtl' } : {}}>
        {translations[language].tipsTitle}
      </h2>
      <div className="grid  md:grid-cols-2 gap-6 max-w-4xl mx-auto ">
        {cookingTips.map((item, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-md transition"
            style={dir === 'rtl' ? { textAlign: 'right' } : {}}
          >
            <p className={theme === 'dark' ? 'text-black' : 'text-black'}>
              {cookingTipsTranslations[language][item.key]}
            </p>
          </div>
        ))}
      </div>
    </div>
    {/* Close top-level wrapper */}
  </div>
  );
}
