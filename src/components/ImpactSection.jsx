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

// Stats / Impact Section
const ImpactSection = () => {
  const stats = [
    { label: "Happy Customers", value: 5000 },
    { label: "Dishes Served Daily", value: 120 },
    { label: "Orders Delivered", value: 15000 },
    { label: "Branches Worldwide", value: 25 },
  ];

  return (
    <section className="max-w-full bg-red-50 mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-black mb-12 text-center">
        Our Impact
      </h2>
      <div className="grid  md:grid-cols-4 gap-10">
        {stats.map((stat, index) => (
          <Counter key={index} label={stat.label} value={stat.value} />
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;
