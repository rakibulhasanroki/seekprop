import { Heart, Bed, Bath, Maximize } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const properties = [
  {
    id: 1,
    badge: "New Construction",
    price: "$4,250,000",
    location: "Upper West Side, NYC",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    image: "/f1.png",
  },
  {
    id: 2,
    badge: null,
    price: "$12,800,000",
    location: "Malibu Coast, CA",
    beds: 6,
    baths: 7,
    sqft: "8,500",
    image: "/f2.png",
  },
  {
    id: 3,
    badge: "Just Listed",
    price: "$2,150,000",
    location: "Richmond, London",
    beds: 5,
    baths: 4,
    sqft: "4,100",
    image: "/f3.png",
  },
  {
    id: 4,
    badge: "Just Listed",
    price: "$2,150,000",
    location: "Richmond, London",
    beds: 5,
    baths: 4,
    sqft: "4,100",
    image: "/f1.png",
  },
];

export default function FeaturedProperties() {
  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-9/12 ">
        <div className="flex items-start justify-between mb-8 flex-col md:flex-row">
          <div>
            <h2 className="text-2xl font-bold text-primary">
              Featured Properties
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              Handpicked listings that define modern{" "}
              <span className="text-secondary italic">living.</span>
            </p>
          </div>
          <Link
            href="/listings"
            className="text-secondary text-sm font-medium hover:underline flex items-center gap-1 mt-1"
          >
            Explore all listings →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6 lg:gap-2 xl:gap-6 ">
          {properties.map((p) => (
            <div
              key={p.id}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={p.image}
                  alt={p.location}
                  fill
                  priority
                  className="object-cover"
                />
                {p.badge && (
                  <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                )}
              </div>

              <div className="p-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    {p.price}
                  </span>
                  <button className="text-muted-foreground hover:text-secondary transition-colors">
                    <Heart size={18} />
                  </button>
                </div>

                <p className="text-secondary text-sm font-medium -mt-2">
                  {p.location}
                </p>

                <div className="flex items-center gap-4  text-muted-foreground text-xs">
                  <span className="flex items-center gap-1">
                    <Bed size={13} /> {p.beds} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath size={13} /> {p.baths} Baths
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize size={13} /> {p.sqft} sqft
                  </span>
                </div>

                <button className="cursor-pointer w-full mt-1 py-2 rounded-xl border border-secondary text-secondary text-sm font-medium hover:bg-secondary hover:text-secondary-foreground transition-all duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
