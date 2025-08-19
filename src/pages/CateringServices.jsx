import React, { useState } from "react";
import cateringVideo from "../assets/catering.mp4";
import catering1 from "../assets/catering1.jpg";
import catering2 from "../assets/catering2.jpg";
import catering3 from "../assets/catering3.webp";


import { FaConciergeBell, FaShoppingCart, FaTruck, FaSmile, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Jennifer Clark",
    role: "Event Planner",
    text: "The catering was flawless — every dish was fresh, beautifully presented, and on time!",
  },
  {
    name: "Robert King",
    role: "Corporate Manager",
    text: "We hired them for our annual conference. Service was professional and seamless.",
  },
  {
    name: "Linda Perez",
    role: "Bride",
    text: "The wedding banquet was perfect! Guests loved every bite, and the team handled everything.",
  },
  {
    name: "Chris Allen",
    role: "Restaurant Owner",
    text: "They managed a high-volume event with zero issues. Truly dependable service.",
  },
  {
    name: "Sophia Brown",
    role: "Birthday Host",
    text: "Delicious food, wonderful staff, and stress-free organization — highly recommended!",
  },
];

const steps = [
  {
    icon: <FaConciergeBell size={28} className="text-white" />,
    title: "Plan Your Menu",
    description: "Choose from a wide selection of cuisines and customize to your event.",
  },
  {
    icon: <FaShoppingCart size={28} className="text-white" />,
    title: "Confirm Your Booking",
    description: "Reserve your date, finalize details, and relax while we prepare.",
  },
  {
    icon: <FaTruck size={28} className="text-white" />,
    title: "On-Time Delivery",
    description: "We deliver and set up everything fresh, hot, and beautifully arranged.",
  },
  {
    icon: <FaSmile size={28} className="text-white" />,
    title: "Enjoy Your Event",
    description: "We handle service so you can focus on your guests.",
  },
];

const plans = [
  {
    name: "Basic Event",
    price: "$199",
    period: "/event",
    features: [
      "Up to 20 guests",
      "Standard menu options",
      "Free delivery within 10 miles",
    ],
    highlighted: false,
  },
  {
    name: "Premium Event",
    price: "$499",
    period: "/event",
    features: [
      "Up to 50 guests",
      "Customizable menu",
      "Dedicated event manager",
    ],
    highlighted: true,
  },
  {
    name: "Grand Event",
    price: "$999",
    period: "/event",
    features: [
      "100+ guests",
      "Fully customized menu",
      "On-site chef team & full service",
    ],
    highlighted: false,
  },
];

const CateringServicesHero = () => {
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
          src={cateringVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Exceptional <span className="text-red-500">Catering</span> Services
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl">
            Make your events unforgettable with gourmet dishes, flawless service,
            and perfect presentation — delivered right to your venue!
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-red-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src={catering1}
              alt="Our Catering Service"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="text-black">
            <h2 className="text-4xl font-bold text-black mb-6">
              About Our Catering
            </h2>
            <p className="text-black mb-4">
              We specialize in creating memorable dining experiences for weddings,
              corporate events, private parties, and celebrations of any size.
            </p>
            <p className="text-black mb-4">
              From elegant plated dinners to vibrant buffet spreads, our chefs craft
              menus tailored to your taste, theme, and budget.
            </p>
            <p className="text-black mb-4">
              Using only premium, fresh ingredients, we ensure that every dish is
              bursting with flavor and beautifully presented.
            </p>
            <p className="text-black mb-4">
              Our professional team handles everything — menu planning, delivery,
              setup, and service — so you can focus on enjoying your event.
            </p>
            <p className="text-black mb-4">
              Choose from our flexible catering packages or request a completely
              custom menu designed exclusively for your occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-white text-center" id="pricing">
        <h2 className="text-4xl font-bold text-red-500 mb-4">Our Packages</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Whether it's an intimate gathering or a grand celebration, we have a
          package to suit every event.
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
                Book Now
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
              What Clients Say
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
              src={catering2}
              alt="Catering dishes"
              className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-4">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Booking our catering service is simple and stress-free.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              {/* Step card */}
              <div className="flex flex-col hover:scale-105 transition items-center max-w-[200px]">
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
        <img
          src={catering3}
          alt="Catering service"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-red-500/70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6">
            Ready to Book Your Event?
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Let us handle the food while you focus on creating unforgettable
            moments. Reserve your catering service today!
          </p>
          <button
            onClick={() => {
              document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-black py-4 px-10 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default CateringServicesHero;
