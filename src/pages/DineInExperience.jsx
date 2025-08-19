import React, { useState } from "react";
import dineVideo from "../assets/dine.mp4";
import dine1 from "../assets/dine1.avif";
import dine2 from "../assets/dine2.jpg";
import dine3 from "../assets/dine3.jpg";

import { FaUtensils, FaWineGlassAlt, FaSmile, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Nathan Foster",
    role: "Food Critic",
    text: "A true fine dining experience! Exceptional ambiance and world-class service.",
  },
  {
    name: "Grace Miller",
    role: "Traveler",
    text: "Loved the cozy atmosphere — the staff made us feel right at home.",
  },
  {
    name: "Jason Wright",
    role: "Business Executive",
    text: "Perfect place for a client dinner. Delicious courses and private seating.",
  },
  {
    name: "Hannah Scott",
    role: "Couple",
    text: "Romantic and intimate — the chef's tasting menu was incredible!",
  },
  {
    name: "Leo Brooks",
    role: "Regular Guest",
    text: "Every visit feels special. The staff remembers my preferences — amazing!",
  },
];

const steps = [
  {
    icon: <FaUtensils size={28} className="text-white" />,
    title: "Reserve Your Table",
    description: "Book online or call to choose your preferred time and seating.",
  },
  {
    icon: <FaWineGlassAlt size={28} className="text-white" />,
    title: "Arrive and Relax",
    description: "Step into a welcoming atmosphere designed for your comfort.",
  },
  {
    icon: <FaSmile size={28} className="text-white" />,
    title: "Enjoy Your Meal",
    description: "Indulge in gourmet dishes crafted to perfection by our chefs.",
  },
];

const plans = [
  {
    name: "Standard Dining",
    price: "$29",
    period: "/guest",
    features: [
      "3-course set menu",
      "Cozy seating",
      "Complimentary beverage",
    ],
    highlighted: false,
  },
  {
    name: "Premium Dining",
    price: "$59",
    period: "/guest",
    features: [
      "5-course tasting menu",
      "Priority reservation",
      "Wine pairing options",
    ],
    highlighted: true,
  },
  {
    name: "Exclusive Chef’s Table",
    price: "$99",
    period: "/guest",
    features: [
      "7-course custom menu",
      "Private dining area",
      "Meet the chef experience",
    ],
    highlighted: false,
  },
];

const DineInExperienceHero = () => {
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
          src={dineVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Premium <span className="text-red-500">Dine-In</span> Experience
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl">
            Savor gourmet flavors in an elegant ambiance with world-class service 
            designed for every occasion.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-red-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src={dine1}
              alt="Our Dine-In Experience"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">
              About Our Dine-In
            </h2>
            <p className="text-black mb-4">
              Enjoy an immersive dining experience where every detail is designed to delight — from the lighting and music to the exceptional cuisine.
            </p>
            <p className="text-black mb-4">
              Our chefs curate seasonal menus that highlight fresh, locally sourced ingredients, crafted with creativity and precision.
            </p>
            <p className="text-black mb-4">
              Whether it's a romantic dinner, family gathering, or business meeting, our team ensures an atmosphere of elegance and comfort.
            </p>
            <p className="text-black mb-4">
              Choose from intimate private rooms, open dining spaces, or exclusive chef's table seating.
            </p>
            <p className="text-black mb-4">
              We provide personalized recommendations for wine pairings, desserts, and course customization to make every meal unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-white text-center" id="pricing">
        <h2 className="text-4xl font-bold text-red-500 mb-4">Our Dining Options</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Select the perfect dining experience tailored to your occasion.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                Reserve Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Card */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-black mb-6">
              Guest Reviews
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
              src={dine2}
              alt="Dining area"
              className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-4">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Dining with us is effortless and enjoyable from start to finish.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col hover:scale-105 transition items-center max-w-[200px]">
                <div className="bg-red-500 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <FaArrowRight size={30} className="text-gray-400 mx-6 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-6 md:px-20 text-white">
        <img
          src={dine3}
          alt="Dining ambiance"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-red-500/70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6">
            Ready for a Perfect Evening?
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Reserve your table now and experience exceptional flavors in a 
            warm and elegant setting.
          </p>
          <button
            onClick={() => {
              document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-black py-4 px-10 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Reserve Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default DineInExperienceHero;
