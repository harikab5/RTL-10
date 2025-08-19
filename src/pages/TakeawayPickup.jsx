import React, { useState } from "react";
import takeVideo from "../assets/take.mp4";
import take1 from "../assets/take1.jpg";
import take2 from "../assets/take2.avif";
import take3 from "../assets/take3.jpg";

import { FaShoppingBag, FaClock, FaMobileAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Olivia Carter",
    role: "Foodie on the Go",
    text: "Ordering for pickup is super easy — my food is always ready when I arrive!",
  },
  {
    name: "James Allen",
    role: "Office Worker",
    text: "Lunch breaks are now stress-free. I just grab and go — no waiting in lines.",
  },
  {
    name: "Sophia Evans",
    role: "Parent",
    text: "Takeaway meals save my evenings. Fresh, fast, and perfect for family dinners.",
  },
  {
    name: "Ethan Lewis",
    role: "Student",
    text: "Affordable and quick! I can order between classes and pick it up on time.",
  },
  {
    name: "Amelia Scott",
    role: "Regular Customer",
    text: "Reliable pickup service and delicious food every single time!",
  },
];
const plans = [
  {
    name: "Starter Plan",
    price: "$59",
    period: "/week",
    features: [
      "5 chef-prepared meals",
      "Balanced nutrition",
      "Pickup or delivery",
    ],
    highlighted: false,
  },
  {
    name: "Standard Plan",
    price: "$99",
    period: "/week",
    features: [
      "10 chef-prepared meals",
      "Customizable menu",
      "Free delivery",
    ],
    highlighted: true,
  },
  {
    name: "Premium Plan",
    price: "$179",
    period: "/week",
    features: [
      "20 meals + snacks",
      "Dietitian-approved",
      "Priority delivery",
    ],
    highlighted: false,
  },
];

const steps = [
  {
    icon: <FaMobileAlt size={28} className="text-white" />,
    title: "Order Online",
    description: "Browse the menu and place your takeaway order in seconds.",
  },
  {
    icon: <FaClock size={28} className="text-white" />,
    title: "Choose Pickup Time",
    description: "Select a convenient time that works best for you.",
  },
  {
    icon: <FaShoppingBag size={28} className="text-white" />,
    title: "Grab & Go",
    description: "Skip the wait — your food will be ready when you arrive.",
  },
];

const TakeawayPickupHero = () => {
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
          src={takeVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Takeaway <span className="text-red-500">& Pickup</span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl">
            Fresh food, no waiting — order online and pick it up right on time.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-red-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={take1}
              alt="Takeaway meals"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">
              Why Choose Our Takeaway Service?
            </h2>
            <p className="text-black mb-4">
              Enjoy your favorite meals without the wait. Simply place your order online, 
              choose a pickup time, and we'll have it ready.
            </p>
            <p className="text-black mb-4">
              Perfect for busy workdays, quick lunches, or a hassle-free dinner. 
              Get high-quality food on your schedule.
            </p>
            <p className="text-black mb-4">
              With real-time order updates, you’ll always know when your meal is ready to grab.
            </p>
          </div>
        </div>
      </section>
            <section className="py-20 px-6 bg-white text-center" id="pricing">
        <h2 className="text-4xl font-bold text-red-500 mb-4">Meal Plans</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Pick the plan that fits your lifestyle and goals.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
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
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-10 px-4 bg-red-500">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-white mb-6">What Customers Say</h2>
            <div className="bg-gray-100 rounded-2xl p-8 shadow-lg">
              <p className="text-gray-700 text-lg italic mb-6">
                "{testimonial.text}"
              </p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-red-500 text-sm">{testimonial.role}</p>
            </div>
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
          <div className="flex justify-center">
            <img
              src={take2}
              alt="Takeaway ready"
              className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-4">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Quick and convenient takeaway ordering in just three easy steps.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center">
              <div className="flex flex-col hover:scale-105 transition items-center max-w-[200px]">
                <div className="bg-red-500 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <FaArrowRight size={30} className="text-gray-400 mx-6 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-6 md:px-20 text-white">
        <img
          src={take3}
          alt="Pickup service"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-red-500/70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6">Ready for Faster Meals?</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Place your takeaway order now and pick it up when it’s perfect for you.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-white text-black py-4 px-10 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Order Takeaway
          </button>
        </div>
      </section>
    </div>
  );
};

export default TakeawayPickupHero;
