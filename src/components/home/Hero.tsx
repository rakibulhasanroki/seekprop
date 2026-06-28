import Image from "next/image";
import { MapPin, Home, BadgeDollarSign } from "lucide-react";

function Hero() {
  return (
    <section className="relative h-[92vh] w-full">
      <Image
        src="/hero.png"
        alt="hero"
        fill
        priority
        className="object-cover object-top  "
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="max-w-9/12 mx-auto flex justify-center h-full">
        <div className="relative z-10 flex h-full items-center justify-center text-white flex-col max-w-6xl mx-auto">
          <div className="text-center space-y-6  max-w-5xl ">
            <h1 className="text-4xl lg:text-6xl text-center font-bold ">
              Discover Your Next Property with Confidence
            </h1>
            <p className="max-w-xl mx-auto">
              Experience informed luxury. Our curated selection of premium
              estates across the globe ensures your next move is your best move.
            </p>
          </div>
          <div className="w-full bg-white px-4 py-4 rounded-2xl lg:rounded-full mt-6 ">
            <div className="z-10 text-black flex justify-between  lg:flex-row flex-col items-start lg:items-center gap-4">
              <div className="flex items-center gap-2 text-gray-500">
                {" "}
                <MapPin size={16} /> <span className="">Location</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Home size={16} />
                <select
                  name="property"
                  id="prop"
                  className="outline-none cursor-pointer"
                >
                  <option value="property">Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="house">House</option>
                  <option value="land">Land</option>
                  <option value="office">Office</option>
                </select>
              </div>
              <div className="flex gap-2 items-center text-gray-500">
                <BadgeDollarSign size={16} />
                <span>Price Range</span>
              </div>
              <button className="bg-secondary px-4 py-2 rounded-full text-white cursor-pointer w-full lg:w-auto ">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
