import Image from "next/image";
import {
  MapPin,
  Bed,
  Bath,
  Maximize,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
};

export default function SimilarProperties({
  currentId,
  properties,
}: {
  currentId: string;
  properties: Property[];
}) {
  const similar = properties.filter((p) => p.id !== currentId);

  return (
    <div className="mt-12 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-primary">Similar Properties</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Curated matches based on style and location.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-border hover:border-secondary hover:text-secondary transition-colors">
            <ChevronLeft size={15} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-border hover:border-secondary hover:text-secondary transition-colors">
            <ChevronRight size={15} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {similar.map((p) => (
          <div
            key={p.id}
            className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div className="relative h-44 w-full">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <h3 className="font-bold text-primary text-sm">{p.title}</h3>
                <span className="text-sm font-bold text-secondary shrink-0">
                  {p.price}
                </span>
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <MapPin size={11} /> {p.location}
              </p>
              <div className="flex items-center gap-3 text-muted-foreground text-xs mt-1">
                <span className="flex items-center gap-1">
                  <Bed size={12} /> {p.beds}
                </span>
                <span className="flex items-center gap-1">
                  <Bath size={12} /> {p.baths}
                </span>
                <span className="flex items-center gap-1">
                  <Maximize size={12} /> {p.sqft}
                </span>
              </div>
              <Link
                href={`/browse/${p.id}`}
                className="text-xs font-medium text-secondary hover:underline mt-1"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
