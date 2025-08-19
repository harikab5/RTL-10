import React from "react";
import blogHero from "../assets/blog.mp4";
import { Brain, Code, BarChart3 } from "lucide-react";
import feature1 from "../assets/feature1.webp"; // re
import feature2 from "../assets/feature2.jpg"; // replace with your delivery-related image
import feature3 from "../assets/feature3.png"; // replace with your cuisine variety image
import { Link } from "react-router-dom";
const categories = [
  {
    name: "Starters",
    desc: "Tasty appetizers and light bites to kickstart your meal.",
  },
  {
    name: "Main Course",
    desc: "Deliciously crafted dishes to satisfy every craving.",
  },
  {
    name: "Desserts",
    desc: "Sweet treats and indulgent delights to end on a high note.",
  },
  {
    name: "Beverages",
    desc: "Refreshing drinks, juices, and shakes to complement your meal.",
  },
];
const cookingTips = [
  {
    tip: "Always soak onions in cold water for 10 minutes before using in salads – it removes bitterness and adds crunch.",
  },
  {
    tip: "Marinate meat at least 30 minutes before cooking – it makes it juicier and full of flavor.",
  },
  {
    tip: "Use leftover rice to make quick fried rice – it cooks better and doesn’t stick together.",
  },
  {
    tip: "Add a pinch of salt while boiling pasta – it enhances the flavor and prevents stickiness.",
  },
  {
    tip: "Toast spices lightly before grinding or cooking – it brings out deeper flavors and aroma.",
  },
  {
    tip: "When frying, don’t overcrowd the pan – it lowers oil temperature and makes food soggy.",
  },
  {
    tip: "Use lemon juice to balance overly salty or spicy dishes – it adds freshness too.",
  },
  {
    tip: "Let cooked meat rest for 5 minutes before cutting – it locks in juices for better taste.",
  },
];

  const features = [
  {
    title: "Fresh & Quality Ingredients",
    description:
      "We use only the freshest, handpicked ingredients to create delicious meals. \
Every dish is crafted with care to ensure authentic taste and balanced nutrition.",
    image: feature1, // replace with your food-related image
   link: "/blog/1", 
  },
  {
    title: "Fast & Reliable Delivery",
    description:
      "Get your food delivered hot, fresh, and right on time. \
With smart tracking, you’ll always know exactly when your meal arrives.",
    image: feature2, // replace with your delivery-related image
    link: "/blog/2", 
  },
  {
    title: "Wide Variety of Cuisines",
    description:
      "From local favorites to global flavors, our menu has something for everyone. \
Enjoy a wide range of dishes made fresh to satisfy every craving.",
    image: feature3, // replace with your cuisine variety image
    link: "/blog/3", 
  },
];


const services = [
  {
    name: "Food Delivery",
    features: [
      "Fast & hassle-free delivery",
      "Real-time order tracking",
      "Multiple secure payment options",
      "Exclusive online deals",
    ],
  },
  {
    name: "Catering Services",
    features: [
      "Customized menus for events",
      "Professional on-site service",
      "Bulk food preparation",
      "Perfect for weddings & corporate events",
    ],
  },
  {
    name: "Dine-In Experience",
    features: [
      "Comfortable family-friendly seating",
      "Chef’s special signature dishes",
      "Hygienic & cozy ambience",
      "Attentive customer service",
    ],
  },
  {
    name: "Party Orders & Bulk Meals",
    features: [
      "Large quantity food packages",
      "Customizable menu options",
      "Affordable bulk pricing",
      "Timely preparation & delivery",
    ],
  },
  {
    name: "Subscription Meals",
    features: [
      "Daily & weekly meal plans",
      "Healthy & diet-friendly options",
      "Flexible subscriptions",
      "Freshly prepared every day",
    ],
  },
  {
    name: "Takeaway / Pickup",
    features: [
      "Quick self-pickup service",
      "No waiting time",
      "Freshly packed meals",
      "Special discounts for takeaway",
    ],
  },
];


export default function BlogHero() {
  // Theme state synced with Header
  const [theme, setTheme] = React.useState('light');
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
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
  // Read blogs from localStorage
  

  return (
    <div className={theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'}>
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
            Explore Our <span style={{ color: '#ef4444' }}>Blogs</span>
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            Stay updated with the latest insights, trends, and knowledge in{' '}
            <span className="font-semibold" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
              AI, Web Development
            </span>
            , Data Science, and more. Learn and grow with us!
          </p>
        </div>
      </section>

      {/* Latest Blogs Section */}
      

      {/* Featured Articles Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-red-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Featured Articles
          </h2>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <article
                key={index}
                className={`rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-gray-50 text-black'}`}
              >
                {/* Image */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                 <Link
  to={feature.link}
  className="text-red-500 font-semibold hover:underline"
>
  Read More →
</Link>

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#fff]'}`}>
        <div className="max-w-7xl mx-auto px-6 grid  md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Explore by <span style={{ color: '#ef4444' }}>Categories</span>
            </h2>
            <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
  Our menu is thoughtfully categorized to help you easily find
  dishes that match your cravings—whether it's{' '}
  <span className="font-semibold text-red-500">
    Starters, Main Course, Desserts,
  </span>{' '}
  or refreshing beverages delivered to your doorstep.
</p>
<p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
  Browse through our categories and discover meals crafted to satisfy every taste. 
  Whether you’re looking for a quick bite, a family dinner, or a sweet treat to end 
  your day, our restaurant offers freshly prepared food, speedy delivery, and 
  flavors you’ll love. Enjoy convenience, taste, and quality—all in one place.
</p>

          </div>

          {/* Right Cards Grid */}
          <div className="grid  sm:grid-cols-2 gap-6">
            {categories.map((cat, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black'}`}
              >
                <div className="text-3xl mb-4">{cat.icon}</div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#ef4444' }}>{cat.name}</h3>
                <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}>{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      <section className={`py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-red-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Service Comparison
            </h2>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className={`w-full border rounded-lg shadow-md text-left ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <thead className={theme === 'dark' ? 'bg-[#111] text-white' : 'bg-[#000] text-white'}>
              <tr>
                <th className="px-6 py-3">Features</th>
                {services.map((service, idx) => (
                  <th key={idx} className="px-6 py-3 text-center">
                    {service.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={theme === 'dark' ? 'bg-[#222] divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}>
              {services[0].features.map((_, i) => (
                <tr key={i}>
                  {/* Feature Name */}
                  <td className={`px-6 py-4 font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                    {services[0].features[i]}
                  </td>
                  {/* Features across services */}
                  {services.map((service, j) => (
                    <td
                      key={j}
                      className={`px-6 py-4 text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                      {service.features[i] || "—"}
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
        Myths & Facts
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">
  {/* Item 1 */}
  <div className="space-y-4">
    <div className="flex gap-2">
      <h3 className="text-red-600 font-bold">Myth:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        Online food delivery always takes too long.
      </p>
    </div>
    <div className="flex gap-2">
      <h3 className="text-green-600 font-bold">Fact:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        Our delivery partners ensure your food arrives hot and fresh, usually within 30–40 minutes.
      </p>
    </div>
  </div>

  {/* Item 2 */}
  <div className="space-y-4">
    <div className="flex gap-2">
      <h3 className="text-red-600 font-bold">Myth:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        Restaurant food isn’t as fresh as homemade meals.
      </p>
    </div>
    <div className="flex gap-2">
      <h3 className="text-green-600 font-bold">Fact:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        We use fresh, high-quality ingredients daily to prepare every dish with care.
      </p>
    </div>
  </div>

  {/* Item 3 */}
  <div className="space-y-4">
    <div className="flex gap-2">
      <h3 className="text-red-600 font-bold">Myth:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        Online delivery is always expensive.
      </p>
    </div>
    <div className="flex gap-2">
      <h3 className="text-green-600 font-bold">Fact:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        With combo deals, discounts, and free delivery offers, you can enjoy great meals at affordable prices.
      </p>
    </div>
  </div>

  {/* Item 4 */}
  <div className="space-y-4">
    <div className="flex gap-2">
      <h3 className="text-red-600 font-bold">Myth:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        Ordering food online is unsafe.
      </p>
    </div>
    <div className="flex gap-2">
      <h3 className="text-green-600 font-bold">Fact:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        Our platform ensures safe packaging, contactless delivery, and hygienic kitchen practices.
      </p>
    </div>
  </div>

  {/* Item 5 */}
  <div className="space-y-4">
    <div className="flex gap-2">
      <h3 className="text-red-600 font-bold">Myth:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        You can’t customize your order when ordering online.
      </p>
    </div>
    <div className="flex gap-2">
      <h3 className="text-green-600 font-bold">Fact:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        Our menu lets you add special instructions, choose spice levels, and request add-ons with ease.
      </p>
    </div>
  </div>

  {/* Item 6 */}
  <div className="space-y-4">
    <div className="flex gap-2">
      <h3 className="text-red-600 font-bold">Myth:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        Delivery food is unhealthy.
      </p>
    </div>
    <div className="flex gap-2">
      <h3 className="text-green-600 font-bold">Fact:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        We offer balanced meals, healthy options, and freshly prepared dishes to suit your lifestyle.
      </p>
    </div>
  </div>
</div>

    </div>
  </section>

<div className={`py-10 ${theme === 'dark' ? 'bg-[#000]' : 'bg-red-50'}`}>
  <h2 className={`text-3xl font-bold text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
    Cooking Tips 🧑‍🍳
  </h2>

  <div className="grid  md:grid-cols-2 gap-6 max-w-4xl mx-auto ">
    {cookingTips.map((item, index) => (
      <div 
        key={index} 
        className="p-4 border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-md transition"
      >
        <p className={theme === 'dark' ? 'text-black' : 'text-black'}>
          {item.tip}
        </p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
