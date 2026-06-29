import { properties } from "@/lib/data/properties";
import Pagination from "./Pagination";
import PropertyCard from "./PropertyCard";

export default function PropertyList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-primary">
          Luxury Listings in California
        </h2>
        <p className="text-xs text-muted-foreground">348 Properties Found</p>
      </div>

      <div className="flex flex-col gap-4">
        {properties.map((p) => (
          <PropertyCard
            key={p.id}
            id={p.id}
            badge={p.badge}
            title={p.title}
            location={p.location}
            price={p.price}
            beds={p.beds}
            baths={p.baths}
            sqft={p.sqft}
            image={p.image}
          />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button className="px-6 py-2.5 rounded-full border border-border text-sm text-primary font-medium hover:border-secondary hover:text-secondary transition-colors">
          Load More Properties
        </button>
      </div>

      <Pagination />
    </div>
  );
}
