import React from "react";

import aboutushero from "../assets/aboutushero.mp4";
import special1 from "../assets/special1.jpg";
import special2 from "../assets/special2.jpg";
import awards from "../assets/awards.jpg";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-110"
          src={aboutushero}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-6xl font-serif font-bold text-white text-center mb-4 drop-shadow-lg">About Us</h1>
          <span className="text-xl md:text-2xl text-white/90 text-center mb-8 max-w-2xl drop-shadow">Crafting Culinary Memories, One Plate at a Time</span>
        </div>
      </section>
      {/* Our Mission Section */}
  {/* Our Mission Section */}
{/* Our Mission Section */}
<section className="w-full bg-red-50 py-20 px-4 md:px-0 flex flex-col items-center justify-center">
  <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Left: Image */}
    <div className="w-full h-full">
      <div className="w-full aspect-[16/10]">
        <img
          src={special1}
          alt="Our Mission"
          className="rounded-2xl shadow-lg w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Right: Content */}
    <div className="grid gap-4 content-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
        Our Mission
      </h2>
      <p className="text-lg text-gray-700 max-w-lg">
        To delight every guest with an exceptional dining experience,
        blending authentic flavors, warm hospitality, and a passion for
        culinary excellence. We strive to create a welcoming space where
        families and friends can celebrate life’s moments over delicious food.
      </p>
    </div>
  </div>
</section>
<section className="w-full bg-white py-20 px-4 md:px-0 flex flex-col items-center justify-center">
  <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Left: Image */}
    <div className="w-full h-full order-1 md:order-2">
      <div className="w-full aspect-[16/10]">
        <img
          src={awards}
          alt="Achievements Timeline"
          className="rounded-2xl shadow-lg w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Right: Content */}
    <div className="grid gap-4 content-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
        Achievements Timeline
      </h2>
      <p className="text-lg text-gray-700 max-w-lg">
        Over the years, our journey has been marked by numerous awards and
        milestones that celebrate our commitment to excellence and innovation
        in the culinary world.
      </p>
      <ul className="space-y-2 text-gray-700 list-disc pl-5">
        <li><span className="font-semibold">1990:</span> Best New Restaurant Award</li>
        <li><span className="font-semibold">2005:</span> Culinary Excellence Recognition</li>
        <li><span className="font-semibold">2015:</span> Community Choice Award</li>
        <li><span className="font-semibold">2022:</span> Sustainability & Innovation Honor</li>
      </ul>
    </div>
  </div>
</section>

{/* Our Vision Section */}
<section className="w-full bg-red-50 py-20 px-4 md:px-0 flex flex-col items-center justify-center">
  <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Left: Content */}
    <div className="grid gap-4 content-center order-2 md:order-1">
      <h2 className="text-3xl md:text-4xl font-bold text-black font-serif">
        Our Vision
      </h2>
      <p className="text-lg text-black max-w-lg">
        To be the region’s most loved restaurant, known for innovation,
        sustainability, and a commitment to community. We envision a future
        where every meal is a celebration and every guest leaves with a smile.
      </p>
    </div>

    {/* Right: Image */}
    <div className="w-full h-full order-1 md:order-2">
      <div className="w-full aspect-[16/10]">
        <img
          src={special2}
          alt="Our Vision"
          className="rounded-2xl shadow-lg w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>

{/* Achievements Timeline Section */}


      {/* Core Principles Section */}
      <section className="w-full bg-white py-20 px-4 md:px-0 flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-serif text-center">Core Principles</h2>
          <div className="grid  md:grid-cols-3 gap-10 w-full">
            {/* Principle 1 */}
            <div className="flex flex-col items-center bg-red-50 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-2 text-red-600">Hygiene & Safety</h3>
              <p className="text-gray-700 text-center">We maintain the highest standards of cleanliness and food safety, ensuring every meal is prepared in a safe and healthy environment.</p>
            </div>
            {/* Principle 2 */}
            <div className="flex flex-col items-center bg-red-50 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-2 text-red-600">Sustainability</h3>
              <p className="text-gray-700 text-center">We are committed to sustainable practices, from sourcing local ingredients to minimizing waste and supporting eco-friendly initiatives.</p>
            </div>
            {/* Principle 3 */}
            <div className="flex flex-col items-center bg-red-50 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-2 text-red-600">Integrity & Respect</h3>
              <p className="text-gray-700 text-center">We treat our guests, staff, and partners with honesty and respect, fostering a welcoming and inclusive community for all.</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full bg-red-50 py-16 px-4 md:px-0 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full mx-auto flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-red-600">Reserve Your Table or Order Online!</h2>
          <p className="text-lg text-center text-gray-700 mb-8">Experience gourmet dining, chef’s specials, and unforgettable evenings at Foodify. Book your table for a special night or order your favorite dishes for home delivery. We’re here to delight your taste buds—every day!</p>
          <div className="flex flex-row sm:flex-row gap-4">
            <a href="#reserve" className="px-10 py-4 rounded-full text-white font-semibold text-lg shadow-lg transition bg-red-600 hover:bg-red-700">Reserve a Table</a>
            <a href="#order" className="px-10 py-4 rounded-full text-red-600 font-semibold text-lg shadow-lg transition bg-white hover:bg-red-100 border border-red-600">Order Online</a>
          </div>
        </div>
      </section>
      
    </div>
  );
}