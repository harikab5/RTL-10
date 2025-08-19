import React from "react";
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

const stats = [
  { label: "Happy Customers", value: 5000 },
  { label: "Dishes Served Daily", value: 120 },
  { label: "Orders Delivered", value: 15000 },
  { label: "Branches Worldwide", value: 25 },
];


 const categories = [
    {
      title: "Breakfast Specials",
      desc: "Start your day with fresh, wholesome, and energy-packed meals.",
    },
    {
      title: "Lunch Combos",
      desc: "Balanced meals with the perfect mix of taste and nutrition.",
    },
    {
      title: "Dinner Feasts",
      desc: "Indulge in hearty dishes made to bring families together.",
    },
    {
      title: "Desserts & Drinks",
      desc: "Sweet treats and refreshing beverages to complete your meal.",
    },
  ];

const services = [
  {
    title: "Food Delivery",
    desc: "Quick and fresh meals delivered right to your doorstep with guaranteed hygiene and taste. We partner with top-rated restaurants and trusted chefs to ensure every meal is delicious, healthy, and made from the finest ingredients. Our advanced delivery system ensures food arrives hot and fresh, preserving its flavor. Whether it’s breakfast, lunch, dinner, or late-night cravings, we’ve got you covered. Fast, reliable, and affordable—our food delivery makes your life easier and tastier every day.",
    img: img1,
    path: "/Food-Delivery",
  },
  {
    title: "Catering Services",
    desc: "Delicious catering solutions designed for weddings, parties, and corporate events of any size. Our catering team curates menus tailored to your occasion, offering everything from light snacks to lavish multi-course meals. We focus on presentation, taste, and customer satisfaction to leave a lasting impression on your guests. Every dish is prepared with love, hygiene, and creativity by our expert chefs. From intimate gatherings to grand celebrations, we handle all catering needs with care and excellence.",
    img: img2,
    path: "/Catering-Services",
  },
  {
    title: "Dine-In Experience",
    desc: "Step into our cozy restaurant and enjoy a fine dining experience like no other. We combine elegant interiors with a welcoming atmosphere, making it perfect for families, friends, or business meetings. Our chefs prepare signature dishes crafted from fresh, seasonal ingredients to delight your taste buds. Every table is served with attention, ensuring comfort and satisfaction from start to finish. Whether you want a casual meal or a special occasion dinner, our dine-in experience has something for everyone.",
    img: img3,
    path: "/Dine-In-Experience",
  },
  {
    title: "Party Orders & Bulk Meals",
    desc: "Affordable and customizable bulk meals tailored for parties, celebrations, and corporate gatherings. Our kitchen is equipped to handle large orders without compromising on taste or quality. Choose from a wide range of menus that include snacks, main courses, and desserts to please every guest. We offer flexible packages that fit within your budget while ensuring premium quality food. With timely delivery and delicious flavors, our bulk meals guarantee a memorable experience for all your guests.",
    img: img4,
    path: "/PartyOrders-BulkMeals",
  },
  {
    title: "Subscription Meals",
    desc: "Healthy, tasty, and affordable meal subscription plans designed for your everyday lifestyle. Our subscription offers a variety of choices including vegetarian, high-protein, and balanced diet meals. Each meal is freshly prepared and portion-controlled to support your health goals. We make eating well convenient by delivering nutritious meals directly to your doorstep on time. With flexible plans and no compromise on taste, our subscription service helps you maintain a healthy routine effortlessly.",
    img: img5,
    path: "/Subscription-Meals",
  },
  {
    title: "Takeaway / Pickup",
    desc: "Convenient and quick takeaway options for customers who prefer to grab their meals on the go. Order ahead through our website or app and skip the waiting line—your food will be packed and ready. Our packaging ensures freshness, heat retention, and spill-free travel so you can enjoy your meal anywhere. Whether you’re rushing to work, heading home, or planning a quick outing, our takeaway service fits your busy schedule. Fast, hassle-free, and always delicious.",
    img: img6,
    path: "/Takeaway-Pickup",
  },
];



const ServicesPage = () => {
    
  return (
    <div className="w-full">
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
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            From doorstep delivery to fine dining and catering — we’ve got all
            your food needs covered.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 space-y-16">
  {services.map((service, index) => (
    <div key={index} className="grid md:grid-cols-2 gap-10 items-center">
      {/* Image */}
      <div className={`${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-[350px] object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Content */}
      <div className={`${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
        <h3 className="text-2xl font-bold text-red-600 mb-4">
          {service.title}
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          {service.desc}
        </p>

       <Link
  to={service.path}
  className="inline-block mt-4 px-5 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition"
>
  Read More
</Link>

      </div>
    </div>
  ))}
</section>
<ImpactSection />




<section className="max-w-6xl mx-auto py-16 px-4">
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
      <h2 className="text-3xl font-bold text-red-600 mb-4">
        Ongoing Deals & Offers
      </h2>
      <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
       <li>Flat 20% off on first-time food delivery orders.</li>
        <li>Buy 1 Get 1 Free on selected weekend meals.</li>
        <li>Special family combo packs at discounted prices.</li>
        <li>Exclusive catering discounts for bulk party orders.</li>
        <li>Daily meal subscriptions with extra savings.</li>
        <li>Free dessert with every dine-in order above ₹999.</li>
        <li>Happy Hours: Extra 15% off on orders placed between 3–5 PM.</li>
      </ul>
    </div>
  </div>
</section>


 <section className="max-w-full bg-red-50 mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-center">
      {/* Left Info */}
      <div>
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Explore Our Categories
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Our restaurant is designed to serve every moment of your day — from
          the first meal in the morning to late-night cravings. Each category
          has been carefully curated to match your lifestyle and preferences.
        </p>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Whether you’re looking for a light breakfast, a quick office lunch, a
          hearty dinner with family, or something sweet to end your day — we
          have it all. Our chefs combine fresh ingredients with authentic
          flavors to make every bite memorable.
        </p>
        
      </div>

      {/* Right Cards */}
      <div className="grid grid-cols-2 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-md rounded-xl p-6 text-center"
          >
            <h3 className="text-lg font-semibold text-red-500 mb-2">
              {cat.title}
            </h3>
            <p className="text-sm text-gray-600">{cat.desc}</p>
          </div>
        ))}
      </div>
    </section>
{      /* Contact Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
         <h2 className="text-3xl font-bold text-red-600 mb-4">Ready to Enjoy your Delicious Meal</h2>
<p className="text-lg text-gray-700 mb-6">
  Have questions about our restaurant, food delivery, or ongoing offers?  
  Our friendly team is here to assist you with reservations, catering bookings,  
  party orders, and any special meal requests.  
  Reach out to us anytime — we’d love to serve you!
</p>

          <Link
            to="/contactus"
            className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition"
          >
            Lets Dive In
          </Link>    
        </div>              
      </section>



    </div>
  );
};

export default ServicesPage;
