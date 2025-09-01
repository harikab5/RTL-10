import { useState, useEffect } from "react";

// Animated Counter component
const Counter = ({ label, value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1000; // animation duration in ms
    const stepTime = Math.max(Math.floor(duration / end), 1);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold text-black mb-2">{count}+</h3>
      <p className="text-black">{label}</p>
    </div>
  );
};


const translations = {
  English: {
    impact: "Our Impact",
    stats: [
      { label: "Happy Customers", value: 5000 },
      { label: "Dishes Served Daily", value: 120 },
      { label: "Orders Delivered", value: 15000 },
      { label: "Branches Worldwide", value: 25 },
    ],
  },
  Arabic: {
    impact: "تأثيرنا",
    stats: [
      { label: "عملاء سعداء", value: 5000 },
      { label: "أطباق تقدم يومياً", value: 120 },
      { label: "طلبات تم توصيلها", value: 15000 },
      { label: "فروع حول العالم", value: 25 },
    ],
  },
  Hebrew: {
    impact: "ההשפעה שלנו",
    stats: [
      { label: "לקוחות מרוצים", value: 5000 },
      { label: "מנות מוגשות ביום", value: 120 },
      { label: "הזמנות שסופקו", value: 15000 },
      { label: "סניפים ברחבי העולם", value: 25 },
    ],
  },
};

const ImpactSection = () => {
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
    <section className="max-w-full bg-red-50 mx-auto py-16 px-4" dir={isRTL ? 'rtl' : 'ltr'}>
      <h2 className="text-3xl font-bold text-black mb-12 text-center">
        {t.impact}
      </h2>
      <div className="grid  md:grid-cols-4 gap-10">
        {t.stats.map((stat, index) => (
          <Counter key={index} label={stat.label} value={stat.value} />
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;
