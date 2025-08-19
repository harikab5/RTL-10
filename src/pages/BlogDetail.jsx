import React from "react";
import feature1 from "../assets/feature1.webp"; 
import feature2 from "../assets/feature2.jpg"; 
import feature3 from "../assets/feature3.png"; 
import { useParams, Link } from "react-router-dom";

export default function BlogDetail() {
  // Theme state synced with Header
  
const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "light";
      setTheme(storedTheme);

      const handleThemeChange = () => {
        const newTheme = localStorage.getItem("theme") || "light";
        setTheme(newTheme);
      };

      window.addEventListener("theme-changed", handleThemeChange);
      window.addEventListener("storage", handleThemeChange);

      return () => {
        window.removeEventListener("theme-changed", handleThemeChange);
        window.removeEventListener("storage", handleThemeChange);
      };
    }
  }, []);
  const { id } = useParams();

  // Example blog data
  const blogs = [
  {
    id: "1",
    title: "Fresh & Quality Ingredients",
    image: feature1,
    intro:
      "Every dish we prepare starts with the finest, handpicked ingredients. We believe that freshness is the secret to authentic taste, which is why we source daily and prioritize quality over everything else.",
    sections: [
      {
        heading: "Farm to Table",
        content:
          "We partner with trusted farmers and suppliers to bring you seasonal produce that ensures both freshness and sustainability. Each vegetable, fruit, and herb is carefully chosen to enhance the flavor of our dishes. By sourcing directly from farms, we minimize middlemen, ensuring higher quality and fairer prices. This farm-to-table philosophy helps us support local communities while delivering nutritious food. You can truly taste the difference when your meals are made from fresh, locally grown ingredients. It’s our way of bringing the best of nature straight to your plate."
      },
      {
        heading: "Meats & Seafood",
        content:
          "Our meats are sourced from responsible farms, ensuring tenderness, quality, and ethical practices. Fresh seafood is delivered daily, bringing authentic coastal flavors to your plate. We strictly avoid frozen or chemically treated options, so you enjoy natural flavors and rich nutrition. Every cut of meat is inspected and prepared to maintain juiciness and taste. Our seafood selections undergo rigorous checks to ensure safety and freshness. When you dine with us, you can trust that every bite of protein is wholesome, flavorful, and responsibly sourced."
      },
      {
        heading: "Healthy Choices",
        content:
          "We balance taste with nutrition, so every meal nourishes your body without compromising on flavor. From gluten-free to low-carb options, our menu caters to a variety of dietary needs. Our chefs work with nutritionists to design meals that are wholesome and energizing. We also reduce excess oil, sodium, and sugar in our recipes without losing authentic taste. You’ll always find a range of healthy alternatives on our menu, perfect for everyday dining. Eating well has never been this satisfying or delicious."
      },
      {
        heading: "Spices & Herbs",
        content:
          "A blend of authentic spices and fresh herbs creates the soul of our food. From aromatic basil to fiery chili, every flavor note is intentional and balanced. We grind many of our spices in-house to preserve their natural oils and freshness. Herbs are picked daily to enhance both taste and aroma. Our chefs experiment with spice blends to give each dish a unique yet authentic character. The result is a flavor experience that excites your senses and keeps you coming back for more."
      },
      {
        heading: "Chef’s Selection",
        content:
          "Our chefs carefully curate each recipe, ensuring authenticity while adding a signature twist. They combine years of culinary expertise with modern techniques to surprise your taste buds. Signature sauces, marinades, and toppings are designed to elevate traditional recipes. Every dish goes through multiple tastings before it reaches your plate. Seasonal specials are added regularly to keep the menu exciting and dynamic. This thoughtful process guarantees that every meal is crafted with passion and perfection."
      },
      {
        heading: "Customer Favorites",
        content:
          "Signature dishes crafted with these premium ingredients have become favorites among our regulars, proving that quality speaks for itself. Many of our recipes are inspired by customer feedback and tailored to suit popular tastes. Dishes like our signature biryani, grilled platters, and fresh salads remain bestsellers year-round. We also introduce limited-time offers based on trending flavors to keep things fresh. Each favorite dish is refined continuously to maintain its reputation. When customers return for the same meal again and again, we know we’re doing it right."
      },
      {
        heading: "Our Promise",
        content:
          "We guarantee meals made with love, care, and only the best ingredients—because you deserve nothing less. Our sourcing and cooking processes are transparent, so you can trust what goes into your food. We constantly evaluate our quality standards to meet and exceed customer expectations. Hygiene and safety are always prioritized, from the kitchen to your delivery bag. Every order is a reflection of our commitment to excellence. With us, you don’t just get food—you get a promise of freshness, taste, and trust."
      },
    ],
  },
  {
    id: "2",
    title: "Fast & Reliable Delivery",
    image: feature2,
    intro:
      "We know you’re hungry, and we value your time. Our delivery system ensures your order reaches you hot, fresh, and on time—every time.",
    sections: [
      {
        heading: "Smart Tracking",
        content:
          "You’ll always know where your food is, thanks to our real-time delivery tracking system. The moment your order is placed, you can follow its preparation, dispatch, and arrival. Our app provides live updates so you’re never left wondering. Tracking also helps you plan your time better, whether it’s for a lunch break or family dinner. Transparency builds trust, and we make sure you’re informed every step of the way. It’s delivery made smarter, just for you."
      },
      {
        heading: "Hot & Fresh Guarantee",
        content:
          "Orders are packed in insulated containers, ensuring meals arrive just as if they were served in our restaurant. Heat retention technology keeps food warm without compromising its taste or texture. Cold dishes like salads and desserts are packed separately to maintain freshness. We also monitor packaging standards regularly to ensure consistency. This guarantee is our way of showing that we respect your dining experience. When you open the box, it should feel like you’re sitting at our table."
      },
      {
        heading: "Wider Reach",
        content:
          "Our delivery partners cover more locations than ever before, making it easier for you to enjoy your favorite meals. Whether you live in the heart of the city or on the outskirts, we strive to deliver wherever you are. We continue expanding our network so no one misses out. With strategic delivery hubs, your food doesn’t travel far, ensuring freshness. This extended reach makes us one of the most reliable services around. Wherever you are, we bring happiness to your doorstep."
      },
      {
        heading: "Lightning Speed",
        content:
          "On average, orders are delivered in under 30 minutes—perfect for quick lunches or family dinners. Our system optimizes routes using smart algorithms, reducing delivery time. We also train our partners to ensure safe yet efficient travel. Emergencies like traffic delays are communicated instantly through updates. This speed doesn’t mean compromising on safety or quality. We simply know that when hunger strikes, time matters most."
      },
      {
        heading: "Safe & Hygienic",
        content:
          "All our deliveries follow strict hygiene protocols to keep you safe and worry-free. Our staff undergoes regular health checks and safety training. Food is sealed in tamper-proof packaging to avoid contamination. Delivery bags are sanitized multiple times a day for extra safety. We also maintain contactless delivery options for your peace of mind. With us, cleanliness is not an option—it’s a guarantee."
      },
      {
        heading: "Flexible Scheduling",
        content:
          "Plan ahead by scheduling your delivery for later in the day or even the next day. Our system allows you to choose the time that works best for you. This is ideal for busy professionals, family gatherings, or planned events. You won’t have to worry about last-minute hassles. Even pre-orders get the same attention to quality and freshness. We make sure your meal is ready exactly when you want it."
      },
      {
        heading: "Customer Support",
        content:
          "Our 24/7 support ensures that if anything goes wrong, we fix it immediately. Whether it’s a missing item, late delivery, or technical issue, help is just a call away. Our team is trained to resolve queries quickly and politely. Feedback is taken seriously and used to improve our service. We believe customer care is just as important as the food itself. With round-the-clock support, you’ll always feel valued and heard."
      },
    ],
  },
  {
    id: "3",
    title: "Wide Variety of Cuisines",
    image: feature3,
    intro:
      "Why stick to one flavor when you can explore them all? From local favorites to global delicacies, we serve a menu that satisfies every craving.",
    sections: [
      {
        heading: "Local Favorites",
        content:
          "We celebrate traditional recipes that remind you of home while keeping them fresh and exciting. From classic curries to regional snacks, we honor culinary traditions. Our chefs research authentic cooking methods to maintain cultural accuracy. Local dishes are also adapted slightly for modern tastes, keeping them balanced. This way, every bite feels nostalgic yet refreshing. We bring the warmth of home cooking to your dining table."
      },
      {
        heading: "Global Delicacies",
        content:
          "From Italian pasta to Asian stir-fry, our chefs bring authentic international flavors to your table. Each recipe is studied carefully to preserve its cultural roots. Ingredients are imported or locally sourced to match global standards. Our goal is to give you the joy of traveling through food. These dishes let you explore the world without leaving your seat. Every meal is a passport to a new culinary adventure."
      },
      {
        heading: "Fusion Specials",
        content:
          "Our kitchen experiments with bold combinations, creating unique dishes that you won’t find elsewhere. Fusion allows us to mix the best of different cuisines into one plate. Chefs balance flavors creatively to surprise your taste buds. Signature fusion dishes are often limited-time specials, keeping things exciting. Customers love the thrill of trying something new and unexpected. Innovation is at the heart of our menu, and fusion is where it shines."
      },
      {
        heading: "Vegetarian Options",
        content:
          "A wide selection of vegetarian and vegan meals ensures that everyone finds something they love. We use plant-based proteins and fresh produce to create hearty meals. Each dish is designed to be as flavorful and satisfying as its non-veg counterpart. We also experiment with new vegetarian recipes inspired by global cuisines. Vegan desserts and dairy-free options add even more variety. With us, vegetarian dining is never boring—it’s a celebration."
      },
      {
        heading: "Seasonal Menus",
        content:
          "We introduce limited-time seasonal dishes, so there’s always something new to try. Seasonal produce is used at its peak freshness, ensuring better flavor. These menus celebrate local festivals, holidays, and changing weather. From summer coolers to winter warm meals, there’s always variety. Seasonal items also allow our chefs to experiment with creative recipes. Each season brings a fresh twist to your dining experience."
      },
      {
        heading: "Family Meals",
        content:
          "Big portions and family-style platters make dining together easier and more joyful. Sharing meals is part of our food philosophy, bringing people closer. Family combos are curated to suit different tastes at the table. We also offer kid-friendly dishes so no one feels left out. Whether it’s a celebration or a casual dinner, family meals fit every occasion. Food tastes better when enjoyed together, and we make sure of it."
      },
      {
        heading: "Something for Everyone",
        content:
          "Whether it’s a late-night snack, a healthy breakfast, or a festive dinner, our variety has you covered. The menu is designed to cater to every age group and lifestyle. From light bites to indulgent feasts, there’s no shortage of choices. We keep expanding the menu to match evolving customer preferences. Every dish is freshly prepared, regardless of size or time. With us, you’ll never run out of delicious options."
      },
    ],
  },
];

  // Find blog by id
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className={`text-center py-20 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
        <h2 className="text-2xl font-bold">Blog Not Found</h2>
        <Link to="/blog" className="text-red-500 underline mt-4 block">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className={theme === "dark" ? "pt-20 min-h-screen bg-black text-white" : "pt-20 min-h-screen bg-white text-black"}>
      {/* Back Link */}
      <Link to="/blog" className="text-red-500 underline mt-4 block">
        Back to Blogs
      </Link>

      {/* Blog Hero */}
      <section className="relative w-full h-[80vh] flex items-center justify-center">
        <img src={blog.image} alt={blog.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </section>

      {/* Blog Content */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">{blog.title}</h1>
        <p className={`text-lg md:text-xl max-w-5xl text-center mx-auto mb-12 ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`}>
          {blog.intro}
        </p>

        {blog.sections.map((sec, index) => {
          // Generate slug id from heading
          const sectionId = sec.heading.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

          return (
            <div key={index} id={sectionId} className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#ef4444" }}>
                {sec.heading}
              </h2>
              <p className={`leading-relaxed ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
                {sec.content}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
