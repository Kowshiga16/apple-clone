import Apple_watch from "../images/Apple_watch.jpg";
import MacBookAirBanner from "../images/MacBookAirBanner.jpg";

function Images() {
  return (
    <>
      <section className="relative">
        {/* Apple Watch Section */}
        <div className="relative">
          {/* Image */}
          <img
            src={Apple_watch}
            alt="apple-watch"
            className="w-full h-auto relative z-0"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-20">
            <h3 className="text-3xl font-semibold mb-3">Apple Watch</h3>
            <p className="text-lg mb-5">
              Live healthier. Train better. Stay connected.
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
                Learn more
              </button>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-blue-100 transition">
                Shop iPhone
              </button>
            </div>
          </div>
        </div>

        {/* MacBook Air Section */}
        <div className="relative mt-10">
          {/* Image */}
          <img
            src={MacBookAirBanner}
            alt="macbook-air"
            className="w-full h-auto relative z-0"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-20">
            <h3 className="text-3xl font-semibold mb-3">MacBook Air</h3>
            <p className="text-lg mb-5">
              Sky blue colour. Sky high performance with M4.
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
                Learn more
              </button>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-blue-100 transition">
                Buy
              </button>
            </div>

            <p
              className="text-xl font-semibold mt-4
              bg-gradient-to-r from-[#A75CE0] via-[#E96DAB] to-[#EC6175]
              bg-clip-text text-transparent"
            >
              Built for Apple Intelligence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Images;
