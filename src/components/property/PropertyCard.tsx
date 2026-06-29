import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Maximize } from "lucide-react";

type PropertyCardProps = {
  badge?: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  id: string;
  image: string;
};

export default function PropertyCard({
  badge,
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  id,
  image,
}: PropertyCardProps) {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-200 flex">
      <div className="relative w-64 shrink-0">
        <Image src={image} alt={title} fill className="object-cover" />
        {badge && (
          <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col justify-between flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-bold text-primary text-base">{title}</h3>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <MapPin size={11} /> {location}
            </p>
          </div>
          <span className="text-base font-bold text-secondary shrink-0">
            {price}
          </span>
        </div>

        <div className="flex items-center gap-5 text-muted-foreground text-xs mt-4">
          <span className="flex items-center gap-1">
            <Bed size={13} /> {beds} Beds
          </span>
          <span className="flex items-center gap-1">
            <Bath size={13} /> {baths} Baths
          </span>
          <span className="flex items-center gap-1">
            <Maximize size={13} /> {sqft} sqft
          </span>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">Listing ID: {id}</p>
          <Link
            href={`/property/${id}`}
            className="text-xs font-medium text-secondary hover:underline flex items-center gap-1"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
