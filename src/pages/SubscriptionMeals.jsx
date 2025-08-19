import React, { useState } from "react";
import mealVideo from "../assets/meal.mp4";
import meal1 from "../assets/meals1.webp";
import meal2 from "../assets/meal2.jpg";
import meal3 from "../assets/meal3.jpg";

import { FaUtensils, FaClock, FaLeaf, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Ava Mitchell",
    role: "Busy Professional",
    text: "These subscription meals save me hours every week — healthy, delicious, and always on time.",
  },
  {
    name: "Liam Walker",
    role: "Fitness Enthusiast",
    text: "The high-protein options fit perfectly with my workout routine — no cooking, no stress!",
  },
  {
    name: "Isabella Green",
    role: "New Parent",
    text: "Having fresh meals delivered daily has been a lifesaver while juggling family and work.",
  },
  {
    name: "Noah Davis",
    role: "Student",
    text: "Affordable, nutritious, and so much better than instant noodles — I'm hooked!",
  },
  {
    name: "Mia Johnson",
    role: "Repeat Customer",
    text: "I've had this plan for six months — zero complaints, only compliments from my taste buds!",
  },
];

const steps = [
  {
    icon: <FaUtensils size={28} className="text-white" />,
    title: "Pick Your Plan",
    description: "Choose from weekly or monthly meal subscriptions.",
  },
  {
    icon: <FaLeaf size={28} className="text-white" />,
    title: "Customize Your Menu",
    description: "Select from vegetarian, vegan, or balanced diet options.",
  },
  {
    icon: <FaClock size={28} className="text-white" />,
    title: "Enjoy Daily Fresh Meals",
    description: "Delivered to your door, ready to heat and eat.",
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

const SubscriptionMealsHero = () => {
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
          src={mealVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Subscription <span className="text-red-500">Meals</span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl">
            Fresh, healthy, chef-prepared meals — delivered to your door every day.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-red-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={meal1}
              alt="Subscription meal"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">
              Why Choose Our Meal Subscription?
            </h2>
            <p className="text-black mb-4">
              Skip grocery shopping, skip cooking, and skip the stress. 
              Our meal plans are designed for busy lifestyles.
            </p>
            <p className="text-black mb-4">
              Every dish is crafted by professional chefs using fresh ingredients 
              and delivered in eco-friendly packaging.
            </p>
            <p className="text-black mb-4">
              Whether you're aiming for weight management, fitness goals, or just 
              convenient healthy eating, we've got you covered.
            </p>
            <p className="text-black mb-4">
              Flexible plans, customizable menus, and no long-term commitments.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
      <section className="py-10 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-black mb-6">What Customers Say</h2>
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
              src={meal2}
              alt="Healthy meal plan"
              className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-4">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Healthy eating made easy — get started in three quick steps.
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
          src={meal3}
          alt="Meal delivery setup"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-red-500/70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6">Ready to Eat Better Every Day?</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Subscribe today and enjoy chef-prepared meals — no cooking required.
          </p>
          <button
            onClick={() => {
              document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-black py-4 px-10 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default SubscriptionMealsHero;
