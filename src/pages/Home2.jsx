import React from "react";
import chef1 from "../assets/chef1.jpg";
import chef2 from "../assets/chef2.jpg";
import chef3 from "../assets/chef3.jpg";
import home2hero from "../assets/home2hero.mp4";
import menu1 from "../assets/menu1.jpg";
import menu2 from "../assets/menu2.jpg";
import menu3 from "../assets/menu3.jpg";
import menu4 from "../assets/menu4.jpg";
import special1 from "../assets/special1.jpg";
import special2 from "../assets/special2.jpg";
import special3 from "../assets/special3.jpg";
import special4 from "../assets/special4.jpg";
import buffet1 from "../assets/buffet1.jpg";
import buffet2 from "../assets/buffet2.jpg";
import heritage from "../assets/heritage.jpg";

export default function Home2() {
	return (
		<div className="flex flex-col min-h-screen">
			
			{/* Hero Section */}
			<section className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden">
				{/* Background Video for Hero Only */}
				<video
					className="absolute inset-0 w-full h-full object-cover z-0 brightness-110"
					src={home2hero}
					autoPlay
					loop
					muted
					playsInline
				/>
				{/* Overlay for readability */}
				<div className="absolute inset-0 bg-black/50 z-10" />
				<div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
					<h1 className="text-5xl md:text-6xl font-serif font-bold text-white text-center mb-4 drop-shadow-lg">
						Experience Gourmet Dining at Foodify
					</h1>
					<p className="text-lg md:text-xl text-white/90 text-center mb-8 max-w-2xl drop-shadow">
						Welcome to Foodify, where every meal is a celebration! Enjoy chef-crafted dishes, a cozy dine-in atmosphere, and lightning-fast delivery. Discover our diverse menu, special offers, and exceptional service—crafted just for you.
					</p>
					<button className="relative border border-white text-white px-8 py-3 rounded-lg text-lg font-serif flex items-center group bg-transparent hover:bg-white/10 transition">
						Read More
						<span className="ml-3 w-8 h-0.5 bg-white block group-hover:bg-red-500 transition-all"></span>
					</button>
				</div>
			</section>

			{/* Chef’s Specials Gallery Section */}
			<section className="w-full bg-white py-16 px-4 md:px-0 flex flex-col items-center justify-center">
  <div className="max-w-6xl w-full mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 font-serif text-center">
      Chef’s Specials Gallery
    </h2>

    <div className="grid  sm:grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { img: special1, title: "Special 1" },
        { img: special2, title: "Special 2" },
        { img: special3, title: "Special 3" },
        { img: special4, title: "Special 4" },
      ].map((dish, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
        >
          <img
            src={dish.img}
            alt={dish.title}
            className="w-full h-80 object-cover"
          />
          <div className="p-4 text-center">
            <span className="text-gray-900 text-lg font-serif">{dish.title}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


			{/* Heritage & Legacy Section */}
           <section className="w-full bg-red-50 py-20 px-4 md:px-0 flex flex-col items-center justify-center">
  <div className="max-w-6xl w-full mx-auto grid  md:grid-cols-2 gap-10 items-center">
    
    {/* Left: Heritage Image */}
    <div className="w-full h-full min-h-[340px]">
      <img
        src={heritage}
        alt="Heritage & Legacy"
        className="rounded-2xl shadow-lg w-full h-full min-h-[260px] object-cover"
      />
    </div>

    {/* Right: Content */}
    <div className="grid gap-4 h-full min-h-[340px] content-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
        Heritage & Legacy
      </h2>
      <p className="text-lg text-gray-700 max-w-lg">
        Our restaurant's journey began decades ago, rooted in a passion for
        authentic flavors and heartfelt hospitality. From humble beginnings to a
        celebrated culinary destination, our legacy is built on tradition,
        innovation, and a commitment to excellence. Every dish tells a story—of
        family, culture, and the joy of sharing great food.
      </p>
      <ul className="space-y-2 text-gray-700">
        <li>Established in 1985, serving generations of food lovers</li>
        <li>Family-owned and operated with pride</li>
        <li>Honoring traditional recipes with a modern twist</li>
        <li>Recognized for excellence in taste and service</li>
      </ul>
      <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition">
        Learn More
      </button>
    </div>

  </div>
</section>


			{/* Meet Our Professionals Section */}
			<section className="w-full bg-white py-20 px-4 md:px-0 flex flex-col items-center justify-center">
				<h2 className="text-5xl md:text-6xl font-serif font-bold text-black text-center mb-16">Meet Our Professionals</h2>
				<div className="max-w-6xl w-full mx-auto grid  md:grid-cols-3 gap-12">
					{/* Chef 1 */}
					<div className="flex flex-col items-center">
						<img src={chef1} alt="Gordon Ramsay" className="w-full h-96 object-cover rounded-lg shadow-lg mb-6" />
						<h3 className="text-2xl font-serif font-semibold text-black mb-1">Gordon Ramsay</h3>
						<span className="text-lg text-black font-serif mb-2">Chef</span>
					</div>
					{/* Chef 2 with social icons */}
					<div className="flex flex-col items-center relative">
						<img src={chef3} alt="Dominique Crenn" className="w-full h-96 object-cover rounded-lg shadow-lg mb-6" />
						{/* Social icons */}
						<div className="absolute left-4 top-10 flex flex-col gap-4 z-10">
							<a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-twitter"></i></a>
							<a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-facebook"></i></a>
							<a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-instagram"></i></a>
							<a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-whatsapp"></i></a>
						</div>
						<h3 className="text-2xl font-serif font-semibold text-black mb-1">Dominique Crenn</h3>
						<span className="text-lg text-black font-serif mb-2">Chef</span>
					</div>
					{/* Chef 3 */}
					<div className="flex flex-col items-center">
						<img src={chef2} alt="Auguste Escoffier" className="w-full h-96 object-cover rounded-lg shadow-lg mb-6" />
						<h3 className="text-2xl font-serif font-semibold text-black mb-1">Auguste Escoffier</h3>
						<span className="text-lg text-black font-serif mb-2">Chef</span>
					</div>
				</div>
			</section>

			{/* Live Events & Dining Nights Section */}
			<section className="w-full bg-red-50 py-20 px-4 md:px-0 flex flex-col items-center justify-center">
  <div className="max-w-6xl w-full mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 font-serif text-center">
      Live Events & Dining Nights
    </h2>

    <div className="grid  md:grid-cols-3 gap-8 items-stretch">
      {/* Left Card: Music Night */}
      <div className="grid gap-4 bg-white rounded-lg shadow-lg p-6 text-center">
        <img
          src={buffet1}
          alt="Music Night"
          className="w-full h-56 object-cover rounded"
        />
        <span className="text-lg font-serif font-semibold text-gray-900">
          Music Nights
        </span>
      </div>

      {/* Middle Card: Info */}
      <div className="grid gap-4 bg-red-50 rounded-lg shadow-lg p-8 border-2 border-red-200 text-center">
        <h3 className="text-2xl font-serif font-bold text-red-600">
          Unforgettable Evenings
        </h3>
        <p className="text-gray-700">
          Join us for vibrant live music nights, themed buffets, and exclusive
          dining experiences. Our events bring together great food,
          entertainment, and a lively atmosphere for all ages.
        </p>
        <ul className="text-gray-700 space-y-2">
          <li>Weekly live music performances</li>
          <li>Rotating buffet themes</li>
          <li>Special guest appearances</li>
          <li>Family-friendly fun</li>
        </ul>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition">
          See Upcoming Events
        </button>
      </div>

      {/* Right Card: Buffet Theme */}
      <div className="grid gap-4 bg-white rounded-lg shadow-lg p-6 text-center">
        <img
          src={buffet2}
          alt="Buffet Theme"
          className="w-full h-56 object-cover rounded"
        />
        <span className="text-lg font-serif font-semibold text-gray-900">
          Buffet Themes
        </span>
      </div>
    </div>
  </div>
</section>

			
			{/* Meet Our Professionals Section */}
			
			{/* CTA Section */}
			<section className="w-full bg-white py-16 px-4 md:px-0 flex flex-col items-center justify-center">
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