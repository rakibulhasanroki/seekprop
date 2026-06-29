import { MapPin, Bed, Bath, Maximize } from "lucide-react";

type Property = {
  badge?: string;
  title: string;
  location: string;
  price: string;
  estimate: string;
  beds: number;
  baths: number;
  sqft: string;
  type: string;
};

export default function PropertyInfo({ property }: { property: Property }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div>
          {property.badge && (
            <span className="text-xs font-medium text-secondary-foreground bg-secondary px-3 py-1 rounded-full">
              {property.badge}
            </span>
          )}
          <h1 className="text-3xl font-bold text-primary mt-3">
            {property.title}
          </h1>
          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
            <MapPin size={13} /> {property.location}
          </p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-2xl font-bold text-secondary">{property.price}</p>
          <p className="text-xs text-muted-foreground mt-1">
            Est. {property.estimate}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-2">
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">
            Type
          </p>
          <p className="text-sm font-semibold text-primary mt-1">
            {property.type}
          </p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">
            Beds
          </p>
          <p className="text-sm font-semibold text-primary mt-1 flex items-center gap-1">
            <Bed size={14} /> {property.beds} Bedrooms
          </p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">
            Baths
          </p>
          <p className="text-sm font-semibold text-primary mt-1 flex items-center gap-1">
            <Bath size={14} /> {property.baths} Bathrooms
          </p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">
            Sqft
          </p>
          <p className="text-sm font-semibold text-primary mt-1 flex items-center gap-1">
            <Maximize size={14} /> {property.sqft} sq ft
          </p>
        </div>
      </div>
    </div>
  );
}
