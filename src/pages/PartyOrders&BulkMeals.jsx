import React, { useState } from "react";
import partyVideo from "../assets/party.mp4";
import party1 from "../assets/party1.jpg";
import party2 from "../assets/party2.webp";
import party3 from "../assets/party3.avif";

import { FaGlassCheers, FaUsers, FaTruck, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Olivia Carter",
    role: "Event Planner",
    text: "They made catering for 200 guests seamless — food was hot, fresh, and everyone loved it!",
  },
  {
    name: "Ethan James",
    role: "Birthday Host",
    text: "The bulk order was a hit — delicious dishes, generous portions, and timely delivery.",
  },
  {
    name: "Sophia Brown",
    role: "Corporate Organizer",
    text: "Perfect for office parties. They even customized the menu to fit dietary preferences.",
  },
  {
    name: "Michael Turner",
    role: "Family Reunion Host",
    text: "Ordering was effortless and the quality exceeded expectations — five stars!",
  },
  {
    name: "Amelia Scott",
    role: "Repeat Customer",
    text: "I've used their bulk meals for three events now — consistently outstanding!",
  },
];

const steps = [
  {
    icon: <FaUsers size={28} className="text-white" />,
    title: "Choose Your Package",
    description: "Select from our party platters or fully customized bulk meals.",
  },
  {
    icon: <FaGlassCheers size={28} className="text-white" />,
    title: "Place Your Order",
    description: "Book online or by phone — we'll confirm every detail with you.",
  },
  {
    icon: <FaTruck size={28} className="text-white" />,
    title: "Enjoy Your Event",
    description: "We deliver on time or prepare for easy pickup. Simply serve and celebrate.",
  },
];

const plans = [
  {
    name: "Small Gathering",
    price: "$199",
    period: "/10-15 guests",
    features: [
      "Appetizers + Main Course",
      "Disposable plates & cutlery",
      "Pickup or delivery",
    ],
    highlighted: false,
  },
  {
    name: "Medium Party",
    price: "$399",
    period: "/25-30 guests",
    features: [
      "Full course buffet",
      "Desserts included",
      "Free delivery",
    ],
    highlighted: true,
  },
  {
    name: "Grand Celebration",
    price: "$799",
    period: "/50+ guests",
    features: [
      "Custom menu planning",
      "On-site setup available",
      "Dedicated event manager",
    ],
    highlighted: false,
  },
];

const PartyOrdersHero = () => {
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
          src={partyVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Party Orders & <span className="text-red-500">Bulk Meals</span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl">
            Hassle-free catering solutions — perfect for birthdays, weddings, 
            corporate events, and big family gatherings.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-red-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={party1}
              alt="Party catering"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">
              Why Choose Our Party Catering?
            </h2>
            <p className="text-black mb-4">
              Planning an event is stressful — but feeding your guests doesn’t have to be. 
              Our bulk meal services offer convenience without compromising on flavor.
            </p>
            <p className="text-black mb-4">
              We prepare generous portions using fresh ingredients, packaged 
              neatly for effortless serving.
            </p>
            <p className="text-black mb-4">
              From small gatherings to grand celebrations, our team helps 
              you customize your order to match your theme and preferences.
            </p>
            <p className="text-black mb-4">
              Need vegetarian, vegan, or allergy-friendly options? We've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-white text-center" id="pricing">
        <h2 className="text-4xl font-bold text-red-500 mb-4">Party Packages</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Flexible options to suit any event size or budget.
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
                Order Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-black mb-6">What Clients Say</h2>
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
              src={party2}
              alt="Bulk meal catering"
              className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-4">How to Order</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Simple, fast, and reliable — enjoy stress-free event catering.
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
          src={party3}
          alt="Party meal setup"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-red-500/70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6">Ready to Feed Your Guests?</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Order now and make your celebration unforgettable — we handle the food so you can enjoy the party.
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

export default PartyOrdersHero;
