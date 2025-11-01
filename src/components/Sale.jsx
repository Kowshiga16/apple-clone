
import React from "react";

// Import your images (make sure paths are correct)
import Airpod4 from "../images/Airpod4.jpeg";
import IpadPro from "../images/IpadPro.jpg";
import IpadAir  from "../images/IpadAir.jpg";
import MacBookPro from "../images/MacBookPro.jpg";
import Offer from "../images/Offer.webp";
import Trade from "../images/Trade.jpeg";

const products = [
  {
    title: "AirPods 4",
    subtitle: "Rebuilt from the sound up.",
    img: Airpod4,
  },
  {
    title: "iPad Pro",
    subtitle: "Unbelievably thin. Incredibly powerful.",
    img: IpadPro,
  },
  {
    title: "iPad Air",
    subtitle: "Now supercharged by the M3 chip.",
    img: IpadAir,
  },
  {
    title: "MacBook Pro",
    subtitle: "More power. More performance.",
    img: MacBookPro,
  },
  {
    title: "Offer for Students",
    subtitle: "Get AirPods free with Mac.",
    img: Offer,
  },
  {
    title: "Apple Trade-In",
    subtitle: "Upgrade and save. It’s that easy.",
    img: Trade,
  },
];

export default function Sale() {
  return (
    <section className="grid md:grid-cols-2 gap-6 mt-8 px-6">
      {products.map((item, index) => (
        <div
          key={index}
          className={`relative rounded-2xl overflow-hidden ${
            index >= 3 ? "bg-[#B2B2B2]" : ""
          }`}
        >
          {/* Product Image */}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Text Overlay */}
          <div
            className={`absolute inset-0 flex flex-col justify-center items-center text-center ${
              index >= 3 ? "text-slate-100" : "text-white"
            } bg-black/30`}
          >
            <h2 className="text-3xl font-semibold drop-shadow-md ">
              {item.title}
            </h2>
            <p className="mt-2 text-lg drop-shadow-sm">{item.subtitle}</p>

            {/* Buttons */}
            <div className="flex gap-4 mt-5">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition">
                Learn more
              </button>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-blue-100 transition">
                Buy
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
