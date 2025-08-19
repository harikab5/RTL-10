import React, { useState } from "react";
import foodhero from "../assets/foodhero.mp4";
import serviceImg from "../assets/food1.webp"; // Replace with your service image
import food from "../assets/food2.webp"; // <-- Import your image
import food3 from "../assets/food3.jpg"; // Replace with your call to action image

import { FaUtensils, FaShoppingCart, FaTruck, FaSmile, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Food Blogger",
    text: "The delivery was super fast and the food was absolutely delicious! Highly recommend this service.",
  },
  {
    name: "Michael Lee",
    role: "Chef",
    text: "I was impressed by how fresh everything was. Definitely a go-to for late-night cravings.",
  },
  {
    name: "Emily Davis",
    role: "Student",
    text: "Affordable and tasty! I love that I can track my order in real-time.",
  },
  {
    name: "David Wilson",
    role: "Business Analyst",
    text: "Best restaurant delivery experience I've had. Excellent customer support as well.",
  },
  {
    name: "Olivia Martinez",
    role: "Designer",
    text: "Meals always arrive hot and neatly packed. Perfect for busy work days.",
  },
];
 

 const steps = [
  {
    icon: <FaUtensils size={28} className="text-white" />,
    title: "Choose Your Meal",
    description: "Browse our menu and select your favorite dishes quickly.",
  },
  {
    icon: <FaShoppingCart size={28} className="text-white" />,
    title: "Place Your Order",
    description: "Add meals to your cart, customize options, and checkout securely.",
  },
  {
    icon: <FaTruck size={28} className="text-white" />,
    title: "Fast Delivery",
    description: "Track your order in real-time as it arrives fresh and hot.",
  },
  {
    icon: <FaSmile size={28} className="text-white" />,
    title: "Enjoy Your Food",
    description: "Delicious meals delivered to your doorstep with satisfaction.",
  },
];
 const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      features: [
        "1 meal per day",
        "Free delivery over $20",
        "Basic support",
      ],
      highlighted: false,
    },
    {
      name: "Regular",
      price: "$19",
      period: "/month",
      features: [
        "2 meals per day",
        "Priority delivery",
        "Discount coupons",
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "$29",
      period: "/month",
      features: [
        "Unlimited meals",
        "Free delivery always",
        "Premium support",
      ],
      highlighted: false,
    },
  ];


const FoodDeliveryHero = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[index];
  return (
    <div>
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
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Delicious <span className="text-red-500">Food</span> Delivered Fast
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl">
            Enjoy hot, fresh, and tasty meals at your doorstep – quick delivery, 
            multiple cuisines, and unbeatable offers just for you!
          </p>
        </div>
      </section>

      {/* About Our Service Section */}
      <section className="py-20 px-6 md:px-20 bg-red-50">
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
            <h2 className="text-4xl font-bold text-black mb-6">
              About Our Service
            </h2>
            <p className="text-black mb-4">
  Our food delivery service ensures that you get fresh and delicious meals 
  at your doorstep in record time. We partner with top restaurants and 
  chefs to bring a wide variety of cuisines to your table.
</p>
<p className="text-black mb-4">
  Whether it’s a quick lunch, a family dinner, or a special celebration, 
  we guarantee quality, hygiene, and satisfaction with every order.
</p>
<p className="text-black mb-4">
  We carefully select only the finest ingredients and prepare meals with utmost care 
  to maintain freshness and flavor. Every order is handled with strict hygiene standards.
</p>
<p className="text-black mb-4">
  Our platform makes ordering seamless and convenient – choose your favorite dishes, 
  customize them to your liking, and track your delivery in real time.
</p>
<p className="text-black mb-4">
  We also offer flexible subscription plans, catering services for events, and special 
  discounts for bulk orders, ensuring there’s something for everyone.
</p>


          </div>
        </div>
      </section>

      {/*how it works section */  }
       

    <section className="py-20 px-6 bg-white text-center" id="pricing">
      <h2 className="text-4xl font-bold text-red-500 mb-4">Our Pricing</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Choose a plan that fits your appetite. Upgrade anytime — no hidden fees!
      </p>

      <div className="grid  md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col items-center rounded-2xl p-8 shadow-lg border 
              ${plan.highlighted ? "bg-red-500 text-white scale-105" : "bg-white text-gray-800"}`}
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <div className="text-4xl font-extrabold mb-2">
              {plan.price} <span className="text-lg font-medium">{plan.period}</span>
            </div>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-sm">
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`px-6 py-3 rounded-full font-semibold transition 
                ${plan.highlighted 
                  ? "bg-white text-red-500 hover:bg-gray-100" 
                  : "bg-red-500 text-white hover:bg-red-600"}`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>



   <section className="py-10 px-4 bg-red-50">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
    {/* Left Side - Text Card */}
    <div className="text-center md:text-left">
      <h2 className="text-4xl font-bold text-black mb-6">
        What Our Customers Say
      </h2>
      <div className="bg-gray-100 rounded-2xl p-8 shadow-lg">
        <p className="text-gray-700 text-lg italic mb-6">
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
<section className="py-20 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold text-red-500 mb-4">How It Works</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Ordering delicious food from your favorite restaurant is simple and fast.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            {/* Step card */}
            <div className="flex flex-col  hover:scale-105 transition items-center max-w-[200px]">
              <div className="bg-red-500 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>

            {/* Arrow (between steps only, hidden on small screens) */}
            {index < steps.length - 1 && (
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
    <h2 className="text-5xl  font-extrabold mb-6">
      Ready to Order?
    </h2>
    <p className="text-lg md:text-xl mb-8 leading-relaxed">
      Order now and get your favorite meals delivered <br /> 
      fresh, hot, and in record time. Taste the difference today!
    </p>
    <button
      onClick={() => {
        document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
      }}
      className="bg-white text-black py-4 px-10 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
    >
      Order Now
    </button>
  </div>
</section>

    </div>
  );
};

export default FoodDeliveryHero;
